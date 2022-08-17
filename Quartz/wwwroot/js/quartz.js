function loadQuartz() {
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
            //if (featureJson.properties.LonLat == "0.015490411906637962,0.006267433435397152") {
            //    alert("works!");
            //}
            //else alert(featureJson.properties.LonLat);

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
                selectedFeature = evt.feature;
                var featuresExtent = selectedFeature.getGeometry().getExtent();
                var featuresGetCenter = ol.extent.getCenter(featuresExtent);
                featuresLonLat = ol.proj.toLonLat(featuresGetCenter);

                // Button'a shapeButton.setAttribute('data-bs-target', '#itemModal/linkModal'); çalıştıktan sonra "typeSelect.value" atanaması için
                function timeOut() {
                    typeSelect.value = 'None';
                    map.removeInteraction(draw);
                }
                setTimeout(timeOut, 1 / 1000);

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
                            linkOrItem = "link";
                            getVectorSource();

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
                            linkOrItem = "item";
                            isInformationCreated = false;
                            getVectorSource();

                            $("#itemModal").modal('show');
                            //loadInformationPage();
                            loadItemModalHomePage();
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

    // #region Feature "addfeature" Function
    source.on('addfeature', function (evt) {
        function wait() {
            var feature;
            if (linkOrItem == "link")
                feature = lastCreatedLink;
            if (linkOrItem == "item")
                feature = lastCreatedItem;

            // Çizilen Box/Polygon'un style özelliklerini kişiselleştirdim
            var style = new ol.style.Style({
                stroke: new ol.style.Stroke({ color: '#000' }),
                text: new ol.style.Text({
                    text: feature.TagNo,
                    font: '20px Calibri,sans-serif',
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 0, 0)',
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#000',
                        width: 1
                    })
                })
            });

            // Çizilen Box/Polygon'a ID tanımladım
            //evt.feature.setId(feature.Id);

            // Çizilen Box/Polygon'a text tanımladım
            evt.feature.setStyle(style);

            evt.feature.setProperties({ 'LonLat': featuresLonLat });
            evt.feature.setProperties({ 'Id': feature.Id });
            evt.feature.setProperties({ 'Name': feature.TagNo });
            evt.feature.setProperties({ 'Type': linkOrItem });
            addedFeatures.push(evt.feature);

            setTimeout(addDrawingFeaturesJSON, 100);
        }
        setTimeout(wait, 200);
    });
    // #endregion

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