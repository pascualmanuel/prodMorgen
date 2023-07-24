import React from "react";
import { useEffect, useState } from "react";
import "../Styles/App.css";
import PopupForm from "./PopupForm";
import { useLocation } from "react-router-dom";
import PopupFormCommunity from "./PopupFormCommunity";

const Popup = ({ isOpen, onClose }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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
  const location = useLocation();

  let backColorPop = location.pathname === "/gallery" ? "#DC3349" : "#FE6970";

  let strokeColor = location.pathname === "/comunidad" ? "black" : "white";

  if (location.pathname === "/gallery") {
    backColorPop = "#DC3349";
  } else if (location.pathname === "/atendeme") {
    backColorPop = "#FE6970";
  } else if (
    location.pathname === "/comunidad" ||
    location.pathname === "/agenda" ||
    location.pathname === "/obras"
  ) {
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
    location.pathname === "/agenda" ||
    location.pathname === "/obras";
  const showAtendeme =
    location.pathname === "/atendeme" || location.pathname === "/gallery";

  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div
        className={`popup-container ${isOpen ? "open" : ""}`}
        style={{
          "--color": backColorPop,
          top: popUpTop,
          bottom: popUpBottom,
          right: popUpright,
          left: popUpleft,
        }}
      >
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        > */}

        <span className="close-button" onClick={onClose}>
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
        {/* </div> */}
        {showCommunity && <PopupFormCommunity />}
        {showAtendeme && <PopupForm />}
      </div>
    </div>
  );
};

export default Popup;
