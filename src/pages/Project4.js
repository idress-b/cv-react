import React from "react";

import Project from "../components/Project";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import SocialNetworks from "../components/SocialNetworks";

const Project4 = () => {
  return (
    <div className="project">
      <Mouse />
      <Navigation />
      <Logo />
      <SocialNetworks />
      <Project projectId={3} />
      <Buttons left={"/projet3"} />
      <Buttons right={"/contact"} />
    </div>
  );
};

export default Project4;
