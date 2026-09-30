import React, { useState, useEffect } from 'react';
import './Events.css';

// Newer Events (2026)
import newEvent1 from '../assets/events/event1.jpg';
import newEvent2 from '../assets/events/event2.png';
import newEvent3 from '../assets/events/event3.png';
import newEvent4 from '../assets/events/event4.png';
import newEvent5 from '../assets/events/event5.png';
import newEvent6 from '../assets/events/event6.png';
import newEvent7 from '../assets/events/event7.png';
import newEvent8 from '../assets/events/event8.png';
import newEvent9 from '../assets/events/event9.png';

// Flagship Event Background
import gudiPadwaImage from '../assets/events/Gudi_Padwa.png';

// Older Events (2025)
import olderEvent1 from '../assets/events/Older/event1.jpg';
import olderEvent2 from '../assets/events/Older/event2.jpg';
import olderEvent3 from '../assets/events/Older/event3.jpg';
import olderEvent4 from '../assets/events/Older/event4.jpg';
import olderEvent5 from '../assets/events/Older/event5.jpg';

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isModalTransitioning, setIsModalTransitioning] = useState(false);
  const [showOlderEvents, setShowOlderEvents] = useState(false);

  // General Events 2026 (Under greater subheading of Events 2026)
  const generalEvents2026 = [
    {
      id: '2026-1',
      title: "गावाकडच्या गोष्टी",
      shortDescription: "Share your village/hometown stories, memories, and traditions.",
      fullDescription: "Write about your native place, your favorite memories, traditions, food, people, or anything that makes your village/hometown special. Share your connection with your roots and let everyone experience your stories through your words.",
      date: "2026-06-18",
      time: "Online",
      location: "Online Submissions",
      image: newEvent1,
    },
    {
      id: '2026-2',
      title: "क्षणचित्र",
      shortDescription: "Turn your favorite summer moments into memories worth sharing.",
      fullDescription: "Turn your favorite summer moments into memories worth sharing. Submit your captures of places, food, aesthetics, and memorable moments.",
      date: "2026-07-02",
      time: "Online",
      location: "Online Submissions",
      image: newEvent2,
    },
    {
      id: '2026-3',
      title: "Ink For The Brave",
      shortDescription: "Letters of gratitude for Kargil's brave heroes on Kargil Vijay Diwas.",
      fullDescription: "Join us to write letters of gratitude for Kargil's brave heroes on Kargil Vijay Diwas at the Flag Post Area.",
      date: "2026-07-26",
      time: "10:30 AM",
      location: "Flag Post Area",
      image: newEvent3,
    },
    {
      id: '2026-4',
      title: "झिंगाट - Zingaat Jamming Session",
      shortDescription: "An energetic jamming session celebrating Marathi music and beats.",
      fullDescription: "Get ready for an electric evening with the Zingaat Jamming Session at the MBA Amphi. High-energy musical performances and singing together!",
      date: "2026-08-01",
      time: "5:30 PM",
      location: "MBA Amphi",
      image: newEvent4,
    }
  ];

  // Ganesh Chaturthi 2026 (Flagship) Events (From Aagman to Ganesh Utsav Lunch)
  const ganeshChaturthiEvents2026 = [
    {
      id: '2026-5',
      title: "Ganpati Aagman",
      shortDescription: "Welcoming Bappa with joy, devotion, and traditional celebrations.",
      fullDescription: "Bappa Ganesh Mandal cordially invites everyone to the grand Ganpati Aagman celebration at AB1 Portico.",
      date: "2026-09-14",
      time: "2:30 PM",
      location: "AB1 Portico",
      image: newEvent5,
    },
    {
      id: '2026-9',
      title: "Dhammal Mini Games",
      shortDescription: "Relive the joy of traditional games with Musical Chairs, Lemon and Spoon, and Three Leg Race.",
      fullDescription: "Relive the joy of traditional games! Bappa Ganesh Mandal presents Dhammal Mini Games featuring classic fun activities including Musical Chairs, Lemon and Spoon race, and Three Leg Race at AB1 Portico.",
      date: "2026-09-16",
      time: "5:30 PM",
      location: "AB1 Portico",
      image: newEvent9,
    },
    {
      id: '2026-6',
      title: "Rangoli Competition",
      shortDescription: "Let Colours Speak Devotion - Ganesh Utsav Rangoli Competition.",
      fullDescription: "Let Colours Speak Devotion. Team size 1-4, colours provided. Showcase your artistic creativity in honor of Lord Ganesha.",
      date: "2026-09-17",
      time: "5:30 PM",
      location: "AB1 Portico",
      image: newEvent6,
    },
    {
      id: '2026-7',
      title: "अनंत - Ganesh Utsav Culturals & Visarjan",
      shortDescription: "Grand Dhol-Tasha at MGR Circle and cultural performances at MG Auditorium.",
      fullDescription: "Experience the vibrant spirit of Maharashtra with Dhol at MGR Circle (4:00 PM) followed by magnificent cultural performances at MG Auditorium (5:00 PM) and Visarjan.",
      date: "2026-09-19",
      time: "4:00 PM",
      location: "MGR Circle / MG Auditorium",
      image: newEvent7,
    },
    {
      id: '2026-8',
      title: "Ganesh Utsav Lunch",
      shortDescription: "Traditional Maharashtrian feast featuring Modak, Rabdi Malpua, and more.",
      fullDescription: "Join us for an authentic Maharashtrian feast at AB-1 Portico. Enjoy Modak, Rabdi Malpua, Chole Puri, Batata Wada, Masala Pulao, Raita, and much more!",
      date: "2026-09-20",
      time: "12:00 PM",
      location: "AB1 Portico",
      image: newEvent8,
    }
  ];

  // Older Events (Events 2025) stored under older folder
  const olderEvents2025 = [
    {
      id: '2025-1',
      title: "गंध जुन्या क्षणांचा - A Nostalgic Literary Evening",
      shortDescription: "A soulful Marathi literary evening by Swarajya Club...",
      fullDescription: "गंध जुन्या क्षणांचा was not just an event...",
      date: "2025-04-23",
      time: "5:30 PM",
      location: "AB3-001, VIT Chennai",
      image: olderEvent1,
    },
    {
      id: '2025-2',
      title: "गौरव महाराष्ट्राचा – Maharashtra Day Guest Lecture",
      shortDescription: "An inspiring online session on Maharashtra's legacy...",
      fullDescription: "On the occasion of Maharashtra Day, Swarajya Club hosted...",
      date: "2025-05-01",
      time: "9:00 PM",
      location: "Online",
      image: olderEvent2,
    },
    {
      id: '2025-3',
      title: "दुर्गलेखन – Fort Blogging Initiative",
      shortDescription: "A creative blog-writing initiative celebrating Maharashtra's forts.",
      fullDescription: "दुर्गलेखन was a vibrant initiative...",
      date: "2025-05-23",
      time: "Online Submissions",
      location: "Online",
      image: olderEvent3,
    },
    {
      id: '2025-4',
      title: "शिवस्मरण – Online Quiz on Chhatrapati Shivaji Maharaj",
      shortDescription: "An engaging quiz celebrating Shivaji Maharaj.",
      fullDescription: "शिवस्मरण was an online quiz competition...",
      date: "2025-06-06",
      time: "9:00 PM",
      location: "Online",
      image: olderEvent4,
    },
    {
      id: '2025-5',
      title: "Mallataranga - Guest Lecture on Mallakhamb",
      shortDescription: "An enriching session on Mallakhamb by Chinmay Bapat.",
      fullDescription: "Mallataranga was a thoughtfully curated session...",
      date: "2025-06-21",
      time: "12:00 PM",
      location: "Online",
      image: olderEvent5,
    }
  ];

  // Flagship Event with Gudi Padwa 2027
  const flagshipEvent = {
    id: 'gudi-padwa-2027',
    title: "Gudi Padwa 2027",
    shortDescription: "Grand celebration of Maharashtrian New Year with traditional festivities, rituals, and cultural celebrations.",
    fullDescription: "Gudi Padwa marks the beginning of the New Year for Maharashtrians and is celebrated with immense joy and enthusiasm. Join Swarajya Club in celebrating our heritage with traditional Gudi hoisting ceremony, classical and folk dance performances, live music, and authentic delicacies.",
    date: "2027-04-07",
    time: "09:00",
    location: "VIT Chennai",
    image: gudiPadwaImage,
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
      const eventDate = new Date(`${flagshipEvent.date}T${flagshipEvent.time}:00+05:30`);
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
  }, [flagshipEvent.date, flagshipEvent.time]);

  // Modal state management
  useEffect(() => {
    if (showModal) {
      setIsModalTransitioning(true);
      document.body.style.overflow = 'hidden';

      const eventsContainer = document.querySelector('.events-container');
      if (eventsContainer) {
        eventsContainer.classList.add('modal-open');
      }
    } else {
      document.body.style.overflow = '';

      const eventsContainer = document.querySelector('.events-container');
      if (eventsContainer) {
        eventsContainer.classList.remove('modal-open');
      }

      setTimeout(() => {
        setIsModalTransitioning(false);
      }, 300);
    }

    return () => {
      document.body.style.overflow = '';
      const eventsContainer = document.querySelector('.events-container');
      if (eventsContainer) {
        eventsContainer.classList.remove('modal-open');
      }
    };
  }, [showModal]);

  const closeModal = () => {
    if (isModalTransitioning) return;
    setShowModal(false);
    setTimeout(() => {
      setSelectedEvent(null);
    }, 300);
  };

  const handleToggleOlderEvents = () => {
    setShowOlderEvents(prev => {
      const nextState = !prev;
      if (nextState) {
        setTimeout(() => {
          const target = document.getElementById('events-2025-section');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      }
      return nextState;
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (timeString) => {
    if (!timeString) return { time: '', period: '' };
    if (timeString.includes(':') && timeString.includes(' ')) {
      const [time, period] = timeString.split(' ');
      return { time, period };
    } else if (timeString.includes(':')) {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours, 10);
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return { time: `${displayHour}:${minutes}`, period };
    }
    return { time: timeString, period: '' };
  };

  const EventCard = ({ event }) => (
    <div
      className={`event-card ${showModal ? 'modal-open-card' : ''}`}
      style={{
        cursor: isModalTransitioning ? 'default' : 'pointer',
        pointerEvents: isModalTransitioning ? 'none' : 'auto'
      }}
    >
      <div className="event-image">
        <img src={event.image} alt={event.title} loading="lazy" />
        <div className="event-image-overlay-footer">
          <h3 className="event-title-on-image">{event.title}</h3>
          <div className="event-meta-on-image">
            <div className="event-date-on-image">
              <span className="meta-icon">📅</span>
              {formatDate(event.date)}
            </div>
            <div className="event-location-on-image">
              <span className="meta-icon">📍</span>
              {event.location}
            </div>
          </div>
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
    }, [onClose]);

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
      <section className="flagship-section">
        <div className="flagship-container">
          <h2 className="flagship-title">Major Event</h2>
          <div
            className={`flagship-event-card ${showModal ? 'modal-open-card' : ''}`}
            style={{
              cursor: isModalTransitioning ? 'default' : 'pointer',
              pointerEvents: isModalTransitioning ? 'none' : 'auto'
            }}
          >
            <div
              className="flagship-event-image"
              style={{ backgroundImage: `url(${flagshipEvent.image})` }}
            >
              <div className="flagship-overlay">
                <div className="flagship-content">
                  <h3 className="flagship-event-title">{flagshipEvent.title}</h3>
                  <p className="flagship-event-description">{flagshipEvent.shortDescription}</p>
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
        {/* Events 2026 Section */}
        <section className="events-year-group">
          <div className="events-year-heading-wrapper">
            <h2 className="events-subheading">Events 2026</h2>
          </div>

          <div className="events-grid">
            {generalEvents2026.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Ganesh Chaturthi 2026 (Flagship) Sub-section */}
          <div className="events-subgroup">
            <div className="flagship-subheading-wrapper">
              <h3 className="events-nested-subheading">Ganesh Chaturthi 2026 (Flagship)</h3>
            </div>

            <div className="events-grid">
              {ganeshChaturthiEvents2026.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Small bottom action row */}
        <div className="other-events-bottom-wrapper">
          <button
            type="button"
            className="other-events-link bottom-link"
            onClick={handleToggleOlderEvents}
            aria-expanded={showOlderEvents}
          >
            {showOlderEvents ? 'Hide Other Events ▲' : 'Other Events (View 2025 Events) →'}
          </button>
        </div>

        {/* Events 2025 (Older Events) Section */}
        {showOlderEvents && (
          <section className="events-year-group older-events-group" id="events-2025-section">
            <div className="events-year-heading-wrapper">
              <h2 className="events-subheading">Events 2025</h2>
            </div>

            <div className="events-grid">
              {olderEvents2025.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}
      </div>

      {showModal && selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default Events;
