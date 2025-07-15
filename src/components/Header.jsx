import { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link, NavLink,useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hide elements when scrolled down more than 100px
      setIsScrolled(scrollPosition > 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a nav link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

    const getPageClass = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'home-page';
      case '/about':
        return 'about-page';
      case '/events':
        return 'events-page';
      case '/gallery':
        return 'gallery-page';
      case '/blogs':
        return 'blog-page';
      default:
        return 'home-page';
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${getPageClass()}`}>
      <div className="header-container">
        {/* Logo Section - Left Side */}
        <div className="logo-section">
          <Link to="/" className="logo" onClick={handleNavLinkClick}>
            <img src={logo} alt="Club Logo" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-marathi">स्वराज्य</span>
              <span className="logo-english">SWARAJYA</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu - Right Side */}
        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className="nav-link" 
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className="nav-link" 
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/events" 
                className="nav-link" 
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/gallery" 
                className="nav-link" 
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/blogs" 
                className="nav-link" 
                activeClassName="active"
                onClick={handleNavLinkClick}
              >
                Blog
              </NavLink>
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