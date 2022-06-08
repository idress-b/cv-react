import React from "react";
import Project from "../components/Project";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import SocialNetworks from "../components/SocialNetworks";

const Project2 = () => {
  return (
    <div className="project">
      <Mouse />
      <Navigation />
      <SocialNetworks />
      <Project projectId={1} />
      <Buttons left={"/projet1"} />
      <Buttons right={"/projet3"} />
    </div>
  );
};

export default Project2;
