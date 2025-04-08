import React, { Component } from "react";
import "./Education.css"; // Import the CSS file

class Education extends Component {
  render() {
    return (
      <div className="educationContainer">
        <section id="Education">
        <h1 className="educationTitle">Education</h1>

        <div className="educationCard">
          <h3>University Of Westminster</h3>
          <h3>BEng (Hons) Software Engineering</h3>
          <h4>2023-2027</h4>
          <p>
            Successfully completing the required credits in the degree program while gaining comprehensive 
            knowledge in front-end and back-end programming, database management, and algorithmic problem-solving, 
            with a focus on industry-relevant technologies.
          </p>
        </div>

        <div className="educationCard">
          <h3>Maliyadeva College</h3>
          <h4>2009-2022</h4>
          <p>G.C.E. Advanced Level 2022 - Physical Science Stream - <b>BBC</b></p>
          <p>G.C.E. Ordinary Level 2019 - <b>7A & 2B</b></p>
        </div>
        </section>
      </div>
      
    );
  }
}

export default Education;
