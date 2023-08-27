import "../Styles/App.css";
import MorgenGirando from "../Components/MorgenGirando";
import CustomButton from "../Components/CustomButton";
import React, { useEffect, useState, useRef } from "react";
import { MobileView } from "react-device-detect";
import MobileHome from "../Components/MobileHome";

import "./Prueba.css";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../Hooks/LanguageContext";
import emailjs from "@emailjs/browser";

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_z4jrond",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
        offsetX: 100,
        offsetY: 80,
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
        offsetX: 100,
        offsetY: comunidadOffsetY,
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
        offsetX: 100,
        offsetY: 100,
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
        offsetX: 100,
        offsetY: agendaOffsetY,
      },
    },
    {
      buttonText: "MorgenMerch",
      firstColor: "#DFB000",
      secondColor: "#DC3349",
      thirdColor: "#AE79EF",
      link: "https://morgenstern.flashcookie.com/",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 40,
        offsetY: morgenmerchOffsetY,
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
        offsetX: -40,
        offsetY: interactivoOffsetY,
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
        offsetX: 130,
        offsetY: 80,
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
    return viewportWidth <= 768;
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
                <form
                  style={{ display: "contents" }}
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="email"
                    name="user_email"
                    placeholder={translateText(
                      "e-mail address",
                      "Dirección de e-mail"
                    )}
                    className="email-input"
                  />
                  <button
                    type="submit"
                    className="submit-button"
                    style={{ background: "#AE79EF" }}
                  >
                    {translateText("Send", "Enviar")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
