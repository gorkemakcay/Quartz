// #region Variables
var dsmId = 0;
var quartzLinkId = 0;
var linkResponseModel;
var currentDrawing;
// #endregion

$(function () {
    $.get({
        url: "QuartzLink/GetQuartz",
        success: function (result) {
            $("#main").html(result);
        }
    });

    $.ajax({
        type: "GET",
        url: "QuartzLink/GetLinkDetailJSON",
        data: { linkId: 1 },
        success: function (result) {
            rModel = jQuery.parseJSON(result);
            linkResponseModel = rModel;
            //$("#linkId").val(rModel.Id);
            //quartzLinkId = $("#linkId").val();
            quartzLinkId = rModel.Id;
            $.ajax({
                type: "GET",
                url: "FileUpload/GetFileDetail",
                data: { fileId: rModel.CurrentDrawingId },
                success: function (result) {
                    rModel = jQuery.parseJSON(result);
                    //currentDrawingPath = rModel.Path;
                    currentDrawing = rModel;
                    loadQuartz();
                }
            });
        },
        error: function (error) {
            alert("error");
            console.log(error.responseText);
        }
    });
});