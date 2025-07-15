import EventCard from '../components/EventCard';
import { getUpcomingEvents } from './EventsData';
import './Home.css';
import heroVideo from '../assets/home-page-bg.mp4';
import { useRef, useState } from 'react';
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";
import {ChevronDown } from "lucide-react";

export default function Home() {
  const upcomingEvents = getUpcomingEvents().slice(0, 2);

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