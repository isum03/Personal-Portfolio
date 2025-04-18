import React, { Component } from "react";
import "./Skills.css"; 
//array of techList with details
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
