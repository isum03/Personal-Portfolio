import React from "react";
import Info from "./General/Info";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Clubs from "./Club/Socieities";
import Projects from './Project/Projects'
import Footer from "./Headers & footer/Footer";
import Contact from "./Contacts/Contact";
import Header from "./Headers & footer/Header";
import Work from "./Work/Work";

import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <div className="mainContent">
      <Header />
      <Info />
      <Work />
      <Education />
      <Projects />
      <Skills />
      <Clubs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;