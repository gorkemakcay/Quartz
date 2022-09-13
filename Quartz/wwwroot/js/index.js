﻿// #region General Variables

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

    // #region Show & Hide Panels
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // #endregion

    // [CODE SNIPPET TRIAL AREA]
    //$('.button').click(function () {
    //    var buttonId = $(this).attr('id');
    //    $('#modal-container').removeAttr('class').addClass(buttonId);
    //    $('body').addClass('modal-active');
    //})

    //$('#modal-container').click(function () {
    //    $(this).addClass('out');
    //    $('body').removeClass('modal-active');
    //});
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
                class: "fa fa-house"
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

        default:
    }
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

function deleteThis(objectType, objectId) {
    switch (objectType) {
        case "link":
            var linkDeleteModel = { Id: objectId };
            $.ajax({
                type: "DELETE",
                url: "QuartzLink/DeleteLink",
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
            break;

        case "attachment":
            $.ajax({
                type: "DELETE",
                url: "FileUpload/DeleteFile",
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
                                url: "QuartzItem/UpdateItemJSON",
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
                                url: "QuartzItem/UpdateInspectionJSON",
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
                                url: "QuartzItem/UpdateValveMaintenanceJSON",
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
                                url: "QuartzItem/UpdateThicknessMeasurementJSON",
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
                                url: "QuartzLink/UpdateDrawingSettingsJSON",
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
                url: "QuartzItem/DeleteItem",
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
            var inspectionDeleteModel = { Id: objectId };
            $.ajax({
                type: "DELETE",
                url: "QuartzItem/DeleteInspection",
                data: { model: inspectionDeleteModel },
                success: function (response) {
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
                        url: "LookUpItems/DeleteComponentType",
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
                        url: "LookUpItems/DeleteFittingType",
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
                        url: "LookUpItems/DeleteMethod",
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
                        url: "LookUpItems/DeleteOperator",
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
                        url: "LookUpItems/DeletePlantArea",
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
                        url: "LookUpItems/DeletePlantSystem",
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
                        url: "LookUpItems/DeleteProcedure",
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
                        url: "LookUpItems/DeleteSpecification",
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
                        url: "LookUpItems/DeleteStandardStatement",
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
                        url: "LookUpItems/DeleteStatus",
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
                        url: "LookUpItems/DeleteTechnique",
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
                        url: "LookUpItems/DeleteWeldType",
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
                url: "QuartzItem/DeleteValveMaintenance",
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
                url: "QuartzItem/DeleteThicknessMeasurement",
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

        default:
    }
}

// TTTTTTTTTTTTTTTTTTTTTTTTTTRIAL AREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("inspectionMenu")
        .style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("inspectionMenu").style.display == "block") {
        hideMenu();
    } else {
        var menu = document.getElementById("inspectionMenu")
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}
// TTTTTTTTTTTTTTTTTTTTTTTTTTRIAL AREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

// #region List Panel | Main Panel | Search Panel

$("#showListPanelIcon").on('click', function () {
    $.ajax({
        type: "GET",
        url: "QuartzLink/GetQuartz",
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
        url: "QuartzLink/GetQuartz",
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
        url: "QuartzLink/GetQuartz",
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
        url: "QuartzLink/GetQuartz",
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
            url: "QuartzLink/GetQuartz",
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
            url: "QuartzLink/GetQuartz",
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
            url: "QuartzLink/GetQuartz",
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
            url: "QuartzLink/GetQuartz",
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
