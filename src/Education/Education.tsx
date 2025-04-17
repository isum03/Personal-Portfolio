import React, { Component } from "react";
import "./Education.css"; 
//array containing education details
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
//class based component named "Education"
class Education extends Component {
  render() {
    return (
      <div id="edu" className="educationContainer">
        {/*Section heading*/}
        <h1 className="eduTopic">Education</h1>
        {/*horizontal line*/}
        <div className="eduLine"></div>
        {/*Looping through the eduDetails array to display each education entry*/}
        {eduDetails.map((edu, index) => (
          <div className="eduEntry" key={index}>
            <div className="eduLineDot"></div>
            {/*Display education details*/}
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
