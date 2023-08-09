import React from "react";
import CustomButton from "../Components/CustomButton";
import Morgen from "../Assets/morgen-trans.png";
import { useState, useEffect } from "react";
import { useLanguage } from "../Hooks/LanguageContext";
import { Link } from "react-router-dom";

import "../Styles/App.css";

const MobileHome = () => {
  let homeButtonHeight = "15px";
  let homeButtonWidth = "220px";

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [showPopup, setPopup] = useState(false);
  const { userLanguage, translateText } = useLanguage();
  useEffect(() => {
    // Verificar si el pop-up ya se ha mostrado previamente
    const hasPopupShown = localStorage.getItem("popupShown");

    if (!hasPopupShown) {
      // Si no se ha mostrado previamente, configurar un temporizador para mostrarlo después de 3 segundos
      const timer = setTimeout(() => {
        setPopup(true);
        localStorage.setItem("popupShown", "true"); // Marcar que el pop-up se ha mostrado
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setPopup(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("mob-home-popup-overlay")) {
      setPopup(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttons = [
    {
      buttonText: "Yo, Morgenstern",
      firstColor: "#FE6970",
      secondColor: "#FF3910",
      thirdColor: "#DC3349",
      link: "/yomorgenstern",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "24px",
    },
    {
      buttonText: "Obras",
      firstColor: "#DCCB00",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      link: "/obras",
      border: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "La Revista",
      firstColor: "#AE79EF",
      secondColor: "#005DA2",
      thirdColor: "#4590E6",
      link: "/revista",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "Interactivo",
      firstColor: "#4590E6",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      link: "/interactivo",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "MorgenMerch",
      firstColor: "#DFB000",
      secondColor: "#DC3349",
      thirdColor: "#AE79EF",
      link: "/hola",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "Comunidad",
      firstColor: "#DC3349",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      link: "/comunidad",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },

    {
      buttonText: "Agenda",
      firstColor: "#005DA2",
      secondColor: "#DC3349",
      thirdColor: "#DFB000",
      link: "/agenda",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
  ];

  let marginTopBack = "-77vh";
  let contPadTop = 0;

  if (viewportHeight < 720) {
    marginTopBack = "-83vh";
  }

  let heightMobCont = "100vh";
  if (viewportHeight < 600) {
    heightMobCont = "135vh";
    contPadTop = "10px";
    marginTopBack = "-90vh";
  }

  const handleButtonEntendidoClick = (event) => {
    event.stopPropagation();
    handleClosePopup();
  };

  return (
    <>
      <div className="home-container" style={{ height: heightMobCont }}>
        {/* <div className="mob-home-container" style={{ paddingTop: contPadTop }}> */}
        <div className="mob-home-container" style={{ paddingTop: contPadTop }}>
          {/* {buttons.map((button, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              <CustomButton {...button} />
            </div>
          ))} */}
          <div className="mob-links-cont">
            <Link to={"/yomorgenstern"}>
              <h2 className="mob-links-home">Yo, Morgenstern</h2>
            </Link>
            <Link to={"/obras"}>
              <h2 className="mob-links-home">Obras</h2>
            </Link>
            <Link to={"/revista"}>
              <h2 className="mob-links-home">La Revista </h2>
            </Link>
            <Link to={"/interactivo"}>
              <h2 className="mob-links-home">Interactivo </h2>
            </Link>
            <Link to={"/https://morgenstern.flashcookie.com/"}>
              <h2 className="mob-links-home">Morgen Merch</h2>
            </Link>
            <Link to={"/comunidad"}>
              <h2 className="mob-links-home">Comunidad</h2>
            </Link>
            <Link to={"/agenda"}>
              <h2 className="mob-links-home">Agenda </h2>
            </Link>
          </div>
        </div>

        <div className="mob-img-cont" style={{ marginTop: marginTopBack }}>
          <img src={Morgen} width={170} />
        </div>
      </div>

      {showPopup && (
        <div className="mob-home-popup-overlay" onClick={handleClosePopup}>
          <div className="mob-home-popup-content">
            <h3 className="p-pop-up-mob">
              {translateText(
                "Go to a computer to enjoy for a better experience.",
                "Pasá a una compu para disfrutar de una mejor experiencia."
              )}
            </h3>
            <div className="button-entendido">
              <h2>Entendido</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHome;
