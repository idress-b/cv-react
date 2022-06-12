import React from "react";
import Project from "../components/Project";

import Buttons from "../components/Buttons";

import SocialNetworks from "../components/SocialNetworks";
import NavButtons from "../components/NavButtons";

const Project1 = () => {
  return (
    <div className="project">
      <NavButtons />
      <Project projectId={0}>
        <a
          href="https://github.com/idress-b/symfony-simple-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button secondary hover">Code Github</button>
        </a>
      </Project>
      <Buttons left={"/"} />
      <Buttons right={"/projet2"} />
      <SocialNetworks />
    </div>
  );
};

export default Project1;
