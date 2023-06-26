import React from "react";
import "../Styles/Atendeme.css";
import Img1 from "../Assets/svg/Star2-1.svg";
import Img2 from "../Assets/svg/Star2-2.svg";
import Img3 from "../Assets/svg/Star2-3.svg";
import { Link } from "react-router-dom";

function SpikeButtonTwo() {
  return (
    <>
      <Link to="/obras">
        <div
          className="cont-svgs"
          style={{
            position: "sticky",
            width: 290,
            height: 415,
          }}
        >
          <img
            src={Img1}
            alt="Image 1"
            className="spike-b2-cls-2"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 3,
              width: 267,
            }}
            onMouseEnter={() => {
              const cls2 = document.querySelector(".spike-b2-cls-2");
              const cls4 = document.querySelector(".spike-b2-cls-4");
              if (cls2 && cls4) {
                cls2.style.transform = "translate(4px, -4px)";
                cls4.style.transform = "translate(-4px, 4px)";
              }
            }}
            onMouseLeave={() => {
              const cls2 = document.querySelector(".spike-b2-cls-2");
              const cls4 = document.querySelector(".spike-b2-cls-4");
              if (cls2 && cls4) {
                cls2.style.transform = "";
                cls4.style.transform = "";
              }
            }}
          />
          <img
            src={Img2}
            alt="Image 2"
            className="spike-b2-cls-3"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 2,
              width: 267,
            }}
          />
          <img
            src={Img3}
            alt="Image 3"
            className="spike-b2-cls-4"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 1,
              width: 267,
            }}
            onMouseEnter={() => {
              const cls2 = document.querySelector(".spike-b2-cls-2");
              const cls4 = document.querySelector(".spike-b2-cls-4");
              if (cls2 && cls4) {
                //   cls2.style.transform = "translate(10px, -10px)";
                //   cls4.style.transform = "translate(14px, -14px)";
              }
            }}
            onMouseLeave={() => {
              const cls2 = document.querySelector(".spike-b2-cls-2");
              const cls4 = document.querySelector(".spike-b2-cls-4");
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
export default SpikeButtonTwo;
