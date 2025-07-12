import React, { useState, useEffect } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced gallery data with working image URLs
  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop',
      category: 'festivals',
      title: 'Gudi Padwa Celebration',
      description: 'Traditional Maharashtrian New Year with colorful decorations and cultural programs'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      category: 'cultural',
      title: 'Classical Dance Performance',
      description: 'Mesmerizing Bharatanatyam and Kathak performances by local artists'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      category: 'food',
      title: 'Traditional Maharashtrian Thali',
      description: 'Authentic flavors of Maharashtra featuring puran poli, bhakri, and more'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=800&fit=crop',
      category: 'festivals',
      title: 'Ganesh Chaturthi Celebration',
      description: 'Community celebration with elaborate Ganesh idols and traditional aarti'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      category: 'cultural',
      title: 'Folk Music Evening',
      description: 'Traditional Marathi folk songs with tabla, harmonium, and local instruments'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=600&h=400&fit=crop',
      category: 'workshops',
      title: 'Warli Art Workshop',
      description: 'Learn the ancient tribal art form of Warli painting from expert artists'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      category: 'food',
      title: 'Street Food Festival',
      description: 'Mumbai street food varieties - vada pav, bhel puri, and pav bhaji'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=800&fit=crop',
      category: 'festivals',
      title: 'Navratri Garba Night',
      description: 'Nine nights of energetic garba and dandiya raas with traditional costumes'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      category: 'cultural',
      title: 'Marathi Literature Meet',
      description: 'Poetry recitation and discussion on contemporary Marathi literature'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=600&h=400&fit=crop',
      category: 'workshops',
      title: 'Traditional Craft Exhibition',
      description: 'Showcase of handmade crafts, pottery, and traditional Maharashtrian artwork'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop',
      category: 'food',
      title: 'Cooking Workshop',
      description: 'Hands-on cooking session for traditional sweets like modak and puran poli'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1578662015879-bd1746ab7958?w=600&h=800&fit=crop',
      category: 'festivals',
      title: 'Diwali Community Celebration',
      description: 'Festival of lights with diyas, rangoli competition, and cultural programs'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'cultural',
      title: 'Youth Cultural Program',
      description: 'Next generation showcasing traditional and contemporary performances'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop',
      category: 'workshops',
      title: 'Handicraft Workshop',
      description: 'Learning traditional techniques of basket weaving and pottery making'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop',
      category: 'food',
      title: 'Festival Feast',
      description: 'Community dining experience with authentic Maharashtrian delicacies'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️' },
    { id: 'festivals', name: 'Festivals', icon: '🎊' },
    { id: 'cultural', name: 'Cultural Events', icon: '🎭' },
    { id: 'workshops', name: 'Workshops', icon: '🎨' },
    { id: 'food', name: 'Food Culture', icon: '🍛' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (image) => {
    const index = filteredItems.findIndex(item => item.id === image.id);
    setCurrentImageIndex(index);
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredItems.length
      : (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentImageIndex(newIndex);
    setLightboxImage(filteredItems[newIndex]);
  };

  const handleKeyPress = (e) => {
    if (lightboxImage) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage, currentImageIndex]);

  if (isLoading) {
    return (
      <div className="gallery-container loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {/* Enhanced Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-header">
            <h2>Explore Our Memories</h2>
            <p>Filter by category to view specific types of events and celebrations</p>
          </div>
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
                <span className="tab-count">
                  ({category.id === 'all' ? galleryItems.length : galleryItems.filter(item => item.category === category.id).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item ${index % 7 === 0 || index % 7 === 3 ? 'tall' : ''} ${index % 11 === 0 ? 'wide' : ''}`}
                onClick={() => openLightbox(item)}
              >
                <div className="image-container">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/ff9933/ffffff?text=Image+Not+Found';
                    }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="category-badge">{categories.find(cat => cat.id === item.category)?.name}</div>
                      <h3 className="image-title">{item.title}</h3>
                      <p className="image-description">{item.description}</p>
                      <button className="view-button">
                        <span>View Full Image</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-counter">
                {currentImageIndex + 1} / {filteredItems.length}
              </div>
              <button className="lightbox-close" onClick={closeLightbox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="lightbox-content">
              <button 
                className="lightbox-nav prev" 
                onClick={() => navigateImage('prev')}
                disabled={filteredItems.length <= 1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              
              <div className="lightbox-image-container">
                <img src={lightboxImage.src} alt={lightboxImage.title} />
              </div>
              
              <button 
                className="lightbox-nav next" 
                onClick={() => navigateImage('next')}
                disabled={filteredItems.length <= 1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
            
            <div className="lightbox-info">
              <div className="info-content">
                <div className="category-tag">{categories.find(cat => cat.id === lightboxImage.category)?.name}</div>
                <h3>{lightboxImage.title}</h3>
                <p>{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}