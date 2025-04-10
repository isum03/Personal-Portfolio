import React, { Component } from "react";
import "./project.css";

const projectDetails = [
  {
    title: "Financial CRM System",
    image: "/src/assets/projects/img1.png",
    tech: "Tech Stack : React, Node.js, MySQL",
    description: "Developed a financial CRM system with proper communication between financ planners and brokers",
    github: "https://github.com/isum03/Financial-Ticketing-System"
  },
  {
    title: "Gem Management System",
    image: "/src/assets/projects/img2.png",
    tech: "Tech Stack : ReactNative, Node.js, MongoDB",
    description: " Developed a mobile application  communication and operations between businessowners, customers and workers in gem industry.",
  },
  {
    title: "Ceylon Map Book",
    image: "/src/assets/projects/img3.png",
    tech: "Tech Stack : HTML, CSS, JavaScript",
    description: "Developed an interactive travel guide showcasing hidden gems across Sri Lanka.",
    github: "https://github.com/isum03/Ceylon-Map-Book"
  },
  {
    title: "Real Time Ticketing System",
    image: "/src/assets/projects/img4.png",
    tech: "Tech Stack : Java, React, Spring Boot, WebSockets",
    description: " Developing a ticketing system with real-time communication",
    github: "https://github.com/isum03/Real-time-Ticket-Management-System"
  },
  {
    title: "Good Health and Well-being Website",
    image: "/src/assets/projects/img5.png",
    tech: "Tech Stack : HTML, CSS, JavaScript",
    description: "Developing an Web application aligning with United Nations Sustainable Development Goals",
  },
]
class Projects extends Component {
  render() {
    return (
      <div id="project" className="projectContainer">
        <h1 className="projectTopic">Projects</h1>
        <div className="projectGrid">
          {projectDetails.map((project, index) => (
            <div key={index} className="projectCard">
              <img src={project.image} alt={project.title} className="projectImg" />
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
