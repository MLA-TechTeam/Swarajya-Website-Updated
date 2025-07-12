import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* About Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo} alt="Club Logo" className="logo-icon" />
                <div className="footer-logo-text">
                  <span className="footer-logo-marathi">स्वराज्य</span>
                  <span className="footer-logo-english">SWRAJYA</span>
                </div>
              </div>
              <p className="footer-description">
                Preserving the rich heritage of Maharashtra while building a strong community that celebrates our culture, traditions, and values together.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span className="social-icon">📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span className="social-icon">📺</span>
                </a>
                <a href="#" className="social-link" aria-label="WhatsApp">
                  <span className="social-icon">💬</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/membership" className="footer-link">Membership</Link></li>
                <li><Link to="/events" className="footer-link">Events</Link></li>
                <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li>
                <li><Link to="/blogs" className="footer-link">News & Updates</Link></li>
                <li><Link to="/volunteer" className="footer-link">Volunteer</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><Link to="/cultural-events" className="footer-link">Cultural Events</Link></li>
                <li><Link to="/language-classes" className="footer-link">Marathi Classes</Link></li>
                <li><Link to="/community-support" className="footer-link">Community Support</Link></li>
                <li><Link to="/workshops" className="footer-link">Art & Craft Workshops</Link></li>
                <li><Link to="/food-festivals" className="footer-link">Food Festivals</Link></li>
                <li><Link to="/youth-programs" className="footer-link">Youth Programs</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <p>Community Center, Pune</p>
                    <p>Maharashtra, India - 411001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-details">
                    <p>info@maharashtramandal.org</p>
                    <p>events@maharashtramandal.org</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <div className="contact-details">
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Maharashtra Mandal. All rights reserved.</p>
              <p className="footer-tagline">जय महाराष्ट्र | Jai Maharashtra</p>
            </div>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
              <span className="separator">|</span>
              <Link to="/sitemap" className="legal-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}