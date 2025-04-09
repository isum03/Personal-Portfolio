import React, { Component } from "react";
import myPhoto from "./myPhoto.jpg";
import downloadIcon from "./downloadLogo.png"; 
import "./info.css";


class Info extends Component {
  render() {
    return (
     
      < div className="infoPersonal">
        <div id="myself" className="infoContent">
        <h1>
          <span className="infoText">Full Stack</span><br />
          <span className="infoText">Developer</span><br />
        </h1>
        <p>
          I'm Isum Perera -<span className="highlight">Full Stack Developer </span> with a passion for creating innovative applications. 
        </p>
        <button className="infoDownload">Download my resume</button>
        </div>
        <div className="infoPhoto">
          <img src="./assets/personal/myPhoto.jpg" alt="My Photo" className="myPhoto" />
        </div>
      </div>
    );
  }
}

export default Info;
