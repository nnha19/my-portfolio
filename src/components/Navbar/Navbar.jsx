import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav wrapper">
      <h1 className="nav__logo">Logo</h1>
      <ul className="nav__lists">
        <li className="nav__list nav__item">Projects</li>
        <li className="nav__list nav__item">About</li>
        <li className="nav__list nav__item">Contact</li>
        <li className="nav__list">
          <a href="https://github.com/nnha19" target="_black">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="nav__list">
          <button className="nav__btn">Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
