
import ProjectsCard from "../Projects/ProjectCard";

export default function Project() {
  return (
    <div className="flex gap-20 mt-11">
        <ProjectsCard projectName="Porfolio Project" projectDescription="A fully responsive and modern portfolio website built using React and Vite for fast development and optimal performance, styled with Tailwind CSS for a clean and scalable design. The application is containerized with Docker and served through Nginx, ensuring efficient deployment, high performance, and reliability across different environments." projectImage="/images/portfolio.png" projectTechStack={["React.js", "Tailwind CSS", "Vite", "Docker", "Nginx"]} projectTechColors={["#17becb", "#17becb", "#a556f7", "#1f96ed", "#0e9648"]} projectCodeLink="https://github.com/jubs0022/my-portfolio" projectSiteLink="https://jnantes.site/portfolio/" />
    </div>
  );
}
