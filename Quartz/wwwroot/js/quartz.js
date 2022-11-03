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
            }),
            text: new ol.style.Text({
                text: 'Selected!',
                scale: 1.3,
                overflow: true
            })
        })
    });

    selectPM = new ol.interaction.Select({
        condition: ol.events.condition.pointerMove,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgb(0, 152, 254, 0.1)'
            }),
            stroke: new ol.style.Stroke({
                color: '#0098FE',
                width: 1
            }),
            text: new ol.style.Text({
                text: 'Double Click* to open!',
                scale: 1.3,
                overflow: true
            })
        })
    });

    translate = new ol.interaction.Translate({
        features: select.getFeatures(),
        //condition: ol.events.condition.platformModifierKeyOnly
    });

    modify = new ol.interaction.Modify({
        features: select.getFeatures(),
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

    //imageUrl = "http://localhost:5001/home/get?path=";
    imageUrl = resetImageUrl;
    imageUrl = imageUrl + currentDrawing.Path;

    imageLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: imageUrl,
            projection: projection,
            imageExtent: extent,
        }),
    });

    map = new ol.Map({
        interactions: ol.interaction.defaults({ doubleClickZoom: false }).extend([]),
        layers: [imageLayer, rasterLayer, vectorLayer],
        target: 'map',
        view: view
    });

    ////////////////////////////////////////////////// trial area



    ////////////////////////////////////////////////// trial area

    map.on('dblclick', function (evt) {
        if (typeSelect.value != 'MoveAndModify') {
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
        }
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

            var buttonId = selectedFeature.get('Id');
            var buttonType = selectedFeature.get('Type');

            if (buttonId != null && buttonType != null) {

                $("#" + lastClickedButtonId + "").removeAttr('style', 'background: #808080');
                lastClickedButtonId = buttonId;

                if (buttonType == "item") {
                    var buttons = $("[name='item']");
                }

                if (buttonType == "link") {
                    var buttons = $("[name='link']");
                }

                function wait() {
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i].getAttribute('Id') == buttonId) {
                            buttons[i].setAttribute('style', 'background: #808080');
                            return;
                        }
                    }
                }
                setTimeout(wait, 100);
            }
        });
    });
    // #endregion

    addFeatureToSource();

    interactionSettings();

    ///////////////////////////////////////////////////////////////////////////////////////////////////////// [FUNCTIONS]

    createList();

    function interactionSettings() {
        if (typeSelect.value == 'None') {
            map.removeInteraction(draw);
            map.removeInteraction(translate);
            map.removeInteraction(modify);

            map.addInteraction(select);
            map.addInteraction(selectPM);
        }

        if (typeSelect.value == 'BoxItem' || typeSelect.value == 'BoxLink' || typeSelect.value == 'PolygonItem' || typeSelect.value == 'PolygonLink') {
            map.removeInteraction(selectPM);
            map.removeInteraction(select);
            map.removeInteraction(translate);
            map.removeInteraction(modify);
            map.removeInteraction(draw);

            if (typeSelect.value == 'BoxItem' || typeSelect.value == 'BoxLink') {
                draw = new ol.interaction.Draw({
                    source: source,
                    type: 'Circle',
                    geometryFunction: ol.interaction.Draw.createBox()
                });
            }

            if (typeSelect.value == 'PolygonItem' || typeSelect.value == 'PolygonLink') {
                draw = new ol.interaction.Draw({
                    source: source,
                    type: 'Polygon'
                });
            }

            map.addInteraction(draw);

            // #region Feature "drawend" Function   
            draw.on("drawend", function (evt) {
                map.addInteraction(select);

                // #region Create LonLat For Feature's Set LonLat Property
                selectedFeature = evt.feature;
                var featuresExtent = selectedFeature.getGeometry().getExtent();
                var featuresGetCenter = ol.extent.getCenter(featuresExtent);
                featuresLonLat = ol.proj.toLonLat(featuresGetCenter);
                // #endregion

                // #region Button'a shapeButton.setAttribute('data-bs-target', '#itemModal/linkModal'); çalıştıktan sonra "typeSelect.value" atanması için
                //function timeOut() {
                //    typeSelect.value = 'None';
                //    map.removeInteraction(draw);
                //    map.removeInteraction(translate);
                //    map.removeInteraction(modify);

                //    map.addInteraction(select);
                //    map.addInteraction(selectPM);
                //}
                //setTimeout(timeOut, 100);
                // #endregion

                // #region Add QuartzLink to DB
                if (typeSelect.value == 'BoxLink' || typeSelect.value == 'PolygonLink') {
                    linkIdCount++;
                    linkId = "LINK" + Math.floor(Math.random() * 1000);
                    shapeId = linkId;

                    var linkModel = {
                        TagNo: shapeId,
                        ShowLabel: false,
                        CreatedDate: getDate(),
                        CreatedBy: loginUserInfo.FullName,
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
                            evt.feature.setProperties({ 'ShowLabel': lastCreatedLink.ShowLabel });

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
                            $("#linkShowLabel").prop('checked', false);

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
                        CreatedBy: loginUserInfo.FullName,
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
                    typeSelect.value = 'None';
                    map.removeInteraction(draw);
                    map.removeInteraction(translate);
                    map.removeInteraction(modify);

                    map.addInteraction(select);
                    map.addInteraction(selectPM);

                    //$("#shapeArea").children().remove();
                    createList();
                    // Load Spinner Yap! [TAMAMLANMADI]
                }
                setTimeout(waitFunc, 100);
                document.getElementById('main').style.cursor = 'grab';
            });
            // #endregion
        }

        if (typeSelect.value == 'MoveAndModify') {
            map.removeInteraction(draw);
            map.removeInteraction(selectPM);

            map.addInteraction(select);
            map.addInteraction(translate);
            map.addInteraction(modify);
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

    translate.on('translateend', function (evt) {
        var featuresExtent = selectedFeature.getGeometry().getExtent();
        var featuresGetCenter = ol.extent.getCenter(featuresExtent);
        featuresLonLat = ol.proj.toLonLat(featuresGetCenter);
        selectedFeature.setProperties({ 'LonLat': featuresLonLat });

        updateDrawingFeatures();
    });

    modify.on('modifyend', function (evt) {
        var featuresExtent = selectedFeature.getGeometry().getExtent();
        var featuresGetCenter = ol.extent.getCenter(featuresExtent);
        featuresLonLat = ol.proj.toLonLat(featuresGetCenter);
        selectedFeature.setProperties({ 'LonLat': featuresLonLat });

        updateDrawingFeatures();
    });

    $("#type").on('change', function () {
        interactionSettings();
    });

    loadQuartzSuccess = true;
}

function refreshQuartz() {
    $.ajax({
        type: "GET",
        url: linkController.QuartzPartialView,
        success: function (html) {
            createList();

            //$("#main").children().remove();
            //$("#main").html(html);
            //loadQuartz();
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}