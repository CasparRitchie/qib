// src/StatusPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatusPage = () => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the status from the backend
    axios.get('https://qib-back-9e15c89db56c.herokuapp.com/status')
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        setError('Error fetching status');
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Status Page</h1>
      {error && <p>{error}</p>}
      <div dangerouslySetInnerHTML={{ __html: status }}></div>
    </div>
  );
};

export default StatusPage;
