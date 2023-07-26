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

const ObrasMobile = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const [activeAccordionItem, setActiveAccordionItem] = useState(null);

  const accordionMobileItems = [
    {
      title: " Conexión intestable",
      subtitle: "Composiciones digitales",
      content: (
        <>
          {/* <FirstTab /> */}
          <h2>Hola</h2>
        </>
      ),
      color: "#4590E6",
    },
    {
      title: " Desnudos",
      subtitle: "Pinturas",
      content: (
        <>
          {/* <SecondTab /> */}
          <h2>Hola</h2>
        </>
      ),
      color: "#FE6970",
    },
    {
      title: " Inadvertido",
      subtitle: "Collage",
      content: (
        <>
          <div className="gallery-inad-container">
            {/* <ThirdTab /> */}
            <h2>Hola</h2>
          </div>
        </>
      ),
      color: "#FF3910",
    },
    {
      title: " Habla morgen",
      subtitle: "textos",
      content: (
        <>
          {/* <FourthTab /> */}
          <h2>Hola</h2>
        </>
      ),
      color: "#AE79EF",
    },
    {
      title: " Estampas",

      // subtitle: "Lorem ipsum",

      content: (
        <>
          {/* <FivthTab /> */}
          <h2>Hola</h2>
        </>
      ),
      color: "#005DA2",
    },
    {
      title: " animaciones",
      // subtitle: "Lorem ipsum",
      content: (
        <>
          {" "}
          {/* <SixthTab /> */}
          <h2>Hola</h2>
        </>
      ),
      color: "#7D9F00",
    },
    {
      title: "futuro inmediato",
      subtitle: "Lorem ipsum",
      content: (
        <>
          <div className="gallery-inad-container">
            {/* <SeventhTab /> */}
            <h2>Hola</h2>
          </div>
        </>
      ),
      color: "#DCCB00",
    },
  ];

  const handleAccordionItemClick = (index) => {
    setActiveAccordionItem((prevActive) =>
      prevActive === index ? null : index
    );
  };

  const renderSubtitle = (subtitle, isActive) => {
    return isActive ? <p>{subtitle}</p> : null;
  };

  return (
    <>
      <div className="tab-mob-container">
        {accordionMobileItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item-mob ${
              activeAccordionItem === index ? "active" : ""
            }`}
          >
            <div
              className="accordion-header-mob"
              style={{ backgroundColor: item.color }}
              onClick={() => handleAccordionItemClick(index)}
            >
              <div className="accordion-header-content-mob">
                <h3>{item.title}</h3>
                {renderSubtitle(item.subtitle, activeAccordionItem === index)}
              </div>
              <div className="acc-close-icon-mob">
                {activeAccordionItem === index ? "X" : ""}
              </div>
            </div>
            {activeAccordionItem === index && (
              <div className="accordion-content-mob">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ObrasMobile;
