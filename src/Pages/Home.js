import "../Styles/App.css";
import MorgenGirando from "../Components/MorgenGirando";
import CustomButton from "../Components/CustomButton";
import React, { useEffect, useState } from "react";
import { MobileView } from "react-device-detect";
import MobileHome from "../Components/MobileHome";

import "./Prueba.css";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../Hooks/LanguageContext";

function Home() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const { userLanguage, translateText } = useLanguage();
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var homeButtonWidth = "210px";
  var homeButtonHeight = "55px";

  console.log(viewportWidth, viewportHeight, "hola");

  let agendaOffsetY = 100;
  let morgenmerchOffsetY = 170;
  let interactivoOffsetY = 190;
  let comunidadOffsetY = 50;

  if (window.innerHeight < 690) {
    agendaOffsetY = 70;
  }

  if (window.innerHeight < 650) {
    agendaOffsetY = 10;
    morgenmerchOffsetY = 120;
    interactivoOffsetY = 170;
    comunidadOffsetY = 10;
  }
  //    {translateText("I, Morgenstern", "Yo, Morgenstern")}
  const buttons = [
    {
      buttonText: translateText("Works", "Obras"),
      firstColor: "#DCCB00",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      // backColor: "transparent",
      link: "/obras",
      border: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 100, // Ajusta el desplazamiento horizontal del botón
        offsetY: 80, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: translateText("Community", "Comunidad"),
      firstColor: "#DC3349",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      link: "/comunidad",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 100, // Ajusta el desplazamiento horizontal del botón
        offsetY: comunidadOffsetY, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: "",
      firstColor: "",
      secondColor: "",
      thirdColor: "",
      link: "",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 100, // Ajusta el desplazamiento horizontal del botón
        offsetY: 100, // Ajusta el desplazamiento vertical del botón
      },
      display: "none",
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
      position: {
        offsetX: 100, // Ajusta el desplazamiento horizontal del botón
        offsetY: agendaOffsetY, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: `${viewportWidth} ` + viewportHeight,
      firstColor: "#DFB000",
      secondColor: "#DC3349",
      thirdColor: "#AE79EF",
      link: "https://morgenstern.flashcookie.com/",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 40, // Ajusta el desplazamiento horizontal del botón
        offsetY: morgenmerchOffsetY, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: translateText("Interactive", "Interactivo"),
      firstColor: "#4590E6",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      link: "/interactivo",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: -40, // Ajusta el desplazamiento horizontal del botón
        offsetY: interactivoOffsetY, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: translateText("The magazine", "La revista"),
      firstColor: "#AE79EF",
      secondColor: "#005DA2",
      thirdColor: "#4590E6",
      link: "/revista",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: -100,
        offsetY: 100,
      },
    },
    {
      buttonText: translateText("I, Morgenstern", "Yo, Morgenstern"),
      firstColor: "#FE6970",
      secondColor: "#FF3910",
      thirdColor: "#DC3349",
      link: "/yomorgenstern",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 130, // Ajusta el desplazamiento horizontal del botón
        offsetY: 80, // Ajusta el desplazamiento vertical del botón
      },
    },
  ];

  const [showNewsPopup, setShowNewsPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsPopup(true);
    }, 5000); // 7 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowNewsPopup(false);
  };

  useEffect(() => {
    let transitionTimer;

    const popupElement = document.getElementById("news-popup");

    if (popupElement) {
      if (showNewsPopup) {
        transitionTimer = setTimeout(() => {
          popupElement.classList.add("show");
        }, 100);
      } else {
        popupElement.classList.remove("show");
      }
    }
    return () => clearTimeout(transitionTimer);
  }, [showNewsPopup]);

  const circumference = 2000; // Circumference of the circle in pixels
  const buttonWidth = 200;
  const buttonHeight = 200;
  const radius = circumference / (2 * Math.PI); // Radius of the circle

  const getButtonPosition = (index) => {
    const angle = (index / buttons.length) * 2 * Math.PI;
    const x =
      radius * Math.cos(angle) -
      buttonWidth / 2 +
      buttons[index].position.offsetX -
      buttonWidth / 2;
    const y =
      radius * Math.sin(angle) -
      buttonHeight / 2 +
      buttons[index].position.offsetY -
      buttonHeight / 2;

    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(64% + ${y}px)`,
    };
  };

  const isMobileView = () => {
    return viewportWidth <= 768; // You can adjust the width threshold based on your requirements
  };

  return (
    <>
      {isMobileView() && <MobileHome />}

      {!isMobileView() && (
        <div className="home-container" style={{ overflow: "hidden" }}>
          <div className="circle-container">
            <div className="circle-wrapper">
              {buttons.map((button, index) => (
                <div
                  key={index}
                  className="circle-button"
                  style={getButtonPosition(index)}
                >
                  <CustomButton {...button} />
                </div>
              ))}
              <MorgenGirando />
            </div>
          </div>
        </div>
      )}

      <div>
        {!isMobileView() && showNewsPopup && (
          <div id="news-popup" className="news-popup">
            <div className="cont-home-pop">
              <h2 style={{ fontSize: 40 }}>
                {translateText("Stay tuned", "Recibí las")} <br />
                {translateText("", "Novedades")}
                &nbsp;
              </h2>

              <span
                className="close-button pointer"
                style={{ marginTop: 33 }}
                onClick={handleClosePopup}
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: `rotate(45deg)` }}
                >
                  <path d="M5 22L40 22" stroke="black" strokeWidth="3" />
                  <path
                    d="M22.5 39.5L22.5 4.5"
                    stroke="black"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </div>
            <div className="contact-me" style={{ marginLeft: 60 }}>
              <div className="email-container">
                <input
                  type="email"
                  placeholder="Dirección de e-mail"
                  className="email-input"
                />
                <button
                  type="submit"
                  className="submit-button"
                  style={{ background: "#AE79EF" }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
