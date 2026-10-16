import "./css/home.css";
import DownloadIcon from "../assets/download.svg?react";
import ViewIcon from "../assets/arrow.svg?react"
import { Link } from "react-router-dom";
import GithubIcon from "../assets/github.svg?react"
import Linkedin from "../assets/linkedin.svg?react"
import Facebook from "../assets/facebook.svg?react"
import Email from "../assets/email.svg?react"
import GraduationImage from "../assets/grad-image.jpeg"
import TabComponent from "../components/tab";

export default function Home() {
  return (
    <div className="main-page">
      <div className="hero-section">
        <div className="hero-row">
          <div className="hero-column">
            <div className="eyebrow">
              <p>Software · Web · API Development</p>
            </div>
            <h1 className="my-name">Jubert C. Nantes</h1>
            <p className="code-text">
              <span className="cyan">const</span>{" "}
              <span className="text-foreground"> dream</span> ={" "}
              <span className="code-string"> "Future Developer"</span>;
            </p>
            <p>
              Turning ideas into thoughtful digital experiences. A Bachelor of
              Science in Information Technology graduate focused on WordPress, web
              development, and learning full-stack technologies.
            </p>
            <div className="cv-cta">
              <button className="primary-button"><DownloadIcon className="download-icon"/>Download CV</button>
              <button className="ghost-button">View CV <ViewIcon className="view-icon"/></button>
            </div>
            <div className="social-links">
                  <Link to="https://github.com/jubs0022" target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="icons"/>
                  </Link>
                  <Link to="https://www.linkedin.com/in/jubert-nantes-302206347/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="icons" />
                  </Link>
                  <Link to="https://www.facebook.com/jubert.nantes.2024/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="icons" />
                  </Link>
                  <Link to="mailto:jubert.nantes0418@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Email className="icons" />
                  </Link>
              </div>
          </div>
          <div className="hero-container">
              <div className="hero-image">
                <img src={GraduationImage} />
                <div className="grad-text">
                  <p className="developer-text">DEVELOPER IN THE MAKING</p>
                  <p className="learning-text">Always learning. Always building.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-row">
          <div className="description-container">
            <p>
              A BSIT graduate with experience in Software Development, Web Development, and API Development. I’ve completed multiple academic projects focused on creating efficient and user-friendly applications, gaining practical skills in designing modern solutions that address real-world needs.
            </p>
            <button className="ghost-button">View More <ViewIcon className="view-icon"/></button>
          </div>
          <div className="heading-container">
            <div className="eyebrow eyebrow-margin">
              <p>01 / About me</p>
            </div>
            <h2>Analytical mind. <span className="h2-span">Creative execution.</span></h2>
          </div>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-row">
          <div className="skill-heading-container">
            <div className="eyebrow eyebrow-margin">
              <p>01 / About me</p>
            </div>
            <h2>Different tools. <span className="h2-span">One builder.</span></h2>
          </div>
          <TabComponent />
        </div>
      </div>
    </div>
  );
}
