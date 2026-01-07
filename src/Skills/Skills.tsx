import React, { Component } from "react";
import "./Skills.css"; 

import reactLogo from "../assets/Skills/react.png";
import reactNativeLogo from "../assets/Skills/reactNative.png";
import htmlLogo from "../assets/Skills/htmlLogo.png";
import cssLogo from "../assets/Skills/cssLogo.png";
import javascriptLogo from "../assets/Skills/javascriptLogo.png";
import pythonLogo from "../assets/Skills/pythonLogo.png";
import javaLogo from "../assets/Skills/javaLogo.png";
import cLogo from "../assets/Skills/cLogo.png";
import cplusLogo from "../assets/Skills/cplusLogo.png";
import csharpLogo from "../assets/Skills/csharpLogo.png";
import nodejsLogo from "../assets/Skills/nodejsLogo.png"; 
import springbootLogo from "../assets/Skills/springbootLogo.png";
import phpLogo from "../assets/Skills/php.png";
import dotnetLogo from "../assets/Skills/dotnetLogo.png";

//array of techList with details
const techList = [
  {name: "React", src:reactLogo},
  {name: "React Native", src:reactNativeLogo},
  {name: "HTML", src: htmlLogo},
  {name: "CSS", src: cssLogo},  
  {name: "JavaScript", src: javascriptLogo},
  {name: "Python", src:pythonLogo},
  {name: "Java", src:javaLogo},  
  {name: "C", src:cLogo},
  {name: "C++", src:cplusLogo},
  {name: "C#", src:csharpLogo},
  {name: "Node.js", src:nodejsLogo},
  {name: "Spring Boot", src:springbootLogo},
  {name: "PHP", src:phpLogo},
  {name: ".NET", src:dotnetLogo},
]
class Skills extends Component {
  render() {
    return (
      <div id="skills" className="techContainer">
        {/*Section title*/}
        <h1 className="techTitle">Technology Stack</h1>
        {/*Grid layout for technology cards*/}
        <div className="techDisplay">
          {/* Looping through each tech item and rendering a card with its logo */}
          {techList.map((tech) => (
            <div key={tech.name} className="techCard">
              <img src={tech.src} alt={tech.name} className="techLogo" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
