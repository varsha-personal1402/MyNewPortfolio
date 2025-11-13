import React from "react";
import styles from "./Education.module.css";
import educationData from "../../components/data/education.json";

const Education = () => {
  return (
    <section className={styles.educationSection} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.content}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <span className={styles.year}>{item.year}</span>
              <p className={styles.details}>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
