import React, { useState, useEffect, useRef, useCallback } from 'react';
import swarajyaAnim from '../assets/swarajya_anim.mp4';
import logo from '../assets/logo.png';
import logoWebp from '../assets/logo-240.webp';
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

export default function SplashScreen({ onDockingArrival, onComplete }) {
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDocking, setIsDocking] = useState(false);
  const [dockStyle, setDockStyle] = useState({});
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const hasFinishedRef = useRef(false);

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

  // Smooth docking flight to the top-left header logo while background reveals home page
  const startDockingTransition = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Locate the header logo in the DOM
    const targetLogo = document.querySelector('.header .logo-icon') || document.querySelector('.logo-icon');
    const wrapper = videoWrapperRef.current;

    let deltaX = 0;
    let deltaY = 0;
    let scale = 0.22;

    if (wrapper) {
      const currentRect = wrapper.getBoundingClientRect();
      const currentCenterX = currentRect.left + currentRect.width / 2;
      const currentCenterY = currentRect.top + currentRect.height / 2;

      if (targetLogo) {
        const targetRect = targetLogo.getBoundingClientRect();
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        deltaX = targetCenterX - currentCenterX;
        deltaY = targetCenterY - currentCenterY;
        scale = (targetRect.width || 100) / (currentRect.width || 490);
      } else {
        // Safe responsive fallback if logo not found
        const isMobile = window.innerWidth <= 1024;
        const targetCenterX = isMobile ? 36 : 70;
        const targetCenterY = isMobile ? 35 : 60;
        const targetSize = isMobile ? 40 : 100;

        deltaX = targetCenterX - currentCenterX;
        deltaY = targetCenterY - currentCenterY;
        scale = targetSize / (currentRect.width || 490);
      }
    }

    // Begin background transparency dissolve and mark docking state
    setIsDocking(true);
    setIsExiting(true);

    // Apply transform in next frame to guarantee CSS transition executes smoothly
    requestAnimationFrame(() => {
      setDockStyle({
        transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`,
        transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
      });
    });

    // Notify header logo to bloom into place right as the flying logo reaches the destination
    setTimeout(() => {
      onDockingArrival && onDockingArrival();
    }, 1050);

    // Complete after fluid 1.25s flight & reveal finishes
    setTimeout(() => {
      onComplete && onComplete();
    }, 1250);
  }, [onDockingArrival, onComplete]);

  // Video complete handler: sets progress to 100%, pauses briefly for clarity, then initiates smooth flight
  const handleVideoEnded = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      startDockingTransition();
    }, 200);
  }, [startDockingTransition]);

  // Continuous high-precision 60fps progress sync locked to video playback
  useEffect(() => {
    let animId;
    const updateProgress = () => {
      const video = videoRef.current;
      if (video && video.duration && !video.paused && !video.ended) {
        if (video.currentTime >= START_OFFSET_SECONDS && !isVideoLoaded) {
          setIsVideoLoaded(true);
        }
        const current = Math.max(0, video.currentTime - START_OFFSET_SECONDS);
        const effectiveDuration = Math.max(0.1, video.duration - START_OFFSET_SECONDS);
        const percentage = Math.min(Math.max((current / effectiveDuration) * 100, 0), 100);
        setProgress(percentage);

        // Natural completion trigger if reached near end
        if (video.currentTime >= video.duration - 0.05 && percentage >= 99) {
          handleVideoEnded();
          return;
        }
      }
      animId = requestAnimationFrame(updateProgress);
    };

    animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, [isVideoLoaded, handleVideoEnded]);

  // Reliable video autoplay initialization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  // Video loaded handler with START_OFFSET_SECONDS seek and playback
  const handleLoadedMedia = () => {
    const video = videoRef.current;
    if (video) {
      if (video.currentTime < START_OFFSET_SECONDS) {
        video.currentTime = START_OFFSET_SECONDS;
      }
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= START_OFFSET_SECONDS) {
      setIsVideoLoaded(true);
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handlePlaying = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= START_OFFSET_SECONDS) {
      setIsVideoLoaded(true);
    }
  };

  // Fallback safety timeout (30s) strictly for network disconnection / unplayable browser video
  useEffect(() => {
    const catastrophicTimeout = setTimeout(() => {
      startDockingTransition();
    }, 30000);

    return () => clearTimeout(catastrophicTimeout);
  }, [startDockingTransition]);

  return (
    <div
      className={`splash-container ${isExiting ? 'splash-exiting' : ''} ${isDocking ? 'splash-docking' : ''}`}
      role="region"
      aria-label="Swarajya Intro"
    >
      {/* Background Gradient Backdrop */}
      <div className="splash-backdrop" />

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

        {/* Flying / Docking Video & Logo Container */}
        <div
          ref={videoWrapperRef}
          className={`video-blend-wrapper ${isDocking ? 'docking' : ''}`}
          style={dockStyle}
        >
          <div className="video-ambient-glow" />
          <video
            ref={videoRef}
            src={swarajyaAnim}
            className={`splash-blended-video ${isVideoLoaded ? 'loaded' : ''} ${isDocking ? 'docking-video' : ''}`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={handleLoadedMedia}
            onLoadedData={handleLoadedMedia}
            onCanPlay={handleLoadedMedia}
            onSeeked={handleSeeked}
            onPlaying={handlePlaying}
            onEnded={handleVideoEnded}
            onError={startDockingTransition}
          />
          {/* Crisp Transparent Logo for Seamless Docking into Header */}
          <picture className={`splash-docking-picture ${isDocking ? 'visible' : ''}`}>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logo}
              alt="Swarajya Logo"
              className="splash-docking-image"
            />
          </picture>
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