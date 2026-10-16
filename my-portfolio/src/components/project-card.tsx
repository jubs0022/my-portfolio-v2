import "./css/project-card.css"
import Portfolio from "../assets/portfolio-project.jpg"

import Arrow from "../assets/arrow.svg?react"

export default function ProjectCard(){
    return (
        <div className="project-card">
            <div className="project-upper">
                <img src={Portfolio} />
                <button><Arrow /></button>
            </div>
        </div>
    );
}