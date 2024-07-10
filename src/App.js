import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import StatusPage from './StatusPage';
import Navbar from './components/Navbar';
import { AuthContext, AuthProvider } from './context/AuthContext';

function AppContent() {
  const { user, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/files" /> : <Login />} />
        <Route path="/upload" element={user ? <FileUpload /> : <Navigate to="/login" />} />
        <Route path="/files" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/documents" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/status" element={user ? <StatusPage /> : <Navigate to="/login" />} />
        <Route path="/register" element={user ? <StatusPage /> : <Navigate to="/login" />} />
        <Route path="/download/:id" element={user ? <FileList /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={user ? "/files" : "/login"} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
