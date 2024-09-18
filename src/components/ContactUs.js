import React from 'react';
import './ContactUs.css';  

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-header">
        <h1>How can we serve you today?
        </h1>
        <p>At our university COOP canteen, we strive to offer you a delicious variety of meals and snacks to fuel your day. Whether you’re in between classes or taking a break, we’ve got something for everyone. Browse our menu and find your favorite dishes, from quick bites to hearty meals.</p>
      </div>

      <div className="contact-info-grid">
        <div className="contact-box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>OUR MAIN OFFICE</h3>
          <p>West Visayas State Univesity</p>
        </div>

        <div className="contact-box">
          <i className="fas fa-phone-alt"></i>
          <h3>PHONE NUMBER</h3>
          <p>09358934576 <br /> 09914499687</p>
        </div>

        <div className="contact-box">
          <i className="fas fa-clock"></i>
          <h3>Operating Hourse</h3>
          <p> Monday to Saturder <br /> 6AM - 6PM</p>
        </div>

        <div className="contact-box">
          <i className="fas fa-envelope"></i>
          <h3>EMAIL</h3>
          <p><a href="wvsu.coop@gmail.com">wvsu.coop@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
