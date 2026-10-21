import "./css/home.css";
import DownloadIcon from "../assets/download.svg?react";
import { Link } from "react-router-dom";
import ViewIcon from "../assets/arrow.svg?react";
import GithubIcon from "../assets/github.svg?react";
import Linkedin from "../assets/linkedin.svg?react";
import Facebook from "../assets/facebook.svg?react";
import Email from "../assets/email.svg?react";
import GraduationImage from "../assets/grad-image.jpeg";
import TabComponent from "../components/tab";
import LongView from "../assets/lvc.png";
import ExternalLink from "../assets/external-link.svg?react"
import { tabDetails } from "./data/tab";

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
              Science in Information Technology graduate focused on WordPress,
              web development, and learning full-stack technologies.
            </p>
            <div className="cv-cta">
              <button className="primary-button">
                <DownloadIcon className="download-icon" />
                Download CV
              </button>
              <button className="ghost-button ghost-background">
                View CV <ViewIcon className="view-icon" />
              </button>
            </div>
            <div className="social-links">
              <Link
                to="https://github.com/jubs0022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="icons" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/jubert-nantes-302206347/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="icons" />
              </Link>
              <Link
                to="https://www.facebook.com/jubert.nantes.2024/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="icons" />
              </Link>
              <Link
                to="mailto:jubert.nantes0418@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email className="icons" />
              </Link>
            </div>
          </div>
          <div className="hero-container">
            <div className="hero-image">
              <img src={GraduationImage} />
              <div className="grad-text">
                <p className="developer-text">DEVELOPER IN THE MAKING</p>
                <p className="learning-text">
                  Always learning. Always building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-row">
          <div className="description-container">
            <p>
              A BSIT graduate with experience in Software Development, Web
              Development, and API Development. I’ve completed multiple academic
              projects focused on creating efficient and user-friendly
              applications, gaining practical skills in designing modern
              solutions that address real-world needs.
            </p>
            <button className="ghost-button">
              View More <ViewIcon className="view-icon" />
            </button>
          </div>
          <div className="heading-container">
            <div className="eyebrow eyebrow-margin">
              <p>About me</p>
            </div>
            <h2>
              Analytical mind.{" "}
              <span className="h2-span">Creative execution.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="skill-section">
        <div className="skill-row">
          <div className="skill-heading-container">
            <div className="eyebrow eyebrow-margin">
              <p>What I do</p>
            </div>
            <h2>
              Different tools. <span className="h2-span">One builder.</span>
            </h2>
          </div>
          <TabComponent tabBody={tabDetails}/>
        </div>
      </div>
      <div className="projects-section">
        <div className="projects-row">
          <div className="projects-heading-container">
            <div className="eyebrow eyebrow-margin">
              <p>Selected work</p>
            </div>
            <h2>Built with purpose.
            </h2>
          </div>
          <div className="project-wrapper">
            <div className="project-shot">
                <img src={LongView} />
            </div>
            <div className="project-column">
              <div className="eyebrow">
                <p>WEB DEVELOPMENT</p>
              </div>
              <h3 className="">Personal Portfolio</h3>
              <p>
                Turning ideas into thoughtful digital experiences. A Bachelor of Science in Information Technology graduate focused on WordPress, web development, and learning full-stack technologies.
              </p>
              <div className="skill-badge-wrapper">
                <p className="skill-badge">React</p>
                <p className="skill-badge">HTML</p>
                <p className="skill-badge">CSS</p>
                <p className="skill-badge">Javascript</p>
              </div>
              <div className="cta-wrapper">
                <button className="primary-button">View Live<ExternalLink /></button>
                <button className="ghost-button ghost-background"><GithubIcon />View Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-row">
          <div className="contact-wrapper">
            <div className="contact-heading-container">
            <div className="eyebrow">
              <p>Get in touch</p>
            </div>
            <h2>
              Analytical mind.<br />
              <span className="h2-span contact-span">Creative execution.</span>
            </h2>
            <p>Open to full-time roles, freelance projects, and everything in between.</p>
          </div>
              <div className="cta-wrapper contact-cta">
                <button className="primary-button primary-padding primary-font">View Live</button>
                <button className="ghost-button ghost-background ghost-padding ghost-font">View Code</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
