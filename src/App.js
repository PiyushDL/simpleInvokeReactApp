import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import SinglePdf from './demo.pdf'

const PdfViewer = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(false)
    window.open('https://dlzchui.azurewebsites.net/rfelogs/create-rfelog?invokeAppId=4612376', '_blank')
  }
  return (
    <div style={{ position: 'relative' }}>
      {open ?
        <div style={{ width: '100%', position: 'relative' }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${require('pdfjs-dist/package.json').version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={SinglePdf} defaultScale={1} />
          </Worker>
          <div
            style={{
              position: 'fixed',
              top: '2%',
              right: '35%',
              background: '#007bff',
              color: '#ffffff',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onClick={handleClick}
          >
            Create RfE Log
          </div>
        </div>
        :
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            background: '#007bff',
            color: '#ffffff',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          onClick={() => setOpen(true)}
        >
          Open PDF
        </div>
      }
    </div>
  );
};

export default PdfViewer;