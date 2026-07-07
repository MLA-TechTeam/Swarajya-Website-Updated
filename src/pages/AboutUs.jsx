import { useState } from 'react';
import './AboutUs.css';
import logo from '../assets/logo.png';

import ganesh from '../data/leads-images/2025-26/ganesh.jpg'
import sanjit from '../data/leads-images/2025-26/sanjit.jpg'
import akhilesh from '../data/leads-images/2025-26/akhilesh.jpg';
import shivam from '../data/leads-images/2025-26/shivam.jpg';
import vedant from '../data/leads-images/2025-26/vedant.jpg';
import rajat from '../data/leads-images/2025-26/r1.jpg';
import sakhi from '../data/leads-images/2025-26/sakhi.jpg';
import anay from '../data/leads-images/2025-26/anay.jpg';
import omkar from '../data/leads-images/2025-26/omkar.jpg';
import ritesh from '../data/leads-images/2025-26/ritesh.jpg';
import janhavi from '../data/leads-images/2025-26/janhavi.jpg';
import varun from '../data/leads-images/2025-26/varun.jpg';
import sai from '../data/leads-images/2025-26/sai.jpg';
import vinayak from '../data/leads-images/2025-26/vinayak.jpg';
import shreya from '../data/leads-images/2025-26/shreya.jpg';
import sarang from '../data/leads-images/2025-26/sarang.jpg';
import swaraj from '../data/leads-images/2025-26/swaraj.jpg';
import nikhil from '../data/leads-images/2025-26/nikhil.jpg';
import anish from '../data/leads-images/2025-26/anish.jpg';

// 2026-27 Committee Images
import sai_26 from '../data/leads-images/2026-27/sai.png';
import sharanya_26 from '../data/leads-images/2026-27/sharanya.png';
import rashi_26 from '../data/leads-images/2026-27/rashi.png';
import om_d_26 from '../data/leads-images/2026-27/om_d.png';
import vanshita_26 from '../data/leads-images/2026-27/vanshita.png';
import sharvari_26 from '../data/leads-images/2026-27/sharvari.png';
import om_j_26 from '../data/leads-images/2026-27/om_j.png';
import riddhi_26 from '../data/leads-images/2026-27/riddhi.png';
import mrun_26 from '../data/leads-images/2026-27/mrun.png';
import naman_26 from '../data/leads-images/2026-27/naman.png';
import ankana_26 from '../data/leads-images/2026-27/ankana.png';
import pranjal_26 from '../data/leads-images/2026-27/pranjal.png';
import omkar_26 from '../data/leads-images/2026-27/omkar.png';
import atharva_26 from '../data/leads-images/2026-27/atharva.png';
import shravani_26 from '../data/leads-images/2026-27/shravani.png';
import atharva_d_26 from '../data/leads-images/2026-27/atharva_d.png';
import shunyam_26 from '../data/leads-images/2026-27/shunyam.png';
import pranav_26 from '../data/leads-images/2026-27/pranav.png';


export default function AboutUs() {
  const [activeDropdown, setActiveDropdown] = useState('2026-27');

  const ProfilePlaceholder = () => (
    <div className="placeholder-avatar-container">
      <svg viewBox="0 0 24 24" className="placeholder-avatar-svg" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    </div>
  );

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero5">
        <div className="hero-overlay5">
          <div className="container5">
            <div className="hero-content5">
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container5">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Welcome to Swarajya</h2>
              <p>
                Swarajya Marathi Literary Association is a literary and cultural club located in VIT Chennai. Our aim is to promote and preserve the rich cultural heritage of Marathi literature. We believe that literature has the power to bring people together and inspire change, and we aim to use it as a tool for promoting Marathi language and culture.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <img src={logo} alt="Club Logo" className="logo-icon3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="history-section">
        <div className="container5">
          <div className="header-section80">
            <div className="committee-badge">
              <h3>Our Journey Through Time</h3>
            </div>
          </div>  
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">August 2017</div>
              <div className="timeline-content">
                <h4>Foundation</h4>
                <p>Bappa Ganesh Mandal (BGM) was founded with the aim of celebrating Ganesh Utsav and promoting Maharashtrian traditions within the VIT Chennai campus.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">September 2017</div>
              <div className="timeline-content">
                <h4>First Cultural Event</h4>
                <p>BGM successfully organized the first-ever Ganesh Utsav at VIT Chennai, laying the foundation for what would become an annual cultural highlight.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">December 2022</div>
              <div className="timeline-content">
                <h4>The Marathi Literary Association</h4>
                <p>To expand beyond festivals and promote Marathi literature and culture throughout the year, Swarajya – The Marathi Literary Association was formed as a continuation and evolution of BGM's legacy.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">June 2023</div>
              <div className="timeline-content">
                <h4>Shivrajyabhishek Sohala</h4>
                <p>Swarajya-MLA hosted its first major cultural event, the Shivrajyabhishek Sohala, celebrating the coronation of Chhatrapati Shivaji Maharaj.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">September 2023</div>
              <div className="timeline-content">
                <h4>Ganesh Utsav</h4>
                <p>In collaboration with BGM, Swarajya-MLA organized the Ganesh Utsav 2023, bringing together students and faculty for a vibrant celebration of tradition and unity.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">September 2024</div>
              <div className="timeline-content">
                <h4>2800+ Attendees</h4>
                <p>The Ganesh Utsav 2024, organized solely by Swarajya-MLA, witnessed an overwhelming response with over 2800+ attendees, becoming one of the biggest student-led events on campus.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">March 2025</div>
              <div className="timeline-content">
                <h4>Best Literary Club Award</h4>
                <p>Swarajya-MLA was honored with the Best Club Award (Literary Category) by VIT Chennai, a proud recognition of the club’s cultural, literary, and organizational excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faculty-coordinators-section">
        <div className="faculty-coordinators-wrapper">
          <div className="header-section">
            <div className="committee-badge">
              <h3>Faculty Coordinators</h3>
            </div>
          </div>
          
          <div className="faculty-grid">
            <div className="faculty-card">
              <div className="faculty-content">
                <div className="faculty-image-container">
                  <div className="faculty-image-wrapper">
                    <img 
                      src={sanjit} 
                      alt="Dr. Sanjit Das" 
                      className="faculty-image" 
                    />
                  </div>
                </div>
                <div className="faculty-text">
                  <h3 className="faculty-name">Dr. Sanjit Das</h3>
                  <p className="faculty-title">Associate Professor</p>
                  <p className="faculty-description">
                    As a coordinator for the faculty, I have been privileged to see the commitment and creativity that the members of Swarajya have shown. The activities of the club go a long way in promoting cultural sensitivity and linguistic appreciation among students. To win the 'Best Club Award' is a result of their persistent effort and team spirit. I hope that Swarajya continues to grow as a leadership, creativity, and cultural responsibility platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="faculty-grid">
            {/* First Faculty Coordinator */}
              <div className="faculty-card">
                <div className="faculty-content">
                  <div className="faculty-image-container">
                    <div className="faculty-image-wrapper">
                      <img 
                        src={ganesh} 
                        alt="Dr. Ganesh Nagorao Chilke" 
                        className="faculty-image" 
                      />
                    </div>
                  </div>
                  <div className="faculty-text">
                    <h3 className="faculty-name">Dr. Ganesh Nagorao Chilke</h3>
                    <p className="faculty-title">Assistant Professor</p>
                    <p className="faculty-description">
                      Swarajya is not just a word, it is an emotion, a testament to courage, a chronicle of history, and a legacy of values handed down through generations. Keeping these as the pillars of our Marathi Literary Association and Bappa Ganesh Mandal, we have created a small home - a home away from home, here at VIT Chennai through our club. Our club stands as a sanctuary where the warmth of tradition meets the joy of togetherness. Its purpose is simple, yet deeply touching, to rekindle these timeless ideals and to keep alive the essence of what makes us who we are.
                    </p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>  
      </section>
      <section className="core-committee-section">
        <div className="core-committee-container">
          
          <div className="committee-nav-header">
            <h2 className="committee-main-title">Our Core Committee</h2>
            <p className="committee-subheading">Select an academic year below to view the team members leading Swarajya.</p>
            
            <div className="committee-dropdowns-container">
              <div className="committee-dropdown-wrapper">
                <button 
                  className={`committee-dropdown-btn ${activeDropdown === '2025-26' ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === '2025-26' ? null : '2025-26')}
                >
                  <span className="btn-icon">📅</span>
                  <span className="btn-text">Core Committee 2025-26</span>
                  <span className="btn-arrow">{activeDropdown === '2025-26' ? '▲' : '▼'}</span>
                </button>
              </div>
              
              <div className="committee-dropdown-wrapper">
                <button 
                  className={`committee-dropdown-btn ${activeDropdown === '2026-27' ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === '2026-27' ? null : '2026-27')}
                >
                  <span className="btn-icon">📅</span>
                  <span className="btn-text">Core Committee 2026-27</span>
                  <span className="btn-arrow">{activeDropdown === '2026-27' ? '▲' : '▼'}</span>
                </button>
              </div>
            </div>
          </div>

          {activeDropdown === '2025-26' && (
            <div className="committee-wrapper slide-down">
              {/* Executive Board */}
              <div className="executive-board-section">
                <h3 className="section-title">
                  <span className="section-icon">🏛️</span> Executive Board
                </h3>
                
                {/* President */}
                <div className="vice-presidents-section">
                  <h4 className="department-title">President</h4>
                  <div className="members-grid single-member">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={akhilesh} alt="Akhilesh Deshmukh" className="member-image" />
                      </div>
                      <h5 className="member-name">Akhilesh Deshmukh</h5>
                    </div>
                  </div>
                </div>

                {/* Vice Presidents */}
                <div className="vice-presidents-section">
                  <h4 className="department-title">Vice Presidents</h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={vedant} alt="Vedant Deshpande" className="member-image" />
                      </div>
                      <h5 className="member-name">Vedant Deshpande</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={rajat} alt="Rajat Murhe" className="member-image" />
                      </div>
                      <h5 className="member-name">Rajat Murhe</h5>
                    </div>
                  </div>
                </div>

                {/* General Secretaries */}
                <div className="general-secretaries-section">
                  <h4 className="department-title">General Secretaries</h4>
                  <div className="members-grid single-member">
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

                {/* Design And Content */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🎨</span> Design And Content
                  </h4>
                  <div className="members-grid single-member">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={sakhi} alt="Sakhi Telang" className="member-image" />
                      </div>
                      <h5 className="member-name">Sakhi Telang</h5>
                    </div>
                  </div>
                </div>

                {/* Social Media and Photography */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🌐</span> Social Media & Photography
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={anay} alt="Anay Patil" className="member-image" />
                      </div>
                      <h5 className="member-name">Anay Patil</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={anish} alt="Anish Sadvilkar" className="member-image" />
                      </div>
                      <h5 className="member-name">Anish Sadvilkar</h5>
                    </div>
                  </div>
                </div>

                {/* Technical */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">💻</span> Technical
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={omkar} alt="Omkar Pawar" className="member-image" />
                      </div>
                      <h5 className="member-name">Omkar Pawar</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={ritesh} alt="Ritesh Chaudhari" className="member-image" />
                      </div>
                      <h5 className="member-name">Ritesh Chaudhari</h5>
                    </div>
                  </div>
                </div>

                {/* Cultural */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🎭</span> Cultural
                  </h4>
                  <div className="members-grid three-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={janhavi} alt="Janhavi Dessai" className="member-image" />
                      </div>
                      <h5 className="member-name">Janhavi Dessai</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={varun} alt="Varun V" className="member-image" />
                      </div>
                      <h5 className="member-name">Varun V</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={sai} alt="Sai Tandel" className="member-image" />
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
                  <div className="members-grid three-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={vinayak} alt="Vinayak Rathod" className="member-image" />
                      </div>
                      <h5 className="member-name">Vinayak Rathod</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={shreya} alt="Shreya Mahajan" className="member-image" />
                      </div>
                      <h5 className="member-name">Shreya Mahajan</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={sarang} alt="Sarang Ingavle" className="member-image" />
                      </div>
                      <h5 className="member-name">Sarang Ingavale</h5>
                    </div>
                  </div>
                </div>

                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🥁</span> Pathak and Lezim
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={swaraj} alt="Swaraj Tekale" className="member-image" />
                      </div>
                      <h5 className="member-name">Swaraj Tekale</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={nikhil} alt="Nikhil Parkar" className="member-image" />
                      </div>
                      <h5 className="member-name">Nikhil Parkar</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDropdown === '2026-27' && (
            <div className="committee-wrapper slide-down">
              {/* Executive Board */}
              <div className="executive-board-section">
                <h3 className="section-title">
                  <span className="section-icon">🏛️</span> Executive Board
                </h3>
                
                <div className="members-grid four-members">
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={sai_26} alt="Sai Kadam" className="member-image" />
                    </div>
                    <h5 className="member-name">Sai Kadam</h5>
                  </div>
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={sharanya_26} alt="Sharanya Ahire" className="member-image" />
                    </div>
                    <h5 className="member-name">Sharanya Ahire</h5>
                  </div>
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={rashi_26} alt="Rashi Palod" className="member-image" />
                    </div>
                    <h5 className="member-name">Rashi Palod</h5>
                  </div>
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={om_d_26} alt="Om Deshmukh" className="member-image" />
                    </div>
                    <h5 className="member-name">Om Deshmukh</h5>
                  </div>
                </div>
              </div>

              {/* Department Leads */}
              <div className="department-leads-section">
                <h3 className="section-title">
                  <span className="section-icon">🏢</span> Department Leads
                </h3>

                {/* Design And Content */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🎨</span> Design And Content
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={vanshita_26} alt="Vanshita Patil" className="member-image" />
                      </div>
                      <h5 className="member-name">Vanshita Patil</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={sharvari_26} alt="Sharvari Mahurkar" className="member-image" />
                      </div>
                      <h5 className="member-name">Sharvari Mahurkar</h5>
                    </div>
                  </div>
                </div>

                {/* Social Media and Photography */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🌐</span> Social Media & Photography
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={om_j_26} alt="Om Jadhav" className="member-image" />
                      </div>
                      <h5 className="member-name">Om Jadhav</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={riddhi_26} alt="Riddhi Marathe" className="member-image" />
                      </div>
                      <h5 className="member-name">Riddhi Marathe</h5>
                    </div>
                  </div>
                </div>

                {/* Technical */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">💻</span> Technical
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={mrun_26} alt="Mrunmayee Kulat" className="member-image" />
                      </div>
                      <h5 className="member-name">Mrunmayee Kulat</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={naman_26} alt="Naman Ghodake" className="member-image" />
                      </div>
                      <h5 className="member-name">Naman Ghodake</h5>
                    </div>
                  </div>
                </div>

                {/* Cultural */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">🎭</span> Cultural
                  </h4>
                  <div className="members-grid three-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={ankana_26} alt="Ankana Datta" className="member-image" />
                      </div>
                      <h5 className="member-name">Ankana Datta</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={pranav_26} alt="Pranav Bhujbal" className="member-image" />
                      </div>
                      <h5 className="member-name">Pranav Bhujbal</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={pranjal_26} alt="Pranjal Dadsena" className="member-image" />
                      </div>
                      <h5 className="member-name">Pranjal Dadsena</h5>
                    </div>
                  </div>
                </div>

                {/* Operations */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">⚙️</span> Operations
                  </h4>
                  <div className="members-grid three-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={omkar_26} alt="Omkar Jagtap" className="member-image" />
                      </div>
                      <h5 className="member-name">Omkar Jagtap</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={atharva_26} alt="Atharva Chougule" className="member-image" />
                      </div>
                      <h5 className="member-name">Atharva Chougule</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={shravani_26} alt="Shravani Choudhari" className="member-image" />
                      </div>
                      <h5 className="member-name">Shravani Choudhari</h5>
                    </div>
                  </div>
                </div>

                {/* Finance And Outreach */}
                <div className="department-section">
                  <h4 className="department-title">
                    <span className="department-icon">💰</span> Finance And Outreach
                  </h4>
                  <div className="members-grid two-members">
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={atharva_d_26} alt="Atharva Deshpande" className="member-image" />
                      </div>
                      <h5 className="member-name">Atharva Deshpande</h5>
                    </div>
                    <div className="member-card">
                      <div className="member-image-container">
                        <img src={shunyam_26} alt="Shunyamprakash Firke" className="member-image" />
                      </div>
                      <h5 className="member-name">Shunyamprakash Firke</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}