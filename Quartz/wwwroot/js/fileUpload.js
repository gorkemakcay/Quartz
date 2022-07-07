function uploadFile(mainId, mainType) {

    switch (mainType) {
        case "link":
            var imageUpload = $("#addLinkUploadDrawing").get(0);
            break;

        case "drawingSettings":
            var imageUpload = $("#dsmUploadDrawing").get(0);
            break;
        default:
    }

    var files = imageUpload.files;
    var fileData = new FormData();
    for (var i = 0; i < files.length; i++) {
        fileData.append('', files[i]);
    }

    $.ajax({
        url: "FileUpload/UploadFile",
        type: 'POST',
        data: fileData,
        processData: false,
        contentType: false,
        success: function (result) {
            // #region DateTime Now
            var dt = new Date();
            var fromDateTime = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2) + "T" + ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2);
            // #endregion

            rModel = jQuery.parseJSON(result);
            var fileUpdate = rModel.Result;
            fileUpdate.MainId = mainId;
            fileUpdate.CreatedDate = fromDateTime;

            switch (mainType) {
                case "link":
                    fileUpdate.MainType = "Link";
                    break;

                case "drawingSettings":
                    fileUpdate.MainType = "DrawingSettings";
                    $("#dsmFile").val(fileUpdate.Name + fileUpdate.Extension);
                    currentDrawing = fileUpdate;
                    $.get({
                        url: "QuartzLink/GetQuartz",
                        success: function (result) {
                            $("#main").children().remove();
                            $("#main").html(result);
                            loadQuartz();
                        }
                    });
                    break;
                default:
                    alert("default");
            }

            $.ajax({
                type: "POST",
                url: "FileUpload/UpdateFile",
                data: fileUpdate,
                success: function (result) {
                    rModel = jQuery.parseJSON(result);
                    linkResponseModel.CurrentDrawingId = rModel.Id;

                    $.post({
                        url: "QuartzLink/UpdateLinkJSON",
                        data: linkResponseModel
                    });
                },
                error: function (error) {
                    alert("error");
                    console.log(error.responseText);
                }
            });
        },
        error: function (error) {
            alert("error");
            console.log(error.responseText);
        }
    });
}