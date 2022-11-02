function loadLinkModal() {
    switch (clickedOrCreated) {
        case "clicked":
            $("#linkModalName").html(lastClickedLink.TagNo);

            $("#addLinkTagNo").val(lastClickedLink.TagNo);
            if (lastClickedLink.ShowLabel == 1)
                $('#linkShowLabel').prop('checked', true);
            else $('#linkShowLabel').prop('checked', false);

            // #region Get All Drawings for Select/Option
            $.ajax({
                type: "GET",
                url: fileController.GetAllDrawings,
                success: function (response) {
                    allDrawings = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#addLinkSelectDrawing").children().remove();

                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
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
            $("#linkModalName").html(lastCreatedLink.TagNo);

            $("#addLinkTagNo").val(lastCreatedLink.TagNo);
            if (lastCreatedLink.ShowLabel == 1)
                $("#linkShowLabel").prop('checked', true);
            else $("#linkShowLabel").prop('checked', false);

            // #region Get All Drawings for Select/Option
            $.ajax({
                type: "GET",
                url: fileController.GetAllDrawings,
                success: function (response) {
                    allDrawings = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#addLinkSelectDrawing").children().remove();

                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
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

    var link;
    if (clickedOrCreated == "clicked")
        link = lastClickedLink;
    if (clickedOrCreated == "created")
        link = lastCreatedLink;

    link.TagNo = $("#addLinkTagNo").val();
    link.ShowLabel = $('#linkShowLabel').prop('checked');

    if ($("#addLinkSelectDrawing").val() != "select")
        link.CurrentDrawingId = $("#addLinkSelectDrawing").val();

    $.ajax({
        type: "POST",
        url: linkController.Link.Update,
        data: { model: link },
        success: function (response) {
            rModel = jQuery.parseJSON(response);
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

    $.ajax({
        type: "GET",
        url: linkController.DrawingSettings.Detail,
        data: { quartzLinkId: link.Id },
        success: function (response) {
            linksDrawingSettings = jQuery.parseJSON(response);
            linksDrawingSettings.DrawingNo = link.TagNo;
            linksDrawingSettings.File = link.CurrentDrawingId;

            $.ajax({
                type: "POST",
                url: linkController.DrawingSettings.Update,
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

    selectedFeature.setProperties({ 'Name': $("#addLinkTagNo").val() });

    updateDrawingFeatures();

    document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
    document.getElementById("AddLinkUploadDrawingAreaCreatedMode").setAttribute("hidden", "");

    if (clickedOrCreated == "clicked")
        lastClickedLink = link;
    if (clickedOrCreated == "created")
        lastCreatedLink = link;
}

function goCurrentLink() {
    var link;
    if (clickedOrCreated == "clicked")
        link = lastClickedLink;
    if (clickedOrCreated == "created")
        link = lastCreatedLink;

    if (link.CurrentDrawingId != $("#addLinkSelectDrawing").val()) {
        link.CurrentDrawingId = $("#addLinkSelectDrawing").val();

        if (link.TagNo != $("#addLinkTagNo").val()) {
            link.TagNo = $("#addLinkTagNo").val();

            $.ajax({
                type: "GET",
                url: linkController.DrawingSettings.Detail,
                data: { quartzLinkId: link.Id },
                success: function (response) {
                    var linksDrawingSettings = jQuery.parseJSON(response);
                    linksDrawingSettings.DrawingNo = $("#addLinkTagNo").val();
                    linksDrawingSettings.File = $("#addLinkSelectDrawing").val();
                    $.ajax({
                        type: "POST",
                        url: linkController.DrawingSettings.Update,
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

            selectedFeature.setProperties({ 'Name': $("#addLinkTagNo").val() });

            updateDrawingFeatures();
        }

        $.ajax({
            type: "POST",
            url: linkController.Link.Update,
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
                url: linkController.Link.Update,
                data: { model: link },
                success: function (response) {
                    link = jQuery.parseJSON(response);
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });

            $.ajax({
                type: "GET",
                url: linkController.DrawingSettings.Detail,
                data: { quartzLinkId: link.Id },
                success: function (response) {
                    var linksDrawingSettings = jQuery.parseJSON(response);
                    linksDrawingSettings.DrawingNo = $("#addLinkTagNo").val();
                    $.ajax({
                        type: "POST",
                        url: linkController.DrawingSettings.Update,
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

            selectedFeature.setProperties({ 'Name': $("#addLinkTagNo").val() });

            updateDrawingFeatures();
        }
    }

    currentQuartzLink = link;

    $.ajax({
        type: "GET",
        url: linkController.DrawingFeatures.GetVectorSource,
        data: { quartzLinkId: link.Id },
        success: function (response) {
            currentDrawingFeatures = jQuery.parseJSON(response);

            $.ajax({
                type: "GET",
                url: fileController.Detail,
                data: { fileId: link.CurrentDrawingId },
                success: function (response) {
                    currentDrawing = jQuery.parseJSON(response);
                    $.ajax({
                        type: "GET",
                        url: linkController.QuartzPartialView,
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

$("#deleteLink").on('click', function () {
    // clicked/created
    var link;
    if (clickedOrCreated == "clicked")
        link = lastClickedLink;
    if (clickedOrCreated == "created")
        link = lastCreatedLink;

    objectTypeToBeDeleted = "link";
    objectIdToBeDeleted = link.Id;
});

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