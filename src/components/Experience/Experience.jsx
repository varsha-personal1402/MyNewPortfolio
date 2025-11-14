import React from "react";
import style from "./Experience.module.css"
import skills from "../../components/data/skills.json";
import history from "../../components/data/history.json";

const Experience = () => {
  return (
    <section id="experience" className={style.container}>
      <h2 className={style.title}>Experience</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={style.skill}>
                <div className={style.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                      <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={style.history}>
          {history.map((historyItems, id) => {
            return (
              <li key={id} className={style.historyItem}>
                
                <div className={style.historyItemDetails}>
                    <h3>{`${historyItems.role}`}</h3>
                    <h3>{`${historyItems.organization}`}</h3>
                    <p>{`${historyItems.startDate}:${historyItems.endDate}`}</p>
                    <ul>
                        {historyItems.experiences.map((experience, id)=>{
                            return <li key={id}>{experience}</li>
                        })}
                    </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
