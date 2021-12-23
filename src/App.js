import React, { useRef, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  const [skillsRef, setSkillsRef] = useState();
  const [aboutRef, setAboutRef] = useState();
  const [projectsRef, setProjectsRef] = useState();
  const [contactRef, setContactRef] = useState();

  return (
    <div className="container">
      <Navbar
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home projectsRef={projectsRef} />
      <Skills setSkillsRef={setSkillsRef} />
      <About setAboutRef={setAboutRef} />
      <Projects setProjectsRef={setProjectsRef} />
      <Contact setContactRef={setContactRef} />
    </div>
  );
};

export default App;
