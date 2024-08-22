import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="resources">
            Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
