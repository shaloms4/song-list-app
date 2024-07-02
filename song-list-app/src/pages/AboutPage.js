import './AboutPage.css';
import React from 'react';
import aboutImage from '../assets/about-image.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="left">
        <h1>About Us</h1>
        <p>
          Welcome to our music world! AlphaMusic is passionate about bringing you the best music
          experience. Our mission is to connect people through the love of music. Explore
          our collection and join us on this musical journey.
        </p>
      </div>
      <div className="right">
        <img
          src={aboutImage}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutPage;