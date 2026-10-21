import { useState } from "react";
import "./css/tab.css";
//import Skills from "../pages/skills";
import type { FC, SVGProps } from "react";

export interface skill {
  name: string;
  color: string;
}

export interface TabsInfo {
  id: string;
  tabTitle: string;
  tabDescription: string;
  tabSkillBadge:skillBadge[];
}

interface skillBadge{
  skillIcon: FC<SVGProps<SVGSVGElement>>;
  skillText: String
}
interface TabProps {
  tabBody: TabsInfo[];
}

export default function TabsComponent({ tabBody }: TabProps) {
  // Track the active tab by id. Default: first tab.
  const [activeId, setActiveId] = useState<string>(tabBody[0]?.id ?? "");

  const activeTab = tabBody.find((tab) => tab.id === activeId);

  // Guard in case tabBody is empty
  if (!activeTab) return null;
  

  return (
    <div className="tabs-widget">
      {/* 1. The Buttons Container */}
      <div className="tabs-header">
        {tabBody.map((tabButton) => (
          <button
            key={tabButton.id}
            className={`tabs-button ${
              tabButton.id === activeId ? "active" : ""
            }`}
            onClick={() => setActiveId(tabButton.id)}
          >
            {tabButton.tabTitle}
          </button>
        ))}
      </div>

      {/* 2. Only the active tab's body */}
      <div className="tabs-body">
        <h3>{activeTab.tabTitle}</h3>
        <p>{activeTab.tabDescription}</p>
        <div className="skill-badge-wrapper">
  {activeTab.tabSkillBadge.map((skillBadge, index) => {
    const SkillIcon = skillBadge.skillIcon;
    return (
      <div className="skill-wrapper">
        <p className="skill-number">
          {String(index + 1).padStart(2, "0")}
        </p>
        <button className="skill-button">
          <SkillIcon />
          <h5>{skillBadge.skillText}</h5>
        </button>
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
}