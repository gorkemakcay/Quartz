function uploadFile(mainId, mainType) {
    switch (mainType) {
        case "link":
            // yüklenen dosyayı input'tan değişkene atadım
            var imageUpload = $("#addLinkUploadDrawing").get(0);
            break;

        case "drawingSettings":
            // yüklenen dosyayı input'tan değişkene atadım
            var imageUpload = $("#dsmUploadDrawing").get(0);
            break;
        default:
    }

    // controller'a göndermek için tüm dosyaları FormData'da topladım
    var files = imageUpload.files;
    var fileData = new FormData();
    for (var i = 0; i < files.length; i++) {
        fileData.append('', files[i]);
    }

    // ajax post ile dosyaları controller'a gönderdim
    $.ajax({
        url: "FileUpload/UploadFile",
        type: 'POST',
        data: fileData,
        processData: false,
        contentType: false,
        success: function (response) {
            // #region DateTime Now
            var dt = new Date();
            var fromDateTime = dt.getFullYear() + "-" + ("0" + (dt.getMonth() + 1)).slice(-2) + "-" + ("0" + dt.getDate()).slice(-2) + "T" + ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2) + ":" + ("0" + dt.getSeconds()).slice(-2);
            // #endregion
            rModel = jQuery.parseJSON(response);
            var fileUpdate = rModel.Result;
            console.log(fileUpdate);
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

                    switch (mainType) {
                        case "link":
                            lastCreatedLink.CurrentDrawingId = rModel.Id;
                            $.post({
                                url: "QuartzLink/UpdateLinkJSON",
                                data: lastCreatedLink,
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;

                        case "drawingSettings":
                            currentQuartzLink.CurrentDrawingId = rModel.Id;
                            $.post({
                                url: "QuartzLink/UpdateLinkJSON",
                                data: currentQuartzLink,
                                error: function (error) {
                                    alert("error!");
                                    console.log(error.responseText);
                                }
                            });
                            break;
                        default:
                    }
                    
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