// LINK MODAL: Select Existing Drawing
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

// LINK MODAL: Add New Drawing
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