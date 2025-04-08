import React, { Component } from "react";


class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <section id="Projects">
        <h1>Projects</h1>

        <ul className="projectList">
          <li className="projectItem">
            <span className="projectTopic">Ceylon Map Book</span>
            <p className="projectDescription">
            Developed an interactive travel guide showcasing hidden gems across Sri Lanka. Designed and implemented the location pages independently using HTML, CSS, and JavaScript. Utilized Cloudflare for website hosting, enhancing performance and security.  
            <br/>
            <a href="https://github.com/your-username/ceylon-map-book" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
          </li>

          <li className="projectItem">
            <span className="projectTopic">Good Health and Well-being Website</span>
            <p className="projectDescription">
            Developed as part of the Web Development coursework, aligning with the United Nations Sustainable Development Goals. Built using HTML, CSS, and JavaScript, with a focus on promoting health and well-being. Personally designed and implemented key sections, including the Profile Page, Team Page, Page Editor, and Content Page.
            <br/>
            <a href="https://github.com/your-username/ceylon-map-book" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            
            </p>
          </li>

          <li className="projectItem">
            <span className="projectTopic">Airplane Ticket Booking System</span>
            <p className="projectDescription"> 
            Developed as part of the Java coursework, utilizing core Java and fundamental Object-Oriented Programming (OOP) principles. This project simulates the seat reservation process, demonstrating efficient ticket management functionality.
            <br/>
            <a href="https://github.com/your-username/ceylon-map-book" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
          </li>

          <li className="projectItem">
            <span className="projectTopic">Student Mark Evaluation System</span>
            <p className="projectDescription">
            Developed as part of the Python coursework, leveraging core Python to create a mark evaluation system. Implemented graphical data representation using histograms to analyze and predict student progression trends.
            <br/>
            <a href="https://github.com/your-username/ceylon-map-book" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
          </li>
        </ul>
        </section>
      </div>
    );
  }
}

export default Projects;
