import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="home-page">
    <div className="nav-bar">
      <div>
        <a href="#home">HOME</a>
        <a href="#listen">ABOUT</a>
      </div>
      <div>
        <span>ALPHA MUSIC</span>
      </div>
      <div>
        <a href="#bookings">SONGS</a>
        <a href="#tour">CONTACT</a>
      </div>
    </div>
    <div className="content">
      <h1 className="main-heading">NEW ALBUM OUT</h1>
      <button className="button">LISTEN NOW</button>
    </div>
  </div>
);

export default HomePage;
