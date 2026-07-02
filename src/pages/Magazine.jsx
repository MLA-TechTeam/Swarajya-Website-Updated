import React, { useState, useEffect } from 'react';
import './Magazine.css';

export default function Magazine() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="magazine-container">
      {/* Magazine Header */}
      <section className="magazine-header">
        <div className="container">
          <h1 className="magazine-title">
            <span className="magazine-title-marathi">अंतरंग</span>
            <span className="magazine-subtitle">ANTARANG • Swarajya Annual Magazine</span>
          </h1>
          <p className="magazine-description">
            Immerse yourself in our latest annual magazine edition. Swipe through articles, poems, and artworks curated by the Swarajya Marathi Literary Association.
          </p>
        </div>
      </section>

      {/* Magazine Reader Section */}
      <section className="magazine-reader-section">
        <div className="container1">
          <div className="magazine-frame-wrapper">
            {!iframeLoaded && (
              <div className="magazine-loader">
                <div className="spinner"></div>
                <p>Loading interactive reader...</p>
              </div>
            )}
            <iframe
              src="https://online.pubhtml5.com/irxzn/roiw/"
              title="Swarajya Magazine"
              className={`magazine-iframe ${iframeLoaded ? 'loaded' : ''}`}
              allowFullScreen={true}
              onLoad={() => setIframeLoaded(true)}
            ></iframe>
          </div>

          <div className="magazine-actions">
            <a 
              href="https://online.pubhtml5.com/irxzn/roiw/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="magazine-action-btn"
            >
              <span className="btn-icon">📖</span>
              <span>Open in Fullscreen / New Tab</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1xabZpgVKKAl8l4YYBSpn2f5TdiRzdnwR/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="magazine-action-btn"
            >
              <span className="btn-icon">📥</span>
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
