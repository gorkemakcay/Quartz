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
                url: "LookUpItems/GetComponentTypePartialView",
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
                url: "LookUpItems/GetFittingTypePartialView",
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
                url: "LookUpItems/GetMethodPartialView",
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
                url: "LookUpItems/GetOperatorPartialView",
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
                url: "LookUpItems/GetPlantAreaPartialView",
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
                url: "LookUpItems/GetPlantSystemPartialView",
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
                url: "LookUpItems/GetProcedurePartialView",
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
                url: "LookUpItems/GetMethodForOption",
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
                url: "LookUpItems/GetSpecificationPartialView",
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
                url: "LookUpItems/GetStandardStatementPartialView",
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
                url: "LookUpItems/GetStatusPartialView",
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
                url: "LookUpItems/GetTechniquePartialView",
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
                url: "LookUpItems/GetProcedureForOption",
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
                url: "LookUpItems/GetWeldTypePartialView",
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
            url: "LookupItems/AddComponentTypeJSON",
            data: { model: componentTypeModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Component Type Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetComponentTypePartialView",
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
            url: "LookupItems/AddFittingTypeJSON",
            data: { model: fittingTypeModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Fitting Type Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetFittingTypePartialView",
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
            url: "LookUpItems/AddMethodJSON",
            data: { model: methodModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Method Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetMethodPartialView",
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
            url: "LookUpItems/AddOperatorJSON",
            data: { model: operatorModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Operator Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetOperatorPartialView",
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
            url: "LookupItems/AddPlantAreaJSON",
            data: { model: plantAreaModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Plant Area Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetPlantAreaPartialView",
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
            url: "LookupItems/AddPlantSystemJSON",
            data: { model: plantSystemModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Plant System Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetPlantSystemPartialView",
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
            url: "LookUpItems/AddProcedureJSON",
            data: { model: procedureModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Procedure Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetProcedurePartialView",
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
            url: "LookupItems/AddSpecificationJSON",
            data: { model: specificationModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Specification Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetSpecificationPartialView",
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
            url: "LookupItems/AddStandardStatementJSON",
            data: { model: standardStatementModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Standard Statement Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetStandardStatementPartialView",
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
            url: "LookupItems/AddStatusJSON",
            data: { model: statusModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Status Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetStatusPartialView",
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
            url: "LookupItems/AddTechniqueJSON",
            data: { model: techniqueModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Technique Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetTechniquePartialView",
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
            url: "LookupItems/AddWeldTypeJSON",
            data: { model: weldTypeModel },
            success: function (data) {
                rModel = jQuery.parseJSON(data);
                toast("Weld Type Added Successful");
                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetWeldTypePartialView",
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllComponentTypesJSON",
        success: function (response) {
            allComponentTypes = jQuery.parseJSON(response);
            $("#componentTypeTable").children('tbody').children('tr').remove();

            if (allComponentTypes != "") {
                var componentTypeId;
                var columnId;

                allComponentTypes.forEach(function (componentType) {
                    $("#componentTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + componentType.Id + "gg").addClass("col-6").append(
                                "<strong>" + componentType.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).append(
                                "<button type='button' class='btn btn-dark p-0 editComponentType' id='" + componentType.Id + "g' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>"
                            )
                            /*'<button type="button" class="btn btn-dark p-0 deleteComponentType" id="' + componentType.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-trash-can"></i></button>'*/
                        )
                    );
                });

                $(".deleteComponentType").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "componentType";
                });

                $(".editComponentType").on('click', function () {
                    componentTypeId = $(this).attr("Id").slice(0, -1);
                    columnId = $(this).attr("Id") + "g";
                    editThisWhichLookupItem = "componentType";
                    cancelThisWhichLookupItem = "componentType";
                    allComponentTypes.forEach(function (componentType) {
                        if (componentType.Id == componentTypeId) {
                            $("#" + columnId + "").children().remove();
                            $("#" + columnId + "").append(
                                '<input type="text" value="' + componentType.Name + '" id="' + componentType.Id + 'input" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />',
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + componentType.Id + 'input\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 5px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + columnId + '\',\'' + componentType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllFittingTypesJSON",
        success: function (response) {
            allFittingTypes = jQuery.parseJSON(response);
            $("#fittingTypeTable").children('tbody').children('tr').remove();

            if (allFittingTypes != "") {
                var fittingTypeId;
                var columnId;

                allFittingTypes.forEach(function (fittingType) {
                    $("#fittingTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + fittingType.Id + "gg").addClass("col-6").append(
                                "<strong>" + fittingType.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).append(
                                "<button type='button' class='btn btn-dark p-0 editFittingType' id='" + fittingType.Id + "g' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>"
                            )
                            /*'<button type="button" class="btn btn-dark p-0 deleteFittingType" id="' + fittingType.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-trash-can"></i></button>'*/
                        )
                    );
                });

                $(".deleteFittingType").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "fittingType";
                });

                $(".editFittingType").on('click', function () {
                    fittingTypeId = $(this).attr("Id").slice(0, -1);
                    columnId = $(this).attr("Id") + "g";
                    editThisWhichLookupItem = "fittingType";
                    cancelThisWhichLookupItem = "fittingType";
                    allFittingTypes.forEach(function (fittingType) {
                        if (fittingType.Id == fittingTypeId) {
                            $("#" + columnId + "").children().remove();
                            $("#" + columnId + "").append(
                                '<input type="text" value="' + fittingType.Name + '" id="' + fittingType.Id + 'input" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />',
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + fittingType.Id + 'input\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 5px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + columnId + '\',\'' + fittingType.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
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
        url: "LookUpItems/GetAllMethodsJSON",
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllOperatorsJSON",
        success: function (response) {
            allOperators = jQuery.parseJSON(response);
            $("#operatorTable").children('tbody').children('tr').remove();

            if (allOperators != "") {

                allOperators.forEach(function (operator) {
                    $("#operatorTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + operator.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                /*'<button type="button" class="btn btn-dark p-0 deleteOperator" id="' + operator.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });
                $(".deleteOperator").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "operator";
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
        url: "LookUpItems/GetAllPlantAreasJSON",
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
    // Get all Methods from DB with AJAX
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllPlantSystemsJSON",
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
                        url: "LookUpItems/GetPlantAreaForOption",
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllProceduresJSON",
        success: function (response) {
            allProcedures = jQuery.parseJSON(response);
            $("#procedureTable").children('tbody').children('tr').remove();

            if (allProcedures != "") {
                //$('#inspectionTable').DataTable();

                allProcedures.forEach(function (procedure) {
                    $("#procedureTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + procedure.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: procedure.LookUpItemsMethod
                            }),
                            $('<td>', { align: "center" }).append(
                                /*'<button type="button" class="btn btn-dark p-0 deleteProcedure" id="' + procedure.Id + '" data-bs- style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                                // [TAMAMLANMADI]
                            )
                        )
                    );
                });

                $(".deleteProcedure").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "procedure";
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllSpecificationsJSON",
        success: function (response) {
            allSpecifications = jQuery.parseJSON(response);
            $("#specificationTable").children('tbody').children('tr').remove();

            if (allSpecifications != "") {
                //$('#inspectionTable').DataTable();

                allSpecifications.forEach(function (specification) {
                    $("#specificationTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + specification.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                /*'<button type="button" class="btn btn-dark p-0 deleteSpecification" id="' + specification.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });
                $(".deleteSpecification").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "specification";
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllStandardStatementsJSON",
        success: function (response) {
            allStandardStatements = jQuery.parseJSON(response);
            $("#standardStatementTable").children('tbody').children('tr').remove();

            if (allStandardStatements != "") {
                //$('#inspectionTable').DataTable();

                allStandardStatements.forEach(function (standardStatement) {
                    $("#standardStatementTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + standardStatement.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                /*'<button type="button" class="btn btn-dark p-0 deleteStandardStatement" id="' + standardStatement.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });
                $(".deleteStandardStatement").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "standardStatement";
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllStatusesJSON",
        success: function (response) {
            allStatuses = jQuery.parseJSON(response);
            $("#statusTable").children('tbody').children('tr').remove();

            if (allStatuses != "") {
                //$('#inspectionTable').DataTable();
                var statusId;
                var columnId;

                allStatuses.forEach(function (status) {
                    $("#statusTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).attr("Id", "" + status.Id + "gg").addClass("col-6").append(
                                "<strong>" + status.Name + "</strong>"
                            ),
                            $('<td>', { align: "center" }).addClass("col-6").append(
                                "<button type='button' class='btn btn-dark p-0 editStatus' id='" + status.Id + "g' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>"
                                /*'<button type="button" class="btn btn-dark p-0 deleteStatus" id="' + status.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });

                $(".deleteStatus").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "status";
                });

                $(".editStatus").on('click', function () {
                    statusId = $(this).attr("Id").slice(0, -1);
                    columnId = $(this).attr("Id") + "g";
                    editThisWhichLookupItem = "status";
                    cancelThisWhichLookupItem = "status";
                    allStatuses.forEach(function (status) {
                        if (status.Id == statusId) {
                            $("#" + columnId + "").children().remove();
                            $("#" + columnId + "").append(
                                '<input type="text" value="' + status.Name + '" id="' + status.Id + 'input" style="margin-top: 1px; border: none; border-radius: 20px; background: #d4d4d4;" />',
                                '<button type="button" class="btn btn-primary p-0" onclick="saveEditLookupItemButton(\'' + status.Id + 'input\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 5px;" ><i class="fa fa-check"></i></button>',
                                '<button type="button" class="btn btn-danger p-0" onclick="cancelEditLookupItemButton(\'' + columnId + '\',\'' + status.Name + '\')" style="border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;"><i class="fa fa-xmark"></i></button>'
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllTechniquesJSON",
        success: function (response) {
            allTechniques = jQuery.parseJSON(response);
            $("#techniqueTable").children('tbody').children('tr').remove();

            if (allTechniques != "") {
                //$('#inspectionTable').DataTable();

                allTechniques.forEach(function (technique) {
                    $("#techniqueTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + technique.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: technique.LookUpItemsProcedure
                            }),
                            $('<td>', { align: "center" }).append(
                                /*'<button type="button" class="btn btn-dark p-0 deleteTechnique" id="' + technique.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });
                $(".deleteTechnique").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "technique";
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllWeldTypesJSON",
        success: function (response) {
            allWeldTypes = jQuery.parseJSON(response);
            $("#weldTypeTable").children('tbody').children('tr').remove();

            if (allWeldTypes != "") {
                //$('#inspectionTable').DataTable();

                allWeldTypes.forEach(function (weldType) {
                    $("#weldTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + weldType.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                /*'<button type="button" class="btn btn-dark p-0 deleteWeldType" id="' + weldType.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'*/
                            )
                        )
                    );
                });
                $(".deleteWeldType").on('click', function () {
                    $("#areYouSureModal").modal('show');
                    $("#lookupItemsModal").modal('hide');

                    objectTypeToBeDeleted = "lookupItem";
                    objectIdToBeDeleted = $(this).attr("Id");
                    deleteThisWhichLookupItem = "weldType";
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
            break;

        case "fittingType":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );
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
                    url: "LookUpItems/GetPlantAreaForOption",
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

            //////////////////////////////////////////////////
            break;

        case "specification":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );
            break;

        case "standardStatement":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );
            break;

        case "status":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );
            break;

        case "technique":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );

            //////////////////////////////////////////////////
            break;

        case "weldType":
            $("#" + firstColumnId + "").children().remove();
            $("#" + firstColumnId + "").append(
                "<strong>" + firstColumnValue + "</strong>"
            );
            break;

        default:
    }

}

function saveEditLookupItemButton(input1Id, input2Id) {
    switch (editThisWhichLookupItem) {
        case "componentType":
            var updateComponentTypeModel = { Id: input1Id.slice(0, -6), Name: $("#" + input1Id + "").val() };
            $.ajax({
                type: "POST",
                url: "LookUpItems/UpdateComponentTypeJSON",
                data: { model: updateComponentTypeModel },
                success: function (response) {
                    componentTypePartial();
                    toast("Component Type Update Successful");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "fittingType":
            var updateFittingTypeModel = { Id: input1Id.slice(0, -6), Name: $("#" + input1Id + "").val() };
            $.ajax({
                type: "POST",
                url: "LookUpItems/UpdateFittingTypeJSON",
                data: { model: updateFittingTypeModel },
                success: function (response) {
                    fittingTypePartial();
                    toast("Fitting Type Update Successful");
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
                url: "LookUpItems/GetMethodDetailJSON",
                data: { methodId: methodId },
                success: function (response) {
                    var rMethod = jQuery.parseJSON(response);
                    rMethod.Name = $("#" + input1Id + "").val();
                    rMethod.Code = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: "LookUpItems/UpdateMethodJSON",
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
            break;

        case "plantArea":
            var plantAreaId = input1Id.slice(0, -6);
            $.ajax({
                type: "GET",
                url: "LookUpItems/GetPlantAreaDetailJSON",
                data: { plantAreaId: plantAreaId },
                success: function (response) {
                    var rPlantArea = jQuery.parseJSON(response);
                    rPlantArea.Name = $("#" + input1Id + "").val();
                    rPlantArea.Code = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: "LookUpItems/UpdatePlantAreaJSON",
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
                type: "GET", // [BURADA KALDIM 13.09.2022 18:34]
                url: "LookUpItems/GetPlantSystemDetailJSON",
                data: { methodId: methodId },
                success: function (response) {
                    var rMethod = jQuery.parseJSON(response);
                    rMethod.Name = $("#" + input1Id + "").val();
                    rMethod.Code = $("#" + input2Id + "").val();

                    $.ajax({
                        type: "POST",
                        url: "LookUpItems/UpdateMethodJSON",
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

        case "procedure":
            break;

        case "specification":
            break;

        case "standardStatement":
            break;

        case "status":
            var updateStatusModel = { Id: input1Id.slice(0, -6), Name: $("#" + input1Id + "").val() };
            $.ajax({
                type: "POST",
                url: "LookUpItems/UpdateStatusJSON",
                data: { model: updateStatusModel },
                success: function (response) {
                    statusPartial();
                    toast("Status Update Successful");
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case "technique":
            break;

        case "weldType":
            break;

        default:
    }
}