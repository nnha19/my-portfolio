import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
