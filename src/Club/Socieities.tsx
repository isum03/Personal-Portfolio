import React, { Component } from "react";
import "./societies.css"; 
//array of societyData with details
const societyData = [
    { name: 'ROTARACT', src:"/src/assets/extra/Rot.jpeg"  }, 
    { name: 'TM', src:"/src/assets/extra/tm.png" },
    { name: 'IEEE', src:"/src/assets/extra/ieee.png" },
    { name: 'Mozilla', src:"/src/assets/extra/mozilla.png" }
]
//class based component
class Socieities extends Component {
  render() {
    return (
      <div id="volunteer" className="societyContainer">
        {/*Section title*/}
        <h1 className="societyTitle">Volunteering</h1>
        <div className="societyDisplay">
          {/*Looping through the societyData array to display each society*/}
          {societyData.map((society) => (
            //Unique key for each society
            <div key={society.name} className="societyCard">
              {/*Display society logo*/}
              <img src={society.src} alt={society.name} className="societyLogo" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Socieities;
