import React from "react";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Buttons from "../components/Buttons";
import ContactUs from "../components/ContactUs";
import SocialNetworks from "../components/SocialNetworks";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Logo />
        <Navigation />
        <Buttons left={"/projet4"} />
        <ContactUs />
        <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>
                <i class="fa-solid fa-location-dot colored"></i> Adresse
              </h4>
              <p>Mobilité sur Lyon et sa région</p>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>
                <i class="fa-solid fa-envelope colored"></i> Email
              </h4>
              <p>idress.benchellali@gmail.com</p>
            </div>
          </div>
          <SocialNetworks />
        </div>
      </div>
    </main>
  );
};

export default Contact;
