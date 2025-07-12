import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUpcomingEvents, getPreviousEvents, getFlagshipEvents } from './EventsData';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentFlagship, setCurrentFlagship] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const navigate = useNavigate();

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [flagshipEvents, setFlagshipEvents] = useState([]);

  // Load events data
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setUpcomingEvents(getUpcomingEvents());
        setPreviousEvents(getPreviousEvents());
        setFlagshipEvents(getFlagshipEvents());
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Auto-rotate flagship events
  useEffect(() => {
    if (flagshipEvents.length > 1 && !isCarouselPaused) {
      const interval = setInterval(() => {
        setCurrentFlagship((prev) => (prev + 1) % flagshipEvents.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [flagshipEvents.length, isCarouselPaused]);

  // Get unique categories
  const getCategories = useCallback(() => {
    const currentEvents = activeTab === 'upcoming' ? upcomingEvents : previousEvents;
    const categories = [...new Set(currentEvents.map(event => event.category))];
    return ['all', ...categories];
  }, [activeTab, upcomingEvents, previousEvents]);

  // Filter events based on search and category
  const getFilteredEvents = useCallback(() => {
    const currentEvents = activeTab === 'upcoming' ? upcomingEvents : previousEvents;
    
    return currentEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [activeTab, upcomingEvents, previousEvents, searchTerm, selectedCategory]);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (timeString) => {
    const [time, period] = timeString.split(' ');
    return { time, period };
  };

  const EventCard = ({ event, index }) => (
    <div 
      className="event-card" 
      onClick={() => handleEventClick(event.id)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="event-image">
        <img src={event.image} alt={event.title} loading="lazy" />
        <div className="event-category">{event.category}</div>
        <div className="event-overlay">
          <button className="quick-view-btn" aria-label="Quick view">
            👁️
          </button>
        </div>
      </div>
      <div className="event-content">
        <div className="event-header">
          <h3 className="event-title">{event.title}</h3>
          <div className="event-date">{formatDate(event.date)}</div>
        </div>
        <p className="event-description">{event.description}</p>
        <div className="event-meta">
          <div className="event-time">
            <span className="icon">🕐</span>
            <span className="time-text">
              <span className="time">{formatTime(event.time).time}</span>
              <span className="period">{formatTime(event.time).period}</span>
            </span>
          </div>
          <div className="event-location">
            <span className="icon">📍</span>
            <span className="location-text">{event.location}</span>
          </div>
          <div className="event-price">
            <span className="icon">🎫</span>
            <span className="price-text">{event.ticketPrice}</span>
          </div>
        </div>
        <div className="event-actions">
          <button className="btn-primary" onClick={(e) => e.stopPropagation()}>
            Get Tickets
          </button>
          <button className="btn-secondary" onClick={(e) => e.stopPropagation()}>
            Save Event
          </button>
        </div>
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="events-grid">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="event-card skeleton">
          <div className="skeleton-image"></div>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line skeleton-date"></div>
            <div className="skeleton-line skeleton-description"></div>
            <div className="skeleton-line skeleton-description short"></div>
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

  const filteredEvents = getFilteredEvents();
  const categories = getCategories();

  return (
    <div className="events-container">
      {/* Flagship Events Carousel */}
      {flagshipEvents.length > 0 && (
        <section className="flagship-section">
          <div className="flagship-container">
            <h2 className="flagship-title">Our Flagship Events</h2>
            <div 
              className="flagship-carousel"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div className="flagship-slides">
                {flagshipEvents.map((event, index) => (
                  <div 
                    key={event.id}
                    className={`flagship-event ${index === currentFlagship ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="flagship-overlay">
                      <div className="flagship-content">
                        <span className="flagship-badge">Flagship Event</span>
                        <h3 className="flagship-event-title">{event.title}</h3>
                        <p className="flagship-event-description">{event.description}</p>
                        <div className="flagship-event-details">
                          <div className="flagship-detail">
                            <span className="icon">📅</span>
                            {formatDate(event.date)}
                          </div>
                          <div className="flagship-detail">
                            <span className="icon">📍</span>
                            {event.location}
                          </div>
                        </div>
                        <button 
                          className="flagship-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEventClick(event.id);
                          }}
                        >
                          Learn More
                          <span className="btn-arrow">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Navigation */}
              <div className="flagship-navigation">
                <button 
                  className="nav-btn prev"
                  onClick={() => setCurrentFlagship((prev) => 
                    prev === 0 ? flagshipEvents.length - 1 : prev - 1
                  )}
                  aria-label="Previous event"
                >
                  ←
                </button>
                <button 
                  className="nav-btn next"
                  onClick={() => setCurrentFlagship((prev) => 
                    (prev + 1) % flagshipEvents.length
                  )}
                  aria-label="Next event"
                >
                  →
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flagship-indicators">
                {flagshipEvents.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentFlagship ? 'active' : ''}`}
                    onClick={() => setCurrentFlagship(index)}
                    aria-label={`Go to event ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Header */}
      <div className="events-header">
        <h1 className="page-title">All Events</h1>
        <p className="page-subtitle">
          Discover and join our cultural celebrations, workshops, and community gatherings
        </p>
      </div>

      {/* Events Tabs */}
      <div className="events-tabs">
        <button 
          className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleTabChange('upcoming')}
        >
          <span className="tab-icon">📅</span>
          Upcoming Events 
          <span className="tab-count">({upcomingEvents.length})</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => handleTabChange('previous')}
        >
          <span className="tab-icon">📚</span>
          Previous Events 
          <span className="tab-count">({previousEvents.length})</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="events-filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Events Content */}
      <div className="events-content">
        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="no-events">
            <div className="no-events-icon">🎭</div>
            <h3>
              {searchTerm || selectedCategory !== 'all' 
                ? 'No events match your search'
                : `No ${activeTab} events at the moment`
              }
            </h3>
            <p>
              {searchTerm || selectedCategory !== 'all'
                ? 'Try adjusting your search terms or filters'
                : `Stay tuned for exciting new events coming soon!`
              }
            </p>
            {(searchTerm || selectedCategory !== 'all') && (
              <button 
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;