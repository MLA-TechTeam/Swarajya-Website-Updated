import { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" className="logo">
            <img src={logo} alt="Club Logo" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-marathi">स्वराज्य</span>
              <span className="logo-english">SWRAJYA</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/events" className="nav-link" activeClassName="active">Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link" activeClassName="active">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" className="nav-link" activeClassName="active">Blog</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}