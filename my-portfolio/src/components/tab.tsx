import { useState } from "react";
import "./css/tab.css";
import Skills from "../pages/skills";
import HTML5 from "../assets/html5.svg?react"

const Tabs = () => {
  // We use state to keep track of which tab is currently selected.
  // '0' means the first tab is active by default.
  const [activeTab, setActiveTab] = useState(0);

  // This is our data structure holding the labels for the buttons and the content for the containers.
 const tabData = [
  {
    id: 0,
    title: "Web Developer",
    content:
      "Modern, responsive websites built with semantic markup and a focus on performance and usability.",
    // Pinasama natin ang name at icon dito:
    skills: [
      { name: "HTML", icon: HTML5 },
      { name: "CSS", icon: null }, // Pwede mong ilagay yung imported SVG dito kung meron na
      { name: "Javascript", icon: null },
      { name: "React.js", icon: null }
    ]
  }
];

  return (
    <div className="tabs-widget">
      {/* 1. The Buttons Container */}
      <div className="tabs-header">
        {tabData.map((tab, index) => (
          <button
            className=""
            key={tab.id}
            // If the activeTab matches this button's index, add an 'active' class for styling
            className={`tab-button ${activeTab === index ? "active" : ""} primary-button`}
            // When clicked, update the state to this tab's index
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* 2. The Content Container */}
      <div className="tabs-body">
        {/* Ipinapakita ang title at content ng active tab */}
        <h3>{tabData[activeTab].title}</h3>
        <p>{tabData[activeTab].content}</p>

        {/* I-map lang natin yung "skills" array ng active tab */}
        <div className="skills-container">
    {tabData[activeTab].skills.map((skill, index) => {
      // Ipasa natin ang Icon sa isang variable na nagsisimula sa capital letter
      const SkillIcon = skill.icon;

      return (
        <button key={index} className="skill-button">
          
          {/* Kung may laman ang SkillIcon, i-render siya as component */}
          {SkillIcon && (
            <SkillIcon 
              style={{ width: '20px', height: '20px', marginRight: '8px' }} 
            />
          )}
          
          {skill.name}

        </button>
      );
    })}
  </div>
      </div>
    </div>
  );
};

export default Tabs;
