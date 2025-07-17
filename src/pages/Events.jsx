import React, { useState, useEffect } from 'react';
import './Events.css';
import event1 from '../assets/events/event1.jpg';
import event2 from '../assets/events/event2.jpg';
import event3 from '../assets/events/event3.jpg';
import event4 from '../assets/events/event4.jpg';
import event5 from '../assets/events/event5.jpg';
import ganapati from '../assets/events/ganapati.jpg';

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);

  const sampleEvents = [
    {
      id: 1,
      title: "गंध जुन्या क्षणांचा - A Nostalgic Literary Evening",
      shortDescription: "A soulful Marathi literary evening by Swarajya Club...",
      fullDescription: "गंध जुन्या क्षणांचा was not just an event...",
      date: "2025-04-23",
      time: "5:30 PM",
      location: "AB3-001, VIT Chennai",
      image: event1,
    },
    {
      id: 2,
      title: "गौरव महाराष्ट्राचा – Maharashtra Day Guest Lecture",
      shortDescription: "An inspiring online session on Maharashtra's legacy...",
      fullDescription: "On the occasion of Maharashtra Day, Swarajya Club hosted...",
      date: "2025-05-01",
      time: "9:00 PM",
      location: "Online",
      image: event2,
    },
    {
      id: 3,
      title: "दुर्गलेखन – Fort Blogging Initiative",
      shortDescription: "A creative blog-writing initiative celebrating Maharashtra's forts.",
      fullDescription: "दुर्गलेखन was a vibrant initiative...",
      date: "2025-05-23",
      time: "Online Submissions",
      location: "Online",
      image: event3,
    },
    {
      id: 4,
      title: "शिवस्मरण – Online Quiz on Chhatrapati Shivaji Maharaj",
      shortDescription: "An engaging quiz celebrating Shivaji Maharaj.",
      fullDescription: "शिवस्मरण was an online quiz competition...",
      date: "2025-06-06",
      time: "9:00 PM",
      location: "Online",
      image: event4,
    },
    {
      id: 5,
      title: "Mallataranga - Guest Lecture on Mallakhamb",
      shortDescription: "An enriching session on Mallakhamb by Chinmay Bapat.",
      fullDescription: "Mallataranga was a thoughtfully curated session...",
      date: "2025-06-21",
      time: "12:00 PM",
      location: "Online",
      image: event5,
    }
  ];

  const ganapatiEvent = {
    id: 'ganapati-2025',
    title: "Ganpati Chaturthi 2025",
    shortDescription: "Grand celebration of Lord Ganesha with rituals and cultural programs.",
    fullDescription: "Join us for the grand celebration of Lord Ganesha...",
    date: "2025-08-27",
    time: "17:00",
    location: "VIT Chennai",
    image: ganapati,
    category: "Festival",
  };

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date(`${ganapatiEvent.date}T${ganapatiEvent.time}:00`);
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [ganapatiEvent.date, ganapatiEvent.time]);

  // Fixed modal state management
  useEffect(() => {
    if (showModal) {
      setIsModalTransitioning(true);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      const eventsContainer = document.querySelector('.events-container');
      if (eventsContainer) {
        eventsContainer.classList.add('modal-open');
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      const eventsContainer = document.querySelector('.events-container');
      if (eventsContainer) {
        eventsContainer.classList.remove('modal-open');
      }
      
      // Add a small delay before allowing modal transitions again
      setTimeout(() => {
        setIsModalTransitioning(false);
      }, 300);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      const eventsContainer = document.querySelector('.events-container');
      if (eventsContainer) {
        eventsContainer.classList.remove('modal-open');
      }
    };
  }, [showModal]);

  const handleEventClick = (event) => {
    if (isModalTransitioning) return; // Prevent multiple clicks during transition
    
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    if (isModalTransitioning) return; // Prevent multiple clicks during transition
    
    setShowModal(false);
    // Delay clearing selected event to allow animation to complete
    setTimeout(() => {
      setSelectedEvent(null);
    }, 300);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (timeString) => {
    if (timeString.includes(':') && timeString.includes(' ')) {
      const [time, period] = timeString.split(' ');
      return { time, period };
    } else {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return { time: `${displayHour}:${minutes}`, period };
    }
  };

  const EventCard = ({ event }) => (
    <div 
      className={`event-card ${showModal ? 'modal-open-card' : ''}`}
      // onClick={() => handleEventClick(event)}
      style={{ 
        cursor: isModalTransitioning ? 'default' : 'pointer',
        pointerEvents: isModalTransitioning ? 'none' : 'auto'
      }}
    >
      <div className="event-image">
        <img src={event.image} alt={event.title} loading="lazy" />
      </div>
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.shortDescription}</p>
        <div className="event-meta">
          <div className="event-date"><span className="meta-icon">📅</span>{formatDate(event.date)}</div>
          <div className="event-location"><span className="meta-icon">📍</span>{event.location}</div>
        </div>
      </div>
    </div>
  );

  const EventModal = ({ event, onClose }) => {
    useEffect(() => {
      const handleEscapeKey = (e) => {
        if (e.key === 'Escape' && !isModalTransitioning) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [onClose, isModalTransitioning]);

    if (!event) return null;

    const handleContentClick = (e) => {
      e.stopPropagation();
    };

    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget && !isModalTransitioning) {
        onClose();
      }
    };

    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" onClick={handleContentClick}>
          <button 
            className="modal-close" 
            onClick={onClose}
            disabled={isModalTransitioning}
            style={{ cursor: isModalTransitioning ? 'default' : 'pointer' }}
          >
            ×
          </button>
          <div className="modal-left">
            <img src={event.image} alt={event.title} className="modal-image" />
          </div>
          <div className="modal-right">
            <h2 className="modal-title">{event.title}</h2>
            <p className="modal-description">{event.fullDescription}</p>
            <div className="modal-details">
              <div className="modal-detail-item">
                <span className="modal-detail-icon">📅</span>
                <span className="modal-detail-label">Date:</span>
                <span className="modal-detail-value">{formatDate(event.date)}</span>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-icon">🕐</span>
                <span className="modal-detail-label">Time:</span>
                <span className="modal-detail-value">
                  {formatTime(event.time).time} {formatTime(event.time).period}
                </span>
              </div>
              <div className="modal-detail-item">
                <span className="modal-detail-icon">📍</span>
                <span className="modal-detail-label">Location:</span>
                <span className="modal-detail-value">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <div className="events-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="event-card skeleton">
          <div className="skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line skeleton-description"></div>
            <div className="skeleton-line skeleton-description short"></div>
            <div className="skeleton-line skeleton-meta"></div>
          </div>
        </div>
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <div className="events-container">
        <div className="events-header">
          <div className="skeleton-line skeleton-title-large"></div>
          <div className="skeleton-line skeleton-subtitle"></div>
        </div>
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className={`events-container ${showModal ? 'modal-open' : ''}`}>
      <div className="events-container">
        <section className="flagship-section">
          <div className="flagship-container">
            <h2 className="flagship-title">Flagship Event</h2>
            <div 
              className={`flagship-event-card ${showModal ? 'modal-open-card' : ''}`}
              // onClick={() => handleEventClick(ganapatiEvent)}
              style={{ 
                cursor: isModalTransitioning ? 'default' : 'pointer',
                pointerEvents: isModalTransitioning ? 'none' : 'auto'
              }}
            >
              <div className="flagship-event-image" style={{ backgroundImage: `url(${ganapatiEvent.image})` }}>
                <div className="flagship-overlay">
                  <div className="flagship-content">
                    <h3 className="flagship-event-title">{ganapatiEvent.title}</h3>
                    <p className="flagship-event-description">{ganapatiEvent.shortDescription}</p>
                    <div className="countdown-container">
                      <h4 className="countdown-title">Event Starts In:</h4>
                      <div className="countdown-timer">
                        {["days", "hours", "minutes", "seconds"].map((unit, i) => (
                          <React.Fragment key={unit}>
                            <div className="countdown-item">
                              <span className="countdown-number">{countdown[unit]}</span>
                              <span className="countdown-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                            </div>
                            {i < 3 && <div className="countdown-separator">:</div>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="events-header">
          <h1 className="page-title">Events</h1>
        </div>

        <div className="events-content">
          <div className="events-grid">
            {sampleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {showModal && selectedEvent && (
          <EventModal event={selectedEvent} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Events;