// #region General Variables

// #region currentDrawingSettings
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS CURRENT DRAWING SETTINGS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [drawingSettings.js]
//                  * [DSM MODAL]   : When "Save Button (#btnDsmSave)" is clicked.
//                  * [INDEX]       : When "Drawing Settings Button (#btnDrawingSettings)" is clicked.
//
//~~~~~~~~~~~~~~~~~~~~~~~~~
var currentDrawingSettings;
//~~~~~~~~~~~~~~~~~~~~~~~~~
//
// #endregion

// #region currentQuartzLink
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS CURRENT QUARTZ LINK
//~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [index.js]
//                  * [INDEX]       : When website is starting.
//
//          ---> [fileUpload.js]
//                  * [DSM MODAL]   : When "Upload Button" is clicked. (onclick="uploadFile('drawingSettings')")
//
//~~~~~~~~~~~~~~~~~~~~
var currentQuartzLink;
//~~~~~~~~~~~~~~~~~~~~
//
// #endregion

// #region currentDrawing
//
//~~~~~~~~~~~~~~~~~~~~~~
// HOSTS CURRENT DRAWING
//~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [index.js]
//                  * [INDEX]       : When website is starting.
//
//          ---> [fileUpload.js]
//                  * [DSM MODAL]   : When "Upload Button" is clicked (onclick="uploadFile('drawingSettings')")
//
//~~~~~~~~~~~~~~~~~
var currentDrawing;
//~~~~~~~~~~~~~~~~~
//
// #endregion

// #region currentDrawingFeatures
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS CURRENT DRAWING FEATURES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [index.js]
//                  * [INDEX]   : When website is starting.
//
//          ---> [quartz.js]
//                  * [INDEX]   : When feature translate end. (getVectorSource();)
//                  * [INDEX]   : When drawing is finished. (addDrawingFeaturesJSON();)
//
//~~~~~~~~~~~~~~~~~~~~~~~~~
var currentDrawingFeatures;
//~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region currentInspection
//
//~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS CURRENT INSPECTION
//~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzItem.js]
//                  * [Inspection Edit Modal]   : When "Edit Button" is clicked. (onclick='openEditInspectionModal(" + inspection.Id + ")')
//                  * [Inspection Add Modal]    : When "Save Button" is clicked. (#inspectionAddSaveButton)
//
//          ---> [fileUpload.js]
//                  * [Inspection Edit Modal]    : When "Upload Button" is clicked. (onclick="uploadFile('inspection')")
//
//~~~~~~~~~~~~~~~~~~~~
var currentInspection;
//~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastCreatedLink
//
//~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS LAST CREATED LINK
//~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartz.js]
//                  * [INDEX]       : When drawing is finished . (draw.on("drawend", function (evt))
//
//          ---> [quartzLink.js]
//                  * [LINK MODAL]  : When "Save Button" is clicked . (onclick="linkModalSaveButton()")
//
//          ---> [fileUpload.js]
//                  * [LINK MODAL]  : When "Upload Button" is clicked . (onclick="uploadFile('link')")
//~~~~~~~~~~~~~~~~~~
var lastCreatedLink;
//~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastCreatedItem
//
//~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS LAST CREATED ITEM
//~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartz.js]
//                  * [INDEX]       : When drawing is finished. (draw.on("drawend", function (evt))
//
//          ---> [quartzItem.js]
//                  * [ITEM MODAL]  : When "Save Button" is clicked. (onclick="itemModalSaveButton(itemModalActivePartial)")
//
//          ---> [fileUpload.js]
//                  * [ITEM MODAL]  : When  . (When "Upload Button" is clicked. (onclick="uploadFile('item')"))
//~~~~~~~~~~~~~~~~~~
var lastCreatedItem;
//~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastClickedLinkButtonId
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS LAST CLICKED LINK BUTTON'S ID
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [listPanel.js]
//                  * [INDEX]   : When any "Link Button" is clicked. (".linkButton")
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var lastClickedLinkButtonId = 0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastClickedItemButtonId
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS LAST CLICKED ITEM BUTTON'S ID
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [listPanel.js]
//                  * [INDEX]   : When any "Item Button" is clicked. (".itemButton")
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var lastClickedItemButtonId = 0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastClickedLink
//
//~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS LAST CLICKED LİNK
//~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzLink.js]
//                  * [LINK MODAL]   : When "Save Button" is clicked. (onclick="linkModalSaveButton()")
//
//          ---> [listPanel.js]
//                  * [INDEX]        : When any "Link Button" is clicked. (".linkButton")
//
//          ---> [fileUpload.js]
//                  * [LINK MODAL]   : When "Upload Button" is clicked . (onclick="uploadFile('link')")
//
//~~~~~~~~~~~~~~~~~~
var lastClickedLink;
//~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastClickedItem
//
//~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS LAST CLICKED ITEM
//~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzItem.js]
//                  * [ITEM MODAL]   : When "Save Button" is clicked. (onclick="itemModalSaveButton(itemModalActivePartial)")
//
//          ---> [listPanel.js]
//                  * [INDEX]        : When any "ıTEM Button" is clicked. (".itemButton")
//
//          ---> [fileUpload.js]
//                  * [ITEM MODAL]   : When "Upload Button" is clicked . (onclick="uploadFile('item')")
//
//~~~~~~~~~~~~~~~~~~
var lastClickedItem;
//~~~~~~~~~~~~~~~~~~
// #endregion

// #region lastInformationsResponseModel
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS INFORMATIONS RESPONSE MODEL
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzItem.js]
//                  * [ITEM MODAL]   : When "Information Tab" is clicked. (#itemModalNav a ---> loadInformationPage();)
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var lastInformationsResponseModel;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region isInformationCreated
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CHECKING IF INFORMATION HAS BEEN CREATED
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzItem.js]
//                  * [ITEM MODAL]   : When "Information Tab" is clicked. (#itemModalNav a ---> loadInformationPage();)
//                  * [ITEM MODAL]   : When "Save Button" is clicked. (onclick="itemModalSaveButton(itemModalActivePartial)")
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var isInformationCreated = false;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region isInspectionExist [TAMAMLANMADI]
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// CHECKİNG IF INSPECTION EXISTS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzItem.js]
//                  * [INSPECTION ADD MODAL]      : When "Add Inspection Data Button" is clicked. (#addInspectionDataButton" ---> loadInspectionsDataPage();)
//                  * [INSPECTION UPDATE MODAL]   : When "Data Tab" is clicked. ("#inspectionModalNav a" --->)
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var isInspectionExist = false;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region clickedOrCreated
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// IS THE FEATURE BEING INTERACTED WITH CREATED OR CLICKED ?
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [index.js]
//                  * [WEBSITE]      : When "Close Button" is clicked. (.closeButton)
//
//          ---> [listPanel.js]
//                  * [INDEX]        : When any "Link Button" is clicked. (.linkButton)
//                  * [INDEX]        : When any "Item Button" is clicked. (.itemButton)
//
//          ---> [quartz.js]
//                  * [INDEX]        : When drawing is finished. (draw.on("drawend", function (evt))
//
//          ---> [quartzLink.js]
//                  * [LINK MODAL]   : When "Save Button" is clicked. (onclick="linkModalSaveButton()")
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var clickedOrCreated = "null"; // "clicked/created"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

// #region itemModalActivePartial
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// HOSTS THE ACTIVE PARTIAL OF ITEM MODAL
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//      WHERE IT IS UPDATING:
//          ---> [quartzItem.js]
//                  * [ITEM MODAL]   : When any "Navbar Tab" is clicked. (#itemModalNav a)
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var itemModalActivePartial = "Informations";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #endregion

var crumbCount = 1;

var linkOrItem;

var featuresLonLat;

var selectedFeature;

var currentValveMaintenance;

var currentThicknessMeasurement;

var isValveMaintenanceExist = false;

var isThicknessMeasurementExist = false;

// #endregion

// #region Quartz Variables
var typeSelect = document.getElementById('type');
var addedFeatures = [];
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
                url: 'QuartzLink/GetDrawingSettingsDetailJSON',
                data: { quartzLinkId: currentQuartzLink.Id },
                success: function (response) {
                    currentDrawingSettings = jQuery.parseJSON(response);
                    breadCrumb();
                }
            });

            getVectorSource();

            function wait() {
                $.ajax({
                    type: "GET",
                    url: "FileUpload/GetFileDetail",
                    data: { fileId: currentQuartzLink.CurrentDrawingId },
                    success: function (result) {
                        currentDrawing = jQuery.parseJSON(result);
                        loadQuartz();
                    }
                });
            }
            setTimeout(wait, 100);
        },
        error: function (error) {
            alert("error");
            console.log(error.responseText);
        }
    });
    // #endregion

    // [CODE SNIPPET TRIAL AREA]
});

// #region getDate()
function getDate() {
    var dt = new Date();
    return fromDateTime = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2) + "T" + ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2);
};
// #endregion

function breadCrumb() {
    $(".breadCrumb").children().remove();
    $(".breadCrumb").append(
        $('<li>', {
            text: " " + currentDrawingSettings.DrawingNo,
            value: crumbCount,
            onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " , " + crumbCount + ")",
            class: "crumb"
        }).prepend(
            $('<i>', {
                class: "bi bi-house"
            })
        )
    );
}

$(".closeButton").on('click', function () {
    clickedOrCreated = "null";
    createList();

    addLinkUploadDrawingArea = false;
    document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
    document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
    $("#addLinkSelectDrawing").removeAttr("disabled");
    $("#dsmSelectDrawing").removeAttr("disabled");
});

function limCancelButton(type) {
    $(".clear").val('');

    switch (type) {
        case "plantSystem":
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantAreaForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#limPlantSystemAddModalLookUpItemsPlantAreas").children().remove();

                    $("#limPlantSystemAddModalLookUpItemsPlantAreas").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Plant Area(s)",
                            id: "selectLimPlantAreas"
                        })
                    );
                    $("#selectLimPlantAreas").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#limPlantSystemAddModalLookUpItemsPlantAreas").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "procedure":
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetMethodForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#limProcedureAddModalLookUpItemsMethod").children().remove();

                    $("#limProcedureAddModalLookUpItemsMethod").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Method",
                            id: "selectMethod"
                        })
                    );
                    $("#selectMethod").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#limProcedureAddModalLookUpItemsMethod").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;
            break;

        case "technique":
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetProcedureForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#limTechniqueAddModalLookUpItemsProcedure").children().remove();

                    $("#limTechniqueAddModalLookUpItemsProcedure").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Procedure",
                            id: "selectProcedure"
                        })
                    );
                    $("#selectProcedure").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#limTechniqueAddModalLookUpItemsProcedure").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;
        default:
    }


}

function goDrawing(linkId, drawingId, thisValue) {
    //alert(" you clicked breadcrumb, gorkem() function is working ^.^ | id: " + id);
    //alert("link ID: " + linkId + " - " + "link's current drawing ID: " + drawingId);

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetLinkDetailJSON",
        data: { linkId: linkId },
        success: function (response) {
            currentQuartzLink = jQuery.parseJSON(response);

            $.ajax({
                type: "GET",
                url: "QuartzLink/GetVectorSource",
                data: { quartzLinkId: linkId },
                success: function (response) {
                    currentDrawingFeatures = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: "FileUpload/GetFileDetail",
                        data: { fileId: drawingId },
                        success: function (response) {
                            currentDrawing = jQuery.parseJSON(response);
                            $.ajax({
                                type: "GET",
                                url: "QuartzLink/GetQuartz",
                                success: function (html) {
                                    $("#main").children().remove();
                                    $("#main").html(html);

                                    $($(".crumb").get().reverse()).each(function () {
                                        if ($(this).val() == thisValue) {
                                            crumbCount = $(this).val();
                                            return false;
                                        }
                                        else $(this).remove();
                                    });

                                    loadQuartz();
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
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });


}

function getVectorSource() {
    $.get({
        url: 'QuartzLink/GetVectorSource',
        data: { quartzLinkId: currentQuartzLink.Id },
        success: function (response) {
            if (response != 0) {
                currentDrawingFeatures = jQuery.parseJSON(response);
                var featuresFromDb = jQuery.parseJSON(currentDrawingFeatures.Features);
                featureCollection[''] = featuresFromDb;
            }
            else
                currentDrawingFeatures = 0;
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}