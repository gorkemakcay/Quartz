$("#btnUserList").on('click', function () {
    $.ajax({
        type: "GET",
        url: "UserAndRole/GetUserListPartialView",
        success: function (html) {
            $("#ulmPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "UserAndRole/GetAllUsers",
                success: function (response) {
                    var users = jQuery.parseJSON(response);

                    $("#userListTable").children('tbody').children('tr').remove();

                    if (users != "") {
                        //$('#inspectionTable').DataTable();

                        users.forEach(function (user) {
                            $("#userListTable").children('tbody').append(
                                $('<tr>').append(
                                    $('<td>', {
                                        align: "center",
                                        text: user.UserName
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: user.FirstName + " " + user.LastName
                                    }),
                                    $('<td>', {
                                        align: "center",
                                        text: user.Email
                                    }),
                                    $('<td>', { align: "center" }).append(
                                        "<button type='button' class='btn btn-dark p-0 userEditButton' data-bs-toggle='modal' data-bs-target='#AddUser' onclick='openEditUserModal(" + user.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>",
                                        "<button type='button' id='" + user.Id + "' class='btn btn-dark p-0 userDeleteButton' data-bs-toggle='modal' data-bs-target='#areYouSureModal' style='border: 0px; border-radius: 50%; width: 25px; height: 25px; margin-left: 1px;'><i class='fa fa-trash-can'></i></button>"
                                    )
                                )
                            );
                        });

                        // Inspection Edit Button [Click Function]
                        $(".userEditButton").on('click', function () {
                            $('#userListModal').modal('toggle');
                        });

                        // Inspection Delete Button [Click Function]
                        $(".userDeleteButton").on('click', function () {
                            objectIdToBeDeleted = $(this).attr('id');
                            objectTypeToBeDeleted = "user";

                            $("#userListModal").modal("hide");
                        });
                    }
                    else {
                        $("#userListTable").children('tbody').append(
                            $('<tr>').append(
                                $('<td>', { colspan: "4", class: "text-center" }).append("No data available to show!")
                            )
                        );
                    }

                    // #region Inspection "ADD" Button on 'click' function
                    $("#addUserButton").on('click', function () {
                        loadInspectionsDataPage();
                        $("#inspectionModalNav").attr("hidden", "");
                    });
                    // #endregion
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

function openEditUserModal(userId) {
    //$("#InspectionAddModalTitle").html("Inspection Modal | Data");
    //$("#inspectionAddSelectedFile").text('');
    //$("#inspectionModalNav").removeAttr("hidden");

    //$.ajax({
    //    type: "GET",
    //    url: itemController.Inspection.DataPartialView,
    //    success: function (html) {
    //        $("#inspectionAddModalPartialArea").html(html);

    //        $.ajax({
    //            type: "GET",
    //            url: itemController.Inspection.Detail,
    //            data: { inspectionId: inspectionId },
    //            success: function (response) {
    //                var inspectionDetail = jQuery.parseJSON(response);
    //                if (inspectionDetail != null) {
    //                    isInspectionExist = true;
    //                    currentInspection = inspectionDetail;
    //                }
    //                var date = inspectionDetail.Date.split('T')[0];
    //                var dueDate = inspectionDetail.DueDate.split('T')[0];

    //                $("#inspectionReportNo").val(inspectionDetail.ReportNo);
    //                $("#inspectionDate").val(date);
    //                $("#inspectionDateDue").val(dueDate);
    //                $("#inspectionMethod").val(inspectionDetail.Method);
    //                $("#inspectionProcedure").val(inspectionDetail.Procedure);
    //                $("#inspectionTechnique").val(inspectionDetail.Technique);
    //                $("#inspectionStatus").val(inspectionDetail.Status);
    //                $("#inspectionDetails").val(inspectionDetail.Details);

    //                // #region Get Method for Select > Option
    //                $.ajax({
    //                    type: "GET",
    //                    url: lookupItemController.Method.List,
    //                    success: function (response) {
    //                        methods = jQuery.parseJSON(response);

    //                        // #region Create & Configure Select > Option
    //                        $("#inspectionMethod").children().remove();

    //                        $("#inspectionMethod").append(
    //                            $('<option>', {
    //                                value: inspectionDetail.Method,
    //                                text: inspectionDetail.Method,
    //                                id: "selectInspectionMethod"
    //                            })
    //                        );
    //                        $("#selectInspectionMethod").attr("hidden", "");

    //                        for (var i = 0; i < methods.length; i++) {
    //                            $("#inspectionMethod").append(
    //                                $('<option>', {
    //                                    value: methods[i].Name,
    //                                    text: methods[i].Name
    //                                })
    //                            );
    //                        }
    //                        // #endregion
    //                    },
    //                    error: function (error) {
    //                        alert("error!");
    //                        console.log(error.responseText);
    //                    }
    //                });
    //                // #endregion

    //                // #region Get Procedure for Select > Option
    //                $.ajax({
    //                    type: "GET",
    //                    url: lookupItemController.Procedure.List,
    //                    success: function (response) {
    //                        procedures = jQuery.parseJSON(response);

    //                        // #region Create & Configure Select > Option
    //                        $("#inspectionProcedure").children().remove();

    //                        $("#inspectionProcedure").append(
    //                            $('<option>', {
    //                                value: inspectionDetail.Procedure,
    //                                text: inspectionDetail.Procedure,
    //                                id: "selectInspectionProcedure"
    //                            })
    //                        );
    //                        $("#selectInspectionProcedure").attr("hidden", "");

    //                        for (var i = 0; i < procedures.length; i++) {
    //                            $("#inspectionProcedure").append(
    //                                $('<option>', {
    //                                    value: procedures[i].Name,
    //                                    text: procedures[i].Name
    //                                })
    //                            );
    //                        }
    //                        // #endregion
    //                    },
    //                    error: function (error) {
    //                        alert("error!");
    //                        console.log(error.responseText);
    //                    }
    //                });
    //                // #endregion

    //                // #region Get Technique for Select > Option
    //                $.ajax({
    //                    type: "GET",
    //                    url: lookupItemController.Technique.List,
    //                    success: function (response) {
    //                        techniques = jQuery.parseJSON(response);

    //                        // #region Create & Configure Select > Option
    //                        $("#inspectionTechnique").children().remove();

    //                        $("#inspectionTechnique").append(
    //                            $('<option>', {
    //                                value: inspectionDetail.Technique,
    //                                text: inspectionDetail.Technique,
    //                                id: "selectInspectionTechnique"
    //                            })
    //                        );
    //                        $("#selectInspectionTechnique").attr("hidden", "");

    //                        for (var i = 0; i < techniques.length; i++) {
    //                            $("#inspectionTechnique").append(
    //                                $('<option>', {
    //                                    value: techniques[i].Name,
    //                                    text: techniques[i].Name
    //                                })
    //                            );
    //                        }
    //                        // #endregion
    //                    },
    //                    error: function (error) {
    //                        alert("error!");
    //                        console.log(error.responseText);
    //                    }
    //                });
    //                // #endregion

    //                // #region Get Status for Select > Option
    //                $.ajax({
    //                    type: "GET",
    //                    url: lookupItemController.Status.List,
    //                    success: function (response) {
    //                        statuses = jQuery.parseJSON(response);

    //                        // #region Create & Configure Select > Option
    //                        $("#inspectionStatus").children().remove();

    //                        $("#inspectionStatus").append(
    //                            $('<option>', {
    //                                value: inspectionDetail.Status,
    //                                text: inspectionDetail.Status,
    //                                id: "selectInspectionStatus"
    //                            })
    //                        );
    //                        $("#selectInspectionStatus").attr("hidden", "");

    //                        for (var i = 0; i < statuses.length; i++) {
    //                            $("#inspectionStatus").append(
    //                                $('<option>', {
    //                                    value: statuses[i].Name,
    //                                    text: statuses[i].Name
    //                                })
    //                            );
    //                        }
    //                        // #endregion
    //                    },
    //                    error: function (error) {
    //                        alert("error!");
    //                        console.log(error.responseText);
    //                    }
    //                });
    //                // #endregion

    //                // #region Inspection Data Page > Choose File Button > [Change Function]
    //                $("#inspectionAddUploadFile").on('change', function (e) {
    //                    alert("brr!");
    //                    var fileName = e.target.files[0].name;
    //                    $("#inspectionAddSelectedFile").text("Selected File: " + fileName);
    //                });
    //                // #endregion
    //            },
    //            error: function (error) {
    //                alert("error!");
    //                console.log(error.responseText);
    //            }
    //        });
    //    }
    //});
}

function loadInspectionsDataPage() {
    $("#InspectionAddModalTitle").html("Inspection Modal | Data");

    $.ajax({
        type: "GET",
        url: itemController.Inspection.DataPartialView,
        success: function (html) {
            $("#inspectionAddModalPartialArea").html(html);

            $("#inspectionReportNo").val('');
            $("#inspectionDate").val('');
            $("#inspectionDateDue").val('');
            $("#inspectionDetails").val('');
            $("#inspectionAddUploadFile").val('');
            $("#inspectionAddSelectedFile").text('');
            isInspectionExist = false;

            // #region Get Methods for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Method.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#inspectionMethod").children().remove();

                    $("#inspectionMethod").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Method",
                            id: "selectInspectionMethod"
                        })
                    );
                    $("#selectInspectionMethod").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionMethod").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                },
                error: function (error) {

                }
            });
            // #endregion

            // #region Get Procedures for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Procedure.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#inspectionProcedure").children().remove();

                    $("#inspectionProcedure").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Procedure",
                            id: "selectInspectionProcedure"
                        })
                    );
                    $("#selectInspectionProcedure").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionProcedure").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
            // #endregion

            // #region Get Technique for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Technique.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Options
                    $("#inspectionTechnique").children().remove();

                    $("#inspectionTechnique").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Technique",
                            id: "selectInspectionTechnique"
                        })
                    );
                    $("#selectInspectionTechnique").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionTechnique").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                }
            });
            // #endregion

            // #region Get Status for Select > Option
            $.ajax({
                type: "GET",
                url: lookupItemController.Status.List,
                success: function (response) {
                    rModel = jQuery.parseJSON(response);

                    // #region Create & Configure Select > Option
                    $("#inspectionStatus").children().remove();

                    $("#inspectionStatus").append(
                        $('<option>', {
                            value: "select",
                            text: "Select Status",
                            id: "selectInspectionStatus"
                        })
                    );
                    $("#selectInspectionStatus").attr("hidden", "");

                    for (var i = 0; i < rModel.length; i++) {
                        $("#inspectionStatus").append(
                            $('<option>', {
                                value: rModel[i].Name,
                                text: rModel[i].Name
                            })
                        );
                    }
                    // #endregion
                }
            });
            // #endregion

        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}