import React from "react";
import { useEffect, useState } from "react";
import "../Styles/App.css";
import PopupForm from "./PopupForm";
import { useLocation } from "react-router-dom";
import PopupFormCommunity from "./PopupFormCommunity";

const Popup = ({ isOpen, onClose }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const location = useLocation();

  let locPath = location.pathname;

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-container")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
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

  let backColorPop = location.pathname === "/gallery" ? "#DC3349" : "#FE6970";

  let strokeColor = "white";

  if (
    location.pathname === "/obras" ||
    location.pathname === "/agenda" ||
    location.pathname === "/comunidad"
  ) {
    strokeColor = "black";
  }

  console.log(location.pathname);
  if (locPath === "/gallery") {
    backColorPop = "#DC3349";
  } else if (locPath === "/atendeme") {
    backColorPop = "#FE6970";
  } else if (locPath === "/comunidad" || "/agenda" || "/obras") {
    backColorPop = "#7D9F00";
  }

  let popUpTop = "70px";
  let popUpBottom = "70px";
  let popUpright = "100px";
  let popUpleft = "100px";

  if (location.pathname === "/gallery") {
    popUpTop = "100px";
    popUpBottom = "100px";
  }
  if (window.innerHeight < 665) {
    popUpTop = "60px";
    popUpBottom = "60px";
  }

  if (window.innerWidth > 1700) {
    popUpTop = "190px";
    popUpBottom = "190px";
    popUpright = "200px";
    popUpleft = "200px";
  }

  const showCommunity =
    location.pathname === "/comunidad" ||
    location.pathname === "/agendanueva" ||
    location.pathname === "/obras";
  const showAtendeme =
    location.pathname === "/atendeme" || location.pathname === "/gallery";

  let mobileSuppPopUp = {
    backgroundColor: backColorPop,
  };
  if (window.innerWidth < 720) {
    mobileSuppPopUp = {
      position: "fixed",
      top: "30px",
      bottom: "30px",
      left: "30px",
      right: "30px",
      minWidth: "265px",
      backgroundColor: backColorPop,
    };
  }

  if (window.innerWidth < 720 && location.pathname === "/gallery") {
    mobileSuppPopUp = {
      position: "fixed",
      top: "10vh",
      bottom: "15vh",
      left: "30px",
      right: "30px",
      minWidth: "280px",
      backgroundColor: backColorPop,
    };
  }

  if (window.innerWidth < 720 && location.pathname === "/atendeme") {
    mobileSuppPopUp = {
      position: "fixed",
      top: "12vh",
      bottom: "5vh",
      left: "30px",
      right: "30px",
      minWidth: "280px",
      backgroundColor: backColorPop,
    };
  }

  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div
        className={`popup-container ${isOpen ? "open" : ""}`}
        style={mobileSuppPopUp}
      >
        <span className="close-button pointer" onClick={onClose}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(45deg)` }}
          >
            <path d="M5 22L40 22" stroke={strokeColor} strokeWidth="3" />
            <path
              d="M22.5 39.5L22.5 4.5"
              stroke={strokeColor}
              strokeWidth="3"
            />
          </svg>
        </span>
        {showCommunity && <PopupFormCommunity onClose={onClose} />}
        {showAtendeme && <PopupForm onClose={onClose} />}
      </div>
    </div>
  );
};

export default Popup;
