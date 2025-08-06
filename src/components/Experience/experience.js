import React from "react";
import './experience.css';
import tccoeLogo from '../../assets/tccoe.png';
import innokubedLogo from '../../assets/innokubed.png';

const Experience = () => {

    return (
 <section id="experience">
      <h2 className="experienceTitle">Experience</h2>
      <div className="experienceBars">

        <div className="experienceBar">
          <img src={innokubedLogo} alt="Innokubed" className="experienceBarImg" />
          <div className="experienceBarText">
            <h3>UX/UI Designer</h3>
            <p>Innokubed</p>
            <p>Part-time</p>
            <p>Toronto, ON</p>
          </div>
          <div className="experienceDate">June 2025 – Present</div>
        </div>

        <div className="experienceBar">
          <img src={tccoeLogo} alt="TCCOE" className="experienceBarImg" />
          <div className="experienceBarText">
            <h3>IT Analyst</h3>
            <p>Trainings Canada</p>
            <p>Co-op full-time</p>
            <p>Toronto, ON</p>
          </div>
          <div className="experienceDate">Jan 2025 – April 2025</div>
        </div>

      </div>
    </section>
    );
};
export default Experience;