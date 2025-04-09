import React from "react";


import Info from "./General/Info";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Clubs from "./Club/Clubs";
import Projects from './Project/Projects'
import Certificates from "./Certificate/Certifications";
import Footer from "./Headers & footer/Footer";
import Contact from "./Contacts/Contact";
import Header from "./Headers & footer/Header";

import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <div className="mainContent">
      <Header />
      <Info />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;