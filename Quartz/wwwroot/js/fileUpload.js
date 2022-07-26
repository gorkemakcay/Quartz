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
        type: 'POST',
        url: "FileUpload/UploadFile",
        data: fileData,
        processData: false,
        contentType: false,
        success: function (response) {
            rModel = jQuery.parseJSON(response);
            var fileUpdate = rModel.Result;
            fileUpdate.MainId = mainId;
            fileUpdate.CreatedDate = getDate();

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
                        success: function (response) {
                            $("#main").children().remove();
                            $("#main").html(response);
                            loadQuartz();
                        }
                    });
                    break;

                default:
            }

            $.ajax({
                type: "POST",
                url: "FileUpload/UpdateFile",
                data: fileUpdate,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    switch (clickedOrCreated) {
                        case "clicked":
                            switch (mainType) {
                                case "link":
                                    lastClickedLink.CurrentDrawingId = rModel.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: { model: lastClickedLink },
                                        success: function (response) {
                                            updatedLink = jQuery.parseJSON(response);
                                            loadLinkModal();
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;

                                case "drawingSettings":
                                    currentQuartzLink.CurrentDrawingId = rModel.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: currentQuartzLink,
                                        success: function (response) {
                                            rModel = jQuery.parseJSON(response);
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;
                                default:
                            }
                            break;

                        case "created":
                            switch (mainType) {
                                case "link":
                                    lastCreatedLink.CurrentDrawingId = rModel.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: { model: lastCreatedLink },
                                        success: function (response) {
                                            updatedLink = jQuery.parseJSON(response);
                                            loadLinkModal();
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;

                                case "drawingSettings":
                                    currentQuartzLink.CurrentDrawingId = rModel.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: currentQuartzLink,
                                        success: function (response) {
                                            rModel = jQuery.parseJSON(response);
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;
                                default:
                            }
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