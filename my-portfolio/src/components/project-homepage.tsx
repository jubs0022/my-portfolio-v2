import ExternalLink from "../assets/external-link.svg?react";
import GithubIcon from "../assets/github.svg?react";
import type { ProjectCardsProps } from "./project-card";
import "./css/project-homepage.css";

export default function ProjectHomepage({ project }: ProjectCardsProps) {
  return (
    <div className="project-wrapper">
      <div className="project-shot">
        <img src={project.projectImage} />
      </div>
      <div className="project-column">
        <div className="eyebrow">
          <p>{project.projectType}</p>
        </div>
        <h3 className="">{project.projectTitle}</h3>
        <p>{project.projectDescription}</p>
        <div className="skill-badge-wrapper">
          {project.projectSkills.map((skill) => (
            <p className="skill-badge">{skill.name}</p>
          ))}
        </div>
        <div className="cta-wrapper">
          <button
            className="primary-button"
            onClick={() => window.open(project.siteLink, "_blank")}
          >
            View Live
            <ExternalLink />
          </button>
          {project.githubLink && (
            <button
              className="ghost-button ghost-background"
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              <GithubIcon />
              View Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
