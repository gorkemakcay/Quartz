function loadQuartz() {
    //////////////////////////////////////////////////////////////////////////////////////////////// [OpenLayers]
    // Variables
    const typeSelect = document.getElementById('type');
    var allShapes = [];
    let draw; // global so we can remove it later
    var isValueDelete = false;
    var shapeId = "";
    var itemIdCount = 0;
    var itemId = "item" + itemIdCount;
    var linkIdCount = 0;
    var linkId = "link" + linkIdCount;

    var extent = [0, 0, 1024, 968];
    ////////////////////////////////////////////////////////////////////////////////////////////////

    var format = new ol.format.GeoJSON({ featureProjection: 'EPSG:3857' });

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

    var xxx = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -0.002152868942584418,
                                0.008328246554214047
                            ],
                            [
                                -0.0012288473727739085,
                                0.008328246554214047
                            ],
                            [
                                -0.0012288473727739085,
                                0.00926648382942119
                            ],
                            [
                                -0.002152868942584418,
                                0.00926648382942119
                            ],
                            [
                                -0.002152868942584418,
                                0.008328246554214047
                            ]
                        ]
                    ]
                },
                "properties": null,
                "id": "item1"
            }
        ]
    };

    // [TAMAMLANMADI] url'ye yalnızca websitesi adresi verilince çalışıyor
    var source = new ol.source.Vector({
        /*wrapX: false*/
        /*url: 'https://openlayers.org/data/vector/ecoregions.json',*/
        format: new ol.format.GeoJSON({
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }),
        //features: new ol.format.GeoJSON().readFeatures(xxx),
    });
    source.addFeatures(xxx);

    var vectorLayer = new ol.layer.Vector({
        source: source,
    });

    var view = new ol.View({
        projection: projection,
        center: ol.extent.getCenter(extent),
        zoom: 0,
        maxZoom: 4,
        extent: [-500, -300, 1524, 1268]
    });

    // [TAMAMLANMADI] url'ye yalnızca websitesi adresi verilince çalışıyor
    //var imageUrl = 'https://imgs.xkcd.com/comics/online_communities.png';
    //var imageUrl = 'https://media.wired.com/photos/5b8999943667562d3024c321/master/w_640,c_limit/trash2-01.jpg';
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
        interactions: ol.interaction.defaults().extend([select, translate]),
        layers: [imageLayer, rasterLayer, vectorLayer],
        target: 'map',
        view: view
    });

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

            draw.on("drawend", function (evt) {
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

                if (typeSelect.value == 'BoxLink' || typeSelect.value == 'PolygonLink') {
                    linkIdCount++;
                    linkId = "link" + linkIdCount;
                    shapeId = linkId;

                    var linkModel = {
                        TagNo: shapeId,
                        ShowLabel: true,
                        CreatedDate: fromDateTime,
                        CreatedBy: "Görkem", // [TAMAMLANMADI]
                        MainQuartzLinkId: quartzLinkId,
                        CurrentDrawingId: 0
                    };
                    $.ajax({
                        type: "POST",
                        url: "QuartzLink/AddLinkJSON",
                        data: { model: linkModel },
                        success: function (data) {
                            rModel = jQuery.parseJSON(data);
                        },
                        error: function (error) {
                            alert("error: item doesn't saved!");
                        }
                    });
                    $("#linkModal").modal('show');

                    var featureType = "any";

                    if (typeSelect.value == 'BoxLink')
                        featureType = "Box";
                    else if (typeSelect.value == 'PolygonLink')
                        featureType = "Polygon";

                    // list all current features's coordinates (geoJSON format)
                    var features = source.getFeatures();
                    var geoJson = format.writeFeatures(features);
                    //console.log(geoJson);

                    // list all current features's coordinates (geoJSON format)
                    var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
                        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
                    });
                    console.log(json);

                    var linkDrawingFeaturesModel = {
                        Name: shapeId,
                        Type: featureType,
                        Coords: json,
                        QuartzLinkId: quartzLinkId
                    };
                    $.ajax({ // [TAMAMLANMADI]
                        type: "POST",
                        url: "QuartzLink/AddDrawingFeaturesJSON",
                        data: { model: linkDrawingFeaturesModel },
                        success: function (result) {
                            rModel = jQuery.parseJSON(result);
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                }
                if (typeSelect.value == 'BoxItem' || typeSelect.value == 'PolygonItem') {
                    itemIdCount++;
                    itemId = "item" + itemIdCount;
                    shapeId = itemId;
                    $("#itemModal").modal('show');
                }
            });
        }
    }
    //
    // Çizim tamamlandıktan sonra çalışan fonksiyon
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
                    color: '#fff', width: 2,
                })
            })
        });


        //console.log(evt);

        // Çizilen Box/Polygon'a ID tanımladım
        evt.feature.setId(shapeId);
        // Çizilen Box/Polygon'a text tanımladım
        evt.feature.setStyle(style);
        // Çizilen Box/Polygon'u tüm Çizimlerin olduğu listeye ekledim
        allShapes.push(evt.feature);
        //console.log(allShapes);

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

        // [TAMAMLANMADI]
        var denemeFeature = new ol.Feature(evt.feature);
        console.log(denemeFeature);
        source.addFeatures(denemeFeature);
        console.log(source.getFeatures());
    });

    // Handle change event
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
}