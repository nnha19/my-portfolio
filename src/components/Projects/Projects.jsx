import React from "react";
import "./Projects.scss";
const Projects = () => {
  return (
    <div className="projects wrapper">
      <div className="project">
        <div>
          <div>
            <h4 className="project__description">Project Description</h4>
            <p className="project__paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              mollitia sunt, cumque odit nesciunt, omnis vel quo dolorum tenetur
              eligendi laboriosam quis veritatis dignissimos quia eos ea
              molestias aliquam tempore.
            </p>
          </div>
          <div>
            <h4 className="project__techs">
              Technologies used in this project
            </h4>
            <p className="project__paragraph"></p>
          </div>
          <div className="links">
            <a>
              <button className="project__btn">
                <i class="fas fa-globe"></i> <span>View Live</span>
              </button>
            </a>
            <a>
              <button className="project__btn">
                <i class="fab fa-github"></i> <span>View Code</span>
              </button>
            </a>
          </div>
        </div>
        <img
          className="project__img"
          src="https://vlist2021.netlify.app/static/media/vlist.5aca9293.png"
        />
      </div>
    </div>
  );
};

export default Projects;
