import './Blogs.css';
import { useState } from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Celebrating Ganesh Chaturthi: A Cultural Journey",
      excerpt: "Explore the rich traditions and customs of Maharashtra's most beloved festival, from eco-friendly celebrations to community bonding.",
      content: "Ganesh Chaturthi is not just a festival; it's a celebration of unity, devotion, and cultural pride that brings together communities across Maharashtra...",
      author: "Priya Sharma",
      date: "May 28, 2025",
      category: "Festivals",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Traditional Maharashtrian Cuisine: A Culinary Heritage",
      excerpt: "Discover the authentic flavors of Maharashtra through traditional recipes passed down through generations.",
      content: "From the spicy misal pav to the sweet puran poli, Maharashtrian cuisine reflects the diverse culture and agricultural richness of the state...",
      author: "Rajesh Patil",
      date: "May 25, 2025",
      category: "Food & Culture",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Warli Art: Preserving Ancient Tribal Traditions",
      excerpt: "Learn about the beautiful Warli art form and how modern artists are keeping this ancient tradition alive.",
      content: "Warli painting is a form of tribal art mostly created by the tribal people from the North Sahyadri Range in Maharashtra...",
      author: "Anita Desai",
      date: "May 22, 2025",
      category: "Arts & Crafts",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Legacy of Chhatrapati Shivaji Maharaj",
      excerpt: "Understanding the historical significance and lasting impact of the great Maratha warrior king on Maharashtra's identity.",
      content: "Chhatrapati Shivaji Maharaj remains an enduring symbol of courage, leadership, and cultural pride for every Maharashtrian...",
      author: "Dr. Vinayak Kulkarni",
      date: "May 20, 2025",
      category: "History",
      image: "https://images.unsplash.com/photo-1609664406046-0bd84e5c9cbe?w=600&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Community Service: Building Stronger Bonds",
      excerpt: "How our organization is making a difference in local communities through various social initiatives and volunteer programs.",
      content: "Community service has always been at the heart of Maharashtrian values. Our recent initiatives have touched many lives...",
      author: "Sunita Joshi",
      date: "May 18, 2025",
      category: "Community",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Learning Marathi: Connecting with Our Roots",
      excerpt: "Tips and resources for learning and teaching Marathi language to preserve our linguistic heritage.",
      content: "Language is the soul of culture. As we spread across the globe, maintaining our connection to Marathi becomes even more important...",
      author: "Prof. Madhav Gokhale",
      date: "May 15, 2025",
      category: "Language",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Festivals", "Food & Culture", "Arts & Crafts", "History", "Community", "Language"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

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
        <div className="container">
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
        <div className="container">
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
                    <span className="read-time">{post.readTime}</span>
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
  const fullContent = {
    1: `
      <h2>The Spirit of Ganapati Bappa</h2>
      <p>Ganesh Chaturthi is not just a festival; it's a celebration of unity, devotion, and cultural pride that brings together communities across Maharashtra. Every year, as the monsoon clouds gather over the Western Ghats, the air fills with anticipation for the arrival of our beloved Ganapati Bappa.</p>
      
      <h3>Origins and Significance</h3>
      <p>The festival has its roots in ancient Hindu traditions, but it was Lokmanya Tilak who transformed it into a grand public celebration in 1893. His vision was to unite people across caste and class divisions, creating a sense of national identity during the struggle for independence.</p>
      
      <h3>Modern Celebrations</h3>
      <p>Today's celebrations have evolved to include elaborate pandals, artistic installations, and eco-friendly initiatives. Communities compete to create the most beautiful and meaningful displays, often incorporating social messages and environmental awareness.</p>
      
      <h3>The Art of Modak Making</h3>
      <p>No Ganesh Chaturthi is complete without modaks - Lord Ganesha's favorite sweet. Families gather to prepare these delicate dumplings filled with jaggery and coconut, sharing stories and strengthening bonds across generations.</p>
      
      <h3>Community Bonding</h3>
      <p>The festival brings neighborhoods together like no other. From planning committees to cultural programs, every member of the community contributes their skills and time. It's during these eleven days that social barriers dissolve, and the true spirit of Maharashtra shines through.</p>
      
      <h3>Eco-Friendly Initiatives</h3>
      <p>Modern celebrations increasingly focus on environmental consciousness. Clay Ganeshas, natural colors, and proper immersion protocols ensure that our devotion doesn't harm the environment. This shift represents the evolving consciousness of Maharashtrian society.</p>
      
      <p>As we bid farewell with "Ganpati Bappa Morya, Mangal Murti Morya," we carry forward not just religious fervor, but also the values of unity, creativity, and community service that define our cultural identity.</p>
    `,
    2: `
      <h2>A Culinary Journey Through Maharashtra</h2>
      <p>From the spicy misal pav to the sweet puran poli, Maharashtrian cuisine reflects the diverse culture and agricultural richness of the state. Each region brings its unique flavors, creating a tapestry of tastes that tells the story of our land.</p>
      
      <h3>Regional Specialties</h3>
      <p>The Konkan coast offers us fresh seafood preparations like koliwada prawns and bombil fry, while the Western Ghats contribute spicy bharleli vangi and pitla bhakri. Vidarbha region is famous for its saoji cuisine and the iconic orange barfi.</p>
      
      <h3>Street Food Culture</h3>
      <p>Mumbai's street food scene is legendary - from the tangy pani puri to the hearty vada pav. These dishes represent the fast-paced life of the city while maintaining their traditional roots. Each street corner tells a story through its food offerings.</p>
      
      <h3>Festival Foods</h3>
      <p>Every festival in Maharashtra has its special dishes. Gudi Padwa brings puran poli and shrikhand, while Diwali is incomplete without karanji and chakli. These foods aren't just sustenance; they're expressions of love, tradition, and celebration.</p>
      
      <h3>Traditional Cooking Methods</h3>
      <p>The traditional methods of cooking - using clay pots, wood fires, and stone grinders - impart unique flavors that modern appliances cannot replicate. These techniques, passed down through generations, are part of our culinary heritage.</p>
      
      <h3>Health and Nutrition</h3>
      <p>Maharashtrian cuisine naturally incorporates principles of Ayurveda. The use of spices like turmeric, cumin, and coriander not only enhances flavor but also provides health benefits. The balanced combination of grains, legumes, and vegetables ensures nutritional completeness.</p>
      
      <p>As we preserve these recipes and techniques, we maintain our connection to the land, our ancestors, and our cultural identity. Every meal becomes a celebration of our heritage.</p>
    `,
    3: `
      <h2>The Timeless Art of Warli</h2>
      <p>Warli painting is a form of tribal art mostly created by the tribal people from the North Sahyadri Range in Maharashtra. This ancient art form, dating back to 2500-3000 BCE, continues to captivate art lovers worldwide with its simplicity and profound meaning.</p>
      
      <h3>Origins and Mythology</h3>
      <p>The Warli tribe has been practicing this art form for over 2500 years. Originally painted on the walls of their homes using white pigment made from rice paste, these paintings were believed to bring good luck and prosperity to the household.</p>
      
      <h3>Symbolic Elements</h3>
      <p>Warli art uses basic geometric shapes - circles, triangles, and lines - to create complex compositions. The circle represents the sun and moon, triangles depict mountains and trees, while straight lines portray human figures and animals in motion.</p>
      
      <h3>Traditional Themes</h3>
      <p>The paintings typically depict scenes from daily life - farming, hunting, festivals, and community gatherings. The central motif is often the tarpa dance, where people hold hands and dance in a circle around a tarpa player, symbolizing unity and celebration.</p>
      
      <h3>Modern Adaptations</h3>
      <p>Contemporary Warli artists have expanded beyond traditional walls to canvas, paper, and even digital mediums. While maintaining the essential style, modern interpretations include social messages, environmental awareness, and contemporary themes.</p>
      
      <h3>Cultural Preservation</h3>
      <p>Efforts to preserve and promote Warli art include workshops, exhibitions, and integration into modern design. Government initiatives and NGOs work with tribal communities to ensure this art form continues to thrive while providing livelihood opportunities.</p>
      
      <h3>Global Recognition</h3>
      <p>Warli art has gained international recognition, influencing contemporary artists and designers worldwide. Its minimalist aesthetic and profound symbolism resonate with modern audiences seeking authentic cultural expressions.</p>
      
      <p>Through Warli art, we glimpse into the soul of tribal Maharashtra - a world where art serves not just aesthetic purposes but also spiritual and social functions, connecting communities to their roots and environment.</p>
    `,
    4: `
      <h2>The Great Maratha Empire</h2>
      <p>Chhatrapati Shivaji Maharaj remains an enduring symbol of courage, leadership, and cultural pride for every Maharashtrian. His vision of Hindavi Swarajya established principles of governance, military strategy, and cultural preservation that continue to inspire us today.</p>
      
      <h3>Early Life and Formation</h3>
      <p>Born in 1630 at Shivneri Fort, Shivaji was influenced by his mother Jijabai's stories of great heroes and his mentor Dadoji Konddeo's teachings about administration and warfare. These early influences shaped his character and vision for an independent Maratha state.</p>
      
      <h3>Military Innovation</h3>
      <p>Shivaji revolutionized warfare in the Deccan through guerrilla tactics, fort construction, and naval power. His army was known for its mobility, discipline, and loyalty. The concept of 'Ganimi Kava' (guerrilla warfare) proved highly effective against larger Mughal forces.</p>
      
      <h3>Administrative Genius</h3>
      <p>The Maratha administrative system was progressive for its time. Shivaji established the Ashta Pradhan (council of eight ministers), promoted local languages, and maintained detailed revenue records. His policies protected farmers and traders while building a strong economy.</p>
      
      <h3>Cultural Renaissance</h3>
      <p>Under Maratha rule, Marathi literature, arts, and architecture flourished. Shivaji promoted Sanskrit learning while supporting vernacular languages. Temples were restored, and cultural festivals were patronized, creating a distinct Maratha identity.</p>
      
      <h3>Religious Tolerance</h3>
      <p>Despite being a devout Hindu, Shivaji practiced religious tolerance. He protected mosques and churches, employed Muslims in his administration, and respected all faiths. This policy strengthened his empire and earned widespread support.</p>
      
      <h3>Legacy and Inspiration</h3>
      <p>Shivaji's principles of good governance, military excellence, and cultural pride continue to inspire modern Maharashtra. His emphasis on 'Swarajya' (self-rule) influenced India's independence movement, and his ideals remain relevant in contemporary politics and society.</p>
      
      <p>The legacy of Chhatrapati Shivaji Maharaj transcends history to become a living inspiration for leadership, courage, and cultural pride that defines the Marathi identity.</p>
    `,
    5: `
      <h2>Building Stronger Communities Together</h2>
      <p>Community service has always been at the heart of Maharashtrian values. Our recent initiatives have touched many lives, creating ripples of positive change that strengthen the fabric of our society. Through collective action, we demonstrate the power of unity in addressing social challenges.</p>
      
      <h3>Education Initiatives</h3>
      <p>Our scholarship programs have supported over 200 students from underprivileged backgrounds. We've established computer labs in rural schools and conducted career guidance sessions, ensuring that every child has access to quality education regardless of their economic situation.</p>
      
      <h3>Healthcare Outreach</h3>
      <p>Free health camps in remote villages have provided medical checkups to thousands of people. Our partnership with local doctors and hospitals has made specialized healthcare accessible to communities that previously had limited medical resources.</p>
      
      <h3>Cultural Preservation</h3>
      <p>We've documented traditional folk songs, dances, and crafts through our cultural preservation project. Elder community members share their knowledge with younger generations, ensuring that our rich heritage continues to thrive in modern times.</p>
      
      <h3>Environmental Action</h3>
      <p>Tree plantation drives, plastic cleanup campaigns, and water conservation projects have made our communities more environmentally conscious. These initiatives not only improve our surroundings but also educate people about sustainable living practices.</p>
      
      <h3>Disaster Relief</h3>
      <p>During natural calamities, our rapid response teams have provided immediate relief including food, water, and temporary shelter. Our disaster preparedness programs have trained community volunteers to handle emergency situations effectively.</p>
      
      <h3>Youth Empowerment</h3>
      <p>Skill development workshops have equipped young people with employable skills. From computer literacy to traditional crafts, these programs create opportunities for economic independence while preserving cultural knowledge.</p>
      
      <p>These initiatives remind us that true strength lies in our unity and commitment to helping one another. Every small action contributes to building a stronger, more compassionate community.</p>
    `,
    6: `
      <h2>मराठी भाषा: Our Cultural Soul</h2>
      <p>Language is the soul of culture. As we spread across the globe, maintaining our connection to Marathi becomes even more important. It's not just about communication; it's about preserving our identity, literature, and the unique way we perceive the world.</p>
      
      <h3>The Beauty of Marathi Literature</h3>
      <p>From the devotional poetry of Sant Tukaram to the modern writings of P.L. Deshpande, Marathi literature offers a rich tapestry of human experience. Reading these works connects us to centuries of wisdom, humor, and spiritual insight.</p>
      
      <h3>Teaching Marathi to Children</h3>
      <p>For families living outside Maharashtra, teaching Marathi to children requires creativity and dedication. Story-telling sessions, cultural programs, and connecting with local Marathi communities help children develop a love for their mother tongue.</p>
      
      <h3>Digital Resources</h3>
      <p>Modern technology offers new ways to learn and practice Marathi. Online courses, mobile apps, and digital libraries make Marathi literature and learning materials accessible worldwide. These tools help bridge geographical distances.</p>
      
      <h3>Cultural Context</h3>
      <p>Learning Marathi isn't just about grammar and vocabulary; it's about understanding cultural nuances, festivals, traditions, and the Maharashtrian way of life. Language carries the essence of our cultural values and worldview.</p>
      
      <h3>Community Initiatives</h3>
      <p>Marathi schools, cultural associations, and community centers play crucial roles in language preservation. These institutions create environments where Marathi naturally flows in conversations, celebrations, and daily interactions.</p>
      
      <h3>Professional Opportunities</h3>
      <p>Knowledge of Marathi opens doors to careers in journalism, entertainment, literature, and business within Maharashtra. As the state's economy grows, multilingual professionals with strong Marathi skills find unique opportunities.</p>
      
      <p>Preserving and promoting Marathi is not just about language; it's about maintaining our connection to our roots while embracing the future. Every conversation in Marathi strengthens our cultural bond.</p>
    `
  };

  return (
    <div className="blog-post-container">
      {/* Blog Post Header */}
      // Enhanced JSX
<section className="blog-post-header">
  <div className="container">
    <div className="post-header-content">
        <button className="back-btn" onClick={onBack}>
      <svg className="back-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
      <span>Back to Blog</span>
    </button>
      <div className="post-category-tag">{post.category}</div>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        <div className="meta-item">
          <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <span className="post-author">By {post.author}</span>
        </div>
        <div className="meta-item">
          <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V9h14v11z"/>
          </svg>
          <span className="post-date">{post.date}</span>
        </div>
        <div className="meta-item">
          <svg className="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span className="post-read-time">{post.readTime}</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Featured Image */}
      <section className="post-featured-image">
        <div className="container">
          <img src={post.image} alt={post.title} />
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-post-content">
        <div className="container">
          <div className="post-content-wrapper">
            <div 
              className="post-content"
              dangerouslySetInnerHTML={{ __html: fullContent[post.id] || post.content }}
            />
            {/* Author Bio */}
            <div className="author-bio">
              <div className="author-avatar">
                <div className="avatar-placeholder">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              <div className="author-info">
                <h4>{post.author}</h4>
              </div>
            </div>
            {/* Social Share */}
            <div className="social-share">
              <h4>Share this article</h4>
              <div className="share-buttons">
                <button className="share-btn facebook">Facebook</button>
                <button className="share-btn twitter">Twitter</button>
                <button className="share-btn linkedin">LinkedIn</button>
                <button className="share-btn whatsapp">WhatsApp</button>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
}