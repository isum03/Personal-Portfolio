import React, { Component } from "react";
import pythonLogo from "./pythonLogo.png";
import javaLogo from "./javaLogo.png";
import htmlLogo from "./htmlLogo.png";
import cssLogo from "./cssLogo.png";
import javascriptLogo from "./javascriptLogo.png";
import reactLogo from "./react.png";
import cLogo from "./cLogo.png";
import cplusLogo from "./cplusLogo.png";
import csharpLogo from "./csharpLogo.png";
import nodejsLogo from "./nodejsLogo.png";
import springbootLogo from "./springbootLogo.png";
import reactNativeLogo from "./reactNative.png";
import phpLogo from "./php.png";
import "./Skills.css"; // Import CSS file

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <section id="skills">
        <h1>Skills</h1>
        <div className="skillLogos">
          <img src={pythonLogo} alt="Python Logo" className="skill-icon" />
          <img src={javaLogo} alt="Java Logo" className="skill-icon" />
          <img src={htmlLogo} alt="HTML Logo" className="skill-icon" />
          <img src={cssLogo} alt="CSS Logo" className="skill-icon" />
          <img src={javascriptLogo} alt="JavaScript Logo" className="skill-icon" />
          <img src={reactLogo} alt="React Logo" className="skill-icon" />
          <img src={cLogo} alt="C Logo" className="skill-icon" />
          <img src={cplusLogo} alt="C++ Logo" className="skill-icon" />
          <img src={csharpLogo} alt="C# Logo" className="skill-icon" />
          <img src={nodejsLogo} alt="Node.js Logo" className="skill-icon" />
          <img src={springbootLogo} alt="Spring Boot Logo" className="skill-icon" />
          <img src={reactNativeLogo} alt="React Native Logo" className="skill-icon" />
          <img src={phpLogo} alt="PHP Logo" className="skill-icon" />
        </div>
        </section>
      </div>
    );
  }
}

export default Skills;
