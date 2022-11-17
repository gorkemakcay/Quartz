// #region General Variables

//const { set } = require("ol/transform");

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
var featuresLonLat;
var selectedFeature;
var currentValveMaintenance;
var currentThicknessMeasurement;
var isValveMaintenanceExist = false;
var isThicknessMeasurementExist = false;
var lastClickedButtonId;
var listPanelIsOpen = true;
var searchPanelIsOpen = true;
var objectIdToBeDeleted;
var objectTypeToBeDeleted;
var deleteThisWhichAttachment;
var deleteThisWhichLookupItem;
var editThisWhichLookupItem;
var cancelThisWhichLookupItem;
var loginUserInfo;
var currentLinkList;
var currentItemList;
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
var extent = [0, 0, 1920, 1356]; // left > bottom > right > top
var viewExtent = [-1200, -778, 3120, 2134]; // left > bottom > right > top
var loadQuartzSuccess = false;
// #endregion

// #region Open Layers Variables
var select;
var selectPM;
var translate;
var projection;
var rasterLayer;
var source;
var vectorLayer;
var view;
var imageLayer;
var map;
var modify;
// #endregion

// #region quartz.portalacbi.com Variables
var downloadFile = "/FileUpload/DownloadFile?fileId=";
var imageUrl = "/home/get?path=";
var resetImageUrl = imageUrl;
// #endregion

// #region Search Panel's Variables
var activeSearch = null;

var printDrawingModelsArray = [];
var printItemModelsArray = [];
var printInspectionModelsArray = [];
var printValveMaintenanceModelsArray = [];
var printThicknessMeasurementModelsArray = [];

var allDrawingReferences = [];
var drawingsPlantAreas = [];
var mainDrawingModel;
// #endregion

// Document Ready Function
$(function () {
    // #region [GET Quartz's Partial View from QuartzLink Controller]
    $.get({
        url: linkController.QuartzPartialView,
        success: function (response) {
            $("#main").html(response);
        }
    });
    // #endregion

    // #region [GET Link Details from QuartzLink Controller]
    $.ajax({
        type: "GET",
        url: linkController.Link.List,
        data: { mainLinkId: 0 },
        success: function (response) {
            mainLink = jQuery.parseJSON(response);
            mainLink = mainLink[0];
            $.ajax({
                type: "GET",
                url: linkController.Link.Detail,
                data: { linkId: mainLink.Id },
                success: function (response) {
                    currentQuartzLink = jQuery.parseJSON(response);

                    $.get({
                        url: linkController.DrawingSettings.Detail,
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
                            url: fileController.Detail,
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
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    // #region Show & Hide Panels
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // #endregion

    // #region Get User Login Info
    $.ajax({
        type: "GET",
        url: "Home/GetLoginUserInfo",
        success: function (response) {
            loginUserInfo = jQuery.parseJSON(response);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    loadSearchPanelsSelectOptions();
});

// Get Search Panel's Select Options
function loadSearchPanelsSelectOptions() {
    // #region Search Drawing
    // Plant Area
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantArea.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#drawingFilterPlantArea").children().remove();

            $("#drawingFilterPlantArea").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant Area",
                    id: "selectDrawingFilterPlantArea"
                })
            );
            $("#selectDrawingFilterPlantArea").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#drawingFilterPlantArea").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Plant System
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantSystem.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#drawingFilterPlantSystem").children().remove();

            $("#drawingFilterPlantSystem").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant System",
                    id: "selectDrawingFilterPlantSystem"
                })
            );
            $("#selectDrawingFilterPlantSystem").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#drawingFilterPlantSystem").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });
    // #endregion

    // #region Search Tag
    // Fitting Type
    $.ajax({
        type: "GET",
        url: lookupItemController.FittingType.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#itemFilterFittingType").children().remove();

            $("#itemFilterFittingType").append(
                $('<option>', {
                    value: "value",
                    text: "Select Fitting Type",
                    id: "selectItemFilterFittingType"
                })
            );
            $("#selectItemFilterFittingType").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#itemFilterFittingType").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Weld Type
    $.ajax({
        type: "GET",
        url: lookupItemController.WeldType.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#itemFilterWeldType").children().remove();

            $("#itemFilterWeldType").append(
                $('<option>', {
                    value: "value",
                    text: "Select Weld Type",
                    id: "selectItemFilterWeldType"
                })
            );
            $("#selectItemFilterWeldType").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#itemFilterWeldType").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Plant Area
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantArea.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#itemFilterPlantArea").children().remove();

            $("#itemFilterPlantArea").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant Area",
                    id: "selectItemFilterPlantArea"
                })
            );
            $("#selectItemFilterPlantArea").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#itemFilterPlantArea").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Plant System
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantSystem.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#itemFilterPlantSystem").children().remove();

            $("#itemFilterPlantSystem").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant System",
                    id: "selectItemFilterPlantSystem"
                })
            );
            $("#selectItemFilterPlantSystem").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#itemFilterPlantSystem").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });
    // #endregion

    // #region Search Inspection
    // Status
    $.ajax({
        type: "GET",
        url: lookupItemController.Status.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#inspectionFilterStatus").children().remove();

            $("#inspectionFilterStatus").append(
                $('<option>', {
                    value: "value",
                    text: "Select Status",
                    id: "selectInspectionFilterStatus"
                })
            );
            $("#selectInspectionFilterStatus").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#inspectionFilterStatus").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Technique
    $.ajax({
        type: "GET",
        url: lookupItemController.Technique.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#inspectionFilterTechnique").children().remove();

            $("#inspectionFilterTechnique").append(
                $('<option>', {
                    value: "value",
                    text: "Select Technique",
                    id: "selectInspectionFilterTechnique"
                })
            );
            $("#selectInspectionFilterTechnique").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#inspectionFilterTechnique").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Method
    $.ajax({
        type: "GET",
        url: lookupItemController.Method.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#inspectionFilterMethod").children().remove();

            $("#inspectionFilterMethod").append(
                $('<option>', {
                    value: "value",
                    text: "Select Method",
                    id: "selectInspectionFilterMethod"
                })
            );
            $("#selectInspectionFilterMethod").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#inspectionFilterMethod").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Procedure
    $.ajax({
        type: "GET",
        url: lookupItemController.Procedure.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#inspectionFilterProcedure").children().remove();

            $("#inspectionFilterProcedure").append(
                $('<option>', {
                    value: "value",
                    text: "Select Procedure",
                    id: "selectInspectionFilterProcedure"
                })
            );
            $("#selectInspectionFilterProcedure").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#inspectionFilterProcedure").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // #endregion

    // #region Valve Maintenance
    // Plant Area
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantArea.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#valveMaintenanceFilterPlantArea").children().remove();

            $("#valveMaintenanceFilterPlantArea").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant Area",
                    id: "selectValveMaintenanceFilterPlantArea"
                })
            );
            $("#selectValveMaintenanceFilterPlantArea").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#valveMaintenanceFilterPlantArea").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });
    // #endregion

    // #region Thickness Measurement
    // Specification
    $.ajax({
        type: "GET",
        url: lookupItemController.Specification.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#thicknessMeasurementFilterSpecification").children().remove();

            $("#thicknessMeasurementFilterSpecification").append(
                $('<option>', {
                    value: "value",
                    text: "Select Specification",
                    id: "selectThicknessMeasurementFilterSpecification"
                })
            );
            $("#selectThicknessMeasurementFilterSpecification").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#thicknessMeasurementFilterSpecification").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Plant Area
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantArea.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#thicknessMeasurementFilterPlantArea").children().remove();

            $("#thicknessMeasurementFilterPlantArea").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant Area",
                    id: "selectThicknessMeasurementFilterPlantArea"
                })
            );
            $("#selectThicknessMeasurementFilterPlantArea").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#thicknessMeasurementFilterPlantArea").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });

    // Plant System
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantSystem.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#thicknessMeasurementFilterPlantSystem").children().remove();

            $("#thicknessMeasurementFilterPlantSystem").append(
                $('<option>', {
                    value: "value",
                    text: "Select Plant System",
                    id: "selectThicknessMeasurementFilterPlantSystem"
                })
            );
            $("#selectThicknessMeasurementFilterPlantSystem").attr("hidden", "");

            for (var i = 0; i < rModel.length; i++) {
                $("#thicknessMeasurementFilterPlantSystem").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {

        }
    });
    // #endregion
}

// Get Date (Format: yyyy/mm/dd hh:mm:ss:msmsms)
// #region getDate()
function getDate() {
    var dt = new Date();
    return fromDateTime = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2) + "T" + ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2);
};
// #endregion

// Get Drawing Center
function getDrawingCenter() {
    view.animate({
        center: ol.extent.getCenter(extent),
        zoom: 2,
        duration: 1000
    });
}

// Bread Crumb [TAMAMLANMADI]
function breadCrumb() {
    $(".breadCrumb").children().remove();
    $(".breadCrumb").append(
        $('<li>,').prepend(
            $('<i>', {
                onclick: "getDrawingCenter()",
                class: "fa-solid fa-arrows-to-circle",
                style: "cursor: pointer;"
            })
        ),
        $('<li>', {
            text: " " + currentDrawingSettings.DrawingNo,
            value: crumbCount,
            onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " , " + crumbCount + ")",
            class: "crumb"
        }).prepend(
            $('<i>', {
                class: "fa fa-house"
            })
        )
    );
}

// Close Button
$(".closeButton").on('click', function () {
    clickedOrCreated = "null";
    createList();

    addLinkUploadDrawingArea = false;
    document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
    document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
    $("#addLinkSelectDrawing").removeAttr("disabled");
    $("#dsmSelectDrawing").removeAttr("disabled");
});

// Are you sure > Cancel Button
$("#cancelDeleteButton").on('click', function () {
    switch (objectTypeToBeDeleted) {

        case "link":
            $("#linkModal").modal("show");
            break;

        case "attachment":
            switch (deleteThisWhichAttachment) {

                case "item":
                    $("#itemModal").modal("show");
                    break;

                case "inspection":
                    $("#AddInspectionData").modal("show");
                    break;

                case "valveMaintenance":
                    $("#AddValveMaintenanceData").modal("show");
                    break;

                case "thicknessMeasurement":
                    $("#AddThicknessMeasurementData").modal("show");
                    break;

                case "drawingSettings":
                    $("#drawingSettingsModal").modal("show");
                    break;

                default:
            }
            break;

        case "lookupItem":
            $("#lookupItemsModal").modal('show');
            break;

        case "item":
            $("#itemModal").modal("show");
            break;

        case "inspection":
            $("#itemModal").modal("show");
            break;

        case "valveMaintenance":
            $("#itemModal").modal("show");
            break;

        case "thicknessMeasurement":
            $("#itemModal").modal("show");
            break;

        case "user":
            $("#userListModal").modal("show");
            break;

        default:
    }
});

// Lookup Items > Cancel Button
function limCancelButton(type) {
    $(".clear").val('');

    switch (type) {
        case "plantSystem":
            $.ajax({
                type: "GET",
                url: lookupItemController.PlantArea.List,
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#limPlantSystemAddModalLookUpItemsPlantAreas").children().remove();

                    for (var i = 0; i < rModel.length; i++) {
                        $("#limPlantSystemAddModalLookUpItemsPlantAreas").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }

                    $('#limPlantSystemAddModalLookUpItemsPlantAreas').select2({
                        //closeOnSelect: false
                    });
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
                url: lookupItemController.Method.List,
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
                url: lookupItemController.Procedure.List,
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

// Go Drawing
function goDrawing(linkId, drawingId, thisValue) {
    //alert(" you clicked breadcrumb, gorkem() function is working ^.^ | id: " + id);
    //alert("link ID: " + linkId + " - " + "link's current drawing ID: " + drawingId);

    $.ajax({
        type: "GET",
        url: linkController.Link.Detail,
        data: { linkId: linkId },
        success: function (response) {
            currentQuartzLink = jQuery.parseJSON(response);

            $.ajax({
                type: "GET",
                url: linkController.DrawingFeatures.GetVectorSource,
                data: { quartzLinkId: linkId },
                success: function (response) {
                    currentDrawingFeatures = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
                        data: { fileId: drawingId },
                        success: function (response) {
                            currentDrawing = jQuery.parseJSON(response);
                            $.ajax({
                                type: "GET",
                                url: linkController.QuartzPartialView,
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

// Get Vector Source
function getVectorSource() {
    $.get({
        url: linkController.DrawingFeatures.GetVectorSource,
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

// Delete: Link, Item, Inspection, Valve Maintenance, Thickness Measurement, Attachment, LookupItem, User
function deleteThis(objectType, objectId) {
    switch (objectType) {
        case "link":
            $.ajax({
                type: "GET",
                url: "QuartzLink/GetAllLinksWithoutMainLinkId",
                data: { mainLinkId: objectId },
                success: function (response) {
                    var rLinkList = jQuery.parseJSON(response);

                    rLinkList.forEach(function (link) {
                        var hierarchy = link.Hierarchy.split(',');
                        for (let id in hierarchy) {
                            if (hierarchy[id] == objectId) {
                                var linkDeleteModel = { Id: link.Id };
                                $.ajax({
                                    type: "DELETE",
                                    url: linkController.Link.Delete,
                                    data: { model: linkDeleteModel },
                                    success: function (response) {
                                    },
                                    error: function (error) {
                                        alert("error");
                                        console.log(error.responseText);
                                    }
                                });
                                break;
                            }
                        }
                    });

                    var linkDeleteModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: linkController.Link.Delete,
                        data: { model: linkDeleteModel },
                        success: function (response) {
                            $("#linkModal").modal("hide");
                            createList();

                            source.getFeatures().forEach(function (feature) {
                                if (feature.get("Id") == linkDeleteModel.Id && feature.get("Type") == "link") {
                                    source.removeFeature(feature);

                                    var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
                                        dataProjection: 'EPSG:4326',
                                        featureProjection: 'EPSG:3857'
                                    });

                                    var drawingFeaturesModel = {
                                        Id: currentDrawingFeatures.Id,
                                        Features: json,
                                        QuartzLinkId: currentQuartzLink.Id
                                    };

                                    $.ajax({
                                        type: "POST",
                                        url: linkController.DrawingFeatures.Update,
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

                                    objectTypeToBeDeleted = "";
                                    objectIdToBeDeleted = "";

                                    toast("Link Deleted Successful");
                                }
                            });
                        },
                        error: function (error) {
                            alert("error");
                            console.log(error.responseText);
                        }
                    });
                }
            });


            break;

        case "attachment":
            $.ajax({
                type: "DELETE",
                url: fileController.Delete,
                data: { fileId: objectId },
                success: function (response) {

                    switch (deleteThisWhichAttachment) {

                        case "item":
                            var item;
                            if (clickedOrCreated == "clicked")
                                item = lastClickedItem;
                            if (clickedOrCreated == "created")
                                item = lastCreatedItem;

                            if (item.AttachmentIds.indexOf(",") == -1) {
                                item.AttachmentIds = null;
                            }
                            else {
                                var attachmentIds = item.AttachmentIds.split(',');
                                for (let id in attachmentIds) {
                                    if (attachmentIds[id] == objectId) {
                                        var index = attachmentIds.indexOf(attachmentIds[id]);
                                        attachmentIds.splice(index, 1);
                                        item.AttachmentIds = attachmentIds.toString();
                                    }
                                }
                            }

                            $.ajax({
                                type: "POST",
                                url: itemController.Item.Update,
                                data: { model: item },
                                success: function (response) {
                                    $("#itemModal").modal("show");
                                    loadAttachmentPage();
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;

                        case "inspection":
                            if (currentInspection.AttachmentIds.indexOf(",") == -1) {
                                currentInspection.AttachmentIds = null;
                            }
                            else {
                                var attachmentIds = currentInspection.AttachmentIds.split(',');
                                for (let id in attachmentIds) {
                                    if (attachmentIds[id] == objectId) {
                                        var index = attachmentIds.indexOf(attachmentIds[id]);
                                        attachmentIds.splice(index, 1);
                                        currentInspection.AttachmentIds = attachmentIds.toString();
                                    }
                                }
                            }

                            $.ajax({
                                type: "POST",
                                url: itemController.Inspection.Update,
                                data: { model: currentInspection },
                                success: function (response) {
                                    $("#AddInspectionData").modal("show");
                                    loadInspectionsAttachmentPage();
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;

                        case "valveMaintenance":
                            if (currentValveMaintenance.AttachmentIds.indexOf(",") == -1) {
                                currentValveMaintenance.AttachmentIds = null;
                            }
                            else {
                                var attachmentIds = currentValveMaintenance.AttachmentIds.split(',');
                                for (let id in attachmentIds) {
                                    if (attachmentIds[id] == objectId) {
                                        var index = attachmentIds.indexOf(attachmentIds[id]);
                                        attachmentIds.splice(index, 1);
                                        currentValveMaintenance.AttachmentIds = attachmentIds.toString();
                                    }
                                }
                            }

                            $.ajax({
                                type: "POST",
                                url: itemController.ValveMaintenance.Update,
                                data: { model: currentValveMaintenance },
                                success: function (response) {
                                    $("#AddValveMaintenanceData").modal("show");
                                    loadValveMaintenancesAttachmentPage();
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;

                        case "thicknessMeasurement":
                            if (currentThicknessMeasurement.AttachmentIds.indexOf(",") == -1) {
                                currentThicknessMeasurement.AttachmentIds = null;
                            }
                            else {
                                var attachmentIds = currentThicknessMeasurement.AttachmentIds.split(',');
                                for (let id in attachmentIds) {
                                    if (attachmentIds[id] == objectId) {
                                        var index = attachmentIds.indexOf(attachmentIds[id]);
                                        attachmentIds.splice(index, 1);
                                        currentThicknessMeasurement.AttachmentIds = attachmentIds.toString();
                                    }
                                }
                            }

                            $.ajax({
                                type: "POST",
                                url: itemController.ThicknessMeasurement.Update,
                                data: { model: currentThicknessMeasurement },
                                success: function (response) {
                                    $("#AddThicknessMeasurementData").modal("show");
                                    loadThicknessMeasurementAttachmentPage();
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;

                        case "drawingSettings":
                            if (currentDrawingSettings.AttachmentIds.indexOf(",") == -1) {
                                currentDrawingSettings.AttachmentIds = null;
                            }
                            else {
                                var attachmentIds = currentDrawingSettings.AttachmentIds.split(',');
                                for (let id in attachmentIds) {
                                    if (attachmentIds[id] == objectId) {
                                        var index = attachmentIds.indexOf(attachmentIds[id]);
                                        attachmentIds.splice(index, 1);
                                        currentDrawingSettings.AttachmentIds = attachmentIds.toString();
                                    }
                                }
                            }

                            $.ajax({
                                type: "POST",
                                url: linkController.DrawingSettings.Update,
                                data: { model: currentDrawingSettings },
                                success: function (response) {
                                    $("#drawingSettingsModal").modal("show");
                                    loadDrawingSettingsAttachmentPage();
                                },
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;

                        default:
                    }

                    objectTypeToBeDeleted = "";
                    objectIdToBeDeleted = "";
                    deleteThisWhichAttachment = "";

                    toast("Attachment Deleted Successful");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "item":
            var itemDeleteModel = { Id: objectId };
            $.ajax({
                type: "DELETE",
                url: itemController.Item.Delete,
                data: { model: itemDeleteModel },
                success: function (response) {
                    $("#itemModal").modal("hide");
                    createList();
                    source.getFeatures().forEach(function (feature) {
                        if (feature.get("Id") == itemDeleteModel.Id && feature.get("Type") == "item") {
                            source.removeFeature(feature);

                            var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                            });

                            var drawingFeaturesModel = {
                                Id: currentDrawingFeatures.Id,
                                Features: json,
                                QuartzLinkId: currentQuartzLink.Id
                            };

                            $.ajax({
                                type: "POST",
                                url: linkController.DrawingFeatures.Update,
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

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";

                            toast("Item Deleted Successful");
                        }
                    });
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "inspection":
            var item;
            if (clickedOrCreated == "clicked")
                item = lastClickedItem;
            if (clickedOrCreated == "created")
                item = lastCreatedItem;

            var inspectionDeleteModel = { Id: objectId };
            $.ajax({
                type: "DELETE",
                url: itemController.Inspection.Delete,
                data: { model: inspectionDeleteModel },
                success: function () {

                    $.ajax({
                        type: "GET",
                        url: itemController.Inspection.List,
                        data: { quartzItemId: item.Id },
                        success: function (response) {
                            inspectionList = jQuery.parseJSON(response);
                            if (inspectionList.length == 0) {
                                item.IsInspected = false;
                                $.ajax({
                                    type: "POST",
                                    url: itemController.Item.Update,
                                    data: { model: item },
                                    success: function () {
                                        if (clickedOrCreated == "clicked")
                                            lastClickedItem = item;
                                        if (clickedOrCreated == "created")
                                            lastCreatedItem = item;

                                        refreshQuartz();
                                    },
                                    error: function (error) {
                                        alert("error!");
                                        console.log(error.responseText);
                                    }
                                });
                            }
                        }
                    });
                    loadInspectionPage();

                    objectTypeToBeDeleted = "";
                    objectIdToBeDeleted = "";

                    $("#itemModal").modal("show");

                    toast("Inspection Deleted Successful");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "lookupItem":
            switch (deleteThisWhichLookupItem) {
                case "componentType":
                    var deleteComponentTypeModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.ComponentType.Delete,
                        data: { model: deleteComponentTypeModel },
                        success: function (response) {
                            componentTypePartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Component Type Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "fittingType":
                    var deleteFittingTypeModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.FittingType.Delete,
                        data: { model: deleteFittingTypeModel },
                        success: function (response) {
                            fittingTypePartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Fitting Type Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "method":
                    var deleteMethodModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.Method.Delete,
                        data: { model: deleteMethodModel },
                        success: function (response) {
                            methodPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Method Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "operator":
                    var deleteOperatorModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.Operator.Delete,
                        data: { model: deleteOperatorModel },
                        success: function (response) {
                            operatorPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Operator Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "plantArea":
                    var deletePlantAreaModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.PlantArea.Delete,
                        data: { model: deletePlantAreaModel },
                        success: function (response) {
                            plantAreaPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Plant Area Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "plantSystem":
                    var deletePlantSystemModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.PlantSystem.Delete,
                        data: { model: deletePlantSystemModel },
                        success: function (response) {
                            plantSystemPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Plant System Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "procedure":
                    var deleteProcedureModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.Procedure.Delete,
                        data: { model: deleteProcedureModel },
                        success: function (response) {
                            procedurePartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Procedure Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "specification":
                    var deleteSpecificationModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.Specification.Delete,
                        data: { model: deleteSpecificationModel },
                        success: function (response) {
                            specificationPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Specification Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "standardStatement":
                    var deleteStandardStatementModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.StandardStatement.Delete,
                        data: { model: deleteStandardStatementModel },
                        success: function (response) {
                            standardStatementPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Standard Statement Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "status":
                    var deleteStatusModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.Status.Delete,
                        data: { model: deleteStatusModel },
                        success: function (response) {
                            statusPartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Status Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "technique":
                    var deleteTechniqueModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.Technique.Delete,
                        data: { model: deleteTechniqueModel },
                        success: function (response) {
                            techniquePartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Technique Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "weldType":
                    var deleteWeldTypeModel = { Id: objectId };
                    $.ajax({
                        type: "DELETE",
                        url: lookupItemController.WeldType.Delete,
                        data: { model: deleteWeldTypeModel },
                        success: function (response) {
                            weldTypePartial();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";


                            $("#lookupItemsModal").modal('show');

                            toast("Weld Type Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                default:
            }
            break;

        case "valveMaintenance":
            var valveMaintenanceDeleteModel = { Id: objectId };
            $.ajax({
                type: "DELETE",
                url: itemController.ValveMaintenance.Delete,
                data: { model: valveMaintenanceDeleteModel },
                success: function (response) {
                    loadValveMaintenancePage();

                    objectTypeToBeDeleted = "";
                    objectIdToBeDeleted = "";

                    $("#itemModal").modal("show");

                    toast("Valve Maintenance Deleted Successful");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "thicknessMeasurement":
            var thicknessMeasurementDeleteModel = { Id: objectId };
            $.ajax({
                type: "DELETE",
                url: itemController.ThicknessMeasurement.Delete,
                data: { model: thicknessMeasurementDeleteModel },
                success: function (response) {
                    loadThicknessMeasurementPage();

                    objectTypeToBeDeleted = "";
                    objectIdToBeDeleted = "";

                    $("#itemModal").modal("show");

                    toast("Thickness Measurement Deleted Successful");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "user":
            $.ajax({
                type: "GET",
                url: "UserAndRole/GetAppUserDetail",
                data: { userId: objectId },
                success: function (response) {
                    var userDeleteModel = jQuery.parseJSON(response);
                    //userDeleteModel = userDeleteModel[0];
                    $.ajax({
                        type: "POST",
                        url: "UserAndRole/DeleteUser",
                        data: { model: userDeleteModel },
                        success: function (response) {
                            loadUserListPage();

                            objectTypeToBeDeleted = "";
                            objectIdToBeDeleted = "";

                            $("#userListModal").modal("show");

                            toast("User Deleted Successful");
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

            break;

        default:
    }
}

// Update Drawing Features
function updateDrawingFeatures() {
    var json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    });

    var drawingFeaturesModel = {
        Id: currentDrawingFeatures.Id,
        Features: json,
        QuartzLinkId: currentQuartzLink.Id
    };

    $.ajax({
        type: "POST",
        url: linkController.DrawingFeatures.Update,
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
}

// #region List Panel | Main Panel | Search Panel

// #region List Panel's & Search Panel's Icon
$("#showListPanelIcon").on('click', function () {
    $.ajax({
        type: "GET",
        url: linkController.QuartzPartialView,
        success: function (html) {
            $("#main").children().remove();
            $("#main").html(html);
            $("#listPanel").toggle("slide", { "direction": "left" }, 100);
            $("#listPanelHeader").toggle("slide", { "direction": "left" }, 100);
            $("#showListPanel").toggle("slide", { "direction": "left" }, 100);

            $("#showSearchPanel").removeClass().addClass("col-lg-2 px-0");

            if (searchPanelIsOpen == true) {
                $("#main").removeClass().addClass("col-lg-8 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-8");
                viewExtent = [-1200, -778, 3120, 2134];
            }
            else {
                $("#main").removeClass().addClass("col-lg-10 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-10");
                viewExtent = [-1500, -778, 3420, 2134];
            }

            listPanelIsOpen = true;
            loadQuartz();
            setTimeout(updateMap, 100);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

$("#hideListPanelIcon").on('click', function () {
    $.ajax({
        type: "GET",
        url: linkController.QuartzPartialView,
        success: function (html) {
            $("#main").children().remove();
            $("#main").html(html);
            $("#listPanel").toggle("slide", { "direction": "left" }, 100);
            $("#listPanelHeader").toggle("slide", { "direction": "left" }, 100);
            $("#showListPanel").toggle("slide", { "direction": "left" }, 100);

            $("#showSearchPanel").removeClass().addClass("col-lg-1 px-0");

            if (searchPanelIsOpen == true) {
                $("#main").removeClass().addClass("col-lg-10 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-10");
                viewExtent = [-1500, -778, 3420, 2134];
            }
            else {
                $("#main").removeClass().addClass("col-lg-12 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-12");
                viewExtent = [-1800, -778, 3720, 2134];
            }

            listPanelIsOpen = false;
            loadQuartz();
            setTimeout(updateMap, 100);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

$("#showSearchPanelIcon").on('click', function () {
    $.ajax({
        type: "GET",
        url: linkController.QuartzPartialView,
        success: function (html) {
            $("#main").children().remove();
            $("#main").html(html);
            $("#searchPanel").toggle("slide", { "direction": "right" }, 100);
            $("#searchPanelHeader").toggle("slide", { "direction": "right" }, 100);
            $("#showSearchPanel").toggle("slide", { "direction": "right" }, 100);

            $("#showSearchPanel").removeClass().addClass("col-lg-1 px-0");

            if (listPanelIsOpen == true) {
                $("#main").removeClass().addClass("col-lg-8 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-8");
                viewExtent = [-1200, -778, 3120, 2134];
            }
            else {
                $("#main").removeClass().addClass("col-lg-10 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-10");
                viewExtent = [-1500, -778, 3420, 2134];
            }

            searchPanelIsOpen = true;
            loadQuartz();
            setTimeout(updateMap, 100);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

$("#hideSearchPanelIcon").on('click', function () {
    $.ajax({
        type: "GET",
        url: linkController.QuartzPartialView,
        success: function (html) {
            $("#main").children().remove();
            $("#main").html(html);
            $("#searchPanel").toggle("slide", { "direction": "right" }, 100);
            $("#searchPanelHeader").toggle("slide", { "direction": "right" }, 100);
            $("#showSearchPanel").toggle("slide", { "direction": "right" }, 100);

            $("#showSearchPanel").removeClass().addClass("col-lg-1 px-0");

            if (listPanelIsOpen == true) {
                $("#main").removeClass().addClass("col-lg-10 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-10");
                viewExtent = [-1500, -778, 3420, 2134];

                $("#showSearchPanel").removeClass().addClass("col-lg-2 px-0");
            }
            else {
                $("#main").removeClass().addClass("col-lg-12 px-0");
                $("#mainHeader").removeClass().addClass("col-lg-12");
                viewExtent = [-1800, -778, 3720, 2134];
            }

            searchPanelIsOpen = false;
            loadQuartz();
            setTimeout(updateMap, 100);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

function toggleListPanel() {
    // list panel is opening
    if ($("#listPanel").css('display') == 'none') {
        $.ajax({
            type: "GET",
            url: linkController.QuartzPartialView,
            success: function (html) {
                $("#main").children().remove();
                $("#main").html(html);
                $("#listPanel").toggle("slide", { "direction": "left" }, 100);
                $("#listPanelHeader").toggle("slide", { "direction": "left" }, 100);
                $("#showListPanel").toggle("slide", { "direction": "left" }, 100);

                if (searchPanelIsOpen == true) {
                    $("#main").removeClass().addClass("col-lg-8 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-8");
                    viewExtent = [-1200, -778, 3120, 2134];
                }
                else {
                    $("#main").removeClass().addClass("col-lg-10 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-10");
                    viewExtent = [-1500, -778, 3420, 2134];
                }

                listPanelIsOpen = true;
                loadQuartz();
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
    // list panel is closing
    else {
        $.ajax({
            type: "GET",
            url: linkController.QuartzPartialView,
            success: function (html) {
                $("#main").children().remove();
                $("#main").html(html);
                $("#listPanel").toggle("slide", { "direction": "left" }, 100);
                $("#listPanelHeader").toggle("slide", { "direction": "left" }, 100);
                $("#showListPanel").toggle("slide", { "direction": "left" }, 100);

                if (searchPanelIsOpen == true) {
                    $("#main").removeClass().addClass("col-lg-10 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-10");
                    viewExtent = [-1500, -778, 3420, 2134];
                }
                else {
                    $("#main").removeClass().addClass("col-lg-12 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-12");
                    viewExtent = [-1800, -778, 3720, 2134];
                }

                listPanelIsOpen = false;
                loadQuartz();
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
    setTimeout(updateMap, 100);
}

function toggleSearchPanel() {
    if ($("#searchPanel").css('display') == 'none') {
        $.ajax({
            type: "GET",
            url: linkController.QuartzPartialView,
            success: function (html) {
                $("#main").children().remove();
                $("#main").html(html);
                $("#searchPanel").toggle("slide", { "direction": "right" }, 100);
                $("#searchPanelHeader").toggle("slide", { "direction": "right" }, 100);
                $("#showSearchPanel").toggle("slide", { "direction": "right" }, 100);

                if (listPanelIsOpen == true) {
                    $("#main").removeClass().addClass("col-lg-8 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-8");
                    viewExtent = [-1200, -778, 3120, 2134];
                }
                else {
                    $("#main").removeClass().addClass("col-lg-10 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-10");
                    viewExtent = [-1500, -778, 3420, 2134];
                }

                searchPanelIsOpen = true;
                loadQuartz();
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
    else {
        $.ajax({
            type: "GET",
            url: linkController.QuartzPartialView,
            success: function (html) {
                $("#main").children().remove();
                $("#main").html(html);
                $("#searchPanel").toggle("slide", { "direction": "right" }, 100);
                $("#searchPanelHeader").toggle("slide", { "direction": "right" }, 100);
                $("#showSearchPanel").toggle("slide", { "direction": "right" }, 100);

                if (listPanelIsOpen == true) {
                    $("#main").removeClass().addClass("col-lg-10 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-10");
                    viewExtent = [-1500, -778, 3420, 2134];
                }
                else {
                    $("#main").removeClass().addClass("col-lg-12 px-0");
                    $("#mainHeader").removeClass().addClass("col-lg-12");
                    viewExtent = [-1800, -778, 3720, 2134];
                }

                searchPanelIsOpen = false;
                loadQuartz();
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
    setTimeout(updateMap, 100);
}

function updateMap() {
    map.updateSize();
    map.render();
}

// #endregion

// File Modal Show Image & Pdf
function showFileModal(path, type) {
    path = path.replace("wwwroot", "");
    $("#showFileModalPartialArea").children().remove();
    $("#showFileModal").modal("show");
    switch (type) {
        case "image/jpeg":
            $("#showFileModalPartialArea").append(
                '<img src="' + path + '" style="max-height: 900px;">'
            );
            break;

        case "image/png":
            $("#showFileModalPartialArea").append(
                '<img src="' + path + '" style="max-height: 900px;">'
            );
            break;

        case "application/pdf":
            $("#showFileModalPartialArea").append(
                '<iframe src="' + path + '" height="800"></iframe>'
            );
            break;

        default:
    }
}

// #region Get Features From Db & Print Screen
// db'deki "QuartzLinkDrawingFeature" tablosunun "Features" sütununun değerlerini aldım ve bu bilgilerle feature'ları oluşturdum
function addFeatureToSource() {
    if (currentDrawingFeatures != 0) {
        $.ajax({
            type: "GET",
            url: linkController.Link.List,
            data: { mainLinkId: currentQuartzLink.Id },
            success: function (response) {
                currentLinkList = jQuery.parseJSON(response);
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });

        $.ajax({
            type: "GET",
            url: itemController.Item.List,
            data: { linkId: currentQuartzLink.Id },
            success: function (response) {
                currentItemList = jQuery.parseJSON(response);
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });

        function wait() {
            var featuresFromDb = jQuery.parseJSON(currentDrawingFeatures.Features);
            featureCollection[''] = featuresFromDb;
            featureCollection[''].features.forEach(function (featureJson) {

                var feature = new ol.Feature({
                    geometry: (new ol.geom.Polygon(featureJson.geometry.coordinates)).transform('EPSG:4326', 'EPSG:3857')
                });

                var TextContext;
                var fillColor = 'rgba(255,255,255,0.4)';

                if (featureJson.properties.Type == 'link') {
                    let link = currentLinkList.find(link => link.Id == featureJson.properties.Id);
                    if (link.ShowLabel) {
                        TextContext = featureJson.properties.Name;
                    }
                    else TextContext = '';
                }

                if (featureJson.properties.Type == 'item') {
                    let item = currentItemList.find(item => item.Id == featureJson.properties.Id);
                    if (item.ShowLabel) {
                        TextContext = featureJson.properties.Name;
                    }
                    else TextContext = '';

                    if (item.IsInspected) {
                        fillColor = 'rgba(0,255,0,0.5)';
                    }
                }

                feature.setProperties({ 'LonLat': featureJson.properties.LonLat });
                feature.setProperties({ 'Id': featureJson.properties.Id });
                feature.setProperties({ 'Name': featureJson.properties.Name });
                feature.setProperties({ 'Type': featureJson.properties.Type });
                feature.setProperties({ 'Hierarchy': featureJson.properties.Hierarchy });
                feature.setProperties({ 'ShowLabel': featureJson.properties.ShowLabel });

                var exampleFeatureStyle = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: fillColor
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#3399CC',
                        width: 1.25
                    }),
                    text: new ol.style.Text({
                        text: TextContext,
                        font: 'bold 10px sans-serif',
                        scale: 1.3,
                        overflow: true
                    })
                });
                feature.setStyle(exampleFeatureStyle);

                // Add feature to the vector source
                source.addFeature(feature);
            });
        }
        setTimeout(wait, 200);
    }
}
// #endregion

// #region Örnek Fonksiyonlar
$("#sjgfsg").on('click', function () {
    //asyncTest1();
    //asyncTest2();
    //asyncTest3();
});

// #region async await func örnek - 1
async function asyncTest1() {
    console.log('birinci');

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ikinci');
            resolve();
        }, 2000);
    });

    console.log('üçüncü');
}
// #endregion

// #region async await func örnek - 2
function later(delay) {
    delay = delay * 1000;
    return new Promise(function (resolve) {
        console.log("1.5");
        setTimeout(resolve, delay);
    });
}

async function asyncTest2() {
    console.log("1");
    await later(1);
    console.log("2");
    console.log("3");
}
// #endregion

// #region async await func örnek - 3
async function asyncTest3() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}
// #endregion

function fetchBoredApi() {
    fetch('https://www.boredapi.com/api/activity')
        .then((response) => response.json())
        .then((data) => console.log(data.activity));
}

function ajaxGetBoredApi() {
    $.ajax({
        type: "GET",
        url: 'https://www.boredapi.com/api/activity',
        success: (response) => {
            console.log(response.activity);
        }
    });
}
// #endregion