import React, { useState } from 'react';
import axios from 'axios';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Send file to backend for upload and data extraction
      const result = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Set the extracted data from the backend
      setResponse(JSON.stringify(result.data.extracted_data, null, 2));
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    }
  };

  return (
    <div>
      <h2>Upload a PDF/Document</h2>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload File</button>
      </form>

      {response && (
        <div>
          <h3>Extracted Data:</h3>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
