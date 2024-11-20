import React from "react";
import './Header.css';
import logo from './insorts-logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a> */}
        <img style={{height:"70px",width:"200px"}} src={logo} alt="insorts logo"/>
        
      </nav>
    </header>
  );
};

export default Header;