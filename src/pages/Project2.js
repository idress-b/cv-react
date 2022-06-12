import React from "react";

import Project from "../components/Project";
import Buttons from "../components/Buttons";
import SocialNetworks from "../components/SocialNetworks";
import NavButtons from "../components/NavButtons";

const Project2 = () => {
  return (
    <div className="project">
      <NavButtons />
      <Project projectId={1} />
      <Buttons left={"/projet1"} />
      <Buttons right={"/projet3"} />
      <SocialNetworks />
    </div>
  );
};

export default Project2;
