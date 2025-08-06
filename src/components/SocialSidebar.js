import React from "react";
import "./SocialSidebar.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import xIcon from "../assets/x.png";

const SocialSidebar = () => {
  return (
    <div className="socialSidebar">
      <div className="socialLine"></div>

      <div className="sidebarIcons">
        <a
          href="https://github.com/asrabari"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <img src={githubIcon} alt="GitHub" className="socialIcon" />
          <span className="tooltipText">GitHub</span>
        </a>

        <a
          href="mailto:asrajannat2003@gmail.com"
          className="tooltip"
        >
          <img src={emailIcon} alt="Email" className="socialIcon" />
          <span className="tooltipText">Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/asra-bari-495845352/"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="socialIcon" />
          <span className="tooltipText">LinkedIn</span>
        </a>

        <a
          href="https://x.com/Asra_bari?t=_m71mNQl22vxLzA2v2Kv8Q&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          <img src={xIcon} alt="Twitter" className="socialIcon" />
          <span className="tooltipText">Twitter</span>
        </a>
      </div>

      <div className="socialLine"></div>
    </div>


  );
};

export default SocialSidebar;
