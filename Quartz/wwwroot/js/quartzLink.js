function loadLinkModal() {
    switch (clickedOrCreated) {
        case "clicked":
            $.ajax({
                type: "GET",
                url: "QuartzLink/GetLinkDetailJSON",
                data: { linkId: lastClickedLinkButtonId },
                success: function (response) {
                    lastClickedLink = jQuery.parseJSON(response);

                    $("#addLinkTagNo").val(lastClickedLink.TagNo);
                    if (lastClickedLink.ShowLabel == 1) {
                        $('#linkShowLabel').prop('checked', true);
                    }
                    else $('#linkShowLabel').prop('checked', false);

                    if (lastClickedLink.CurrentDrawingId != 0) {
                        $.ajax({
                            type: "GET",
                            url: "FileUpload/GetFileDetail",
                            data: { fileId: lastClickedLink.CurrentDrawingId },
                            success: function (response) {
                                rModel = jQuery.parseJSON(response);

                                $("#addLinkCurrentDrawing").val(rModel.Name);
                            },
                            error: function (error) {
                                alert("error!");
                                console.log(error.responseText);
                            }
                        });
                    }
                    else $("#addLinkCurrentDrawing").val("Drawing doesn't exist!");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "created":
            $.ajax({
                type: "GET",
                url: "QuartzLink/GetLinkDetailJSON",
                data: { linkId: lastCreatedLink.Id },
                success: function (response) {
                    lastCreatedLink = jQuery.parseJSON(response);

                    $("#addLinkTagNo").val(lastCreatedLink.TagNo);
                    $('#linkShowLabel').prop('checked', true);
                    $("#addLinkCurrentDrawing").val("Drawing doesn't exist!");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        default:
    }
}

function linkModalSaveButton() {
    var linkUpdateModel;
    switch (clickedOrCreated) {
        case "clicked":
            lastClickedLink.TagNo = $("#addLinkTagNo").val();

            // [TAMAMLANMADI: showlabel controller/action'da modalstate.isvalid = false hatasına sebep oluyor, geçici olarak yorum satırı yaptım!]
            //lastClickedLink.ShowLabel = showLabel;
            linkUpdateModel = lastClickedLink;

            clickedOrCreated = "null";
            break;

        case "created":
            lastCreatedLink.TagNo = $("#addLinkTagNo").val();
            // [TAMAMLANMADI: showlabel controller/action'da modalstate.isvalid = false hatasına sebep oluyor, geçici olarak yorum satırı yaptım!]
            //lastCreatedLink.ShowLabel = $("#linkShowLabel").val();
            linkUpdateModel = lastCreatedLink;

            clickedOrCreated = "null";
            break;

        default:
    }

    $.ajax({
        type: "POST",
        url: "QuartzLink/UpdateLinkJSON",
        data: { model: linkUpdateModel },
        success: function (response) {
            rModel = jQuery.parseJSON(response);
            console.log(rModel);
            clickedOrCreated = "null";
            function waitFunc() {
                $("#shapeArea").children().remove();
                createList();
                // Load Spinner Yap! [TAMAMLANMADI]
            }
            setTimeout(waitFunc, 100);
            //alert("Update Successful!");
            //$("#myToast").toast("show");
            linkModalToastFunc();
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

//  Select Existing Drawing [TAMAMLANMADI]
var linkModalSelectExistingDrawingMode = false;
$("#addLinkSelectDrawing").on("click", function () {
    if (linkModalSelectExistingDrawingMode == false) {
        document.getElementById("selectExistingDrawing").removeAttribute("hidden");
        document.getElementById("btnAddLinkNewDrawing").setAttribute("disabled", "");
        $("#addLinkSelectDrawing").removeClass("btn-dark");
        $("#addLinkSelectDrawing").addClass("btn-danger");
        $("#addLinkSelectDrawing").text("Discard");
        linkModalSelectExistingDrawingMode = true;
        return -1;
    }
    if (linkModalSelectExistingDrawingMode == true) {
        document.getElementById("selectExistingDrawing").setAttribute("hidden", "");
        document.getElementById("btnAddLinkNewDrawing").removeAttribute("disabled");
        $("#addLinkSelectDrawing").removeClass("btn-danger");
        $("#addLinkSelectDrawing").addClass("btn-dark");
        $("#addLinkSelectDrawing").text("Existing Drawing");
        linkModalSelectExistingDrawingMode = false;
        return -1;
    }
});

// Upload Drawing
var addLinkUploadDrawingArea = false;
$("#btnAddLinkUploadDrawing").on("click", function () {
    if (addLinkUploadDrawingArea == false) {
        document.getElementById("AddLinkUploadDrawingArea").removeAttribute("hidden");
        addLinkUploadDrawingArea = true;
        return -1;
    }
    if (addLinkUploadDrawingArea == true) {
        document.getElementById("AddLinkUploadDrawingArea").setAttribute("hidden", "");
        addLinkUploadDrawingArea = false;
        return -1;
    }
});