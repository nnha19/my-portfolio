import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="nav wrapper">
      <h1 className="nav__logo">Logo</h1>

      <ul className={`nav__lists ${!showNav ? "nav-hidden" : undefined} `}>
        <li className="nav__list nav__item">Projects</li>
        <li className="nav__list nav__item">About</li>
        <li className="nav__list nav__item">Contact</li>
        <li className="nav__list github">
          <a href="https://github.com/nnha19" target="_black">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="nav__list">
          <a
            href="https://drive.google.com/file/d/1T8jkspLIFrmAhjsBGTeyv5FeMW6KfQFG/view?usp=sharing"
            target="_blank"
          >
            <button className="nav__btn">Resume</button>
          </a>
        </li>
      </ul>
      {showNav && (
        <a
          className="nav__github"
          href="https://github.com/nnha19"
          target="_black"
        >
          <i className="fab fa-github"></i>
        </a>
      )}
      <div onClick={() => setShowNav(true)} className="hamburger-container">
        <span className="hamburger">Hamburger</span>
      </div>
    </nav>
  );
};

export default Navbar;
