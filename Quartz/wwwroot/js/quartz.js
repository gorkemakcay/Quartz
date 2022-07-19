function loadQuartz() {
    // #region Variables
    const typeSelect = document.getElementById('type');
    var allShapes = [];
    let draw; // global so we can remove it later
    var isValueDelete = false;
    var shapeId = "";
    var itemIdCount = 0;
    var itemId = "item" + itemIdCount;
    var linkIdCount = 0;
    var linkId = "link" + linkIdCount;
    var featureCollection = [];
    var extent = [0, 0, 1920, 1356];
    // #endregion

    // #region Elements of Quartz
    var select = new ol.interaction.Select();

    var translate = new ol.interaction.Translate({
        features: select.getFeatures(),
        condition: ol.events.condition.platformModifierKeyOnly
    });

    var projection = new ol.proj.Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: extent,
    });

    var rasterLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
    });

    var source = new ol.source.Vector({
        format: new ol.format.GeoJSON()
    });

    var vectorLayer = new ol.layer.Vector({
        source: source
    });

    var view = new ol.View({
        projection: projection,
        center: ol.extent.getCenter(extent),
        zoom: 0,
        maxZoom: 5,
        extent: [0, 0, 1920, 1356]
    });

    var imageUrl = "http://localhost:5001/home/get?path="; // [TAMAMLANMADI]
    imageUrl = imageUrl + currentDrawing.Path;

    var imageLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: imageUrl,
            projection: projection,
            imageExtent: extent,
        }),
    });

    var map = new ol.Map({
        interactions: ol.interaction.defaults({ doubleClickZoom: false }).extend([select, translate]),
        layers: [imageLayer, rasterLayer, vectorLayer],
        target: 'map',
        view: view
    });

    var translate = new ol.interaction.Translate({
        features: select.getFeatures()
    });
    map.addInteraction(translate);
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
        var currentFeatureCount = 0;
        var featuresFromDb = jQuery.parseJSON(currentDrawingFeatures.Features);
        featureCollection[''] = featuresFromDb;
        featureCollection[''].features.forEach(function (featureJson) {
            currentFeatureCount++;

            var feature = new ol.Feature({
                geometry: (new ol.geom.Polygon(featureJson.geometry.coordinates)).transform('EPSG:4326', 'EPSG:3857'),
                gorkem: currentFeatureCount // [TAMAMLANMADI]
            });

            // Add feature to the vector source
            source.addFeature(feature);
        });
    }
    // #endregion
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// [FUNCTIONS]

    function addInteraction() {
        if (typeSelect.value !== 'None') {
            if (typeSelect.value === 'BoxItem' || typeSelect.value === 'BoxLink') {
                draw = new ol.interaction.Draw({
                    source: source,
                    type: 'Circle',
                    geometryFunction: ol.interaction.Draw.createBox()
                });
                map.addInteraction(draw);
            }
            if (typeSelect.value === 'PolygonItem' || typeSelect.value === 'PolygonLink') {
                draw = new ol.interaction.Draw({
                    source: source,
                    type: 'Polygon'
                });
                map.addInteraction(draw);
            }

            // çizim bittiğinde çalışan fonksiyon
            draw.on("drawend", function (evt) {
                // çizimin koordinatlarını "coords" değişkeninde tutuyorum
                var feature = evt.feature;
                var coords = feature.getGeometry().getCoordinates()[0];
                coords = coords.toString();

                function timeOut() {
                    typeSelect.value = 'None';
                    map.removeInteraction(draw);    // shapeButton.setAttribute('data-bs-target', '#itemModal/linkModal'); çalıştıktan sonra typeSelect.value atanaması için
                }
                setTimeout(timeOut, 1 / 1000);

                // #region DateTime Now
                var dt = new Date();
                var fromDateTime = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2) + "T" + ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2);
                // #endregion

                // add link
                if (typeSelect.value == 'BoxLink' || typeSelect.value == 'PolygonLink') {
                    linkIdCount++;
                    linkId = "link" + linkIdCount;
                    shapeId = linkId;

                    var linkModel = {
                        TagNo: shapeId,
                        ShowLabel: true, // [TAMAMLANMADI]
                        CreatedDate: fromDateTime,
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
                            // [TAMAMLANMADI]
                        },
                        error: function (error) {
                            alert("error: link doesn't saved!");
                        }
                    });
                    $("#linkModal").modal('show');
                }

                // add item
                if (typeSelect.value == 'BoxItem' || typeSelect.value == 'PolygonItem') {
                    itemIdCount++;
                    itemId = "item" + itemIdCount;
                    shapeId = itemId;

                    var itemModel = {
                        TagNo: shapeId,
                        CreatedDate: fromDateTime,
                        CreatedBy: "Görkem", // [TAMAMLANMADI]
                        QuartzLinkId: currentQuartzLink.Id
                    };

                    $.ajax({
                        type: "POST",
                        url: "QuartzItem/AddItemJSON",
                        data: { model: itemModel },
                        success: function (response) {
                            lastCreatedItem = jQuery.parseJSON(response);
                            // [TAMAMLANMADI]
                        },
                        error: function (error) {
                            alert("error: item doesn't saved!");
                        }
                    });
                    $("#itemModal").modal('show');
                }

            });

            setTimeout(addDrawingFeaturesJSON, 100);
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
                fill: new ol.style.Fill({
                    color: '#000',
                }),
                stroke: new ol.style.Stroke({
                    color: '#fff',
                    width: 2
                })
            })
        });
        evt.feature.setProperties({ 'deneme': "123" }); // [TAMAMLANMADI]
        // Çizilen Box/Polygon'a ID tanımladım
        //evt.feature.setId(shapeId);

        // Çizilen Box/Polygon'a text tanımladım
        evt.feature.setStyle(style);

        // Çizilen Box/Polygon'u tüm Çizimlerin olduğu listeye ekledim
        allShapes.push(evt.feature);

        // Çizilen Box/Polygon'un butonunu oluşturdum.
        var shapeButton = document.createElement('button');

        // Butonun Attr'larını ekledim
        shapeButton.setAttribute('id', shapeId);
        shapeButton.setAttribute('type', 'button');
        shapeButton.setAttribute('style', 'border: none; border-radius: 0px;width: 100%; background: #dadcde');
        shapeButton.setAttribute('data-bs-toggle', 'modal');
        shapeButton.setAttribute('class', 'btn btn-primary');

        if (typeSelect.value === 'BoxItem' || typeSelect.value === 'PolygonItem')
            shapeButton.setAttribute('data-bs-target', '#itemModal');
        else if (typeSelect.value === 'BoxLink' || typeSelect.value === 'PolygonLink')
            shapeButton.setAttribute('data-bs-target', '#linkModal');

        // Butonun text'ini ekledim
        shapeButton.textContent = shapeId;

        // Butonu sayfaya ekledim
        var shapeArea = document.getElementById('shapeArea');
        shapeArea.appendChild(shapeButton);

    });
    // #endregion

    // #region Handle Tpye Select Change Event
    typeSelect.onchange = function () {
        isValueDelete = false;
        if (typeSelect.value === 'Delete') {
            isValueDelete = true;
            map.on('click', function (evt) {
                this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
                    console.log(feature, layer);
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