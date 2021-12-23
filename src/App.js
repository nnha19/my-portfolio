import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="container">
      <Home />
      <Skills />
      <About />
      <Projects />
    </div>
  );
};

export default App;
