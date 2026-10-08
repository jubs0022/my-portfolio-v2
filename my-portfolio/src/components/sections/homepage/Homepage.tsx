import Titles from "../others/Titles";
import Footer from "../footer/Footer";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import Project from "./Project";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-start gap-6 w-full px-4 md:px-8">
      <Profile />
      <div className="mt-32 w-full mx-auto">
        <Titles title="ABOUT" />
      </div>
      <AboutMe />
      <div className="mt-32 w-full mx-auto">
        <Titles title="SKILLS" />
      </div>
      <Skill />
      <div className="mt-32 w-full mx-auto">
        <Titles title="PROJECTS" />
      </div>
      <Project />
      <Footer />
    </div>
  );
}
