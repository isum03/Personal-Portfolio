import React, { Component } from "react";
import "./project.css";

const projectDetails = [
  {
    title: "Financial CRM System",
    image: "./assets/projects/img1.png",
    description: " Created a financial CRM system using React, Node.js and MySQL. System contains three roles: Admin, Financial Planner and Mortagage Broker. Admin can create user accounts. Financial Planner and Mortagage Broker can create tickets for the clients and assign it to Mortagage Broker. Mortagage Brokers can also view the tickets they got assigned.",
    github: "https://github.com/isum03/Financial-Ticketing-System"
  },
  {
    title: "Gem Management System",
    image: "./assets/projects/img2.png",
    description: " Developing a mobile application using React Native, Node.js, Figma. The platform aims to streamline communication and operations between businessowners, customers and workers, enhancing the efficiency in gem industry. Implemented features including User profile management, Gem On Display, Tracking page, My Gem page in frontend and User profile management, Contact option in the backend ",
  },
  {
    title: "Ceylon Map Book",
    image: "./assets/projects/img3.png",
    description: "Developed an interactive travel guide showcasing hidden gems across Sri Lanka. Designed and implemented the location pages independently using HTML, CSS, JavaScript. Utilized Cloudflare for website hosting, enhancing performance and security",
    github: "https://github.com/isum03/Ceylon-Map-Book"
  },
  {
    title: "Real Time Ticketing System",
    image: "./assets/projects/img4.png",
    description: " Developed as part of the Object-Oriented Programming coursework, this project consists of three components: CLI, frontend, backend. The CLI implementation incorporates key OOP concepts such as multithreading, synchronization and serialization. The frontend is built using React, while the backend is developed with Spring Boot and WebSockets to enable real-time communication",
    github: "https://github.com/isum03/Real-time-Ticket-Management-System"
  },
]
class Projects extends Component {
  render() {
    return (
<section className="projectSection">
      <div className="projectContainer">
        <h1 className="projectTopic">Projects</h1>
        {projectDetails.map((project) => (
          <div className="projecCard" key={project.title}>
            <img src={project.image} alt={project.title} className="projectImg" />
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDesc">{project.description}</p>
            <div className="projectLinks">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn outline">
                Check on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
  }
}

export default Projects;
