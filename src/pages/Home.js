import React from "react";

import SocialNetworks from "../components/SocialNetworks";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import NavButtons from "../components/NavButtons";

const Home = () => {
  return (
    <div className="home">
      <Logo />

      <NavButtons />
      <SocialNetworks />
      <Buttons right={"/projet1"} />
      <div className="home-main">
        <div className="main-content">
          <h1>Idress Benchellali</h1>
          <h2>Développeur web</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
