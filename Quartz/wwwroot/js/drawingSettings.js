// #region Drawing Settings Modal

// #region DSM - Save Button
$("#btnDsmSave").on('click', function () {
    var drawingSettingsModel = {
        Id: currentDrawingSettings.Id,
        DrawingNo: $("#dsmDrawingNo").val(),
        Description: $("#dsmDrawingDescription").val(),
        File: $("#dsmFile").val(),
        PlantArea: $("#dsmPlantArea").val(),
        PlantSystem: $("#dsmPlantSystem").val(),
        QuartzLinkId: currentQuartzLink.Id
    }

    $.ajax({
        type: "POST",
        url: "QuartzLink/UpdateDrawingSettingsJSON",
        data: { model: drawingSettingsModel },
        success: function (response) {
            currentDrawingSettings = jQuery.parseJSON(response);
            toast("Drawing Settings Updated!");
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
});
// #endregion

// #region DSM - Works when DSM Button is clicked
$("#btnDrawingSettings").on('click', function () {
    //$("#dsmName").val("Drawing" + " " + "[" + '@Model.TagNo' + "]"); // [TAMAMLANMADI]

    // #region DSM - Get Drawing Settings Detail from QuartzLink Controller
    $.ajax({ // [TAMAMLANMADI]
        type: "GET",
        url: "QuartzLink/GetDrawingSettingsDetailJSON",
        data: { quartzLinkId: currentQuartzLink.Id },
        success: function (result) {
            currentDrawingSettings = jQuery.parseJSON(result);

            $("#dsmDrawingNo").val(currentDrawingSettings.DrawingNo);
            $("#dsmDrawingDescription").val(currentDrawingSettings.Description);
            $("#dsmFile").val(currentDrawing.Name + currentDrawing.Extension); // [TAMAMLANMADI]

            // #region DSM - Get Plant Areas For Select > Options
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantAreaForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    // #region DSM - Create & Configure Select > Options
                    $("#dsmPlantArea").children().remove();
                    if (currentDrawingSettings.PlantArea == "select") {
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
                                value: currentDrawingSettings.PlantArea,
                                text: currentDrawingSettings.PlantArea,
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
                    // #engregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            // #endregion

            // [TAMAMLANMADI] : Şu anda Plant System, Plant Area success'in içinde çalışıyor ama bunlar bağımsız olay. Düzelt!
            // #region DSM - Get Plant Systems For Select>Options
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantSystemForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    // #region DSM - Create & Configure Select>Options
                    $("#dsmPlantSystem").children().remove();

                    if (currentDrawingSettings.PlantSystem == "select") {
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
                                value: currentDrawingSettings.PlantSystem,
                                text: currentDrawingSettings.PlantSystem,
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
    // #endregion

});
// #endregion

    // #region DSM - Upload New Drawing
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

// #endregion

// #endregion
