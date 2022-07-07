// #region Drawing Settings Modal

$("#btnDsmSave").on('click', function () {
    var drawingSettingsModel = {
        Id: dsmId,
        DrawingNo: $("#dsmDrawingNo").val(),
        Description: $("#dsmDrawingDescription").val(),
        File: $("#dsmFile").val(),
        PlantArea: $("#dsmPlantArea").val(),
        PlantSystem: $("#dsmPlantSystem").val(),
        QuartzLinkId: quartzLinkId
    }

    $.ajax({
        type: "POST",
        url: "QuartzLink/UpdateDrawingSettingsJSON",
        data: { model: drawingSettingsModel },
        success: function (data) {
            rModel = jQuery.parseJSON(data);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    $.ajax({ // [TAMAMLANMADI]
        type: "POST",
        url: "QuartzLink/UpdateLinksTagNo"
    });
});

$("#btnDrawingSettings").on('click', function () {
    $("#dsmName").val("Drawing" + " " + "[" + '@Model.TagNo' + "]"); // [TAMAMLANMADI]

    var plantArea = "null";
    var plantSystem = "null";

    $.ajax({ // [TAMAMLANMADI]
        type: "GET",
        url: "QuartzLink/GetDrawingSettingsDetailJSON",
        data: { quartzLinkId: quartzLinkId },
        success: function (result) {
            rModel = jQuery.parseJSON(result);
            plantArea = rModel.PlantArea;
            plantSystem = rModel.PlantSystem;

            $("#dsmDrawingNo").val(rModel.DrawingNo);
            $("#dsmDrawingDescription").val(rModel.Description);
            $("#dsmId").val(rModel.Id);
            $("#dsmFile").val(currentDrawing.Name + currentDrawing.Extension); // [TAMAMLANMADI]
            dsmId = $("#dsmId").val();

            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantAreaForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#dsmPlantArea").children().remove();

                    if (plantArea == "select") {
                        $("#dsmPlantArea").append(
                            $('<option>', {
                                value: "select",
                                text: "Select Plant Area",
                                id: "selectDsmPlantArea"
                            })
                        );
                        $("#selectDsmPlantArea").attr("hidden", "");
                    }
                    else {
                        $("#dsmPlantArea").append(
                            $('<option>', {
                                value: plantArea,
                                text: plantArea,
                                id: "selectDsmPlantArea"
                            })
                        );
                        $("#selectDsmPlantArea").attr("hidden", "");
                    }

                    for (var i = 0; i < rModel.length; i++) {
                        $("#dsmPlantArea").append(
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

            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantSystemForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#dsmPlantSystem").children().remove();

                    if (plantSystem == "select") {
                        $("#dsmPlantSystem").append(
                            $('<option>', {
                                value: "select",
                                text: "Select Plant System",
                                id: "selectDsmPlantSystem"
                            })
                        );
                        $("#selectDsmPlantSystem").attr("hidden", "");
                    }
                    else {
                        $("#dsmPlantSystem").append(
                            $('<option>', {
                                value: plantSystem,
                                text: plantSystem,
                                id: "selectDsmPlantSystem"
                            })
                        );
                        $("#selectDsmPlantSystem").attr("hidden", "");
                    }

                    for (var i = 0; i < rModel.length; i++) {
                        $("#dsmPlantSystem").append(
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
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

});

// DRAWING SETTINGS MODAL: Upload New Drawing
var drawingSettingsModalUploadDrawingArea = false;
$("#btnDsmUploadDrawing").on("click", function () {
    if (drawingSettingsModalUploadDrawingArea == false) {
        document.getElementById("dsmUploadDrawingArea").removeAttribute("hidden");
        drawingSettingsModalUploadDrawingArea = true;
        return -1;
    }
    if (drawingSettingsModalUploadDrawingArea == true) {
        document.getElementById("dsmUploadDrawingArea").setAttribute("hidden", "");
        drawingSettingsModalUploadDrawingArea = false;
        return -1;
    }
});

// #endregion
