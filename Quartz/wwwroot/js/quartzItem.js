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
            url: "QuartzItem/UpdateInformationJSON",
            data: { model: itemInformationUpdateModel },
            success: function (response) {
                rModel = jQuery.parseJSON(response);

                $.get({
                    url: "QuartzItem/GetItemDetailJSON",
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
                        $("#itemModalTitle").html(lastClickedItem.TagNo + " | Information");

                        $.post({
                            url: "QuartzItem/UpdateItemJSON",
                            data: { model: item },
                            success: function () {
                                function waitFunc() {
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
            url: "QuartzItem/AddInformationJSON",
            data: { model: itemInformationAddModel },
            success: function (response) {
                rModel = jQuery.parseJSON(response);

                $.get({
                    url: "QuartzItem/GetItemDetailJSON",
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
                            url: "QuartzItem/UpdateItemJSON",
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
            break;

        case 'Attachment':
            loadInspectionsAttachmentPage();
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
            break;

        case 'Attachment':
            loadValveMaintenancesAttachmentPage();
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
            break;

        case 'Attachment':
            loadThicknessMeasurementAttachmentPage();
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
        inspectionUrl = "QuartzItem/UpdateInspectionJSON";
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
        inspectionUrl = "QuartzItem/AddInspectionJSON";
    }

    $.ajax({
        type: "POST",
        url: inspectionUrl,
        data: { model: itemInspectionModel },
        success: function (response) {
            currentInspection = jQuery.parseJSON(response);
            loadInspectionPage();
            toast(toastContext);
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
        valveMaintenanceUrl = "QuartzItem/UpdateValveMaintenanceJSON";
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
        valveMaintenanceUrl = "QuartzItem/AddValveMaintenanceJSON";
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
        thicknessMeasurementUrl = "QuartzItem/UpdateThicknessMeasurementJSON";
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
        thicknessMeasurementUrl = "QuartzItem/AddThicknessMeasurementJSON";
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
    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    objectToBeDeleted = item;
    objectTypeToBeDeleted = "item";
});

// Select/Option's [Get Functions]
function getInformationSelectOptions() {

    // #region Get Component Types for Select/Option
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetComponentTypeForOption",
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationComponentType").children().remove();

            if (!isInformationCreated) {
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
        url: "LookUpItems/GetSpecificationForOption",
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationSpecification").children().remove();

            if (!isInformationCreated) {
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
        url: "LookUpItems/GetFittingTypeForOption",
        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationFittingType").children().remove();

            if (!isInformationCreated) {
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
        url: "LookUpItems/GetWeldTypeForOption",

        success: function (response) {
            rModel = jQuery.parseJSON(response);

            // #region Create & Configure Select > Option
            $("#informationWeldType").children().remove();

            if (!isInformationCreated) {
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
    $("#itemShowLabel").attr("hidden", "");
    $("#showlabelSpan").attr("hidden", "");

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetQuartzItemsHomePagePartialView",
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            switch (clickedOrCreated) {
                case "clicked":
                    $("#itemModalTitle").html(lastClickedItem.TagNo);

                    // #region Information Count
                    $.ajax({
                        type: "GET",
                        url: "QuartzItem/GetInformationDetailJSON",
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
                        url: "QuartzItem/GetAllInspections",
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
                        url: "QuartzItem/GetAllValveMaintenancesJSON",
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
                        url: "QuartzItem/GetAllThicknessMeasurementsJSON",
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
                        url: "QuartzItem/GetInformationDetailJSON",
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
                        url: "QuartzItem/GetAllInspections",
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
                        url: "QuartzItem/GetAllValveMaintenancesJSON",
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
                        url: "QuartzItem/GetAllThicknessMeasurementsJSON",
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
    $("#itemShowLabel").removeAttr("hidden");
    $("#showlabelSpan").removeAttr("hidden");

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetInformationPartialView",
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            // #region Get Information Details
            switch (clickedOrCreated) {
                case "clicked":
                    $("#itemModalTitle").html(lastClickedItem.TagNo + " | Information");

                    $.ajax({
                        type: "GET",
                        url: "QuartzItem/GetInformationDetailJSON",
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
                                $("#itemShowLabel").val(lastInformationsResponseModel.ShowLabel);
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
                        url: "QuartzItem/GetInformationDetailJSON",
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

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $("#itemModalTitle").html(item.TagNo + " | Inspection");

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetInspectionPartialView",
        //data: { quartzItemId: itemId },
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetAllInspections",
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
                                        "<strong>" + inspection.ReportNo + "</strong>"
                                    ),
                                    $('<td>', {
                                        align: "center",
                                        text: date
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: inspection.Method
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: inspection.Status
                                    }),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0' data-bs-toggle='modal' data-bs-target='#AddInspectionData' onclick='openEditInspectionModal(" + inspection.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-info'></i></button>"
                                    )
                                )
                            );
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
        url: "QuartzItem/GetInspectionsDataPartialView",
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
                url: "LookUpItems/GetMethodForOption",
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
                url: "LookUpItems/GetProcedureForOption",
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
                url: "LookUpItems/GetTechniqueForOption",
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
                url: "LookUpItems/GetStatusForOption",
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
        url: "QuartzItem/GetInspectionsAttachmentPartialView",
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
                        url: "FileUpload/GetFileDetail",
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
                                            "<strong>" + attachmentModel.Name + "</strong>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.Type
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.UploadedBy
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            uploadedDate
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                        )
                                    ),
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
                    var attachmentIds = currentInspection.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: "FileUpload/GetFileDetail",
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
                                                "<strong>" + attachmentModel.Name + "</strong>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.Type
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.UploadedBy
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                uploadedDate
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                            )
                                        ),
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

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $("#itemModalTitle").html(item.TagNo + " | Valve Maintenance");

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetValveMaintenancePartialView",
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetAllValveMaintenancesJSON",
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
                                        "<strong>" + valveMaintenance.KKSNo + "</strong>"
                                    ),
                                    $('<td>', {
                                        align: "center",
                                        text: valveMaintenance.SerialNo
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: valveMaintenance.OpeningPressureBarg
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: date
                                    }),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0' data-bs-toggle='modal' data-bs-target='#AddValveMaintenanceData' onclick='openEditValveMaintenanceModal(" + valveMaintenance.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-info'></i></button>"
                                    )
                                )
                            );
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
        url: "QuartzItem/GetValveMaintenanceDataPartialView",
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
                url: "LookUpItems/GetPlantAreaForOption",
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
        url: "QuartzItem/GetValveMaintenancesAttachmentPartialView",
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
                        url: "FileUpload/GetFileDetail",
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
                                            "<strong>" + attachmentModel.Name + "</strong>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.Type
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.UploadedBy
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            uploadedDate
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                        )
                                    ),
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
                    var attachmentIds = currentValveMaintenance.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: "FileUpload/GetFileDetail",
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel != "") {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#valveMaintenancesAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<strong>" + attachmentModel.Name + "</strong>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.Type
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.UploadedBy
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                uploadedDate
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                            )
                                        ),
                                    );
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

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $("#itemModalTitle").html(item.TagNo + " | Thickness Measurement");

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetThicknessMeasurementPartialView",
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetAllThicknessMeasurementsJSON",
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
                                        "<strong>" + thicknessMeasurement.PlantArea + "</strong>"
                                    ),
                                    $('<td>', {
                                        align: "center",
                                        text: thicknessMeasurement.PlantSystem
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: thicknessMeasurement.Specification
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: thicknessMeasurement.NominalThickness
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: thicknessMeasurement.MeasuredThickness
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: thicknessMeasurement.Description
                                    }),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0' data-bs-toggle='modal' data-bs-target='#AddThicknessMeasurementData' onclick='openEditThicknessMeasurementModal(" + thicknessMeasurement.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-info'></i></button>"
                                    )
                                )
                            );
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
        url: "QuartzItem/GetThicknessMeasurementsDataPartialView",
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
                url: "LookUpItems/GetPlantAreaForOption",
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
                url: "LookUpItems/GetPlantSystemForOption",
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
                url: "LookUpItems/GetSpecificationForOption",
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
        url: "QuartzItem/GetThicknessMeasurementsAttachmentPartialView",
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
                        url: "FileUpload/GetFileDetail",
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
                                            "<strong>" + attachmentModel.Name + "</strong>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.Type
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.UploadedBy
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            uploadedDate
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                        )
                                    ),
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
                    var attachmentIds = currentThicknessMeasurement.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: "FileUpload/GetFileDetail",
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);
                        
                                if (attachmentModel != "") {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#thicknessMeasurementAttachmentTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<strong>" + attachmentModel.Name + "</strong>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.Type
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.UploadedBy
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                uploadedDate
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border:0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                            )
                                        ),
                                    );
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

    var item;
    if (clickedOrCreated == "clicked")
        item = lastClickedItem;
    if (clickedOrCreated == "created")
        item = lastCreatedItem;

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetAttachmentPartialView",
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
                        url: "FileUpload/GetFileDetail",
                        data: { fileId: attachmentId },
                        success: function (response) {
                            attachmentModel = jQuery.parseJSON(response);

                            if (attachmentModel != "") {
                                var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                $("#itemAttachmentsTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<strong>" + attachmentModel.Name + "</strong>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.Type
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            attachmentModel.UploadedBy
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            uploadedDate
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                        )
                                    ),
                                );
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
                            url: "FileUpload/GetFileDetail",
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel != "") {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#itemAttachmentsTable").children('tbody').append(
                                        $('<tr>').append(
                                            $('<td>', { align: "center" }).append(
                                                "<strong>" + attachmentModel.Name + "</strong>"
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.Type
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                attachmentModel.UploadedBy
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                uploadedDate
                                            ),
                                            $('<td>', { align: "center" }).append(
                                                "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-download' style='display: block; margin-top: -4px; margin-left: -7.5px;'></i></button>"
                                            )
                                        ),
                                    );
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
        url: "QuartzItem/GetInspectionsDataPartialView",
        success: function (html) {
            $("#inspectionAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetInspectionDetailJSON",
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
                        url: "LookUpItems/GetMethodForOption",
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
                        url: "LookUpItems/GetProcedureForOption",
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
                        url: "LookUpItems/GetTechniqueForOption",
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
                        url: "LookUpItems/GetStatusForOption",
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
        url: "QuartzItem/GetValveMaintenanceDataPartialView",
        success: function (html) {
            $("#valveMaintenanceAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetValveMaintenanceDetailJSON",
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
                        url: "LookUpItems/GetPlantAreaForOption",
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
        url: "QuartzItem/GetThicknessMeasurementsDataPartialView",
        success: function (html) {
            $("#thicknessMeasurementAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetThicknessMeasurementDetailJSON",
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
                        url: "LookUpItems/GetPlantAreaForOption",
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
                        url: "LookUpItems/GetPlantSystemForOption",
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
                        url: "LookUpItems/GetSpecificationForOption",
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
// #endregion

