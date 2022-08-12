$("#vbv").on('click', function () {
    var features = [];

    for (var i = 0; i < source.getFeatures().length; i++) {
        features.push(source.getFeatures()[i]);
        console.log(features[i]);
    }

});
$("#focusLastFeature").on('click', function () {
    //console.log(featureCollection[''].features[0].geometry.coordinates[0][0]);
    //console.log("x: " + map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
    view.animate({
        center: new ol.proj.fromLonLat(featuresLonLat),
        zoom: 4
    });
});


$("#getFeatures").on('click', function () {
    var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    });
    console.log(json);
});


$("#getCurrenFeature").on('click', function () {
    console.log(select);
});


