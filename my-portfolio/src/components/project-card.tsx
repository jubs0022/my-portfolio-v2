import "./css/project-card.css";
import Portfolio from "../assets/portfolio-project.jpg";

import Arrow from "../assets/arrow.svg?react";
import ViewIcon from "../assets/arrow.svg?react";
import GithubIcon from "../assets/github.svg?react";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-upper">
        <img src={Portfolio} />
        <button>
          <Arrow />
        </button>
      </div>
      <div className="project-info">
        <div className="eyebrow-number">
          <div className="eyebrow">
            <p>Web Development</p>
          </div>
          <span>01</span>
        </div>
        <h4>Personal Portfolio</h4>
        <p>
          A home for my work, skills, and story. Built with React and Vite,
          styled with Tailwind CSS, and deployed with Docker and Nginx.
        </p>
        <div className="skill-cards">
          <span className="react">React</span>
          <span className="react">CSS</span>
          <span className="react">HTML</span>
          <span className="react">Typescript</span>
        </div>
        <div className="divider"></div>
        <div className="project-cta">
            <button className="code-button"><GithubIcon />View Code</button>
            <button className="visit-button">Visit Site<ViewIcon /></button>
        </div>
      </div>
    </div>
  );
}
