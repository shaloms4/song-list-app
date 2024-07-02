import './AboutPage.css';
import React from 'react';
import aboutImage from '../assets/about-image.jpg';

const AboutPage = () => {
  return (
    <div className="about-page" id="about">
      <div className="left">
        <h1>About Us</h1>
        <p>
          Welcome to our music world! AlphaMusic is passionate about bringing you the best music
          experience. Our mission is to connect people through the love of music. Explore
          our collection and join us on this musical journey.
          Discover the rhythm and harmony at AlphaMusic! We strive to provide an unparalleled musical 
          experience. Our goal is to unite music enthusiasts worldwide. Dive into our vast collection and 
          embark on a musical adventure with us.
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