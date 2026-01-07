import React, { Component } from "react";
import "./Work.css"; 
//array containing work experience details
const workDetails = [
{
    title: "Intern - Software Engineer",
    company: "Atlink Communications Pvt Ltd",
    time: "2025 July - Present",
    description: "Designed and implemented features, developed RESTful APIs, managed databases, debugged and optimized code, collaborated in Agile teams, used version control, and ensured high-quality, maintainable software"
  }
]
const Work = () => {
  return (
    <div id="work" className="work-container">
      <h1 className="work-header">Work Experience</h1>
      
      {/* The Arrow Icon (You can replace this with a real icon library like FontAwesome or Lucide) */}
      <div className="arrow-icon">↓</div>

      <div className="work-list">
        {workDetails.map((work, index) => (
          <div key={index} className="work-card">
            <h3 className="work-title">{work.title}</h3>
            <p className="work-company">{work.company}</p>
            <p className="work-time">{work.time}</p>
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;