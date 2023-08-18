import React, { useState, useEffect } from "react";
import "../Styles/App.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderItems = () => {
    return items.map((item, index) => {
      const isActive = index === activeIndex ? "active" : "";
      const tabStyle = { backgroundColor: item.color };

      return (
        <React.Fragment key={index}>
          <div
            className={`accordion-tab ${isActive} pointer`}
            onClick={() => {
              handleClick(index);
            }}
            style={tabStyle}
          >
            <p className="accordion-subtitle">{item.subtitle}</p>
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9.07 3.18"
              className="flechita"
              style={{
                width: 35,
                marginLeft: 10,
              }}
            >
              <path d="m.22,1.37h-.22v.43h.22v-.43Zm8.79.37c.08-.08.08-.22,0-.31L7.64.06c-.08-.08-.22-.08-.31,0-.08.08-.08.22,0,.31l1.22,1.22-1.22,1.22c-.08.08-.08.22,0,.31.08.08.22.08.31,0l1.37-1.37ZM.22,1.81h8.64v-.43H.22v.43Z" />
            </svg>
            <h5 className="accordion-title">{item.title}</h5>
          </div>
          <div className={`accordion-content ${isActive}`}>{item.content}</div>
        </React.Fragment>
      );
    });
  };

  return <div className="accordion">{renderItems()}</div>;
};

export default Accordion;
