////const { forEach } = require("../lib/fontawesome-free-6.1.2-web/js/v4-shims");

//const { get } = require("ol/proj");

function createPDF() {
    switch (activeSearch) {
        case "drawing":
            alert("drawing");
            break;

        case "item":
            alert("item");
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
                        /*$("." + allDrawingReferences[i] + "sTable").append('<p>"' + inspection.DrawingRef + '"</p>');*/
                    }
                });
            }

            /*'<div><p>Plant Area:</p><p>Drawing Location:</p></div><table class="table table-hover text-sm table-responsive-sm table-sm"><thead><tr><th>Plant Ident</th><th>Insp. Date</th><th>Procedure</th><th>Report No</th><th>Details</th><th>Status</th></tr></thead><tbody><tr><td>RES123</td><td>RES123</td><td>RES123</td><td>RES123</td><td>RES123</td><td>RES123</td></tr></tbody></table><br /><br />'*/

            //$("#tableArea").append(
            //    //'<div class="' + allDrawingReferences[i] + "sTable" + '"></div>'
            //    $('<div>', {
            //        class: allDrawingReferences[i] + "sDiv"
            //    })
            //        .append(
            //            $('<p>', {
            //                text: "Plant Area:"
            //            }),
            //            $('<p>', {
            //                text: "Drawing Location:"
            //            }),
            //        ),
            //    $('<table>', { class: allDrawingReferences[i] + "sTable" })
            //        .append('<thead>')
            //        .append('<tr>')
            //        .append(
            //            $('<th>', { text: "Plant Ident" }),
            //            $('<th>', { text: "Insp. Date " }),
            //            $('<th>', { text: "Procedure" }),
            //            $('<th>', { text: "Report No" }),
            //            $('<th>', { text: "Details" }),
            //            $('<th>', { text: "Status" })
            //        )
            //);

            //var referencesModel = {
            //    PlantArea: "",
            //    DrawingRef: ""
            //};
            //printInspectionModelsArray.forEach(function (inspection) {
            //    if (!allDrawingReferences.includes(inspection.DrawingRef)) {
            //        referencesModel.PlantArea = inspection.PlantArea;
            //        referencesModel.DrawingRef = inspection.DrawingRef;
            //        allDrawingReferences.push(referencesModel);
            //        referencesModel = {
            //            PlantArea: "",
            //            DrawingRef: ""
            //        };
            //    }
            //});
            //console.log(allDrawingReferences);

            //for (var i = 0; i < allDrawingReferences.length; i++) {
            //    $("#tableArea").append(
            //        ''
            //    );

            //    printInspectionModelsArray.forEach(function (data) {

            //    });
            //}

            createPDFs();
            break;

        case "valveMaintenance":
            alert("valveMaintenance");
            break;

        case "thicknessMeasurement":
            alert("thicknessMeasurement");
            break;

        default:
    }
}



/*
if (data.DrawingRef == allDrawingReferences[i]) {
    $("#tableArea").append(
        '<div><p>Plant Area:</p><p>Drawing Location:</p></div><table><thead><tr><th>Plant Ident</th><th>Plant Ident</th><th>Plant Ident</th><th>Plant Ident</th><th>Plant Ident</th><th>Plant Ident</th></tr></thead><tbody><tr><td>RES123</td><td>RES123</td><td>RES123</td><td>RES123</td><td>RES123</td><td>RES123</td></tr></tbody></table>'
    );
}
*/



function createPDFs() {
    var pdf = document.getElementById("inspectionPDF");
    console.log(pdf);
    var opt = {
        filename: 'example_Html2Pdf.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(pdf).save();
}





























////// setup config
////const fontSize = 13;
////const lineSpacing = 12;
////var startX = 50;
////var startY = 50;
////var pdfText = '**QUARTZ** Search Report - **Inspection** Details **QUARTZ** Search Report - **Inspection** Details **QUARTZ** Search Report - **Inspection** Details **QUARTZ** Search Report - **Inspection** Details **QUARTZ** Search Report - **Inspection** Details';

////$("#pdf").on('click', function () {
////    var doc = new jsPDF();

////    var printPage = $("#searchPanelsModal");

////    doc.html(printPage, {
////        callback: function (doc) {
////            doc.save('example.pdf');
////        },
////        margin: [10, 10, 10, 10],
////        autoPaging: 'text',
////        x: 0,
////        y: 0,
////        width: 190,
////        windowWidth: 675
////    });

////    /*
////    const pdf = new jsPDF({
////        orientation: 'p',
////        unit: 'pt',
////        format: 'a4',
////        putOnlyUsedFonts: true,
////        floatPrecision: 16 // or "smart", default is 16
////    })
////        .setFontSize(fontSize)
////        .setFont('times', 'normal', 'normal');

////    // pdf.text(pdfText, startX, startY);

////    const pdfTextBoldFontStyle = pdfText.split('**');
////    pdfTextBoldFontStyle.map((text, i) => {
////       pdf.setFont('times', 'bold', 'normal');
////       if (i % 2 === 0)
////           pdf.setFont('times', 'normal', 'normal');

////       pdf.text(text, startX, startY);
////       startX = startX + pdf.getStringUnitWidth(text) * fontSize;
////    });

////    // indirmek için
////    //pdf.save('a4.pdf');

////    // yeni bir pencerede açmak için
////    window.open(pdf.output('bloburl'), '_blank', "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,modal=yes,top=200,left=350,width=600,height=400");

////    // yeni bir sekmede açmak için
////    //var string = pdf.output('datauristring');
////    //var iframe = "<iframe id='iframeId' width='100%' height='100%' style='border: 0;' src='" + string + "'></iframe>"
////    //var x = window.open();
////    //x.document.open();
////    //x.document.write(iframe);
////    //x.document.close();
////    //$("#iframeId").parent().css({ "margin": "0" });

////    */
////});

/////*

////// setup config
////const fontSize = 13;
////const lineSpacing = 12;

////// ><><><><><><><<><><<><
////// ONELINE EVENT
////// ><><><><><><><<><><<><
////document.getElementById("printOneline").addEventListener("click", function () {
////    let startX = 12;
////    let startY = 20;
////    const doc = new jsPDF("p", "pt");
////    doc.setFont("arial")
////        .setFontSize(fontSize)
////        .setFontStyle("normal");

////    const inputValue = document.getElementById("oneline").value;

////    const arrayOfNormalAndBoldText = inputValue.split('**');
////    arrayOfNormalAndBoldText.map((text, i) => {
////        doc.setFontType("bold");
////        // every even item is a normal font weight item
////        if (i % 2 === 0) {
////            doc.setFontType("normal");
////        }
////        doc.text(text, startX, startY);
////        startX = startX + doc.getStringUnitWidth(text) * fontSize;
////    });

////    doc.save(`boldAndNormal-oneline.pdf`);
////});

////// ><><><><><><><<><><<><
////// MULTILINE EVENT
////// ><><><><><><><<><><<><
////document.getElementById("printMultiline").addEventListener("click", function () {
////    let startX = 12;
////    let startY = 20;
////    const doc = new jsPDF("p", "pt");
////    doc.setFont("arial")
////        .setFontSize(fontSize)
////        .setFontStyle("normal");

////    const inputValue = document.getElementById("multiline").value;
////    const endX = 360;
////    // red marks to make textwidth visible
////    doc.setDrawColor('#ff0000');
////    doc.setLineWidth(1);
////    doc.line(startX, startY - 10, startX, startY + 200);
////    doc.line(endX, startY - 10, endX, startY + 200);
////    let textMap = doc.splitTextToSize(
////        inputValue,
////        endX
////    );

////    const startXCached = startX;
////    let boldOpen = false;
////    textMap.map((text, i) => {
////        if (text) {
////            const arrayOfNormalAndBoldText = text.split('**');
////            const boldStr = 'bold';
////            const normalOr = 'normal';
////            arrayOfNormalAndBoldText.map((textItems, j) => {
////                doc.setFontType(boldOpen ? normalOr : boldStr);
////                if (j % 2 === 0) {
////                    doc.setFontType(boldOpen ? boldStr : normalOr);
////                }
////                doc.text(textItems, startX, startY);
////                startX = startX + doc.getStringUnitWidth(textItems) * fontSize;
////            });
////            boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
////            startX = startXCached;
////            startY += lineSpacing;
////        }
////    });

////    doc.save(`boldAndNormal-multiline.pdf`);
////});

////const isBoldOpen = (arrayLength, valueBefore = false) => {
////    const isEven = arrayLength % 2 === 0;
////    const result = valueBefore !== isEven;

////    return result;
////}

////// ><><><><><><><<><><<><
////// MULTILINE EVENT 2
////// ><><><><><><><<><><<><
////document.getElementById("printMultiline2").addEventListener("click", function () {
////    let startX = 12;
////    let startY = 20;
////    const doc = new jsPDF("p", "pt");
////    doc.setFont("arial")
////        .setFontSize(fontSize)
////        .setFontStyle("normal");

////    let inputValue = document.getElementById("multiline2").value;
////    const endX = 360;
////    // red marks to make textwidth visible
////    doc.setDrawColor('#ff0000');
////    doc.setLineWidth(1);
////    doc.line(startX, startY - 10, startX, startY + 200);
////    doc.line(endX, startY - 10, endX, startY + 200);

////    const regex = /(\*{2})+/g; // all "**" words
////    const textWithoutBoldMarks = inputValue.replace(regex, '');

////    let splitTextWithoutBoldMarks = doc.splitTextToSize(
////        textWithoutBoldMarks,
////        360
////    );

////    let charsMapLength = 0;
////    let position = 0;
////    let isBold = false;

////    // <><>><><>><>><><><><><>>><><<><><><><>
////    // power algorithm to determine which char is bold
////    let textRows = splitTextWithoutBoldMarks.map((row, i) => {
////        const charsMap = row.split('');

////        const chars = charsMap.map((char, j) => {
////            position = charsMapLength + j + i;

////            let currentChar = inputValue.charAt(position);

////            if (currentChar === "*") {
////                const spyNextChar = inputValue.charAt(position + 1);
////                if (spyNextChar === "*") {
////                    // double asterix marker exist on these position's so we toggle the bold state
////                    isBold = !isBold;
////                    currentChar = inputValue.charAt(position + 2);

////                    // now we remove the markers, so loop jumps to the next real printable char
////                    let removeMarks = inputValue.split('');
////                    removeMarks.splice(position, 2);
////                    inputValue = removeMarks.join('');
////                }
////            }

////            return { char: currentChar, bold: isBold };
////        });
////        charsMapLength += charsMap.length;

////        return { ...chars };
////    });


////    printCharacters(doc, textRows, startY, startX, fontSize, lineSpacing);

////    doc.save(`boldAndNormal-multiline2.pdf`);
////});

////const printCharacters = (doc, textObject, startY, startX, fontSize, lineSpacing) => {
////    const startXCached = startX;
////    const boldStr = 'bold';
////    const normalStr = 'normal';

////    textObject.map(row => {

////        Object.entries(row).map(([key, value]) => {
////            doc.setFontType(value.bold ? boldStr : normalStr);

////            doc.text(value.char, startX, startY);
////            startX = startX + doc.getStringUnitWidth(value.char) * fontSize;
////        });
////        startX = startXCached;
////        startY += lineSpacing;
////    });
////};

////*/