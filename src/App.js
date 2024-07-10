import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import StatusPage from './components/StatusPage';
import Navbar from './components/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppContent() {
  const { user, loading, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/documents" />} />
        <Route path="/upload" element={user ? <FileUpload /> : <Navigate to="/upload" />} />
        <Route path="/files" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/documents" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/status" element={user ? <StatusPage /> : <Navigate to="/status" />} />
        <Route path="/register" element={<StatusPage />} />
        <Route path="/download/:id" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={user ? "/documents" : "/login"} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
