import React from "react";

import NavButtons from "../components/NavButtons";
import ContactUs from "../components/ContactUs";
import SocialNetworks from "../components/SocialNetworks";
import Buttons from "../components/Buttons";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <NavButtons />
        <Buttons left={"/projet4"} />
        <ContactUs />
        {/* <div className="contact-infos">
          <div className="adress">
            <div className="content">
              <h4>
                <i class="fa-solid fa-location-dot colored"></i> Mobilité
              </h4>
              <p>Lyon et sa région</p>
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
        </div> */}
        <SocialNetworks />
      </div>
    </main>
  );
};

export default Contact;
