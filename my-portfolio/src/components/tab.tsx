//import { useState } from "react";
import "./css/tab.css";
import HTML5 from "../assets/html5.svg?react"
//import Skills from "../pages/skills";

export default function TabsItem(){
  // We use state to keep track of which tab is currently selected.
  // '0' means the first tab is active by default.
  const texts = ["First text", "Second text", "Third text", "Fourth text"];
    const listItems = [];

    for (let i = 0; i < 4; i++) {
        // Ginagawa nitong '01', '02', '03', '04' ang numbers
        const skillNumber = (i + 1).toString().padStart(2, '0');

        listItems.push(
          <div className="skill-wrapper" key={i}>
            <p className="skill-number">{skillNumber}</p>
            <button className="skill-button">
              <HTML5/>
              <h5>{texts[i]}</h5>
            </button>
          </div>  
        );
    }
  return (
    <div className="tabs-widget">
      {/* 1. The Buttons Container */}
      <div className="tabs-header">
        <button className="tabs-button">Web Development</button>
      </div>
      <div className="tabs-body">
        <h3>Web Developer</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quidem nisi eligendi doloremque illum dignissimos voluptatibus inventore modi natus itaque eos deserunt id, corporis perspiciatis, labore et facilis officiis molestias.</p>
        <div className="skill-badge">
          {listItems}
        </div>
      </div>
    </div>
  );
};
