import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';

// EventCard component for displaying an event
const EventCard = ({ event, index, onEventClick, onQuickView, onSaveEvent, isSaved }) => (
  <div 
    className="event-card" 
    onClick={() => onEventClick(event.id)}
    style={{ animationDelay: `${index * 0.1}s` }}
    tabIndex={0}
    role="button"
    aria-label={`View details for ${event.title}`}
    onKeyPress={e => { if (e.key === 'Enter') onEventClick(event.id); }}
  >
    <div className="event-image">
      <img src={event.image} alt={event.title} loading="lazy" />
      <div className="event-category-badge" aria-label={`Category: ${event.category}`}>{event.category}</div>
      <div className="event-overlay">
        <button className="quick-view-btn" aria-label="Quick view" onClick={e => onQuickView(event, e)}>
          👁️
        </button>
      </div>
    </div>
    <div className="event-content">
      <div className="event-header">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-date">{event.date}</div>
      </div>
      <p className="event-description">{event.description}</p>
      <div className="event-meta">
        <div className="event-time">
          <span className="icon">🕐</span>
          <span className="time-text">{event.time}</span>
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
        <button className="btn-primary" onClick={e => e.stopPropagation()}>Get Tickets</button>
        <button 
          className={`btn-secondary save-btn${isSaved ? ' saved' : ''}`}
          onClick={e => { e.stopPropagation(); onSaveEvent(event.id); }}
          aria-label={isSaved ? 'Unsave event' : 'Save event'}
        >
          {isSaved ? 'Saved' : 'Save Event'}
        </button>
      </div>
    </div>
  </div>
);

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onEventClick: PropTypes.func.isRequired,
  onQuickView: PropTypes.func.isRequired,
  onSaveEvent: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default EventCard; 