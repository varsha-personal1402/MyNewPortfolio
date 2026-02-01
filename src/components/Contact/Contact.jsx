import React from "react";
import style from "./Contact.module.css";
import githubIcon from "../../assets/contact/githubIcon.png";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={style.container}>
      <div className={style.text}>
        <h2>Get in Touch</h2>
        <p>Feel free to reach out!!</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:varshazalte140@gmail.com">varshazalte140@gmail.com</a>
        </li>
        <li className={style.link}>
          <img src={githubIcon} alt="GitHub Icon" />
          <a href="https://github.com/varsha-personal1402">https://github.com/varsha-personal1402</a>
        </li>
        <li className={style.link}>
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href="www.linkedin.com/in/varsha-zalte-69ba08263">www.linkedin.com/in/varsha-zalte-69ba08263</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
