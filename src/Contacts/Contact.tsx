import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const Contact = () => {
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
          <textarea name="message"  placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="socialLinks">
          
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="LikedinId" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="GitIcon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
