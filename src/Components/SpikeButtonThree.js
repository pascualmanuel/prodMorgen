import React from "react";
import "../Styles/Atendeme.css";
import "../Styles/App.css";

import Img1 from "../Assets/svg/star-apoyar.svg";
import Img1En from "../Assets/svg/star-apoyar-en.svg";
import Img2 from "../Assets/svg/star-apoyar2.svg";
import Img3 from "../Assets/svg/star-apoyar3.svg";
import { Link, useLocation } from "react-router-dom";

import { useLanguage } from "../Hooks/LanguageContext";
function SpikeButtonThree() {
  const location = useLocation();
  const { userLanguage, translateText } = useLanguage();
  let starImg = Img1;
  let spikeScale = "0.6";
  if (location.pathname === "/agenda") {
    spikeScale = "0.6";
  }

  if (userLanguage === "EN") {
    starImg = Img1En;
  }
  return (
    <>
      <div className="cont-svgs-3">
        <img
          src={starImg}
          alt="ApoyarButton"
          className="cls-2"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transition: "transform 0.5s",
            zIndex: 3,
            scale: spikeScale,
          }}
          onMouseEnter={() => {
            const cls2 = document.querySelector(".cls-2");
            const cls4 = document.querySelector(".cls-4");
            if (cls2 && cls4) {
              cls2.style.transform = "translate(4px, -4px)";
              cls4.style.transform = "translate(-4px, 4px)";
            }
          }}
          onMouseLeave={() => {
            const cls2 = document.querySelector(".cls-2");
            const cls4 = document.querySelector(".cls-4");
            if (cls2 && cls4) {
              cls2.style.transform = "";
              cls4.style.transform = "";
            }
          }}
        />
        <img
          src={Img2}
          alt="ApoyarButton"
          className="cls-3"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transition: "transform 0.5s",
            zIndex: 2,
            scale: spikeScale,
          }}
        />
        <img
          src={Img3}
          alt="ApoyarButton"
          className="cls-4"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            transition: "transform 0.5s",
            zIndex: 1,
            scale: spikeScale,
          }}
          onMouseEnter={() => {
            const cls2 = document.querySelector(".cls-2");
            const cls4 = document.querySelector(".cls-4");
            if (cls2 && cls4) {
              //   cls2.style.transform = "translate(10px, -10px)";
              //   cls4.style.transform = "translate(14px, -14px)";
            }
          }}
          onMouseLeave={() => {
            const cls2 = document.querySelector(".cls-2");
            const cls4 = document.querySelector(".cls-4");
            if (cls2 && cls4) {
              cls2.style.transform = "";
              cls4.style.transform = "";
            }
          }}
        />
      </div>
    </>
  );
}
export default SpikeButtonThree;
