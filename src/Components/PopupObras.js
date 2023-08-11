import React from "react";
import { useEffect, useState } from "react";

const PopupObras = ({ selectedImage, closePopup }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  let outImg = "inherit";
  let inImg = "none";
  if (window.innerWidth < 720) {
    outImg = "none";
    inImg = "inherit";
  }

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

  console.log(selectedImage);
  return (
    <div className="popup-conexion">
      <div style={{ display: outImg }}>
        <img src={selectedImage.img} alt="Popup Image" />
      </div>
      <div className="popup-conexion-right">
        <h3 className="popup-conexion-title">Si querés comprar esta obra...</h3>
        <img
          style={{ display: inImg }}
          src={selectedImage.img}
          alt="Popup Image"
        />
        <p className="popup-conexion-subtitle">
          Dejá tu mail y recibí la información de compra.
        </p>

        <p className="popup-conexion-caracteristicas">
          Dimensiones:&nbsp;
          <span style={{ fontFamily: "Light", textTransform: "capitalize" }}>
            {selectedImage.dimension}
          </span>
        </p>
        <p
          className="popup-conexion-caracteristicas"
          style={{ marginBottom: 50 }}
        >
          Caracteristicas:&nbsp;
          <span style={{ fontFamily: "Light", textTransform: "capitalize" }}>
            {selectedImage.details}
          </span>
        </p>

        <div className="contact-me-obras" style={{ marginLeft: 0 }}>
          <div className="email-container">
            <input
              type="email"
              placeholder="Dirección de e-mail"
              className="email-input"
            />
            <button
              type="submit"
              className="submit-button"
              style={{ background: "#FE6970" }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      <span className="close-button pointer" onClick={closePopup}>
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
