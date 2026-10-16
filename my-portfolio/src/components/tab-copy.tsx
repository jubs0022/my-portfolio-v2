import  { useState } from 'react';

const Tabs = () => {
  // We use state to keep track of which tab is currently selected. 
  // '0' means the first tab is active by default.
  const [activeTab, setActiveTab] = useState(0);

  // This is our data structure holding the labels for the buttons and the content for the containers.
  const tabData = [
    {
      id: 0,
      title: 'Web Developer',
      content: 'This is the content for the FIRST container. You can place any text, images, or other React components inside here.'
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
      </div>
      
    </div>
  );
};

export default Tabs;