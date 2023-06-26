import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
// import NavBar from "./NavBar";
import BackgroundDiv from "../Components/BackgroundDiv";
import YoMorBack from "../Assets/yomor2.png";
import YoMorBackDos from "../Assets/yomor3.png";
import YoMorBackTres from "../Assets/yomor4.png";
import YoMorBack4 from "../Assets/yomor5.png";
import Prueba from "../Assets/pruebita.png";
import SpikeButton from "../Components/SpikeButton";
function YoMorgen() {
  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const YoMorStyle = {
    height: "995px",
    backgroundImage: `url(${YoMorBack})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
  };

  const YoMorStyleDos = {
    height: "950px",
    backgroundImage: `url(${YoMorBackDos})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right",
  };
  const additionalTextStyle = {
    // backgroundImage: `url(${YoMorBackTres})`,
    // backgroundRepeat: " no-repeat",
    // backgroundSize: "cover",
  };
  const handleClick = () => {
    setShowAdditionalText(true);
  };

  if (showAdditionalText) {
    YoMorStyleDos.backgroundImage = `url(${YoMorBack4})`;
    YoMorStyleDos.height = "2000px";
  }
  return (
    <>
      <div style={{ backgroundColor: "black", minWidth: "1250px" }}>
        <BackgroundDiv />
        <div style={YoMorStyle}></div>
        <div style={YoMorStyleDos}>
          <div>
            <p className="yoMor-text">
              Morgenstern es un ensayo artístico acerca de los modos en que nos
              vinculamos con lxs otrxs, el mundo y la información circulante.
              Parte de un único dibujo, un único modelo, no hay lugar para un
              Otro. Es uno y a la vez una reiteración de hombres inalterables,
              inexpresivos, inalámbricos. Es personaje y al mismo tiempo
              escenario. 
            </p>
            {showAdditionalText ? (
              <div style={additionalTextStyle}>
                <p className="yoMor-text touch">
                  Desde esta premisa y con ironía, se abordan problemáticas del
                  mundo contemporáneo como el individualismo, la comunicación,
                  la crisis ambiental, la alienación, el narcisismo, las
                  desigualdades de género. <br />
                  <br />
                  Este proyecto transmedia pone en práctica una serie de
                  investigaciones y experimentaciones artísticas con
                  composiciones digitales, fotomontajes, textos, pintura,
                  animaciones, juegos, arte urbano, performances, instalaciones,
                  entre otros.
                  <br /> <br />
                  Buscamos salir de la creación estática e individual, y así ser
                  puntapié para generar nuevas ideas, acciones, creaciones
                  artísticas, que expandan el universo Morgenstern, a partir de
                  la interacción con el público y el trabajo colaborativo.
                  Apunta a generar una comunidad participativa, crítica y
                  reflexiva.
                </p>
              </div>
            ) : (
              <>
                <p className="yoMor-text-link">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "10px" }}
                  >
                    <path d="M5 22L40 22" stroke="white" strokeWidth="3" />
                    <path
                      d="M22.5 39.5L22.5 4.5"
                      stroke="white"
                      strokeWidth="3"
                    />
                  </svg>
                  Seguir Leyendo
                </p>
                <div
                  onClick={handleClick}
                  style={{
                    zIndex: 10000,
                    position: "absolute",
                    width: "485px",
                    height: "75px",
                  }}
                ></div>
              </>
            )}
          </div>
        </div>
        <div className="spikes" style={{ zIndex: "100" }}>
          <div>
            <h2 style={{ fontSize: "50px" }}>Idea y desarrollo:</h2>

            <h4
              style={{
                // position: "absolute",
                fontSize: "50px",
                fontFamily: "Light",
                paddingBottom: "50px",
                borderBottom: "solid 1px",
              }}
            >
              Ailin Kirjner
            </h4>
          </div>
          <SpikeButton />
        </div>
      </div>
      <div></div>
    </>
  );
}
export default YoMorgen;
