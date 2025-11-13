import React from "react";
import projects from "../../components/data/projects.json";
import ProjectCard from "./ProjectCard";
import style from "./Projects.module.css";
const Projects = () => {
  return (
    <section className={style.container} id="projects">
      <h2 className={style.title}>Projects</h2>
       <div  className={style.projects}>
        {
         projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
         }) 
        }
       </div>
    </section>
  );
};

export default Projects;
