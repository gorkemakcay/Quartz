function uploadFile(mainType) {
    switch (mainType) {
        case "link":
            addLinkUploadDrawingAreaCreatedMode = false;
            addLinkUploadDrawingArea = false;
            document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
            document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
            $("#addLinkSelectDrawing").removeAttr("disabled");

            // clicked/created
            var link;
            if (clickedOrCreated == "clicked")
                link = lastClickedLink;
            if (clickedOrCreated == "created")
                link = lastCreatedLink;

            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#addLinkUploadDrawing").get(0);

            // controller'a göndermek için tüm çizimleri filtreleyerek fileData'da topladım
            var files = fileUpload.files;
            var fileData = new FormData();
            var fileCount = 0;
            for (var i = 0; i < files.length; i++) {
                if (files[i].type == "image/jpeg" || files[i].type == "image/png") {
                    fileData.append('', files[i]);
                    fileCount++;
                }
            }
            if (fileCount != 0) {
                // ajax post ile çizimleri controller'a gönderdim
                $.ajax({
                    type: "POST",
                    url: "FileUpload/UploadFile",
                    data: fileData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        uploadedFile = jQuery.parseJSON(response);
                        var fileUpdate = uploadedFile.Result;
                        fileUpdate.CreatedDate = getDate();

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);
                                link.CurrentDrawingId = updatedFile.Id;
                                link.TagNo = $("#addLinkTagNo").val();

                                // update link for currentDrawingId
                                $.ajax({
                                    type: "POST",
                                    url: "QuartzLink/UpdateLinkJSON",
                                    data: { model: link },
                                    success: function (response) {
                                        link = jQuery.parseJSON(response);

                                        // clicked/created
                                        if (clickedOrCreated == "clicked")
                                            lastClickedLink = link;
                                        if (clickedOrCreated == "created")
                                            lastCreatedLink = link;

                                        loadLinkModal();
                                        toast("Drawing Upload Successful!");
                                    },
                                    error: function (error) {
                                        alert("error!");
                                        console.log(error.responseText);
                                    }
                                });

                                // update drawing settings
                                $.ajax({
                                    type: "GET",
                                    url: "QuartzLink/GetDrawingSettingsDetailJSON",
                                    data: { quartzLinkId: link.Id },
                                    success: function (response) {
                                        linksDrawingSettings = jQuery.parseJSON(response);
                                        linksDrawingSettings.DrawingNo = link.TagNo;
                                        linksDrawingSettings.File = link.CurrentDrawingId;

                                        $.ajax({
                                            type: "POST",
                                            url: "QuartzLink/UpdateDrawingSettingsJSON",
                                            data: { model: linksDrawingSettings },
                                            success: function (response) {
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
            else alert("Please choose JPG/JPEG/PNG format for upload drawing!");
            break;

        case "item":
            // clicked/created
            var item;
            if (clickedOrCreated == "clicked")
                item = lastClickedItem;
            else item = lastCreatedItem;

            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#itemModalUploadFile").get(0);

            if (fileUpload.files.length == 0) {
                break;
            }
            else {
                // controller'a göndermek için tüm dosyaları fileData'da topladım
                var files = fileUpload.files;
                var fileData = new FormData();
                for (var i = 0; i < files.length; i++)
                    fileData.append('', files[i]);

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

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);
                                if (item.AttachmentIds == null || item.AttachmentIds == "")
                                    item.AttachmentIds = updatedFile.Id;
                                else
                                    item.AttachmentIds = item.AttachmentIds + "," + updatedFile.Id;

                                $.ajax({
                                    type: "POST",
                                    url: "QuartzItem/UpdateItemJSON",
                                    data: { model: item },
                                    success: function (response) {
                                        item = jQuery.parseJSON(response);

                                        // clicked/created
                                        if (clickedOrCreated == "clicked")
                                            lastClickedItem = item;
                                        else lastCreatedItem = item;

                                        loadAttachmentPage();
                                        toast("Attachment Upload Successful!");
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
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            }
            break;

        case "inspection":
            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#inspectionAddUploadFile").get(0);

            if (fileUpload.files.length == 0) {
                break;
            }
            else {
                // controller'a göndermek için tüm dosyaları fileData'da topladım
                var files = fileUpload.files;
                var fileData = new FormData();
                for (var i = 0; i < files.length; i++)
                    fileData.append('', files[i]);

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

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);

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
                                        loadInspectionsAttachmentPage();
                                        toast("Attachment Upload Successful!");
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
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            }
            break;

        case "drawingSettings":
            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#dsmUploadDrawing").get(0);
            $("#dsmSelectDrawing").removeAttr("disabled");

            // controller'a göndermek için tüm dosyaları fileData'da topladım
            var files = fileUpload.files;
            var fileData = new FormData();
            var fileCount = 0;
            for (var i = 0; i < files.length; i++) {
                if (files[i].type == "image/jpeg" || files[i].type == "image/png") {
                    fileData.append('', files[i]);
                    fileCount++;
                }
            }
            if (fileCount != 0) {
                // send files to controller 
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

                        // Yüklenen dosyayı currenDrawing'e atadım ve Ekrana bastırdım
                        currentDrawing = fileUpdate;
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

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);

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

                                currentDrawingSettings.File = updatedFile.Id;
                                $.ajax({
                                    type: "POST",
                                    url: "QuartzLink/UpdateDrawingSettingsJSON",
                                    data: currentDrawingSettings,
                                    success: function (response) {
                                        rModel = jQuery.parseJSON(response);
                                        toast("Drawing Upload Successful!");
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
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            }
            else alert("Please choose JPG/JPEG/PNG format for upload drawing!");
            break;

        case "valveMaintenance":
            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#valveMaintenanceUploadFile").get(0);

            if (fileUpload.files.length == 0) {
                break;
            }
            else {
                // controller'a göndermek için tüm dosyaları fileData'da topladım
                var files = fileUpload.files;
                var fileData = new FormData();
                for (var i = 0; i < files.length; i++)
                    fileData.append('', files[i]);

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

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);

                                if (currentValveMaintenance.AttachmentIds == null) {
                                    currentValveMaintenance.AttachmentIds = updatedFile.Id;
                                }
                                else {
                                    currentValveMaintenance.AttachmentIds = currentValveMaintenance.AttachmentIds + "," + updatedFile.Id;
                                }

                                $.ajax({
                                    type: "POST",
                                    url: "QuartzItem/UpdateValveMaintenanceJSON",
                                    data: { model: currentValveMaintenance },
                                    success: function (response) {
                                        currentValveMaintenance = jQuery.parseJSON(response);
                                        //loadValveMaintenancesDataPage();
                                        loadValveMaintenancesAttachmentPage();
                                        toast("Attachment Upload Successful!");
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
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            }
            break;

        case "thicknessMeasurement":
            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#thicknessMeasurementUploadFile").get(0);

            if (fileUpload.files.length == 0) {
                break;
            }
            else {
                // controller'a göndermek için tüm dosyaları fileData'da topladım
                var files = fileUpload.files;
                var fileData = new FormData();
                for (var i = 0; i < files.length; i++)
                    fileData.append('', files[i]);

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

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);

                                if (currentThicknessMeasurement.AttachmentIds == null) {
                                    currentThicknessMeasurement.AttachmentIds = updatedFile.Id;
                                }
                                else {
                                    currentThicknessMeasurement.AttachmentIds = currentThicknessMeasurement.AttachmentIds + "," + updatedFile.Id;
                                }

                                $.ajax({
                                    type: "POST",
                                    url: "QuartzItem/UpdateThicknessMeasurementJSON",
                                    data: { model: currentThicknessMeasurement },
                                    success: function (response) {
                                        currentThicknessMeasurement = jQuery.parseJSON(response);
                                        loadThicknessMeasurementAttachmentPage();
                                        toast("Attachment Upload Successful!");
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
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            }
            break;

        case "dsmAttachment":
            // yüklenen dosyayı input'tan değişkene atadım
            var fileUpload = $("#dsmUploadFile").get(0);

            if (fileUpload.files.length == 0) {
                break;
            }
            else {
                // controller'a göndermek için tüm dosyaları fileData'da topladım
                var files = fileUpload.files;
                var fileData = new FormData();
                for (var i = 0; i < files.length; i++)
                    fileData.append('', files[i]);

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

                        // update last uploaded file for add createdDate
                        $.ajax({
                            type: "POST",
                            url: "FileUpload/UpdateFile",
                            data: fileUpdate,
                            success: function (response) {
                                var updatedFile = jQuery.parseJSON(response);

                                if (currentDrawingSettings.AttachmentIds == null) {
                                    currentDrawingSettings.AttachmentIds = updatedFile.Id;
                                }
                                else {
                                    currentDrawingSettings.AttachmentIds = currentDrawingSettings.AttachmentIds + "," + updatedFile.Id;
                                }

                                $.ajax({
                                    type: "POST",
                                    url: "QuartzLink/UpdateDrawingSettingsJSON",
                                    data: { model: currentDrawingSettings },
                                    success: function (response) {
                                        currentDrawingSettings = jQuery.parseJSON(response);
                                        loadDrawingSettingsAttachmentPage();
                                        toast("Attachment Upload Successful!");
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
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            }


            break;

        default:
    }
}