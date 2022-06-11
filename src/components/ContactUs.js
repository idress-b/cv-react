import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formMessage, setFormMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
        `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setFormMessage({
            class: "success",
            message: "Votre message a bien été envoyé !",
          });
          form.current.reset();
        },
        (error) => {
          setFormMessage({
            class: "error",
            message: "Une erreur est survenue !",
          });
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Formulaire de contact</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <div>
          <label>Nom</label>
          <input
            type="text"
            name="user_name"
            required
            autoComplete="off"
            id="name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" id="mess" required />
        </div>
        <input type="submit" value="Envoyer" className="button hover" />
      </form>
      {formMessage && (
        <div className="form-message ">
          <p className={formMessage.class}> {formMessage.message} </p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
