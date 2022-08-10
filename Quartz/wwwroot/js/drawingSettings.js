// #region Drawing Settings Modal

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

// #region DSM - Save Button
$("#btnDsmSave").on('click', function () {
    var drawingSettingsModel = {
        Id: currentDrawingSettings.Id,
        DrawingNo: $("#dsmDrawingNo").val(),
        Description: $("#dsmDrawingDescription").val(),
        File: $("#dsmSelectDrawing").val(),
        PlantArea: $("#dsmPlantArea").val(),
        PlantSystem: $("#dsmPlantSystem").val(),
        QuartzLinkId: currentQuartzLink.Id
    }

    if (currentDrawingSettings.File != $("#dsmSelectDrawing").val()) {
        currentDrawingSettings.File = $("#dsmSelectDrawing").val();
        drawingSettingsModel.File = currentDrawingSettings.File;

        $.ajax({
            type: "POST",
            url: "QuartzLink/UpdateDrawingSettingsJSON",
            data: { model: drawingSettingsModel },
            success: function (response) {
                currentDrawingSettings = jQuery.parseJSON(response);

                $.ajax({
                    type: "GET",
                    url: "FileUpload/GetFileDetail",
                    data: { fileId: currentDrawingSettings.File },
                    success: function (response) {
                        currentDrawing = jQuery.parseJSON(response);
                        $.ajax({
                            type: "GET",
                            url: "QuartzLink/GetQuartz",
                            success: function (html) {
                                $("#main").children().remove();
                                $("#main").html(html);

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
                toast("Drawing Settings Updated!");
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
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
    $("#dsmSelectDrawing").removeAttr("disabled");

    // #region DSM - Get Drawing Settings Detail from QuartzLink Controller
    $.ajax({
        type: "GET",
        url: "QuartzLink/GetDrawingSettingsDetailJSON",
        data: { quartzLinkId: currentQuartzLink.Id },
        success: function (result) {
            currentDrawingSettings = jQuery.parseJSON(result);

            drawingSettingsModalUploadDrawingArea = false;
            document.getElementById("dsmUploadDrawingArea").setAttribute("hidden", "");
            $("#dsmSelectedDrawing").text("");

            // #region Choose Drawing Button > [Change Function]
            $("#dsmUploadDrawing").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $(".dsmSelectedDrawing").text("Selected Drawing: " + fileName);
            });
            // #endregion

            // #region Get All Drawings for Select/Option
            $.ajax({
                type: "GET",
                url: "FileUpload/GetAllDrawings",
                success: function (response) {
                    allDrawings = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#dsmSelectDrawing").children().remove();

                    $.ajax({
                        type: "GET",
                        url: "FileUpload/GetFileDetail",
                        data: { fileId: currentDrawingSettings.File }, // TAMAMLANAMDI BURADA KALDIM
                        success: function (response) {
                            var selectedDrawing = jQuery.parseJSON(response);

                            $("#dsmSelectDrawing").append(
                                $('<option>', {
                                    value: selectedDrawing.Id,
                                    text: selectedDrawing.Name,
                                    id: "dsmSelectedDrawing"
                                })
                            );
                            $("#dsmSelectedDrawing").attr("hidden", "");

                            for (var i = 0; i < allDrawings.length; i++) {
                                $("#dsmSelectDrawing").append(
                                    $('<option>', {
                                        value: allDrawings[i].Id,
                                        text: allDrawings[i].Name,
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
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            // #endregion

            $("#dsmDrawingNo").val(currentDrawingSettings.DrawingNo);
            $("#dsmDrawingDescription").val(currentDrawingSettings.Description);

            // #region DSM - Get Plant Areas For Select > Options
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantAreaForOption",
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    // #region DSM - Create & Configure Select > Options
                    $("#dsmPlantArea").children().remove();
                    if (currentDrawingSettings.PlantArea == null || currentDrawingSettings.PlantArea == "select") {
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

                    if (currentDrawingSettings.PlantSystem == null || currentDrawingSettings.PlantSystem == "select") {
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

// #endregion

// #region DSM Modal

// #region Upload Drawing Button
var dsmUploadDrawingArea = false;
$("#btnDsmUploadDrawing").on("click", function () {
    if (dsmUploadDrawingArea == false) {
        document.getElementById("dsmUploadDrawingArea").removeAttribute("hidden");
        $("#dsmSelectDrawing").attr("disabled", "");
        dsmUploadDrawingArea = true;
        return -1;
    }
    if (dsmUploadDrawingArea == true) {
        document.getElementById("dsmUploadDrawingArea").setAttribute("hidden", "");
        $("#dsmSelectDrawing").removeAttr("disabled");
        dsmUploadDrawingArea = false;
        return -1;
    }
});
// #endregion

// #endregion

// #endregion
