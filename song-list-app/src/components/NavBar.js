import React from 'react';
import { css } from '@emotion/react';
import logo from '../assets/logo.png';

const navStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #282c34;
  color: white;
  z-index: 1000;
  scroll-behavior: smooth;  // Added for smooth scrolling
`;

const logoStyle = css`
  width: 100px;
`;

const linkStyle = css`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => (
  <div css={navStyle}>
    <img src={logo} alt="Logo" css={logoStyle} />
    <div>
      <a href="#home" css={linkStyle}>Home</a>
      <a href="#about" css={linkStyle}>About</a>
      <a href="#songs" css={linkStyle}>Songs</a>
    </div>
  </div>
);

export default NavBar;
