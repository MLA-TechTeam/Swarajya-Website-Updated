import './AboutUs.css';
import logo from '../assets/logo.png';

import ganesh from '../data/leads-images/ganesh.jpg'
import sanjit from '../data/leads-images/sanjit.jpg'

import akhilesh from '../data/leads-images/akhilesh.jpg';

import shivam from '../data/leads-images/shivam.jpg';
import meghraj from '../data/leads-images/meghraj.jpg';

import vedant from '../data/leads-images/vedant.png';
import rajat from '../data/leads-images/rajat1.png';

import sakhi from '../data/leads-images/sakhi.png';
import sanskruti from '../data/leads-images/sanskruti.jpg';

import anay from '../data/leads-images/anay.jpg';
import ranvir from '../data/leads-images/ranvir.jpg';

import omkar from '../data/leads-images/omkar.png';
import ritesh from '../data/leads-images/ritesh.jpg';

import janhavi from '../data/leads-images/janhvi.jpg';
import varun from '../data/leads-images/varun.jpg';
import sai from '../data/leads-images/sai.png';


import vinayak from '../data/leads-images/vinayak.jpg';
import shreya from '../data/leads-images/shreya.jpg';
import sarang from '../data/leads-images/sarang.png';

import swaraj from '../data/leads-images/swaraj.png';
import nikhil from '../data/leads-images/nikhil.jpg';
import anish from '../data/leads-images/anish.jpg';


export default function AboutUs() {
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
              <div className="vice-presidents-section">
                <h4 className="department-title">President</h4>
                <div className="members-grid">
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
                <div className="members-grid two-members">
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={meghraj} alt="Meghraj Gaikwad" className="member-image" />
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
                <div className="members-grid two-members">
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={sakhi} alt="Sakhi Telang" className="member-image" />
                    </div>
                    <h5 className="member-name">Sakhi Telang</h5>
                  </div>
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={sanskruti} alt="Sanskruti Gole" className="member-image" />
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
                <div className="members-grid two-members">
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={anay} alt="Anay Patil" className="member-image" />
                    </div>
                    <h5 className="member-name">Anay Patil</h5>
                  </div>
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={ranvir} alt="Ranvir Deshmukh" className="member-image" />
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

              {/* Pathak and Lezim */}
              <div className="department-section">
                <h4 className="department-title">
                  <span className="department-icon">🥁</span> Pathak and Lezim
                </h4>
                <div className="members-grid three-members">
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={swaraj} alt="Swaraj Tekale" className="member-image" />
                    </div>
                    <h5 className="member-name">Swaraj Tekale</h5>
                  </div>
                  <div className="member-card">
                    <div className="member-image-container">
                      <img src={anish} alt="Anish Sadvilkar" className="member-image" />
                    </div>
                    <h5 className="member-name">Anish Sadvilkar</h5>
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
        </div>
      </section>
    </div>
  );
}