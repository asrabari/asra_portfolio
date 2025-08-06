import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./projects.css";

// Project images
import work1thumb from "../../assets/work1/thumb.png";
import work1p2 from "../../assets/work1/page2.png";
import work1p3 from "../../assets/work1/page3.png";

import work2thumb from "../../assets/work2/thumb.png";
import work2p2 from "../../assets/work2/page2.png";

import work3thumb from "../../assets/work3/thumb.png";
import work3p2 from "../../assets/work3/page2.png";
import work3p3 from "../../assets/work3/page3.png";

import work4thumb from "../../assets/work4/thumb.png";
import work4p2 from "../../assets/work4/page2.png";
import work4p3 from "../../assets/work4/page3.png";

const projects = [
  {
    title: "Tic-Tac-Toe game",
    desc: "Fullly functional Tic-Tac-Toe game built with React.js.",
    thumb: work1thumb,
    images: [work1thumb, work1p2, work1p3],
  },
  {
    title: "Calculator App",
    desc: "Calculator app with basic arithmetic & scientific operations, built with C# GUI",
    thumb: work2thumb,
    images: [work2thumb, work2p2],
  },
  {
    title: "WhatToWatch App",
    desc: "Movie recommendation app using React, Node.js & MongoDB",
    thumb: work3thumb,
    images: [work3thumb, work3p2, work3p3],
  },
  {
    title: "Retail Jewelry Website",
    desc: "Full-stack e-commerce app using React, Node.js & MongoDB",
    thumb: work4thumb,
    images: [work4thumb, work4p2, work4p3],
  }
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="projects" className="projectsSection">
      <h2 className="projectTitle">Projects</h2>
      <div className="projectsGrid">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="projectCard"
            onClick={() => {
              setIsOpen(true);
              setActiveIndex(index);
              setPhotoIndex(0);
            }}
          >
            <img src={proj.thumb} alt={proj.title} className="projectImg" />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={projects[activeIndex].images[photoIndex]}
          nextSrc={
            projects[activeIndex].images[
              (photoIndex + 1) % projects[activeIndex].images.length
            ]
          }
          prevSrc={
            projects[activeIndex].images[
              (photoIndex + projects[activeIndex].images.length - 1) %
              projects[activeIndex].images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + projects[activeIndex].images.length - 1) %
              projects[activeIndex].images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % projects[activeIndex].images.length)
          }
        />
      )}
    </section>
  );
};

export default Projects;
