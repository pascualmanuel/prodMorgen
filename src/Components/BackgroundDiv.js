import React, { useEffect, useRef, useState } from "react";
import "../Styles/App.css";
import MorgenImg from "../Assets/MORGEN_AMARILLO.png";
import MorgenImgSvg from "../Assets/morgen-svg.svg";

const BackgroundDiv = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let MorgenWidthYoMorgen = 200;

  if (window.innerWidth < 1420) {
    MorgenWidthYoMorgen -= (MorgenWidthYoMorgen * 15) / 100;
    // bookWidth -= (bookWidth * 10) / 100;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Check if the canvas element is available before continuing

    const ctx = canvas.getContext("2d");
    let isDrawing = true;

    const erase = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 170, 0, 2 * Math.PI);
      // Tamaño del brushhh
      ctx.fill();
    };
    const handleMouseMove = (event) => {
      if (isDrawing) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        erase(x, y);
      }
    };

    // const handleCanvasClick = (event) => {
    //   const rect = canvas.getBoundingClientRect();
    //   const x = event.clientX - rect.left;
    //   const y = event.clientY - rect.top;
    //   const img = imgRef.current;

    //   if (
    //     x >= img.offsetLeft &&
    //     x <= img.offsetLeft + img.offsetWidth &&
    //     y >= img.offsetTop &&
    //     y <= img.offsetTop + img.offsetHeight
    //   ) {
    //     // Image is clicked, perform the desired action
    //     window.open("http://www.twitter.com");
    //   }
    // };

    const resizeCanvas = () => {
      const container = containerRef.current;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      // Draw gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );

      ctx.fillStyle = "#DCCB00";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    // canvas.addEventListener("click", handleCanvasClick);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      // canvas.removeEventListener("click", handleCanvasClick);
    };
  }, []);
  const isTouchableScreen =
    "ontouchstart" in window || navigator.msMaxTouchPoints;


    // let isTouchableScreen = 
  return (
    <>
      <div ref={containerRef}>
        {!isTouchableScreen && (
          <canvas
            ref={canvasRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: "100",
              height: "100vh",
              width: "100vw",
            }}
          />
        )}
        <div className="wrapper full-h">
          <div className="inside full-h">
            <h2
              style={{
                fontSize: "100px",
                color: "white",
                zIndex: "2",
                textAlign: "center",
              }}
            >
              Yo, Morgenstern
            </h2>
            <img
              src={MorgenImgSvg}
              alt="Morgen"
              style={{ position: "absolute" }}
              width={MorgenWidthYoMorgen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundDiv;
