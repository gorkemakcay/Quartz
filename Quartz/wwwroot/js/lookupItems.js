// #region Lookup Item Modal

//const { registerFont } = require("ol/render/canvas");

//const { Toast } = require("../lib/bootstrap/dist/js/bootstrap.esm");

// #region General
$("#limNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');
    switch (info) {
        case 'ComponentType':
            $("#limTitle").html("Lookup Items | Component Type");

            $.ajax({
                type: "GET",
                url: lookupItemController.ComponentType.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    componentTypePartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'FittingType':
            $("#limTitle").html("Lookup Items | Fitting Type");

            $.ajax({
                type: "GET",
                url: lookupItemController.FittingType.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    fittingTypePartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Method':
            $("#limTitle").html("Lookup Items | Method");

            $.ajax({
                type: "GET",
                url: lookupItemController.Method.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    methodPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Operator':
            $("#limTitle").html("Lookup Items | Operator");

            $.ajax({
                type: "GET",
                url: lookupItemController.Operator.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    operatorPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'PlantArea':
            $("#limTitle").html("Lookup Items | Plant Area");

            $.ajax({
                type: "GET",
                url: lookupItemController.PlantArea.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    plantAreaPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'PlantSystem':
            $("#limTitle").html("Lookup Items | Plant System");

            $.ajax({
                type: "GET",
                url: lookupItemController.PlantSystem.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    plantSystemPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Procedure':
            $("#limTitle").html("Lookup Items | Procedure");

            $.ajax({
                type: "GET",
                url: lookupItemController.Procedure.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    procedurePartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });

            $.ajax({
                type: "GET",
                url: lookupItemController.Method.List,
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#limProcedureAddModalLookUpItemsMethod").children().remove();

                    $("#limProcedureAddModalLookUpItemsMethod").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Method",
                            id: "selectMethod"
                        })
                    );
                    $("#selectMethod").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#limProcedureAddModalLookUpItemsMethod").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Specification':
            $("#limTitle").html("Lookup Items | Specification");

            $.ajax({
                type: "GET",
                url: lookupItemController.Specification.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    specificationPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Stand.Statement':
            $("#limTitle").html("Lookup Items | Standart Statement");

            $.ajax({
                type: "GET",
                url: lookupItemController.StandardStatement.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    standardStatementPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Status':
            $("#limTitle").html("Lookup Items | Status");

            $.ajax({
                type: "GET",
                url: lookupItemController.Status.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    statusPartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'Technique':
            $("#limTitle").html("Lookup Items | Technique");

            $.ajax({
                type: "GET",
                url: lookupItemController.Technique.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    techniquePartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });

            $.ajax({
                type: "GET",
                url: lookupItemController.Procedure.List,
                success: function (result) {
                    rModel = jQuery.parseJSON(result);

                    $("#limTechniqueAddModalLookUpItemsProcedure").children().remove();

                    $("#limTechniqueAddModalLookUpItemsProcedure").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Procedure",
                            id: "selectProcedure"
                        })
                    );
                    $("#selectProcedure").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#limTechniqueAddModalLookUpItemsProcedure").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'WeldType':
            $("#limTitle").html("Lookup Items | Weld Type");

            $.ajax({
                type: "GET",
                url: lookupItemController.WeldType.PartialView,
                success: function (html) {
                    $("#limPartialArea").html(html);

                    weldTypePartial();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        default:
            break;
    }
})

$(".showLookupItemModal").on('click', function () {
    $("#lookupItemsModal").modal('show');
});
// #endregion

// #region Add Functions

// #region Component Type
function addComponentType() {
    if ($("#limComponentTypeAddModalName").val() != null && $("#limComponentTypeAddModalName").val() != " ") {
        var componentTypeModel = {
            Name: $("#limComponentTypeAddModalName").val()
        }

        $("#limComponentTypeAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.ComponentType.Add,
            data: { model: componentTypeModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Component Type Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.ComponentType.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        componentTypePartial();
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
}
// #endregion

// #region Fitting Type
function addFittingType() {
    if ($("#limFittingTypeAddModalName").val() != null && $("#limFittingTypeAddModalName").val() != " ") {
        var fittingTypeModel = {
            Name: $("#limFittingTypeAddModalName").val()
        }

        $("#limFittingTypeAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.FittingType.Add,
            data: { model: fittingTypeModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Fitting Type Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.FittingType.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        fittingTypePartial();
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
}
// #endregion

// #region Method
function addMethod() {
    if (($("#limMethodAddModalName").val() != null && $("#limMethodAddModalName").val() != " ") &&
        ($("#limMethodAddModalCode").val() != null && $("#limMethodAddModalCode").val() != " ")) {
        var methodModel = {
            Name: $("#limMethodAddModalName").val(),
            Code: $("#limMethodAddModalCode").val()
        }

        $("#limMethodAddModalName").val("");
        $("#limMethodAddModalCode").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.Method.Add,
            data: { model: methodModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Method Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.Method.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        methodPartial();
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
}
// #endregion

// #region Operator
function addOperator() {
    if ($("#limOperatorAddModalName").val() != null && $("#limOperatorAddModalName").val() != " ") {
        var operatorModel = {
            Name: $("#limOperatorAddModalName").val()
        }

        $("#limOperatorAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.Operator.Add,
            data: { model: operatorModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Operator Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.Operator.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        operatorPartial();
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
}
// #endregion

// #region Plant Area
function addPlantArea() {
    if (($("#limPlantAreaAddModalName").val() != null && $("#limPlantAreaAddModalName").val() != " ") &&
        ($("#limPlantAreaAddModalCode").val() != null && $("#limPlantAreaAddModalCode").val() != " ")) {
        var plantAreaModel = {
            Name: $("#limPlantAreaAddModalName").val(),
            Code: $("#limPlantAreaAddModalCode").val()
        }

        $("#limPlantAreaAddModalName").val("");
        $("#limPlantAreaAddModalCode").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.PlantArea.Add,
            data: { model: plantAreaModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Plant Area Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.PlantArea.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        plantAreaPartial();
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
}
// #endregion

// #region Plant System
function addPlantSystem() {
    if ($("#limPlantSystemAddModalName").val() != null && $("#limPlantSystemAddModalName").val() != " ") {
        var plantSystemModel = {
            Name: $("#limPlantSystemAddModalName").val(),
            LookUpItemsPlantAreas: $("#limPlantSystemAddModalLookUpItemsPlantAreas").val().toString()
        }
        console.log(plantSystemModel);

        $("#limPlantSystemAddModalName").val("");
        $("#limPlantSystemAddModalLookUpItemsPlantAreas").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.PlantSystem.PartialView,
            data: { model: plantSystemModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Plant System Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.PlantSystem.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        plantSystemPartial();
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
}
// #endregion

// #region Procedure
function addProcedure() {
    if ($("#limProcedureAddModalName").val() != null && $("#limProcedureAddModalName").val() != " ") {
        var procedureModel = {
            Name: $("#limProcedureAddModalName").val(),
            LookUpItemsMethod: $("#limProcedureAddModalLookUpItemsMethod").val()
        }
        $("#limProcedureAddModalName").val("");
        $("#limProcedureAddModalLookUpItemsMethod").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.Procedure.Add,
            data: { model: procedureModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Procedure Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.Procedure.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        procedurePartial();
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
}
// #endregion

// #region Specification
function addSpecification() {
    if ($("#limSpecificationAddModalName").val() != null && $("#limSpecificationAddModalName").val() != " ") {
        var specificationModel = {
            Name: $("#limSpecificationAddModalName").val()
        }

        $("#limSpecificationAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.Specification.Add,
            data: { model: specificationModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Specification Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.Specification.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        specificationPartial();
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
}
// #endregion

// #region Standard Statement
function addStandardStatement() {
    if ($("#limStandardStatementAddModalName").val() != null && $("#limStandardStatementAddModalName").val() != " ") {
        var standardStatementModel = {
            Name: $("#limStandardStatementAddModalName").val()
        }

        $("#limStandardStatementAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.StandardStatement.Add,
            data: { model: standardStatementModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Standard Statement Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.StandardStatement.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        standardStatementPartial();
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
}
// #endregion

// #region Status
function addStatus() {
    if ($("#limStatusAddModalName").val() != null && $("#limStatusAddModalName").val() != " ") {
        var statusModel = {
            Name: $("#limStatusAddModalName").val()
        }

        $("#limStatusAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.Status.Add,
            data: { model: statusModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Status Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.Status.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        statusPartial();
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
}
// #endregion

// #region Technique
function addTechnique() {
    if ($("#limTechniqueAddModalName").val() != null && $("#limTechniqueAddModalName").val() != " ") {
        var techniqueModel = {
            Name: $("#limTechniqueAddModalName").val(),
            LookUpItemsProcedure: $("#limTechniqueAddModalLookUpItemsProcedure").val()
        }

        $("#limTechniqueAddModalName").val("");
        $("#limTechniqueAddModalLookUpItemsProcedure").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.Technique.Add,
            data: { model: techniqueModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Technique Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.Technique.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        techniquePartial();
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
}
// #endregion

// #region Weld Type
function addWeldType() {
    if ($("#limWeldTypeAddModalName").val() != null && $("#limWeldTypeAddModalName").val() != " ") {
        var weldTypeModel = {
            Name: $("#limWeldTypeAddModalName").val()
        }

        $("#limWeldTypeAddModalName").val("");

        $.ajax({
            type: "POST",
            url: lookupItemController.WeldType.Add,
            data: { model: weldTypeModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Weld Type Added Successful");
                $.ajax({
                    type: "GET",
                    url: lookupItemController.WeldType.PartialView,
                    success: function (html) {
                        $("#limPartialArea").html(html);

                        weldTypePartial();
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
}
// #endregion

// #endregion

// #endregion

function componentTypePartial() {
    // Get all Component Types from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.ComponentType.List,
        success: function (response) {
            allComponentTypes = jQuery.parseJSON(response);
            $("#componentTypeTable").children('tbody').children('tr').remove();

            if (allComponentTypes != "") {
                var componentTypeId;
                var firstColumnId;
                var secondColumnId;

                allComponentTypes.forEach(function (componentType) {
                    $("#componentTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + componentType.Id + "gg").addClass("col-6").append(
                                "<strong>" + componentType.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + componentType.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editComponentType" id="' + componentType.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteComponentType").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "componentType";
                //});

                $(".editComponentType").on('click', function () {
                    componentTypeId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "componentType";
                    cancelThisWhichLookupItem = "componentType";

                    allComponentTypes.forEach(function (componentType) {
                        if (componentType.Id == componentTypeId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + componentType.Name + '" id="' + componentType.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );
                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + componentType.Id + 'input1\', \'' + componentType.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + componentType.Name + '\',  \'' + componentType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#componentTypeTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function fittingTypePartial() {
    // Get all Fitting Types from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.FittingType.List,
        success: function (response) {
            allFittingTypes = jQuery.parseJSON(response);
            $("#fittingTypeTable").children('tbody').children('tr').remove();

            if (allFittingTypes != "") {
                var fittingTypeId;
                var firstColumnId;
                var secondColumnId;

                allFittingTypes.forEach(function (fittingType) {
                    $("#fittingTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + fittingType.Id + "gg").addClass("col-6").append(
                                "<strong>" + fittingType.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + fittingType.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editFittingType" id="' + fittingType.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteFittingType").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "fittingType";
                //});

                $(".editFittingType").on('click', function () {
                    fittingTypeId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "fittingType";
                    cancelThisWhichLookupItem = "fittingType";

                    allFittingTypes.forEach(function (fittingType) {
                        if (fittingType.Id == fittingTypeId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + fittingType.Name + '" id="' + fittingType.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );
                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + fittingType.Id + 'input1\', \'' + fittingType.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + fittingType.Name + '\',  \'' + fittingType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#fittingTypeTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function methodPartial() {
    // Get all Methods from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.Method.List,
        success: function (response) {
            allMethods = jQuery.parseJSON(response);
            $("#methodTable").children('tbody').children('tr').remove();

            if (allMethods != "") {
                var methodId;
                var firstColumnId;
                var secondColumnId;
                var thirdColumnId;

                allMethods.forEach(function (method) {
                    $("#methodTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + method.Id + "gg").addClass("col-4").append(
                                "<strong>" + method.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + method.Id + "ggg").addClass("col-4").append(
                                "<strong>" + method.Code + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + method.Id + "gggg").addClass("col-4").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editMethod" id="' + method.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            ).addClass("col-4")
                            /*'<button type="button" class="btn btn-dark p-0 deleteButton deleteMethod" id="' + method.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete"><i class="fa fa-trash-can"></i></button>'*/
                        )
                    );
                });

                //$(".deleteMethod").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "method";
                //});

                $(".editMethod").on('click', function () {
                    methodId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    thirdColumnId = $(this).attr("Id") + "ggg";
                    editThisWhichLookupItem = "method";
                    cancelThisWhichLookupItem = "method";
                    allMethods.forEach(function (method) {
                        if (method.Id == methodId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + method.Name + '" id="' + method.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );

                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<input class="text-center" type="text" value="' + method.Code + '" id="' + method.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );

                            $("#" + thirdColumnId + "").children().remove();
                            $("#" + thirdColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + method.Id + 'input1\', \'' + method.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + method.Name + '\',  \'' + method.Code + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#methodTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function operatorPartial() {
    // Get all Operators from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.Operator.List,
        success: function (response) {
            allOperators = jQuery.parseJSON(response);
            $("#operatorTable").children('tbody').children('tr').remove();

            if (allOperators != "") {
                var operatorId;
                var firstColumnId;
                var secondColumnId;

                allOperators.forEach(function (operator) {
                    $("#operatorTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + operator.Id + "gg").addClass("col-6").append(
                                "<strong>" + operator.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + operator.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editOperator" id="' + operator.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteOperator").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "operator";
                //});

                $(".editOperator").on('click', function () {
                    operatorId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "operator";
                    cancelThisWhichLookupItem = "operator";

                    allOperators.forEach(function (operator) {
                        if (operator.Id == operatorId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + operator.Name + '" id="' + operator.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );
                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + operator.Id + 'input1\', \'' + operator.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + operator.Name + '\',  \'' + operator.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#operatorTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function plantAreaPartial() {
    // Get all Methods from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantArea.List,
        success: function (response) {
            allPlantAreas = jQuery.parseJSON(response);
            $("#plantAreaTable").children('tbody').children('tr').remove();

            if (allPlantAreas != "") {
                var plantAreaId;
                var firstColumnId;
                var secondColumnId;
                var thirdColumnId;

                allPlantAreas.forEach(function (plantArea) {
                    $("#plantAreaTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + plantArea.Id + "gg").addClass("col-4").append(
                                "<strong>" + plantArea.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + plantArea.Id + "ggg").addClass("col-4").append(
                                "<strong>" + plantArea.Code + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + plantArea.Id + "gggg").addClass("col-4").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editPlantArea" id="' + plantArea.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
                                /*'<button type="button" class="btn btn-dark p-0 deleteButton deletePlantArea" id="' + plantArea.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete"><i class="fa fa-trash-can"></i></button>'*/
                            ).addClass("col-4")
                        )
                    );
                });
                $(".deletePlantArea").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "plantArea";
                });

                $(".editPlantArea").on('click', function () {
                    plantAreaId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    thirdColumnId = $(this).attr("Id") + "ggg";
                    editThisWhichLookupItem = "plantArea";
                    cancelThisWhichLookupItem = "plantArea";
                    allPlantAreas.forEach(function (plantArea) {
                        if (plantArea.Id == plantAreaId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + plantArea.Name + '" id="' + plantArea.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );

                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<input class="text-center" type="text" value="' + plantArea.Code + '" id="' + plantArea.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );

                            $("#" + thirdColumnId + "").children().remove();
                            $("#" + thirdColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + plantArea.Id + 'input1\', \'' + plantArea.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + plantArea.Name + '\',  \'' + plantArea.Code + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#plantAreaTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function plantSystemPartial() {
    // Get all Plant Systems from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.PlantSystem.List,
        success: function (response) {
            allPlantSystems = jQuery.parseJSON(response);
            $("#plantSystemTable").children('tbody').children('tr').remove();

            if (allPlantSystems != "") {
                var plantSystemId;
                var firstColumnId;
                var secondColumnId;
                var thirdColumnId;

                allPlantSystems.forEach(function (plantSystem) {
                    $("#plantSystemTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + plantSystem.Id + "gg").addClass("col-4").append(
                                "<strong>" + plantSystem.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + plantSystem.Id + "ggg").addClass("col-4").append(
                                "<strong>" + plantSystem.LookUpItemsPlantAreas + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + plantSystem.Id + "gggg").addClass("col-4").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editPlantSystem" id="' + plantSystem.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            ).addClass("col-4")
                            /*'<button type="button" class="btn btn-dark p-0 deleteButton deletePlantSystem" id="' + plantSystem.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete"><i class="fa fa-trash-can"></i></button>'*/
                        )
                    );
                });

                //$(".deletePlantSystem").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "plantSystem";
                //});

                $(".editPlantSystem").on('click', function () {
                    plantSystemId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    thirdColumnId = $(this).attr("Id") + "ggg";
                    editThisWhichLookupItem = "plantSystem";
                    cancelThisWhichLookupItem = "plantSystem";

                    $.ajax({
                        type: "GET",
                        url: lookupItemController.PlantArea.List,
                        success: function (response) {
                            var rPlantAreas = jQuery.parseJSON(response);

                            allPlantSystems.forEach(function (plantSystem) {
                                if (plantSystem.Id == plantSystemId) {
                                    $("#" + firstColumnId + "").children().remove();
                                    $("#" + firstColumnId + "").append(
                                        '<input class="text-center" type="text" value="' + plantSystem.Name + '" id="' + plantSystem.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                                    );

                                    $("#" + secondColumnId + "").children().remove();
                                    $("#" + secondColumnId + "").append(
                                        '<select class="form-select" id="' + plantSystem.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4; width: 75%;" multiple="" data-placeholder="Select Plant Area(s)"></select>'
                                    );
                                    $("#" + plantSystem.Id + "input2").append(
                                        $('<option>', {
                                            value: plantSystem.LookUpItemsPlantAreas,
                                            text: plantSystem.LookUpItemsPlantAreas,
                                            id: plantSystem.Name + "SelectedPlantArea",
                                            selected: "selected"
                                        })
                                    );
                                    $("#" + plantSystem.Name + "SelectedPlantArea").attr("hidden", "");
                                    rPlantAreas.forEach(function (plantArea) {
                                        if (plantArea.Name != plantSystem.LookUpItemsPlantAreas) {
                                            $("#" + plantSystem.Id + "input2").append(
                                                $('<option>', {
                                                    value: plantArea.Name,
                                                    text: plantArea.Name
                                                })
                                            );
                                        }
                                    });

                                    $("#" + thirdColumnId + "").children().remove();
                                    $("#" + thirdColumnId + "").append(
                                        '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + plantSystem.Id + 'input1\', \'' + plantSystem.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                        '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + plantSystem.Name + '\',  \'' + plantSystem.LookUpItemsPlantAreas + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                                    );
                                }

                                $("#" + plantSystem.Id + "input2").select2({
                                    //closeOnSelect: false
                                });
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
                $("#plantSystemTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function procedurePartial() {
    // Get all Procedures from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.Procedure.List,
        success: function (response) {
            allProcedures = jQuery.parseJSON(response);
            $("#procedureTable").children('tbody').children('tr').remove();

            if (allProcedures != "") {
                var procedureId;
                var firstColumnId;
                var secondColumnId;
                var thirdColumnId;

                allProcedures.forEach(function (procedure) {
                    $("#procedureTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + procedure.Id + "gg").addClass("col-4").append(
                                "<strong>" + procedure.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + procedure.Id + "ggg").addClass("col-4").append(
                                "<strong>" + procedure.LookUpItemsMethod + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + procedure.Id + "gggg").addClass("col-4").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editProcedure" id="' + procedure.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteProcedure").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "procedure";
                //});

                $(".editProcedure").on('click', function () {
                    procedureId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    thirdColumnId = $(this).attr("Id") + "ggg";
                    editThisWhichLookupItem = "procedure";
                    cancelThisWhichLookupItem = "procedure";

                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Method.List,
                        success: function (response) {
                            var rMethods = jQuery.parseJSON(response);

                            allProcedures.forEach(function (procedure) {
                                if (procedure.Id == procedureId) {
                                    $("#" + firstColumnId + "").children().remove();
                                    $("#" + firstColumnId + "").append(
                                        '<input class="text-center" type="text" value="' + procedure.Name + '" id="' + procedure.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                                    );

                                    $("#" + secondColumnId + "").children().remove();
                                    $("#" + secondColumnId + "").append(
                                        '<select class="form-select p-0" id="' + procedure.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4; text-align-last:center;"></select>'
                                    );
                                    $("#" + procedure.Id + "input2").append(
                                        $('<option>', {
                                            value: procedure.LookUpItemsMethod,
                                            text: procedure.LookUpItemsMethod,
                                            id: procedure.Name + "SelectedMethod",
                                            selected: "selected"
                                        })
                                    );
                                    $("#" + procedure.Name + "SelectedMethod").attr("hidden", "");
                                    rMethods.forEach(function (method) {
                                        if (method.Name != procedure.LookUpItemsMethod) {
                                            $("#" + procedure.Id + "input2").append(
                                                $('<option>', {
                                                    value: method.Name,
                                                    text: method.Name
                                                })
                                            );
                                        }
                                    });

                                    $("#" + thirdColumnId + "").children().remove();
                                    $("#" + thirdColumnId + "").append(
                                        '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + procedure.Id + 'input1\', \'' + procedure.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                        '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + procedure.Name + '\',  \'' + procedure.LookUpItemsMethod + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                                    );
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
                $("#procedureTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function specificationPartial() {
    // Get all Specifications from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.Specification.List,
        success: function (response) {
            allSpecifications = jQuery.parseJSON(response);
            $("#specificationTable").children('tbody').children('tr').remove();

            if (allSpecifications != "") {
                var specificationId;
                var firstColumnId;
                var secondColumnId;

                allSpecifications.forEach(function (specification) {
                    $("#specificationTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + specification.Id + "gg").addClass("col-6").append(
                                "<strong>" + specification.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + specification.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editSpecification" id="' + specification.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteSpecification").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "specification";
                //});

                $(".editSpecification").on('click', function () {
                    specificationId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "specification";
                    cancelThisWhichLookupItem = "specification";

                    allSpecifications.forEach(function (specification) {
                        if (specification.Id == specificationId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + specification.Name + '" id="' + specification.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );
                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + specification.Id + 'input1\', \'' + specification.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + specification.Name + '\',  \'' + specification.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#specificationTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function standardStatementPartial() {
    // Get all Standard Statements from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.StandardStatement.List,
        success: function (response) {
            allStandardStatements = jQuery.parseJSON(response);
            $("#standardStatementTable").children('tbody').children('tr').remove();

            if (allStandardStatements != "") {
                var standardStatementId;
                var firstColumnId;
                var secondColumnId;

                allStandardStatements.forEach(function (standardStatement) {
                    $("#standardStatementTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + standardStatement.Id + "gg").addClass("col-6").append(
                                "<strong>" + standardStatement.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + standardStatement.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editStandardStatement" id="' + standardStatement.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteStandardStatement").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "standardStatement";
                //});

                $(".editStandardStatement").on('click', function () {
                    standardStatementId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "standardStatement";
                    cancelThisWhichLookupItem = "standardStatement";

                    allStandardStatements.forEach(function (standardStatement) {
                        if (standardStatement.Id == standardStatementId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + standardStatement.Name + '" id="' + standardStatement.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );
                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + standardStatement.Id + 'input1\', \'' + standardStatement.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + standardStatement.Name + '\',  \'' + standardStatement.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#standardStatementTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function statusPartial() {
    // Get all Methods from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.Status.List,
        success: function (response) {
            allStatuses = jQuery.parseJSON(response);
            $("#statusTable").children('tbody').children('tr').remove();

            if (allStatuses != "") {
                var statusId;
                var firstColumnId;
                var secondColumnId;

                allStatuses.forEach(function (status) {
                    $("#statusTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + status.Id + "gg").addClass("col-6").append(
                                "<strong>" + status.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + status.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editStatus" id="' + status.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                                /*'<button type="button" class="btn btn-dark p-0 deleteStatus" id="' + status.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });

                //$(".deleteStatus").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "status";
                //});

                $(".editStatus").on('click', function () {
                    statusId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "status";
                    cancelThisWhichLookupItem = "status";

                    allStatuses.forEach(function (status) {
                        if (status.Id == statusId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + status.Name + '" id="' + status.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );

                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + status.Id + 'input1\', \'' + status.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + status.Name + '\',  \'' + status.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#statusTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function techniquePartial() {
    // Get all Techniques from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.Technique.List,
        success: function (response) {
            allTechniques = jQuery.parseJSON(response);
            $("#techniqueTable").children('tbody').children('tr').remove();

            if (allTechniques != "") {
                var techniqueId;
                var firstColumnId;
                var secondColumnId;
                var thirdColumnId;

                allTechniques.forEach(function (technique) {
                    $("#techniqueTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + technique.Id + "gg").addClass("col-4").append(
                                "<strong>" + technique.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + technique.Id + "ggg").addClass("col-4").append(
                                "<strong>" + technique.LookUpItemsProcedure + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + technique.Id + "gggg").addClass("col-4").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editTechnique" id="' + technique.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                                /*'<button type="button" class="btn btn-dark p-0 deleteTechnique" id="' + technique.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });
                //$(".deleteTechnique").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "technique";
                //});

                $(".editTechnique").on('click', function () {
                    techniqueId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    thirdColumnId = $(this).attr("Id") + "ggg";
                    editThisWhichLookupItem = "technique";
                    cancelThisWhichLookupItem = "technique";

                    $.ajax({
                        type: "GET",
                        url: lookupItemController.Procedure.List,
                        success: function (response) {
                            var rProcedures = jQuery.parseJSON(response);

                            allTechniques.forEach(function (technique) {
                                if (technique.Id == techniqueId) {
                                    $("#" + firstColumnId + "").children().remove();
                                    $("#" + firstColumnId + "").append(
                                        '<input class="text-center" type="text" value="' + technique.Name + '" id="' + technique.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                                    );

                                    $("#" + secondColumnId + "").children().remove();
                                    $("#" + secondColumnId + "").append(
                                        '<select class="form-select p-0" id="' + technique.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4; text-align-last:center;"></select>'
                                    );
                                    $("#" + technique.Id + "input2").append(
                                        $('<option>', {
                                            value: technique.LookUpItemsProcedure,
                                            text: technique.LookUpItemsProcedure,
                                            id: technique.Name + "SelectedProcedure",
                                            selected: "selected"
                                        })
                                    );
                                    $("#" + technique.Name + "SelectedProcedure").attr("hidden", "");
                                    rProcedures.forEach(function (procedure) {
                                        if (procedure.Name != technique.LookUpItemsProcedure) {
                                            $("#" + technique.Id + "input2").append(
                                                $('<option>', {
                                                    value: procedure.Name,
                                                    text: procedure.Name
                                                })
                                            );
                                        }
                                    });

                                    $("#" + thirdColumnId + "").children().remove();
                                    $("#" + thirdColumnId + "").append(
                                        '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + technique.Id + 'input1\', \'' + technique.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                        '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + technique.Name + '\',  \'' + technique.LookUpItemsProcedure + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                                    );
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
                $("#techniqueTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function weldTypePartial() {
    // Get all Weld Types from DB with AJAX
    $.ajax({
        type: "GET",
        url: lookupItemController.WeldType.List,
        success: function (response) {
            allWeldTypes = jQuery.parseJSON(response);
            $("#weldTypeTable").children('tbody').children('tr').remove();

            if (allWeldTypes != "") {
                var weldTypeId;
                var firstColumnId;
                var secondColumnId;

                allWeldTypes.forEach(function (weldType) {
                    $("#weldTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + weldType.Id + "gg").addClass("col-6").append(
                                "<strong>" + weldType.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).attr("Id", "" + weldType.Id + "ggg").addClass("col-6").append(
                                '<button type="button" class="btn btn-dark p-0 editButton editWeldType" id="' + weldType.Id + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-pencil fa-sm" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"></i></button>'
                            )
                        )
                    );
                });

                //$(".deleteWeldType").on('click', function () {
                //    $("#areYouSureModal").modal('show');
                //    $("#lookupItemsModal").modal('hide');

                //    objectTypeToBeDeleted = "lookupItem";
                //    objectIdToBeDeleted = $(this).attr("Id");
                //    deleteThisWhichLookupItem = "weldType";
                //});

                $(".editWeldType").on('click', function () {
                    weldTypeId = $(this).attr("Id").slice(0, -1);
                    firstColumnId = $(this).attr("Id") + "g";
                    secondColumnId = $(this).attr("Id") + "gg";
                    editThisWhichLookupItem = "weldType";
                    cancelThisWhichLookupItem = "weldType";

                    allWeldTypes.forEach(function (weldType) {
                        if (weldType.Id == weldTypeId) {
                            $("#" + firstColumnId + "").children().remove();
                            $("#" + firstColumnId + "").append(
                                '<input class="text-center" type="text" value="' + weldType.Name + '" id="' + weldType.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                            );
                            $("#" + secondColumnId + "").children().remove();
                            $("#" + secondColumnId + "").append(
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + weldType.Id + 'input1\', \'' + weldType.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + weldType.Name + '\',  \'' + weldType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                            );
                        }
                    });
                });
            }
            else {
                $("#weldTypeTable").children('tbody').append(
                    $('<tr>').append(
                        $('<td>', { colspan: "3", class: "text-center" }).append("No data available to show!")
                    )
                );
            }
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function cancelEditLookupItemButton(firstColumnId, secondColumnId, thirdColumnId, firstColumnValue, secondColumnValue) {

    switch (cancelThisWhichLookupItem) {

        case "componentType":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editComponentType" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editComponentType").on('click', function () {
                componentTypeId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "componentType";
                cancelThisWhichLookupItem = "componentType";

                allComponentTypes.forEach(function (componentType) {
                    if (componentType.Id == componentTypeId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + componentType.Name + '" id="' + componentType.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );
                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + componentType.Id + 'input1\', \'' + componentType.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + componentType.Name + '\',  \'' + componentType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "fittingType":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editFittingType" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editFittingType").on('click', function () {
                fittingTypeId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "fittingType";
                cancelThisWhichLookupItem = "fittingType";

                allFittingTypes.forEach(function (fittingType) {
                    if (fittingType.Id == fittingTypeId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + fittingType.Name + '" id="' + fittingType.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );
                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + fittingType.Id + 'input1\', \'' + fittingType.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + fittingType.Name + '\',  \'' + fittingType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "method":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                "<strong>" + secondColumnValue + "</strong>"
            );

            $("#" + thirdColumnId + "").children().remove();
            $("#" + thirdColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editMethod" id="' + thirdColumnId.slice(0, -4) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );
            /*'<button type="button" class="btn btn-dark p-0 deleteButton deleteMethod" id="' + thirdColumnId.slice(0, -4) + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete"><i class="fa fa-trash-can"></i></button>'*/

            //$(".deleteMethod").on('click', function () {
            //    $("#areYouSureModal").modal('show');
            //    $("#lookupItemsModal").modal('hide');

            //    objectTypeToBeDeleted = "lookupItem";
            //    objectIdToBeDeleted = $(this).attr("Id");
            //    deleteThisWhichLookupItem = "method";
            //});

            $(".editMethod").on('click', function () {
                methodId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                thirdColumnId = $(this).attr("Id") + "ggg";
                editThisWhichLookupItem = "method";
                cancelThisWhichLookupItem = "method";
                allMethods.forEach(function (method) {
                    if (method.Id == methodId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + method.Name + '" id="' + method.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );

                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<input class="text-center" type="text" value="' + method.Code + '" id="' + method.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );

                        $("#" + thirdColumnId + "").children().remove();
                        $("#" + thirdColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + method.Id + 'input1\', \'' + method.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + method.Name + '\',  \'' + method.Code + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "operator":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editOperator" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editOperator").on('click', function () {
                operatorId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "operator";
                cancelThisWhichLookupItem = "operator";

                allOperators.forEach(function (operator) {
                    if (operator.Id == operatorId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + operator.Name + '" id="' + operator.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );
                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + operator.Id + 'input1\', \'' + operator.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + operator.Name + '\',  \'' + operator.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "plantArea":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                "<strong>" + secondColumnValue + "</strong>"
            );

            $("#" + thirdColumnId + "").children().remove();
            $("#" + thirdColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editPlantArea" id="' + thirdColumnId.slice(0, -4) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
                /*'<button type="button" class="btn btn-dark p-0 deleteButton deletePlantArea" id="' + thirdColumnId.slice(0, -4) + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Delete"><i class="fa fa-trash-can"></i></button>'*/
            );

            //$(".deletePlantArea").on('click', function () {
            //    $("#areYouSureModal").modal('show');
            //    $("#lookupItemsModal").modal('hide');

            //    objectTypeToBeDeleted = "lookupItem";
            //    objectIdToBeDeleted = $(this).attr("Id");
            //    deleteThisWhichLookupItem = "plantArea";
            //});

            $(".editPlantArea").on('click', function () {
                plantAreaId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                thirdColumnId = $(this).attr("Id") + "ggg";
                editThisWhichLookupItem = "plantArea";
                cancelThisWhichLookupItem = "plantArea";
                allPlantAreas.forEach(function (plantArea) {
                    if (plantArea.Id == plantAreaId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + plantArea.Name + '" id="' + plantArea.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );

                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<input class="text-center" type="text" value="' + plantArea.Code + '" id="' + plantArea.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );

                        $("#" + thirdColumnId + "").children().remove();
                        $("#" + thirdColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + plantArea.Id + 'input1\', \'' + plantArea.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + plantArea.Name + '\',  \'' + plantArea.Code + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "plantSystem":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                "<strong>" + secondColumnValue + "</strong>"
            );

            $("#" + thirdColumnId + "").children().remove();
            $("#" + thirdColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editPlantSystem" id="' + thirdColumnId.slice(0, -4) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editPlantSystem").on('click', function () {
                plantSystemId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                thirdColumnId = $(this).attr("Id") + "ggg";
                editThisWhichLookupItem = "plantSystem";
                cancelThisWhichLookupItem = "plantSystem";

                $.ajax({
                    type: "GET",
                    url: lookupItemController.PlantArea.List,
                    success: function (response) {
                        var rPlantAreas = jQuery.parseJSON(response);

                        allPlantSystems.forEach(function (plantSystem) {
                            if (plantSystem.Id == plantSystemId) {
                                $("#" + firstColumnId + "").children().remove();
                                $("#" + firstColumnId + "").append(
                                    '<input class="text-center" type="text" value="' + plantSystem.Name + '" id="' + plantSystem.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                                );

                                $("#" + secondColumnId + "").children().remove();
                                $("#" + secondColumnId + "").append(
                                    '<select class="form-select" id="' + plantSystem.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4; width: 75%;" multiple="" data-placeholder="Select Plant Area(s)"></select>'
                                );
                                $("#" + plantSystem.Id + "input2").append(
                                    $('<option>', {
                                        value: plantSystem.LookUpItemsPlantAreas,
                                        text: plantSystem.LookUpItemsPlantAreas,
                                        id: plantSystem.Name + "SelectedPlantArea",
                                        selected: "selected"
                                    })
                                );
                                $("#" + plantSystem.Name + "SelectedPlantArea").attr("hidden", "");
                                rPlantAreas.forEach(function (plantArea) {
                                    if (plantArea.Name != plantSystem.LookUpItemsPlantAreas) {
                                        $("#" + plantSystem.Id + "input2").append(
                                            $('<option>', {
                                                value: plantArea.Name,
                                                text: plantArea.Name
                                            })
                                        );
                                    }
                                });

                                $("#" + thirdColumnId + "").children().remove();
                                $("#" + thirdColumnId + "").append(
                                    '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + plantSystem.Id + 'input1\', \'' + plantSystem.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                    '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + plantSystem.Name + '\',  \'' + plantSystem.LookUpItemsPlantAreas + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                                );
                            }

                            $("#" + plantSystem.Id + "input2").select2({
                                //closeOnSelect: false
                            });
                        });
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            });
            break;

        case "procedure":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                "<strong>" + secondColumnValue + "</strong>"
            );

            $("#" + thirdColumnId + "").children().remove();
            $("#" + thirdColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editProcedure" id="' + thirdColumnId.slice(0, -4) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editProcedure").on('click', function () {
                procedureId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                thirdColumnId = $(this).attr("Id") + "ggg";
                editThisWhichLookupItem = "procedure";
                cancelThisWhichLookupItem = "procedure";

                $.ajax({
                    type: "GET",
                    url: lookupItemController.Method.List,
                    success: function (response) {
                        var rMethods = jQuery.parseJSON(response);

                        allProcedures.forEach(function (procedure) {
                            if (procedure.Id == procedureId) {
                                $("#" + firstColumnId + "").children().remove();
                                $("#" + firstColumnId + "").append(
                                    '<input class="text-center" type="text" value="' + procedure.Name + '" id="' + procedure.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                                );

                                $("#" + secondColumnId + "").children().remove();
                                $("#" + secondColumnId + "").append(
                                    '<select class="form-select p-0" id="' + procedure.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4; text-align-last:center;"></select>'
                                );
                                $("#" + procedure.Id + "input2").append(
                                    $('<option>', {
                                        value: procedure.LookUpItemsMethod,
                                        text: procedure.LookUpItemsMethod,
                                        id: procedure.Name + "SelectedMethod",
                                        selected: "selected"
                                    })
                                );
                                $("#" + procedure.Name + "SelectedMethod").attr("hidden", "");
                                rMethods.forEach(function (method) {
                                    if (method.Name != procedure.LookUpItemsMethod) {
                                        $("#" + procedure.Id + "input2").append(
                                            $('<option>', {
                                                value: method.Name,
                                                text: method.Name
                                            })
                                        );
                                    }
                                });

                                $("#" + thirdColumnId + "").children().remove();
                                $("#" + thirdColumnId + "").append(
                                    '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + procedure.Id + 'input1\', \'' + procedure.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                    '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + procedure.Name + '\',  \'' + procedure.LookUpItemsMethod + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                                );
                            }
                        });
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            });
            break;

        case "specification":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editSpecification" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editSpecification").on('click', function () {
                specificationId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "specification";
                cancelThisWhichLookupItem = "specification";

                allSpecifications.forEach(function (specification) {
                    if (specification.Id == specificationId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + specification.Name + '" id="' + specification.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );
                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + specification.Id + 'input1\', \'' + specification.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + specification.Name + '\',  \'' + specification.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "standardStatement":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editStandardStatement" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editStandardStatement").on('click', function () {
                standardStatementId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "standardStatement";
                cancelThisWhichLookupItem = "standardStatement";

                allStandardStatements.forEach(function (standardStatement) {
                    if (standardStatement.Id == standardStatementId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + standardStatement.Name + '" id="' + standardStatement.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );
                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + standardStatement.Id + 'input1\', \'' + standardStatement.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + standardStatement.Name + '\',  \'' + standardStatement.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "status":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editStatus" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editStatus").on('click', function () {
                statusId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "status";
                cancelThisWhichLookupItem = "status";

                allStatuses.forEach(function (status) {
                    if (status.Id == statusId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + status.Name + '" id="' + status.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );

                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + status.Id + 'input1\', \'' + status.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + status.Name + '\',  \'' + status.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        case "technique":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                "<strong>" + secondColumnValue + "</strong>"
            );

            $("#" + thirdColumnId + "").children().remove();
            $("#" + thirdColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editTechnique" id="' + thirdColumnId.slice(0, -4) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editTechnique").on('click', function () {
                techniqueId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                thirdColumnId = $(this).attr("Id") + "ggg";
                editThisWhichLookupItem = "technique";
                cancelThisWhichLookupItem = "technique";

                $.ajax({
                    type: "GET",
                    url: lookupItemController.Procedure.List,
                    success: function (response) {
                        var rProcedures = jQuery.parseJSON(response);

                        allTechniques.forEach(function (technique) {
                            if (technique.Id == techniqueId) {
                                $("#" + firstColumnId + "").children().remove();
                                $("#" + firstColumnId + "").append(
                                    '<input class="text-center" type="text" value="' + technique.Name + '" id="' + technique.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                                );

                                $("#" + secondColumnId + "").children().remove();
                                $("#" + secondColumnId + "").append(
                                    '<select class="form-select p-0" id="' + technique.Id + 'input2" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4; text-align-last:center;"></select>'
                                );
                                $("#" + technique.Id + "input2").append(
                                    $('<option>', {
                                        value: technique.LookUpItemsProcedure,
                                        text: technique.LookUpItemsProcedure,
                                        id: technique.Name + "SelectedProcedure",
                                        selected: "selected"
                                    })
                                );
                                $("#" + technique.Name + "SelectedProcedure").attr("hidden", "");
                                rProcedures.forEach(function (procedure) {
                                    if (procedure.Name != technique.LookUpItemsProcedure) {
                                        $("#" + technique.Id + "input2").append(
                                            $('<option>', {
                                                value: procedure.Name,
                                                text: procedure.Name
                                            })
                                        );
                                    }
                                });

                                $("#" + thirdColumnId + "").children().remove();
                                $("#" + thirdColumnId + "").append(
                                    '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + technique.Id + 'input1\', \'' + technique.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                                    '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + thirdColumnId + '\',  \'' + technique.Name + '\',  \'' + technique.LookUpItemsProcedure + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                                );
                            }
                        });
                    },
                    error: function (error) {
                        alert("error!");
                        console.log(error.responseText);
                    }
                });
            });
            break;

        case "weldType":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            $("#" + secondColumnId + "").children().remove();
            $("#" + secondColumnId + "").append(
                '<button type="button" class="btn btn-dark p-0 editButton editWeldType" id="' + secondColumnId.slice(0, -3) + 'g" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" data-bs-toggle="tooltip" data-bs-placement="left" title="Edit"><i class="fa fa-pencil fa-sm"></i></button>'
            );

            $(".editWeldType").on('click', function () {
                weldTypeId = $(this).attr("Id").slice(0, -1);
                firstColumnId = $(this).attr("Id") + "g";
                secondColumnId = $(this).attr("Id") + "gg";
                editThisWhichLookupItem = "weldType";
                cancelThisWhichLookupItem = "weldType";

                allWeldTypes.forEach(function (weldType) {
                    if (weldType.Id == weldTypeId) {
                        $("#" + firstColumnId + "").children().remove();
                        $("#" + firstColumnId + "").append(
                            '<input class="text-center" type="text" value="' + weldType.Name + '" id="' + weldType.Id + 'input1" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />'
                        );
                        $("#" + secondColumnId + "").children().remove();
                        $("#" + secondColumnId + "").append(
                            '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + weldType.Id + 'input1\', \'' + weldType.Id + 'input2\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;" ><i class="fa fa-check"></i></button>',
                            '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + firstColumnId + '\', \'' + secondColumnId + '\', \'' + secondColumnId + '\',  \'' + weldType.Name + '\',  \'' + weldType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
                        );
                    }
                });
            });
            break;

        default:
    }

}

function saveEditLookupItemButton(input1Id, input2Id) {
    switch (editThisWhichLookupItem) {
        case "componentType":
            var componentTypeId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.ComponentType.Detail,
                data: { componentTypeId: componentTypeId },
                success: function (response) {
                    var rComponentType = jQuery.parseJSON(response);
                    rComponentType.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.ComponentType.Update,
                        data: { model: rComponentType },
                        success: function (response) {
                            componentTypePartial();
                            toast("Component Type Update Successful");
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
            break;

        case "fittingType":
            var fittingTypeId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.FittingType.Detail,
                data: { fittingTypeId: fittingTypeId },
                success: function (response) {
                    var rFittingType = jQuery.parseJSON(response);
                    rFittingType.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.FittingType.Update,
                        data: { model: rFittingType },
                        success: function (response) {
                            fittingTypePartial();
                            toast("Fitting Type Update Successful");
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
            break;

        case "method":
            var methodId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.Method.Detail,
                data: { methodId: methodId },
                success: function (response) {
                    var rMethod = jQuery.parseJSON(response);
                    rMethod.Name = $("#" + input1Id + "").val();
                    rMethod.Code = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.Method.Update,
                        data: { model: rMethod },
                        success: function (response) {
                            methodPartial();
                            toast("Method Update Successful");
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
            break;

        case "operator":
            var operatorId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.Operator.Detail,
                data: { operatorId: operatorId },
                success: function (response) {
                    var rOperator = jQuery.parseJSON(response);
                    rOperator.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.Operator.Update,
                        data: { model: rOperator },
                        success: function (response) {
                            operatorPartial();
                            toast("Operator Update Successful");
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
            break;

        case "plantArea":
            var plantAreaId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.PlantArea.Detail,
                data: { plantAreaId: plantAreaId },
                success: function (response) {
                    var rPlantArea = jQuery.parseJSON(response);
                    rPlantArea.Name = $("#" + input1Id + "").val();
                    rPlantArea.Code = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.PlantArea.Update,
                        data: { model: rPlantArea },
                        success: function (response) {
                            plantAreaPartial();
                            toast("Plant Area Update Successful");
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
            break;

        case "plantSystem":
            var plantSystemId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.PlantSystem.Detail,
                data: { plantSystemId: plantSystemId },
                success: function (response) {
                    var rPlantSystem = jQuery.parseJSON(response);
                    rPlantSystem.Name = $("#" + input1Id + "").val();
                    rPlantSystem.LookUpItemsPlantAreas = $("#" + input2Id + "").val().toString();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.PlantSystem.Update,
                        data: { model: rPlantSystem },
                        success: function (response) {
                            plantSystemPartial();
                            toast("Plant System Update Successful");
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
            break;

        case "procedure":
            var procedureId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.Procedure.Detail,
                data: { procedureId: procedureId },
                success: function (response) {
                    var rProcedure = jQuery.parseJSON(response);
                    rProcedure.Name = $("#" + input1Id + "").val();
                    rProcedure.LookUpItemsMethod = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.Procedure.Update,
                        data: { model: rProcedure },
                        success: function (response) {
                            procedurePartial();
                            toast("Procedure Update Successful");
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
            break;

        case "specification":
            var specificationId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.Specification.Detail,
                data: { specificationId: specificationId },
                success: function (response) {
                    var rSpecification = jQuery.parseJSON(response);
                    rSpecification.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.Specification.Update,
                        data: { model: rSpecification },
                        success: function (response) {
                            specificationPartial();
                            toast("Specification Update Successful");
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
            break;

        case "standardStatement":
            var standardStatementId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.StandardStatement.Detail,
                data: { standardStatementId: standardStatementId },
                success: function (response) {
                    var rStandardStatement = jQuery.parseJSON(response);
                    rStandardStatement.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.StandardStatement.Update,
                        data: { model: rStandardStatement },
                        success: function (response) {
                            standardStatementPartial();
                            toast("Standard Statement Update Successful");
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
            break;

        case "status":
            var statusId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.Status.Detail,
                data: { statusId: statusId },
                success: function (response) {
                    var rStatus = jQuery.parseJSON(response);
                    rStatus.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.Status.Update,
                        data: { model: rStatus },
                        success: function (response) {
                            statusPartial();
                            toast("Status Update Successful");
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
            break;

        case "technique":
            var techniqueId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.Technique.Detail,
                data: { techniqueId: techniqueId },
                success: function (response) {
                    var rTechnique = jQuery.parseJSON(response);
                    rTechnique.Name = $("#" + input1Id + "").val();
                    rTechnique.LookUpItemsProcedure = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.Technique.Update,
                        data: { model: rTechnique },
                        success: function (response) {
                            techniquePartial();
                            toast("Technique Update Successful");
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
            break;

        case "weldType":
            var weldTypeId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: lookupItemController.WeldType.Detail,
                data: { weldTypeId: weldTypeId },
                success: function (response) {
                    var rWeldType = jQuery.parseJSON(response);
                    rWeldType.Name = $("#" + input1Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: lookupItemController.WeldType.Update,
                        data: { model: rWeldType },
                        success: function (response) {
                            weldTypePartial();
                            toast("Weld Type Update Successful");
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
            break;

        default:
    }
}