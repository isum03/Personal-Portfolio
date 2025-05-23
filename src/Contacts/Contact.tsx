import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="Contact" className="contactSection">
      <div className="contactContainer">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via the form below or connect on social platforms.</p>

        <form
          action="https://formsubmit.co/isump10@gmail.com"
          method="POST"
          className="contactForm"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="socialLinks">
          <a href="https://www.linkedin.com/in/isum-perera-5000a8286/" 
             target="_blank" 
             rel="noopener noreferrer"
          >
            <FaLinkedin aria-label="LinkedIn Profile" />
          </a>
          <a href="https://github.com/isum03" 
             target="_blank" 
             rel="noopener noreferrer"
          >
            <FaGithub aria-label="GitHub Profile" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;