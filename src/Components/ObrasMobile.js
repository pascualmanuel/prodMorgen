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
      content: <ConexionInestable />,
      tabColor: "#4590E6",
    },
    {
      title: "Desnudos",
      subtitle: "Pinturas",
      content: <Desnudos />,
      tabColor: "#FE6970",
    },
    {
      title: " Inadvertido",
      subtitle: "Collage",
      content: <Inadvertido />,
      tabColor: "#FF3910",
    },
    {
      title: " Habla morgen",
      subtitle: "textos",
      content: <Book />,
      tabColor: "#AE79EF",
    },
    {
      title: " Estampas",
      subtitle: "",
      content: <Estampas />,
      tabColor: "#005DA2",
    },
    {
      title: " animaciones",
      subtitle: "",
      content: <Animaciones />,
      tabColor: "#7D9F00",
    },
    {
      title: "futuro inmediato",
      subtitle: "fotomontajes",
      content: <FuturoInmediato />,
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
