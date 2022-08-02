// #region General Variables
var currentDrawingSettings;
var currentQuartzLink;
var currentDrawing;
var currentDrawingFeatures;
var currentInspection;
var lastCreatedLink;
var lastCreatedItem;
var lastClickedLinkButtonId = 0;
var lastClickedItemButtonId = 0;
var lastClickedLink;
var lastClickedItem;
var lastInformationsResponseModel;
var isInformationCreated = false;
var isInspectionExist = false;
var clickedOrCreated = "null"; // "clicked/created"
var rFeatureCollection;
var itemModalActivePartial = "Informations";

// #region Quartz Variables
var typeSelect = document.getElementById('type');
var allShapes = [];
var draw; // global so we can remove it later
var isValueDelete = false;
var shapeId = "";
var itemIdCount = 0;
var itemId = "item" + itemIdCount;
var linkIdCount = 0;
var linkId = "link" + linkIdCount;
var featureCollection = [];
var extent = [0, 0, 1920, 1356];

// #region Open Layers Variables
var select;
var translate;
var projection;
var rasterLayer;
var source;
var vectorLayer;
var view;
var imageUrl;
var imageLayer;
var map;
// #endregion

// #endregion

// #endregion

$(function () {
    // #region [GET Quartz's Partial View from QuartzLink Controller]
    $.get({
        url: "QuartzLink/GetQuartz",
        success: function (response) {
            $("#main").html(response);
        }
    });
    // #endregion

    // #region [GET Link Details from QuartzLink Controller]
    $.ajax({
        type: "GET",
        url: "QuartzLink/GetLinkDetailJSON",
        data: { linkId: 1 },
        success: function (response) {
            currentQuartzLink = jQuery.parseJSON(response);

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

            function getFileDetailTimeOut() {
                $.ajax({
                    type: "GET",
                    url: "FileUpload/GetFileDetail",
                    data: { fileId: currentQuartzLink.CurrentDrawingId },
                    success: function (result) {
                        rModel = jQuery.parseJSON(result);
                        //currentDrawingPath = rModel.Path;
                        currentDrawing = rModel;
                        loadQuartz();
                    }
                });
            }
            setTimeout(getFileDetailTimeOut, 100);
        },
        error: function (error) {
            alert("error");
            console.log(error.responseText);
        }
    });
    // #endregion

});

// #region getDate()
function getDate() {
    var dt = new Date();
    return fromDateTime = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2) + "T" + ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2);
};
// #endregion

$(".closeButton").on('click', function () {
    clickedOrCreated = "null";
});


