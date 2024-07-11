// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onLogout }) => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div id="site-navigation-wrap" className="navbar-style-one navbar-fixed-height wpex-flush-dropdowns wpex-stretch-megamenus hide-at-mm-breakpoint wpex-clr wpex-print-hidden">
        <nav id="site-navigation" className="navigation main-navigation main-navigation-one wpex-clr" aria-label="Main menu">
          <ul id="menu-main-navigation" className="main-navigation-ul dropdown-menu wpex-dropdown-menu wpex-dropdown-menu--onhover">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/about-us">About Us</Link></li>
            <li className="menu-item"><Link to="/our-team">Meet the Team</Link></li>
            <li className="menu-item"><Link to="/specialisms">Specialisms</Link></li>
            <li className="menu-item"><Link to="/client-documents">Client Documents</Link></li>
            <li className="menu-item"><Link to="/contact">Contact</Link></li>
            {user ? (
              <>
                <li className="menu-item"><Link to="/productions">Productions</Link></li>
                <li className="menu-item"><Link to="/status">Status</Link></li>
                <li className="menu-item"><button onClick={onLogout}>Logout</button></li>
              </>
            ) : (
              <li className="menu-item"><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
