import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete && onComplete(), 1000);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      {/* Subtle background pattern */}
      <div className="background-pattern"></div>

      {/* Main content */}
      <div className="splash-content">
        <div>
          <p className="subtitle">|| सेवेचे ठाई तत्पर ||</p>
        </div>
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-wrapper">
            <img src={logo} alt="Swrajya Logo" className="logo-image" />
          </div>
        </div>

        {/* Club name */}
        <div className="title-section">
          <h1 className="devanagari-title">स्वराज्य</h1>
          <h2 className="english-title">SWRAJYA</h2>
        </div>

        {/* Loading indicator */}
        <div className="loading-section">
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <p className="loading-text">
            {progress < 100 ? 'Loading...' : 'Welcome!'}
          </p>
        </div>
      </div>

    </div>
  );
}