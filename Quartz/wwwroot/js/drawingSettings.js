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

    if (currentDrawingSettings.DrawingNo != $("#dsmDrawingNo").val()) {
        currentQuartzLink.TagNo = $("#dsmDrawingNo").val();
        $.ajax({
            type: "POST",
            url: "QuartzLink/UpdateLinkJSON",
            data: { model: currentQuartzLink },
            success: function (response) {
                rModel = jQuery.parseJSON(response);

                toast("Drawing Upload Successful!");
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
    loadDrawingSettingsDataPage();
});

// #endregion

// #region DSM - Upload Drawing Button
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

function loadDrawingSettingsDataPage() {
    $("#dsmTitle").html("Drawing Settings");
    $("#dsmSelectDrawing").removeAttr("disabled");
    // #region DSM - Get Drawing Settings Detail from QuartzLink Controller

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetDrawingSettingsDataPartialView",
        success: function (html) {
            $("#dsmPartialArea").html(html);

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
                                            id: "dsmSelectedDrawingx"
                                        })
                                    );
                                    $("#dsmSelectedDrawingx").attr("hidden", "");

                                    for (var i = 0; i < allDrawings.length; i++) {
                                        $("#dsmSelectDrawing").append(
                                            $('<option>', {
                                                value: allDrawings[i].Id,
                                                text: allDrawings[i].Name,
                                            })
                                        );
                                    }
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
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });



    
    // #endregion
    // #endregion
}

// Attachment Tab [loadThicknessMeasurementAttachmentPage()]
function loadDrawingSettingsAttachmentPage() {
    $("#dsmTitle").html("Drawing Settings | Attachment");

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetDrawingSettingsAttachmentPartialView",
        success: function (html) {
            $("#dsmPartialArea").html(html);

            // #region Choose File Button > [Change Function]
            $("#dsmUploadFile").on('change', function (e) {
                var fileName = e.target.files[0].name;
                $("#dsmSelectedFile").text("Selected File: " + fileName);
            });
            // #endregion

            // #region Create Table's Rows
            $("#dsmAttachmentTable").children('tbody').children('tr').remove();

            if (currentDrawingSettings.AttachmentIds != null) {
                if (currentDrawingSettings.AttachmentIds.indexOf(",") == -1) {
                    var attachmentId = currentDrawingSettings.AttachmentIds
                    $.ajax({
                        type: "GET",
                        url: "FileUpload/GetFileDetail",
                        data: { fileId: attachmentId },
                        success: function (response) {
                            var attachmentModel = jQuery.parseJSON(response);

                            if (attachmentModel == null) {
                                $("#dsmAttachmentTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
                                    )
                                );
                            }
                            else {
                                var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                $("#dsmAttachmentTable").children('tbody').append(
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
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
                        }
                    });
                }
                else {
                    var attachmentIds = currentDrawingSettings.AttachmentIds.split(',');
                    for (let id in attachmentIds) {
                        $.ajax({
                            type: "GET",
                            url: "FileUpload/GetFileDetail",
                            data: { fileId: attachmentIds[id] },
                            success: function (response) {
                                attachmentModel = jQuery.parseJSON(response);

                                if (attachmentModel != "") {
                                    var uploadedDate = attachmentModel.CreatedDate.split('T')[0];
                                    $("#dsmAttachmentTable").children('tbody').append(
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
                                                "<a href='http://localhost:5001/FileUpload/DownloadFile?fileId= + " + attachmentModel.Id + "' class='btn btn-dark' style='border:0px; border-radius: 50%; width: 25px; height: 25px;'><i class='bi bi-download' style='display: block; margin-top:     -7px; margin-left:-7px;'></i></button>"
                                            )
                                        ),
                                    );
                                }
                                else {
                                    $("#dsmAttachmentTable").children('tbody').append(
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
                $("#dsmAttachmentTable").children('tbody').append(
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

// NavBar ---> Display PartialViews
$("#dsmNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');

    switch (info) {
        case 'Data':
            loadDrawingSettingsDataPage();
            break;

        case 'Attachment':
            loadDrawingSettingsAttachmentPage();
            break;

        default:
            break;
    }
})