import React from 'react';
import image1 from './pictures/1.png';
import image2 from './pictures/2.jpg';
import image3 from './pictures/3.jpg';
import image4 from './pictures/4.png';
import image5 from './pictures/5.png';
import image6 from './pictures/6.jpg';
import '../App.css'; 

const teamMembers = [
  {
    name: 'Raffy Paul Carbo',
    role: 'Project Manager',
    image: image1,
  },
  {
    name: 'John Paul Sapasap',
    role: 'Backend Developer',
    image: image2,
  },
  {
    name: 'Jed Andrew Del Rosario',
    role: 'Frontend Developer',
    image: image3,
  },
  {
    name: 'Matthew Andrei Valencia',
    role: 'Marketing Strategist',
    image: image4, 
  },
  {
    name: 'Cyril Reynold Trojillo',
    role: 'Business Analyst',
    image: image6, 
  },
  {
    name: 'Joven Carl Rex Biaca',
    role: 'Quality Assurance',
    image: image5, 
  },

];

const AboutUs = () => {
  return (
    <section className="about-us-section">
      {/* Section Title */}
      <h2 className="section-title">Meet the Team</h2>
      <p className="section-subtitle">
        Get to know the creative minds behind our work!
      </p>

      {/* Team Grid */}
      <div className="team-grid">
        {/* First Row: 3 images */}
        {teamMembers.slice(0, 3).map((member, index) => (
          <div key={index} className="team-member">
            {/* Team Member Image */}
            <div className="team-member-image">
              <img src={member.image} alt={member.name} className="image-style" />
            </div>

            {/* Name and Role */}
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}

         {/* Second Row: 3 images */}
         <div className="second-row">
          {teamMembers.slice(3, 6).map((member, index) => (
            <div key={index + 3} className="team-member">
              {/* Team Member Image */}
              <div className="team-member-image">
                <img src={member.image} alt={member.name} className="image-style" />
              </div>

              {/* Name and Role */}
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>

              {/* Social Icons */}
              <div className="social-icons">
                <a href="#" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
