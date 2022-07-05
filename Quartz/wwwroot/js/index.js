//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////// [Variables]
////const typeSelect = document.getElementById('type');
////var allShapes = [];
////let draw; // global so we can remove it later                                                 
////var isValueDelete = false;
////var shapeId = "";
////var itemIdCount = 0;
////var itemId = "item" + itemIdCount;
////var linkIdCount = 0;
////var linkId = "link" + linkIdCount;

////const extent = [0, 0, 1024, 968];
////////////////////////////////////////////////////////////////////////////////////////////////////

////const select = new ol.interaction.Select();

////const translate = new ol.interaction.Translate({
////    features: select.getFeatures(),
////    condition: ol.events.condition.platformModifierKeyOnly
////});

////const projection = new ol.proj.Projection({
////    code: 'xkcd-image',
////    units: 'pixels',
////    extent: extent,
////});

////const rasterLayer = new ol.layer.Tile({
////    source: new ol.source.OSM(),
////});

////const source = new ol.source.Vector({ wrapX: false });

////const vectorLayer = new ol.layer.Vector({
////    source: source,
////});

////const view = new ol.View({
////    projection: projection,
////    center: ol.extent.getCenter(extent),
////    zoom: 0,
////    maxZoom: 4,
////    extent: [-500, -300, 1524, 1268]
////});

////const map = new ol.Map({
////    interactions: ol.interaction.defaults().extend([select, translate]),
////    layers: [
////        new ol.layer.Image({
////            source: new ol.source.ImageStatic({
////                url: 'https://imgs.xkcd.com/comics/online_communities.png',
////                projection: projection,
////                imageExtent: extent,
////            }),
////        }),
////        rasterLayer, vectorLayer
////    ],
////    target: 'map',
////    view: view
////});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// [FUNCTIONS]

////function addInteraction() {
////    if (typeSelect.value !== 'None') {
////        if (typeSelect.value === 'BoxItem' || typeSelect.value === 'BoxLink') {
////            draw = new ol.interaction.Draw({
////                source: source,
////                type: 'Circle',
////                geometryFunction: ol.interaction.Draw.createBox()
////            });
////            map.addInteraction(draw);
////        }
////        if (typeSelect.value === 'PolygonItem' || typeSelect.value === 'PolygonLink') {
////            draw = new ol.interaction.Draw({
////                source: source,
////                type: 'Polygon'
////            });
////            map.addInteraction(draw);
////        }

////        draw.on("drawend", function () {
////            function timeOut() {                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                   
////                typeSelect.value = 'None';      //                                                                                                                       //
////                map.removeInteraction(draw);    // shapeButton.setAttribute('data-bs-target', '#itemModal/linkModal'); çalıştıktan sonra typeSelect.value atanaması için //                   
////            }                                   //                                                                                                                       //                   
////            setTimeout(timeOut, 1 / 1000);      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                
////            if (typeSelect.value == 'BoxLink' || typeSelect.value == 'PolygonLink') {
////                var itemModel = {
////                    MemberId: 1,
////                    MemberOf: "main",
////                    Creator: "Görkem",
////                    TagName: shapeId,
////                    ShowLabel: true,
////                    SelectDrawing: "",
////                    CreatedDate: ""
////                };
////                $.ajax({
////                    type: "POST",
////                    url: 'Quartz/AddItemJSON',
////                    data: { model: itemModel },
////                    success: function (data) {
////                        alert("success!");
////                        rModel = jQuery.parseJSON(data);
////                        $("#addLinkTagNo").val(rModel.TagName);
////                    },
////                    error: function (error) {
////                        alert("error!");
////                    }
////                });
////                $("#linkModal").modal('show');
////            }
////            if (typeSelect.value == 'BoxItem' || typeSelect.value == 'PolygonItem') {
////                $("#itemModal").modal('show');
////            }
////        });

////        //else if (typeSelect.value == 'PolygonItem' || typeSelect.value == 'PolygonLink') {
////        //    draw = new ol.interaction.Draw({
////        //        source: source,
////        //        type: 'Polygon',
////        //    });
////        //    map.addInteraction(draw);

////        //    draw.on("drawend", function () {
////        //        function timeOut() {                 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                  
////        //            typeSelect.value = 'None';       //                                                                                                                       //                  
////        //            map.removeInteraction(draw);     // shapeButton.setAttribute('data-bs-target', '#itemModal/linkModal'); çalıştıktan sonra typeSelect.value atanaması için //                  
////        //        }                                    //                                                                                                                       //                  
////        //        setTimeout(timeOut, 1 / 1000);       ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
////        //        if (typeSelect.value == 'PolygonLink')
////        //            $("#linkModal").modal('show');
////        //        if (typeSelect.value == 'PolygonItem')
////        //            $("#itemModal").modal('show');
////        //    });
////        //}
////    }
////}
//////                                                                                                                                                                                                
////// Çizim tamamlandıktan sonra çalışan fonksiyon                                                                                                                                                   
////source.on('addfeature', function (evt) {
////    if (typeSelect.value === 'PolygonItem' || typeSelect.value === 'BoxItem') {
////        itemIdCount++;
////        itemId = "item" + itemIdCount;
////        shapeId = itemId;
////    }
////    else if (typeSelect.value === 'PolygonLink' || typeSelect.value === 'BoxLink') {
////        linkIdCount++;
////        linkId = "link" + linkIdCount;
////        shapeId = linkId;
////    }

////    // Çizilen Box/Polygon'un style özelliklerini kişiselleştirdim                                                                                                                                
////    var style = new ol.style.Style({
////        stroke: new ol.style.Stroke({ color: '#000' }),
////        text: new ol.style.Text({
////            text: shapeId,
////            font: '20px Calibri,sans-serif',
////            fill: new ol.style.Fill({
////                color: '#000',
////            }),
////            stroke: new ol.style.Stroke({
////                color: '#fff', width: 2,
////            })
////        })
////    });

////    console.log(evt);
////    // Çizilen Box/Polygon'a ID tanımladım                                                                                                                                                        
////    evt.feature.setId(shapeId);
////    // Çizilen Box/Polygon'a text tanımladım                                                                                                                                                      
////    evt.feature.setStyle(style);
////    // Çizilen Box/Polygon'u tüm Çizimlerin olduğu listeye ekledim                                                                                                                                
////    allShapes.push(evt.feature);
////    // console.log(allShapes);                                                                                                                                                                    

////    // Çizilen Box/Polygon'un butonunu oluşturdum.                                                                                                                                                
////    var shapeButton = document.createElement('button');

////    // Butonun Attr'larını ekledim                                                                                                                                                                
////    shapeButton.setAttribute('id', shapeId);
////    shapeButton.setAttribute('type', 'button');
////    shapeButton.setAttribute('style', 'border:none; border-radius: 0px; width: 80%;');
////    shapeButton.setAttribute('data-bs-toggle', 'modal');
////    shapeButton.setAttribute('class', 'btn btn-primary mb-1');
////    if (typeSelect.value === 'BoxItem' || typeSelect.value === 'PolygonItem')
////        shapeButton.setAttribute('data-bs-target', '#itemModal');
////    else if (typeSelect.value === 'BoxLink' || typeSelect.value === 'PolygonLink')
////        shapeButton.setAttribute('data-bs-target', '#linkModal');

////    // Butonun text'ini ekledim                                                                                                                                                                   
////    shapeButton.textContent = shapeId;

////    // Butonu sayfaya ekledim                                                                                                                                                                     
////    var shapeArea = document.getElementById('shapeArea');
////    shapeArea.appendChild(shapeButton);
////});

////// Handle change event                                                                                                                                                                            
////typeSelect.onchange = function () {
////    isValueDelete = false;
////    if (typeSelect.value === 'Delete') {
////        isValueDelete = true;
////        map.on('click', function (evt) {
////            this.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
////                console.log(feature, layer);
////                if (isValueDelete) {
////                    if (confirm("Are you sure?") == true) {
////                        var deleteElement = document.getElementById(feature.getId());
////                        deleteElement.remove();
////                        layer.getSource().removeFeature(feature);
////                    }
////                    else typeSelect.value = 'None';
////                }
////            });
////        });
////        map.removeInteraction(draw);
////    }
////    else addInteraction();
////};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// [MODALS]

////// LINK MODAL: Select Existing Drawing                                                              
////var linkModalSelectExistingDrawingMode = false;
////$("#addLinkSelectDrawing").on("click", function () {
////    if (linkModalSelectExistingDrawingMode == false) {
////        document.getElementById("selectExistingDrawing").removeAttribute("hidden");
////        document.getElementById("btnAddLinkNewDrawing").setAttribute("disabled", "");
////        $("#addLinkSelectDrawing").removeClass("btn-dark");
////        $("#addLinkSelectDrawing").addClass("btn-danger");
////        $("#addLinkSelectDrawing").text("Discard");
////        linkModalSelectExistingDrawingMode = true;
////        return -1;
////    }
////    if (linkModalSelectExistingDrawingMode == true) {
////        document.getElementById("selectExistingDrawing").setAttribute("hidden", "");
////        document.getElementById("btnAddLinkNewDrawing").removeAttribute("disabled");
////        $("#addLinkSelectDrawing").removeClass("btn-danger");
////        $("#addLinkSelectDrawing").addClass("btn-dark");
////        $("#addLinkSelectDrawing").text("Existing Drawing");
////        linkModalSelectExistingDrawingMode = false;
////        return -1;
////    }
////});

////// LINK MODAL: Add New Drawing                                                                      
////var linkModalUploadFileMode = false;
////$("#btnAddLinkNewDrawing").on("click", function () {
////    if (linkModalUploadFileMode == false) {
////        document.getElementById("uploadLinkFile").removeAttribute("hidden");
////        document.getElementById("linkModalPlaceholder").removeAttribute("hidden");
////        document.getElementById("addLinkSelectDrawing").setAttribute("disabled", "");
////        $("#btnAddLinkNewDrawing").removeClass("btn-dark");
////        $("#btnAddLinkNewDrawing").addClass("btn-danger");
////        $("#btnAddLinkNewDrawing").text("Discard");
////        linkModalUploadFileMode = true;
////        return -1;
////    }
////    if (linkModalUploadFileMode == true) {
////        document.getElementById("uploadLinkFile").setAttribute("hidden", "");
////        document.getElementById("linkModalPlaceholder").setAttribute("hidden", "");
////        document.getElementById("addLinkSelectDrawing").removeAttribute("disabled");
////        $("#btnAddLinkNewDrawing").removeClass("btn-danger");
////        $("#btnAddLinkNewDrawing").addClass("btn-dark");
////        $("#btnAddLinkNewDrawing").text("New Drawing");
////        linkModalUploadFileMode = false;
////        return -1;
////    }
////});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
