import React from "react";

import Project from "../components/Project";
import Buttons from "../components/Buttons";
import SocialNetworks from "../components/SocialNetworks";
import NavButtons from "../components/NavButtons";

const Project4 = () => {
  return (
    <div className="project">
      <NavButtons />
      <Project projectId={4} />
      <Buttons left={"/projet4"} />
      <Buttons right={"/contact"} />
      <SocialNetworks />
    </div>
  );
};

export default Project4;
