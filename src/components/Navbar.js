// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss';

const Navbar = ({ user, onLogout }) => {
  return (
    <div id="site-header-inner" className="header-one-inner header-padding container wpex-relative wpex-h-100 wpex-py-30 wpex-clr">
      <div id="site-logo" className="site-branding header-one-logo logo-padding wpex-table">
        <div id="site-logo-inner" className="wpex-table-cell wpex-align-middle wpex-clr">
          <a id="site-logo-link" href="https://quartzib.com/" rel="home" className="main-logo">
            <img src="https://quartzib.com/wp-content/uploads/2022/03/quartz-logo-275.png" alt="Quartz Insurance Brokers" className="logo-img" width="275" height="61" />
          </a>
        </div>
      </div>
      <div id="site-navigation-wrap" className="navbar-style-one navbar-fixed-height wpex-flush-dropdowns wpex-stretch-megamenus hide-at-mm-breakpoint wpex-clr wpex-print-hidden">
        <nav id="site-navigation" className="navigation main-navigation main-navigation-one wpex-clr" aria-label="Main menu">
          <ul id="menu-main-navigation" className="main-navigation-ul dropdown-menu wpex-dropdown-menu wpex-dropdown-menu--onhover">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
              <Link to="/"><span className="link-inner">Home</span></Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to="/about"><span className="link-inner">About <span className="hide-menu-item">us</span></span></Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to="/team"><span className="link-inner">Meet the Team</span></Link>
            </li>
            <li className="megamenu col-2 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
              <Link to="/specialisms"><span className="link-inner">Specialisms <span className="nav-arrow top-level"><span className="nav-arrow__icon ticon ticon-angle-down" aria-hidden="true"></span></span></span></Link>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/specialisms/film-tv-production-insurance"><span className="link-inner">Film & TV Production Insurance</span></Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/specialisms/animation-insurance"><span className="link-inner">Animation Insurance</span></Link>
                </li>
                {/* Add more sub-menu items here */}
              </ul>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to="/client-documents"><span className="link-inner">Client Documents</span></Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page">
              <Link to="/contact"><span className="link-inner">Contact</span></Link>
            </li>
            {user ? (
              <li className="menu-item"><span onClick={onLogout} className="link-inner">Logout</span></li>
            ) : (
              <li className="menu-item"><Link to="/login"><span className="link-inner">Login</span></Link></li>
            )}
          </ul>
        </nav>
      </div>
      <div id="mobile-menu" className="wpex-mobile-menu-toggle show-at-mm-breakpoint wpex-flex wpex-items-center wpex-absolute wpex-top-50 -wpex-translate-y-50 wpex-right-0">
        <div className="wpex-inline-flex wpex-items-center">
          <a href="#" className="mobile-menu-toggle" role="button" aria-label="Toggle mobile menu" aria-expanded="false">
            <span className="mobile-menu-toggle__icon wpex-flex">
              <span className="wpex-hamburger-icon wpex-hamburger-icon--inactive wpex-hamburger-icon--animate" aria-hidden="true">
                <span></span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
