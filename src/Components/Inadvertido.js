import React, { useEffect, useState } from "react";
import InaImg1 from "../Assets/obras/inadvertido/inad-1.jpg";
import InaImg2 from "../Assets/obras/inadvertido/inad-2.jpg";
import InaImg3 from "../Assets/obras/inadvertido/inad-3.jpg";
import InaImg4 from "../Assets/obras/inadvertido/inad-4.jpg";
import InaImg5 from "../Assets/obras/inadvertido/inad-5.jpg";
import InaImg6 from "../Assets/obras/inadvertido/inad-6.jpg";
import InaImg7 from "../Assets/obras/inadvertido/inad-7.jpg";
import InaImg8 from "../Assets/obras/inadvertido/inad-8.jpg";
import InaImg9 from "../Assets/obras/inadvertido/inad-9.jpg";
import InaImg10 from "../Assets/obras/inadvertido/inad-10.jpg";
import InaImg11 from "../Assets/obras/inadvertido/inad-11.jpg";
import InaImg12 from "../Assets/obras/inadvertido/inad-12.jpg";
import InaImg13 from "../Assets/obras/inadvertido/inad-13.jpg";
import InaImg14 from "../Assets/obras/inadvertido/inad-14.jpg";
import InaImg15 from "../Assets/obras/inadvertido/inad-15.jpg";
import InaImg16 from "../Assets/obras/inadvertido/inad-16.jpg";
import InaImg17 from "../Assets/obras/inadvertido/inad-17.jpg";
import InaImg18 from "../Assets/obras/inadvertido/inad-18.jpg";
import InaImg19 from "../Assets/obras/inadvertido/inad-19.jpg";
import InaImg20 from "../Assets/obras/inadvertido/inad-20.jpg";
import InaImg21 from "../Assets/obras/inadvertido/inad-21.jpg";

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
    InaImg16,
    InaImg17,
    InaImg18,
    InaImg19,
    InaImg20,
    InaImg21,
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
