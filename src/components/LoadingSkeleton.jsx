import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSkeleton.css';

// LoadingSkeleton component for event cards
const LoadingSkeleton = ({ count }) => (
  <div className="events-grid10" aria-busy="true" aria-live="polite">
    {[...Array(count)].map((_, index) => (
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

LoadingSkeleton.propTypes = {
  count: PropTypes.number,
};

LoadingSkeleton.defaultProps = {
  count: 6,
};

export default LoadingSkeleton; 