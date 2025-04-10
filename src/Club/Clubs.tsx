import React, { Component } from "react";
import "./clubs.css"; 

const societyData = [
    { name: 'ROTARACT', src:"/src/assets/extra/Rot.jpeg"  }, 
    { name: 'TM', src:"/src/assets/extra/tm.png" },
    { name: 'IEEE', src:"/src/assets/extra/ieee.png" },
    { name: 'Mozilla', src:"/src/assets/extra/mozilla.png" }
]

class Clubs extends Component {
  render() {
    return (
      <div id="volunteer" className="societyContainer">
        <h1 className="societyTitle">Volunteering</h1>
        <div className="societyDisplay">
          {societyData.map((society) => (
            <div key={society.name} className="societyCard">
              <img src={society.src} alt={society.name} className="societyLogo" />
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Clubs;
