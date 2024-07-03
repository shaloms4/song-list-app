import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page" id="home">
      <div className={`nav-bar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-left">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
        </div>
        <div className="nav-center">
          <span>ALPHA MUSIC</span>
        </div>
        <div className="nav-right">
          <a href="#songs">SONGS</a>
          <a href="#contact">CONTACT</a>
        </div>
        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
        <a href="#songs" onClick={() => setIsMenuOpen(false)}>SONGS</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
      </div>
      <div className="content">
        <h1 className="main-heading">NEW ALBUM OUT</h1>
        <button className="button">LISTEN NOW</button>
      </div>
    </div>
  );
};

export default HomePage;
