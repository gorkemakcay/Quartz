$("#pdf").on('click', function () {
    const pdf = new jsPDF();
    pdf.text('hello world!', 10, 10);

    // indirmek için
    //pdf.save('a4.pdf');

    // yeni bir pencerede açmak için
    window.open(pdf.output('bloburl'), '_blank', "toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,modal=yes,top=200,left=350,width=600,height=400");

    // yeni bir sekmede açmak için
    //var string = pdf.output('datauristring');
    //var iframe = "<iframe id='iframeId' width='100%' height='100%' style='border: 0;' src='" + string + "'></iframe>"
    //var x = window.open();
    //x.document.open();
    //x.document.write(iframe);
    //x.document.close();
    //$("#iframeId").parent().css({ "margin": "0" });
});