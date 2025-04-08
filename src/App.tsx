// filepath: g:/Courses/React/profile-app/src/App.tsx
import React from "react";
import "./General/Info.css";
import "./Skills/Skills.css";
import "./Education/Education.css";
import "./Certificate/Certifications.css";
import "./Project/Projects.css";
import "./Club/Clubs.css";
import "./Headers & footer/Header.css";
import "./index.css";
import "./Contacts/Contact.css";

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
      <Certificates />
      <Skills />
      <Clubs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;