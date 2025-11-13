import React from 'react'
import style from "./Hero.module.css"
import HeroImage from "/assets/hero/varsha.jpeg"

const Hero = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>Hii, I'm Varsha</h1>
            <p className={style.description}>I'm full stack Developer</p>
            <a href="#contact" className={style.contactBtn}>Contact Me</a>
        </div>
        <img src={HeroImage} alt="" className={style.HeroImage}/>
        <div className={style.topBlur}/>
         <div className={style.bottomBlur}/>
    </section>
  )
}

export default Hero
