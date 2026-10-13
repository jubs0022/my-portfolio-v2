import React, { useState } from 'react';

const Tabs = () => {
  // We use state to keep track of which tab is currently selected. 
  // '0' means the first tab is active by default.
  const [activeTab, setActiveTab] = useState(0);

  // This is our data structure holding the labels for the buttons and the content for the containers.
  const tabData = [
    {
      id: 0,
      title: 'Tab 1',
      content: 'This is the content for the FIRST container. You can place any text, images, or other React components inside here.'
    },
    {
      id: 1,
      title: 'Tab 2',
      content: 'This is the SECOND container. Notice how the content changes instantly without reloading the page.'
    },
    {
      id: 2,
      title: 'Tab 3',
      content: 'Here is the THIRD container. Just like Elementor, this keeps your page clean and organized!'
    }
  ];

  return (
    <div className="tabs-widget">
      
      {/* 1. The Buttons Container */}
      <div className="tabs-header">
        {tabData.map((tab, index) => (
          <button
            key={tab.id}
            // If the activeTab matches this button's index, add an 'active' class for styling
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            // When clicked, update the state to this tab's index
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* 2. The Content Container */}
      <div className="tabs-body">
        {/* We simply display the content of whichever tab object matches the activeTab index */}
        <p>{tabData[activeTab].content}</p>
        
        {/* 
          Alternatively, if your containers have completely different layouts, 
          you can conditionally render them like this:
          
          {activeTab === 0 && <MyCustomComponent1 />}
          {activeTab === 1 && <MyCustomComponent2 />}
          {activeTab === 2 && <div className="special-div">Custom HTML</div>}
        */}
      </div>
      
    </div>
  );
};

export default Tabs;