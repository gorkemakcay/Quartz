// #region NavBar ---> Display PartialViews
$("#itemModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Informations':
            loadInformationPage();
            break;

        case 'Inspections':
            loadInspectionPage();
            break;

        // [TAMAMLANMADI]
        case 'Attachments':
            $("#itemModalTitle").html("Item Modal | Attachments");
            itemModalActivePartial = "Attachments";
            break;

        default:
            break;
    }
})
// #endregion

// #region Information's Select > Options [TAMAMLANMADI] [BURADA KALDIM]
//$("#itemModal").on('shown.bs.modal', function () {
//    $.ajax({
//        type: "GET",
//        url: "LookUpItems/GetComponentTypeForOption",
//        success: function (result) {
//            rModel = jQuery.parseJSON(result);
//            console.log(rModel);
//            // #region DSM - Create & Configure Select > Options
//            $("#informationComponentType").children().remove();
//            if (currentDrawingSettings.PlantArea == "select") {
//                $("#informationComponentType").append(
//                    $('<option>', {
//                        value: "select",
//                        text: "Select Plant Area",
//                        id: "selectDsmPlantArea"
//                    })
//                );
//                $("#selectDsmPlantArea").attr("hidden", "");
//            }
//            else {
//                $("#dsmPlantArea").append(
//                    $('<option>', {
//                        value: currentDrawingSettings.PlantArea,
//                        text: currentDrawingSettings.PlantArea,
//                        id: "selectDsmPlantArea"
//                    })
//                );
//                $("#selectDsmPlantArea").attr("hidden", "");
//            }

//            for (var i = 0; i < rModel.length; i++) {
//                $("#dsmPlantArea").append(
//                    $('<option>', {
//                        value: rModel[i].Name,
//                        text: rModel[i].Name
//                    })
//                );
//            }
//            // #engregion
//        },
//        error: function (error) {
//            alert("error!");
//            console.log(error.responseText);
//        }
//    });

//    // fonksiyon 2 kez çalışıyordu, bunu önlemek için bu satırı ekledim!
//    $(this).off('shown.bs.modal');
//});
// #endregion

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
                        alert("Update Successful!");
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
                    QuartzItemId: lastClickedItemButtonId
                }

                $.ajax({
                    type: "POST",
                    url: "QuartzItem/AddInformationJSON",
                    data: { model: itemInformationAddModel },
                    success: function (response) {
                        rModel = jQuery.parseJSON(response);
                        alert("Registration Successful!");
                        isInformationCreated = true;
                        loadInformationPage();
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

function getInformationSelectOptions() {

    // #region Get Component Types for Select > Option
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

    // #region Get Specification for Select > Option
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

    // #region Get Fitting Types for Select > Option
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

    // #region Get Weld Types for Select > Option
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

function loadInspectionPage() {
    $("#itemModalTitle").html("Item Modal | Inspections");
    itemModalActivePartial = "Inspections";

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetInspectionPartialView",
        data: { quartzItemId: lastClickedItemButtonId },
        success: function (html) {
            $.ajax({
                type: "GET",
                url: "QuartzItem/GetAllInspections",
                data: { quartzItemId: lastClickedItemButtonId },
                success: function (response) {
                    rModel = jQuery.parseJSON(response);
                    $("#itemModalPartialArea").html(html);
                    $("#inspectionTable").children('tbody').children('tr').remove();

                    if (rModel != "") {
                        console.log(rModel);
                        //$('#inspectionTable').DataTable();

                        rModel.forEach(function (inspection) {
                            var date = inspection.Date.split('T')[0];
                            $("#inspectionTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', {
                                        align: "center",
                                        text: inspection.ReportNo
                                    }),
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
                                        "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#AddInspectionData' onclick='openEditInspectionModal(" + inspection.Id + ")' style='border: 0px; border-radius: 0px;'>Edit</button>"
                                    )
                                )
                            );
                        });
                    }
                    else {
                        $("#inspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>').append(
                                    "<td align='center'>No data available to show!</td>"
                                )
                            )
                        );
                    }

                    // #region Inspection "ADD" Button on 'click' function
                    $("#addInspectionDataButton").on('click', function () {
                        $("#inspectionReportNo").val('');
                        $("#inspectionDate").val('');
                        $("#inspectionDateDue").val('');
                        $("#inspectionDetails").val('');

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

function loadInformationPage() {
    $("#itemModalTitle").html("Item Modal | Informations");
    itemModalActivePartial = "Informations";

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetInformationPartialView",
        success: function (response) {
            $("#itemModalPartialArea").html(response);

            // #region Get Information Details
            $.ajax({
                type: "GET",
                url: "QuartzItem/GetInformationDetailJSON",
                data: { quartzItemId: lastClickedItemButtonId },
                success: function (response) {
                    lastInformationsResponseModel = jQuery.parseJSON(response);
                    if (lastInformationsResponseModel != null) {
                        isInformationCreated = true;

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
                    }
                    else isInformationCreated = false;
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            // #endregion

            setTimeout(getInformationSelectOptions, 100);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function openEditInspectionModal(inspectionId) {
    function wait() {
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
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
    setTimeout(wait, 200);
}

// #region Item Inspection Add Modal's Save Button click Function
$("#inspectionAddSaveButton").on('click', function () {
    if (isInspectionExist) {
        var itemInspectionUpdateModel = {
            Id: currentInspection.Id,
            ReportNo: $("#inspectionReportNo").val(),
            Method: $("#inspectionMethod").val(),
            Procedure: $("#inspectionProcedure").val(),
            Technique: $("#inspectionTechnique").val(),
            Status: $("#inspectionStatus").val(),
            Date: $("#inspectionDate").val(),
            DueDate: $("#inspectionDateDue").val(),
            CreatedDate: currentInspection.CreatedDate,
            Details: $("#inspectionDetails").val(),
            QuartzItemId: lastClickedItemButtonId
        }

        $.ajax({
            type: "POST",
            url: "QuartzItem/UpdateInspectionJSON",
            data: { model: itemInspectionUpdateModel },
            success: function (response) {
                rModel = jQuery.parseJSON(response);
                alert("Update Successful!");
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }

        });

        loadInspectionPage();
    }
    else {
        var itemInspectionAddModel = {
            ReportNo: $("#inspectionReportNo").val(),
            Method: $("#inspectionMethod").val(),
            Procedure: $("#inspectionProcedure").val(),
            Technique: $("#inspectionTechnique").val(),
            Status: $("#inspectionStatus").val(),
            Date: $("#inspectionDate").val(),
            DueDate: $("#inspectionDateDue").val(),
            CreatedDate: getDate(),
            Details: $("#inspectionDetails").val(),
            QuartzItemId: lastClickedItemButtonId
        }

        $.ajax({
            type: "POST",
            url: "QuartzItem/AddInspectionJSON",
            data: { model: itemInspectionAddModel },
            success: function (response) {
                rModel = jQuery.parseJSON(response);
                alert("Registration Successful!");
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }

        });

        loadInspectionPage();
    }
});
// #endregion