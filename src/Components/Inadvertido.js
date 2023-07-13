import React, { useEffect, useState } from "react";
import InaImg1 from "../Assets/obras/inadvertido/inadvertido-1.png";
import InaImg2 from "../Assets/obras/inadvertido/inadvertido-2.png";
import InaImg3 from "../Assets/obras/inadvertido/inadvertido-3.png";
import InaImg4 from "../Assets/obras/inadvertido/inadvertido-4.png";
import InaImg5 from "../Assets/obras/inadvertido/inadvertido-5.png";
import InaImg6 from "../Assets/obras/inadvertido/inadvertido-6.png";
import InaImg7 from "../Assets/obras/inadvertido/inadvertido-7.png";
import InaImg8 from "../Assets/obras/inadvertido/inadvertido-8.png";
import InaImg9 from "../Assets/obras/inadvertido/inadvertido-9.png";
import InaImg10 from "../Assets/obras/inadvertido/inadvertido-10.png";
import InaImg11 from "../Assets/obras/inadvertido/inadvertido-11.png";
import InaImg12 from "../Assets/obras/inadvertido/inadvertido-12.png";
import InaImg13 from "../Assets/obras/inadvertido/inadvertido-13.png";
import InaImg14 from "../Assets/obras/inadvertido/inadvertido-14.png";
import InaImg15 from "../Assets/obras/inadvertido/inadvertido-15.png";
import InaImg16 from "../Assets/obras/inadvertido/inadvertido-16.png";
import InaImg17 from "../Assets/obras/inadvertido/inadvertido-17.png";
import Prueba from "../Assets/frenchfood3.jpg";
import IconTag from "../Assets/svg/icon-tag.svg";
import PopupObras from "./PopupObras";
const Inadvertido = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
    console.log(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setShowPopup(false);
  };

  const images = [
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
    // Prueba,
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
    // InaImg11,
    // InaImg12,
    // InaImg13,
    // InaImg14,
    // InaImg15,
    // InaImg16,
    // InaImg17,
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
              onClick={() => openPopup(image)}
            />
            <img src={IconTag} width={40} className="icontag-inad" />
          </div>
        ))}
      </div>
      {showPopup && (
        <PopupObras selectedImage={selectedImage} closePopup={closePopup} />
      )}
    </div>
  );
};

export default Inadvertido;
