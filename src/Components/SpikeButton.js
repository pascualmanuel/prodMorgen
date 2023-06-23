import React from "react";
import "../Styles/Atendeme.css";
import Img1 from "../Assets/svg/Star.svg";
import Img2 from "../Assets/svg/Star2.svg";
import Img3 from "../Assets/svg/Star3.svg";
import { Link } from "react-router-dom";

function SpikeButton() {
  return (
    <>
      <Link to="/comunidad">
        <div
          className="cont-svgs"
          style={{
            position: "sticky",
            width: 290,
            height: 290,
          }}
        >
          <img
            src={Img1}
            alt="Image 1"
            className="cls-2"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 3,
              width: 290,
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
            alt="Image 2"
            className="cls-3"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 2,
              width: 290,
            }}
          />
          <img
            src={Img3}
            alt="Image 3"
            className="cls-4"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              transition: "transform 0.5s",
              zIndex: 1,
              width: 290,
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
          <div
            className="center-text"
            style={{
              position: "absolute",
              top: "38%",
              left: "21%",
              // transform: "translate(-50%, 187px%)",
              zIndex: "10",
              pointerEvents: "none",
            }}
          >
            <p
              style={{
                fontFamily: "SemiBold",
                color: "white",
                fontSize: "24px",
              }}
            >
              Ir a Comunidad
            </p>
          </div>
        </div>
      </Link>
      {/* <div>
            <div
              className="cont-svg"
              style={{
                position: "relative",
                height: "310px",
                marginRight: "310px",
              }}
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0 0"
                style={{
                  fill: "#7d9f00",
                  stroke: "#000",
                  height: "310",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transition: "transform 0.3s",
                  zIndex: 3,
                }}
                onMouseEnter={() => {
                  const cls2 = document.getElementsByClassName("cls-2")[0];
                  const cls4 = document.getElementsByClassName("cls-4")[0];
                  cls2.style.transform = "translate(10px, -10px)";
                  cls4.style.transform = "translate(-10px, 10px)";
                }}
                onMouseLeave={() => {
                  const cls2 = document.getElementsByClassName("cls-2")[0];
                  const cls4 = document.getElementsByClassName("cls-4")[0];
                  cls2.style.transform = "";
                  cls4.style.transform = "";
                }}
              >
                <defs></defs>
                <path
                  class="cls-2"
                  d="m138.12,30.83L158.12.97l16.76,31.78.28.53.47-.37,28.24-22.22,6.12,35.41.1.59.56-.21,33.72-12.4-5.12,35.57-.09.59.6-.02,35.91-1.37-15.86,32.24-.26.54.58.16,34.57,9.79-25.05,25.77-.42.43.5.33,29.86,19.99-31.78,16.76-.53.28.37.47,22.22,28.24-35.41,6.12-.59.1.21.56,12.4,33.73-35.57-5.12-.59-.09.02.6,1.37,35.91-32.24-15.86-.54-.26-.16.58-9.79,34.57-25.77-25.05-.43-.42-.33.5-20,29.86-16.76-31.78-.28-.53-.47.37-28.24,22.22-6.12-35.41-.1-.59-.56.21-33.73,12.4,5.12-35.57.09-.59-.6.02-35.91,1.37,15.86-32.24.26-.54-.58-.16-34.57-9.79,25.05-25.76.42-.43-.5-.33L.97,142.47l31.78-16.76.53-.28-.37-.47-22.22-28.24,35.41-6.12.59-.1-.21-.56-12.4-33.73,35.57,5.12.59.09-.02-.6-1.37-35.91,32.24,15.86.54.26.16-.58,9.79-34.57,25.77,25.05.43.42.33-.5Z"
                />
              </svg>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0 0"
                style={{
                  fill: "red",
                  stroke: "#000",
                  height: "310",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transition: "transform 0.3s",
                  zIndex: 2,
                }}
              >
                <defs></defs>
                <path
                  class="cls-3"
                  d="m138.12,30.83L158.12.97l16.76,31.78.28.53.47-.37,28.24-22.22,6.12,35.41.1.59.56-.21,33.72-12.4-5.12,35.57-.09.59.6-.02,35.91-1.37-15.86,32.24-.26.54.58.16,34.57,9.79-25.05,25.77-.42.43.5.33,29.86,19.99-31.78,16.76-.53.28.37.47,22.22,28.24-35.41,6.12-.59.1.21.56,12.4,33.73-35.57-5.12-.59-.09.02.6,1.37,35.91-32.24-15.86-.54-.26-.16.58-9.79,34.57-25.77-25.05-.43-.42-.33.5-20,29.86-16.76-31.78-.28-.53-.47.37-28.24,22.22-6.12-35.41-.1-.59-.56.21-33.73,12.4,5.12-35.57.09-.59-.6.02-35.91,1.37,15.86-32.24.26-.54-.58-.16-34.57-9.79,25.05-25.76.42-.43-.5-.33L.97,142.47l31.78-16.76.53-.28-.37-.47-22.22-28.24,35.41-6.12.59-.1-.21-.56-12.4-33.73,35.57,5.12.59.09-.02-.6-1.37-35.91,32.24,15.86.54.26.16-.58,9.79-34.57,25.77,25.05.43.42.33-.5Z"
                />
              </svg>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0 0"
                style={{
                  fill: "blue",
                  stroke: "#000",
                  height: "310",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  transition: "transform 0.3s",
                  zIndex: 1,
                }}
                onMouseEnter={() => {
                  const cls2 = document.getElementsByClassName("cls-2")[0];
                  const cls4 = document.getElementsByClassName("cls-4")[0];
                  cls2.style.transform = "translate(10px, -10px)";
                  cls4.style.transform = "translate(10px, -10px)";
                }}
                onMouseLeave={() => {
                  const cls2 = document.getElementsByClassName("cls-2")[0];
                  const cls4 = document.getElementsByClassName("cls-4")[0];
                  cls2.style.transform = "";
                  cls4.style.transform = "";
                }}
              >
                <defs></defs>
                <path
                  class="cls-4"
                  d="m138.12,30.83L158.12.97l16.76,31.78.28.53.47-.37,28.24-22.22,6.12,35.41.1.59.56-.21,33.72-12.4-5.12,35.57-.09.59.6-.02,35.91-1.37-15.86,32.24-.26.54.58.16,34.57,9.79-25.05,25.77-.42.43.5.33,29.86,19.99-31.78,16.76-.53.28.37.47,22.22,28.24-35.41,6.12-.59.1.21.56,12.4,33.73-35.57-5.12-.59-.09.02.6,1.37,35.91-32.24-15.86-.54-.26-.16.58-9.79,34.57-25.77-25.05-.43-.42-.33.5-20,29.86-16.76-31.78-.28-.53-.47.37-28.24,22.22-6.12-35.41-.1-.59-.56.21-33.73,12.4,5.12-35.57.09-.59-.6.02-35.91,1.37,15.86-32.24.26-.54-.58-.16-34.57-9.79,25.05-25.76.42-.43-.5-.33L.97,142.47l31.78-16.76.53-.28-.37-.47-22.22-28.24,35.41-6.12.59-.1-.21-.56-12.4-33.73,35.57,5.12.59.09-.02-.6-1.37-35.91,32.24,15.86.54.26.16-.58,9.79-34.57,25.77,25.05.43.42.33-.5Z"
                />
              </svg>
            </div>
          </div> */}
    </>
  );
}
export default SpikeButton;
