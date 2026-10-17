import ProjectCard, { type ProjectInfo } from "../components/project-card";
import "./css/projects.css";
import LongView from "../assets/lvc.png";
import PageSpeedOptimized from "../assets/pagespeedoptimized.png";

export default function Project() {
  const projectsList: ProjectInfo[] = [
    {
      id: "1",
      projectImage: LongView,
      projectType: "Web Development",
      projectTitle: "Longview Commercial",
      projectDescription:
        "Developed the complete frontend architecture and user experience for Longview Commercial, a private multifamily investment platform. Built the custom homepage and internal subpages, and implemented custom post types to dynamically manage and display Market Intelligence and Investor Outlook insights.",
      projectSkills: [
        { name: "Wordpress", color: "#21759B" },
        { name: "Elementor", color: "#92003B"},
        { name: "HTML", color: "#E34F26"},
        { name: "CSS", color: "#1572B6" },
        { name: "Javascript", color: "#F7DF1E"},
        { name: "PHP", color: "#777BB4"}
      ],
      githubLink: "",
      siteLink: "https://longviewcommercial.com/",
    },
    {
      id: "2",
      projectImage: PageSpeedOptimized,
      projectType: "Web Development",
      projectTitle: "Page Speed Optimized",
      projectDescription:
        "A dedicated WordPress performance service agency focused on site speed and Core Web Vitals. Assisted in developing internal pages and refined responsive layouts across device screens to ensure a seamless and optimized user experience.",
      projectSkills: [
        { name: "Wordpress", color: "#21759B" },
        { name: "Elementor", color: "#92003B"},
        { name: "HTML", color: "#E34F26"},
        { name: "CSS", color: "#1572B6" },
        { name: "Javascript", color: "#F7DF1E"},
        { name: "PHP", color: "#777BB4"}
      ],
      githubLink: "",
      siteLink: "https://longviewcommercial.com/",
    },
  ];
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
            <p>Ideas turned into something real.</p>
            <p className="tagline">A little curiosity. A lot of building.</p>
          </div>
        </div>
        <div className="project-content">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
