import React from "react";

import SocialNetworks from "../components/SocialNetworks";
import { NavLink } from "react-router-dom";
import NavButtons from "../components/NavButtons";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const { text } = useTypewriter({
    words: [
      "Web",
      "Front-end",
      "Back-end",
      "react Js",
      "optimiste",
      "curieux",
      "motivé",
      "passionné",
    ],
    loop: 0,
  });

  return (
    <div className="home">
      <NavButtons />

      <div className="home-main">
        <div className="main-content">
          <h1>Idress Benchellali</h1>
          <h2>
            Développeur <span>{text}</span>
            <Cursor />
          </h2>
          <p>
            Pour moi le rôle du développeur est de maîtriser les meilleurs
            outils pour créer la plus belle expérience digitale.
          </p>
        </div>
      </div>
      <NavLink to="/projet1" className="left hover">
        <button className="button-home">Commencer la visite {">>"}</button>
      </NavLink>

      <SocialNetworks />
    </div>
  );
};

export default Home;
