import React from "react";
import "../Styles/Atendeme.css";
import "../Styles/App.css";
import Img1 from "../Assets/svg/Star.svg";
import Img1En from "../Assets/svg/Star-en.svg";
import Img2 from "../Assets/svg/Star2.svg";
import Img3 from "../Assets/svg/Star3.svg";
import { Link } from "react-router-dom";
import { useLanguage } from "../Hooks/LanguageContext";

function SpikeButton() {
  const { userLanguage, translateText } = useLanguage();
  let starImg = Img1;

  if (userLanguage === "EN") {
    starImg = Img1En;
  }
  return (
    <>
      <Link to="/comunidad">
        <div className="cont-svgs-comunidad pointer">
          <img
            src={starImg}
            alt="SpikeButton"
            className="cls-2 spike-comm"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 3,
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
            alt="SpikeButton"
            className="cls-3 spike-comm"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 2,
            }}
          />
          <img
            src={Img3}
            alt="SpikeButton"
            className="cls-4 spike-comm"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 1,
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
      </Link>
    </>
  );
}
export default SpikeButton;
