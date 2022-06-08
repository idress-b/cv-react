import React from "react";
import Project from "../components/Project";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import SocialNetworks from "../components/SocialNetworks";

const Project1 = () => {
  return (
    <div className="project">
      <Mouse />
      <Logo />
      <Navigation />
      <SocialNetworks />
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
    </div>
  );
};

export default Project1;
