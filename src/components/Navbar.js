import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav>
      <Link to="/files">Documents</Link>
      <Link to="/upload">Upload a document</Link>
      <Link to="/status">DB Status</Link>
      {user ? (
        <>
          <span>Logged in as {user.username}</span>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
