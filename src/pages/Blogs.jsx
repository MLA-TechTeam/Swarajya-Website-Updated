import './Blogs.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogdata';

export default function Blog() {
  const categories = ["All", "Festivals", "Food & Culture", "Arts & Crafts", "History", "Community", "Devotional"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (post) => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    navigate(`/blogs/${post.id}`);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    // Scroll to top when going back to blog list
    window.scrollTo(0, 0);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If a post is selected, show the individual blog post page
  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBackToBlog} blogPosts={blogPosts} onReadMore={handleReadMore} />;
  }

  return (
    <div className="blog-container">
      {/* Blog Header */}
      <section className="blog-header">
        <div className="container">
          <h1 className="blog-title">
            स्वराज्य Blog
            <span className="blog-subtitle">Stories, Culture & Heritage</span>
          </h1>
          <p className="blog-description">
            Discover stories that celebrate our rich Maharashtrian heritage, explore cultural traditions, 
            and stay connected with our vibrant community.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container1">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container1">
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="category-tag">{post.category}</div>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                    {/* <span className="read-time">{post.readTime}</span> */}
                  </div>
                  
                  <h2 className="blog-post-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <button 
                    className="read-more-btn"
                    onClick={() => handleReadMore(post)}
                  >
                    Read More
                    <span className="arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Individual Blog Post Component
function BlogPost({ post, onBack, blogPosts, onReadMore }) {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-post-container">
      <div className="container">
        <button className="back-btn" onClick={onBack}>
          ← Back to Blog
        </button>
        
        <article className="blog-post">
          <div className="blog-post-header">
            <div className="category-tag">{post.category}</div>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-meta">
              <span className="author">{post.author}</span>
              <span className="date">{post.date}</span>
            </div>
          </div>
          
          <div className="blog-post-image">
            <img src={post.image} alt={post.title} />
          </div>
          
          <div className="blog-post-content">
            <p className="blog-excerpt">{post.excerpt}</p>
            {post.content && (
              <div className="blog-content-body">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}