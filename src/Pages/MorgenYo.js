import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import NavBar from "./NavBar";
import BackgroundDiv from "../Components/BackgroundDiv";
import YoMorBack from "../Assets/yomor/yomor1-1.png";
import YoMorBack2 from "../Assets/yomor/yomor-prueba.png";
import YoMorBackDos from "../Assets/yomor/yomor1-2.png";
import YoMorBack4 from "../Assets/yomor/yomor1-3.png";
import SpikeButton from "../Components/SpikeButton";
import Itau from "../Assets/svg/itau-logo2.png";
import Itau2 from "../Assets/svg/itau-logo.png";
import MorgenImgSvg from "../Assets/morgen-svg.svg";
import Caba from "../Assets/svg/mecenazgo-logo-crop.png";
import SpikeButtonTwo from "../Components/SpikeButtonTwo";
import Book from "../Components/Book";
import { deviceDetect, isMobile } from "react-device-detect";
import { useLanguage } from "../Hooks/LanguageContext";

function MorgenYo() {
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { userLanguage, translateText } = useLanguage();
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

  let additionalTextStyle = {
    // width:80%;
  };
  const handleClick = () => {
    setShowAdditionalText(true);
  };

  let continueReadingStyle = {
    zIndex: 10000,
    position: "absolute",
    width: "485px",
    height: "75px",
    backgroundColor: "black",
  };
  let heightMobileRead = "450px";

  let firstBg = {
    backgroundColor: "black",
    backgroundImage: `url(${YoMorBackDos})`,
  };

  if (showAdditionalText) {
    continueReadingStyle = {
      backgroundImage: `url(${YoMorBack4})`,
      backgroundColor: "black",
      backgroundPosition: "bottom right",
      marginTop: "-310px",
      height: "1330px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };
    firstBg = {
      backgroundColor: "black",
    };
  }

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        {window.innerWidth > 720 ? (
          <BackgroundDiv />
        ) : (
          <div className="yomor-cont-mob">
            <h2 className="yomor-mob-title">
              Yo, <br /> Morgenstern
            </h2>
            <img
              src={MorgenImgSvg}
              alt="Morgen"
              className="disableSave"
              width={100}
            />
          </div>
        )}
      </div>
      <div style={firstBg} className="holahola">
        <p
          className="morYo-text"
          style={{ position: "absolute", bottom: "-45%" }}
        >
          "Morgenstern es un ensayo artístico acerca de los modos en que nos
          vinculamos con lxs otrxs, el mundo y la información circulante. Parte
          de un único dibujo, un único modelo, no hay lugar para un Otro. Es uno
          y a la vez una reiteración de hombres inalterables, inexpresivos,
          inalámbricos. Es personaje y al mismo tiempo escenario."
        </p>
      </div>
      <div
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${YoMorBackDos})`,
        }}
        className="chauchau"
      ></div>
      <div>
        {showAdditionalText ? (
          <div style={continueReadingStyle} className="continueReadingStyle">
            <p className="morYo-text touch">
              {translateText(
                <>
                  From this premise, and with irony, problems of the
                  contemporary world such as individualism, communication, the
                  environmental crisis, alienation, narcissism, gender
                  inequalities are addressed.
                </>,
                <>
                  Desde esta premisa y con ironía, se abordan problemáticas del
                  mundo contemporáneo como el individualismo, la comunicación,
                  la crisis ambiental, la alienación, el narcisismo, las
                  desigualdades de género.
                </>
              )}
              <br />
              <br />
              {translateText(
                <>
                  This transmedia project puts into practice a series of
                  artistic investigations and experiments with digital
                  compositions, photomontages, texts, painting, animations,
                  games, urban art, performances, installations, among others.
                </>,
                <>
                  Este proyecto transmedia pone en práctica una serie de
                  investigaciones y experimentaciones artísticas con
                  composiciones digitales, fotomontajes, textos, pintura,
                  animaciones, juegos, arte urbano, performances, instalaciones,
                  entre otros.
                </>
              )}
              <br /> <br />
              {translateText(
                <>
                  We seek to go beyond the static, individual creation, and thus
                  become a starting point to generate new ideas and actions that
                  expand the Morgenstern universe through interaction with the
                  public and collaborative work. The objective: to generate a
                  participatory, critical and reflective community.
                </>,
                <>
                  Buscamos salir de la creación estática e individual, y así ser
                  puntapié para generar nuevas ideas, acciones, creaciones
                  artísticas, que expandan el universo Morgenstern, a partir de
                  la interacción con el público y el trabajo colaborativo.
                  Apunta a generar una comunidad participativa, crítica y
                  reflexiva.
                </>
              )}
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
                <path d="M22.5 39.5L22.5 4.5" stroke="white" strokeWidth="3" />
              </svg>

              {translateText("See more", "Seguir Leyendo")}
            </p>
            <div
              onClick={handleClick}
              className="continueReadingStyle"
              style={continueReadingStyle}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
export default MorgenYo;
