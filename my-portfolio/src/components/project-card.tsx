import "./css/project-card.css";
import ViewIcon from "../assets/arrow.svg?react";
import GithubIcon from "../assets/github.svg?react";

export interface skill {
  name: string;
  color: string;
}

export interface ProjectInfo {
  id: string;
  projectImage: string;
  projectType: string;
  projectTitle: string;
  projectDescription: string;
  projectSkills: skill[];
  githubLink: string;
  siteLink: string;
}

interface ProjectCardsProps {
  project: ProjectInfo;
}

export default function ProjectCard({ project }: ProjectCardsProps) {
  return (
    <div className="project-card">
      <div className="project-upper">
        <img src={project.projectImage} />
      </div>
      <div className="project-info">
        <div className="project-description">
          <div className="eyebrow-number">
          <div className="eyebrow">
            <p>{project.projectType}</p>
          </div>
          <span>02</span>
        </div>
        <h4>{project.projectTitle}</h4>
        <p>{project.projectDescription}</p>
        </div>
        <div className="cta-skill-badge">
          <div className="skill-cards">
            {project.projectSkills.map((skill) => (
              <span
                className="skill-badge-color"
                style={{ "--tech-color": skill.color } as React.CSSProperties}
              >
                {skill.name}
              </span>
            ))}
          </div>
          <div className="divider"></div>
          <div className="project-cta">
            {project.githubLink && (
              <button
                className="code-button"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <GithubIcon />
                View Code
              </button>
            )}
            <button
              className="visit-button"
              onClick={() => window.open(project.siteLink, "_blank")}
            >
              Visit Site
              <ViewIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
