import React, { Component } from "react";
import "./societies.css";

// Import images directly from assets (relative to this file)
import rota from "../assets/extra/Rot.jpeg";
import tm from "../assets/extra/tm.png";
import ieee from "../assets/extra/ieee.png";
import mozillaLogo from "../assets/extra/Mozilla.png";

// Array of societyData using imported image variables
const societyData = [
  { name: 'ROTARACT', src: rota },
  { name: 'TM', src: tm },
  { name: 'IEEE', src: ieee },
  { name: 'Mozilla', src: mozillaLogo }
];

// Class-based component
class Socieities extends Component {
  render() {
    return (
      <div id="volunteer" className="societyContainer">
        {/* Section title */}
        <h1 className="societyTitle">Volunteering</h1>
        <div className="societyDisplay">
          {/* Looping through the societyData array to display each society */}
          {societyData.map((society) => (
            // Unique key for each society
            <div key={society.name} className="societyCard">
              {/* Display society logo */}
              <img src={society.src} alt={society.name} className="societyLogo" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Socieities;
