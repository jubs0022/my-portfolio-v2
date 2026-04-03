import React from "react";

type HeaderProps = {
    title?: string;
    subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({
    title = "My Portfolio",
    subtitle = "Welcome",
}) => {
    return (
        <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #ccc" }}>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <p style={{ margin: "0.25rem 0 0", color: "#666" }}>{subtitle}</p>
        </header>
    );
};

export default Header;