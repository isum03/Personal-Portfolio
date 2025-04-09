import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./header.css";


const Header = () => {
  return (
    <header className="navigationBar">
      <nav className={`navbar `}>
          <a href="#myself" >My self</a>
          <a href="#Education">Education</a>
          <a href="#Cert" >Certificates</a>
          <a href="#skills" >Skills</a>
          <a href="#Extra" >Extra-Cirrucular</a>
          <a href="#Projects" >Projects</a>
          <a href="#Contact" >Contact</a>
        </nav>
      <div className="socialIcons">
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instaIcon" />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedinIcon" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="gitIcon" />
        </a>
        
      </div>
    </header>
  );
};

export default Header;
