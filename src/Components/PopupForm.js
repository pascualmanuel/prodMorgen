import React from "react";
import CustomButton from "./CustomButton";
const PopupForm = () => {
  const prueba = (
    <span style={{ fontSize: "20px", fontFamily: "Light" }}>Envíar</span>
  );
  return (
    <>
      <div className="popup-form-cont">
        <form className="special-form">
          <div className="form-row">
            <h3>Me llamo</h3>
            <input type="text" placeholder="Nombre" />

            <h3>y tengo</h3>
            <input type="number" placeholder="300" />
            <h3>Años.</h3>
          </div>

          <div className="form-row">
            <textarea placeholder="Acá podés escribir lo que quieras! Puede ser alguna idea, observación o reflexión sobre el proyecto."></textarea>
          </div>
          <div className="form-row">
            <p
              style={{
                fontSize: "12px",
                width: "700px",
                color: "#DC3349",
                marginRight: "70px",
              }}
            >
              Morgenstern busca fomentar un espacio inclusivo y respetuoso de
              intercambio. No toleramos ni apoyamos ningún tipo de discurso que
              promueva el odio, la discriminación, el racismo ni ninguna forma
              de violencia.
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
                buttonText={"Envíar"}
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
