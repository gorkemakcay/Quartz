function loadLinkModal() {
    switch (clickedOrCreated) {
        case "clicked":
            $("#addLinkTagNo").val(lastClickedLink.TagNo);
            if (lastClickedLink.ShowLabel == 1)
                $('#linkShowLabel').prop('checked', true);
            else $('#linkShowLabel').prop('checked', false);

            // #region Get All Drawings for Select/Option
            $.ajax({
                type: "GET",
                url: "FileUpload/GetAllDrawings",
                success: function (response) {
                    allDrawings = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#addLinkSelectDrawing").children().remove();

                    $.ajax({
                        type: "GET",
                        url: "FileUpload/GetFileDetail",
                        data: { fileId: lastClickedLink.CurrentDrawingId },
                        success: function (response) {
                            var selectedDrawing = jQuery.parseJSON(response);

                            if (selectedDrawing != null) {
                                $("#addLinkSelectDrawing").append(
                                    $('<option>', {
                                        value: selectedDrawing.Id,
                                        text: selectedDrawing.Name,
                                        id: "selectDrawing"
                                    })
                                );
                                $("#selectDrawing").attr("hidden", "");
                            }
                            else {
                                $("#addLinkSelectDrawing").append(
                                    $('<option>', {
                                        value: "select",
                                        text: "Select Drawing",
                                        id: "selectDrawing"
                                    })
                                );
                                $("#selectDrawing").attr("hidden", "");
                            }

                            for (var i = 0; i < allDrawings.length; i++) {
                                $("#addLinkSelectDrawing").append(
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
            break;

        case "created":
            $("#addLinkTagNo").val(lastCreatedLink.TagNo);
            if (lastCreatedLink.ShowLabel == 1)
                $("#linkShowLabel").prop('checked', true);
            else $("#linkShowLabel").prop('checked', false);

            // #region Get All Drawings for Select/Option
            $.ajax({
                type: "GET",
                url: "FileUpload/GetAllDrawings",
                success: function (response) {
                    allDrawings = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#addLinkSelectDrawing").children().remove();

                    $.ajax({
                        type: "GET",
                        url: "FileUpload/GetFileDetail",
                        data: { fileId: lastCreatedLink.CurrentDrawingId },
                        success: function (response) {
                            var selectedDrawing = jQuery.parseJSON(response);

                            if (selectedDrawing != null) {
                                $("#addLinkSelectDrawing").append(
                                    $('<option>', {
                                        value: selectedDrawing.Id,
                                        text: selectedDrawing.Name,
                                        id: "selectDrawing"
                                    })
                                );
                                $("#selectDrawing").attr("hidden", "");
                            }
                            else {
                                $("#addLinkSelectDrawing").append(
                                    $('<option>', {
                                        value: "select",
                                        text: "Select Drawing",
                                        id: "selectDrawing"
                                    })
                                );
                                $("#selectDrawing").attr("hidden", "");
                            }

                            for (var i = 0; i < allDrawings.length; i++) {
                                $("#addLinkSelectDrawing").append(
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

                    //$("#addLinkSelectDrawing").children().remove();

                    //$("#addLinkSelectDrawing").append(
                    //    $('<option>', {
                    //        value: "select",
                    //        text: "Select Drawing",
                    //        id: "selectDrawing"
                    //    })
                    //);
                    //$("#selectDrawing").attr("hidden", "");

                    //for (var i = 0; i < allDrawings.length; i++) {
                    //    $("#addLinkSelectDrawing").append(
                    //        $('<option>', {
                    //            value: allDrawings[i].Id,
                    //            text: allDrawings[i].Name
                    //        })
                    //    );
                    //}
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            // #endregion
            break;

        default:
    }

    $(".linkModalSelectedDrawing").text("");
    // #region Choose Drawing Button > [Change Function]
    $("#addLinkUploadDrawing").on('change', function (e) {
        var fileName = e.target.files[0].name;
        $(".linkModalSelectedDrawing").text("Selected Drawing: " + fileName);
    });
    // #endregion
}

function linkModalSaveButton() {
    var linkUpdateModel;
    switch (clickedOrCreated) {
        case "clicked":
            lastClickedLink.TagNo = $("#addLinkTagNo").val();
            if ($("#addLinkSelectDrawing").val() != "select")
                lastClickedLink.CurrentDrawingId = $("#addLinkSelectDrawing").val();

            // [TAMAMLANMADI: showlabel controller/action'da modalstate.isvalid = false hatasına sebep oluyor, geçici olarak yorum satırı yaptım!]
            //lastClickedLink.ShowLabel = showLabel;
            linkUpdateModel = lastClickedLink;
            break;

        case "created":
            lastCreatedLink.TagNo = $("#addLinkTagNo").val();
            if ($("#addLinkSelectDrawing").val() != "select")
                lastCreatedLink.CurrentDrawingId = $("#addLinkSelectDrawing").val();

            // [TAMAMLANMADI: showlabel controller/action'da modalstate.isvalid = false hatasına sebep oluyor, geçici olarak yorum satırı yaptım!]
            //lastCreatedLink.ShowLabel = $("#linkShowLabel").val();
            linkUpdateModel = lastCreatedLink;
            break;

        default:
    }

    $.ajax({
        type: "POST",
        url: "QuartzLink/UpdateLinkJSON",
        data: { model: linkUpdateModel },
        success: function (response) {
            rModel = jQuery.parseJSON(response);
            //console.log(rModel);
            clickedOrCreated = "null";
            function wait() {
                $("#shapeArea").children().remove();
                createList();
                // Load Spinner Yap! [TAMAMLANMADI]
            }
            setTimeout(wait, 100);
            toast("Link Update Successful!");
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });

    document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
    document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
}

function goCurrentLink() {
    var link;
    if (clickedOrCreated == "clicked")
        link = lastClickedLink;
    if (clickedOrCreated == "created")
        link = lastCreatedLink;

    if (link.CurrentDrawingId != $("#addLinkSelectDrawing").val()) {
        link.CurrentDrawingId = $("#addLinkSelectDrawing").val();

        if (link.TagNo != $("#addLinkTagNo").val())
            link.TagNo = $("#addLinkTagNo").val();

        $.ajax({
            type: "POST",
            url: "QuartzLink/UpdateLinkJSON",
            data: { model: link },
            succes: function (response) {
                link = jQuery.parseJSON(response);
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
    else {
        if (link.TagNo != $("#addLinkTagNo").val()) {
            link.TagNo = $("#addLinkTagNo").val();

            $.ajax({
                type: "POST",
                url: "QuartzLink/UpdateLinkJSON",
                data: { model: link },
                succes: function (response) {
                    link = jQuery.parseJSON(response);
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    }

    currentQuartzLink = link;

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetDrawingSettingsDetailJSON",
        data: { quartzLinkId: currentQuartzLink.Id },
        success: function (response) {
            currentDrawingSettings = jQuery.parseJSON(response);
            currentDrawingSettings.File = $("#addLinkSelectDrawing").val();

            $.ajax({
                type: "POST",
                url: "QuartzLink/UpdateDrawingSettingsJSON",
                data: { model: currentDrawingSettings },
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

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetVectorSource",
        data: { quartzLinkId: link.Id },
        success: function (response) {
            currentDrawingFeatures = jQuery.parseJSON(response);

            $.ajax({
                type: "GET",
                url: "FileUpload/GetFileDetail",
                data: { fileId: link.CurrentDrawingId },
                success: function (response) {
                    currentDrawing = jQuery.parseJSON(response);
                    $.ajax({
                        type: "GET",
                        url: "QuartzLink/GetQuartz",
                        success: function (html) {
                            $("#main").children().remove();
                            $("#main").html(html);

                            loadQuartz();

                            crumbCount++;
                            $(".breadCrumb").append(
                                $('<li>', {
                                    text: currentQuartzLink.TagNo,
                                    value: crumbCount,
                                    onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " , " + crumbCount + ")",
                                    class: "crumb"
                                })
                            );

                            if (clickedOrCreated == "clicked")
                                lastClickedLink = link;
                            if (clickedOrCreated == "created")
                                lastCreatedLink = link;
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

// #region Link Modal

var addLinkUploadDrawingAreaCreatedMode = false;
$("#btnAddLinkUploadDrawingCreatedMode").on("click", function () {
    if (addLinkUploadDrawingAreaCreatedMode == false) {
        document.getElementById("AddLinkUploadDrawingAreaCreatedMode").removeAttribute("hidden");
        $("#addLinkSelectDrawing").attr("disabled", "");
        addLinkUploadDrawingAreaCreatedMode = true;
        return -1;
    }
    if (addLinkUploadDrawingAreaCreatedMode == true) {
        document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");
        $("#addLinkSelectDrawing").removeAttr("disabled");
        addLinkUploadDrawingAreaCreatedMode = false;
        return -1;
    }
});

// #region Upload Drawing Button
var addLinkUploadDrawingArea = false;
$("#btnAddLinkUploadDrawing").on("click", function () {
    if (addLinkUploadDrawingArea == false) {
        document.getElementById("AddLinkUploadDrawingArea").removeAttribute("hidden");
        $("#addLinkSelectDrawing").attr("disabled", "");
        addLinkUploadDrawingArea = true;
        return -1;
    }
    if (addLinkUploadDrawingArea == true) {
        document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
        $("#addLinkSelectDrawing").removeAttr("disabled");
        addLinkUploadDrawingArea = false;
        return -1;
    }
});
// #endregion

// #endregion