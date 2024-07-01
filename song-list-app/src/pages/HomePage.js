import React from 'react';
import { css } from '@emotion/react';
import backgroundImg from '../assets/background.jpg';

const homePageStyle = css`
  height: 100vh;
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const headingStyle = css`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const subHeadingStyle = css`
  color: #ddd;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const buttonStyle = css`
  background-color: #e91e63;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #c2185b;
  }
`;

const HomePage = () => (
  <div id="home" css={homePageStyle}>
    <h1 css={headingStyle}>Let's Dive Deep into the Music World</h1>
    <p css={subHeadingStyle}>Explore our collection of songs and learn about our mission.</p>
    <a href="#songs" css={buttonStyle}>Get Started</a>
  </div>
);

export default HomePage;
