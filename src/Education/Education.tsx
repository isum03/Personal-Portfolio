import React, { Component } from "react";
import "./Education.css"; // Import the CSS file
const eduDetails = [
  {
    year : "2009 - 2022",
    title: "Maliyadeva College",
    description: "G.C.E. Advanced Level 2022 - Physical Science Stream - BBC",
  },
  {
  year : "2023 - 2027",
  title: "University Of Westminster",
  subTitle: "BEng (Hons) Software Engineering",  
  description: "Successfully completing the required credits in the degree program while gaining comprehensive knowledge in front-end and back-end programming, database management, and algorithmic problem-solving, with a focus on industry-relevant technologies.",
  }
]
class Education extends Component {
  render() {
    return (
      <div className="educationContainer">
        <h1 className="educationTitle">Education</h1>
        <div className="eduCard">
          {eduDetails.map((item, index) => (
            <div key={index} className="eduItems">
              <div className="eduCircle" />
              <div className="eduYear">{item.year}</div>
              <div className="eduTitle">{item.title}</div>
              <div className="eduSubtitle">{item.subTitle}</div>
              <div className="eduDesc">{item.description}</div>
            </div>
          ))}
      </div>
        
      </div>
      
    );
  }
}

export default Education;
