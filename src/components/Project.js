import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectId, children }) => {
  const [currentProject] = useState(projectsData[projectId]);

  const [posCircle, setPosCircle] = useState({ left: 0, top: 0, size: 1 });
  useEffect((posCircle) => {
    setPosCircle({
      ...posCircle,
      left: Math.floor(Math.random() * 200 + 700) + "px",
      top: Math.floor(Math.random() * 200 + 150) + "px",
      scale: "scale(" + (Math.random() + 0.7) + ")",
    });
  }, []);

  return (
    <>
      <div className="project-main">
        <div className="project-content">
          <h1>{currentProject.title}</h1>
          <p>{currentProject.date}</p>
          <ul className="languages">
            {currentProject.languages.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="img-content">
          <div className="img-container hover">
            <span>
              <h3>{currentProject.title}</h3>
              <p>{currentProject.infos}</p>
            </span>
            <img
              className="img"
              src={currentProject.img}
              alt={currentProject.title}
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <span>
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button  hover ">Voir le site</button>
          </a>
        </span>
        <span>{children}</span>
      </div>

      <span
        className="random-circle"
        style={{
          left: posCircle.left,
          top: posCircle.top,
          transform: posCircle.size,
        }}
      ></span>
    </>
  );
};

export default Project;
