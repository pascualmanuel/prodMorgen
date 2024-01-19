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

import { useLanguage } from "../Hooks/LanguageContext";
const ObrasDesktop = () => {
  const { userLanguage, translateText } = useLanguage();
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to make the button visible after 4 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Clear the timeout if the component unmounts or if you have some cleanup logic
    return () => clearTimeout(timeoutId);
  }, []); // E
  const accordionItems = [
    {
      title: translateText("Unstable connection", "Conexión intestable"),

      subtitle: translateText(
        "Ddigital compositions",
        "Composiciones digitales"
      ),
      content: (
        <>
          <ConexionInestable />
        </>
      ),
      color: "#4590E6",
    },
    {
      title: translateText("Nudies", " Desnudos"),
      subtitle: translateText("Paintings", " Pinturas"),
      content: (
        <>
          <Desnudos />
        </>
      ),
      color: "#FE6970",
    },
    // Unperceived (collages)
    {
      title: translateText("Unperceived", " Inadvertido"),
      subtitle: translateText("Collages", "Collage"),
      content: (
        <>
          <div className="gallery-inad-container">
            <Inadvertido />
          </div>
        </>
      ),
      color: "#FF3910",
    },
    {
      title: translateText("Morgen Speaks", " Habla Morgen"),
      subtitle: translateText("Texts", " textos"),
      content: (
        <>
          <Book />
        </>
      ),
      color: "#AE79EF",
    },
    {
      title: translateText("Stamps", "Estampas"),

      subtitle: (
        <>
          <span style={{ color: "transparent" }}>.</span>
        </>
      ),

      content: (
        <>
          <Estampas />
        </>
      ),
      color: "#005DA2",
    },
    {
      title: translateText("Animations", "Animaciones"),
      subtitle: (
        <>
          <span style={{ color: "transparent" }}>.</span>
        </>
      ),
      content: (
        <>
          {" "}
          <Animaciones />
        </>
      ),
      color: "#7D9F00",
    },

    {
      title: translateText("Out of focus", "Fuera de foco"),
      subtitle: translateText("Photomontages", "Fotomontajes"),
      content: (
        <>
          <div className="gallery-inad-container">
            <FuturoInmediato />
          </div>
        </>
      ),
      color: "#DCCB00",
    },
  ];

  return (
    <>
      <div className="obras-container">
        <div className="obras-left">
          <h2 className="obras-title" style={{ fontSize: 70 }}>
            {translateText("Works", "Obras")}
          </h2>
          <div
            className={`obras-spike-button-container ${
              isVisible ? "visible" : ""
            }`}
          >
            <div onClick={openPopup} className="obras-spike-button pointer">
              <SpikeButtonThree />
            </div>
          </div>
        </div>
        <Accordion items={accordionItems} />
      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
    </>
  );
};

export default ObrasDesktop;
