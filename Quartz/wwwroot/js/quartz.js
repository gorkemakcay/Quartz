function loadQuartz() {
    // #region Variables

    // #endregion

    // #region Elements of Quartz
    select = new ol.interaction.Select();

    translate = new ol.interaction.Translate({
        features: select.getFeatures(),
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
        zoom: 0,
        maxZoom: 5,
        extent: [0, 0, 1920, 1356]
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
        interactions: ol.interaction.defaults({ doubleClickZoom: false }).extend([select, translate]),
        layers: [imageLayer, rasterLayer, vectorLayer],
        target: 'map',
        view: view
    });

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

    // #region Get Features From Db & Print Screen
    // db'deki "QuartzLinkDrawingFeature" tablosunun "Features" sütununun değerlerini aldım ve bu bilgilerle feature'ları oluşturdum
    if (currentDrawingFeatures != 0) {
        //var currentFeatureCount = 0;
        var featuresFromDb = jQuery.parseJSON(currentDrawingFeatures.Features);
        featureCollection[''] = featuresFromDb;
        featureCollection[''].features.forEach(function (featureJson) {
            //currentFeatureCount++;

            var feature = new ol.Feature({
                geometry: (new ol.geom.Polygon(featureJson.geometry.coordinates)).transform('EPSG:4326', 'EPSG:3857'),
                //id: currentFeatureCount // [TAMAMLANMADI] Properties tanımlama
            });

            // Add feature to the vector source
            source.addFeature(feature);
        });
    }
    // #endregion

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// [FUNCTIONS]

    createList();
    // Load Spinner Yap! [TAMAMLANMADI]
    //function waitCreateList() {
    //    $(".linkButton").on('click', function () {
    //        lastClickedLinkButtonId = $(this).attr('id');
    //        clickedOrCreated = "clicked";
    //        $.ajax({
    //            type: "GET",
    //            url: "QuartzLink/GetLinkDetailJSON",
    //            data: { linkId: lastClickedLinkButtonId },
    //            success: function (response) {
    //                lastClickedLink = jQuery.parseJSON(response);
    //                loadLinkModal();
    //            },
    //            error: function (error) {
    //                alert("error!");
    //                console.log(error.responseText);
    //            }
    //        });
    //    });

    //    $(".itemButton").on('click', function () {
    //        lastClickedItemButtonId = $(this).attr('id');
    //        clickedOrCreated = "clicked";

    //        $.ajax({
    //            type: "GET",
    //            url: "QuartzItem/GetItemDetailJSON",
    //            data: { itemId: lastClickedItemButtonId },
    //            success: function (response) {
    //                lastClickedItem = jQuery.parseJSON(response);
    //                loadInformationPage();
    //                $("#itemModalSaveButton").removeAttr("hidden");
    //                $("#itemShowLabel").removeAttr("hidden");
    //                $("#showlabelSpan").removeAttr("hidden");
    //            },
    //            error: function (error) {
    //                alert("error!");
    //                console.log(error.responseText);
    //            }
    //        });
    //    });
    //}
    //setTimeout(waitCreateList, 100);

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
                // çizimin koordinatlarını "coords" değişkeninde tutuyorum (bu kısım kullanılmadı!)
                var feature = evt.feature;
                var coords = feature.getGeometry().getCoordinates()[0];
                coords = coords.toString();

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

                            //var drawingFeatureAddModel = {
                            //    QuartzLinkId: lastCreatedLink.Id
                            //}
                            //$.ajax({
                            //    type: "POST",
                            //    url: "QuartzLink/AddDrawingFeaturesJSON",
                            //    data: { model: drawingFeatureAddModel },
                            //    success: function (response) {
                            //        rModel = jQuery.parseJSON(response);
                            //    },
                            //    error: function (error) {
                            //        alert("error!");
                            //        console.log(error.responseText);
                            //    }
                            //});

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
                            isInformationCreated = false;

                            $("#itemModal").modal('show');
                            loadInformationPage();
                            toast("Item Add Successful!");
                        },
                        error: function (error) {
                            alert("error: item doesn't saved!");
                        }
                    });
                }
                // #endregion

                setTimeout(addDrawingFeaturesJSON, 100);
                document.getElementById('main').style.cursor = 'grab';
            });
            // #endregion

        }
        else {
            document.getElementById('main').style.cursor = 'grab';
            map.removeInteraction(draw);
        }
    }

    function getVectorSource() {
        $.get({
            url: 'QuartzLink/GetVectorSource',
            data: { quartzLinkId: currentQuartzLink.Id },
            success: function (response) {
                if (response != 0)
                    currentDrawingFeatures = jQuery.parseJSON(response);
                else
                    currentDrawingFeatures = 0;
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }

    function addDrawingFeaturesJSON() {
        // list all current features's details (geoJSON format)
        var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
            dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
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
        // Çizilen Box/Polygon'un style özelliklerini kişiselleştirdim
        var style = new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#000' }),
            text: new ol.style.Text({
                text: shapeId,
                font: '20px Calibri,sans-serif',
                //fill: new ol.style.Fill({
                //    color: '#000',
                //}),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        });
        //evt.feature.setProperties({ 'id': "1" }); // [TAMAMLANMADI]
        // Çizilen Box/Polygon'a ID tanımladım
        evt.feature.setId(Math.floor(Math.random() * 1000));
        //console.log(evt.feature.getId());
        //console.log(evt.feature.get('id'));
        //console.log(evt.feature);
        // Çizilen Box/Polygon'a text tanımladım
        evt.feature.setStyle(style);

        // Çizilen Box/Polygon'u tüm Çizimlerin olduğu listeye ekledim
        allShapes.push(evt.feature);

        function waitFunc() {
            $("#shapeArea").children().remove();
            createList();
            // Load Spinner Yap! [TAMAMLANMADI]
        }
        setTimeout(waitFunc, 100);

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