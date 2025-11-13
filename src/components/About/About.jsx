import React from "react";
import style from "./About.module.css";
import AboutImage from "/assets/about/aboutImage.png";
import cursorIcon from "/assets/about/cursorIcon.png";
import serverIcon from "/assets/about/serverIcon.png";

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img src={AboutImage} alt="Me sitting with the Laptop" className={style.aboutImage}/>
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img src={cursorIcon} alt="cursor icon" />
            <div className={style.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a front end Developer with experience building UI</p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={serverIcon} alt="server icon" />
            <div className={style.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a Back end Developer with experience building backend system
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
