import React, { useState } from "react";
import "../Styles/App.css"; // Create a CSS file for styling

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderItems = () => {
    return items.map((item, index) => {
      const isActive = index === activeIndex ? "active" : "";
      const tabStyle = { backgroundColor: item.color };
      //   const tabStyle = {
      //     backgroundColor: item.color,
      //     width: activeIndex === index ? "100%" : "58px",
      //   };

      return (
        <React.Fragment key={index}>
          <div
            className={`accordion-tab ${isActive}`}
            onClick={() => handleClick(index)}
            style={tabStyle}
          >
            {item.title}
          </div>
          <div className={`accordion-content ${isActive}`}>{item.content}</div>
        </React.Fragment>
      );
    });
  };

  return <div className="accordion">{renderItems()}</div>;
};

export default Accordion;
