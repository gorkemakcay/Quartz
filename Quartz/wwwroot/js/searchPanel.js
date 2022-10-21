function filterDrawing() {
    $.ajax({
        type: "GET",
        url: "Search/GetSearchPanelsDrawingPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var filterDrawingModel = {
                TagNo: $("#drawingFilterTagNo").val(),
                Description: $("#drawingFilterDescription").val(),
                PlantArea: $("#drawingFilterPlantArea").val(),
                PlantSystem: $("#drawingFilterPlantSystem").val(),
            };

            $.ajax({
                type: "Post",
                url: "Search/FilterDrawing", // AJAX URL ROUTER'A EKLE
                data: { model: filterDrawingModel },
                success: function (response) {
                    var filteredDrawings = jQuery.parseJSON(response);
                    $("#searchPanelDrawingTable").children('tbody').children('tr').remove();

                    if (filteredDrawings != "") {
                        var drawingCount = filteredDrawings.length;

                        $("#totalSearchPanelDrawingCount").html("Total Drawing Count: " + drawingCount);

                        filteredDrawings.forEach(function (drawing) {
                            if (drawing.CurrentDrawingId != 0) {
                                $("#searchPanelDrawingTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedLink(" + drawing.LinkId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.TagNo + "'>" + drawing.TagNo + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.Description + "'>" + drawing.Description + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.PlantArea + "'>" + drawing.PlantArea + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.PlantSystem + "'>" + drawing.PlantSystem + "</p>"
                                        )
                                    )
                                );
                            }
                            else {
                                $("#searchPanelDrawingTable").children('tbody').append(
                                    $('<tr>').append(
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' style='color: gray;' data-bs-toggle='tooltip' data-bs-placement='right' title='Drawing does not exist!'><i class='fas fa-link'></i></p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.TagNo + "'>" + drawing.TagNo + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.Description + "'>" + drawing.Description + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.PlantArea + "'>" + drawing.PlantArea + "</p>"
                                        ),
                                        $('<td>', { align: "center" }).append(
                                            "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + drawing.PlantSystem + "'>" + drawing.PlantSystem + "</p>"
                                        )
                                    )
                                );
                            }
                        });
                    }
                    else {
                        $("#searchPanelDrawingTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "5", class: "text-center" }).append("No data available to show!")
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
        url: "Search/GetSearchPanelsTagPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var filterTagModel = {
                ItemTagNo: $("#itemFilterTagNo").val(),
                FittingType: $("#itemFilterFittingType").val(),
                WeldType: $("#itemFilterWeldType").val(),
                plantArea: $("#itemFilterPlantArea").val(),
                PlantSystem: $("#itemFilterPlantSystem").val(),
                Description: $("#itemFilterDrawingDescription").val()
            };

            $.ajax({
                type: "Post",
                url: "Search/FilterTag", // AJAX URL ROUTER'A EKLE
                data: { model: filterTagModel },
                success: function (response) {
                    var filteredTags = jQuery.parseJSON(response);

                    $("#searchPanelTagTable").children('tbody').children('tr').remove();

                    if (filteredTags != "") {
                        var tagCount = filteredTags.length;

                        $("#totalSearchPanelTagCount").html("Total Tag Count: " + tagCount);

                        filteredTags.forEach(function (tag) {
                            $("#searchPanelTagTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedTag(" + tag.ItemId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + tag.ItemTagNo + "'>" + tag.ItemTagNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + tag.SerialNo + "'>" + tag.SerialNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + tag.LinkTagNo + "'>" + tag.LinkTagNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + tag.FittingType + "'>" + tag.FittingType + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + tag.Specification + "'>" + tag.Specification + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='YES/NO'> YES/NO </p>"
                                    ),
                                )
                            );

                        });
                    }
                    else {
                        $("#searchPanelTagTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "7", class: "text-center" }).append("No data available to show!")
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
                                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedInspection(" + inspection.QuartzItemId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.ReportNo + "'>" + inspection.ReportNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + linkDetail.TagNo + "'>" + linkDetail.TagNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + itemDetail.TagNo + "'>" + itemDetail.TagNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + date + "'>" + date + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.Method + "'>" + inspection.Method + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.Status + "'>" + inspection.Status + "</p>"
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

                        });


                    }
                    else {
                        $("#searchPanelInspectionTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "7", class: "text-center" }).append("No data available to show!")
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
        url: "QuartzItem/GetSearchPanelsValveMaintenancePartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var testDate;

            if ($("#valveMaintenanceFilterTestDate").val().toString() == "") {
                testDate = null;
            }
            else testDate = $("#valveMaintenanceFilterTestDate").val();

            var filterValveMaintenanceModel = {
                KKSNo: $("#valveMaintenanceFilterKKSNo").val(),
                SerialNo: $("#valveMaintenanceFilterSerialNo").val(),
                SupplierManufacturare: $("#valveMaintenanceFilterSupplierManufacturare").val(),
                Designation: $("#valveMaintenanceFilterDesignation").val(),
                Remarks: $("#valveMaintenanceFilterRemarks").val(),
                TestDate: testDate,
                PlantArea: $("#valveMaintenanceFilterPlantArea").val()
            };

            $.ajax({
                type: "Post",
                url: "QuartzItem/FilterValveMaintenances", // AJAX URL ROUTER'A EKLE
                data: { model: filterValveMaintenanceModel },
                success: function (response) {
                    var filteredValveMaintenances = jQuery.parseJSON(response);

                    $("#searchPanelValveMaintenanceTable").children('tbody').children('tr').remove();

                    if (filteredValveMaintenances != "") {
                        var valveMaintenanceCount = filteredValveMaintenances.length;
                        $("#totalSearchPanelValveMaintenanceCount").html("Total Valve Maintenance Count: " + valveMaintenanceCount);

                        filteredValveMaintenances.forEach(function (valveMaintenance) {
                            var date = valveMaintenance.TestDate.split('T')[0];

                            $("#searchPanelValveMaintenanceTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedValveMaintenance(" + valveMaintenance.QuartzItemId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.KKSNo + "'>" + valveMaintenance.KKSNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.SerialNo + "'>" + valveMaintenance.SerialNo + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.SupplierManufacturare + "'>" + valveMaintenance.SupplierManufacturare + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.Designation + "'>" + valveMaintenance.Designation + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.Remarks + "'>" + valveMaintenance.Remarks + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + date + "'>" + date + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + valveMaintenance.PlantArea + "'>" + valveMaintenance.PlantArea + "</p>"
                                    )
                                )
                            );

                        });
                    }
                    else {
                        $("#searchPanelValveMaintenanceTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "7", class: "text-center" }).append("No data available to show!")
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
        url: "QuartzItem/GetSearchPanelsThicknessMeasurementPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);

            var filterThicknessMeasurementModel = {
                NominalThickness: $("#thicknessMeasurementFilterNominalThickness").val(),
                MeasuredThickness: $("#thicknessMeasurementFilterMeasuredThickness").val(),
                Description: $("#thicknessMeasurementFilterDescription").val(),
                Specification: $("#thicknessMeasurementFilterSpecification").val(),
                PlantArea: $("#thicknessMeasurementFilterPlantArea").val(),
                PlantSystem: $("#thicknessMeasurementFilterPlantSystem").val()
            };

            // [BURADA KALDIM]
            $.ajax({
                type: "POST",
                url: "QuartzItem/FilterThicknessMeasurements", // AJAX URL ROUTER'A EKLE
                data: { model: filterThicknessMeasurementModel },
                success: function (response) {
                    var filteredThicknessMeasurements = jQuery.parseJSON(response);

                    $("#searchPanelThicknessMeasurementTable").children('tbody').children('tr').remove();

                    if (filteredThicknessMeasurements != "") {
                        var thicknessMeasurementCount = filteredThicknessMeasurements.length;

                        $("#totalSearchPanelThicknessMeasurementCount").html("Total Thickness Measurement Count: " + thicknessMeasurementCount);

                        filteredThicknessMeasurements.forEach(function (thicknessMeasurement) {
                            $("#searchPanelThicknessMeasurementTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedThicknessMeasurement(" + thicknessMeasurement.QuartzItemId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.NominalThickness + "'>" + thicknessMeasurement.NominalThickness + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.MeasuredThickness + "'>" + thicknessMeasurement.MeasuredThickness + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.Description + "'>" + thicknessMeasurement.Description + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.Specification + "'>" + thicknessMeasurement.Specification + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.PlantArea + "'>" + thicknessMeasurement.PlantArea + "</p>"
                                    ),
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + thicknessMeasurement.PlantSystem + "'>" + thicknessMeasurement.PlantSystem + "</p>"
                                    )
                                )
                            );

                        });
                    }
                    else {
                        $("#searchPanelThicknessMeasurementTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "7", class: "text-center" }).append("No data available to show!")
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

$("#clearSearchButton").on('click', function () {
    $(".searchInput").val("");
    loadSearchPanelsSelectOptions();
});

function goSelectedLink(linkId) {
    $.ajax({
        type: "GET",
        url: linkController.Link.Detail,
        data: { linkId: linkId },
        success: function (response) {
            lastClickedLink = jQuery.parseJSON(response);
            clickedOrCreated = "clicked";
            currentQuartzLink = lastClickedLink;

            $.ajax({
                type: "GET",
                url: linkController.DrawingFeatures.GetVectorSource,
                data: { quartzLinkId: currentQuartzLink.Id },
                success: function (response) {
                    currentDrawingFeatures = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: fileController.Detail,
                        data: { fileId: currentQuartzLink.CurrentDrawingId },
                        success: function (response) {
                            currentDrawing = jQuery.parseJSON(response);
                            if (currentDrawing != null) {
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
                                                onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " ," + crumbCount + ")",
                                                class: "crumb"
                                            })
                                        );
                                    },
                                    error: function (error) {
                                        alert("error!");
                                        console.log(error.responseText);
                                    }
                                });
                            }
                            else {
                                alert("Drawing Is Not Exist!");
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
    });
}

function goSelectedTag(itemId) {
    $.ajax({
        type: "GET",
        url: itemController.Item.Detail,
        data: { itemId: itemId },
        success: function (response) {
            lastClickedItem = jQuery.parseJSON(response);
            clickedOrCreated = "clicked";
            $.ajax({
                type: "GET",
                url: linkController.Link.Detail,
                data: { linkId: lastClickedItem.QuartzLinkId },
                success: function (response) {
                    currentQuartzLink = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: linkController.DrawingFeatures.GetVectorSource,
                        data: { quartzLinkId: currentQuartzLink.Id },
                        success: function (response) {
                            currentDrawingFeatures = jQuery.parseJSON(response);

                            $.ajax({
                                type: "GET",
                                url: fileController.Detail,
                                data: { fileId: currentQuartzLink.CurrentDrawingId },
                                success: function (response) {
                                    currentDrawing = jQuery.parseJSON(response);
                                    if (currentDrawing != null) {
                                        $.ajax({
                                            type: "GET",
                                            url: linkController.QuartzPartialView,
                                            success: function (html) {
                                                $("#main").children().remove();
                                                $("#main").html(html);

                                                loadQuartz();

                                                function wait() {
                                                    source.getFeatures().forEach(function (feature) {
                                                        if (feature.get("Id") == lastClickedItem.Id && feature.get("Type") == "item") {
                                                            select.getFeatures().clear();
                                                            select.getFeatures().push(feature);
                                                            selectedFeature = select.getFeatures().item(0);

                                                            view.animate({
                                                                center: new ol.proj.fromLonLat(feature.get("LonLat")),
                                                                zoom: 3,
                                                                duration: 800
                                                            });
                                                            return;
                                                        }
                                                    });

                                                    // Select Button from List Panel
                                                    var buttonId = selectedFeature.get('Id');

                                                    $("#" + lastClickedButtonId + "").removeAttr('style', 'background: #808080');
                                                    lastClickedButtonId = buttonId;

                                                    var buttons = $("[name='item']");
                                                    console.log(buttons);
                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);

                                                crumbCount++;
                                                $(".breadCrumb").append(
                                                    $('<li>', {
                                                        text: currentQuartzLink.TagNo,
                                                        value: crumbCount,
                                                        onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " ," + crumbCount + ")",
                                                        class: "crumb"
                                                    })
                                                );
                                            },
                                            error: function (error) {
                                                alert("error!");
                                                console.log(error.responseText);
                                            }
                                        });
                                    }
                                    else {
                                        alert("Drawing Is Not Exist!");
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
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

function goSelectedInspection(itemId) {
    $.ajax({
        type: "GET",
        url: itemController.Item.Detail,
        data: { itemId: itemId },
        success: function (response) {
            var inspectionsItem = jQuery.parseJSON(response);

            $.ajax({
                type: "GET",
                url: linkController.Link.Detail,
                data: { linkId: inspectionsItem.QuartzLinkId },
                success: function (response) {
                    currentQuartzLink = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: linkController.DrawingFeatures.GetVectorSource,
                        data: { quartzLinkId: currentQuartzLink.Id },
                        success: function (response) {
                            currentDrawingFeatures = jQuery.parseJSON(response);

                            $.ajax({
                                type: "GET",
                                url: fileController.Detail,
                                data: { fileId: currentQuartzLink.CurrentDrawingId },
                                success: function (response) {
                                    currentDrawing = jQuery.parseJSON(response);
                                    if (currentDrawing != null) {
                                        $.ajax({
                                            type: "GET",
                                            url: linkController.QuartzPartialView,
                                            success: function (html) {
                                                $("#main").children().remove();
                                                $("#main").html(html);

                                                loadQuartz();

                                                function wait() {
                                                    source.getFeatures().forEach(function (feature) {
                                                        if (feature.get("Id") == inspectionsItem.Id && feature.get("Type") == "item") {
                                                            select.getFeatures().clear();
                                                            select.getFeatures().push(feature);
                                                            selectedFeature = select.getFeatures().item(0);

                                                            view.animate({
                                                                center: new ol.proj.fromLonLat(feature.get("LonLat")),
                                                                zoom: 3,
                                                                duration: 800
                                                            });
                                                            return;
                                                        }
                                                    });

                                                    // Select Button from List Panel
                                                    var buttonId = selectedFeature.get('Id');

                                                    $("#" + lastClickedButtonId + "").removeAttr('style', 'background: #808080');
                                                    lastClickedButtonId = buttonId;

                                                    var buttons = $("[name='item']");
                                                    console.log(buttons);
                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);

                                                crumbCount++;
                                                $(".breadCrumb").append(
                                                    $('<li>', {
                                                        text: currentQuartzLink.TagNo,
                                                        value: crumbCount,
                                                        onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " ," + crumbCount + ")",
                                                        class: "crumb"
                                                    })
                                                );
                                            },
                                            error: function (error) {
                                                alert("error!");
                                                console.log(error.responseText);
                                            }
                                        });
                                    }
                                    else {
                                        alert("Drawing Is Not Exist!");
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
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

function goSelectedValveMaintenance(itemId) {
    $.ajax({
        type: "GET",
        url: itemController.Item.Detail,
        data: { itemId: itemId },
        success: function (response) {
            var valveMaintenancesItem = jQuery.parseJSON(response);
            $.ajax({
                type: "GET",
                url: linkController.Link.Detail,
                data: { linkId: valveMaintenancesItem.QuartzLinkId },
                success: function (response) {
                    currentQuartzLink = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: linkController.DrawingFeatures.GetVectorSource,
                        data: { quartzLinkId: currentQuartzLink.Id },
                        success: function (response) {
                            currentDrawingFeatures = jQuery.parseJSON(response);

                            $.ajax({
                                type: "GET",
                                url: fileController.Detail,
                                data: { fileId: currentQuartzLink.CurrentDrawingId },
                                success: function (response) {
                                    currentDrawing = jQuery.parseJSON(response);
                                    if (currentDrawing != null) {
                                        $.ajax({
                                            type: "GET",
                                            url: linkController.QuartzPartialView,
                                            success: function (html) {
                                                $("#main").children().remove();
                                                $("#main").html(html);

                                                loadQuartz();

                                                function wait() {
                                                    source.getFeatures().forEach(function (feature) {
                                                        if (feature.get("Id") == valveMaintenancesItem.Id && feature.get("Type") == "item") {
                                                            select.getFeatures().clear();
                                                            select.getFeatures().push(feature);
                                                            selectedFeature = select.getFeatures().item(0);

                                                            view.animate({
                                                                center: new ol.proj.fromLonLat(feature.get("LonLat")),
                                                                zoom: 3,
                                                                duration: 800
                                                            });
                                                            return;
                                                        }
                                                    });

                                                    // Select Button from List Panel
                                                    var buttonId = selectedFeature.get('Id');

                                                    $("#" + lastClickedButtonId + "").removeAttr('style', 'background: #808080');
                                                    lastClickedButtonId = buttonId;

                                                    var buttons = $("[name='item']");
                                                    console.log(buttons);
                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);

                                                crumbCount++;
                                                $(".breadCrumb").append(
                                                    $('<li>', {
                                                        text: currentQuartzLink.TagNo,
                                                        value: crumbCount,
                                                        onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " ," + crumbCount + ")",
                                                        class: "crumb"
                                                    })
                                                );
                                            },
                                            error: function (error) {
                                                alert("error!");
                                                console.log(error.responseText);
                                            }
                                        });
                                    }
                                    else {
                                        alert("Drawing Is Not Exist!");
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
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

function goSelectedThicknessMeasurement(itemId) {
    $.ajax({
        type: "GET",
        url: itemController.Item.Detail,
        data: { itemId: itemId },
        success: function (response) {
            var thicknessMeasurementsItem = jQuery.parseJSON(response);

            $.ajax({
                type: "GET",
                url: linkController.Link.Detail,
                data: { linkId: thicknessMeasurementsItem.QuartzLinkId },
                success: function (response) {
                    currentQuartzLink = jQuery.parseJSON(response);

                    $.ajax({
                        type: "GET",
                        url: linkController.DrawingFeatures.GetVectorSource,
                        data: { quartzLinkId: currentQuartzLink.Id },
                        success: function (response) {
                            currentDrawingFeatures = jQuery.parseJSON(response);

                            $.ajax({
                                type: "GET",
                                url: fileController.Detail,
                                data: { fileId: currentQuartzLink.CurrentDrawingId },
                                success: function (response) {
                                    currentDrawing = jQuery.parseJSON(response);
                                    if (currentDrawing != null) {
                                        $.ajax({
                                            type: "GET",
                                            url: linkController.QuartzPartialView,
                                            success: function (html) {
                                                $("#main").children().remove();
                                                $("#main").html(html);
                                                loadQuartz();

                                                function wait() {
                                                    source.getFeatures().forEach(function (feature) {
                                                        if (feature.get("Id") == thicknessMeasurementsItem.Id && feature.get("Type") == "item") {
                                                            select.getFeatures().clear();
                                                            select.getFeatures().push(feature);
                                                            selectedFeature = select.getFeatures().item(0);

                                                            view.animate({
                                                                center: new ol.proj.fromLonLat(feature.get("LonLat")),
                                                                zoom: 3,
                                                                duration: 800
                                                            });
                                                            return;
                                                        }
                                                    });

                                                    // Select Button from List Panel
                                                    var buttonId = selectedFeature.get('Id');

                                                    $("#" + lastClickedButtonId + "").removeAttr('style', 'background: #808080');
                                                    lastClickedButtonId = buttonId;

                                                    var buttons = $("[name='item']");
                                                    console.log(buttons);
                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);

                                                crumbCount++;
                                                $(".breadCrumb").append(
                                                    $('<li>', {
                                                        text: currentQuartzLink.TagNo,
                                                        value: crumbCount,
                                                        onclick: "goDrawing(" + currentQuartzLink.Id + " , " + currentQuartzLink.CurrentDrawingId + " ," + crumbCount + ")",
                                                        class: "crumb"
                                                    })
                                                );
                                            },
                                            error: function (error) {
                                                alert("error!");
                                                console.log(error.responseText);
                                            }
                                        });
                                    }
                                    else {
                                        alert("Drawing Is Not Exist!");
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
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

function callbackFunction(callback) {
    setTimeout(x2, 5000);
    setTimeout(callback, 2000);
}

function x1() {
    alert(1);
}

function x2() {
    alert(0);
}

setTimeout(() => callbackFunction(x1), 200);
