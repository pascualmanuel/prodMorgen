import React, { useEffect, useState } from "react";
import InaImg1 from "../Assets/obras/inadvertido/inadvertido-1.webp";
import InaImg0 from "../Assets/obras/inadvertido/inadvertido-1.png";
import InaImg2 from "../Assets/obras/inadvertido/inadvertido-2.png";
import InaImg3 from "../Assets/obras/inadvertido/inadvertido-3.png";
import InaImg4 from "../Assets/obras/inadvertido/inadvertido-4.png";
import InaImg5 from "../Assets/obras/inadvertido/inadvertido-5.png";
import InaImg6 from "../Assets/obras/inadvertido/inadvertido-6.png";
import InaImg7 from "../Assets/obras/inadvertido/inadvertido-7.png";
import InaImg8 from "../Assets/obras/inadvertido/inadvertido-8.png";
import InaImg9 from "../Assets/obras/inadvertido/inadvertido-9.png";
import InaImg10 from "../Assets/obras/inadvertido/inadvertido-10.png";
import InaImg11 from "../Assets/obras/inadvertido/inadvertido-15.png";
import InaImg12 from "../Assets/obras/inadvertido/inadvertido-34.png";
import InaImg13 from "../Assets/obras/inadvertido/inadvertido-36.png";
import InaImg14 from "../Assets/obras/inadvertido/inadvertido-33.png";
import InaImg15 from "../Assets/obras/inadvertido/inadvertido-31.png";
import InaImg16 from "../Assets/obras/inadvertido/inadvertido-39.png";
import InaImg17 from "../Assets/obras/inadvertido/inadvertido-37.png";
import InaImg18 from "../Assets/obras/inadvertido/inadvertido-29.png";
import InaImg19 from "../Assets/obras/inadvertido/inadvertido-40.png";
import InaImg20 from "../Assets/obras/inadvertido/inadvertido-38.png";
// import Prueba from "../Assets/frenchfood3.jpg";
import IconTag from "../Assets/svg/icon-tag.svg";
import PopupObras from "./PopupObras";
const Inadvertido = () => {
  const images = [
    InaImg1,
    InaImg0,
    InaImg13,
    InaImg14,
    InaImg17,
    InaImg15,
    InaImg16,
    InaImg12,
    InaImg18,
    InaImg19,
    InaImg11,
    InaImg20,
  ];

  useEffect(() => {
    const container = document.querySelector(
      ".horizontal-inad-gallery-container"
    );

    const handleScroll = (event) => {
      const scrollSpeed = 0.2; // Adjust the scroll speed here (smaller value for slower scroll)
      container.scrollLeft += event.deltaY * scrollSpeed;
      event.preventDefault(); // Prevent the default scroll behavior
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="horizontal-inad-gallery-container">
      <div
        className="horizontal-inad-gallery"
        style={{ backgroundColor: "white" }}
      >
        {images.map((image, index) => (
          <div className="inad-container" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="gallery-inad-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inadvertido;
