import React, { Component } from "react";

import "./skills.css"; // Import CSS file
const techList = [
  {name: "React", src:"./assets/skills/reactLogo.png"},
  {name: "React Native", src:"./assets/skills/reactNativeLogo.png"},
  {name: "HTML", src: "./assets/skills/htmlLogo.png"},
  {name: "CSS", src: "./assets/skills/cssLogo.png"},  
  {name: "JavaScript", src:"./assets/skills/javascriptLogo.png"},
  {name: "Python", src:"./assets/skills/pythonLogo.png"},
  {name: "Java", src:"./assets/skills/javaLogo.png"},  
  {name: "C", src:"./assets/skills/cLogo.png"},
  {name: "C++", src:"./assets/skills/cplusLogo.png"},
  {name: "C#", src:"./assets/skills/csharpLogo.png"},
  {name: "Node.js", src:"./assets/skills/nodejsLogo.png"},
  {name: "Spring Boot", src:"./assets/skills/springbootLogo.png"},
  {name: "PHP", src:"./assets/skills/php.png"},
  {name: "MySQL", src:"./assets/skills/mysqlLogo.png"},
  {name: "MongoDB", src:"./assets/skills/mongodbLogo.png"},
 

]
class Skills extends Component {
  render() {
    return (
      <div className="techContainer">
        <h1 className="techTitle">Technology Stack</h1>
        <div className="techDisplay">
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
