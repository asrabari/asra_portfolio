import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import homeIcon from "../../assets/home.png";
import aboutIcon from "../../assets/about.png";
import projectsIcon from "../../assets/projects.png";
import experienceIcon from "../../assets/experience.png";
import contactMeIcon from "../../assets/contactMe.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <span className="brandName">Asra Portfolio</span>

      <div className="desktopMenu">
        <Link to="intro" smooth={true} duration={100} className="desktopMenuListItem">
          <img src={homeIcon} alt="Home" className="navIcon" />
          Home
        </Link>

        <Link to="skills" smooth={true} duration={100} className="desktopMenuListItem">
          <img src={aboutIcon} alt="About" className="navIcon" />
          About
        </Link>

        <Link to="projects" smooth={true} duration={100} className="desktopMenuListItem">
          <img src={projectsIcon} alt="Projects" className="navIcon" />
          Projects
        </Link>

        <Link to="experience" smooth={true} duration={100} className="desktopMenuListItem">
          <img src={experienceIcon} alt="Experience" className="navIcon" />
          Experience
        </Link>

        <Link to="contact" smooth={true} duration={150} className="desktopMenuListItem">
          <img src={contactMeIcon} alt="Contact" className="navIcon" />
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
