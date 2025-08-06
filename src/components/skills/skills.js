import React from "react";
import './skills.css';
import Uidesign from '../../assets/ux-ui.jpg';
import FrontEnd from '../../assets/FrontD.jpg';
import BackEnd from '../../assets/backD.jpg';

const Skills = () => {
    return ( 
        <section id='skills'> 
         <h2 className="skillTittle"> About Me </h2>
         <span className="skillDesc"> 
I’m Asra — a passionate Software Developer based in Toronto and a Bangladeshi. I’m currently studying Software Engineering Technology - AI at Centennial College. I focus on building responsive interfaces, writing clean, efficient code, and ensuring accessibility for all users. I work with modern tools like React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap to bring designs to life.

         </span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={FrontEnd} alt="FrontEnd" className="skillBarImg"/>
                <div className="skillBarText"> 
                    <h2>Frontend Development</h2>
                    <p>I build responsive and interactive web interfaces using React.js, HTML5, CSS3, and JavaScript (ES6+). I enjoy turning designs into functional components and bringing them to life with animations and smooth transitions.</p>
                 </div>
            </div>

            <div className="skillBar">
                <img src={BackEnd} alt="BackEnd" className="skillBarImg"/>
                <div className="skillBarText"> 
                    <h2>Backend Development</h2>
                    <p>I create and connect APIs using Node.js and Express, work with MongoDB databases, and ensure the server-side logic is secure, efficient, and well-structured.</p>
                 </div>
            </div>

            <div className="skillBar">
                <img src={Uidesign} alt="Uidesign" className="skillBarImg"/>
                <div className="skillBarText"> 
                    <h2>UI/UX Design</h2>
                    <p>I love designing smooth and intuitive user experiences. I use tools like Figma to wireframe and prototype interfaces that are not only beautiful but also functional.</p>
                 </div>
            </div>
         </div>
        </section>
    );
}
export default Skills;