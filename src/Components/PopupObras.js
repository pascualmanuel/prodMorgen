import React from "react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../Hooks/LanguageContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";
const PopupObras = ({ selectedImage, closePopup }) => {
  const { userLanguage, translateText } = useLanguage();

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_3asxblp",
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

    let welcomeMessage = translateText("Thanks!", "Gracias!");

    let communityMessage = translateText(
      "Your message will reach Morgen soon:)",
      "Tu mensaje le llegará pronto a Morgen :)"
    );

    toast(
      <div>
        <div>{welcomeMessage}</div>
        <div style={{ marginTop: "10px", width: "233px" }}>
          {communityMessage}
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4500,
        hideProgressBar: true,
      }
    );
  };
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

  console.log(selectedImage.details);

  return (
    <div className="popup-conexion">
      <div style={{ display: outImg }}>
        <img src={selectedImage.img} alt="Popup Image" />
      </div>
      <div className="popup-conexion-right">
        <h3 className="popup-conexion-title">
          {translateText(
            "If you want to buy this work...",
            "Si querés comprar esta obra..."
          )}
        </h3>
        <img
          style={{ display: inImg }}
          src={selectedImage.img}
          alt="Popup Image"
        />
        <p className="popup-conexion-subtitle">
          {translateText(
            "Leave your email to receive more information",
            "Dejá tu mail y recibí la información de compra."
          )}
        </p>

        <p className="popup-conexion-caracteristicas">
          Dimensiones:&nbsp;
          <span style={{ fontFamily: "Light" }}>{selectedImage.dimension}</span>
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
            <form
              onSubmit={sendEmail}
              ref={form}
              style={{ display: "contents" }}
            >
              <input
                type="email"
                name="user_email"
                required
                placeholder={translateText(
                  "e-mail address",
                  "Dirección de e-mail"
                )}
                className="email-input"
              />
              <input
                type="hidden"
                name="image_dimension"
                value={selectedImage.dimension}
              />
              <input type="hidden" name="image_url" value={selectedImage.img} />
              <input
                type="hidden"
                name="image_details"
                value={selectedImage.details}
              />
              <button
                type="submit"
                className="submit-button pointer"
                style={{ background: "#FE6970" }}
              >
                {translateText("Send", "Enviar")}
              </button>
            </form>
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
