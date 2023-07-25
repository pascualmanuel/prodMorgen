import React from "react";
import CustomButton from "../Components/CustomButton";
import Morgen from "../Assets/morgen-trans.png";
import { useState } from "react";
const MobileHome = () => {
  let homeButtonHeight = "15px";
  let homeButtonWidth = "220px";

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const buttons = [
    {
      buttonText: "Yo, Morgenstern",
      firstColor: "#FE6970",
      secondColor: "#FF3910",
      thirdColor: "#DC3349",
      //   link: "/yomorgenstern",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "24px",
    },
    {
      buttonText: "Obras",
      firstColor: "#DCCB00",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      //   link: "/obras",
      border: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "La Revista",
      firstColor: "#AE79EF",
      secondColor: "#005DA2",
      thirdColor: "#4590E6",
      //   link: "/",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "Interactivo",
      firstColor: "#4590E6",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      //   link: "/interactivo",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: `${viewportWidth} ` + viewportHeight,
      firstColor: "#DFB000",
      secondColor: "#DC3349",
      thirdColor: "#AE79EF",
      //   link: "/",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
    {
      buttonText: "Comunidad",
      firstColor: "#DC3349",
      secondColor: "#7D9F00",
      thirdColor: "#DFB000",
      //   link: "/comunidad",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },

    {
      buttonText: "Agenda",
      firstColor: "#005DA2",
      secondColor: "#DC3349",
      thirdColor: "#DFB000",
      //   link: "/agenda",
      backColor: "",
      width: homeButtonWidth,
      height: homeButtonHeight,
      fontSize: "26px",
    },
  ];

  let contPadTop = 0;
  if (viewportHeight < 720) {
    contPadTop = 0.05 * viewportHeight;
  }
  return (
    <>
      <div className="home-container" style={{ height: "100vh" }}>
        <div className="mob-home-container" style={{ paddingTop: contPadTop }}>
          {buttons.map((button, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              <CustomButton {...button} />
            </div>
          ))}
        </div>
        <div className="mob-img-cont">
          <img src={Morgen} width={170} />
        </div>
      </div>
    </>
  );
};

export default MobileHome;
