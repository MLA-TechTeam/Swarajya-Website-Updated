import React, { useState, useEffect } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryItems, setGalleryItems] = useState([]);

  // Category configuration - FIXED: Updated IDs to match processed folder names
  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️', folder: null },
    { id: 'festivals', name: 'Festivals', icon: '🎊', folder: 'festivals' },
    { id: 'culturalevents', name: 'Cultural Events', icon: '🎭', folder: 'cultural events' }, // Fixed ID
    { id: 'workshops', name: 'Workshops', icon: '🎨', folder: 'workshops' },
    { id: 'foodculture', name: 'Food Culture', icon: '🍛', folder: 'food culture' } // Fixed ID
  ];

  // Function to dynamically import images from folders (Create React App - Webpack)
  const importImagesFromFolder = (folderName) => {
    try {
      const context = require.context('../data/gallery', true, /\.(png|jpe?g|svg|gif|webp)$/);
      const images = [];
      
      context.keys().forEach((item, index) => {
        const pathParts = item.split('/');
        const folderPath = pathParts[1]; // Get folder name from path
        const fileName = pathParts.pop(); // Get filename
        
        if (folderPath === folderName) {
          images.push({
            id: `${folderName}_${index}`,
            src: context(item),
            category: folderName.replace(/\s+/g, '').toLowerCase(),
            filename: fileName
          });
        }
      });
      
      return images;
    } catch (error) {
      console.error(`Error loading images from ${folderName}:`, error);
      return [];
    }
  };

  // Load images on component mount
  useEffect(() => {
    const loadAllImages = () => {
      setIsLoading(true);
      let allImages = [];

      // Load images from each category folder
      for (const category of categories) {
        if (category.folder) {
          try {
            // Using Create React App (Webpack) dynamic import
            const images = importImagesFromFolder(category.folder);
            allImages = [...allImages, ...images];
          } catch (error) {
            console.error(`Error loading images for ${category.folder}:`, error);
          }
        }
      }

      setGalleryItems(allImages);
      setIsLoading(false);
    };

    loadAllImages();
  }, []);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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

  const getItemSize = (index) => {
    const pattern = ['medium', 'small', 'large', 'medium', 'small', 'wide', 'medium', 'tall', 'small', 'medium'];
    return pattern[index % pattern.length];
  };

  return (
    <div className="gallery-container">
      {/* Filter Section */}
      <section className="filter-section">
        <div className="container3">
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

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container3">
          <div className="masonry-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`masonry-item ${getItemSize(index)}`}
                onClick={() => openLightbox(item)}
              >
                <div className="image-container">
                  <img 
                    src={item.src} 
                    alt={item.filename} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/ff9933/ffffff?text=Image+Not+Found';
                    }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <div className="category-badge">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </div>
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

      {/* Lightbox */}
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
              
              <div className="lightbox-image-wrapper">
                <img src={lightboxImage.src} alt={lightboxImage.filename} />
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
                <div className="category-tag1">
                  {categories.find(cat => cat.id === lightboxImage.category)?.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}