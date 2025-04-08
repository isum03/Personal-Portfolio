import React, { Component } from "react";
import myPhoto from "./myPhoto.jpg";
import downloadIcon from "./downloadLogo.png"; 


class Info extends Component {
  render() {
    return (
     
      < div className="personalInfo">
        <section id="myself">
        <h1>Isum Perera</h1>
        <img src={myPhoto} alt="my photo" className="profilePic" />
        <p>
          I am a self-motivated and dedicated Software Engineering undergraduate with a passion for developing innovative
          technology solutions to address real-world challenges. With strong problem-solving skills, I thrive in real-time
          environments, where I can analyze issues and design practical, impactful solutions. My dedication to continuous
          learning and improvement drives me to excel in both individual and collaborative settings, as I work to enhance my
          technical skills and make meaningful contributions through technology.
        </p>
        <a 
          href="/myCV.pdf" 
          download
          className="downloadBtn"
          aria-label="Download My CV"
        >
          <img src={downloadIcon} alt="Download CV Icon" className="downloadIcon" />
          Download My CV
        </a>
        </section>
      </div>
    );
  }
}

export default Info;
