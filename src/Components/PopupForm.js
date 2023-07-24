import React from "react";
import CustomButton from "./CustomButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PopupForm = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const location = useLocation();
  const { pathname } = window.location;

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

  let mobileMargins =
    "Morgenstern busca fomentar un espacio inclusivo y respetuoso de intercambio. No toleramos ni apoyamos ningún tipo de discurso que promueva el odio, la discriminación, el racismo ni ninguna forma de violencia.";

  if (viewportWidth <= 768) {
    // textContent = "This is the text content for small screens.";
  } else if (viewportWidth <= 1024) {
    // textContent = "This is the text content for medium screens.";
  } else {
    // textContent = "This is the text content for large screens.";
  }

  const textColor = location.pathname === "/gallery" ? "#FE6970" : "#DC3349";

  const textPlaceHolder =
    location.pathname === "/atendeme"
      ? "Escribí acá tu comentario. Puede ser una idea, observación, o algo que te interese mencionar sobre nuestro mundo contemporáneo."
      : "Presentate brevemente, y contanos de qué forma te gustaría participar";

  const textOdio =
    location.pathname === "/atendeme"
      ? "Escribí acá tu comentario. Puede ser una idea, observación, o algo que te interese mencionar sobre nuestro mundo contemporáneo."
      : "";

  const prueba = (
    <span style={{ fontSize: "20px", fontFamily: "Light" }}>Enviar</span>
  );

  return (
    <>
      <div className="popup-form-cont">
        <form className="special-form">
          <p className="participar-popup">PARTICIPAR</p>
          {pathname !== "/gallery" && (
            <div className="form-row">
              <h3>Me llamo</h3>
              <input type="text" placeholder="Nombre" />

              <h3>y tengo</h3>
              <input type="number" placeholder="300" />
              <h3>Años.</h3>
            </div>
          )}

          <div className="form-row">
            <textarea placeholder={textPlaceHolder}></textarea>
          </div>
          <div className="form-row">
            <p className="p-popupform" style={{ color: textColor }}>
              {textOdio}
            </p>
            <CustomButton
              buttonText={prueba}
              firstColor={"#FE6970"}
              secondColor={"#005DA2"}
              thirdColor={"#4590E6"}
              backColor={"#DC3349"}
              border={"solid black"}
              width={"95px"}
              height={"15px"}
              fontSize={"18px"}
            />
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
