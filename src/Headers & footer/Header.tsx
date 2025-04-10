import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./header.css";


const Header = () => {
  return (
    <header className="navigationBar">
      <nav className={`navbar `}>
          <a href="#myself" >My-Self</a>
          <a href="#edu">Education</a>
          <a href="#project" >Projects</a>
          <a href="#skills" >Tech-Stack</a>
          <a href="#volunteer" >Volunteering</a>
          <a href="#Contact" >Contact</a>
        </nav>
      <div className="socialIcons">
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instaIcon" />
        </a>
        <a href="https://www.linkedin.com/in/isum-perera-5000a8286/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedinIcon" />
        </a>
        <a href="https://github.com/isum03" target="_blank" rel="noopener noreferrer">
          <FaGithub className="gitIcon" />
        </a>
        
      </div>
    </header>
  );
};

export default Header;
