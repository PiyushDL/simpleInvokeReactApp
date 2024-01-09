let pdfInstance;

function openPdf() {
    const pdfPath = './demo.pdf';
    // Fetch the PDF document
    pdfjsLib.getDocument(pdfPath).promise.then(function (pdf) {
        pdfInstance = pdf;
        showAllPages();

        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.style.display = 'block';
    });
}

function showAllPages() {
    clearPdfViewer();

    for (let pageNumber = 1; pageNumber <= pdfInstance.numPages; pageNumber++) {
        pdfInstance.getPage(pageNumber).then(function (page) {
            const scale = 1; 
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            page.render({
                canvasContext: context,
                viewport: viewport
            });

            const pdfViewer = document.getElementById('pdfViewer');
            pdfViewer.appendChild(canvas);
        });
    }
}

function clearPdfViewer() {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.innerHTML = '<div id="redirectButton" class="closePdfButton marginRight" onclick="redirect()">Create RfE Log</div><div id="closePdfButton" class="closePdfButton" onclick="closePdfViewer()">&times;</div>';
}

function redirect() {
    window.open('https://dlzchui.azurewebsites.net/rfelogs/create-rfelog?invokeAppId=4612376', '_blank')
    closePdfViewer()
}

function closePdfViewer() {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.style.display = 'none';
    clearPdfViewer();
}

















// let pdfInstance;

// function openPdf() {
//     // Replace 'your_pdf_path.pdf' with the path to your PDF file
//     const pdfPath = './demo.pdf';
//     // Fetch the PDF document
//     pdfjsLib.getDocument(pdfPath).promise.then(function (pdf) {
//         pdfInstance = pdf;
//         showAllPages();

//         // Show the PDF viewer
//         const pdfViewer = document.getElementById('pdfViewer');
//         pdfViewer.style.display = 'block';
//     });
// }

// function showAllPages() {
//     for (let pageNumber = 1; pageNumber <= pdfInstance.numPages; pageNumber++) {
//         pdfInstance.getPage(pageNumber).then(function (page) {
//             const scale = 1.5;
//             const viewport = page.getViewport({ scale });

//             const canvas = document.createElement('canvas');
//             const context = canvas.getContext('2d');
//             canvas.height = viewport.height;
//             canvas.width = viewport.width;

//             page.render({
//                 canvasContext: context,
//                 viewport: viewport
//             });

//             const pdfViewer = document.getElementById('pdfViewer');
//             pdfViewer.appendChild(canvas);
//         });
//     }
// }

// function clearPdfViewer() {
//     // Clear the content inside the viewer
//     const pdfViewer = document.getElementById('pdfViewer');
//     pdfViewer.innerHTML = '<div id="closePdfButton" onclick="closePdfViewer()">&times;</div>';
// }

// function closePdfViewer() {
//     // Hide the PDF viewer
//     const pdfViewer = document.getElementById('pdfViewer');
//     pdfViewer.style.display = 'none';
//     window.open('https://dlzchui.azurewebsites.net/rfelogs/create-rfelog?invokeAppId=4612376', '_blank')
//     // Clear the content inside the viewer
//     clearPdfViewer();
// }
