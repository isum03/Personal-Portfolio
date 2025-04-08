import React, { Component } from "react";


import gavel from "./Gavel.png";
import rota from "./Rot.jpeg";
import mozilla from "./Mozilla.png";
import ieeeComp from "./Ieee_computing.png";
import ieeeRAS from "./Ieee_ras.png";
import das from "./DASLogo.png.jpg";

class Clubs extends Component {
  render() {
    return (
      <div className="clubs">
        <section id="Extra">
        <h1>Societies</h1>
        <div className="clubLogos">
          <img src={rota} alt="Rotaract Logo" />
          <img src={mozilla} alt="Mozilla Logo" />
          <img src={gavel} alt="Gavel Logo" />
          <img src={ieeeComp} alt="IEEEComp Logo" />
          <img src={ieeeRAS} alt="IEEE RAS Logo" />
          <img src={das} alt="DAS Logo" />
        </div>
        </section>
      </div>
    );
  }
}

export default Clubs;
