import React from "react";
import "./Skills.scss";
const Skills = () => {
  const mySkills =
    "html css javascript react redux typescript scss node express ";

  return (
    <div className="skills wrapper">
      <h2 className="skills__header">My Skills</h2>
      <p style={{ fontSize: "1.2rem" }}>
        As of now, these are the skills I have been working with and I am open
        and eager to learn any new skills required.
      </p>
      <ul className="skill-list">
        <div>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>HTML</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>CSS/Scss</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Javascript</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>React/Redux</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Next.js</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Typescript</p>
          </li>
        </div>
        <div>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Node.js</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Express</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>MongoDB</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>JWT</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Git/Github</p>
          </li>
          <li className="skill">
            <i class="far fa-check-circle"></i>
            <p>Figma</p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Skills;
