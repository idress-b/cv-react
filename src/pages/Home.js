import React from "react";

import SocialNetworks from "../components/SocialNetworks";
import NavButtons from "../components/NavButtons";
import Buttons from "../components/Buttons";
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
      <Buttons right={"/projet1"} />

      <div className="home-main">
        <div className="main-content">
          <h1>Idress Benchellali</h1>
          <h2>
            Développeur <span>{text}</span>
            <Cursor />
          </h2>
          <p>
            Dévoué dans mes missions, j'ai hâte que nous collaborions ensemble !
          </p>
        </div>
      </div>
      <a href="/assets/doc/CV_Idress_Benchellali.pdf">
        <button className="button-home">Télécharger le CV</button>
      </a>

      <SocialNetworks />
    </div>
  );
};

export default Home;
