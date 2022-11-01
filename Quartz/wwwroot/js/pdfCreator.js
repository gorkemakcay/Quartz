////const { forEach } = require("../lib/fontawesome-free-6.1.2-web/js/v4-shims");

//const { get } = require("ol/proj");

function createPDF() {
    switch (activeSearch) {
        case "drawing":
            alert("under construction");
            break;

        case "item":
            alert("under construction");
            break;

        case "inspection":
            //$("#showPdfeModal").modal("toggle");
            $("#showPdfModalPartialArea").children().remove();
            $("#showPdfModalPartialArea").html(
                `
                    <div id="inspectionPDF" style="font-size: 12px;">
                        <page size="A4">
                            <br />
                            <h5><strong>QUARTZ Search Report - Inspection Details</strong></h5>
                            <br />
                            <h6 style="color: gray;">Project: GORKEM'S PROJECT</h6>
                            <h6 style="color: gray;">Date: `+ getDate().split('T')[0] +`</h6>
                            <br />
                            <div id="tableArea">
                            </div>
                        </page>
                    </div>
                `
            );

            // inspection'ın yapıldığı çizimlerin isimlerinin tutulduğu dizi
            var allDrawingReferences = [];
            var drawingsPlantAreas = [];
            printInspectionModelsArray.forEach(function (inspection) {
                if (!allDrawingReferences.includes(inspection.DrawingRef)) {
                    allDrawingReferences.push(inspection.DrawingRef);
                    drawingsPlantAreas.push(inspection.PlantArea);
                }
            });

            for (var i = 0; i < allDrawingReferences.length; i++) {
                $("#tableArea").append(
                    `
                        <div>
                            <p class="m-0 pdfHeader"><strong>Plant Area: </strong> `+ drawingsPlantAreas[i] + `</p>
                            <p class="pdfHeader"><strong>Drawing Location:</strong> `+ allDrawingReferences[i] + `</p>
                        </div>

                        <table class="table table-hover text-sm table-responsive-sm table-sm">
                            <thead>
                                <tr>
                                    <th class="text-center" style="width: 15%;">Plant Ident</th>
                                    <th class="text-center" style="width: 10%;">Insp. Date</th>
                                    <th class="text-center" style="width: 15%;">Procedure</th>
                                    <th class="text-center" style="width: 20%;">Report No</th>
                                    <th class="text-center" style="width: 30%;">Details</th>
                                    <th class="text-center" style="width: 10%;">Status</th>
                                </tr>
                            </thead>

                            <tbody class="`+ allDrawingReferences[i] + `sBody">
                            </tbody>
                        </table>

                        <br />
                        <br />
                    `
                );

                printInspectionModelsArray.forEach(function (inspection) {
                    if (allDrawingReferences[i] == inspection.DrawingRef) {
                        $("." + allDrawingReferences[i] + "sBody").append(
                            $('<tr>').append(
                                $('<td>', { align: "center" }).append(
                                    inspection.PlantIdent
                                ),
                                $('<td>', { align: "center" }).append(
                                    inspection.InspDate
                                ),
                                $('<td>', { align: "center" }).append(
                                    inspection.Procedure
                                ),
                                $('<td>', { align: "center" }).append(
                                    inspection.ReportNo
                                ),
                                $('<td>', { class: "min" }).append(
                                    inspection.Details
                                ),
                                $('<td>', { align: "center" }).append(
                                    inspection.Status
                                )
                            )
                        );
                    }
                });
            }
            createInspectionPDF();
            break;

        case "valveMaintenance":
            alert("under construction");
            break;

        case "thicknessMeasurement":
            alert("under construction");
            break;

        default:
    }
}

function createDrawingPDF() {
    var pdf = document.getElementById("drawingPDF");
    console.log(pdf);
    var opt = {
        filename: 'Filtered_Drawing.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}

function createItemPDF() {
    var pdf = document.getElementById("itemPDF");
    console.log(pdf);
    var opt = {
        filename: 'Filtered_Items.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}

function createInspectionPDF() {
    var pdf = document.getElementById("inspectionPDF");
    console.log(pdf);
    var opt = {
        filename: 'Filtered_Inspections.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}

function createValveMaintenancePDF() {
    var pdf = document.getElementById("valveMaintenancePDF");
    console.log(pdf);
    var opt = {
        filename: 'Filtered_Valve_Maintenances.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}

function createThicknessMeasurementPDF() {
    var pdf = document.getElementById("thicknessMeasurementPDF");
    console.log(pdf);
    var opt = {
        filename: 'Filtered_Thickness_Measurement.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}