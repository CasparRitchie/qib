import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('https://qib-back-9e15c89db56c.herokuapp.com/documents', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleDownload = async (file) => {
    try {
      const response = await axios.get(`https://qib-back-9e15c89db56c.herokuapp.com/download/${file.id}`, {
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.file_name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove the link after download
    } catch (error) {
      console.error('Error downloading file', error);
    }
  };

  const renderFilesForProduction = (productionId) => {
    return documents
      .filter(file => file.production_id === productionId)
      .map(file => (
        <tr key={file.id}>
          <td>{file.file_name}</td>
          <td>
            <button onClick={() => handleDownload(file)}>Download</button>
          </td>
        </tr>
      ));
  };

  const groupedProductions = documents.reduce((acc, doc) => {
    if (!acc[doc.production_id]) {
      acc[doc.production_id] = {
        production_name: doc.production_name,
        company_name: doc.company_name,
        files: []
      };
    }
    acc[doc.production_id].files.push(doc);
    return acc;
  }, {});

  return (
    <div>
      <h2>File List</h2>
      {Object.values(groupedProductions).map((production, index) => (
        <div key={index}>
          <h3>Customer: {production.company_name}</h3>
          <h4>Production: {production.production_name}</h4>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {production.files.map(file => (
                <tr key={file.id}>
                  <td>{file.file_name}</td>
                  <td>
                    <button onClick={() => handleDownload(file)}>Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default FileList;
