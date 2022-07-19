// #region NavBar ---> Display PartialViews
$("#itemModalNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');
    switch (info) {
        case 'Informations':
            $("#itemModalTitle").html("Item Modal | Informations");
            itemModalActivePartial = "Informations";

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetInformationDetailJSON",
                success: function (result) {
                    $("#itemModalPartialArea").html(result);

                    // #region Get Component Types for Select > Option
                    $.ajax({
                        type: "GET",
                        url: "LookUpItems/GetComponentTypeForOption",
                        success: function (response) {
                            rModel = jQuery.parseJSON(response);

                            // #region Create & Configure Select > Option
                            $("#informationComponentType").children().remove();
                            // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                            // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                            // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                            // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Inspections':
            $("#itemModalTitle").html("Item Modal | Inspections");
            itemModalActivePartial = "Inspections";

            $.ajax({
                type: "GET",
                url: "QuartzItem/GetInspectionDetailJSON",
                success: function (result) {
                    $("#itemModalPartialArea").html(result);

                    // #region Inspection "ADD" Button on 'click' function
                    $("#addInspectionData").on('click', function () {
                        // #region Get Methods for Select > Option
                        $.ajax({
                            type: "GET",
                            url: "LookUpItems/GetMethodForOption",
                            success: function (response) {
                                rModel = jQuery.parseJSON(response);

                                // #region Create & Configure Select > Option
                                $("#inspectionMethod").children().remove();
                                // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                                // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                                // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                                // [TAMAMLANMADI: if(quartzlink.ComponentType == "select") vs eklenmesi gerek]

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
                    })
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        // [TAMAMLANMADI]
        case 'Attachments':
            $("#itemModalTitle").html("Item Modal | Attachments");
            itemModalActivePartial = "Attachments";

            //    $.ajax({
            //        type: "GET",
            //        url: "LookUpItems/GetAllMethodsJSON",
            //        success: function (result) {
            //            $("#itemModalPartialArea").html(result);
            //        },
            //        error: function (error) {
            //            alert("error!");
            //            console.log(error.responseText);
            //        }
            //    });
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

// #endregion

function itemModalSaveButton(itemModalActivePartial) { // [TAMAMLANMADI]
    switch (itemModalActivePartial) {
        case 'Informations':
            var itemInformationModel = {
                TagNo: $("#informationTagNo").val(),
                SerialNo: $("#informationSerialNo").val(),
                ComponentType: $("#informationComponentType").val(),
                Comments: $("#informationComments").val(),
                Specification: $("#informationSpecification").val(),
                FittingType: $("#informationFittingType").val(),
                WeldType: $("#informationWeldType").val(),
                ShowLabel: true,
                PipeOdIn: $("#informationPipeOD").val(),
                PipeThicknessMm: $("#informationPipeThickness").val(),
                OperatingTempC: $("#informationOperatingTemp").val(),
                OperatingPressureBar: $("#informationOperatingPressute").val(),
                QuartzItemId: 2013 // [TAMAMLANMADI]
            }

            $.ajax({
                type: "POST",
                url: "QuartzItem/AddInformationJSON",
                data: { model: itemInformationModel },
                success: function (response) {
                    rModel = jQuery.parseJSON(response);
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Inspections':
            break;

        case 'Attachments':
            // [TAMAMLANMADI]
            break;
        default:
    }
}