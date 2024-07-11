// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import StatusPage from './components/StatusPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import Productions from './components/Productions';

function AppContent() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar onLogout={logout} />
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/documents" />} />
        <Route path="/upload" element={user ? <FileUpload /> : <Navigate to="/login" />} />
        <Route path="/files" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/documents" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/status" element={user ? <StatusPage /> : <Navigate to="/login" />} />
        <Route path="/register" element={<StatusPage />} />
        <Route path="/download/:id" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/productions" element={user ? <Productions /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={user ? "/documents" : "/login"} />} />
      </Routes>
      <Footer />
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
