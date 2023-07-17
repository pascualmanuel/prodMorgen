import React from "react";
import "../Styles/Atendeme.css"; // Import the CSS file
import axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Popup from "./PopUp";
import Img from "../Assets/gallery-imgs/Gallery-1.png";
import Gallery1 from "../Assets/gallery-imgs/Gallery-1.png";
import Gallery2 from "../Assets/gallery-imgs/Gallery-2.png";
import Gallery3 from "../Assets/gallery-imgs/Gallery-3.png";
import Gallery4 from "../Assets/gallery-imgs/Gallery-4.png";
import Gallery5 from "../Assets/gallery-imgs/Gallery-5.png";
import Gallery6 from "../Assets/gallery-imgs/Gallery-6.png";
import Gallery7 from "../Assets/gallery-imgs/Gallery-7.png";
import Gallery8 from "../Assets/gallery-imgs/Gallery-8.png";
import Gallery9 from "../Assets/gallery-imgs/Gallery-9.png";
import Gallery10 from "../Assets/gallery-imgs/Gallery-10.png";
import Gallery11 from "../Assets/gallery-imgs/Gallery-11.png";
import Gallery12 from "../Assets/gallery-imgs/Gallery-12.png";
import Gallery13 from "../Assets/gallery-imgs/Gallery-13.png";
import Gallery14 from "../Assets/gallery-imgs/Gallery-14.png";
import Gallery15 from "../Assets/gallery-imgs/Gallery-15.png";
import Gallery16 from "../Assets/gallery-imgs/Gallery-16.png";
import Gallery17 from "../Assets/gallery-imgs/Gallery-17.png";
import Gallery18 from "../Assets/gallery-imgs/Gallery-18.png";
import Gallery19 from "../Assets/gallery-imgs/Gallery-19.png";
import Gallery20 from "../Assets/gallery-imgs/Gallery-20.png";
import NextIcon from "../Assets/svg/white-next-icon.svg";
import PrevIcon from "../Assets/svg/white-prev-icon.svg";

const ImageSection = () => {
  const [transformStyle, setTransformStyle] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleModalClose = () => {
    setSelectedImageIndex(null);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleMouseMove = (event) => {
    const xPos = -(event.pageX / window.innerWidth) * 260;
    const yPos = -(event.pageY / window.innerHeight) * 570;
    const newTransformStyle = `translate3d(${getTranslateX(
      xPos
    )}px, ${getTranslateY(yPos)}px, 0)`;
    setTransformStyle(newTransformStyle);
  };

  // const getTranslateX = (xPos) => {
  //   const leftMax = -400; //pareciera ser right
  //   const rightMax = 100;
  //   const translateX = Math.min(Math.max(xPos, leftMax), rightMax);
  //   return translateX;
  // };

  const leftMax = -260.022;
  const leftMin = 80;
  // const rightMax = 100;

  const getTranslateX = (xPos) => {
    const containerWidth = window.innerWidth; // Width of the container
    const translateRange = containerWidth - (leftMax - leftMin); // Total range for translation
    const translateX = (xPos / containerWidth) * translateRange + leftMin;
    return translateX;
  };

  const topMax = -100;
  const topMin = 60;

  const getTranslateY = (yPos) => {
    const containerHeight = window.innerHeight; // Height of the container
    const translateRange = containerHeight - (topMax - topMin); // Total range for translation
    const translateY = (yPos / containerHeight) * translateRange + topMin;
    return translateY;
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/photos"
  //       );
  //       setImages(response.data.slice(0, 20)); // Limit to the first 20 images
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery7,
    Gallery9,
    Gallery8,
    Gallery6,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15,
    Gallery16,
    Gallery17,
    Gallery18,
    Gallery19,
    Gallery20,
  ];
  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return galleryImages.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === galleryImages.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleKeyboardNavigation = (event) => {
    if (event.keyCode === 37) {
      // Left arrow key
      handlePrevImage();
    } else if (event.keyCode === 39) {
      // Right arrow key
      handleNextImage();
    } else if (event.keyCode === 27) {
      // Esc key
      handleModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardNavigation);
    return () => {
      window.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, []);

  const handleModalClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      handleModalClose();
    }
  };

  return (
    <>
      <div className="image-section" onMouseMove={handleMouseMove}>
        <div className="grid-container" style={{ transform: transformStyle }}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => handleImageClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="second-cont-atendeme">
        <h2
          className="atendeme-title"
          style={{ color: "#DC3349", pointerEvents: "none" }}
        >
          Galería
        </h2>
        <div className="atendeme-button">
          <CustomButton
            buttonText={"Participar"}
            firstColor={"#DC3349"}
            secondColor={"#005DA2"}
            thirdColor={"#4590E6"}
            backColor={"#DC3349"}
            border={"solid black"}
            onClick={openPopup}
            width={"235px"}
            height={"55px"}
          />
        </div>
        {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
        {selectedImageIndex !== null && (
          <div className="modal-overlay" onClick={handleModalClick}>
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <span className="gallery-prev-button">
              <img width={35} src={PrevIcon} onClick={handlePrevImage} />
            </span>
            <div className="modal">
              <img
                className="modal-image"
                src={galleryImages[selectedImageIndex]}
                alt="Selected Image"
              />
              <div className="submodal">

                Hola! <br /> Hola Hola! <br /> Hola{" "}
              </div>
            </div>
            <span className="gallery-next-button">
              <img
                width={35}
                src={NextIcon}
                onClick={handleNextImage}
                // style={{ display: Out }}
              />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageSection;
