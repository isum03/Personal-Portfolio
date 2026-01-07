import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Header.css";
// Header is a functional component with type definition React function components
const Header: React.FC = () => {
  return (
    <header className="navigationBar">
      <nav className="navbar">
        {/*navigation bar with links*/}
        <a href="#myself">My-Self</a>
        <a href="#work">Work Experience</a>
        <a href="#edu">Education</a>
        <a href="#project">Projects</a>
        <a href="#skills">Tech-Stack</a>
        <a href="#volunteer">Volunteering</a>
        <a href="#Contact">Contact</a>
      </nav>
      {/*social media icons with alternative icons*/}
      <div className="socialIcons">
        <a href="https://www.instagram.com/_isum_hansaja_/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <FaInstagram aria-label="Instagram Profile" />
        </a>
        <a href="https://www.linkedin.com/in/isum-perera-5000a8286/" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <FaLinkedin aria-label="LinkedIn Profile" />
        </a>
        <a href="https://github.com/isum03" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <FaGithub aria-label="GitHub Profile" />
        </a>
      </div>
    </header>
  );
};

export default Header;