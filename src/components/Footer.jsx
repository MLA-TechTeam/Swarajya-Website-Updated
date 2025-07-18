import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaLinkedin, FaFacebookF} from 'react-icons/fa';
import { MapPin, Phone, Mail} from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/swarajya_vitc?igshid=MmJiY2I4NDBkZg==", label: "Instagram", color: "#E4405F" },
    // { icon: FaTwitter, href: "https://twitter.com/swarajya_vitc", label: "Twitter", color: "#1DA1F2" },
    { icon: FaYoutube, href: "https://www.youtube.com/@Swarajyamla_vitc", label: "YouTube", color: "#FF0000" },
     {icon: FaWhatsapp,href: "https://chat.whatsapp.com/HNsHA2gmXlCFhIF76gKKQT",label: "WhatsApp",color: "#25D366"  },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/swarajya-vit-chennai/", label: "LinkedIn", color: "#0077B5" },
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100092189738798", label: "Facebook", color: "#1877F2" },
  ];

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
                  <span className="footer-logo-english">SWARAJYA</span>
                </div>
              </div>
              <p className="footer-description">
                Preserving the rich heritage of Maharashtra while building a strong community that celebrates our culture, traditions, and values together.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="social-link" 
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color }}
                  >
                    <social.icon size={20} />
                    <span className="social-tooltip">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/about" className="footer-link" onClick={scrollToTop}>About Us</Link></li>
                <li><Link to="/events" className="footer-link" onClick={scrollToTop}>Events</Link></li>
                <li><Link to="/gallery" className="footer-link" onClick={scrollToTop}>Gallery</Link></li>
                <li><Link to="/blogs" className="footer-link" onClick={scrollToTop}>Blogs</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <div className="contact-details">
                    <p>Marathi Literary Association</p>
                    <p>VIT, Chennai</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={18} className="contact-icon" />
                  <div className="contact-details">
                    <p>+91 83065 78488</p>
                    <p>+91 93094 38835</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={18} className="contact-icon" />
                  <div className="contact-details">
                    <p>mlavitc@gmail.com</p>
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
              <p>&copy; {currentYear} Swarajya. All rights reserved.</p>
            </div>
            <div className="footer-creators">
              <p>Website designed and developed by Shivam Chavan & Ritesh Chaudhari</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}