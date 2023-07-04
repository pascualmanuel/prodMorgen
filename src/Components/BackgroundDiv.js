import React, {useEffect, useRef} from "react";
import "../Styles/App.css";
import MorgenImg from "../Assets/MORGEN_AMARILLO.png";
import MorgenImgSvg from "../Assets/morgen-svg.svg";

const BackgroundDiv = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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

  return (
    <>
      <div ref={containerRef}>
        <canvas
          ref={canvasRef}
          style={{position: "fixed", top: 0, left: 0, zIndex: "100"}}
        />
        <div className="wrapper">
          <div className="inside">
            <h2 style={{fontSize: "100px", color: "white", zIndex: "2"}}>
              Yo, Morgenstern
            </h2>
            <img
              src={MorgenImgSvg}
              alt="Morgen"
              style={{position: "absolute"}}
              width={200}
            />
          </div>
          {/* <MorgenGirando /> */}
        </div>
      </div>
    </>
  );
};

export default BackgroundDiv;
