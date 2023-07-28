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

const ObrasDesktop = () => {
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

  const accordionItems = [
    {
      title: " Conexión intestable",
      subtitle: "Composiciones digitales",
      content: (
        <>
          <ConexionInestable />
        </>
      ),
      color: "#4590E6",
    },
    {
      title: " Desnudos",
      subtitle: "Pinturas",
      content: (
        <>
          <Desnudos />
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
            <Inadvertido />
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
          <Book />
        </>
      ),
      color: "#AE79EF",
    },
    {
      title: " Estampas",

      // subtitle: "Lorem ipsum",

      content: (
        <>
          <Estampas />
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
          <Animaciones />
        </>
      ),
      color: "#7D9F00",
    },
    {
      title: "futuro inmediato",
      subtitle: "fotomontajes",
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
          <h2 style={{ fontSize: 70 }}>Obras</h2>
          <div onClick={openPopup} className="obras-spike-button">
            <SpikeButtonThree />
          </div>
        </div>
        <Accordion items={accordionItems} />
      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
    </>
  );
};

export default ObrasDesktop;
