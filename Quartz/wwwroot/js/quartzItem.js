//const { fromUserCoordinate } = require("ol/proj");

// #region Item Modal

// Save Button > [Click Function]
function itemModalSaveButton() { // [TAMAMLANMADI]
    var item;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;

    if (isInformationCreated == true) {
        var itemInformationUpdateModel = {
            Id: lastInformationsResponseModel.Id,
            TagNo: $("#informationTagNo").val(),
            SerialNo: $("#informationSerialNo").val(),
            ComponentType: $("#informationComponentType").val(),
            Comments: $("#informationComments").val(),
            Specification: $("#informationSpecification").val(),
            FittingType: $("#informationFittingType").val(),
            WeldType: $("#informationWeldType").val(),
            ShowLabel: true, // [TAMAMLANMADI]
            PipeOdIn: $("#informationPipeOD").val(),
            PipeThicknessMm: $("#informationPipeThickness").val(),
            OperatingTempC: $("#informationOperatingTemp").val(),
            OperatingPressureBar: $("#informationOperatingPressute").val(),
            QuartzItemId: item.Id
        }

        $.ajax({
            type: "POST",
            url: itemController.Information.Update,
            data: { model: itemInformationUpdateModel },
            success: function (response) {
                item.TagNo = $("#informationTagNo").val();
                if (clickedOrCreated == "created") {
                    lastCreatedItem = item;
                }
                if (clickedOrCreated == "clicked") {
                    lastClickedItem = item;
                }
                $("#itemModalTitle").html(item.TagNo + " | Information");

                $.post({
                    url: itemController.Item.Update,
                    data: { model: item },
                    success: function () {
                        function waitFunc() {
                            selectedFeature.setProperties({ 'Name': item.TagNo });
                            updateDrawingFeatures();
                            source.clear();
                            addFeatureToSource();
                            $("#shapeArea").children().remove();
                            createList();
                            // Load Spinner Yap! [TAMAMLANMADI]
                        }
                        setTimeout(waitFunc, 100);
                        toast("Item Update Successful!");
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
    else {
        var itemInformationAddModel = {
            TagNo: $("#informationTagNo").val(),
            SerialNo: $("#informationSerialNo").val(),
            ComponentType: $("#informationComponentType").val(),
            Comments: $("#informationComments").val(),
            Specification: $("#informationSpecification").val(),
            FittingType: $("#informationFittingType").val(),
            WeldType: $("#informationWeldType").val(),
            ShowLabel: true, // [TAMAMLANMADI]
            PipeOdIn: $("#informationPipeOD").val(),
            PipeThicknessMm: $("#informationPipeThickness").val(),
            OperatingTempC: $("#informationOperatingTemp").val(),
            OperatingPressureBar: $("#informationOperatingPressute").val(),
            QuartzItemId: item.Id
        }

        $.ajax({
            type: "POST",
            url: itemController.Information.Add,
            data: { model: itemInformationAddModel },
            success: function (response) {
                rModel = jQuery.parseJSON(response);

                $.get({
                    url: itemController.Item.Detail,
                    data: { itemId: item.Id },
                    success: function (response) {
                        var model = jQuery.parseJSON(response);
                        model.TagNo = $("#informationTagNo").val();

                        if (clickedOrCreated == "created") {
                            lastCreatedItem = model;
                            item = lastCreatedItem;
                        }
                        if (clickedOrCreated == "clicked") {
                            lastClickedItem = model;
                            item = lastClickedItem;
                        }

                        $.post({
                            url: itemController.Item.Update,
                            data: { model: item },
                            success: function () {
                                function waitFunc() {
                                    $("#shapeArea").children().remove();
                                    createList();
                                    // Load Spinner Yap! [TAMAMLANMADI]
                                }
                                setTimeout(waitFunc, 100);
                                isInformationCreated = true;
                                toast("Item Update Successful!");
                            },
                            error: function (error) {
                                alert("error!");
                                console.log(error.responseText);
                            }
                        });
                    }
                });
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
}

// NavBar ---> Display PartialViews
$("#inspectionModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Data':
            openEditInspectionModal(currentInspection.Id);
            $("#inspectionAddSaveButton").removeAttr("hidden");
            break;

        case 'Attachment':
            loadInspectionsAttachmentPage();
            $("#inspectionAddSaveButton").attr("hidden", "");
            break;

        default:
            break;
    }
})

// NavBar ---> Display PartialViews
$("#valveMaintenanceModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Data':
            openEditValveMaintenanceModal(currentValveMaintenance.Id);
            $("#valveMaintenanceAddSaveButton").removeAttr("hidden");
            break;

        case 'Attachment':
            loadValveMaintenancesAttachmentPage();
            $("#valveMaintenanceAddSaveButton").attr("hidden", "");
            break;

        default:
            break;
    }
})

// NavBar ---> Display PartialViews
$("#thicknessMeasurementModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Data':
            openEditThicknessMeasurementModal(currentThicknessMeasurement.Id);
            $("#thicknessMeasurementAddSaveButton").removeAttr("hidden");
            break;

        case 'Attachment':
            loadThicknessMeasurementAttachmentPage();
            $("#thicknessMeasurementAddSaveButton").attr("hidden", "");
            break;

        default:
            break;
    }
})

// Inspection Add Modal > Save Button [Click Function]
$("#inspectionAddSaveButton").on('click', function () {
    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    var toastContext = "";
    var inspectionUrl = "";

    if (isInspectionExist) {
        var itemInspectionModel = {
            Id: currentInspection.Id,
            ReportNo: $("#inspectionReportNo").val(),
            Method: $("#inspectionMethod").val(),
            Procedure: $("#inspectionProcedure").val(),
            Technique: $("#inspectionTechnique").val(),
            Status: $("#inspectionStatus").val(),
            Date: $("#inspectionDate").val(),
            DueDate: $("#inspectionDateDue").val(),
            CreatedDate: getDate(),
            Details: $("#inspectionDetails").val(),
            QuartzItemId: item.Id,
            AttachmentIds: currentInspection.AttachmentIds
        }

        toastContext = "Inspection Update Successful!";
        inspectionUrl = itemController.Inspection.Update;
    }
    else {
        var itemInspectionModel = {
            ReportNo: $("#inspectionReportNo").val(),
            Method: $("#inspectionMethod").val(),
            Procedure: $("#inspectionProcedure").val(),
            Technique: $("#inspectionTechnique").val(),
            Status: $("#inspectionStatus").val(),
            Date: $("#inspectionDate").val(),
            DueDate: $("#inspectionDateDue").val(),
            CreatedDate: getDate(),
            Details: $("#inspectionDetails").val(),
            QuartzItemId: item.Id,
        }

        toastContext = "Inspection Add Successful!";
        inspectionUrl = itemController.Inspection.Add;
    }

    $.ajax({
        type: "POST",
        url: inspectionUrl,
        data: { model: itemInspectionModel },
        success: function (response) {
            currentInspection = jQuery.parseJSON(response);
            loadInspectionPage();
            toast(toastContext);

            item.IsInspected = true;

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
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

// Valve Maintenance Add Modal > Save Button [Click Function]
$("#valveMaintenanceAddSaveButton").on('click', function () {

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    var toastContext = "";
    var valveMaintenanceUrl = "";

    if (isValveMaintenanceExist) {
        var valveMaintenanceModel = {
            Id: currentValveMaintenance.Id,
            KKSNo: $("#valveMaintenanceKKSNo").val(),
            SerialNo: $("#valveMaintenanceSerialNo").val(),
            SupplierManufacturare: $("#valveMaintenanceSupplierManufacturare").val(),
            Designation: $("#valveMaintenanceDesignation").val(),
            IdealBarg: $("#valveMaintenanceIdealBarg").val(),
            OpeningPressureBarg: $("#valveMaintenanceOpeningPressureBarg").val(),
            Remarks: $("#valveMaintenanceRemarks").val(),
            TestDate: $("#valveMaintenanceTestDate").val(),
            PlantArea: $("#valveMaintenancePlantArea").val(),
            CreatedDate: getDate(),
            QuartzItemId: item.Id,
            AttachmentIds: currentValveMaintenance.AttachmentIds
        }

        toastContext = "Valve Maintenance Update Successful!";
        valveMaintenanceUrl = itemController.ValveMaintenance.Update;
    }
    else {
        var valveMaintenanceModel = {
            KKSNo: $("#valveMaintenanceKKSNo").val(),
            SerialNo: $("#valveMaintenanceSerialNo").val(),
            SupplierManufacturare: $("#valveMaintenanceSupplierManufacturare").val(),
            Designation: $("#valveMaintenanceDesignation").val(),
            IdealBarg: $("#valveMaintenanceIdealBarg").val(),
            OpeningPressureBarg: $("#valveMaintenanceOpeningPressureBarg").val(),
            Remarks: $("#valveMaintenanceRemarks").val(),
            TestDate: $("#valveMaintenanceTestDate").val(),
            CreatedDate: getDate(),
            PlantArea: $("#valveMaintenancePlantArea").val(),
            QuartzItemId: item.Id,
            //AttachmentIds: null
        }

        toastContext = "Valve Maintenance Add Successful!";
        valveMaintenanceUrl = itemController.ValveMaintenance.Add;
    }

    $.ajax({
        type: "POST",
        url: valveMaintenanceUrl,
        data: { model: valveMaintenanceModel },
        success: function (response) {
            currentValveMaintenance = jQuery.parseJSON(response);
            loadValveMaintenancePage();
            toast(toastContext);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

// Thickness Measurement Add Modal > Save Button [Click Function]
$("#thicknessMeasurementAddSaveButton").on('click', function () {

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    var toastContext = "";
    var thicknessMeasurementUrl = "";

    if (isThicknessMeasurementExist) {
        var thicknessMeasurementModel = {
            Id: currentThicknessMeasurement.Id,
            PlantArea: $("#thicknessMeasurementPlantArea").val(),
            PlantSystem: $("#thicknessMeasurementPlantSystem").val(),
            Specification: $("#thicknessMeasurementSpecification").val(),
            NominalThickness: $("#thicknessMeasurementNominalThickness").val(),
            MeasuredThickness: $("#thicknessMeasurementMeasuredThickness").val(),
            Description: $("#thicknessMeasurementDescription").val(),
            CreatedDate: getDate(),
            QuartzItemId: item.Id,
            AttachmentIds: currentThicknessMeasurement.AttachmentIds
        }

        toastContext = "Thickness Measurement Update Successful!";
        thicknessMeasurementUrl = itemController.ThicknessMeasurement.Update;
    }
    else {
        var thicknessMeasurementModel = {
            PlantArea: $("#thicknessMeasurementPlantArea").val(),
            PlantSystem: $("#thicknessMeasurementPlantSystem").val(),
            Specification: $("#thicknessMeasurementSpecification").val(),
            NominalThickness: $("#thicknessMeasurementNominalThickness").val(),
            MeasuredThickness: $("#thicknessMeasurementMeasuredThickness").val(),
            Description: $("#thicknessMeasurementDescription").val(),
            CreatedDate: getDate(),
            QuartzItemId: item.Id,
        }

        toastContext = "Thickness Measurement Add Successful!";
        thicknessMeasurementUrl = itemController.ThicknessMeasurement.Add;
    }

    $.ajax({
        type: "POST",
        url: thicknessMeasurementUrl,
        data: { model: thicknessMeasurementModel },
        success: function (response) {
            currentThicknessMeasurement = jQuery.parseJSON(response);
            loadThicknessMeasurementPage();
            toast(toastContext);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});

// Item Delete Button [Click Function]
$("#deleteItem").on('click', function () {
    // clicked/created
    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    objectTypeToBeDeleted = "item";
    objectIdToBeDeleted = item.Id;
});

// Select/Option's [Get Functions]
function getInformationSelectOptions() {

    // #region Get Component Types for Select/Option
    $.ajax({
        type: "GET",
        url: lookupItemController.ComponentType.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationComponentType").children().remove();
            if (lastInformationsResponseModel.ComponentType == null) {
                $("#informationComponentType").append(
                    $('<option>', {
                        value: "select",
                        text: "Select Component Type",
                        id: "selectInformationComponentType"
                    })
                );
                $("#selectInformationComponentType").attr("hidden", "");
            }
            else {
                $("#informationComponentType").append(
                    $('<option>', {
                        value: lastInformationsResponseModel.ComponentType,
                        text: lastInformationsResponseModel.ComponentType,
                        id: "selectInformationComponentType"
                    })
                );
                $("#selectInformationComponentType").attr("hidden", "");
            }

            for (var i = 0; i < rModel.length; i++) {
                $("#informationComponentType").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    // #region Get Specification for Select/Option
    $.ajax({
        type: "GET",
        url: lookupItemController.Specification.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationSpecification").children().remove();

            if (lastInformationsResponseModel.Specification == null) {
                $("#informationSpecification").append(
                    $('<option>', {
                        value: "select",
                        text: "Select Specification",
                        id: "selectInformationSpecification"
                    })
                );
                $("#selectInformationSpecification").attr("hidden", "");
            }
            else {
                $("#informationSpecification").append(
                    $('<option>', {
                        value: lastInformationsResponseModel.Specification,
                        text: lastInformationsResponseModel.Specification,
                        id: "selectInformationSpecification"
                    })
                );
                $("#selectInformationSpecification").attr("hidden", "");
            }

            for (var i = 0; i < rModel.length; i++) {
                $("#informationSpecification").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    // #region Get Fitting Types for Select/Option
    $.ajax({
        type: "GET",
        url: lookupItemController.FittingType.List,
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationFittingType").children().remove();

            if (lastInformationsResponseModel.FittingType == null) {
                $("#informationFittingType").append(
                    $('<option>', {
                        value: "select",
                        text: "Select Fitting Type",
                        id: "selectInformationFittingType"
                    })
                );
                $("#selectInformationFittingType").attr("hidden", "");
            }
            else {
                $("#informationFittingType").append(
                    $('<option>', {
                        value: lastInformationsResponseModel.FittingType,
                        text: lastInformationsResponseModel.FittingType,
                        id: "selectInformationFittingType"
                    })
                );
                $("#selectInformationFittingType").attr("hidden", "");
            }

            for (var i = 0; i < rModel.length; i++) {
                $("#informationFittingType").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion

    // #region Get Weld Types for Select/Option
    $.ajax({
        type: "GET",
        url: lookupItemController.WeldType.List,

        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationWeldType").children().remove();

            if (lastInformationsResponseModel.WeldType == null) {
                $("#informationWeldType").append(
                    $('<option>', {
                        value: "select",
                        text: "Select Weld Type",
                        id: "selectInformationWeldType"
                    })
                );
                $("#selectInformationWeldType").attr("hidden", "");
            }
            else {
                $("#informationWeldType").append(
                    $('<option>', {
                        value: lastInformationsResponseModel.WeldType,
                        text: lastInformationsResponseModel.WeldType,
                        id: "selectInformationWeldType"
                    })
                );
                $("#selectInformationWeldType").attr("hidden", "");
            }

            for (var i = 0; i < rModel.length; i++) {
                $("#informationWeldType").append(
                    $('<option>', {
                        value: rModel[i].Name,
                        text: rModel[i].Name
                    })
                );
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
    // #endregion
}

// #region Item Modal

// Item Modal Home Page [Load Function]
function loadItemModalHomePage() {
    itemModalActivePartial = "Home";
    $("#itemModalSaveButton").attr("hidden", "");
    $("#itemShowLabel").removeAttr("hidden");
    $("#showlabelSpan").removeAttr("hidden");
    $("#deleteItem").removeAttr("hidden");

    $.ajax({
        type: "GET",
        url: itemController.Item.PartialView,
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            switch (clickedOrCreated) {
                case "clicked":
                    $("#itemModalTitle").html(lastClickedItem.TagNo);

                    if (lastClickedItem.ShowLabel == 1)
                        $('#itemShowLabel').prop('checked', true);
                    else $('#itemShowLabel').prop('checked', false);

                    // #region Information Count
                    $.ajax({
                        type: "GET",
                        url: itemController.Information.Detail,
                        data: { quartzItemId: lastClickedItem.Id },
                        success: function (response) {
                            information = jQuery.parseJSON(response);
                            if (information == null) {
                                $("#informationCount").text("0");
                            }
                            else $("#informationCount").text("1");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Inspection Count
                    $.ajax({
                        type: "GET",
                        url: itemController.Inspection.List,
                        data: { quartzItemId: lastClickedItem.Id },
                        success: function (response) {
                            inspections = jQuery.parseJSON(response);
                            if (inspections == null) {
                                $("#inspectionCount").text("0");
                            }
                            else {
                                $("#inspectionCount").text(inspections.length);
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Valve Maintenance Count
                    $.ajax({
                        type: "GET",
                        url: itemController.ValveMaintenance.List,
                        data: { quartzItemId: lastClickedItem.Id },
                        success: function (response) {
                            valveMaintenances = jQuery.parseJSON(response);
                            if (valveMaintenances == null) {
                                $("#valveMaintenanceCount").text("0");
                            }
                            else {
                                $("#valveMaintenanceCount").text(valveMaintenances.length);
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Thickness Measurement Count
                    $.ajax({
                        type: "GET",
                        url: itemController.ThicknessMeasurement.List,
                        data: { quartzItemId: lastClickedItem.Id },
                        success: function (response) {
                            thicknessMeasurements = jQuery.parseJSON(response);
                            if (thicknessMeasurements == null) {
                                $("#thicknessMeasurementCount").text("0");
                            }
                            else {
                                $("#thicknessMeasurementCount").text(thicknessMeasurements.length);
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion
                    break;

                case "created":
                    $("#itemModalTitle").html(lastCreatedItem.TagNo);

                    // #region Information Count
                    $.ajax({
                        type: "GET",
                        url: itemController.Information.Detail,
                        data: { quartzItemId: lastCreatedItem.Id },
                        success: function (response) {
                            information = jQuery.parseJSON(response);
                            if (information == null) {
                                $("#informationCount").text("0");
                            }
                            else $("#informationCount").text("1");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Inspection Count
                    $.ajax({
                        type: "GET",
                        url: itemController.Inspection.List,
                        data: { quartzItemId: lastCreatedItem.Id },
                        success: function (response) {
                            inspections = jQuery.parseJSON(response);
                            if (inspections == null) {
                                $("#inspectionCount").text("0");
                            }
                            else {
                                $("#inspectionCount").text(inspections.length);
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Valve Maintenance Count
                    $.ajax({
                        type: "GET",
                        url: itemController.ValveMaintenance.List,
                        data: { quartzItemId: lastCreatedItem.Id },
                        success: function (response) {
                            valveMaintenances = jQuery.parseJSON(response);
                            if (valveMaintenances == null) {
                                $("#valveMaintenanceCount").text("0");
                            }
                            else {
                                $("#valveMaintenanceCount").text(valveMaintenances.length);
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Thickness Measurement Count
                    $.ajax({
                        type: "GET",
                        url: itemController.ThicknessMeasurement.List,
                        data: { quartzItemId: lastCreatedItem.Id },
                        success: function (response) {
                            thicknessMeasurements = jQuery.parseJSON(response);
                            if (thicknessMeasurements == null) {
                                $("#thicknessMeasurementCount").text("0");
                            }
                            else {
                                $("#thicknessMeasurementCount").text(thicknessMeasurements.length);
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion
                    break;

                default:
            };
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    $("#itemModalBackButton").attr("hidden", "");
}

// Information Page [Load Function]
function loadInformationPage() {
    itemModalActivePartial = "Informations";
    $("#itemModalSaveButton").removeAttr("hidden");
    $("#itemShowLabel").attr("hidden", "");
    $("#showlabelSpan").attr("hidden", "");
    $("#deleteItem").attr("hidden", "");

    $.ajax({
        type: "GET",
        url: itemController.Information.PartialView,
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            // #region Get Information Details
            switch (clickedOrCreated) {
                case "clicked":
                    $("#itemModalTitle").html(lastClickedItem.TagNo + " | Information");

                    $.ajax({
                        type: "GET",
                        url: itemController.Information.Detail,
                        data: { quartzItemId: lastClickedItem.Id },
                        success: function (response) {
                            lastInformationsResponseModel = jQuery.parseJSON(response);
                            if (lastInformationsResponseModel != null) {
                                $("#informationTagNo").val(lastInformationsResponseModel.TagNo);
                                $("#informationSerialNo").val(lastInformationsResponseModel.SerialNo);
                                $("#informationComponentType").val(lastInformationsResponseModel.ComponentType);
                                $("#informationComments").val(lastInformationsResponseModel.Comments);
                                $("#informationSpecification").val(lastInformationsResponseModel.Specification);
                                $("#informationFittingType").val(lastInformationsResponseModel.FittingType);
                                $("#informationWeldType").val(lastInformationsResponseModel.WeldType);
                                $("#informationPipeOD").val(lastInformationsResponseModel.PipeOdIn);
                                $("#informationPipeThickness").val(lastInformationsResponseModel.PipeThicknessMm);
                                $("#informationOperatingTemp").val(lastInformationsResponseModel.OperatingTempC);
                                $("#informationOperatingPressute").val(lastInformationsResponseModel.OperatingPressureBar);
                                //$("#itemShowLabel").val(lastInformationsResponseModel.ShowLabel);
                                isInformationCreated = true;
                            }
                            else if (lastInformationsResponseModel == null) {
                                $("#informationTagNo").val(lastClickedItem.TagNo);
                                isInformationCreated = false;
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                case "created":
                    $("#itemModalTitle").html(lastCreatedItem.TagNo + " | Information");

                    $.ajax({
                        type: "GET",
                        url: itemController.Information.Detail,
                        data: { quartzItemId: lastCreatedItem.Id },
                        success: function (response) {
                            lastInformationsResponseModel = jQuery.parseJSON(response);
                            $("#informationTagNo").val(lastCreatedItem.TagNo);
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    break;

                default:
            }
            // #endregion

            setTimeout(getInformationSelectOptions, 100);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    $("#itemModalBackButton").removeAttr("hidden");

}

// Inspection Page [Load Function]
function loadInspectionPage() {
    itemModalActivePartial = "Inspection";
    $("#itemModalSaveButton").attr("hidden", "");
    $("#itemShowLabel").attr("hidden", "");
    $("#showlabelSpan").attr("hidden", "");
    $("#deleteItem").attr("hidden", "");

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $("#itemModalTitle").html(item.TagNo + " | Inspection");

    $.ajax({
        type: "GET",
        url: itemController.Inspection.PartialView,
        //data: { quartzItemId: itemId },
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.Inspection.List,
                data: { quartzItemId: item.Id },
                success: function (response) {
                    allInspections = jQuery.parseJSON(response);
                    $("#inspectionTable").children('tbody').children('tr').remove();

                    if (allInspections != "") {
                        //$('#inspectionTable').DataTable();

                        allInspections.forEach(function (inspection) {
                            var date = inspection.Date.split('T')[0];
                            $("#inspectionTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.ReportNo + "'>" + inspection.ReportNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + date + "'>" + date + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.Method + "'>" + inspection.Method + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.Status + "'>" + inspection.Status + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0 inspectionEditButton' data-bs-toggle='modal' data-bs-target='#AddInspectionData' onclick='openEditInspectionModal(" + inspection.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>",
                                        "<button type='button' id='" + inspection.Id + "' class='btn btn-dark p-0 inspectionDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                    )
                                )
                            );
                        });

                        // Inspection Edit Button [Click Function]
                        $(".inspectionEditButton").on('click', function () {
                            $('#itemModal').modal('toggle');
                        });

                        // Inspection Delete Button [Click Function]
                        $(".inspectionDeleteButton").on('click', function () {
                            objectIdToBeDeleted = $(this).attr('id');
                            objectTypeToBeDeleted = "inspection";

                            $("#itemModal").modal("hide");
                        });
                    }
                    else {
                        $("#inspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }

                    // #region Inspection "ADD" Button on 'click' function
                    $("#addInspectionDataButton").on('click', function () {
                        loadInspectionsDataPage();
                        $("#inspectionModalNav").attr("hidden", "");
                    });
                    // #endregion
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

    $("#itemModalBackButton").removeAttr("hidden");
}

// Data Tab [loadInspectionsDataPage()]
function loadInspectionsDataPage() {
    $("#InspectionAddModalTitle").html("Inspection Modal | Data");

    $.ajax({
        type: "GET",
        url: itemController.Inspection.DataPartialView,
        success: function (html) {
            $("#inspectionAddModalPartialArea").html(html);

            $("#inspectionReportNo").val('');
            $("#inspectionDate").val('');
            $("#inspectionDateDue").val('');
            $("#inspectionDetails").val('');
            $("#inspectionAddUploadFile").val('');
            $("#inspectionAddSelectedFile").text('');
            isInspectionExist = false;

            // #region Get Methods for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Method.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#inspectionMethod").children().remove();

                    $("#inspectionMethod").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Method",
                            id: "selectInspectionMethod"
                        })
                    );
                    $("#selectInspectionMethod").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionMethod").append(
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

            // #region Get Procedures for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Procedure.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#inspectionProcedure").children().remove();

                    $("#inspectionProcedure").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Procedure",
                            id: "selectInspectionProcedure"
                        })
                    );
                    $("#selectInspectionProcedure").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionProcedure").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            // #endregion

            // #region Get Technique for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Technique.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Options
                    $("#inspectionTechnique").children().remove();

                    $("#inspectionTechnique").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Technique",
                            id: "selectInspectionTechnique"
                        })
                    );
                    $("#selectInspectionTechnique").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionTechnique").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                }
            });
            // #endregion

            // #region Get Status for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Status.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#inspectionStatus").children().remove();

                    $("#inspectionStatus").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Status",
                            id: "selectInspectionStatus"
                        })
                    );
                    $("#selectInspectionStatus").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionStatus").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                }
            });
            // #endregion

        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

// Attachment Tab [loadInspectionsAttachmentPage()]
function loadInspectionsAttachmentPage() {
    $("#InspectionAddModalTitle").html("Inspection Modal | Attachment");

    $.ajax({
        type: "GET",
        url: itemController.Inspection.AttachmentPartialView,
        success: function (html) {
            $("#inspectionAddModalPartialArea").html(html);

            // #region Choose File Button > [Change Function]
            $("#inspectionAddUploadFile").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $("#inspectionAddSelectedFile").text("Selected File: " + fileName);
            });
            // #endregion

            // #region Create Table's Rows
            $("#itemAttachmentsTable").children('tbody').children('tr').remove();

            if (currentInspection.AttachmentIds == null) {
                $("#inspectionsAttachmentTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
            else {
                if (currentInspection.AttachmentIds.indexOf(",") == -1) {
                    var attachmentId = currentInspection.AttachmentIds
                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
                        data: { fileId: attachmentId },
                        success: function (response) {
                            var attachmentModel = jQuery.parseJSON(response);

                            if (attachmentModel == null) {
                                $("#inspectionsAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                    )
                                );
                            }
                            else {
                                var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                $("#inspectionsAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                            "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                            "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 inspectionDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                        )
                                    ),
                                );

                                // Inspection Delete Button [Click Function]
                                $(".inspectionDeleteButton").on('click', function () {
                                    objectIdToBeDeleted = $(this).attr('id');
                                    objectTypeToBeDeleted = "attachment";
                                    deleteThisWhichAttachment = "inspection";

                                    $("#AddInspectionData").modal("hide");
                                });
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                }
                else {
                    var attachmentIds = currentInspection.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: fileController.Detail,
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel == null) {
                                    $("#inspectionsAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                        )
                                    );
                                }
                                else {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#inspectionsAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                                "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                                "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 inspectionDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                            )
                                        ),
                                    );

                                    // Inspection Delete Button [Click Function]
                                    $(".inspectionDeleteButton").on('click', function () {
                                        objectIdToBeDeleted = $(this).attr('id');
                                        objectTypeToBeDeleted = "attachment";
                                        deleteThisWhichAttachment = "inspection";

                                        $("#AddInspectionData").modal("hide");
                                    });
                                }
                            },
                            error: function (error) {
                                alert("error!");
                                console.log(error.responseText);
                            }
                        });
                    }
                }
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

// Valve Maintenance Page [Load Function]
function loadValveMaintenancePage() {
    itemModalActivePartial = "ValveMaintenance";
    $("#itemModalSaveButton").attr("hidden", "");
    $("#itemShowLabel").attr("hidden", "");
    $("#showlabelSpan").attr("hidden", "");
    $("#deleteItem").attr("hidden", "");

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $("#itemModalTitle").html(item.TagNo + " | Valve Maintenance");

    $.ajax({
        type: "GET",
        url: itemController.ValveMaintenance.PartialView,
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.ValveMaintenance.List,
                data: { quartzItemId: item.Id },
                success: function (response) {
                    allValveMaintenances = jQuery.parseJSON(response);
                    $("#valveMaintenanceTable").children('tbody').children('tr').remove();

                    if (allValveMaintenances != "") {
                        //$('#valveMaintenanceTable').DataTable();

                        allValveMaintenances.forEach(function (valveMaintenance) {
                            var date = valveMaintenance.TestDate.split('T')[0];
                            $("#valveMaintenanceTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.KKSNo + "'>" + valveMaintenance.KKSNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.SerialNo + "'>" + valveMaintenance.SerialNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.OpeningPressureBarg + "'>" + valveMaintenance.OpeningPressureBarg + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + date + "'>" + date + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0 valveMaintenanceEditButton' data-bs-toggle='modal' data-bs-target='#AddValveMaintenanceData' onclick='openEditValveMaintenanceModal(" + valveMaintenance.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>",
                                        "<button type='button' id='" + valveMaintenance.Id + "' class='btn btn-dark p-0 valveMaintenanceDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa-solid fa-trash-can'></i></button>"
                                    )
                                )
                            );
                        });

                        // Valve Maintenance Edit Button [Click Function]
                        $(".valveMaintenanceEditButton").on('click', function () {
                            $('#itemModal').modal('toggle');
                        });

                        // Valve Maintenance Delete Button [Click Function]
                        $(".valveMaintenanceDeleteButton").on('click', function () {
                            objectIdToBeDeleted = $(this).attr('id');
                            objectTypeToBeDeleted = "valveMaintenance";

                            $("#itemModal").modal("hide");
                        });
                    }
                    else {
                        $("#valveMaintenanceTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }

                    // #region Valve Maintenance "ADD" Button on 'click' function
                    $("#addValveMaintenanceDataButton").on('click', function () {
                        loadValveMaintenancesDataPage();
                        $("#valveMaintenanceModalNav").attr("hidden", "");
                    });
                    // #endregion
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

    $("#itemModalBackButton").removeAttr("hidden");
}

// Data Tab [loadValveMaintenanceDataPage]
function loadValveMaintenancesDataPage() {
    $("#valveMaintenanceModalTitle").html("Valve Maintenance | Data");

    $.ajax({
        type: "GET",
        url: itemController.ValveMaintenance.DataPartialView,
        success: function (html) {
            $("#valveMaintenanceAddModalPartialArea").html(html);

            $("#valveMaintenanceKKSNo").val('');
            $("#valveMaintenanceSerialNo").val('');
            $("#valveMaintenanceIdealBarg").val('');
            $("#valveMaintenanceOpeningPressureBarg").val('');
            $("#valveMaintenanceTestDate").val('');
            $("#valveMaintenanceSupplierManufacturare").val('');
            $("#valveMaintenanceDesignation").val('');
            $("#valveMaintenanceRemarks").val('');
            $("#valveMaintenancePlantArea").text('');
            isValveMaintenanceExist = false;

            // #region Get Plant Area for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.PlantArea.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#valveMaintenancePlantArea").children().remove();

                    $("#valveMaintenancePlantArea").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Plant Area",
                            id: "selectValveMaintenancePlantArea"
                        })
                    );
                    $("#selectValveMaintenancePlantArea").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#valveMaintenancePlantArea").append(
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

        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

// Attachment Tab [loadValveMaintenanceAttachmentPage()]
function loadValveMaintenancesAttachmentPage() {
    $("#valveMaintenanceModalTitle").html("Valve Maintenance | Attachment");

    $.ajax({
        type: "GET",
        url: itemController.ValveMaintenance.AttachmentPartialView,
        success: function (html) {
            $("#valveMaintenanceAddModalPartialArea").html(html);

            // #region Choose File Button > [Change Function]
            $("#valveMaintenanceUploadFile").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $("#valveMaintenanceSelectedFile").text("Selected File: " + fileName);
            });
            // #endregion

            // #region Create Table's Rows
            $("#valveMaintenancesAttachmentTable").children('tbody').children('tr').remove();

            if (currentValveMaintenance.AttachmentIds != null) {
                if (currentValveMaintenance.AttachmentIds.indexOf(",") == -1) {
                    var attachmentId = currentValveMaintenance.AttachmentIds
                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
                        data: { fileId: attachmentId },
                        success: function (response) {
                            var attachmentModel = jQuery.parseJSON(response);

                            if (attachmentModel == null) {
                                $("#valveMaintenancesAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                    )
                                );
                            }
                            else {
                                var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                $("#valveMaintenancesAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                            "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                            "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 valveMaintenanceAttachmentDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                        )
                                    ),
                                );

                                // Valve Maintenance Delete Button [Click Function]
                                $(".valveMaintenanceAttachmentDeleteButton").on('click', function () {
                                    objectIdToBeDeleted = $(this).attr('id');
                                    objectTypeToBeDeleted = "attachment";
                                    deleteThisWhichAttachment = "valveMaintenance";

                                    $("#AddValveMaintenanceData").modal("hide");
                                });
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                }
                else {
                    var attachmentIds = currentValveMaintenance.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: fileController.Detail,
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel != "") {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#valveMaintenancesAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                                "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                                "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 valveMaintenanceAttachmentDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                            )
                                        ),
                                    );

                                    // Valve Maintenance Button [Click Function]
                                    $(".valveMaintenanceAttachmentDeleteButton").on('click', function () {
                                        objectIdToBeDeleted = $(this).attr('id');
                                        objectTypeToBeDeleted = "attachment";
                                        deleteThisWhichAttachment = "valveMaintenance";

                                        $("#AddValveMaintenanceData").modal("hide");
                                    });
                                }
                                else {
                                    $("#valveMaintenancesAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                        )
                                    );
                                }
                            },
                            error: function (error) {
                                alert("error!");
                                console.log(error.responseText);
                            }
                        });
                    }
                }
            }
            else {
                $("#valveMaintenancesAttachmentTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

// Thickness Measurement Page [Load Function]
function loadThicknessMeasurementPage() {
    $("#itemModalTitle").html("Item Modal | Thickness Measurement");
    itemModalActivePartial = "ThicknessMeasurement";
    $("#itemModalSaveButton").attr("hidden", "");
    $("#itemShowLabel").attr("hidden", "");
    $("#showlabelSpan").attr("hidden", "");
    $("#deleteItem").attr("hidden", "");

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $("#itemModalTitle").html(item.TagNo + " | Thickness Measurement");

    $.ajax({
        type: "GET",
        url: itemController.ThicknessMeasurement.PartialView,
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.ThicknessMeasurement.List,
                data: { quartzItemId: item.Id },
                success: function (response) {
                    allThicknessMeasurements = jQuery.parseJSON(response);
                    $("#thicknessMeasurementTable").children('tbody').children('tr').remove();

                    if (allThicknessMeasurements != "") {
                        //$('#thicknessMeasurementTable').DataTable();

                        allThicknessMeasurements.forEach(function (thicknessMeasurement) {
                            //var date = thicknessMeasurement.TestDate.split('T')[0];
                            $("#thicknessMeasurementTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.PlantArea + "'>" + thicknessMeasurement.PlantArea + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.PlantSystem + "'>" + thicknessMeasurement.PlantSystem + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.Specification + "'>" + thicknessMeasurement.Specification + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.NominalThickness + "'>" + thicknessMeasurement.NominalThickness + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.MeasuredThickness + "'>" + thicknessMeasurement.MeasuredThickness + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.Description + "'>" + thicknessMeasurement.Description + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0 thicknessMeasurementEditButton' data-bs-toggle='modal' data-bs-target='#AddThicknessMeasurementData' onclick='openEditThicknessMeasurementModal(" + thicknessMeasurement.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>",
                                        "<button type='button' id='" + thicknessMeasurement.Id + "' class='btn btn-dark p-0 thicknessMeasurementDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa-solid fa-trash-can'></i></button>"
                                    )
                                )
                            );
                        });

                        // Thickness Measurement Edit Button [Click Function]
                        $(".thicknessMeasurementEditButton").on('click', function () {
                            $('#itemModal').modal('toggle');
                        });

                        // Thickness Measurement Delete Button [Click Function]
                        $(".thicknessMeasurementDeleteButton").on('click', function () {
                            objectIdToBeDeleted = $(this).attr('id');
                            objectTypeToBeDeleted = "thicknessMeasurement";

                            $("#itemModal").modal("hide");
                        });
                    }
                    else {
                        $("#thicknessMeasurementTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "7", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }

                    // #region Valve Maintenance "ADD" Button on 'click' function
                    $("#addThicknessMeasurementDataButton").on('click', function () {
                        loadThicknessMeasurementDataPage();
                        $("#thicknessMeasurementModalNav").attr("hidden", "");
                    });
                    // #endregion
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

    $("#itemModalBackButton").removeAttr("hidden");
}

// Data Tab [loadThicknessMeasurementDataPage]
function loadThicknessMeasurementDataPage() {
    $("#thicknessMeasurementModalTitle").html("Thickness Measurement | Data");

    $.ajax({
        type: "GET",
        url: itemController.ThicknessMeasurement.DataPartialView,
        success: function (html) {
            $("#thicknessMeasurementAddModalPartialArea").html(html);

            $("#thicknessMeasurementPlantArea").val('');
            $("#thicknessMeasurementPlantSystem").val('');
            $("#thicknessMeasurementSpecification").val('');
            $("#thicknessMeasurementNominalThickness").val('');
            $("#thicknessMeasurementMeasuredThickness").val('');
            $("#thicknessMeasurementDescription").val('');

            isThicknessMeasurementExist = false;

            // #region Get Plant Area for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.PlantArea.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#thicknessMeasurementPlantArea").children().remove();

                    $("#thicknessMeasurementPlantArea").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Plant Area",
                            id: "selectThicknessMeasurementPlantArea"
                        })
                    );
                    $("#selectThicknessMeasurementPlantArea").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#thicknessMeasurementPlantArea").append(
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

            // #region Get Plant System for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.PlantSystem.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#thicknessMeasurementPlantSystem").children().remove();

                    $("#thicknessMeasurementPlantSystem").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Plant System",
                            id: "selectThicknessMeasurementPlantSystem"
                        })
                    );
                    $("#selectThicknessMeasurementPlantSystem").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#thicknessMeasurementPlantSystem").append(
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

            // #region Get Specification for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Specification.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#thicknessMeasurementSpecification").children().remove();

                    $("#thicknessMeasurementSpecification").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Specification",
                            id: "selectThicknessMeasurementSpecification"
                        })
                    );
                    $("#selectThicknessMeasurementSpecification").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#thicknessMeasurementSpecification").append(
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

        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

// Attachment Tab [loadThicknessMeasurementAttachmentPage()]
function loadThicknessMeasurementAttachmentPage() {
    $("#thicknessMeasurementModalTitle").html("Thickness Measurement | Attachment");

    $.ajax({
        type: "GET",
        url: itemController.ThicknessMeasurement.AttachmentPartialView,
        success: function (html) {
            $("#thicknessMeasurementAddModalPartialArea").html(html);

            // #region Choose File Button > [Change Function]
            $("#thicknessMeasurementUploadFile").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $("#thicknessMeasurementSelectedFile").text("Selected File: " + fileName);
            });
            // #endregion

            // #region Create Table's Rows
            $("#thicknessMeasurementAttachmentTable").children('tbody').children('tr').remove();

            if (currentThicknessMeasurement.AttachmentIds != null) {
                if (currentThicknessMeasurement.AttachmentIds.indexOf(",") == -1) {
                    var attachmentId = currentThicknessMeasurement.AttachmentIds
                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
                        data: { fileId: attachmentId },
                        success: function (response) {
                            var attachmentModel = jQuery.parseJSON(response);

                            if (attachmentModel == null) {
                                $("#thicknessMeasurementAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                    )
                                );
                            }
                            else {
                                var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                $("#thicknessMeasurementAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                            "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                            "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 thicknessMeasurementDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                        )
                                    ),
                                );

                                // Thickness Measurement Delete Button [Click Function]
                                $(".thicknessMeasurementDeleteButton").on('click', function () {
                                    objectIdToBeDeleted = $(this).attr('id');
                                    objectTypeToBeDeleted = "attachment";
                                    deleteThisWhichAttachment = "thicknessMeasurement";

                                    $("#AddThicknessMeasurementData").modal("hide");
                                });
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                }
                else {
                    var attachmentIds = currentThicknessMeasurement.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: fileController.Detail,
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel != "") {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#thicknessMeasurementAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                                "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border:0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                                "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 thicknessMeasurementDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                            )
                                        ),
                                    );

                                    // Thickness Measurement Delete Button [Click Function]
                                    $(".thicknessMeasurementDeleteButton").on('click', function () {
                                        objectIdToBeDeleted = $(this).attr('id');
                                        objectTypeToBeDeleted = "attachment";
                                        deleteThisWhichAttachment = "thicknessMeasurement";

                                        $("#AddThicknessMeasurementData").modal("hide");
                                    });
                                }
                                else {
                                    $("#thicknessMeasurementAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                        )
                                    );
                                }
                            },
                            error: function (error) {
                                alert("error!");
                                console.log(error.responseText);
                            }
                        });
                    }
                }
            }
            else {
                $("#thicknessMeasurementAttachmentTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
            // #endregion
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

// Attachment Page [Load Function]
function loadAttachmentPage() {
    $("#itemModalTitle").html("Item Modal | Attachment");
    itemModalActivePartial = "Attachments";
    $("#itemModalSaveButton").attr("hidden", "");
    $("#itemShowLabel").attr("hidden", "");
    $("#showlabelSpan").attr("hidden", "");
    $("#deleteItem").attr("hidden", "");

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $.ajax({
        type: "GET",
        url: itemController.Item.AttachmentPartialView,
        success: function (html) {
            $("#itemModalPartialArea").html(html);
            $("#itemAttachmentsTable").children('tbody').children('tr').remove();

            // #region Choose File Button > [Change Function]
            $("#itemModalUploadFile").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $("#itemModalAttachmentSelectedFile").text("Selected File: " + fileName);
            });
            // #endregion

            if (item.AttachmentIds != null) {
                if (item.AttachmentIds.indexOf(",") == -1) {
                    var attachmentId = item.AttachmentIds;
                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
                        data: { fileId: attachmentId },
                        success: function (response) {
                            attachmentModel = jQuery.parseJSON(response);

                            if (attachmentModel != "") {
                                var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                $("#itemAttachmentsTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                            "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                            "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 itemAttachmentDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                        )
                                    ),
                                )

                                // Item Attachment Button [Click Function]
                                $(".itemAttachmentDeleteButton").on('click', function () {
                                    objectIdToBeDeleted = $(this).attr('id');
                                    objectTypeToBeDeleted = "attachment";
                                    deleteThisWhichAttachment = "item";

                                    $("#itemModal").modal("hide");
                                });
                            }
                            else {
                                $("#itemAttachmentsTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                    )
                                );
                            }
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                }
                else {
                    var attachmentIds = item.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: fileController.Detail,
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel != "" || attachmentModel != null) {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#itemAttachmentsTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Name + "'>" + attachmentModel.Name + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.Type + "'>" + attachmentModel.Type + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + attachmentModel.UploadedBy + "'>" + attachmentModel.UploadedBy + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + uploadedDate + "'>" + uploadedDate + "</p>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<button type='button' onclick='showFileModal(\"" + attachmentModel.Path + "\" , \"" + attachmentModel.Type + "\")' class='btn btn-dark p-0' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-right: 1px;'><i class='fa fa-eye'></i></button>",
                                                "<a href='" + downloadFile + " + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>",
                                                "<button type='button' id='" + attachmentModel.Id + "' class='btn btn-dark p-0 itemAttachmentDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                            )
                                        ),
                                    );

                                    // Item Attachment Button [Click Function]
                                    $(".itemAttachmentDeleteButton").on('click', function () {
                                        objectIdToBeDeleted = $(this).attr('id');
                                        objectTypeToBeDeleted = "attachment";
                                        deleteThisWhichAttachment = "item";

                                        $("#itemModal").modal("hide");
                                    });
                                }
                                else {
                                    $("#itemAttachmentsTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                        )
                                    );
                                }
                            },
                            error: function (error) {
                                alert("error!");
                                console.log(error.responseText);
                            }
                        });
                    }
                }
            }
            else {
                $("#itemAttachmentsTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        }
    });

    $("#itemModalBackButton").removeAttr("hidden");
}

// Edit Inspection Modal > [Load Function]
function openEditInspectionModal(inspectionId) {
    $("#InspectionAddModalTitle").html("Inspection Modal | Data");
    $("#inspectionAddSelectedFile").text('');
    $("#inspectionModalNav").removeAttr("hidden");

    $.ajax({
        type: "GET",
        url: itemController.Inspection.DataPartialView,
        success: function (html) {
            $("#inspectionAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.Inspection.Detail,
                data: { inspectionId: inspectionId },
                success: function (response) {
                    var inspectionDetail = jQuery.parseJSON(response);
                    if (inspectionDetail != null) {
                        isInspectionExist = true;
                        currentInspection = inspectionDetail;
                    }
                    var date = inspectionDetail.Date.split('T')[0];
                    var dueDate = inspectionDetail.DueDate.split('T')[0];

                    $("#inspectionReportNo").val(inspectionDetail.ReportNo);
                    $("#inspectionDate").val(date);
                    $("#inspectionDateDue").val(dueDate);
                    $("#inspectionMethod").val(inspectionDetail.Method);
                    $("#inspectionProcedure").val(inspectionDetail.Procedure);
                    $("#inspectionTechnique").val(inspectionDetail.Technique);
                    $("#inspectionStatus").val(inspectionDetail.Status);
                    $("#inspectionDetails").val(inspectionDetail.Details);

                    // #region Get Method for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Method.List,
                        success: function (response) {
                            methods = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#inspectionMethod").children().remove();

                            $("#inspectionMethod").append(
                                $('<option>', {
                                    value: inspectionDetail.Method,
                                    text: inspectionDetail.Method,
                                    id: "selectInspectionMethod"
                                })
                            );
                            $("#selectInspectionMethod").attr("hidden", "");

                            for (var i = 0; i < methods.length; i++) {
                                $("#inspectionMethod").append(
                                    $('<option>', {
                                        value: methods[i].Name,
                                        text: methods[i].Name
                                    })
                                );
                            }
                            // #endregion
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Get Procedure for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Procedure.List,
                        success: function (response) {
                            procedures = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#inspectionProcedure").children().remove();

                            $("#inspectionProcedure").append(
                                $('<option>', {
                                    value: inspectionDetail.Procedure,
                                    text: inspectionDetail.Procedure,
                                    id: "selectInspectionProcedure"
                                })
                            );
                            $("#selectInspectionProcedure").attr("hidden", "");

                            for (var i = 0; i < procedures.length; i++) {
                                $("#inspectionProcedure").append(
                                    $('<option>', {
                                        value: procedures[i].Name,
                                        text: procedures[i].Name
                                    })
                                );
                            }
                            // #endregion
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Get Technique for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Technique.List,
                        success: function (response) {
                            techniques = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#inspectionTechnique").children().remove();

                            $("#inspectionTechnique").append(
                                $('<option>', {
                                    value: inspectionDetail.Technique,
                                    text: inspectionDetail.Technique,
                                    id: "selectInspectionTechnique"
                                })
                            );
                            $("#selectInspectionTechnique").attr("hidden", "");

                            for (var i = 0; i < techniques.length; i++) {
                                $("#inspectionTechnique").append(
                                    $('<option>', {
                                        value: techniques[i].Name,
                                        text: techniques[i].Name
                                    })
                                );
                            }
                            // #endregion
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Get Status for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Status.List,
                        success: function (response) {
                            statuses = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#inspectionStatus").children().remove();

                            $("#inspectionStatus").append(
                                $('<option>', {
                                    value: inspectionDetail.Status,
                                    text: inspectionDetail.Status,
                                    id: "selectInspectionStatus"
                                })
                            );
                            $("#selectInspectionStatus").attr("hidden", "");

                            for (var i = 0; i < statuses.length; i++) {
                                $("#inspectionStatus").append(
                                    $('<option>', {
                                        value: statuses[i].Name,
                                        text: statuses[i].Name
                                    })
                                );
                            }
                            // #endregion
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                    // #endregion

                    // #region Inspection Data Page > Choose File Button > [Change Function]
                    $("#inspectionAddUploadFile").on('change', function (e) {
                        alert("brr!");
                        var fileName = e.target.files[0].name;
                        $("#inspectionAddSelectedFile").text("Selected File: " + fileName);
                    });
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

// Edit Valve Maintenance Modal > [Load Function]
function openEditValveMaintenanceModal(valveMaintenanceId) {
    $("#valveMaintenanceModalTitle").html("Valve Maintenance | Data");
    $("#valveMaintenanceSelectedFile").text('');
    $("#valveMaintenanceModalNav").removeAttr("hidden");

    $.ajax({
        type: "GET",
        url: itemController.ValveMaintenance.DataPartialView,
        success: function (html) {
            $("#valveMaintenanceAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.ValveMaintenance.Detail,
                data: { valveMaintenanceId: valveMaintenanceId },
                success: function (response) {
                    var valveMaintenanceDetail = jQuery.parseJSON(response);
                    if (valveMaintenanceDetail != null) {
                        isValveMaintenanceExist = true;
                        currentValveMaintenance = valveMaintenanceDetail;
                    }
                    var testDate = valveMaintenanceDetail.TestDate.split('T')[0];

                    $("#valveMaintenanceKKSNo").val(valveMaintenanceDetail.KKSNo);
                    $("#valveMaintenanceSerialNo").val(valveMaintenanceDetail.SerialNo);
                    $("#valveMaintenanceSupplierManufacturare").val(valveMaintenanceDetail.SupplierManufacturare);
                    $("#valveMaintenanceDesignation").val(valveMaintenanceDetail.Designation);
                    $("#valveMaintenanceIdealBarg").val(valveMaintenanceDetail.IdealBarg);
                    $("#valveMaintenanceOpeningPressureBarg").val(valveMaintenanceDetail.OpeningPressureBarg);
                    $("#valveMaintenanceRemarks").val(valveMaintenanceDetail.Remarks);
                    $("#valveMaintenanceTestDate").val(testDate);

                    // #region Get Plant Area for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.PlantArea.List,
                        success: function (response) {
                            rModel = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#valveMaintenancePlantArea").children().remove();

                            $("#valveMaintenancePlantArea").append(
                                $('<option>', {
                                    value: valveMaintenanceDetail.PlantArea,
                                    text: valveMaintenanceDetail.PlantArea,
                                    id: "selectValveMaintenancePlantArea"
                                })
                            );
                            $("#selectValveMaintenancePlantArea").attr("hidden", "");

                            for (var i = 0; i < rModel.length; i++) {
                                $("#valveMaintenancePlantArea").append(
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

                    // #region Valve Maintenance Page > Choose File Button > [Change Function]
                    $("#valveMaintenanceUploadFile").on('change', function (e) {
                        var fileName = e.target.files[0].name;
                        $("#valveMaintenanceSelectedFile").text("Selected File: " + fileName);
                    });
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

// Edit Thickness Measurement Modal > [Load Function]
function openEditThicknessMeasurementModal(thicknessMeasurementId) {
    $("#thicknessMeasurementModalTitle").html("Thickness Measurement | Data");
    $("#thicknessMeasurementSelectedFile").text('');
    $("#thicknessMeasurementModalNav").removeAttr("hidden");

    $.ajax({
        type: "GET",
        url: itemController.ThicknessMeasurement.DataPartialView,
        success: function (html) {
            $("#thicknessMeasurementAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.ThicknessMeasurement.Detail,
                data: { thicknessMeasurementId: thicknessMeasurementId },
                success: function (response) {
                    var thicknessMeasurementDetail = jQuery.parseJSON(response);
                    if (thicknessMeasurementDetail != null) {
                        isThicknessMeasurementExist = true;
                        currentThicknessMeasurement = thicknessMeasurementDetail;
                    }

                    $("#thicknessMeasurementPlantArea").val(thicknessMeasurementDetail.PlantArea);
                    $("#thicknessMeasurementPlantSystem").val(thicknessMeasurementDetail.PlantSystem);
                    $("#thicknessMeasurementSpecification").val(thicknessMeasurementDetail.Specification);
                    $("#thicknessMeasurementNominalThickness").val(thicknessMeasurementDetail.NominalThickness);
                    $("#thicknessMeasurementMeasuredThickness").val(thicknessMeasurementDetail.MeasuredThickness);
                    $("#thicknessMeasurementDescription").val(thicknessMeasurementDetail.Description);

                    // #region Get Plant Area for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.PlantArea.List,
                        success: function (response) {
                            rModel = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#thicknessMeasurementPlantArea").children().remove();

                            $("#thicknessMeasurementPlantArea").append(
                                $('<option>', {
                                    value: thicknessMeasurementDetail.PlantArea,
                                    text: thicknessMeasurementDetail.PlantArea,
                                    id: "selectThicknessMeasurementPlantArea"
                                })
                            );
                            $("#selectThicknessMeasurementPlantArea").attr("hidden", "");

                            for (var i = 0; i < rModel.length; i++) {
                                $("#thicknessMeasurementPlantArea").append(
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

                    // #region Get Plant System for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.PlantSystem.List,
                        success: function (response) {
                            rModel = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#thicknessMeasurementPlantSystem").children().remove();

                            $("#thicknessMeasurementPlantSystem").append(
                                $('<option>', {
                                    value: thicknessMeasurementDetail.PlantSystem,
                                    text: thicknessMeasurementDetail.PlantSystem,
                                    id: "selectThicknessMeasurementPlantSystem"
                                })
                            );
                            $("#selectThicknessMeasurementPlantSystem").attr("hidden", "");

                            for (var i = 0; i < rModel.length; i++) {
                                $("#thicknessMeasurementPlantSystem").append(
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

                    // #region Get Specification for Select > Option
                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Specification.List,
                        success: function (response) {
                            rModel = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#thicknessMeasurementSpecification").children().remove();

                            $("#thicknessMeasurementSpecification").append(
                                $('<option>', {
                                    value: thicknessMeasurementDetail.Specification,
                                    text: thicknessMeasurementDetail.Specification,
                                    id: "selectThicknessMeasurementPlantArea"
                                })
                            );
                            $("#selectThicknessMeasurementPlantArea").attr("hidden", "");

                            for (var i = 0; i < rModel.length; i++) {
                                $("#thicknessMeasurementSpecification").append(
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

                    // #region Thickness Measurement Page > Choose File Button > [Change Function]
                    $("#thicknessMeasurementUploadFile").on('change', function (e) {
                        var fileName = e.target.files[0].name;
                        $("#thicknessMeasurementSelectedFile").text("Selected File: " + fileName);
                    });
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

// Show Label
$("#itemShowLabel").on('change', function () {
    var item;
    if (clickedOrCreated == 'clicked')
        item = lastClickedItem;
    if (clickedOrCreated == 'created')
        item = lastCreatedItem;

    item.ShowLabel = $("#itemShowLabel").prop('checked');

    $.ajax({
        type: "POST",
        url: itemController.Item.Update,
        data: { model: item },
        success: function (response) {
            //clickedOrCreated = "null";
            function wait() {
                //$("#shapeArea").children().remove();
                //createList();
                // Load Spinner Yap! [TAMAMLANMADI]

                //selectedFeature.setProperties({ 'ShowLabel': item.ShowLabel });
                updateDrawingFeatures();
                source.clear();
                addFeatureToSource();
            }
            setTimeout(wait, 100);
            toast("Item Update Successful!");
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    if (clickedOrCreated == "clicked")
        lastClickedItem = item;
    if (clickedOrCreated == "created")
        lastCreatedItem = item;
});
// #endregion