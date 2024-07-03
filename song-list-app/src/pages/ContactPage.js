import './ContactPage.css';
import React from 'react';
import contactImage from '../assets/contact-image.png';

const ContactPage = () => {
  return (
    <div id="contact">
      <div className="contact-section-custom">
        <h1 className="contact-title-custom">Contact Us</h1>
        <div className="contact-container-custom">
          <div className="contact-form-wrapper-custom">
            <form id="contactFormCustom">
              <div className="contact-form-group-custom">
                <label htmlFor="nameCustom" className="contact-form-label-custom">Your Name</label>
                <input type="text" id="nameCustom" name="name" className="contact-form-input-custom" required />
              </div>
              <div className="contact-form-group-custom">
                <label htmlFor="emailCustom" className="contact-form-label-custom">Your Email</label>
                <input type="email" id="emailCustom" name="email" className="contact-form-input-custom" required />
              </div>
              <div className="contact-form-group-custom">
                <label htmlFor="messageCustom" className="contact-form-label-custom">Your Message</label>
                <textarea id="messageCustom" name="message" className="contact-form-textarea-custom" rows="5" required></textarea>
              </div>
              <button type="submit" className="contact-form-button-custom">Send Message</button>
            </form>
          </div>
          <div className="contact-image-wrapper-custom">
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
