function filterDrawing() {
    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsInspectionPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var date;
            var dueDate;

            if ($("#inspectionFilterDate").val().toString() == "") {
                date = null;
            }
            else date = $("#inspectionFilterDate").val();

            if ($("#inspectionFilterDueDate").val().toString() == "") {
                dueDate = null;
            }
            else dueDate = $("#inspectionFilterDueDate").val();


            var filterInspectionModel = {
                ReportNo: $("#inspectionFilterReportNo").val(),
                Method: $("#inspectionFilterMethod").val(),
                Procedure: $("#inspectionFilterProcedure").val(),
                Technique: $("#inspectionFilterTechnique").val(),
                Status: $("#inspectionFilterStatus").val(),
                Date: date,
                DueDate: dueDate,
                Details: $("#inspectionFilterDetails").val()
            };

            $.ajax({
                type: "Post",
                url: "QuartzItem/FilterInspections", // AJAX URL ROUTER'A EKLE
                data: { model: filterInspectionModel },
                success: function (response) {
                    var filteredInspections = jQuery.parseJSON(response);

                    $("#searchPanelInspectionTable").children('tbody').children('tr').remove();

                    if (filteredInspections != "") {
                        var inspectionCount = filteredInspections.length;
                        var inspectionNumber = 0;
                        $("#totalSearchPanelInspectionCount").html("Total Inspection Count: " + inspectionCount);

                        filteredInspections.forEach(function (inspection) {
                            var date = inspection.Date.split('T')[0];
                            var itemDetail;
                            var linkDetail;
                            $.ajax({
                                type: "GET",
                                url: "QuartzItem/GetItemDetailJSON",
                                data: { itemId: inspection.QuartzItemId },
                                success: function (response) {
                                    itemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: "QuartzLink/GetLinkDetailJSON",
                                        data: { linkId: itemDetail.QuartzLinkId },
                                        success: function (response) {
                                            linkDetail = jQuery.parseJSON(response);

                                            $("#searchPanelInspectionTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.ReportNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + linkDetail.TagNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong style='color: blue;' id=" + linkDetail.Id + " class='plantIdent'>" + itemDetail.TagNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + date + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.Method + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.Status + "</strong>"
                                                    ),
                                                )
                                            );
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

                            inspectionNumber++;
                        });

                        //if (inspectionCount >= inspectionNumber) {
                        //    alert(inspectionNumber);
                        //    $(".plantIdent").on('click', function () {
                        //        alert($(this).attr("id"));
                        //    });
                        //}
                    }
                    else {
                        $("#searchPanelInspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "6", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }
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

function filterTag() {
    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsInspectionPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var filterTagModel = {
                TagNo: "TagNo",
                FittingType: "FittingType",
                WeldType: "WeldType",
                plantArea: "plantAreaPartial",
                PlantSystem: "PlantSystem",
                Description: "Description"
            };

            $.ajax({
                type: "Post",
                url: "QuartzItem/FilterTag", // AJAX URL ROUTER'A EKLE
                data: { model: filterTagModel },
                success: function (response) {
                    var filteredTags = jQuery.parseJSON(response);
                    console.log(filteredTags);

                    //$("#searchPanelInspectionTable").children('tbody').children('tr').remove();

                    //if (filteredInspections != "") {
                    //    var inspectionCount = filteredInspections.length;
                    //    var inspectionNumber = 0;
                    //    $("#totalSearchPanelInspectionCount").html("Total Inspection Count: " + inspectionCount);

                    //    filteredInspections.forEach(function (inspection) {
                    //        var date = inspection.Date.split('T')[0];
                    //        var itemDetail;
                    //        var linkDetail;
                    //        $.ajax({
                    //            type: "GET",
                    //            url: "QuartzItem/GetItemDetailJSON",
                    //            data: { itemId: inspection.QuartzItemId },
                    //            success: function (response) {
                    //                itemDetail = jQuery.parseJSON(response);

                    //                $.ajax({
                    //                    type: "GET",
                    //                    url: "QuartzLink/GetLinkDetailJSON",
                    //                    data: { linkId: itemDetail.QuartzLinkId },
                    //                    success: function (response) {
                    //                        linkDetail = jQuery.parseJSON(response);

                    //                        $("#searchPanelInspectionTable").children('tbody').append(
                    //                            $('<tr>').append(
                    //                                $('<td>', { align: "center" }).append(
                    //                                    "<strong>" + inspection.ReportNo + "</strong>"
                    //                                ),
                    //                                $('<td>', { align: "center" }).append(
                    //                                    "<strong>" + linkDetail.TagNo + "</strong>"
                    //                                ),
                    //                                $('<td>', { align: "center" }).append(
                    //                                    "<strong style='color: blue;' id=" + linkDetail.Id + " class='plantIdent'>" + itemDetail.TagNo + "</strong>"
                    //                                ),
                    //                                $('<td>', { align: "center" }).append(
                    //                                    "<strong>" + date + "</strong>"
                    //                                ),
                    //                                $('<td>', { align: "center" }).append(
                    //                                    "<strong>" + inspection.Method + "</strong>"
                    //                                ),
                    //                                $('<td>', { align: "center" }).append(
                    //                                    "<strong>" + inspection.Status + "</strong>"
                    //                                ),
                    //                            )
                    //                        );
                    //                    },
                    //                    error: function (error) {
                    //                        alert("error!");
                    //                        console.log(error.responseText);
                    //                    }
                    //                });
                    //            },
                    //            error: function (error) {
                    //                alert("error!");
                    //                console.log(error.responseText);
                    //            }
                    //        });

                    //        inspectionNumber++;
                    //    });

                    //    //if (inspectionCount >= inspectionNumber) {
                    //    //    alert(inspectionNumber);
                    //    //    $(".plantIdent").on('click', function () {
                    //    //        alert($(this).attr("id"));
                    //    //    });
                    //    //}
                    //}
                    //else {
                    //    $("#searchPanelInspectionTable").children('tbody').append(
                    //        $('<tr>').append(
                    //            $('<td>', { colspan: "6", class: "text-center" }).append("No data available to show!")
                    //        )
                    //    );
                    //}
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

function filterInspection() {
    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsInspectionPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);
            $("#searchPanelsModalTitle").html("Search Inspection");

            var date;
            var dueDate;

            if ($("#inspectionFilterDate").val().toString() == "") {
                date = null;
            }
            else date = $("#inspectionFilterDate").val();

            if ($("#inspectionFilterDueDate").val().toString() == "") {
                dueDate = null;
            }
            else dueDate = $("#inspectionFilterDueDate").val();


            var filterInspectionModel = {
                ReportNo: $("#inspectionFilterReportNo").val(),
                Method: $("#inspectionFilterMethod").val(),
                Procedure: $("#inspectionFilterProcedure").val(),
                Technique: $("#inspectionFilterTechnique").val(),
                Status: $("#inspectionFilterStatus").val(),
                Date: date,
                DueDate: dueDate,
                Details: $("#inspectionFilterDetails").val()
            };

            $.ajax({
                type: "Post",
                url: "QuartzItem/FilterInspections", // AJAX URL ROUTER'A EKLE
                data: { model: filterInspectionModel },
                success: function (response) {
                    var filteredInspections = jQuery.parseJSON(response);

                    $("#searchPanelInspectionTable").children('tbody').children('tr').remove();

                    if (filteredInspections != "") {
                        var inspectionCount = filteredInspections.length;
                        $("#totalSearchPanelInspectionCount").html("Total Inspection Count: " + inspectionCount);

                        filteredInspections.forEach(function (inspection) {
                            var date = inspection.Date.split('T')[0];
                            var itemDetail;
                            var linkDetail;

                            $.ajax({
                                type: "GET",
                                url: "QuartzItem/GetItemDetailJSON",
                                data: { itemId: inspection.QuartzItemId },
                                success: function (response) {
                                    itemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: "QuartzLink/GetLinkDetailJSON",
                                        data: { linkId: itemDetail.QuartzLinkId },
                                        success: function (response) {
                                            linkDetail = jQuery.parseJSON(response);

                                            $("#searchPanelInspectionTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<p style='margin-top: 0px; margin-bottom: 0px;'>" + inspection.ReportNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p style='margin-top: 0px; margin-bottom: 0px;'>" + linkDetail.TagNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p style='margin-top: 0px; margin-bottom: 0px; color: blue;' class='plantIdent'>" + itemDetail.TagNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p style='margin-top: 0px; margin-bottom: 0px;'>" + date + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p style='margin-top: 0px; margin-bottom: 0px;'>" + inspection.Method + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p style='margin-top: 0px; margin-bottom: 0px;'>" + inspection.Status + "</p>"
                                                    ),
                                                )
                                            );

                                            //$(".plantIdent").on('click', function () {
                                            //    alert("hi");
                                            //});
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

                        });

                        
                    }
                    else {
                        $("#searchPanelInspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "6", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }
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

function filterValveMaintenance() {
    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsInspectionPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var date;
            var dueDate;

            if ($("#inspectionFilterDate").val().toString() == "") {
                date = null;
            }
            else date = $("#inspectionFilterDate").val();

            if ($("#inspectionFilterDueDate").val().toString() == "") {
                dueDate = null;
            }
            else dueDate = $("#inspectionFilterDueDate").val();


            var filterInspectionModel = {
                ReportNo: $("#inspectionFilterReportNo").val(),
                Method: $("#inspectionFilterMethod").val(),
                Procedure: $("#inspectionFilterProcedure").val(),
                Technique: $("#inspectionFilterTechnique").val(),
                Status: $("#inspectionFilterStatus").val(),
                Date: date,
                DueDate: dueDate,
                Details: $("#inspectionFilterDetails").val()
            };

            $.ajax({
                type: "Post",
                url: "QuartzItem/FilterInspections", // AJAX URL ROUTER'A EKLE
                data: { model: filterInspectionModel },
                success: function (response) {
                    var filteredInspections = jQuery.parseJSON(response);

                    $("#searchPanelInspectionTable").children('tbody').children('tr').remove();

                    if (filteredInspections != "") {
                        var inspectionCount = filteredInspections.length;
                        var inspectionNumber = 0;
                        $("#totalSearchPanelInspectionCount").html("Total Inspection Count: " + inspectionCount);

                        filteredInspections.forEach(function (inspection) {
                            var date = inspection.Date.split('T')[0];
                            var itemDetail;
                            var linkDetail;
                            $.ajax({
                                type: "GET",
                                url: "QuartzItem/GetItemDetailJSON",
                                data: { itemId: inspection.QuartzItemId },
                                success: function (response) {
                                    itemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: "QuartzLink/GetLinkDetailJSON",
                                        data: { linkId: itemDetail.QuartzLinkId },
                                        success: function (response) {
                                            linkDetail = jQuery.parseJSON(response);

                                            $("#searchPanelInspectionTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.ReportNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + linkDetail.TagNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong style='color: blue;' id=" + linkDetail.Id + " class='plantIdent'>" + itemDetail.TagNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + date + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.Method + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.Status + "</strong>"
                                                    ),
                                                )
                                            );
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

                            inspectionNumber++;
                        });

                        //if (inspectionCount >= inspectionNumber) {
                        //    alert(inspectionNumber);
                        //    $(".plantIdent").on('click', function () {
                        //        alert($(this).attr("id"));
                        //    });
                        //}
                    }
                    else {
                        $("#searchPanelInspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "6", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }
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

function filterThicknessMeasurement() {
    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsInspectionPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var date;
            var dueDate;

            if ($("#inspectionFilterDate").val().toString() == "") {
                date = null;
            }
            else date = $("#inspectionFilterDate").val();

            if ($("#inspectionFilterDueDate").val().toString() == "") {
                dueDate = null;
            }
            else dueDate = $("#inspectionFilterDueDate").val();


            var filterInspectionModel = {
                ReportNo: $("#inspectionFilterReportNo").val(),
                Method: $("#inspectionFilterMethod").val(),
                Procedure: $("#inspectionFilterProcedure").val(),
                Technique: $("#inspectionFilterTechnique").val(),
                Status: $("#inspectionFilterStatus").val(),
                Date: date,
                DueDate: dueDate,
                Details: $("#inspectionFilterDetails").val()
            };

            $.ajax({
                type: "Post",
                url: "QuartzItem/FilterInspections", // AJAX URL ROUTER'A EKLE
                data: { model: filterInspectionModel },
                success: function (response) {
                    var filteredInspections = jQuery.parseJSON(response);

                    $("#searchPanelInspectionTable").children('tbody').children('tr').remove();

                    if (filteredInspections != "") {
                        var inspectionCount = filteredInspections.length;
                        var inspectionNumber = 0;
                        $("#totalSearchPanelInspectionCount").html("Total Inspection Count: " + inspectionCount);

                        filteredInspections.forEach(function (inspection) {
                            var date = inspection.Date.split('T')[0];
                            var itemDetail;
                            var linkDetail;
                            $.ajax({
                                type: "GET",
                                url: "QuartzItem/GetItemDetailJSON",
                                data: { itemId: inspection.QuartzItemId },
                                success: function (response) {
                                    itemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: "QuartzLink/GetLinkDetailJSON",
                                        data: { linkId: itemDetail.QuartzLinkId },
                                        success: function (response) {
                                            linkDetail = jQuery.parseJSON(response);

                                            $("#searchPanelInspectionTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.ReportNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + linkDetail.TagNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong style='color: blue;' id=" + linkDetail.Id + " class='plantIdent'>" + itemDetail.TagNo + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + date + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.Method + "</strong>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<strong>" + inspection.Status + "</strong>"
                                                    ),
                                                )
                                            );
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

                            inspectionNumber++;
                        });

                        //if (inspectionCount >= inspectionNumber) {
                        //    alert(inspectionNumber);
                        //    $(".plantIdent").on('click', function () {
                        //        alert($(this).attr("id"));
                        //    });
                        //}
                    }
                    else {
                        $("#searchPanelInspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "6", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }
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