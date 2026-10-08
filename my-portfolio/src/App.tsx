import About from "./components/sections/about/About";
import Skills from "./components/sections/skills/skills";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/sections/homepage/Homepage";
import ScrollToTop from "./components/actions/ScrollToTop";
import Contacts from "./components/sections/contacts/Contact";
import Header from "./components/sections/header/Header";
import Project from "./components/sections/Projects/Project";
export default function App() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/portfolio/" element={<Homepage />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/contacts" element={<Contacts />} />
        <Route path="/portfolio/projects" element={<Project />} />
      </Routes>
    </div>
  );
}
