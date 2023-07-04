import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import Popup from "../Components/PopUp";
import ComuBackDos from "../Assets/comunidad/frame.webp";

import BackgroundDiv from "../Components/BackgroundDiv";
import CustomButton from "../Components/CustomButton";
import SpikeButton from "../Components/SpikeButton";
import SpikeButtonThree from "../Components/SpikeButtonThree";

function Comunidad() {
  const [showPopup, setShowPopup] = useState(false);

  const comStyle = {
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

  return (
    <>
      <div className="comunidad-cont">
        <div className="comunidad-left" style={comStyle}>
          <div className="comunidad-left-content">
            <h2 style={{fontSize: 80, marginBottom: 0, width: 500}}>
              Comunidad
            </h2>
            <p style={{fontSize: 18, width: 500}}>
              No queremos ser Morgensterns, queremos generar espacios de
              encuentro, construir comunidad para dar lugar a la creatividad, la
              reflexión, la risa. Para eso, proponemos diferentes formas de
              interacción, como colaboraciones, creación de obras colectivas,
              eventos y más. Te invitamos a seguir pensando y creando en
              conjunto como más te guste.
            </p>
          </div>
          <div onClick={openPopup}>
            <SpikeButtonThree />
          </div>
        </div>

        <div className="comunidad-right">
          <div className="comu-right-top">
            <div className="button-text-comu">
              <h2
                style={{
                  margin: 0,
                  marginBottom: 40,
                  fontSize: 40,
                  color: "white",
                }}
              >
                Galería
              </h2>
              <CustomButton
                buttonText={"Ver trabajos colaborativos"}
                firstColor={"#4590E6"}
                secondColor={"#005DA2"}
                thirdColor={"#4590E6"}
                backColor={"#4590E6"}
                border={"solid black"}
                width={"300px"}
                height={"25px"}
                fontFamily={"Regular"}
                fontSize={"18px"}
                link={"/gallery"}
              />
            </div>
          </div>
          <div className="comu-right-bottom">
            <div className="button-text-comu">
              <h2
                style={{
                  margin: 0,
                  marginBottom: 40,
                  fontSize: 40,
                  color: "white",
                }}
              >
                Atendeme
              </h2>
              <CustomButton
                buttonText={"Leer las voces de la comunidad"}
                firstColor={"#4590E6"}
                secondColor={"#005DA2"}
                thirdColor={"#4590E6"}
                backColor={"#4590E6"}
                border={"solid black"}
                width={"300px"}
                height={"25px"}
                fontSize={"18px"}
                fontFamily={"Regular"}
                link={"/atendeme"}
              />
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
