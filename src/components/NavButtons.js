import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <div class="menu">
              <i class="icon fa-solid fa-house"></i>
              <p class="sub-menu">HOME</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projet1"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <div class="menu">
              <i class="icon fa-solid fa-images"></i>
              <p class="sub-menu">PORTFOLIO</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <div class="menu">
              <i class="icon fa-solid fa-message"></i>
              <p class="sub-menu">CONTACT</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
