// components/Footer.js
import React from "react";
import "./Footer.css";
import appstore from './app-store.png';
import googlestore from './app.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Download the Inshorts app for the best experience:</p>
      <div className="download-buttons">
        <img src={appstore} alt="App Store" />
        <img src={googlestore} alt="Google Play" />
      </div>
    </footer>
  );
};

export default Footer;
