import React, { useState, useEffect, useRef, useCallback } from 'react';
import swarajyaAnim from '../assets/swarajya_anim.mp4';
import './SplashScreen.css';

const START_OFFSET_SECONDS = 1.6;

function FlowerItem({ shape, gradientId, size, opacity }) {
  if (shape === 'flower-blossom') {
    return (
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        style={{ opacity }}
        className="flower-svg"
      >
        <g>
          <ellipse cx="16" cy="7.5" rx="4.2" ry="6.2" fill={`url(#${gradientId})`} />
          <ellipse cx="24.5" cy="13.5" rx="4.2" ry="6.2" transform="rotate(72 24.5 13.5)" fill={`url(#${gradientId})`} />
          <ellipse cx="21.5" cy="23.5" rx="4.2" ry="6.2" transform="rotate(144 21.5 23.5)" fill={`url(#${gradientId})`} />
          <ellipse cx="10.5" cy="23.5" rx="4.2" ry="6.2" transform="rotate(216 10.5 23.5)" fill={`url(#${gradientId})`} />
          <ellipse cx="7.5" cy="13.5" rx="4.2" ry="6.2" transform="rotate(288 7.5 13.5)" fill={`url(#${gradientId})`} />
          <circle cx="16" cy="16" r="4" fill="#ca8a04" opacity="0.9" />
          <circle cx="16" cy="16" r="2.3" fill="#fef08a" />
        </g>
      </svg>
    );
  }

  if (shape === 'flower-jasmine') {
    return (
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        style={{ opacity }}
        className="flower-svg"
      >
        <g>
          <ellipse cx="16" cy="7" rx="3.8" ry="5.8" fill={`url(#${gradientId})`} />
          <ellipse cx="25" cy="16" rx="5.8" ry="3.8" fill={`url(#${gradientId})`} />
          <ellipse cx="16" cy="25" rx="3.8" ry="5.8" fill={`url(#${gradientId})`} />
          <ellipse cx="7" cy="16" rx="5.8" ry="3.8" fill={`url(#${gradientId})`} />
          <circle cx="16" cy="16" r="3.2" fill="#eab308" />
        </g>
      </svg>
    );
  }

  if (shape === 'petal-rose') {
    return (
      <svg
        viewBox="0 0 24 32"
        width={size * 0.75}
        height={size}
        style={{ opacity }}
        className="flower-svg"
      >
        <path
          d="M12 2 C18 4 23 13 21 23 C19 28 14 31 11 31 C6 31 2 26 3 17 C4 9 8 3 12 2 Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M12 6 C11 14 11 20 11 27"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  if (shape === 'petal-marigold') {
    return (
      <svg
        viewBox="0 0 24 32"
        width={size * 0.75}
        height={size}
        style={{ opacity }}
        className="flower-svg"
      >
        <path
          d="M12 2 C17 3 21 11 19 23 C17 29 13 31 11 31 C8 31 4 28 5 20 C6 10 9 3 12 2 Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M12 5 Q12 17 11 28"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // Default 'petal-curve'
  return (
    <svg
      viewBox="0 0 24 32"
      width={size * 0.75}
      height={size}
      style={{ opacity }}
      className="flower-svg"
    >
      <path
        d="M12 2 C19 6 22 16 18 25 C15 31 9 31 5 27 C1 21 3 10 12 2 Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M12 6 Q10 17 9 27"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function SplashScreen({ onComplete }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [flowers, setFlowers] = useState([]);

  // Generate realistic falling flower blossoms & petals (पुष्पवृष्टी)
  const generateFlowers = useCallback(() => {
    const items = [];
    const gradientIds = ['fl-marigold', 'fl-saffron', 'fl-rose', 'fl-gold', 'fl-cream'];
    const shapes = ['petal-marigold', 'petal-rose', 'flower-blossom', 'petal-curve', 'flower-jasmine'];

    for (let i = 0; i < 48; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const gradientId = gradientIds[Math.floor(Math.random() * gradientIds.length)];
      const isBlossom = shape.startsWith('flower-');

      items.push({
        id: i,
        left: Math.random() * 96 + 2,
        animationDelay: -3.5 + Math.random() * 6.5,
        animationDuration: 5.5 + Math.random() * 4.5,
        swayType: (i % 4) + 1,
        gradientId,
        shape,
        size: isBlossom ? Math.random() * 10 + 18 : Math.random() * 12 + 16,
        opacity: 0.78 + Math.random() * 0.22,
      });
    }
    return items;
  }, []);

  // Initialize flowers on mount
  useEffect(() => {
    setFlowers(generateFlowers());
  }, [generateFlowers]);

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

      {/* SVG Gradient Palettes for Natural Flowers */}
      <svg className="flower-defs-svg" aria-hidden="true">
        <defs>
          <linearGradient id="fl-marigold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="fl-saffron" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="fl-rose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="45%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>
          <linearGradient id="fl-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="fl-cream" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Falling Flower Blossoms & Petals Shower (पुष्पवृष्टी) */}
      <div className="flower-shower-container" aria-hidden="true">
        {flowers.map((item) => (
          <div
            key={item.id}
            className={`flower-petal-item sway-${item.swayType}`}
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.animationDelay}s`,
              animationDuration: `${item.animationDuration}s`,
            }}
          >
            <FlowerItem
              shape={item.shape}
              gradientId={item.gradientId}
              size={item.size}
              opacity={item.opacity}
            />
          </div>
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