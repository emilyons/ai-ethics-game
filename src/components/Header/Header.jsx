import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        AI Guardians: Adventures in Ethics
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
