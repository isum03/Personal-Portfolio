import React, { Component } from "react";
import "./Info.css";

import myPhoto from "../assets/personal/myPhoto.jpg"; // Importing the image directly
//class based componenet info
class Info extends Component {
  render() {
    return (
      <div className="infoPersonal">
        {/*Left side - personal information*/}
        <div id="myself" className="infoContent" >
          <h1>
            {/*Highlight titles*/}
            <span className="infoText">Full Stack</span><br />
            <span className="infoText">Developer</span><br />
          </h1>
          <p>
            I'm Isum Perera -<span className="highlight">Full Stack Developer </span> with a passion for creating innovative applications. 
          </p>
          <a href="/src/assets/files/resume.pdf" download className="infoDownload">
            Download my resume
          </a>
        </div>
        {/*photo section*/}
        <div className="infoPhoto">
          <img src={myPhoto} alt="My Photo" className="myPhoto" />
        </div>
      </div>
    );
  }
}

export default Info;