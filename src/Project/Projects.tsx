import React, { Component } from "react";
import "./project.css";

import img0 from "../assets/projects/img0.png";
import img1 from "../assets/projects/img1.png";
import img2 from "../assets/projects/img2.png"; 
import img3 from "../assets/projects/img3.png";
import img4 from "../assets/projects/img4.png";
import img5 from "../assets/projects/img5.png";

//array containing project details
const projectDetails = [
  {
    title: "GunDwon Game",
    image: img0,
    tech: "Tech Stack : Python",
    description: "Developed a Python number grid guessing game with file handling for persistent data storage",
    github: "https://github.com/isum03/Gundown-Game"
  },
  {
    title: "Financial CRM System",
    image: img1,
    tech: "Tech Stack : React, Node.js, MySQL",
    description: "Developed a financial CRM system with proper communication between financ planners and brokers",
    github: "https://github.com/isum03/Financial-Ticketing-System"
  },
  {
    title: "Gem Management System",
    image: img2,
    tech: "Tech Stack : ReactNative, Node.js, MongoDB",
    description: " Developed a mobile application  communication and operations between businessowners, customers and workers in gem industry.",
  },
  {
    title: "Ceylon Map Book",
    image: img3,
    tech: "Tech Stack : HTML, CSS, JavaScript",
    description: "Developed an interactive travel guide showcasing hidden gems across Sri Lanka.",
    github: "https://github.com/isum03/Ceylon-Map-Book"
  },
  {
    title: "Real Time Ticketing System",
    image: img4,
    tech: "Tech Stack : Java, React, Spring Boot, WebSockets",
    description: " Developing a ticketing system with real-time communication",
    github: "https://github.com/isum03/Real-time-Ticket-Management-System"
  },
  {
    title: "Good Health and Well-being Website",
    image: img5,
    tech: "Tech Stack : HTML, CSS, JavaScript",
    description: "Developing an Web application aligning with United Nations Sustainable Development Goals",
  },
]
//class based component named "Projects"
class Projects extends Component {
  render() {
    return (
      <div id="project" className="projectContainer">
        {/*Section title*/}
        <h1 className="projectTopic">Projects</h1>
        {/*Grid layout for project cards*/}
        <div className="projectGrid">
          {/* Loop through each project and render its details */}
          {projectDetails.map((project, index) => (
            <div key={index} className="projectCard">
              {/*Display project image*/}
              <img src={project.image} alt={project.title} className="projectImg" />
              {/*Display project details*/}
              <div className="projectContent">
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectDesc">{project.tech}</p>
                <p className="projectDesc">{project.description}</p>
              </div>
              <div className="projectLinks">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn outline">
                  Check on GitHub
                </a>
              </div>
              
            </div>
          ))}
         </div> 
      </div>
    );
  }
}

export default Projects;
