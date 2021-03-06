import React, { useEffect, useRef } from "react";
import "./Projects.scss";
import project1Img from "../../assets/images/project1.png";
import project2Img from "../../assets/images/project2.png";
import project3Img from "../../assets/images/project3.png";

const Projects = ({ setProjectsRef }) => {
  const projectsRef = useRef();

  useEffect(() => {
    setProjectsRef(projectsRef);
  });
  const projects = [
    {
      name: "Vlist",
      techs: [
        "HTML",
        "Tailwind Css",
        "React.js",
        "Typescript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      description:
        "  Vlist allows users to save the vocabularies. Users can add a vocabulary to their list, get the definition of that vocabulary from third party api or add it manually. Users can also add the example sentences and resource. Users can search and filter the vocabularies by resources. If users want to be notified when another user adds a vocabulary to their list, they can ring noti bell and will receive notifications.",
      img: "https://vlist2021.netlify.app/static/media/vlist.5aca9293.png",
      websiteLink: "https://vlist2021.netlify.app",
      githubLink: "https://github.com/nnha19/VList",
    },
    {
      name: "Ecommerce",
      websiteLink: "https://maymyovision.netlify.app",
      githubLink: "https://github.com/nnha19/Ecommerce",
      img: project1Img,
      description:
        "This is an ecommerce website where users can view sunglasses, filter the products, ask questions about a product and admin will be able to answer, give rating and review to the product, add the products to their cart and apply discount coupons to get the disscount.",
      techs: ["HTML", "CSS", "React.js", "Express.js", "Node.js", "MongoDB"],
    },
    {
      name: "Netflix Clone",
      description:
        "Users can search plenty of movies from TBDBAPI, add their favourite movies to their list, like and dislike the movies.",
      techs: [
        "HTML",
        "CSS",
        "React.js",
        "TMDBAPI",
        "Reduxtoolkit",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      img: project2Img,
      websiteLink: "https://netflixclonewithreact.netlify.app",
      githubLink: "https://github.com/nnha19/Netflix-Clone",
    },
    {
      name: "Place Sharing",
      img: project3Img,
      description:
        "This website allows users to share the places they have been. If authenticated, user can add the places and other users will be able to see it, like it, comment on it and give rating to that place. For all of these actions taken by other users, place owner will get notifications.",
      techs: [
        "HTML",
        "CSS",
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Cloudinary",
      ],
      websiteLink: "https://pyinoolwintravel.netlify.app",
      githubLink: "https://github.com/nnha19/Place_Sharing_App",
    },
  ];

  const projectList = projects.map((project, index) => {
    return (
      <div key={index} className="project wrapper">
        <div className="project__about">
          <h3 className="project__header">{project.name}</h3>
          <div>
            <h4 className="project__description">Project Description</h4>
            <p className="project__paragraph">{project.description}</p>
          </div>
          <div>
            <h4 className="project__techs">
              Technologies used in this project
            </h4>
            <ul className="project__tech-list">
              {project.techs.map((tech, index) => (
                <li key={index} className="project__tech">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="links">
            <a target="_blank" href={project.websiteLink}>
              <button className="project__btn">
                <i className="fas fa-globe"></i> <span>View Live</span>
              </button>
            </a>
            <a target="_blank" href={project.githubLink}>
              <button className="project__btn">
                <i className="fab fa-github"></i> <span>View Code</span>
              </button>
            </a>
          </div>
        </div>
        <img className="project__img" src={project.img} />
      </div>
    );
  });

  return (
    <div ref={projectsRef} className="projects ">
      <h1 className="projects__header">My Works</h1>
      {projectList}
    </div>
  );
};

export default Projects;
