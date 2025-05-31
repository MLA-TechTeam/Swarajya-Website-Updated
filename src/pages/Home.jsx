import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              स्वराज्य
              <span className="hero-subtitle">SWRAJYA</span>
            </h1>
            <p className="hero-description">
              Preserving our rich culture, fostering community bonds, and celebrating the spirit of Maharashtra
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Join Us</button>
              <button className="btn btn-secondary">Explore Events</button>
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
              <div className="feature-icon">🎭</div>
              <h3>Cultural Events</h3>
              <p>Celebrate festivals, organize cultural programs, and keep our traditions alive</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Support</h3>
              <p>Building strong bonds and providing support to fellow Maharashtrians</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Arts & Crafts</h3>
              <p>Workshops on traditional Maharashtrian arts, crafts, and skills</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍛</div>
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
            <div className="event-card">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Jun</span>
              </div>
              <div className="event-info">
                <h4>Gudi Padwa Celebration</h4>
                <p>Traditional New Year celebration with cultural programs</p>
                <span className="event-time">6:00 PM - 9:00 PM</span>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">Jun</span>
              </div>
              <div className="event-info">
                <h4>Marathi Literature Meet</h4>
                <p>Discussion on contemporary Marathi literature and poetry</p>
                <span className="event-time">4:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Be part of a vibrant community that celebrates Maharashtrian culture and values</p>
          <button className="btn btn-primary btn-large">Become a Member</button>
        </div>
      </section>
    </div>
  );
}