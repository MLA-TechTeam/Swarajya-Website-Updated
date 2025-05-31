import { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

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
          <div className="logo">
            <img src={logo} alt="Club Logo" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-marathi">स्वराज्य</span>
              <span className="logo-english">SWRAJYA</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#events" className="nav-link">Events</a>
              <ul className="dropdown-menu">
                <li><a href="#cultural-events" className="dropdown-link">Cultural Events</a></li>
                <li><a href="#festivals" className="dropdown-link">Festivals</a></li>
                <li><a href="#workshops" className="dropdown-link">Workshops</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="nav-link">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="#community" className="nav-link">Community</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="btn-donate">Donate</button>
          <button className="btn-join">Join Now</button>
        </div>

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