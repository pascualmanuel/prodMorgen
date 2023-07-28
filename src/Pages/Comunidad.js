import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Popup from "../Components/PopUp";
import ComuBackDos from "../Assets/comunidad/frame.webp";

import BackgroundDiv from "../Components/BackgroundDiv";
import CustomButton from "../Components/CustomButton";
import SpikeButton from "../Components/SpikeButton";
import SpikeButtonThree from "../Components/SpikeButtonThree";
import { isIOS } from "react-device-detect";

function Comunidad() {
  const [showPopup, setShowPopup] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let comStyle = {
    backgroundImage: `url(${ComuBackDos})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
  };

  console.log(showPopup);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  let buttonTextColab = "Ver trabajos colaborativos";
  let buttonTextVoces = "Leer las voces de la comunidad";

  let commButtonWidth = "300px";

  if (window.innerWidth < 1320) {
    commButtonWidth = "280px";
  }

  let buttonTextSize = "18px";
  if (isIOS) {
    buttonTextSize = "16px";
  }

  if (window.innerWidth < 720) {
    comStyle = {
      backgroundImage: `url(${ComuBackDos})`,
      backgroundRepeat: " no-repeat",
      backgroundSize: "160%",
      backgroundPosition: "bottom",
    };
    buttonTextSize = "20px";
    buttonTextColab = "Trabajos colaborativos";
    buttonTextVoces = "Voces de la comunidad";
  }

  // console.log(commButtonWidth);
  return (
    <>
      <div className="comunidad-cont">
        <div className="comunidad-left" style={comStyle}>
          <div className="comunidad-left-content">
            <h2 className="comunidad-title">Comunidad</h2>
            <p className="comunidad-p">
              No queremos ser Morgensterns, queremos generar espacios de
              encuentro, construir comunidad para dar lugar a la creatividad, la
              reflexión, la risa. Para eso, proponemos diferentes formas de
              interacción, como colaboraciones, creación de obras colectivas,
              eventos y más. Te invitamos a seguir pensando y creando en
              conjunto como más te guste.
            </p>
            <div onClick={openPopup} className="comunidad-spike">
              <SpikeButtonThree />
            </div>
          </div>
        </div>

        <div className="comunidad-right">
          <div className="comu-right-top">
            <div className="button-text-comu">
              <h2 className="comu-gallery-atendeme">Galería</h2>
              <div className="comu-buttons">
                <CustomButton
                  buttonText={buttonTextColab}
                  firstColor={"#4590E6"}
                  secondColor={"#005DA2"}
                  thirdColor={"#4590E6"}
                  backColor={"#4590E6"}
                  border={"solid black"}
                  width={commButtonWidth}
                  height={"25px"}
                  fontFamily={"Regular"}
                  fontSize={buttonTextSize}
                  link={"/gallery"}
                />
              </div>
            </div>
          </div>
          <div className="comu-right-bottom">
            <div className="button-text-comu">
              <h2 className="comu-gallery-atendeme">Atendeme</h2>

              <div className="comu-buttons">
                <CustomButton
                  buttonText={buttonTextVoces}
                  firstColor={"#4590E6"}
                  secondColor={"#005DA2"}
                  thirdColor={"#4590E6"}
                  backColor={"#4590E6"}
                  border={"solid black"}
                  width={commButtonWidth}
                  height={"25px"}
                  fontSize={buttonTextSize}
                  fontFamily={"Regular"}
                  link={"/atendeme"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}

      {/* <div
        style={{ height: "200vh", width: "100vw", backgroundColor: "red" }}
      ></div> */}
    </>
  );
}
export default Comunidad;
