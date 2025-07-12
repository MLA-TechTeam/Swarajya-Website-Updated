import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { getUpcomingEvents } from './EventsData';
import './Home.css';

export default function Home() {
  const upcomingEvents = getUpcomingEvents().slice(0, 2);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              स्वराज्य
              <span className="hero-subtitle">SWRAJYA </span>
            </h1>
            <p className="hero-description">
              Preserving our rich culture, fostering community bonds, and celebrating the spirit of Maharashtra
            </p>
            <div className="hero-buttons1">
              <Link to="/events" className="btn btn-secondary1">Explore Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Performing Arts">🎭</div>
              <h3>Cultural Events</h3>
              <p>Celebrate festivals, organize cultural programs, and keep our traditions alive</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Handshake">🤝</div>
              <h3>Community Support</h3>
              <p>Building strong bonds and providing support to fellow Maharashtrians</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Artist Palette">🎨</div>
              <h3>Arts & Crafts</h3>
              <p>Workshops on traditional Maharashtrian arts, crafts, and skills</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" role="img" aria-label="Curry Rice">🍛</div>
              <h3>Food Culture</h3>
              <p>Authentic Maharashtrian cuisine and cooking workshops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}