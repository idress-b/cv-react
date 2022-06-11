import React from "react";

import Project from "../components/Project";


import Buttons from "../components/Buttons";
import SocialNetworks from "../components/SocialNetworks";
import NavButtons from "../components/NavButtons";

const Project3 = () => {
  return (
    <div className="project">
      <NavButtons />
      <SocialNetworks />
      <Project projectId={2}>
        <a
          href="https://github.com/idress-b/wp-woo-prix-a-l-unite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button secondary hover">Code Github</button>
        </a>
      </Project>
      <Buttons left={"/projet2"} />
      <Buttons right={"/projet4"} />
    </div>
  );
};

export default Project3;
