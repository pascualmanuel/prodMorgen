import React, { useEffect, useState } from "react";
import InaImg1 from "../Assets/obras/inadvertido/inad-1.png";
import InaImg2 from "../Assets/obras/inadvertido/inad-2.webp";
import InaImg3 from "../Assets/obras/inadvertido/inad-3.webp";
import InaImg4 from "../Assets/obras/inadvertido/inad-4.webp";
import InaImg5 from "../Assets/obras/inadvertido/inad-5.webp";
import InaImg6 from "../Assets/obras/inadvertido/inad-6.webp";
import InaImg7 from "../Assets/obras/inadvertido/inad-7.webp";
import InaImg8 from "../Assets/obras/inadvertido/inad-8.webp";
import InaImg9 from "../Assets/obras/inadvertido/inad-9.webp";
import InaImg10 from "../Assets/obras/inadvertido/inad-10.webp";
import InaImg11 from "../Assets/obras/inadvertido/inad-11.webp";
import InaImg12 from "../Assets/obras/inadvertido/inad-12.webp";
import InaImg13 from "../Assets/obras/inadvertido/inad-13.webp";
import InaImg14 from "../Assets/obras/inadvertido/inad-14.webp";
import InaImg15 from "../Assets/obras/inadvertido/inad-15.webp";

// import Prueba from "../Assets/frenchfood3.jpg";
import IconTag from "../Assets/svg/icon-tag.svg";
import PopupObras from "./PopupObras";
const Inadvertido = () => {
  const images = [
    InaImg1,
    InaImg2,
    InaImg3,
    InaImg4,
    InaImg5,
    InaImg6,
    InaImg7,
    InaImg8,
    InaImg9,
    InaImg10,
    InaImg11,
    InaImg12,
    InaImg13,
    InaImg14,
    InaImg15,
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
