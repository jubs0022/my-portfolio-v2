import { NavLink } from "react-router-dom";
import "./css/header.css";
import MyLogo from "../assets/site-logo.png";


export default function Header(){
    return(
    <div className="nav-section">
        <div className="nav-row">
            <div className="site-logo">
                <NavLink to="/">
                    <img src={MyLogo} alt="Site Logo" />
                </NavLink>
            </div>
            <div className="nav-items">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/project">Project</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    </div>
    );
    
}