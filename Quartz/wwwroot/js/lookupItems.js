// #region Lookup Item Modal

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
            LookUpItemsPlantAreas: $("#limPlantSystemAddModalLookUpItemsPlantAreas").val()
        }

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

                allComponentTypes.forEach(function (componentType) {
                    $("#componentTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + componentType.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                '<button type="button" class="btn btn-dark p-0 deleteComponentType" id="' + componentType.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteComponentType").on('click', function () {
                    var deleteComponentTypeModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteComponentType",
                        data: { model: deleteComponentTypeModel },
                        success: function (response) {
                            componentTypePartial();
                            toast("Component Type Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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

                allFittingTypes.forEach(function (fittingType) {
                    $("#fittingTypeTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + fittingType.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                '<button type="button" class="btn btn-dark p-0 deleteFittingType" id="' + fittingType.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteFittingType").on('click', function () {
                    var deleteFittingTypeModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteFittingType",
                        data: { model: deleteFittingTypeModel },
                        success: function (response) {
                            fittingTypePartial();
                            toast("Fitting Type Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllMethodsJSON",
        success: function (response) {
            allMethods = jQuery.parseJSON(response);
            $("#methodTable").children('tbody').children('tr').remove();

            if (allMethods != "") {

                allMethods.forEach(function (method) {
                    $("#methodTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + method.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: method.Code
                            }),
                            $('<td>', { align: "center" }).append(
                                '<button type="button" class="btn btn-dark p-0 deleteMethod" id="' + method.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteMethod").on('click', function () {
                    var deleteMethodModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteMethod",
                        data: { model: deleteMethodModel },
                        success: function (response) {
                            methodPartial();
                            toast("Method Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
                                '<button type="button" class="btn btn-dark p-0 deleteOperator" id="' + operator.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteOperator").on('click', function () {
                    var deleteOperatorModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteOperator",
                        data: { model: deleteOperatorModel },
                        success: function (response) {
                            operatorPartial();
                            toast("Operator Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllPlantAreasJSON",
        success: function (response) {
            allPlantAreas = jQuery.parseJSON(response);
            $("#plantAreaTable").children('tbody').children('tr').remove();

            if (allPlantAreas != "") {
                //$('#inspectionTable').DataTable();

                allPlantAreas.forEach(function (plantArea) {
                    $("#plantAreaTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + plantArea.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: plantArea.Code
                            }),
                            $('<td>', { align: "center" }).append(
                                '<button type="button" class="btn btn-dark p-0 deletePlantArea" id="' + plantArea.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deletePlantArea").on('click', function () {
                    var deletePlantAreaModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeletePlantArea",
                        data: { model: deletePlantAreaModel },
                        success: function (response) {
                            plantAreaPartial();
                            toast("Plant Area Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllPlantSystemsJSON",
        success: function (response) {
            allPlantSystems = jQuery.parseJSON(response);
            $("#plantSystemTable").children('tbody').children('tr').remove();

            if (allPlantSystems != "") {
                //$('#inspectionTable').DataTable();

                allPlantSystems.forEach(function (plantSystem) {
                    $("#plantSystemTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + plantSystem.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: plantSystem.LookUpItemsPlantAreas
                            }),
                            $('<td>', { align: "center" }).append(
                                '<button type="button" class="btn btn-dark p-0 deletePlantSystem" id="' + plantSystem.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deletePlantSystem").on('click', function () {
                    var deletePlantSystemModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeletePlantSystem",
                        data: { model: deletePlantSystemModel },
                        success: function (response) {
                            plantSystemPartial();
                            toast("Plant System Deleted Successful");
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
                                '<button type="button" class="btn btn-dark p-0 deleteProcedure" id="' + procedure.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteProcedure").on('click', function () {
                    var deleteProcedureModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteProcedure",
                        data: { model: deleteProcedureModel },
                        success: function (response) {
                            procedurePartial();
                            toast("Procedure Deleted Successful");
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
                                '<button type="button" class="btn btn-dark p-0 deleteSpecification" id="' + specification.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteSpecification").on('click', function () {
                    var deleteSpecificationModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteSpecification",
                        data: { model: deleteSpecificationModel },
                        success: function (response) {
                            specificationPartial();
                            toast("Specification Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
                                '<button type="button" class="btn btn-dark p-0 deleteStandardStatement" id="' + standardStatement.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteStandardStatement").on('click', function () {
                    var deleteStandardStatementModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteStandardStatement",
                        data: { model: deleteStandardStatementModel },
                        success: function (response) {
                            standardStatementPartial();
                            toast("Standard Statement Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
    $.ajax({
        type: "GET",
        url: "LookUpItems/GetAllStatusesJSON",
        success: function (response) {
            allStatuses = jQuery.parseJSON(response);
            $("#statusTable").children('tbody').children('tr').remove();

            if (allStatuses != "") {
                //$('#inspectionTable').DataTable();

                allStatuses.forEach(function (status) {
                    $("#statusTable").children('tbody').append(
                        $('<tr>').append(
                            $('<td>', { align: "center" }).append(
                                "<strong>" + status.Name + "</strong>"
                            ),
                            $('<td>', {
                                align: "center",
                                text: ""
                            }),
                            $('<td>', { align: "center" }).append(
                                '<button type="button" class="btn btn-dark p-0 deleteStatus" id="' + status.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteStatus").on('click', function () {
                    var deleteStatusModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteStatus",
                        data: { model: deleteStatusModel },
                        success: function (response) {
                            statusPartial();
                            toast("Status Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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
                                '<button type="button" class="btn btn-dark p-0 deleteTechnique" id="' + technique.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteTechnique").on('click', function () {
                    var deleteTechniqueModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteTechnique",
                        data: { model: deleteTechniqueModel },
                        success: function (response) {
                            techniquePartial();
                            toast("Technique Deleted Successful");
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
                                '<button type="button" class="btn btn-dark p-0 deleteWeldType" id="' + weldType.Id + '" style="border: 0px; border-radius: 50%; width: 25px; height: 25px;"><i class="fa fa-trash-can"></i></button>'
                            )
                        )
                    );
                });
                $(".deleteWeldType").on('click', function () {
                    var deleteWeldTypeModel = { Id: $(this).attr("Id") };

                    $.ajax({
                        type: "DELETE",
                        url: "LookUpItems/DeleteWeldType",
                        data: { model: deleteWeldTypeModel },
                        success: function (response) {
                            weldTypePartial();
                            toast("Weld Type Deleted Successful");
                        },
                        error: function (error) {
                            alert("error!");
                            console.log(error.responseText);
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