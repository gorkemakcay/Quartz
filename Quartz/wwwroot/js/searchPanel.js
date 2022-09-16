function filterInspection() {
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
        url: "QuartzItem/FilterInspections",
        data: { model: filterInspectionModel },
        success: function (response) {
            var rModel = jQuery.parseJSON(response);
            console.log(rModel);
        },
        error: function (error) {
            alert("error!");
            console.log(error.responseText);
        }
    });
}