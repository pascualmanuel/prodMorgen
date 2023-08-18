import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import NavBar from "./NavBar";
import BackgroundDiv from "../Components/BackgroundDiv";
import YoMorBack from "../Assets/yomor/yomor1-1.png";
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
function YoMorgen() {
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

  let heightFirstYoMor = 995;
  let yoMorBackSeeMore = YoMorBack4;

  if (window.innerWidth > 1565) {
    heightFirstYoMor = 1350;
    yoMorBackSeeMore = YoMorBackDos;
  }

  let YoMorStyle = {
    height: heightFirstYoMor,
    backgroundImage: `url(${YoMorBack})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
  };

  let YoMorStyleDos = {
    height: "950px",
    backgroundImage: `url(${YoMorBackDos})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top right",
  };
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
  };
  let heightMobileRead = "450px";

  if (showAdditionalText) {
    YoMorStyleDos.backgroundImage = `url(${yoMorBackSeeMore})`;
    YoMorStyleDos.height = "1700px";
    heightMobileRead = "1000px";
  }

  if (window.innerWidth < 1000) {
    YoMorStyleDos = {
      height: heightMobileRead,
      backgroundImage: `none`,
    };
    YoMorStyle = {
      backgroundImage: `none`,
    };
  }

  if (window.innerWidth < 720 || isMobile) {
    YoMorStyle = {
      height: "500px",
      backgroundImage: `url(${YoMorBack})`,
      backgroundRepeat: " no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "right",
    };
    YoMorStyleDos = {
      height: heightMobileRead,
      backgroundImage: `url(${YoMorBackDos})`,
      backgroundRepeat: " no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "bottom right",
    };
    continueReadingStyle = {
      zIndex: 10000,
      position: "absolute",
      width: "250px",
      height: "75px",
    };
  }

  if (window.innerWidth < 575) {
    YoMorStyle = {
      height: "400px",
      backgroundImage: `url(${YoMorBack})`,
      backgroundRepeat: " no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "right",
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
            <img src={MorgenImgSvg} alt="Morgen" width={100} />
          </div>
        )}

        <div style={YoMorStyle}></div>
        <div style={YoMorStyleDos}>
          <div className="yoMor-text-grande">
            <p className="yoMor-text">
              {translateText(
                "Morgenstern is an artistic essay concerning the ways in which we connect with others, the world, and information that circulates. Beginning from a single drawing, a single model, where there’s no place for an Other. He is one and at the same time a reiteration of unalterable, inexpressive, wireless men. He is a character and he is the stage.I, Morgenstern",
                "Morgenstern es un ensayo artístico acerca de los modos en que nos vinculamos con lxs otrxs, el mundo y la información circulante. Parte de un único dibujo, un único modelo, no hay lugar para un Otro. Es uno y a la vez una reiteración de hombres inalterables, inexpresivos, inalámbricos. Es personaje y al mismo tiempo escenario."
              )}
            </p>

            {showAdditionalText ? (
              <div style={additionalTextStyle}>
                <p className="yoMor-text touch">
                  {translateText(
                    <>
                      From this premise, and with irony, problems of the
                      contemporary world such as individualism, communication,
                      the environmental crisis, alienation, narcissism, gender
                      inequalities are addressed.
                    </>,
                    <>
                      Desde esta premisa y con ironía, se abordan problemáticas
                      del mundo contemporáneo como el individualismo, la
                      comunicación, la crisis ambiental, la alienación, el
                      narcisismo, las desigualdades de género.
                    </>
                  )}
                  <br />
                  <br />
                  {translateText(
                    <>
                      This transmedia project puts into practice a series of
                      artistic investigations and experiments with digital
                      compositions, photomontages, texts, painting, animations,
                      games, urban art, performances, installations, among
                      others.
                    </>,
                    <>
                      Este proyecto transmedia pone en práctica una serie de
                      investigaciones y experimentaciones artísticas con
                      composiciones digitales, fotomontajes, textos, pintura,
                      animaciones, juegos, arte urbano, performances,
                      instalaciones, entre otros.
                    </>
                  )}
                  <br /> <br />
                  {translateText(
                    <>
                      We seek to go beyond the static, individual creation, and
                      thus become a starting point to generate new ideas and
                      actions that expand the Morgenstern universe through
                      interaction with the public and collaborative work. The
                      objective: to generate a participatory, critical and
                      reflective community.
                    </>,
                    <>
                      Buscamos salir de la creación estática e individual, y así
                      ser puntapié para generar nuevas ideas, acciones,
                      creaciones artísticas, que expandan el universo
                      Morgenstern, a partir de la interacción con el público y
                      el trabajo colaborativo. Apunta a generar una comunidad
                      participativa, crítica y reflexiva.
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
                    <path
                      d="M22.5 39.5L22.5 4.5"
                      stroke="white"
                      strokeWidth="3"
                    />
                  </svg>

                  {translateText("See more", "Seguir Leyendo")}
                </p>
                <div onClick={handleClick} style={continueReadingStyle}></div>
              </>
            )}
          </div>
        </div>
        <div className="spikes" style={{ zIndex: "110" }}>
          <div>
            <h2 className="spikes-title">
              {translateText("Idea and development:", "Idea y desarrollo:")}
            </h2>

            <h4
              style={{
                // position: "absolute",
                fontFamily: "Light",
                paddingBottom: "50px",
                borderBottom: "solid 1px",
              }}
              className="ailin-title"
            >
              Ailin Kirjner
            </h4>
          </div>
          <div>
            <span className="spike-yomor">
              <SpikeButtonTwo />
            </span>
            <SpikeButton />
          </div>
        </div>
        {/* <div style={{ backgroundColor: "#dccb00", height: 200 }}>
          <SpikeButton />
        </div> */}
      </div>

      <div className="footer-yomor">
        <h4 className="apoyo-yomor">
          {translateText(
            "We thank the support given by",
            "Agradecemos el apoyo dado por:"
          )}
        </h4>

        <div>
          <img src={Caba} className="sponsor-caba" />
          <img src={Itau} className="sponsor-itau" />
        </div>
      </div>
    </>
  );
}
export default YoMorgen;
