import React, { Component } from "react";
import "./info.css";

class Info extends Component {
  render() {
    return (
      <div className="infoPersonal">
        <div id="myself" className="infoContent" >
          <h1>
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
        <div className="infoPhoto">
          <img src="/src/assets/personal/myPhoto.jpg" alt="My Photo" className="myPhoto" />
        </div>
      </div>
    );
  }
}

export default Info;