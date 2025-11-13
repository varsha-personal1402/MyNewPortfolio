import React, { useState } from "react";
import style from "./Navbar.module.css";
import menuIcon from "/assets/nav/menuIcon.png";
import closeIcon from "/assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <a href="/" className={style.title}>VARSHA</a>

      <div className={style.menu}>
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu button"
          className={style.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}  // toggle menu icon
        />

        <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`}  onClick={()=>setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
