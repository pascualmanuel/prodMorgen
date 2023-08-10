import React from "react";
import CustomButton from "./CustomButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PopupForm = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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

  if (viewportHeight <= 660) {
    buttonWidth = "200px";
    buttonHeight = "5px";
  }

  const textColor = location.pathname === "/gallery" ? "#FE6970" : "#DC3349";

  const textPlaceHolder =
    location.pathname === "/atendeme"
      ? "Escribí acá tu comentario. Puede ser una idea, observación, o algo que te interese mencionar sobre nuestro mundo contemporáneo."
      : "Presentate brevemente, y contanos de qué forma te gustaría participar";

  const textOdio =
    location.pathname === "/atendeme"
      ? "Morgenstern busca fomentar un espacio inclusivo y respetuoso de intercambio. No toleramos ni apoyamos ningún tipo de discurso que promueva el odio, la discriminación, el racismo ni ninguna forma de violencia."
      : "";

  const prueba = (
    <span style={{ fontSize: "20px", fontFamily: "Light" }}>Enviar</span>
  );

  return (
    <>
      <div className="popup-form-cont">
        <form className="special-form">
          {pathname !== "/gallery" && (
            <div className="form-row form-row-cont-mob">
              <div className="form-row-mob">
                <h3>Me llamo</h3>
                <input type="text" placeholder="Nombre" />
              </div>
              <div className="form-row-mob">
                <h3>y tengo</h3>
                <input type="number" placeholder="300" />
                <h3>Años.</h3>
              </div>
            </div>
          )}

          <div className="form-row">
            <textarea placeholder={textPlaceHolder}></textarea>
          </div>
          <div className="form-row footer-mob-popup">
            <p className="p-popupform" style={{ color: textColor }}>
              {textOdio}
            </p>
            <div style={buttonPosition}>
              <CustomButton
                buttonText={prueba}
                firstColor={"#FE6970"}
                secondColor={"#005DA2"}
                thirdColor={"#4590E6"}
                backColor={"#DC3349"}
                border={"solid black"}
                width={buttonWidth}
                height={buttonHeight}
                fontSize={"18px"}
              />
            </div>
          </div>
          {/* <div className="form-row" style={{ justifyContent: "end" }}>
            <div>
              <CustomButton
                buttonText={"Enviar"}
                firstColor={"#FE6970"}
                secondColor={"#005DA2"}
                thirdColor={"#4590E6"}
                backColor={"#FE6970"}
                border={"solid black"}
                link={""}
              />
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default PopupForm;
