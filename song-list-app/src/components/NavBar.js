import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => (
  <div className="nav-bar">
    <img src={logo} alt="Logo" />
    <div>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#songs">Songs</a>
    </div>
  </div>
);

export default NavBar;
