import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Varsha Zalte</h3>
        <p>Frontend / Full Stack Developer</p>

        <div className="footer-links">
          <a
            href="https://github.com/varsha-personal1402"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:your-email@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Varsha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
