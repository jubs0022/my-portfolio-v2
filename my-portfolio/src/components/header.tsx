import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import MyLogo from "../assets/site-logo.png";
import MenuIcon from "../assets/menu.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="nav-section">
            <div className="nav-row">
                <div className="site-logo">
                    <NavLink to="/" onClick={closeMenu}>
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
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <img src={MenuIcon} alt="Menu" />
                </button>
            </div>

            {/* Darkened Backdrop Overlay */}
            <div className={`mobile-backdrop ${isOpen ? "active" : ""}`} onClick={closeMenu}></div>

            {/* Side Drawer Menu (50% width, sliding from right) */}
            <div className={`mobile-dropdown-menu ${isOpen ? "open" : ""}`}>
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
                <NavLink to="/project" onClick={closeMenu}>Project</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
        </div>
    );
}