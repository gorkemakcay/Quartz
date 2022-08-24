﻿function loadQuartz() {
    // #region Elements of Quartz
    select = new ol.interaction.Select({
        condition: ol.events.condition.click
    });

    var selectPM = new ol.interaction.Select({
        condition: ol.events.condition.pointerMove
    });

    var sdsd = select.getFeatures();

    translate = new ol.interaction.Translate({
        features: sdsd,
        condition: ol.events.condition.platformModifierKeyOnly
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
    // #region selectInteraction usage:
    // selectInteraction.getFeatures().clear();
    // selectInteraction.getFeatures().push(feature);
    //function highlightFeature(feat) {
    //    selectInteraction.getFeatures().push(feat);
    //    selectInteraction.dispatchEvent({
    //        type: 'select',
    //        selected: [feat],
    //        deselected: []
    //    });
    //}
    // #endregion
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
        extent: [-1060, -678, 3080, 2034] // sol > alt > sağ > üst
    });

    imageUrl = "http://localhost:5001/home/get?path="; // [TAMAMLANMADI]
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
                    url: "QuartzItem/GetItemDetailJSON",
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
                    url: "QuartzLink/GetLinkDetailJSON",
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
                                url: "QuartzLink/GetVectorSource",
                                data: { quartzLinkId: currentQuartzLink.Id },
                                success: function (response) {
                                    currentDrawingFeatures = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: "FileUpload/GetFileDetail",
                                        data: { fileId: currentQuartzLink.CurrentDrawingId },
                                        success: function (response) {
                                            currentDrawing = jQuery.parseJSON(response);
                                            $.ajax({
                                                type: "GET",
                                                url: "QuartzLink/GetQuartz",
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

    //---------------------------- Feature Hover ----------------------------
    //var selected = null;

    //var selectStyle = new ol.style.Style({
    //    fill: new ol.style.Fill({
    //        color: 'rgba(255, 255, 0, 0)',
    //    }),
    //    stroke: new ol.style.Stroke({
    //        color: '#000',
    //        width: 2,
    //    }),
    //});

    //map.on('pointermove', function (e) {
    //    if (selected != null) {
    //        selected.setStyle(undefined);
    //        selected = null;
    //    }

    //    map.forEachFeatureAtPixel(e.pixel, function (f) {
    //        selected = f;
    //        //selectStyle.getFill().setColor(f.get('COLOR'));
    //        f.setStyle(selectStyle);
    //        return true;
    //    });

    //});
    //---------------------------- Feature Hover ----------------------------

    // Bunlar gerekli değil sanırım!
    //map.addInteraction(translate);
    //map.addInteraction(select);

    //var translate = new ol.interaction.Translate({
    //    features: select.getFeatures()
    //});

    // #endregion

    // #region Loading Spinner
    map.on('loadstart', function () {
        map.getTargetElement().classList.add('spinner');
    });
    map.on('loadend', function () {
        map.getTargetElement().classList.remove('spinner');
    });
    // #endregion

    map.on('click', function (evt) {
        this.forEachFeatureAtPixel(evt.pixel, function (f) {
            selectedFeature = f;
        });
    });

    // #region Get Features From Db & Print Screen
    // db'deki "QuartzLinkDrawingFeature" tablosunun "Features" sütununun değerlerini aldım ve bu bilgilerle feature'ları oluşturdum
    if (currentDrawingFeatures != 0) {
        var featuresFromDb = jQuery.parseJSON(currentDrawingFeatures.Features);
        featureCollection[''] = featuresFromDb;
        featureCollection[''].features.forEach(function (featureJson) {

            var feature = new ol.Feature({
                geometry: (new ol.geom.Polygon(featureJson.geometry.coordinates)).transform('EPSG:4326', 'EPSG:3857')
            });

            feature.setId(featureJson.Id);
            feature.setProperties({ 'LonLat': featureJson.properties.LonLat });
            feature.setProperties({ 'Id': featureJson.properties.Id });
            feature.setProperties({ 'Name': featureJson.properties.Name });
            feature.setProperties({ 'Type': featureJson.properties.Type });

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
                        CurrentDrawingId: 0
                    };

                    $.ajax({
                        type: "POST",
                        url: "QuartzLink/AddLinkJSON",
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
                                url: "QuartzLink/AddDrawingSettingsJSON",
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
                        url: "QuartzItem/AddItemJSON",
                        data: { model: itemModel },
                        success: function (response) {
                            lastCreatedItem = jQuery.parseJSON(response);
                            clickedOrCreated = "created";
                            isInformationCreated = false;
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
        var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        });

        if (currentDrawingFeatures == 0) {
            var drawingFeaturesAddModel = {
                Features: json,
                QuartzLinkId: currentQuartzLink.Id
            };

            $.ajax({
                type: "POST",
                url: "QuartzLink/AddDrawingFeaturesJSON",
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
        else {
            var drawingFeaturesUpdateModel = {
                Id: currentDrawingFeatures.Id,
                Features: json,
                QuartzLinkId: currentQuartzLink.Id
            };

            $.ajax({
                type: "POST",
                url: "QuartzLink/UpdateDrawingFeaturesJSON",
                data: { model: drawingFeaturesUpdateModel },
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

    }

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

        var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
            dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
        });

        var drawingFeaturesModel = {
            Id: currentDrawingFeatures.Id,
            Features: json,
            QuartzLinkId: currentQuartzLink.Id
        };

        $.ajax({
            type: "POST",
            url: "QuartzLink/UpdateDrawingFeaturesJSON",
            data: { model: drawingFeaturesModel },
            success: function (response) {
                rModel = jQuery.parseJSON(response);
                getVectorSource();
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    });
    // #endregion
}