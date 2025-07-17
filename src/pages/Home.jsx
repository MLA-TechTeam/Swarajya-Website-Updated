// import EventCard from '../components/EventCard';
// import { getUpcomingEvents } from './EventsData';
import './Home.css';
import heroVideo from '../assets/home-page-bg.mp4';
import { useRef, useState } from 'react';
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";
import {ChevronDown } from "lucide-react";

import certificate from '../assets/certificate.jpg';

export default function Home() {
  // const upcomingEvents = getUpcomingEvents().slice(0, 2);

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

    const handleScroll = () => {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay & Content */}
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              स्वराज्य
            </h1>
                      <div className="scroll-indicator" onClick={handleScroll} role="button" tabIndex={0}>
            <ChevronDown className="chevron-down" size={40} />
            <ChevronDown className="chevron-down delayed" size={40} />
          </div>
          </div>
        </div>
        <button onClick={toggleMute} className="btn-mute-toggle">
                {isMuted ? 
                  <VscMute className="mute-icon" /> : 
                  <VscUnmute className="mute-icon" />
                }
              </button>
      </section>

      <section className="mvv-section">
        <div className="container5">
          <h2 className="section-title3">Our Motto</h2>
          <div className="mvv-grid">
            <div className="mvv-card mission-card">
              <p>
                "सेवेचे ठायी तत्पर" (Always Ready for Service) is more than just a phrase, it is the guiding principle of our club. This timeless expression reflects the deep-rooted values of dedication, loyalty, and selfless service that have shaped our culture for centuries. 
                Historically, these very words were engraved by Hiroji Indulkar, the chief architect of Raigad Fort, who devoted himself wholeheartedly to the service of Swarajya and Chhatrapati Shivaji Maharaj. When asked to choose a reward for his efforts, he humbly requested to inscribe his name along with this phrase on the steps of the Jagadishwar Temple, declaring his eternal commitment to service.
                Inspired by this legacy and blessed by Ganpati Bappa, we carry forward the spirit of "सेवेचे ठायी तत्पर" in all that we do - striving to serve, protect, and promote Marathi literature, culture, and community with pride and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>          

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title3">Departments That Drive The Vision</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Performing Arts">🎨</div>
              <h3>Design & Content</h3>
              <p>Bringing stories to life. From posters and creatives to scripts and poetry – this team crafts the visual and verbal identity of Swarajya. Every color, every word, every detail reflects our cultural pride.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Handshake">📸</div>
              <h3>Social Media & Photography</h3>
              <p>Capturing moments, connecting people. This team handles all our social platforms, ensuring the energy of each event reaches every follower. From stunning event photos to interactive reels – they keep Swarajya alive online.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Artist Palette">💻</div>
              <h3>Technical</h3>
              <p>Powering the digital backbone. Behind every seamless registration form, event live stream, or website feature is our Technical Team. They bring innovation, efficiency, and functionality to the club’s operations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Curry Rice">🎭</div>
              <h3>Culture</h3>
              <p>Preserving tradition, inspiring performance. This team curates and leads all cultural events – be it dance, drama, or traditional ceremonies – keeping the rich essence of Marathi heritage alive at VIT Chennai.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Curry Rice">⚙️</div>
              <h3>Operations</h3>
              <p>Managing chaos with calm. From logistics to execution, this team ensures every Swarajya event runs like clockwork. They’re the behind-the-scenes heroes who turn plans into action.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Curry Rice">🥁</div>
              <h3>Pathak and Lezim</h3>
              <p>Beats that unite, steps that celebrate. This vibrant team brings high energy to every celebration. With dhol, tashas, and lezim performances, they make every Swarajya event unforgettable and full of spirit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mvv-section-last">
        <div className="container5">
          <h2 className="section-title3">Marathi Literature</h2>
          <div className="mvv-grid">
            <div className="mvv-card mission-card">
              <p>
                The rich dynamic history of Marathi literature reflects great cultural and intellectual might across Maharashtra. From the Bhakti poets like Sant Dnyaneshwar, Sant Tukaram and Sant Namdeo to the modern works of P.L. Deshpande and Vijay Tendulkar, it celebrates a spectrum of human emotions and societal reflections. Marathi literature is not just a collection of written words, it’s a representation of the region’s history, struggles and reforms. Each page turned is a reminder of the proud legacy of the cultural heritage of Maharashtra and India.
              </p>
            </div>
          </div>
        </div>
      </section>  


      {/* Upcoming Events */}
      {/* <section className="events-section">
        <div className="container">
          <h2 className="section-title3">Upcoming Events</h2>
          <div className="events-grid20">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section> */}


       <section className="achievements-section">
        <div className="container">
          <h2 className="section-title3">Our Achievements</h2>
          <div className="achievement-highlight">
            <div className="achievement-content">
              <div className="achievement-text">
                <h3 className="achievement-title">Best Literary Club Award</h3>
                <p className="achievement-description">
                  We are proud to announce that our Marathi Literary Club has been honored with the 
                  prestigious "Best Literary Club Award" for our outstanding contribution to 
                  preserving and promoting Marathi literature and culture.
                </p>
                <div className="achievement-details">
                  <div className="achievement-stat">
                    <span className="stat-number">2024-25</span>
                    <span className="stat-label">Award Year</span>
                  </div>
                  <div className="achievement-stat">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Events</span>
                  </div>
                  <div className="achievement-stat">
                    <span className="stat-number">300+</span>
                    <span className="stat-label">Members</span>
                  </div>
                </div>
              </div>
              <div className="achievement-images">
                <div className="award-image-container">
                  <img 
                    src={certificate} 
                    alt="Best Literary Club Award"
                    className="award-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">Certificate</span>
                  </div>
                </div>
                {/* <div className="award-image-container">
                  <img 
                    src="/path-to-your-certificate-image.jpg" 
                    alt="Award Certificate"
                    className="award-image"
                  />
                  <div className="image-overlay">
                    <span className="overlay-text">Certificate</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}