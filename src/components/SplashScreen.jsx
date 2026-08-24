import React, { useState, useEffect, useRef, useCallback } from 'react';
import swarajyaAnim from '../assets/swarajya_anim.mp4';
import './SplashScreen.css';

const START_OFFSET_SECONDS = 1.6;

export default function SplashScreen({ onComplete }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [confetti, setConfetti] = useState([]);

  // Generate light, long-lasting confetti pieces
  const generateConfetti = useCallback(() => {
    const pieces = [];
    const colors = ['#f97316', '#dc2626', '#fbbf24', '#fb923c', '#ea580c', '#f59e0b', '#fed7aa'];

    for (let i = 0; i < 55; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 4,
        animationDuration: 5.5 + Math.random() * 4.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 4,
        rotation: Math.random() * 360,
        shape: Math.random() > 0.45 ? 'circle' : 'square',
        opacity: 0.35 + Math.random() * 0.45,
      });
    }
    return pieces;
  }, []);

  // Initialize confetti on mount
  useEffect(() => {
    setConfetti(generateConfetti());
  }, [generateConfetti]);

  // Smooth finish transition
  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      onComplete && onComplete();
    }, 650);
  }, [isExiting, onComplete]);

  // Real-time playback progress bar trimmed from START_OFFSET_SECONDS
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      if (videoRef.current.currentTime >= START_OFFSET_SECONDS && !isVideoLoaded) {
        setIsVideoLoaded(true);
      }
      const current = Math.max(0, videoRef.current.currentTime - START_OFFSET_SECONDS);
      const effectiveDuration = Math.max(0.1, videoRef.current.duration - START_OFFSET_SECONDS);
      const percentage = Math.min((current / effectiveDuration) * 100, 100);
      setProgress(percentage);
    }
  };

  // Video loaded handler with 1.6s trim and clean reveal
  const handleLoadedData = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime < START_OFFSET_SECONDS) {
        videoRef.current.currentTime = START_OFFSET_SECONDS;
      } else {
        setIsVideoLoaded(true);
      }
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleSeeked = () => {
    if (videoRef.current && videoRef.current.currentTime >= START_OFFSET_SECONDS) {
      setIsVideoLoaded(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  // Fallback safety timer
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      handleFinish();
    }, 8500);

    return () => clearTimeout(safetyTimeout);
  }, [handleFinish]);

  // Keyboard shortcut (Escape / Space / Enter to skip)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  return (
    <div
      className={`splash-container ${isExiting ? 'splash-exiting' : ''}`}
      onClick={handleFinish}
      role="region"
      aria-label="Swarajya Intro"
    >
      {/* Dynamic Ambient Background Canvas */}
      <div className="ambient-canvas">
        <div className="ambient-glow-orb glow-primary" />
        <div className="ambient-glow-orb glow-secondary" />
        <div className="ambient-mesh-pattern" />
      </div>

      {/* Light Confetti Shower */}
      <div className="confetti-container" aria-hidden="true">
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
              opacity: piece.opacity,
              transform: `rotate(${piece.rotation}deg)`
            }}
          />
        ))}
      </div>

      {/* Seamless Floating Stage */}
      <div className="splash-stage">
        {/* Uncontained Motto Title directly above the animation */}
        <h2 className="landing-motto-title">
          सेवेचे ठाई तत्पर
        </h2>

        {/* Direct Hardware-Accelerated Blended Video */}
        <div className="video-blend-wrapper">
          <div className="video-ambient-glow" />
          <video
            ref={videoRef}
            src={swarajyaAnim}
            className={`splash-blended-video ${isVideoLoaded ? 'loaded' : ''}`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleLoadedData}
            onSeeked={handleSeeked}
            onEnded={handleFinish}
            onError={handleFinish}
          />
        </div>

        {/* Real-time playback progress bar directly below the logo */}
        <div className="progress-bar-wrapper">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}