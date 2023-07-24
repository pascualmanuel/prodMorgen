import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import MorgenGirando from "../Components/MorgenGirando";
import PushMorgen from "../Components/PushMorgen";
import Atendeme from "../Components/Atendeme";
import Bueno from "../Components/Bueno";
import MorgensFalling from "../Components/MorgensFalling";
import Malo from "../Components/Malo.js";

function Interactivo() {
  const [selectedColor, setSelectedColor] = useState("#FE6970");
  const [selectedCircle, setSelectedCircle] = useState("circle1");

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const lineStyle = {
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

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "fixed",
    top: "50%",
    left: "0",
    transform: "translate(0, -50%)",
    zIndex: "100",
  };

  const squareStyle = {
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
        <div className="line-interactivo-cont">
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
                className="cursor"
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
                className="cursor"
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
                className="cursor"
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
