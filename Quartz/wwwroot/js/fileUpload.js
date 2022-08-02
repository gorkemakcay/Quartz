function uploadFile(mainType) {
    switch (mainType) {
        case "link":
            // yüklenen dosyayı input'tan değişkene atadım
            var imageUpload = $("#addLinkUploadDrawing").get(0);
            break;

        case "item":
            // yüklenen dosyayı input'tan değişkene atadım
            var imageUpload = $("#itemModalUploadFile").get(0);
            break;

        case "inspection":
            var imageUpload = $("#inspectionAddUploadFile").get(0);
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
            uploadedFile = jQuery.parseJSON(response);
            var fileUpdate = uploadedFile.Result;
            fileUpdate.CreatedDate = getDate();

            switch (mainType) {
                case "link":
                    break;

                case "item":
                    break;

                case "inspection":
                    break;

                case "drawingSettings":
                    $("#dsmFile").val(fileUpdate.Name + fileUpdate.Extension);
                    currentDrawing = fileUpdate;
                    $.ajax({
                        type: "GET",
                        url: "QuartzLink/GetQuartz",
                        success: function (response) {
                            $("#main").children().remove();
                            $("#main").html(response);
                            loadQuartz();
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
                    var updatedFile = jQuery.parseJSON(response);

                    switch (clickedOrCreated) {
                        case "clicked":
                            switch (mainType) {
                                case "link":
                                    lastClickedLink.CurrentDrawingId = updatedFile.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: { model: lastClickedLink },
                                        success: function (response) {
                                            updatedLink = jQuery.parseJSON(response);
                                            loadLinkModal();
                                            toast("Drawing Upload Successful!");
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;

                                case "item":
                                    if (lastClickedItem.AttachmentIds == null || lastClickedItem.AttachmentIds == "")
                                        lastClickedItem.AttachmentIds = updatedFile.Id;
                                    else
                                        lastClickedItem.AttachmentIds = lastClickedItem.AttachmentIds + "," + updatedFile.Id;

                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzItem/UpdateItemJSON",
                                        data: { model: lastClickedItem },
                                        success: function (response) {
                                            lastClickedItem = jQuery.parseJSON(response);
                                            loadAttachmentPage();
                                            toast("Attachment Upload Successful!");
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;

                                case "inspection":
                                    if (currentInspection != null) {
                                        if (currentInspection.AttachmentIds == null || currentInspection.AttachmentIds == "")
                                            currentInspection.AttachmentIds = updatedFile.Id;
                                        else
                                            currentInspection.AttachmentIds = currentInspection.AttachmentIds + "," + updatedFile.Id;

                                        $.ajax({
                                            type: "POST",
                                            url: "QuartzItem/UpdateInspectionJSON",
                                            data: { model: currentInspection },
                                            success: function (response) {
                                                currentInspection = jQuery.parseJSON(response);
                                                toast("Attachment Upload Successful!");
                                            },
                                            error: function (error) {
                                                alert("error!");
                                                console.log(error.responseText);
                                            }
                                        });
                                    }
                                    break;

                                case "drawingSettings":
                                    currentQuartzLink.CurrentDrawingId = updatedFile.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: currentQuartzLink,
                                        success: function (response) {
                                            rModel = jQuery.parseJSON(response);
                                            toast("Drawing Upload Successful!");
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
                                    lastCreatedLink.CurrentDrawingId = updatedFile.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: { model: lastCreatedLink },
                                        success: function (response) {
                                            updatedLink = jQuery.parseJSON(response);
                                            loadLinkModal();
                                            toast("Drawing Upload Successful!");
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;

                                case "item":
                                    if (lastCreatedItem.AttachmentIds == null || lastCreatedItem.AttachmentIds == "") {
                                        lastCreatedItem.AttachmentIds = updatedFile.Id;
                                    }
                                    else {
                                        lastCreatedItem.AttachmentIds = lastCreatedItem.AttachmentIds + "," + updatedFile.Id;
                                    }

                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzItem/UpdateItemJSON",
                                        data: { model: lastCreatedItem },
                                        success: function (response) {
                                            rModel = jQuery.parseJSON(response);
                                            lastCreatedItem = rModel;
                                            switch (itemModalActivePartial) {
                                                case "Attachments":
                                                    loadAttachmentPage();
                                                    break;
                                                case "Inspection":
                                                    loadInspectionPage();
                                                    break;
                                                default:
                                            }

                                            toast("Attachment Upload Successful!");
                                        },
                                        error: function (error) {
                                            alert("error!");
                                            console.log(error.responseText);
                                        }
                                    });
                                    break;

                                case "drawingSettings":
                                    currentQuartzLink.CurrentDrawingId = updatedFile.Id;
                                    $.ajax({
                                        type: "POST",
                                        url: "QuartzLink/UpdateLinkJSON",
                                        data: currentQuartzLink,
                                        success: function (response) {
                                            rModel = jQuery.parseJSON(response);
                                            toast("Drawing Upload Successful!");
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