import React, { useEffect, useState, useRef } from "react";
import FuturoImg1 from "../Assets/obras/futuro-inmediato/desenfocado-1.png";
import FuturoImg2 from "../Assets/obras/futuro-inmediato/desenfocado-2.png";
import FuturoImg3 from "../Assets/obras/futuro-inmediato/desenfocado-3.png";
import FuturoImg4 from "../Assets/obras/futuro-inmediato/desenfocado-4.png";
import FuturoImg5 from "../Assets/obras/futuro-inmediato/desenfocado-5.png";
import FuturoImg6 from "../Assets/obras/futuro-inmediato/desenfocado-6.png";

import IconTag from "../Assets/svg/icon-tag.svg";
import PopupObras from "./PopupObras";

const FuturoInmediato = () => {
  const containerRef = useRef(null);

  const images = [
    FuturoImg1,
    FuturoImg2,
    FuturoImg3,
    FuturoImg4,
    FuturoImg5,
    FuturoImg6,
    // FuturoImg7,
  ];

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (event) => {
      const scrollSpeed = 0.2;
      container.scrollLeft += event.deltaY * scrollSpeed;
      event.preventDefault();
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="horizontal-futuro-gallery-container" ref={containerRef}>
      <div className="horizontal-futuro-gallery">
        {images.map((image, index) => (
          <div
            className={`futuro-container ${
              index === images.length - 1 ? "last-image" : ""
            }`}
            key={index}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="gallery-futuro-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuturoInmediato;
