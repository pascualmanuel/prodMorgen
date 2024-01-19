import React from "react";
import CustomButton from "./CustomButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../Hooks/LanguageContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const PopupForm = ({ onClose }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const { userLanguage, translateText } = useLanguage();
  const location = useLocation();
  const { pathname } = window.location;

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let buttonPosition = {};

  let mobileMargins =
    "Morgenstern busca fomentar un espacio inclusivo y respetuoso de intercambio. No toleramos ni apoyamos ningún tipo de discurso que promueva el odio, la discriminación, el racismo ni ninguna forma de violencia.";

  let buttonWidth = "95px";
  let buttonHeight = "15px";
  if (viewportWidth <= 720) {
    buttonWidth = "230px";
    buttonHeight = "10px";
    buttonPosition = {
      position: "fixed",
      bottom: "45px",
    };
  }

  if (viewportHeight <= 660 && viewportWidth <= 720) {
    buttonWidth = "200px";
    buttonHeight = "5px";
  }

  const textColor = location.pathname === "/gallery" ? "#FE6970" : "#DC3349";

  const textPlaceHolder =
    location.pathname === "/atendeme"
      ? translateText(
          "Write your comment here. It can be an idea, observation, or something that you are interested in mentioning about our contemporary world.",
          "Escribí acá tu comentario. Puede ser una idea, observación, o algo que te interese mencionar sobre nuestro mundo contemporáneo."
        )
      : translateText(
          "Introduce yourself briefly, and tell us how you would like to participate",
          "Presentate brevemente, y contanos de qué forma te gustaría participar"
        );

  const textOdio =
    location.pathname === "/atendeme"
      ? translateText(
          "Morgenstern seeks to foster an inclusive and respectful space for exchange. We do not tolerate or support any type of speech that promotes hate, discrimination, racism or any form of violence.",
          "Morgenstern busca fomentar un espacio inclusivo y respetuoso de intercambio. No toleramos ni apoyamos ningún tipo de discurso que promueva el odio, la discriminación, el racismo ni ninguna forma de violencia"
        )
      : "";

  const sendText = (
    <span style={{ fontSize: "20px", fontFamily: "Light" }}>
      {translateText("Send", "Enviar")}
    </span>
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_yloakyb",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          onClose(); // Close t
        },
        (error) => {
          console.log(error.text);
        }
      );

    let welcomeMessage = translateText("Welcome!", "¡Bienvenidx!");
    let communityMessage = translateText(
      "You are now part of the Morgensterns Community",
      "Ya sos parte de la comunidad de Morgensterns"
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
        autoClose: 5500,
        hideProgressBar: true,
      }
    );
  };

  const handleButtonClick = () => {
    // Trigger the form submission by programmatically clicking the hidden submit button
    form.current.querySelector('button[type="submit"]').click();
    console.log("first");
  };

  return (
    <>
      <div className="popup-form-cont">
        <form className="special-form" ref={form} onSubmit={sendEmail}>
          {pathname !== "/gallery" && (
            <div className="form-row form-row-cont-mob">
              <div className="form-row-mob">
                <h3>{translateText("My name is", "Me llamo")}</h3>
                <input
                  type="text"
                  name="user_name"
                  placeholder={translateText("Name", "Nombre")}
                />
              </div>
              <div className="form-row-mob">
                <h3 className="">{translateText(", and I'm", ", tengo")}</h3>
                <input name="user_age" type="number" placeholder="300" />
                <h3>{translateText("years old.", "años.")}</h3>
              </div>
            </div>
          )}

          <div className="form-row">
            <textarea
              name="user_comment"
              maxLength={600}
              placeholder={textPlaceHolder}
            ></textarea>
          </div>
          <div className="form-row footer-mob-popup">
            <p className="p-popupform" style={{ color: textColor }}>
              {textOdio}
            </p>
            <div style={buttonPosition} className="3ed">
              <button
                type="submit"
                style={{ background: "transparent", border: "transparent" }}
              ></button>

              <CustomButton
                buttonText={sendText}
                firstColor={"#FE6970"}
                secondColor={"#005DA2"}
                thirdColor={"#4590E6"}
                backColor={"#DC3349"}
                border={"solid black"}
                width={buttonWidth}
                height={buttonHeight}
                fontSize={"18px"}
                link={""}
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PopupForm;
