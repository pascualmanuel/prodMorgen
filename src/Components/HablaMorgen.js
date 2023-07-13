import React, { useEffect, useState } from "react";
import InaImg1 from "../Assets/obras/hablamorgen/hablamorgen-1.jpg";
import InaImg2 from "../Assets/obras/hablamorgen/hablamorgen-2.png";
import InaImg3 from "../Assets/obras/hablamorgen/hablamorgen-3.png";
import InaImg4 from "../Assets/obras/hablamorgen/hablamorgen-4.jpg";
import InaImg5 from "../Assets/obras/hablamorgen/hablamorgen-5.jpg";
import InaImg6 from "../Assets/obras/hablamorgen/hablamorgen-6.jpg";
import InaImg7 from "../Assets/obras/hablamorgen/hablamorgen-7.jpg";
import InaImg8 from "../Assets/obras/hablamorgen/hablamorgen-8.jpg";
import InaImg9 from "../Assets/obras/hablamorgen/hablamorgen-9.png";
import InaImg10 from "../Assets/obras/hablamorgen/hablamorgen-10.jpg";
import InaImg11 from "../Assets/obras/hablamorgen/hablamorgen-11.jpg";
import InaImg12 from "../Assets/obras/hablamorgen/hablamorgen-12.png";
import InaImg13 from "../Assets/obras/hablamorgen/hablamorgen-13.png";
import InaImg14 from "../Assets/obras/hablamorgen/hablamorgen-14.png";
import InaImg15 from "../Assets/obras/hablamorgen/hablamorgen-15.png";
import InaImg16 from "../Assets/obras/hablamorgen/hablamorgen-16.jpg";
import InaImg17 from "../Assets/obras/hablamorgen/hablamorgen-17.png";
import Prueba from "../Assets/frenchfood3.jpg";
import IconTag from "../Assets/svg/icon-tag.svg";
import PopupObras from "./PopupObras";
import "../Styles/Book.css";
import NextIcon from "../Assets/obras/hablamorgen/next-icon.svg";
import PrevIcon from "../Assets/obras/hablamorgen/prev-icon.svg";
const HablaMorgen = () => {
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

  const [images, setImages] = useState([
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
    // Add more image URLs as needed
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const showPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 2 : prevSlide - 2
    );
  };

  const showNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= images.length - 2 ? 0 : prevSlide + 2
    );
  };

  return (
    <div className="hablamor-carousel">
      <img width={30} src={PrevIcon} onClick={showPreviousSlide} />
      <div className="hablamor-image-container">
        {images.slice(currentSlide, currentSlide + 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${currentSlide + index + 1}`}
          />
        ))}
      </div>

      <img width={30} src={NextIcon} onClick={showNextSlide} />
    </div>
  );
};

export default HablaMorgen;
