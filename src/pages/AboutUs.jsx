import './AboutUs.css';
import logo from '../assets/logo.png';
import shreya from '../assets/shreya.jpg';
import shivam from '../assets/shivam.jpg';

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero5">
        <div className="hero-overlay5">
          <div className="container5">
            <div className="hero-content5">
              <h1 className="hero-title5">
                आमच्याबद्दल
                {/* <span className="hero-subtitle5">About Our Heritage</span> */}
              </h1>
              {/* <p className="hero-description5">
                Celebrating the rich cultural legacy of Maharashtra while building bridges for future generations
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Welcome to Maharashtra Mandal</h2>
              <p className="intro-lead">
                For over three decades, Maharashtra Mandal has been the beating heart of Maharashtrian culture 
                in our community, preserving traditions while embracing progress.
              </p>
              <p>
                Founded in 1990 by a group of passionate Maharashtrians, our organization has grown from a 
                small gathering of families to a vibrant community of over 500 active members. We are united 
                by our love for Maharashtra's rich heritage, its language, festivals, and values.
              </p>
              <p>
                Our mission extends beyond cultural preservation. We strive to create a supportive network 
                that helps fellow Maharashtrians thrive while maintaining their cultural identity in an 
                ever-evolving world.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <img src={logo} alt="Club Logo" className="logo-icon" />
                <p>Community Gathering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="mvv-section">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card mission-card">
              <div className="mvv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To preserve, promote, and celebrate Maharashtrian culture while fostering unity, 
                support, and growth within our community. We aim to be a bridge between tradition 
                and modernity, ensuring our rich heritage thrives for generations to come.
              </p>
            </div>
            <div className="mvv-card vision-card">
              <div className="mvv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the premier cultural organization that connects Maharashtrians worldwide, 
                creating a global network of individuals who are proud of their heritage and 
                committed to contributing positively to society.
              </p>
            </div>
            <div className="mvv-card values-card">
              <div className="mvv-icon">💎</div>
              <h3>Our Values</h3>
              <ul>
                <li>Cultural Pride & Preservation</li>
                <li>Community Support & Unity</li>
                <li>Inclusivity & Respect</li>
                <li>Excellence & Innovation</li>
                <li>Service & Social Responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section">
        <div className="container">
          <h2 className="section-title">Our Journey Through Time</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1990</div>
              <div className="timeline-content">
                <h4>Foundation</h4>
                <p>Maharashtra Mandal was established by 15 founding families with a vision to preserve our cultural heritage.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-content">
                <h4>First Cultural Center</h4>
                <p>Acquired our first dedicated space for cultural activities and community gatherings.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2000</div>
              <div className="timeline-content">
                <h4>Youth Programs Launch</h4>
                <p>Initiated youth-focused programs including Marathi language classes and cultural workshops.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h4>Digital Expansion</h4>
                <p>Launched our online presence and began virtual cultural programs to reach wider audiences.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>500+ Members</h4>
                <p>Reached a milestone of 500+ active members across different age groups and backgrounds.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Modern Digital Platform</h4>
                <p>Launched our comprehensive website and mobile app for better community engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faculty-coordinators-section">
  <div className="faculty-coordinators-wrapper">
    <h2 className="faculty-section-title">Faculty Coordinators</h2>
    <p className="faculty-subtitle">
      Guiding our community with wisdom and dedication
    </p>
    
    <div className="faculty-grid">
      {/* First Faculty Coordinator */}
      <div className="faculty-card">
        <div className="faculty-content">
          <div className="faculty-image-container">
            <div className="faculty-image-wrapper">
              <img 
                src="/api/placeholder/300/300" 
                alt="Dr. Priya Sharma" 
                className="faculty-image" 
              />
            </div>
          </div>
          <div className="faculty-text">
            <h3 className="faculty-name">Dr. Priya Sharma</h3>
            <p className="faculty-title">Senior Faculty Coordinator</p>
            <p className="faculty-description">
              With over 15 years of experience in cultural preservation and community 
              development, Dr. Sharma has been instrumental in shaping the educational 
              initiatives of Maharashtra Mandal. Her expertise in Marathi literature 
              and performing arts has enriched countless lives in our community.
            </p>
            <div className="faculty-quote">
              Culture is not just about preserving the past, but about creating a 
              bridge that connects our heritage to the aspirations of future generations.
            </div>
            <div className="faculty-achievements">
              <h4>Key Contributions:</h4>
              <div className="achievements-list">
                <div className="achievement-item">Marathi Language Program Development</div>
                <div className="achievement-item">Youth Cultural Mentorship</div>
                <div className="achievement-item">Community Research Initiatives</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Faculty Coordinator */}
      <div className="faculty-card">
        <div className="faculty-content reverse">
          <div className="faculty-text">
            <h3 className="faculty-name">Prof. Rajesh Patil</h3>
            <p className="faculty-title">Cultural Affairs Coordinator</p>
            <p className="faculty-description">
              A renowned scholar in Maharashtrian history and traditions, Prof. Patil 
              brings deep academic insight to our cultural programs. His passion for 
              folk arts and traditional music has helped preserve and promote various 
              art forms within our community.
            </p>
            <div className="faculty-quote">
              Every tradition carries within it the wisdom of generations. Our role is 
              to ensure this wisdom finds its voice in the contemporary world.
            </div>
            <div className="faculty-achievements">
              <h4>Key Contributions:</h4>
              <div className="achievements-list">
                <div className="achievement-item">Traditional Arts Documentation</div>
                <div className="achievement-item">Festival Organization & Planning</div>
                <div className="achievement-item">Inter-community Cultural Exchange</div>
              </div>
            </div>
          </div>
          <div className="faculty-image-container">
            <div className="faculty-image-wrapper">
              <img 
                src="/api/placeholder/300/300" 
                alt="Prof. Rajesh Patil" 
                className="faculty-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <div className="core-committee-container">
        <div className="committee-wrapper">
          {/* Header */}
          <div className="header-section">
            <div className="committee-badge">
              <h3>Core Committee 2025-26</h3>
            </div>
          </div>

          {/* Executive Board */}
          <div className="executive-board-section">
            <h3 className="section-title">
              <span className="section-icon">🏛️</span> Executive Board
            </h3>
            
            {/* President */}
            <div className="president-section">
              <h4 className="subsection-title">President</h4>
              <div className="member-card president-card">
                <div className="member-image-container">
                  <img src="/api/placeholder/150/150" alt="Akhilesh Deshmukh" className="member-image" />
                </div>
                <h5 className="member-name">Akhilesh Deshmukh</h5>
              </div>
            </div>

            {/* Vice Presidents */}
            <div className="vice-presidents-section">
              <h4 className="subsection-title">Vice Presidents</h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Vedant Deshpande" className="member-image" />
                  </div>
                  <h5 className="member-name">Vedant Deshpande</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Rajat Murhe" className="member-image" />
                  </div>
                  <h5 className="member-name">Rajat Murhe</h5>
                </div>
              </div>
            </div>

            {/* General Secretaries */}
            <div className="general-secretaries-section">
              <h4 className="subsection-title">General Secretaries</h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Meghraj Gaikwad" className="member-image" />
                  </div>
                  <h5 className="member-name">Meghraj Gaikwad</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src={shivam} alt="Shivam Chavan" className="member-image" />
                  </div>
                  <h5 className="member-name">Shivam Chavan</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Department Leads */}
          <div className="department-leads-section">
            <h3 className="section-title">
              <span className="section-icon">🏢</span> Department Leads
            </h3>

            {/* Design and Content */}
            <div className="department-section">
              <h4 className="department-title">
                <span className="department-icon">🎨</span> Design and Content
              </h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Sakhi Telang" className="member-image" />
                  </div>
                  <h5 className="member-name">Sakhi Telang</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Sanskruti Gole" className="member-image" />
                  </div>
                  <h5 className="member-name">Sanskruti Gole</h5>
                </div>
              </div>
            </div>

            {/* Social Media and Photography */}
            <div className="department-section">
              <h4 className="department-title">
                <span className="department-icon">📸</span> Social Media & Photography
              </h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Anay Patil" className="member-image" />
                  </div>
                  <h5 className="member-name">Anay Patil</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Ranvir Deshmukh" className="member-image" />
                  </div>
                  <h5 className="member-name">Ranvir Deshmukh</h5>
                </div>
              </div>
            </div>

            {/* Technical */}
            <div className="department-section">
              <h4 className="department-title">
                <span className="department-icon">💻</span> Technical
              </h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Omkar Pawar" className="member-image" />
                  </div>
                  <h5 className="member-name">Omkar Pawar</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Ritesh Choudhary" className="member-image" />
                  </div>
                  <h5 className="member-name">Ritesh Choudhary</h5>
                </div>
              </div>
            </div>

            {/* Cultural */}
            <div className="department-section">
              <h4 className="department-title">
                <span className="department-icon">🎭</span> Cultural
              </h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Janhavi Dessai" className="member-image" />
                  </div>
                  <h5 className="member-name">Janhavi Dessai</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Varun V" className="member-image" />
                  </div>
                  <h5 className="member-name">Varun V</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Sai Tandel" className="member-image" />
                  </div>
                  <h5 className="member-name">Sai Tandel</h5>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="department-section">
              <h4 className="department-title">
                <span className="department-icon">⚙️</span> Operations
              </h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Vinayak Rathod" className="member-image" />
                  </div>
                  <h5 className="member-name">Vinayak Rathod</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src={shreya} className="member-image" />
                  </div>
                  <h5 className="member-name">Shreya Mahajan</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Sarang Ingavle" className="member-image" />
                  </div>
                  <h5 className="member-name">Sarang Ingavle</h5>
                </div>
              </div>
            </div>

            {/* Pathak and Lezim */}
            <div className="department-section">
              <h4 className="department-title">
                <span className="department-icon">🥁</span> Pathak and Lezim
              </h4>
              <div className="members-grid">
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Swaraj Tekale" className="member-image" />
                  </div>
                  <h5 className="member-name">Swaraj Tekale</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Anish Sadvilkar" className="member-image" />
                  </div>
                  <h5 className="member-name">Anish Sadvilkar</h5>
                </div>
                <div className="member-card">
                  <div className="member-image-container">
                    <img src="/api/placeholder/150/150" alt="Nikhil Parker" className="member-image" />
                  </div>
                  <h5 className="member-name">Nikhil Parker</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}