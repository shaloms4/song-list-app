import React from 'react';
import './Footer.css';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';


const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href='#'>Workshops</a></li>
          <li><a href='#'>Tour</a></li>
          <li><a href='#'>Music Research</a></li>
          <li><a href='#'>Education</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li>Phone: +251-92-272-3745</li>
          <li>Email: alphamusic@gmail.com</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <ul className="social-icons">
          <li><a href="" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="Telegram" /></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
