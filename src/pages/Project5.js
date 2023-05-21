import React from "react";

import Project from "../components/Project";

import Buttons from "../components/Buttons";
import SocialNetworks from "../components/SocialNetworks";
import NavButtons from "../components/NavButtons";

const Project5 = () => {
  return (
    <div className="project">
      <NavButtons />
      <Project projectId={4}>
        <a
          href="https://github.com/idress-b/memory-swiftui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button secondary hover">Code Github</button>
        </a>
      </Project>
      <Buttons left={"/projet4"} />
      <Buttons right={"/contact"} />
      <SocialNetworks />
    </div>
  );
};

export default Project5;
