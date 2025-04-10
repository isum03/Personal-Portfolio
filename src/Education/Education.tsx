import React, { Component } from "react";
import "./Education.css"; // Import the CSS file
const eduDetails = [
  {
    title: "University of Westminster",
    startDate: "2023",
    endDate: "2027",
    description: "BEng (Hons) Software Engineering"
  },
  {
    title : "Maliyadeva College",
    startDate: "2009",
    endDate: "2022",
    description: "G.C.E. A/L 2022 - Physical Science Stream - BBC"
  }
]
class Education extends Component {
  render() {
    return (
      <div id="edu" className="educationContainer">
        <h1 className="eduTopic">Education</h1>
        <div className="eduLine"></div>
        {eduDetails.map((edu, index) => (
          <div className="eduEntry" key={index}>
            <div className="eduLineDot"></div>
            <div className="eduCard">
              <h3 className="eduTitle">{edu.title}</h3>
              <p className="eduDate">{edu.startDate} - {edu.endDate}</p>
              <p className="eduDesc">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
