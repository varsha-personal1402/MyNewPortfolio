import React from "react";
import style from "./Hero.module.css";
import HeroImage from "../../assets/hero/varshaImage.jpeg";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hii, I'm Varsha!! a full stack developer</h1>
        <p className={style.description}>
          Transforming Ideas Into Fast, Scalable & Beautiful Web Applications!!
          Building Smart, Scalable & User-Friendly Web Solutions
        </p>
        <a href="#contact" className={style.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={HeroImage} alt="" className={style.HeroImage} />
      <div className={style.topBlur} />
      <div className={style.bottomBlur} />
    </section>
  );
};

export default Hero;
