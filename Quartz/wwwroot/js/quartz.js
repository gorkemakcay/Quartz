function loadQuartz() {
    // #region Elements of Quartz
    select = new ol.interaction.Select({
        condition: ol.events.condition.click,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgb(0, 152, 254, 0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: '#0098FE',
                width: 2
            })
        })
    });

    var selectPM = new ol.interaction.Select({
        condition: ol.events.condition.pointerMove,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgb(0, 152, 254, 0.1)'
            }),
            stroke: new ol.style.Stroke({
                color: '#0098FE',
                width: 1
            })
        })
    });

    translate = new ol.interaction.Translate({
        features: select.getFeatures(),
        //condition: ol.events.condition.platformModifierKeyOnly
    });

    projection = new ol.proj.Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: extent,
    });

    rasterLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
    });

    source = new ol.source.Vector({
        format: new ol.format.GeoJSON()
    });

    ////////////////////////////////////////////////// trial area

    ////////////////////////////////////////////////// trial area

    vectorLayer = new ol.layer.Vector({
        source: source
    });

    view = new ol.View({
        projection: projection,
        center: ol.extent.getCenter(extent),
        zoom: 2,
        maxZoom: 5,
        minZoom: 2,
        extent: viewExtent
        //extent: [-1200, -778, 3120, 2134]
    });

    imageUrl = "http://quartz.portalacbi.com/home/get?path=";
    imageUrl = imageUrl + currentDrawing.Path;

    imageLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: imageUrl,
            projection: projection,
            imageExtent: extent,
        }),
    });

    map = new ol.Map({
        interactions: ol.interaction.defaults({ doubleClickZoom: false }).extend([select, selectPM, translate]),
        layers: [imageLayer, rasterLayer, vectorLayer],
        target: 'map',
        view: view
    });

    map.on('dblclick', function (evt) {
        map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {

            if (feature.get("Type") == "item") {
                $.ajax({
                    type: "GET",
                    url: itemController.Item.Detail,
                    data: { itemId: feature.get("Id") },
                    success: function (response) {
                        lastClickedItem = jQuery.parseJSON(response);
                        clickedOrCreated = "clicked";
                        $("#itemModal").modal('show');
                        loadItemModalHomePage();
                    }
                });
            }
            if (feature.get("Type") == "link") {
                $.ajax({
                    type: "GET",
                    url: linkController.Link.Detail,
                    data: { linkId: feature.get("Id") },
                    success: function (response) {
                        lastClickedLink = jQuery.parseJSON(response);
                        clickedOrCreated = "clicked";

                        if (lastClickedLink.CurrentDrawingId == 0 || lastClickedLink.CurrentDrawingId == null) {
                            $("#linkModal").modal('show');

                            if (lastClickedLink.CurrentDrawingId != 0) {
                                $("#createdLinkMode").attr("hidden", "");
                                $("#clickedLinkMode").removeAttr("hidden");
                            }
                            else {
                                $("#createdLinkMode").removeAttr("hidden");
                                $("#clickedLinkMode").attr("hidden", "");
                            }

                            addLinkUploadDrawingArea = false;
                            document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
                            document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
                            $("#addLinkSelectDrawing").removeAttr("disabled");

                            loadLinkModal();
                        }
                        else {
                            currentQuartzLink = lastClickedLink;

                            $.ajax({
                                type: "GET",
                                url: linkController.DrawingFeatures.GetVectorSource,
                                data: { quartzLinkId: currentQuartzLink.Id },
                                success: function (response) {
                                    currentDrawingFeatures = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: fileController.Detail,
                                        data: { fileId: currentQuartzLink.CurrentDrawingId },
                                        success: function (response) {
                                            currentDrawing = jQuery.parseJSON(response);
                                            $.ajax({
                                                type: "GET",
                                                url: linkController.QuartzPartialView,
                                                success: function (html) {
                                                    $("#main").children().remove();
                                                    $("#main").html(html);

                                                    loadQuartz();

                                                    crumbCount++;
                                                    $(".breadCrumb").append(
                                                        $('<li>', {
                                                            text: currentQuartzLink.TagNo,
                                                            value: crumbCount,
                                                            onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " ," + crumbCount + ")",
                                                            class: "crumb"
                                                        })
                                                    );
                                                },
                                                error: function (error) {
                                                    alert("error!");
                                                    console.log(error.responseText);
                                                }
                                            });
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                        }
                    }
                });
            }
        });
    });
    // #endregion

    // #region Loading Spinner
    map.on('loadstart', function () {
        map.getTargetElement().classList.add('spinner');
    });
    map.on('loadend', function () {
        map.getTargetElement().classList.remove('spinner');
    });
    // #endregion

    // #region Tıklanan Feature'a ait buton'un işaretlenmesi
    map.on('click', function (evt) {


        this.forEachFeatureAtPixel(evt.pixel, function (f) {
            selectedFeature = f;
            $("#" + lastClickedButtonId + "").removeAttr('style', 'background: #808080');
            var buttonId = selectedFeature.get('Id');
            lastClickedButtonId = buttonId;
            $("#" + buttonId + "").attr('style', 'background: #808080');
        });
    });
    // #endregion

    // #region Get Features From Db & Print Screen
    // db'deki "QuartzLinkDrawingFeature" tablosunun "Features" sütununun değerlerini aldım ve bu bilgilerle feature'ları oluşturdum
    if (currentDrawingFeatures != 0) {
        var featuresFromDb = jQuery.parseJSON(currentDrawingFeatures.Features);
        featureCollection[''] = featuresFromDb;
        featureCollection[''].features.forEach(function (featureJson) {

            var feature = new ol.Feature({
                geometry: (new ol.geom.Polygon(featureJson.geometry.coordinates)).transform('EPSG:4326', 'EPSG:3857')
            });

            feature.setProperties({ 'LonLat': featureJson.properties.LonLat });
            feature.setProperties({ 'Id': featureJson.properties.Id });
            feature.setProperties({ 'Name': featureJson.properties.Name });
            feature.setProperties({ 'Type': featureJson.properties.Type });

            var printStyle = new ol.style.Style({
                text: new ol.style.Text({
                    text: 'Hello',
                    scale: 1.3,
                    fill: new ol.style.Fill({
                        color: '#000000'
                    }),
                    overflow: true
                })
            })

            //feature.setStyle(printStyle);
            // Add feature to the vector source
            source.addFeature(feature);
        });
    }
    // #endregion

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// [FUNCTIONS]

    createList();

    function addInteraction() {
        if (typeSelect.value !== 'None') {
            document.getElementById('main').style.cursor = 'crosshair';
            if (typeSelect.value === 'BoxItem' || typeSelect.value === 'BoxLink') {
                map.removeInteraction(draw);

                draw = new ol.interaction.Draw({
                    source: source,
                    type: 'Circle',
                    geometryFunction: ol.interaction.Draw.createBox()
                });
                map.addInteraction(draw);
            }
            if (typeSelect.value === 'PolygonItem' || typeSelect.value === 'PolygonLink') {
                map.removeInteraction(draw);

                draw = new ol.interaction.Draw({
                    source: source,
                    type: 'Polygon'
                });
                map.addInteraction(draw);
            }

            // #region Feature "drawend" Function   
            draw.on("drawend", function (evt) {
                // #region Create LonLat For Feature's Set LonLat Property
                selectedFeature = evt.feature;
                var featuresExtent = selectedFeature.getGeometry().getExtent();
                var featuresGetCenter = ol.extent.getCenter(featuresExtent);
                featuresLonLat = ol.proj.toLonLat(featuresGetCenter);
                // #endregion

                // #region Button'a shapeButton.setAttribute('data-bs-target', '#itemModal/linkModal'); çalıştıktan sonra "typeSelect.value" atanması için
                function timeOut() {
                    typeSelect.value = 'None';
                    map.removeInteraction(draw);
                }
                setTimeout(timeOut, 100);
                // #endregion

                // #region Add QuartzLink to DB
                if (typeSelect.value == 'BoxLink' || typeSelect.value == 'PolygonLink') {
                    linkIdCount++;
                    linkId = "LINK" + Math.floor(Math.random() * 1000);
                    shapeId = linkId;

                    var linkModel = {
                        TagNo: shapeId,
                        ShowLabel: true,
                        CreatedDate: getDate(),
                        CreatedBy: "Görkem", // [TAMAMLANMADI]
                        MainQuartzLinkId: currentQuartzLink.Id,
                        CurrentDrawingId: 0,
                        Hierarchy: currentQuartzLink.Hierarchy + ',' + currentQuartzLink.Id
                    };

                    $.ajax({
                        type: "POST",
                        url: linkController.Link.Add,
                        data: { model: linkModel },
                        success: function (response) {
                            lastCreatedLink = jQuery.parseJSON(response);
                            clickedOrCreated = "created";
                            getVectorSource();

                            // #region Feature Set Properties
                            evt.feature.setProperties({ 'LonLat': featuresLonLat });
                            evt.feature.setProperties({ 'Id': lastCreatedLink.Id });
                            evt.feature.setProperties({ 'Name': lastCreatedLink.TagNo });
                            evt.feature.setProperties({ 'Type': "link" });
                            evt.feature.setProperties({ 'Hierarchy': currentQuartzLink.Hierarchy + ',' + currentQuartzLink.Id });

                            setTimeout(addDrawingFeaturesJSON, 100);

                            // #endregion

                            // #region Link Modal Settings
                            $("#clickedLinkMode").attr("hidden", "");
                            $("#createdLinkMode").removeAttr("hidden");
                            addLinkUploadDrawingAreaCreatedMode = false;
                            document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
                            document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
                            $("#addLinkSelectDrawing").removeAttr("disabled");

                            $("#linkModal").modal('show');
                            $("#addLinkTagNo").val(lastCreatedLink.TagNo);
                            $("#linkShowLabel").prop('checked', true);

                            loadLinkModal();
                            // #endregion

                            // #region Create Drawing Settings
                            var drawingSettingsAddModel = {
                                DrawingNo: lastCreatedLink.TagNo,
                                QuartzLinkId: lastCreatedLink.Id
                            }
                            $.ajax({
                                type: "POST",
                                url: linkController.DrawingSettings.Add,
                                data: { model: drawingSettingsAddModel },
                                success: function (response) {
                                    rModel = jQuery.parseJSON(response);
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            // #endregion

                            toast("Link Add Successful!");
                        },
                        error: function (error) {
                            alert("error: link doesn't saved!");
                        }
                    });
                }
                // #endregion

                // #region Add QuartzItem to DB
                if (typeSelect.value == 'BoxItem' || typeSelect.value == 'PolygonItem') {
                    itemIdCount++;
                    itemId = "ITEM" + Math.floor(Math.random() * 1000);
                    shapeId = itemId;

                    var itemModel = {
                        TagNo: shapeId,
                        CreatedDate: getDate(),
                        CreatedBy: "Görkem", // [TAMAMLANMADI]
                        QuartzLinkId: currentQuartzLink.Id
                    };

                    $.ajax({
                        type: "POST",
                        url: itemController.Item.Add,
                        data: { model: itemModel },
                        success: function (response) {
                            lastCreatedItem = jQuery.parseJSON(response);
                            clickedOrCreated = "created";
                            //isInformationCreated = false;

                            var itemInformationAddModel = {
                                TagNo: lastCreatedItem.TagNo,
                                QuartzItemId: lastCreatedItem.Id
                            }
                            $.ajax({
                                type: "POST",
                                url: itemController.Information.Add,
                                data: { model: itemInformationAddModel },
                                success: function (response) {
                                    rModel = jQuery.parseJSON(response);
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            isInformationCreated = true;
                            getVectorSource();

                            // #region Feature Set Properties
                            evt.feature.setProperties({ 'LonLat': featuresLonLat });
                            evt.feature.setProperties({ 'Id': lastCreatedItem.Id });
                            evt.feature.setProperties({ 'Name': lastCreatedItem.TagNo });
                            evt.feature.setProperties({ 'Type': "item" });

                            setTimeout(addDrawingFeaturesJSON, 100);
                            // #endregion

                            // #region Item Modal Settings
                            $("#itemModal").modal('show');
                            loadItemModalHomePage();
                            // #endregion

                            toast("Item Add Successful!");
                        },
                        error: function (error) {
                            alert("error: item doesn't saved!");
                        }
                    });
                }
                // #endregion

                function waitFunc() {
                    $("#shapeArea").children().remove();
                    createList();
                    // Load Spinner Yap! [TAMAMLANMADI]
                }
                setTimeout(waitFunc, 100);
                document.getElementById('main').style.cursor = 'grab';
            });
            // #endregion

        }
        else {
            document.getElementById('main').style.cursor = 'grab';
            map.removeInteraction(draw);
        }
    }

    function addDrawingFeaturesJSON() {
        // list all current features's details (geoJSON format)

        if (currentDrawingFeatures == 0) {
            var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
                dataProjection: 'EPSG:4326',
                featureProjection: 'EPSG:3857'
            });

            var drawingFeaturesAddModel = {
                Features: json,
                QuartzLinkId: currentQuartzLink.Id
            };

            $.ajax({
                type: "POST",
                url: linkController.DrawingFeatures.Add,
                data: { model: drawingFeaturesAddModel },
                success: function (response) {
                    rModel = jQuery.parseJSON(response);
                    getVectorSource();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
        else updateDrawingFeatures();

    }

    //function updateDrawingFeatures() {
    //    var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
    //        dataProjection: 'EPSG:4326',
    //        featureProjection: 'EPSG:3857'
    //    });

    //    var drawingFeaturesModel = {
    //        Id: currentDrawingFeatures.Id,
    //        Features: json,
    //        QuartzLinkId: currentQuartzLink.Id
    //    };

    //    $.ajax({
    //        type: "POST",
    //        url: linkController.DrawingFeatures.Update,
    //        data: { model: drawingFeaturesModel },
    //        success: function (response) {
    //            rModel = jQuery.parseJSON(response);
    //            getVectorSource();
    //        },
    //        error: function (error) {
    //            alert("error!");
    //            console.log(error.responseText);
    //        }
    //    });
    //}

    // #region Handle tpyeSelect Change Event
    typeSelect.onchange = function () {
        isValueDelete = false;
        if (typeSelect.value === 'Delete') {
            isValueDelete = true;
            map.on('click', function (evt) {
                this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                    //console.log(feature, layer);
                    if (isValueDelete) {
                        if (confirm("Are you sure?") == true) {
                            var deleteElement = document.getElementById(feature.getId());
                            deleteElement.remove();
                            layer.getSource().removeFeature(feature);
                        }
                        else typeSelect.value = 'None';
                    }
                });
            });
            map.removeInteraction(draw);
        }
        else addInteraction();
    };
    // #endregion

    // #region Feature "translateend" Event Function
    translate.on('translateend', function (evt) {
        var featuresExtent = selectedFeature.getGeometry().getExtent();
        var featuresGetCenter = ol.extent.getCenter(featuresExtent);
        featuresLonLat = ol.proj.toLonLat(featuresGetCenter);
        selectedFeature.setProperties({ 'LonLat': featuresLonLat });

        updateDrawingFeatures();
    });
    // #endregion
}