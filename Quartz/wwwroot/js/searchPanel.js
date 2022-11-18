function filterDrawing() {
    activeSearch = "drawing";

    $.ajax({
        type: "GET",
        url: "Search/GetSearchPanelsDrawingPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);
            $("#searchPanelsModalTitle").html("Search Drawing");

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

                    printDrawingModelsArray = [];

                    var printDrawingModel = {
                        MainLinkName: "",
                        TagNo: "",
                        CreatedDate: "",
                        CreatedBy: "",
                        Description: "",
                        PlantSystem: "",
                        PlantArea: "",
                        MainLinkPlantArea: ""
                    }

                    $("#searchPanelDrawingTable").children('tbody').children('tr').remove();

                    if (filteredDrawings != "") {
                        var drawingCount = filteredDrawings.length;
                        $("#totalSearchPanelDrawingCount").html("Total Drawing Count: " + drawingCount);

                        filteredDrawings.forEach(function (drawing) {

                            if (drawing.MainLinkId != 0) {
                                $.ajax({
                                    type: "GET",
                                    url: linkController.Link.Detail,
                                    data: { linkId: drawing.MainLinkId },
                                    success: function (response) {
                                        var mainLink = jQuery.parseJSON(response);

                                        $.ajax({
                                            type: "GET",
                                            url: linkController.DrawingSettings.Detail,
                                            data: { quartzLinkId: mainLink.Id },
                                            success: function (response) {
                                                var mainLinksDrawingSettings = jQuery.parseJSON(response);

                                                printDrawingModel.MainLinkName = mainLinksDrawingSettings.DrawingNo;
                                                printDrawingModel.MainLinkPlantArea = mainLinksDrawingSettings.PlantArea;
                                                printDrawingModel.CreatedBy = drawing.CreatedBy;
                                                printDrawingModel.CreatedDate = drawing.CreatedDate;
                                                printDrawingModel.Description = drawing.Description;
                                                printDrawingModel.PlantArea = drawing.PlantArea;
                                                printDrawingModel.PlantSystem = drawing.PlantSystem;
                                                printDrawingModel.TagNo = drawing.TagNo;

                                                printDrawingModelsArray.push(printDrawingModel);

                                                printDrawingModel = {
                                                    MainLinkName: "",
                                                    TagNo: "",
                                                    CreatedDate: "",
                                                    CreatedBy: "",
                                                    Description: "",
                                                    PlantSystem: "",
                                                    PlantArea: "",
                                                    MainLinkPlantArea: ""
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
                            else {
                                $.ajax({
                                    type: "GET",
                                    url: linkController.DrawingSettings.Detail,
                                    data: { quartzLinkId: drawing.LinkId },
                                    success: function (response) {
                                        var mainLinksDrawingSettings = jQuery.parseJSON(response);

                                        printDrawingModel.MainLinkName = "(this link is Main Link)";
                                        printDrawingModel.MainLinkPlantArea = mainLinksDrawingSettings.PlantArea;
                                        printDrawingModel.CreatedBy = drawing.CreatedBy;
                                        printDrawingModel.CreatedDate = drawing.CreatedDate;
                                        printDrawingModel.Description = drawing.Description;
                                        printDrawingModel.PlantArea = drawing.PlantArea;
                                        printDrawingModel.PlantSystem = drawing.PlantSystem;
                                        printDrawingModel.TagNo = drawing.TagNo;

                                        //printDrawingModelsArray.push(printDrawingModel);
                                        mainDrawingModel = printDrawingModel;

                                        printDrawingModel = {
                                            MainLinkName: "",
                                            TagNo: "",
                                            CreatedDate: "",
                                            CreatedBy: "",
                                            Description: "",
                                            PlantSystem: "",
                                            PlantArea: "",
                                            MainLinkPlantArea: ""
                                        }
                                    },
                                    error: function (error) {
                                        alert("error!");
                                        console.log(error.responseText);
                                    }
                                });
                            }

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
    activeSearch = "item";

    $.ajax({
        type: "GET",
        url: "Search/GetSearchPanelsTagPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);
            $("#searchPanelsModalTitle").html("Search Item");

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
                    console.log(filteredTags);
                    printItemModelsArray = [];

                    var printItemModel = {
                        MainLinkName: "",
                        MainLinkPlantArea: "",
                        TagNo: "",
                        SerialNo: "",
                        FittingType: "",
                        Specification: "",
                        InspectionHistory: ""
                    }

                    $("#searchPanelTagTable").children('tbody').children('tr').remove();

                    if (filteredTags != "") {
                        var tagCount = filteredTags.length;

                        $("#totalSearchPanelTagCount").html("Total Tag Count: " + tagCount);

                        filteredTags.forEach(function (tag) {
                            printItemModel.MainLinkName = tag.LinkTagNo;
                            printItemModel.MainLinkPlantArea = tag.PlantArea;
                            printItemModel.TagNo = tag.ItemTagNo;
                            printItemModel.SerialNo = tag.SerialNo;
                            printItemModel.FittingType = tag.FittingType;
                            printItemModel.Specification = tag.Specification;
                            if (tag.IsInspected)
                                printItemModel.InspectionHistory = "YES";
                            else
                                printItemModel.InspectionHistory = "NO";

                            printItemModelsArray.push(printItemModel);

                            $("#searchPanelTagTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', { align: "center" }).append(
                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedTag(" + tag.ItemId + ", " + tag.LinkId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
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
                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + printItemModel.InspectionHistory + "'>" + printItemModel.InspectionHistory + "</p>"
                                    ),
                                )
                            );

                            printItemModel = {
                                MainLinkName: "",
                                MainLinkPlantArea: "",
                                TagNo: "",
                                SerialNo: "",
                                FittingType: "",
                                Specification: "",
                                InspectionHistory: ""
                            }

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
    activeSearch = "inspection";

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
                    //var filteredInspectionsItemDetail;
                    var filteredInspectionsLinkDetail;
                    var filteredInspectionsInspectionDetail;
                    var filteredInspectionsDrawingSettingsDetail;

                    printInspectionModelsArray = [];

                    var printInspectionModel = {
                        PlantArea: "",
                        DrawingRef: "",
                        PlantIdent: "",
                        InspDate: "",
                        Procedure: "",
                        ReportNo: "",
                        Details: "",
                        Status: ""
                    }

                    $("#searchPanelInspectionTable").children('tbody').children('tr').remove();

                    if (filteredInspections != "") {
                        var inspectionCount = filteredInspections.length;
                        $("#totalSearchPanelInspectionCount").html("Number of Inspections shown: " + inspectionCount);

                        filteredInspections.forEach(function (inspection) {
                            filteredInspectionsInspectionDetail = inspection;
                            var date = inspection.Date.split('T')[0];

                            $.ajax({
                                type: "GET",
                                url: "QuartzItem/GetItemDetailJSON",
                                data: { itemId: inspection.QuartzItemId },
                                success: function (response) {
                                    var filteredInspectionsItemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: "QuartzLink/GetLinkDetailJSON",
                                        data: { linkId: filteredInspectionsItemDetail.QuartzLinkId },
                                        success: function (response) {
                                            filteredInspectionsLinkDetail = jQuery.parseJSON(response);

                                            $.ajax({
                                                type: "GET",
                                                url: linkController.DrawingSettings.Detail,
                                                data: { quartzLinkId: filteredInspectionsLinkDetail.Id },
                                                success: function (response) {
                                                    filteredInspectionsDrawingSettingsDetail = jQuery.parseJSON(response);

                                                    printInspectionModel.PlantArea = filteredInspectionsDrawingSettingsDetail.PlantArea;
                                                    printInspectionModel.DrawingRef = filteredInspectionsDrawingSettingsDetail.DrawingNo;
                                                    printInspectionModel.PlantIdent = filteredInspectionsItemDetail.TagNo;
                                                    printInspectionModel.InspDate = date.toString();
                                                    printInspectionModel.Procedure = inspection.Procedure;
                                                    printInspectionModel.ReportNo = inspection.ReportNo;
                                                    printInspectionModel.Details = inspection.Details;
                                                    printInspectionModel.Status = inspection.Status;

                                                    printInspectionModelsArray.push(printInspectionModel);

                                                    printInspectionModel = {
                                                        PlantArea: "",
                                                        DrawingRef: "",
                                                        PlantIdent: "",
                                                        InspDate: "",
                                                        Procedure: "",
                                                        ReportNo: "",
                                                        Details: "",
                                                        Status: ""
                                                    }

                                                },
                                                error: function (error) {
                                                    alert("error!");
                                                    console.log(error.responseText);
                                                }
                                            });

                                            $("#searchPanelInspectionTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedInspection(" + inspection.QuartzItemId + ", " + filteredInspectionsItemDetail.QuartzLinkId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.ReportNo + "'>" + inspection.ReportNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + filteredInspectionsLinkDetail.TagNo + "'>" + filteredInspectionsLinkDetail.TagNo + "</p>"
                                                    ),
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + filteredInspectionsItemDetail.TagNo + "'>" + filteredInspectionsItemDetail.TagNo + "</p>"
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
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' data-bs-toggle='tooltip' data-bs-placement='right' title='" + inspection.Details + "'>" + inspection.Details + "</p>"
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
                                $('<td>', { colspan: "8", class: "text-center" }).append("No data available to show!")
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
    activeSearch = "valveMaintenance";

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsValveMaintenancePartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);
            $("#searchPanelsModalTitle").html("Search Valve Maintenance");

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

                    printValveMaintenanceModelsArray = [];

                    var printValveMaintenanceModel = {
                        MainLinkName: "",
                        MainLinkPlantArea: "",
                        KKSNo: "",
                        SerialNo: "",
                        PlantArea: "",
                        SupplierManufacturare: "",
                        Designation: "",
                        IdealBarg: "",
                        OpeningPressureBarg: "",
                        TestDate: "",
                        Remarks: ""
                    }

                    $("#searchPanelValveMaintenanceTable").children('tbody').children('tr').remove();

                    if (filteredValveMaintenances != "") {
                        var valveMaintenanceCount = filteredValveMaintenances.length;
                        $("#totalSearchPanelValveMaintenanceCount").html("Total Valve Maintenance Count: " + valveMaintenanceCount);
                        filteredValveMaintenances.forEach(function (valveMaintenance) {

                            $.ajax({
                                type: "GET",
                                url: itemController.Item.Detail,
                                data: { itemId: valveMaintenance.QuartzItemId },
                                success: function (response) {
                                    var itemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: linkController.DrawingSettings.Detail,
                                        data: { quartzLinkId: itemDetail.QuartzLinkId },
                                        success: function (response) {
                                            var drawingSettingsDetail = jQuery.parseJSON(response);

                                            printValveMaintenanceModel.MainLinkName = drawingSettingsDetail.DrawingNo;
                                            printValveMaintenanceModel.MainLinkPlantArea = drawingSettingsDetail.PlantArea;
                                            printValveMaintenanceModel.KKSNo = valveMaintenance.KKSNo;
                                            printValveMaintenanceModel.SerialNo = valveMaintenance.SerialNo;
                                            printValveMaintenanceModel.PlantArea = valveMaintenance.PlantArea;
                                            printValveMaintenanceModel.SupplierManufacturare = valveMaintenance.SupplierManufacturare;
                                            printValveMaintenanceModel.Designation = valveMaintenance.Designation;
                                            printValveMaintenanceModel.IdealBarg = valveMaintenance.IdealBarg;
                                            printValveMaintenanceModel.OpeningPressureBarg = valveMaintenance.OpeningPressureBarg;
                                            printValveMaintenanceModel.TestDate = valveMaintenance.TestDate.split('T')[0];
                                            printValveMaintenanceModel.Remarks = valveMaintenance.Remarks;

                                            printValveMaintenanceModelsArray.push(printValveMaintenanceModel);

                                            printValveMaintenanceModel = {
                                                MainLinkName: "",
                                                MainLinkPlantArea: "",
                                                KKSNo: "",
                                                SerialNo: "",
                                                PlantArea: "",
                                                SupplierManufacturare: "",
                                                Designation: "",
                                                IdealBarg: "",
                                                OpeningPressureBarg: "",
                                                TestDate: "",
                                                Remarks: ""
                                            }

                                            var date = valveMaintenance.TestDate.split('T')[0];

                                            $("#searchPanelValveMaintenanceTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedValveMaintenance(" + valveMaintenance.QuartzItemId + ", " + itemDetail.QuartzLinkId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
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
                        $("#searchPanelValveMaintenanceTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "8", class: "text-center" }).append("No data available to show!")
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
    activeSearch = "thicknessMeasurement";

    $.ajax({
        type: "GET",
        url: "QuartzItem/GetSearchPanelsThicknessMeasurementPartialView",
        success: function (html) {
            $("#searchPanelsModalPartialArea").html(html);
            $("#searchPanelsModalTitle").html("Search Thickness Measurement");

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

                    printThicknessMeasurementModelsArray = [];

                    var printThicknessMeasurementModel = {
                        MainLinkName: "",
                        MainLinkPlantArea: "",
                        PlantArea: "",
                        PlantSystem: "",
                        Specification: "",
                        NominalThickness: "",
                        MeasuredThickness: "",
                        Description: "",
                        CreatedDate: ""
                    }

                    $("#searchPanelThicknessMeasurementTable").children('tbody').children('tr').remove();

                    if (filteredThicknessMeasurements != "") {
                        var thicknessMeasurementCount = filteredThicknessMeasurements.length;

                        $("#totalSearchPanelThicknessMeasurementCount").html("Total Thickness Measurement Count: " + thicknessMeasurementCount);

                        filteredThicknessMeasurements.forEach(function (thicknessMeasurement) {
                            $.ajax({
                                type: "GET",
                                url: itemController.Item.Detail,
                                data: { itemId: thicknessMeasurement.QuartzItemId },
                                success: function (response) {
                                    var itemDetail = jQuery.parseJSON(response);

                                    $.ajax({
                                        type: "GET",
                                        url: linkController.DrawingSettings.Detail,
                                        data: { quartzLinkId: itemDetail.QuartzLinkId },
                                        success: function (response) {
                                            var drawingSettingsDetail = jQuery.parseJSON(response);

                                            printThicknessMeasurementModel.MainLinkName = drawingSettingsDetail.DrawingNo;
                                            printThicknessMeasurementModel.MainLinkPlantArea = drawingSettingsDetail.PlantArea;
                                            printThicknessMeasurementModel.PlantArea = thicknessMeasurement.PlantArea;
                                            printThicknessMeasurementModel.PlantSystem = thicknessMeasurement.PlantSystem;
                                            printThicknessMeasurementModel.Specification = thicknessMeasurement.Specification;
                                            printThicknessMeasurementModel.NominalThickness = thicknessMeasurement.NominalThickness;
                                            printThicknessMeasurementModel.MeasuredThickness = thicknessMeasurement.MeasuredThickness;
                                            printThicknessMeasurementModel.CreatedDate = thicknessMeasurement.CreatedDate;
                                            printThicknessMeasurementModel.Description = thicknessMeasurement.Description;

                                            printThicknessMeasurementModelsArray.push(printThicknessMeasurementModel);

                                            printThicknessMeasurementModel = {
                                                MainLinkName: "",
                                                MainLinkPlantArea: "",
                                                PlantArea: "",
                                                PlantSystem: "",
                                                Specification: "",
                                                NominalThickness: "",
                                                MeasuredThickness: "",
                                                Description: "",
                                                CreatedDate: ""
                                            }

                                            $("#searchPanelThicknessMeasurementTable").children('tbody').append(
                                                $('<tr>').append(
                                                    $('<td>', { align: "center" }).append(
                                                        "<p class='tableColumn' style='color: blue; cursor: pointer;' onclick='goSelectedThicknessMeasurement(" + thicknessMeasurement.QuartzItemId + ", " + itemDetail.QuartzLinkId + ")' data-bs-dismiss='modal' data-bs-toggle='tooltip' data-bs-placement='right' title='Go link'><i class='fas fa-link'></i></p>"
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
    goDrawingFromSearch(linkId);

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

function goSelectedTag(itemId, linkId) {
    goDrawingFromSearch(linkId);

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

                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);
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

function goSelectedInspection(itemId, linkId) {
    goDrawingFromSearch(linkId);

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

                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);
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

function goSelectedValveMaintenance(itemId, linkId) {
    goDrawingFromSearch(linkId);

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

                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200);
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

function goSelectedThicknessMeasurement(itemId, linkId) {
    goDrawingFromSearch(linkId);

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

                                                    for (var i = 0; i < buttons.length; i++) {
                                                        if (buttons[i].getAttribute('Id') == buttonId) {
                                                            buttons[i].setAttribute('style', 'background: #808080');
                                                            return;
                                                        }
                                                    }
                                                }
                                                setTimeout(wait, 200); // [TAMAMLANMADI]
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
