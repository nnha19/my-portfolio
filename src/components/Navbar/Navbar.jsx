import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = ({ aboutRef, contactRef, projectsRef, skillsRef }) => {
  const [showNav, setShowNav] = useState(false);

  const scrollToHandler = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
    setShowNav(false);
  };

  return (
    <nav className="nav wrapper">
      <h1 className="nav__logo">Nyi</h1>

      <ul className={`nav__lists ${showNav ? "show-nav" : undefined} `}>
        <li
          onClick={() => scrollToHandler(projectsRef)}
          className="nav__list nav__item"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToHandler(aboutRef)}
          className="nav__list nav__item"
        >
          About
        </li>
        <li
          onClick={() => scrollToHandler(skillsRef)}
          className="nav__list nav__item"
        >
          Skills
        </li>
        <li
          onClick={() => scrollToHandler(contactRef)}
          className="nav__list nav__item"
        >
          Contact
        </li>
        <li className="nav__list github">
          <a href="https://github.com/nnha19" target="_black">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="nav__list">
          <a
            href="https://drive.google.com/file/d/1Qfqt9zZC4X7WLhBaQ0W_zPt7V-3hDqnd/view?usp=sharing"
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
      <div onClick={() => setShowNav(!showNav)} className="hamburger-container">
        <span
          className={`hamburger ${showNav ? "nav-show-hamburger" : undefined}`}
        ></span>
      </div>
    </nav>
  );
};

export default Navbar;
