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
  };
  let heightMobileRead = "450px";

  // if (showAdditionalText) {
  //   YoMorStyleDos.backgroundImage = `url(${yoMorBackSeeMore})`;
  //   YoMorStyleDos.height = "1700px";
  //   heightMobileRead = "1000px";
  // }

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
      <div style={{ height: "650px", backgroundColor: "black" }} className="holahola">

      </div>
    </>
  );
}
export default MorgenYo;
