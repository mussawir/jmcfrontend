import React, { useState } from 'react';
import './ReportGen.css'; // Include this file for styling

function PDFUploadAndPrint() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);
  };

  const handlePrint = () => {
    if (pdfUrl) {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.src = pdfUrl;
      iframe.onload = () => {
        iframe.contentWindow.print();
      };
      document.body.appendChild(iframe);
    }
  };

  return (
    <div className="container">
      <div className="upload-section">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="file-input"
        />
      </div>
      {pdfUrl && (
        <div className="viewer-section">
          <button onClick={handlePrint} className="print-button">
            Print
          </button>
          <iframe
            src={pdfUrl}
            className="pdf-viewer"
            title="PDF Viewer"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default PDFUploadAndPrint;
