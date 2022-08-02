//const { fromUserCoordinate } = require("ol/proj");

// #region Item Modal

// Save Button > [Click Function]
function itemModalSaveButton(itemModalActivePartial) { // [TAMAMLANMADI]
    switch (itemModalActivePartial) {
        case 'Informations':
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
                    QuartzItemId: lastClickedItemButtonId
                }

                $.ajax({
                    type: "POST",
                    url: "QuartzItem/UpdateInformationJSON",
                    data: { model: itemInformationUpdateModel },
                    success: function (response) {
                        rModel = jQuery.parseJSON(response);

                        $.get({
                            url: "QuartzItem/GetItemDetailJSON",
                            data: { itemId: lastClickedItemButtonId },
                            success: function (response) {
                                var model = jQuery.parseJSON(response);
                                model.TagNo = $("#informationTagNo").val();

                                $.post({
                                    url: "QuartzItem/UpdateItemJSON",
                                    data: { model: model },
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
                if (clickedOrCreated == "created") {
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
                        QuartzItemId: lastCreatedItem.Id
                    }
                }
                else if (clickedOrCreated == "clicked") {
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
                        QuartzItemId: lastClickedItem.Id
                    }
                }

                $.ajax({
                    type: "POST",
                    url: "QuartzItem/AddInformationJSON",
                    data: { model: itemInformationAddModel },
                    success: function (response) {
                        rModel = jQuery.parseJSON(response);
                        var itemId;
                        if (clickedOrCreated == "clicked")
                            itemId = lastClickedItem.Id;
                        else itemId = lastCreatedItem.Id;

                        $.get({
                            url: "QuartzItem/GetItemDetailJSON",
                            data: { itemId: itemId },
                            success: function (response) {
                                var model = jQuery.parseJSON(response);
                                model.TagNo = $("#informationTagNo").val();

                                $.post({
                                    url: "QuartzItem/UpdateItemJSON",
                                    data: { model: model },
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
            break;

        case 'Inspections':
            break;

        case 'Attachments':
            // [TAMAMLANMADI]
            break;
        default:
    }
}

// NavBar ---> Display PartialViews
$("#itemModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Informations':
            itemModalActivePartial = "Informations";
            loadInformationPage();
            $("#itemModalSaveButton").removeAttr("hidden");
            $("#itemShowLabel").removeAttr("hidden");
            $("#showlabelSpan").removeAttr("hidden");
            break;

        case 'Inspections':
            itemModalActivePartial = "Inspection";
            loadInspectionPage();
            $("#itemModalSaveButton").attr("hidden", "");
            $("#itemShowLabel").attr("hidden", "");
            $("#showlabelSpan").attr("hidden", "");
            break;

        // [TAMAMLANMADI]
        case 'Attachments':
            itemModalActivePartial = "Attachments";
            loadAttachmentPage();
            $("#itemModalSaveButton").attr("hidden", "");
            $("#itemShowLabel").attr("hidden", "");
            $("#showlabelSpan").attr("hidden", "");
            break;

        default:
            break;
    }
})

// #region Information
function loadInformationPage() {
    $("#itemModalTitle").html("Item Modal | Informations");

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetInformationPartialView",
        success: function (response) {
            $("#itemModalPartialArea").html(response);

            // #region Get Information Details
            switch (clickedOrCreated) {
                case "clicked":
                    $.ajax({
                        type: "GET",
                        url: "QuartzItem/GetInformationDetailJSON",
                        data: { quartzItemId: lastClickedItemButtonId },
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
}
// #endregion

// #region Inspection

// NavBar ---> Display PartialViews
$("#inspectionModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Data':
            loadInspectionsDataPage();
            break;

        case 'Attachment':
            loadInspectionsAttachmentPage();
            break;

        default:
            break;
    }
})

// Add Modal > Save Button [Click Function]
$("#inspectionAddSaveButton").on('click', function () {
    var itemId;
    if (clickedOrCreated == "clicked")
        itemId = lastClickedItem.Id;
    else itemId = lastCreatedItem.Id;

    var itemInspectionModel;
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
            QuartzItemId: itemId,
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
            QuartzItemId: itemId
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
            if ($("#inspectionAddSelectedFile").text() != "" && currentInspection != null) {
                uploadFile('inspection');
            }
            else alert("!#£$#½");

            loadInspectionPage();
            toast(toastContext);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
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
                        id: "selectInformationComponentType"
                    })
                );
                $("#selectInformationComponentType").attr("hidden", "");
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

// Inspection Page [Load Function]
function loadInspectionPage() {
    $("#itemModalTitle").html("Item Modal | Inspections");

    var itemId;
    if (clickedOrCreated == "clicked")
        itemId = lastClickedItem.Id;
    else itemId = lastCreatedItem.Id;

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetInspectionPartialView",
        //data: { quartzItemId: itemId },
        success: function (html) {
            $("#itemModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetAllInspections",
                data: { quartzItemId: itemId },
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
                                        "<button type='button' class='btn btn-dark' data-bs-toggle='modal' data-bs-target='#AddInspectionData' onclick='openEditInspectionModal(" + inspection.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='bi bi-pencil-square' style='display: block; margin-top: -5px; margin-left: -7px;'></i></button>"
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
}

// Edit Inspection Modal > [Load Function]
function openEditInspectionModal(inspectionId) {
    function wait() {
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

                                for (var i = 0; i < methods.length; i++) {
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

                                for (var i = 0; i < methods.length; i++) {
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
                            var fileName = e.target.files[0].name;
                            $("#inspectionAddSelectedFile").text("Selected File is: " + fileName);
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
    setTimeout(wait, 200);
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

            // #region Inspection Data Page > Choose File Button > [Change Function]
            $("#inspectionAddUploadFile").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $("#inspectionAddSelectedFile").text("Selected File is: " + fileName);
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
            console.log(html);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}
// #endregion

// #region Attachment
function loadAttachmentPage() {
    $("#itemModalTitle").html("Item Modal | Attachment");

    var currentItemModel;
    if (clickedOrCreated == "clicked")
        currentItemModel = lastClickedItem;
    else if (clickedOrCreated == "created") {
        currentItemModel = lastCreatedItem;
    }

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetAttachmentPartialView",
        success: function (html) {
            $("#itemModalPartialArea").html(html);
            $("#itemAttachmentsTable").children('tbody').children('tr').remove();

            if (currentItemModel.AttachmentIds != null) {
                if (currentItemModel.AttachmentIds.indexOf(",") == -1) {
                    var attachmentId = currentItemModel.AttachmentIds
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
                                            "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='bi bi-download' style='display: block; margin-top: -7px; margin-left: -7px;'></i></button>"
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
                    var attachmentIds = currentItemModel.AttachmentIds.split(',');
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
                                                "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='bi bi-download' style='display: block; margin-top: -7px; margin-left: -7px;'></i></button>"
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

                                //"<button class='btn btn-dark' style='border-radius: 0px;'><i class='bi bi-download'></i></button>"
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
}
// #endregion