// import EventCard from '../components/EventCard';
// import { getUpcomingEvents } from './EventsData';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogdata';
import './Home.css';
import heroVideo from '../assets/home-page-bg.mp4';
import { useRef, useState, useEffect } from 'react';
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";
import { ChevronDown } from "lucide-react";

import certificate from '../assets/certificate.jpg';
import designIcon from '../data/dept logo emoticons/design.png';
import socialMediaIcon from '../data/dept logo emoticons/social-media.png';
import technicalIcon from '../data/dept logo emoticons/technical.png';
import culturalIcon from '../data/dept logo emoticons/culture.png';
import operationsIcon from '../data/dept logo emoticons/operations.png';
import financeIcon from '../data/dept logo emoticons/finance.png';
import literatureIcon from '../data/extra/literature.png';

export default function Home() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [isBlogPaused, setIsBlogPaused] = useState(false);

  // Load gallery images dynamically for gallery showcase
  const galleryImages = useRef([]);
  if (galleryImages.current.length === 0) {
    try {
      const context = require.context('../data/gallery', true, /\.(png|jpe?g|svg|gif|webp)$/);
      galleryImages.current = context.keys().map((key, idx) => {
        const parts = key.split('/');
        const folder = parts[1] || 'Swarajya';
        return {
          id: idx,
          src: context(key),
          category: folder.replace(/[-_]/g, ' ').toUpperCase(),
          title: key.split('/').pop().replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
        };
      });
    } catch (e) {
      galleryImages.current = [];
    }
  }

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  useEffect(() => {
    if (isBlogPaused || !blogPosts || blogPosts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    }, 3000); // Auto-slides every 3 seconds

    return () => clearInterval(timer);
  }, [isBlogPaused]);

  useEffect(() => {
    if (isGalleryPaused || !galleryImages.current || galleryImages.current.length === 0) return;
    const galleryTimer = setInterval(() => {
      setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % Math.min(8, galleryImages.current.length));
    }, 3000); // Auto-slides gallery every 3 seconds

    return () => clearInterval(galleryTimer);
  }, [isGalleryPaused]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleScroll = () => {
    const featuresSection = document.querySelector('.mvv-section');
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
              ƂВvarajyaƓ
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
          <div className="motto-blog-wrapper">
            {/* Left Half: Redesigned Motto Tile (Wider & Formatted) */}
            <div className="motto-container-right">
              <div className="mvv-card mission-card motto-tile-redesigned">
                <h2 className="motto-main-heading">
                  Our Motto - <span className="motto-marathi-font">सेवेचे ठाई तत्पर</span>
                </h2>

                <div className="motto-text-content">
                  <p className="motto-intro">
                    <strong className="motto-highlight">"सेवेचे ठाई तत्पर"</strong> <em>(Always Ready for Service)</em> is more than just a phrase — it is the guiding principle of our club. This timeless expression reflects the deep-rooted values of dedication, loyalty, and selfless service that have shaped our culture for centuries.
                  </p>

                  <p className="motto-history">
                    Historically, these very words were engraved by <strong>Hiroji Indulkar</strong>, the chief architect of <strong>Raigad Fort</strong>, who devoted himself wholeheartedly to the service of Swarajya and <strong>Chhatrapati Shivaji Maharaj</strong>. When asked to choose a reward for his efforts, he humbly requested to inscribe his name along with this phrase on the steps of the Jagadishwar Temple, declaring his eternal commitment to service.
                  </p>

                  <p className="motto-conclusion">
                    Inspired by this rich legacy and blessed by <strong>Ganpati Bappa</strong>, we carry forward the spirit of <em>"सेवेचे ठाई तत्पर"</em> in all that we do — striving to serve, protect, and promote Marathi literature, culture, and community with immense pride and purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Half: Auto-Scrolling Blog Showcase Gallery (Single Slide View) */}
            <div className="home-blog-showcase">
              <div className="showcase-header">
                <h3 className="showcase-title">Featured Blogs</h3>
                <div className="carousel-dots">
                  {blogPosts.map((_, idx) => (
                    <span
                      key={idx}
                      className={`carousel-dot ${currentBlogIndex === idx ? 'active' : ''}`}
                      onClick={() => setCurrentBlogIndex(idx)}
                      title={`Go to blog ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div
                className="single-blog-gallery-container"
                onMouseEnter={() => setIsBlogPaused(true)}
                onMouseLeave={() => setIsBlogPaused(false)}
              >
                {blogPosts.map((blog, idx) => (
                  <Link
                    to={`/blogs/${blog.id}`}
                    key={blog.id}
                    className={`blog-slide-card ${idx === currentBlogIndex ? 'active-slide' : ''}`}
                  >
                    <img src={blog.image} alt={blog.title} className="blog-showcase-img" />
                    <div className="blog-showcase-overlay">
                      <span className="blog-showcase-date">{blog.date}</span>
                      <h4 className="blog-showcase-card-title">{blog.title}</h4>
                      <p className="blog-showcase-author">By {blog.author}</p>
                      <span className="read-more-badge">Read Story →</span>
                    </div>
                  </Link>
                ))}
              </div>
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
              <div className="feature-icon"><img src={designIcon} alt="Design" className="dept-emoticon" /></div>
              <h3>Design And Content</h3>
              <p>Bringing stories to life. From posters and creatives to scripts and poetry, this team crafts the visual and verbal identity of Swarajya. Every color, every word, every detail reflects our cultural pride.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><img src={socialMediaIcon} alt="Social Media" className="dept-emoticon" /></div>
              <h3>Social Media & Photography</h3>
              <p>Capturing moments, connecting people. This team handles all our social platforms, ensuring the energy of each event reaches every follower. From stunning event photos to interactive reels, they keep Swarajya alive online.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><img src={technicalIcon} alt="Technical" className="dept-emoticon" /></div>
              <h3>Technical</h3>
              <p>Powering the digital backbone. Behind every seamless registration form, event live stream, or website feature is our Technical Team. They bring innovation, efficiency, and functionality to the club’s operations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><img src={culturalIcon} alt="Cultural" className="dept-emoticon" /></div>
              <h3>Cultural</h3>
              <p>Preserving tradition, inspiring performance. This team curates and leads all cultural events, be it dance, drama, or traditional ceremonies keeping the rich essence of Marathi heritage alive at VIT Chennai.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><img src={operationsIcon} alt="Operations" className="dept-emoticon" /></div>
              <h3>Operations</h3>
              <p>Managing chaos with calm. From logistics to execution, this team ensures every Swarajya event runs like clockwork. They’re the behind-the-scenes heroes who turn plans into action.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><img src={financeIcon} alt="Finance" className="dept-emoticon" /></div>
              <h3>Finance And Outreach</h3>
              <p>Balancing creativity with clarity, this team ensures Swarajya’s ideas turn into impactful realities. From budgeting and resource planning to sponsorships, strategic partnerships, and outreach. With transparency, responsibility, and strong connections at its core, they expand the club's reach and safeguard its growth, making sure every initiative thrives with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mvv-section-last">
        <div className="container5">
          <div className="motto-blog-wrapper">
            {/* Left Half: Auto-Scrolling Gallery Showcase (Single Slide View) */}
            <div className="home-blog-showcase">
              <div className="showcase-header">
                <h3 className="showcase-title">Swarajya Moments</h3>
                <div className="carousel-dots">
                  {galleryImages.current.slice(0, 8).map((_, idx) => (
                    <span
                      key={idx}
                      className={`carousel-dot ${currentGalleryIndex === idx ? 'active' : ''}`}
                      onClick={() => setCurrentGalleryIndex(idx)}
                      title={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div
                className="single-blog-gallery-container"
                onMouseEnter={() => setIsGalleryPaused(true)}
                onMouseLeave={() => setIsGalleryPaused(false)}
              >
                {galleryImages.current.slice(0, 8).map((item, idx) => (
                  <Link
                    to="/gallery"
                    key={item.id}
                    className={`blog-slide-card ${idx === currentGalleryIndex ? 'active-slide' : ''}`}
                  >
                    <img src={item.src} alt={item.category} className="blog-showcase-img" />
                    <div className="blog-showcase-overlay">
                      <span className="blog-showcase-date">{item.category}</span>
                      <h4 className="blog-showcase-card-title">Glimpses of Swarajya</h4>
                      <p className="blog-showcase-author">Events & Cultural Highlights</p>
                      <span className="read-more-badge">View Full Gallery →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Half: Formatted Marathi Literature Tile */}
            <div className="motto-container-right">
              <div className="mvv-card mission-card motto-tile-redesigned">
                <h2 className="motto-main-heading">
                  <img src={literatureIcon} alt="Literature" className="literature-emoticon" /> Marathi Literature
                </h2>

                <div className="motto-text-content">
                  <p className="motto-intro">
                    The rich dynamic history of <strong className="motto-highlight">Marathi literature</strong> reflects the great cultural and intellectual might across Maharashtra.
                  </p>

                  <p className="motto-history">
                    From timeless Bhakti poets like <strong>Sant Dnyaneshwar</strong>, <strong>Sant Tukaram</strong>, and <strong>Sant Namdeo</strong> to modern literary masters like <strong>P.L. Deshpande</strong> and <strong>Vijay Tendulkar</strong>, it celebrates a vibrant spectrum of human emotions and societal reflections.
                  </p>

                  <p className="motto-conclusion">
                    Marathi literature is not just a collection of written words — it is a true representation of the region’s history, struggles, and reforms. Each page turned is a salute to the proud legacy of Maharashtra and India.
                  </p>
                </div>
              </div>
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
