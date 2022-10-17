var isUserExist;
var userDetail;

$("#btnUserList").on('click', function () {
    loadUserListPage();
});

$("#userAddandUpdateSaveButton").on('click', function () {
    if (isUserExist) {
        userDetail.FirstName = $("#updateUserFirstName").val();
        userDetail.LastName = $("#updateUserLastName").val();
        userDetail.UserName = $("#updateUserUsername").val();
        userDetail.Email = $("#updateUserEmail").val();
        userDetail.FullName = $("#updateUserFirstName").val() + " " + $("#updateUserLastName").val();

        var updateUserRoleModel = {
            Id: userDetail.Id,
            AdminRole: $('#userUpdateAdminRole').is(':checked'),
            OperatorRole: $('#userUpdateOperatorRole').is(':checked')
        }

        $.ajax({
            type: "POST",
            url: "UserAndRole/UpdateUser",
            data: { model: userDetail },
            success: function (response) {
                $.ajax({
                    type: "POST",
                    url: "UserAndRole/UpdateUserRole",
                    data: { model: updateUserRoleModel },
                    success: function (response) {
                        loadUserListPage();
                        toast("User Updated Successful!");
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
        var signUpUserModel = {
            FirstName: $("#addUserFirstName").val(),
            LastName: $("#addUserLastName").val(),
            FullName: $("#addUserFirstName").val() + " " + $("#addUserLastName").val(),
            Email: $("#addUserEmail").val(),
            UserName: $("#addUserUsername").val(),
            Password: $("#addUserPassword").val(),
            ConfirmPassword: $("#addUserConfirmPassword").val(),
            OperatorRole: $('#userSignUpOperatorRole').is(':checked'),
            AdminRole: $('#userSignUpAdminRole').is(':checked')
        }

        $.ajax({
            type: "POST",
            url: "SignUpUser/SignUpJSON",
            data: { model: signUpUserModel },
            success: function (response) {
                loadUserListPage();
                toast("User Added Successful!");
            },
            error: function (error) {
                alert("error!");
                console.log(error.responseText);
            }
        });
    }
});

function openEditUserModal(userId) {
    $("#InspectionAddModalTitle").html("Inspection Modal | Data");
    $("#inspectionAddSelectedFile").text('');
    $("#inspectionModalNav").removeAttr("hidden");

    $.ajax({
        type: "GET",
        url: itemController.Inspection.DataPartialView,
        success: function (html) {
            $("#inspectionAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: itemController.Inspection.Detail,
                data: { inspectionId: inspectionId },
                success: function (response) {
                    var inspectionDetail = jQuery.parseJSON(response);
                    if (inspectionDetail != null) {
                        isInspectionExist = true;
                        currentInspection = inspectionDetail;
                    }
                    var date = inspectionDetail.Date.split('T')[0];
                    var dueDate = inspectionDetail.DueDate.split('T')[0];

                    $("#inspectionReportNo").val(inspectionDetail.ReportNo);
                    $("#inspectionDate").val(date);
                    $("#inspectionDateDue").val(dueDate);
                    $("#inspectionMethod").val(inspectionDetail.Method);
                    $("#inspectionProcedure").val(inspectionDetail.Procedure);
                    $("#inspectionTechnique").val(inspectionDetail.Technique);
                    $("#inspectionStatus").val(inspectionDetail.Status);
                    $("#inspectionDetails").val(inspectionDetail.Details);
                },
                error: function (error) {
                    alert("error!");
                    console.log(error.responseText);
                }
            });
        }
    });
}

function loadAddUserPage() {

    $("#UserAddModalTitle").html("Add User");

    $.ajax({
        type: "GET",
        url: "UserAndRole/AddUserPartialView",
        success: function (html) {
            $("#userAddModalPartialArea").html(html);

            $("#addUserFirstName").val('');
            $("#addUserLastName").val('');
            $("#addUserEmail").val('');
            $("#addUserUsername").val('');
            $("#addUserPassword").val('');
            $("#addUserConfirmPassword").text('');

            isUserExist = false;
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}

function loadEditUserPage(userId) {
    $("#UserAddModalTitle").html("Edit User");

    $.ajax({
        type: "GET",
        url: "UserAndRole/UpdateUserPartialView",
        success: function (html) {
            $("#userAddModalPartialArea").html(html);

            $.ajax({
                type: "GET",
                url: "UserAndRole/GetAppUserDetail",
                data: { userId: userId },
                success: function (response) {
                    userDetail = jQuery.parseJSON(response);
                    $("#updateUserFirstName").val(userDetail.FirstName);
                    $("#updateUserLastName").val(userDetail.LastName);
                    $("#updateUserEmail").val(userDetail.Email);
                    $("#updateUserUsername").val(userDetail.UserName);
                    isUserExist = true;

                    $.ajax({
                        type: "GET",
                        url: "UserAndRole/GetUserDetail",
                        data: { userId: userDetail.Id },
                        success: function (response) {
                            var userRoles = jQuery.parseJSON(response);
                            if (userRoles.AdminRole)
                                $("#userUpdateAdminRole").prop('checked', true);
                            else $("#userUpdateAdminRole").prop('checked', false);

                            if (userRoles.OperatorRole)
                                $("#userUpdateOperatorRole").prop('checked', true);
                            else $("#userUpdateOperatorRole").prop('checked', false);
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

function loadUserListPage() {
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
                                        "<button type='button' class='btn btn-dark p-0 userEditButton' data-bs-toggle='modal' data-bs-target='#AddUser' onclick='loadEditUserPage(" + user.Id + ")' style='border: 0px; border-radius: 50%; width: 25px; height: 25px;'><i class='fa fa-pencil fa-sm'></i></button>",
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
                        loadAddUserPage();
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
}