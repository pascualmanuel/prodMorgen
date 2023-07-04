import React from "react";
import "../Styles/Atendeme.css";
import Img1 from "../Assets/svg/star-apoyar.svg";
import Img2 from "../Assets/svg/star-apoyar2.svg";
import Img3 from "../Assets/svg/star-apoyar3.svg";

import {Link} from "react-router-dom";

function SpikeButtonThree() {
  return (
    <>
      <Link to="/comunidad">
        <div
          className="cont-svgs"
          style={{
            position: "absolute",
            marginTop: "-30px",
            right: "650px",
            width: 210,
            height: 210,
            zIndex: 100,
          }}
        >
          <img
            src={Img1}
            alt="ApoyarButton"
            className="cls-2"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 3,
              width: 210,
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
              width: 210,
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
              width: 210,
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
export default SpikeButtonThree;
