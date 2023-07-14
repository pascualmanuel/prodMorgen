import React, { useRef } from "react";
import Accordion from "../Components/Accordion";
import Gallery from "../Components/Gallery";
import SpikeButtonThree from "../Components/SpikeButtonThree";
import { useState, useEffect } from "react";
import Popup from "../Components/PopUp";
import ConexionInestable from "../Components/ConexionInestable";
import Inadvertido from "../Components/Inadvertido";
import Desnudos from "../Components/Desnudos";
import Book from "../Components/Book";
import Estampas from "../Components/Estampas";
import FuturoInmediato from "../Components/FuturoInmediato";
import Animaciones from "../Components/Animaciones";

const Obras = () => {
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
      color: "#005DA2", // Specify the color for Tab 1
    },
    {
      title: " Desnudos",
      subtitle: "Pinturas",
      content: (
        <>
          <Desnudos />
        </>
      ),
      color: "#4590E6", // Specify the color for Tab 1
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
      color: "#7D9F00", // Specify the color for Tab 1
    },
    {
      title: " Habla morgen",
      subtitle: "textos",
      content: (
        <>
          <Book />
        </>
      ),
      color: "#AE79EF", // Specify the color for Tab 1
    },
    {
      title: " Estampas",

      // subtitle: "Lorem ipsum",

      content: (
        <>
          <Estampas />
        </>
      ),
      color: "#DCCB00", // Specify the color for Tab 1
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
      color: "#FE6970", // Specify the color for Tab 1
    },
    {
      title: "futuro inmediato",
      subtitle: "Lorem ipsum",
      content: (
        <>
          <div className="gallery-inad-container">
            <FuturoInmediato />
          </div>
        </>
      ),
      color: "#DCCB00", // Specify the color for Tab 1
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

export default Obras;
