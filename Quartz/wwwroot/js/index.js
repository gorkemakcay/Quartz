﻿// #region General Variables
var currentDrawingSettings;
var currentQuartzLink;
var currentDrawing;
var lastCreatedLink;
var rFeatureCollection;
// #endregion

$(function () {
    // #region [GET Quartz's Partial View from QuartzLink Controller]
    $.get({
        url: "QuartzLink/GetQuartz",
        success: function (response) {
            $("#main").html(response);
        }
    });
    // #endregion

    // #region [GET Link Details from QuartzLink Controller]
    $.ajax({
        type: "GET",
        url: "QuartzLink/GetLinkDetailJSON",
        data: { linkId: 1 },
        success: function (response) {
            currentQuartzLink = jQuery.parseJSON(response);

            $.get({
                url: 'QuartzLink/GetVectorSource',
                data: { quartzLinkId: 1 },
                success: function (response) {
                    if (response != 0)
                        rFeatureCollection = jQuery.parseJSON(response);
                    else
                        rFeatureCollection = 0;
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });

            function timeOut() {
                $.ajax({
                    type: "GET",
                    url: "FileUpload/GetFileDetail",
                    data: { fileId: currentQuartzLink.CurrentDrawingId },
                    success: function (result) {
                        rModel = jQuery.parseJSON(result);
                        //currentDrawingPath = rModel.Path;
                        currentDrawing = rModel;
                        loadQuartz();
                    }
                });
            }
            setTimeout(timeOut, 100);
        },
        error: function (error) {
            alert("error");
            console.log(error.responseText);
        }
    });
    // #endregion
});