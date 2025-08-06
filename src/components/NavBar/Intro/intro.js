import React from "react";
import './intro.css';
import bg from '../../../assets/profile.png';
import btnImg from '../../../assets/bag.png';
import downloadIcon from "../../../assets/download.png";
import{Link} from 'react-scroll';

const Intro = () => {
    return (
       <section id="intro">
  <div className="introContent">
    <div className="introContent" data-aos="fade-right">
    <span className="hello">Hello,</span>
    <span className="introText">I'm <span className="introName">Asra</span><br />Software Engineer</span>
    <p className="introPara">
      I don’t just solve problems; I design with purpose,care deeply about user experience, and believe even small details deserve big attention.
    </p>
    </div>
    <div className="introLinks">
      <a href="/Asra_Resume(2).pdf" download className="introBtn">
  <img src={downloadIcon} alt="Download" className="navIcon" />
  Download Resume
</a>

   
    </div>
    <Link to="contact" smooth={true} duration={500}>
      {/* <button className="btn">
        <img src={btnImg} alt="hire me" className="btnImg" />
        Hire Me
      </button> */}
    </Link>
  </div>
  <img src={bg} alt="profile" className="bg" />
</section>

    );
}
export default Intro;