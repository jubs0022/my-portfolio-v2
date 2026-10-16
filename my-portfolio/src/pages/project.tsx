import ProjectCard from "../components/project-card";
import "./css/projects.css"
export default function Project() {
  return (
    <div className="project-hero-section">
      <div className="project-hero-row">
        <div className="project-hero-column">
          <div className="project-heading-container">
            <div className="eyebrow">
              <p>Selected work</p>
            </div>
          </div>
          <h1 className="projects-heading">Projects</h1>
          
          <div className="idea-text">
            <p>
                Ideas turned into something real.
            </p>
            <p className="tagline">
                A little curiosity. A lot of building.
            </p>
          </div>
        </div>
        <div className="project-content">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </div>
  );
}
