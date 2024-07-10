import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import PushMorgen from "../Components/PushMorgen";
import Bueno from "../Components/Bueno";
import Malo from "../Components/Malo.js";
import imageCircle from "../Assets/screenshot-circle.png";

function Interactivo() {
  const [selectedColor, setSelectedColor] = useState("#FE6970");
  const [selectedCircle, setSelectedCircle] = useState("circle1");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.body.classList.add("no-scroll-interactivo");

    return () => {
      document.body.classList.remove("no-scroll-interactivo");
    };
  }, []);

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

  let lineStyle = {
    width: "500px",
    height: "1px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: "100",
  };

  const circleStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: selectedCircle === "circle1" ? "black" : "transparent",
    border: "1px solid black",
    zIndex: "100",
  };

  const handleCircleClick = (circle) => {
    setSelectedCircle(circle);
  };

  let columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "fixed",
    top: "50%",
    left: "0",
    transform: "translate(0, -50%)",
    zIndex: "100",
  };

  let squareStyle = {
    width: "40px",
    height: "40px",
    // cursor: "pointer",
  };

  const colors = [
    "#4590E6",
    "#DFB000",
    "#FE6970",
    "#FF3910",
    "#005DA2",
    "#7D9F00",
    "#DC3349",
    "#DCCB00",
    "#AE79EF",
  ];

  let justify = "space-around";

  if (selectedCircle === "circle3") {
    justify = "start";
  }

  const interactivoContainer = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: justify,
    backgroundColor: selectedColor,
  };

  const handleSquareClick = (color) => {
    setSelectedColor(color);
  };

  let hola = window.innerWidth;

  const squareCount = colors.length;
  const squareWidth = window.innerWidth / squareCount;
  const squareHeight = 420 / squareCount;

  // console.log(squareWidth);
  if (window.innerWidth < 720) {
    columnStyle = {
      display: "flex",
      flexDirection: "row", // Change to "row"
      justifyContent: "flex-start", // Align items horizontally
      position: "fixed",
      bottom: "10%",
      left: "0",
      transform: "translate(0, -50%)",
      zIndex: "100",
      width: "100%",
    };
    squareStyle = {
      width: squareWidth,
      height: squareHeight,
    };

    lineStyle = {
      width: "80vw",
      height: "1px",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: "100",
    };
  }

  return (
    <>
      <div style={interactivoContainer}>
        <div
          style={{
            maxHeight: "550px",
          }}
        >
          {selectedCircle === "circle1" && <PushMorgen />}
          {selectedCircle === "circle2" && <Bueno />}
          {selectedCircle === "circle3" && <Malo />}
        </div>
        <div className="line-interactivo-cont cursor">
          <div
            style={{
              position: "absolute",
              bottom: "45px",
            }}
          >
            <div style={lineStyle}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    selectedCircle === "circle1" ? "black" : selectedColor,
                  border: "1px solid black",
                }}
                className="pointer"
                onClick={() => handleCircleClick("circle1")}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    selectedCircle === "circle2" ? "black" : selectedColor,
                  border: "1px solid black",
                }}
                className="pointer"
                onClick={() => handleCircleClick("circle2")}
              ></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    selectedCircle === "circle3" ? "black" : selectedColor,
                  border: "1px solid black",
                }}
                className="pointer"
                onClick={() => handleCircleClick("circle3")}
              ></div>
            </div>
          </div>
        </div>
        <div style={columnStyle} className="cursor-balde">
          {colors.map((color, index) => (
            <div
              key={index}
              style={{ ...squareStyle, backgroundColor: color }}
              onClick={() => handleSquareClick(color)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Interactivo;
