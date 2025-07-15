import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showBlast, setShowBlast] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);

  // Generate confetti pieces
  const generateConfetti = () => {
    const pieces = [];
    const colors = ['#f97316', '#dc2626', '#fbbf24', '#fb923c', '#ea580c', '#fed7aa'];

    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: 5 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        shape: Math.random() > 0.5 ? 'circle' : 'square'
      });
    }
    return pieces;
  };

  // Play tutari-like sound
  const playTutariSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const frequencies = [523, 659, 784, 880, 659, 523];
    let currentNote = 0;

    const playNote = () => {
      if (currentNote < frequencies.length) {
        oscillator.frequency.setValueAtTime(frequencies[currentNote], audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        setTimeout(() => {
          currentNote++;
          if (currentNote < frequencies.length) {
            playNote();
          } else {
            oscillator.stop();
            audioContext.close();
          }
        }, 300);
      }
    };

    oscillator.start();
    playNote();
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          // Trigger blast
          setShowBlast(true);
          setConfetti(generateConfetti());
          playTutariSound();

          // Start fade-out just before complete
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              onComplete && onComplete();
            }, 1000); // Fade-out duration
          }, 8000);

          return 100;
        }
        return Math.min(prev + Math.random() * 20, 100);
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Subtle background pattern */}
      <div className="background-pattern"></div>

      {/* Blast effect */}
      {showBlast && (
        <div className="blast-container">
          {/* Confetti shower */}
          <div className="confetti-container">
            {confetti.map((piece) => (
              <div
                key={piece.id}
                className={`confetti-piece ${piece.shape}`}
                style={{
                  left: `${piece.left}%`,
                  animationDelay: `${piece.animationDelay}s`,
                  animationDuration: `${piece.animationDuration}s`,
                  backgroundColor: piece.color,
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  transform: `rotate(${piece.rotation}deg)`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="splash-content">
        <p className="subtitle">|| सेवेचे ठाई तत्पर ||</p>

        <div className="logo-container">
          <div className="logo-wrapper">
            <img src={logo} alt="Swrajya Logo" className="logo-image" />
          </div>
        </div>

        <div className="title-section">
          <h1 className="devanagari-title">स्वराज्य</h1>
          <h2 className="english-title">SWRAJYA</h2>
        </div>

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
            {progress < 100 ? 'Loading...' : showBlast ? 'स्वागत!' : 'Welcome!'}
          </p>
        </div>
      </div>
    </div>
  );
}