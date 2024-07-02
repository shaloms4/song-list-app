import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="home-page" id="home">
    <div className="nav-bar">
      <div>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
      </div>
      <div>
        <span>ALPHA MUSIC</span>
      </div>
      <div>
        <a href="#songs">SONGS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
    <div className="content">
      <h1 className="main-heading">NEW ALBUM OUT</h1>
      <button className="button">LISTEN NOW</button>
    </div>
  </div>
);

export default HomePage;
