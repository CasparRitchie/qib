import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [productionId, setProductionId] = useState('');
  const [version, setVersion] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('production_id', productionId);
    formData.append('version', version);

    try {
      const response = await axios.post('https://qib-back-9e15c89db56c.herokuapp.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.error('Error uploading file', error);
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Production ID</label>
          <input
            type="text"
            value={productionId}
            onChange={(e) => setProductionId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Version</label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>File</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
