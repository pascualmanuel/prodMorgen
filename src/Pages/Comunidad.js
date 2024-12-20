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
import { useLanguage } from "../Hooks/LanguageContext";
import { isMobile } from "react-device-detect";
function Comunidad() {
  const [showPopup, setShowPopup] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const { userLanguage, translateText } = useLanguage();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to make the button visible after 4 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Clear the timeout if the component unmounts or if you have some cleanup logic
    return () => clearTimeout(timeoutId);
  }, []); // E

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
    minHeight: "680px",
  };

  let hiddenDesktop = "hidden";

  if (isMobile) {
    // comStyle = {
    //   backgroundImage: `url(${ComuBackDos})`,
    //   backgroundRepeat: " no-repeat",
    //   backgroundSize: "contain",
    //   backgroundPosition: "bottom",
    // };
  }

  console.log(showPopup);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  let buttonTextColab = "Ver trabajos colabora!tivos";
  let buttonTextVoces = "Leer las voces de la comunidad";

  if (userLanguage === "ES") {
    buttonTextColab = "Ver trabajos colaborativos";
    buttonTextVoces = "Leer las voces de la comunidad";
  } else {
    buttonTextColab = "Collaborative works";
    buttonTextVoces = "Community voices";
  }

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
    // buttonTextColab = "Trabajos colaborativos";
    // buttonTextVoces = "Voces de la comunidad";
    hiddenDesktop = "";
  }

  // if (window.innerHeight < 650) {
  //   comStyle = {
  //     backgroundImage: `url(${ComuBackDos})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "contain",
  //     backgroundPosition: "0px 335px",
  //   };
  // }

  // console.log(commButtonWidth);
  return (
    <>
      <div className="comunidad-cont" style={{ overflow: hiddenDesktop }}>
        <div className="comunidad-left disableSave" style={comStyle}>
          <div className="comunidad-left-content">
            <h2 className="comunidad-title">
              {translateText("Community", "Comunidad")}
            </h2>

            <p className="comunidad-p">
              {translateText(
                "We don’t want to be Morgensterns! Rather we seek to create opportunities for encounter that foster creativity, reflection and humor. We propose different interactions, such as collaborative works, workshops and events, to expand and redefine the Morgenstern universe. We seek to build a participatory, inter-generational and multidisciplinary community.",

                "No queremos ser Morgensterns, sino crear espacios de encuentro que fomenten la creatividad, la reflexión y el humor. Proponemos diversas interacciones, como obras colaborativas, talleres y eventos, para expandir y resignificar el universo Morgenstern. Buscamos construir una comunidad participativa, intergeneracional y multidisciplinaria."
              )}
            </p>

            <div
              className={`obras-spike-button-container ${
                isVisible ? "visible" : ""
              }`}
            >
              <div onClick={openPopup} className="comunidad-spike pointer">
                <SpikeButtonThree />
              </div>
            </div>
          </div>
        </div>

        <div className="comunidad-right">
          <div className="comu-right-top">
            <div className="button-text-comu">
              <h2 className="comu-gallery-atendeme">
                {translateText("Gallery", "Galería")}
              </h2>
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
              <h2 className="comu-gallery-atendeme">
                {translateText("Hear me out", "Atendeme")}
              </h2>

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
