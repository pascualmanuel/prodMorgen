import "../Styles/App.css";
import MorgenGirando from "../Components/MorgenGirando";
import CustomButton from "../Components/CustomButton";
import React, { useEffect, useState } from "react";

import "./Prueba.css";

function Home() {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  var homeButtonWidth = "210px";
  var homeButtonHeight = "55px";

  const buttons = [
    {
      buttonText: "Obras",
      firstColor: "#DCCB00",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      // backColor: "transparent",
      link: "/",
      border: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 100, // Ajusta el desplazamiento horizontal del botón
        offsetY: 80, // Ajusta el desplazamiento vertical del botón
      },
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
      position: {
        offsetX: 100, // Ajusta el desplazamiento horizontal del botón
        offsetY: 50, // Ajusta el desplazamiento vertical del botón
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
        offsetY: 100, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: "Morgen Merch",
      firstColor: "#DFB000",
      secondColor: "#DC3349",
      thirdColor: "#AE79EF",
      link: "/",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: 40, // Ajusta el desplazamiento horizontal del botón
        offsetY: 170, // Ajusta el desplazamiento vertical del botón
      },
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
      position: {
        offsetX: -40, // Ajusta el desplazamiento horizontal del botón
        offsetY: 190, // Ajusta el desplazamiento vertical del botón
      },
    },
    {
      buttonText: "La Revista",
      firstColor: "#AE79EF",
      secondColor: "#005DA2",
      thirdColor: "#4590E6",
      link: "/",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      position: {
        offsetX: -100,
        offsetY: 100,
      },
    },
    {
      buttonText: "Yo, Morgenstern",
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
    }, 4000); // 7 seconds delay

    return () => clearTimeout(timer);
  }, []);

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

  const radio = 310; // Radio del círculo

  return (
    <>
      <div className="home-container">
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
      <div className="circulo-animado">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 696 696">
          <circle className="cls-1" cx="348" cy="348" r={radio} />
        </svg>
      </div>

      <div>
        {showNewsPopup && (
          <div id="news-popup" className="news-popup">
            {/* Pop-up content */}
            Hel
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
