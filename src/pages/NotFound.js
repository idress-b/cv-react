import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="not-found">
      <h2>error 404</h2>

      <NavLink to="/">
        <h3>
          {" "}
          Retour a l'accueil <i class="fas fa-home"></i>
        </h3>
      </NavLink>
    </div>
  );
};

export default NotFound;
