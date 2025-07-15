import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css'; // Assuming you're using the same styles
import React from 'react';

export default function BlogPost({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post-container">
      {/* Blog Post Header */}
      <section className="blog-post-header">
        <div className="container99">
          <div className="post-header-content">
            <button className="back-btn" onClick={() => navigate('/blogs')}>
              <svg className="back-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
              <span>Back to Blog</span>
            </button>
            <div className="post-category-tag">{post.category}</div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <div className="meta-item">
                <span className="post-author">By {post.author}</span>
              </div>
              <div className="meta-item">
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="post-featured-image">
        <div className="container1">
          <img src={post.image} alt={post.title} />
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-post-content">
        <div className="container1">
          <div className="post-content-wrapper">
            <div 
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
