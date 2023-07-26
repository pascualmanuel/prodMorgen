import React, { useRef } from "react";
import Accordion from "./Accordion";
import Gallery from "./Gallery";
import SpikeButtonThree from "./SpikeButtonThree";
import { useState, useEffect } from "react";
import Popup from "./PopUp";
import ConexionInestable from "./ConexionInestable";
import Inadvertido from "./Inadvertido";
import Desnudos from "./Desnudos";
import Book from "./Book";
import Estampas from "./Estampas";
import FuturoInmediato from "./FuturoInmediato";
import Animaciones from "./Animaciones";
import "../Styles/App.css";

const AccordionItem = ({
  title,
  subtitle,
  content,
  tabColor,
  isActive,
  onClick,
}) => {
  return (
    <div className={`accordion-item-mob ${isActive ? "active-mob" : ""}`}>
      <div
        className="accordion-header-mob"
        onClick={onClick}
        style={{ backgroundColor: tabColor }}
      >
        <h3 className="accordion-title-mob">{title}</h3>
      </div>
      <div className={`accordion-content-mob ${isActive ? "open-mob" : ""}`}>
        <div
          style={{
            paddingLeft: 10,
            backgroundColor: tabColor,
            paddingBottom: 20,
            fontFamily: "Light",
          }}
        >
          {subtitle}
        </div>
        {content}
      </div>
    </div>
  );
};
// padding-left: 10px;
// background-color: #fe6970;
// padding-bottom: 20px;
// border: solid #fe6970;
const ObrasMobile = () => {
  const [activeAccordionItem, setActiveAccordionItem] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveAccordionItem((prevActive) =>
      prevActive === index ? null : index
    );
  };

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const accordionMobileItems = [
    {
      title: " Conexión intestable",
      subtitle: "Composiciones digitales",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tabColor: "#4590E6",
    },
    {
      title: "Desnudos",
      subtitle: "Pinturas",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tabColor: "#FE6970",
    },
    {
      title: " Inadvertido",
      subtitle: "Collage",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      tabColor: "#FF3910",
    },
    {
      title: " Habla morgen",
      subtitle: "textos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tabColor: "#AE79EF",
    },
    {
      title: " Estampas",

      subtitle: "",

      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tabColor: "#005DA2",
    },
    {
      title: " animaciones",
      subtitle: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tabColor: "#7D9F00",
    },
    {
      title: "futuro inmediato",
      subtitle: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tabColor: "#DCCB00",
    },
  ];

  return (
    <>
      <div className="tab-mob-container" style={{ paddingTop: 100 }}>
        <div className="obras-welcome">
          <h2 style={{ fontSize: "50px" }}> Obras</h2>
          <span onClick={openPopup}>
            <SpikeButtonThree />
          </span>
        </div>
        {accordionMobileItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            tabColor={item.tabColor}
            subtitle={item.subtitle}
            isActive={activeAccordionItem === index}
            onClick={() => handleAccordionItemClick(index)}
          />
        ))}
      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
    </>
  );
};

export default ObrasMobile;
