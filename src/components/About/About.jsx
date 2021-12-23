import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div className="about wrapper">
      <div>
        <h4 className="about__header">About Me</h4>
        <p>
          Hello, I am Nyi Nyi. I am a MERN-STACK web developer who prioritizes
          on writing clean code that can easily be scaled and maintainable. I am
          strongly passionate to build beautiful and functional websites and
          also enjoy learning new skills and solving problems.
        </p>
      </div>
      <div>
        <img src="https://image.freepik.com/free-vector/female-programmist-woman-writing-code-content-manager-young-girl-working-laptop-vector-illustration-programmer-woman-software-computer-language-written-by-freelancer_80590-11194.jpg" />
      </div>
    </div>
  );
};

export default About;