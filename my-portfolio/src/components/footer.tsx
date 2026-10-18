import { Link } from "react-router-dom";
import "./css/footer.css"
import MyLogo from "../assets/site-logo.png"
import GithubIcon from "../assets/github.svg?react"
import Linkedin from "../assets/linkedin.svg?react"
import Facebook from "../assets/facebook.svg?react"
import Email from "../assets/email.svg?react"

export default function Footer(){
    return(
    <div className="footer-section">
        <div className="footer-row">
            <div className="site-logo">
                <Link to="/">
                    <img src={MyLogo} alt="Site Logo" />
                </Link>
            </div>
            <div className="copyright">
                <p>© 2026 Jubert C. Nantes</p>
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
    </div>
    );
}