// #region Lookup Item Modal

// #region General
$("#limNav a").on('click', function () {
    var info = $(this).html();
    info = info.replace(/\s+/g, '');
    switch (info) {
        case 'ComponentType':
            $("#limTitle").html("Lookup Items | Component Type");

            $.ajax({
                type: "GET",
                url: "LookUpItems/GetAllComponentTypesJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#componentTypeTable').DataTable();
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            break;

        case 'FittingType':
            $("#limTitle").html("Lookup Items | FittingType");

            $.ajax({
                type: "GET",
                url: "LookUpItems/GetAllFittingTypesJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#fittingTypeTable').DataTable();
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
                url: "LookUpItems/GetAllMethodsJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#methodTable').DataTable();
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
                url: "LookUpItems/GetAllOperatorsJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#operatorTable').DataTable();
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
                url: "LookUpItems/GetAllPlantAreasJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#plantAreaTable').DataTable();
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
                url: "LookUpItems/GetAllPlantSystemsJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#plantSystemTable').DataTable();
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
                url: "LookUpItems/GetAllProceduresJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#procedureTable').DataTable();
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
                url: "LookUpItems/GetAllSpecificationsJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#specificationTable').DataTable();
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
                url: "LookUpItems/GetAllStandardStatementsJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#standardStatementTable').DataTable();
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
                url: "LookUpItems/GetAllStatusesJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#statusTable').DataTable();
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
                url: "LookUpItems/GetAllTechniquesJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#techniqueTable').DataTable();
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
                url: "LookUpItems/GetAllWeldTypesJSON",
                success: function (result) {
                    $("#limPartialArea").html(result);
                    $('#weldTypeTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllComponentTypesJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#componentTypeTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllFittingTypesJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#fittingTypeTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllMethodsJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#methodTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllOperatorsJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#operatorTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllPlantAreasJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#plantAreaTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllPlantSystemsJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#plantSystemTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllProceduresJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#procedureTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllSpecificationsJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#specificationTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllStandardStatementsJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#standardStatementTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllStatusesJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#statusTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllTechniquesJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#techniqueTable').DataTable();
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

                $.ajax({
                    type: "GET",
                    url: "LookUpItems/GetAllWeldTypesJSON",
                    success: function (result) {
                        $("#limPartialArea").html(result);
                        $('#weldTypeTable').DataTable();
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