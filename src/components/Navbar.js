import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="site-header">
      <nav id="site-navigation-wrap" className="navbar-style-one navbar-fixed-height wpex-flush-dropdowns wpex-stretch-megamenus hide-at-mm-breakpoint wpex-clr wpex-print-hidden">
        <div className="container">
          <div className="header-padding">
            <div id="site-logo" className="site-branding header-one-logo logo-padding wpex-table">
              <div id="site-logo-inner" className="wpex-table-cell wpex-align-middle wpex-clr">
                <Link to="/" className="main-logo">YourLogo</Link>
              </div>
            </div>
            <div id="site-navigation" className="wpex-clr" aria-label="Main menu">
              <ul id="menu-main-navigation" className="main-navigation-ul dropdown-menu wpex-dropdown-menu wpex-dropdown-menu--onhover">
                <li className="menu-item"><Link to="/">View documents</Link></li>
                <li className="menu-item"><Link to="/about">About</Link></li>
                <li className="menu-item"><Link to="/productions">Productions</Link></li>
                <li className="menu-item"><Link to="/status">Status</Link></li>
                {user && (
                  <>
                    <li className="menu-item"><Link to="/upload">Upload File</Link></li>
                    <li className="menu-item"><Link to="/register">Add User</Link></li>
                  </>
                )}
                <li className="menu-item">
                  {user ? (
                    <button onClick={logout}>Logout</button>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div id="mobile-menu" className="wpex-mobile-menu-toggle show-at-mm-breakpoint wpex-flex wpex-items-center wpex-absolute wpex-top-50 -wpex-translate-y-50 wpex-right-0">
            <div className="wpex-inline-flex wpex-items-center">
              <button className="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                <span className="mobile-menu-toggle__icon wpex-flex">
                  <span className="wpex-hamburger-icon wpex-hamburger-icon--inactive wpex-hamburger-icon--animate" aria-hidden="true">
                    <span></span>
                  </span>
                </span>
              </button>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
              <ul>
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/about">About</Link></li>
                <li className="menu-item"><Link to="/productions">Productions</Link></li>
                <li className="menu-item"><Link to="/status">Status</Link></li>
                {user && (
                  <>
                    <li className="menu-item"><Link to="/upload">Upload File</Link></li>
                    <li className="menu-item"><Link to="/register">Add User</Link></li>
                  </>
                )}
                <li className="menu-item">
                  {user ? (
                    <button onClick={logout}>Logout</button>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
