import React from "react";
import projects from "../../components/data/projects.json";
import style from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={style.container}>
      <img src={imageSrc} alt={title} className={style.image} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={style.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={style.links}>
        <a href={demo} className={style.link}>
          View Demo
        </a>
        <a href={source} className={style.link}>
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
