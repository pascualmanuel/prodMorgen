import React from "react";
import { useEffect } from "react";
const PopupObras = ({ selectedImage, closePopup }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-conexion")) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);
  return (
    <div className="popup-conexion">
      <div>
        <img src={selectedImage} alt="Popup Image" />
      </div>
      <div className="popup-conexion-right">
        <h3 style={{ fontSize: 40, marginBottom: 5 }}>Queres que sea tuya?</h3>
        <p style={{ fontSize: 20, marginBottom: 60 }}>
          Dejá tu mail y recibí la información de compra.
        </p>
        <input type="email" placeholder="Enter your email" />
      </div>
      <span className="close-button" onClick={closePopup}>
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `rotate(45deg)` }}
        >
          <path d="M5 22L40 22" stroke="black" strokeWidth="3" />
          <path d="M22.5 39.5L22.5 4.5" stroke="black" strokeWidth="3" />
        </svg>
      </span>
    </div>
  );
};

export default PopupObras;
