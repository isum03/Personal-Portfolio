import React, { Component } from "react";

import "./skills.css"; // Import CSS file
const techList = [
  {name: "React", src:"/src/assets/Skills/react.png"},
  {name: "React Native", src:"/src/assets/Skills/reactNative.png"},
  {name: "HTML", src: "/src/assets/Skills/htmlLogo.png"},
  {name: "CSS", src: "/src/assets/Skills/cssLogo.png"},  
  {name: "JavaScript", src:"/src/assets/Skills/javascriptLogo.png"},
  {name: "Python", src:"/src/assets/Skills/pythonLogo.png"},
  {name: "Java", src:"/src/assets/Skills/javaLogo.png"},  
  {name: "C", src:"/src/assets/Skills/cLogo.png"},
  {name: "C++", src:"/src/assets/Skills/cplusLogo.png"},
  {name: "C#", src:"/src/assets/Skills/csharpLogo.png"},
  {name: "Node.js", src:"/src/assets/Skills/nodejsLogo.png"},
  {name: "Spring Boot", src:"/src/assets/Skills/springbootLogo.png"},
  {name: "PHP", src:"/src/assets/Skills/php.png"}
]
class Skills extends Component {
  render() {
    return (
      <div id="skills" className="techContainer">
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
