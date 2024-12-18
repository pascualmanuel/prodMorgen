import React from "react";
import "../Styles/Atendeme.css"; // Import the CSS file
import axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Popup from "./PopUp";
import Gallery1 from "../Assets/gallery-imgs/gallery-1.webp";
import Gallery2 from "../Assets/gallery-imgs/gallery-2.webp";
import Gallery3 from "../Assets/gallery-imgs/Gallery-10.jpeg";
import Gallery4 from "../Assets/gallery-imgs/gallery-4.webp";
import Gallery5 from "../Assets/gallery-imgs/nicolas-1.webp";
import Gallery6 from "../Assets/obras/inadvertido/inad-4.webp";
import Gallery7 from "../Assets/obras/inadvertido/inad-5.webp";
import Gallery8 from "../Assets/obras/inadvertido/inad-9.webp";
import Gallery9 from "../Assets/gallery-imgs/flor-1.webp";

import Gallery10 from "../Assets/obras/inadvertido/inad-2.webp";
import Gallery11 from "../Assets/gallery-imgs/hernan-1.webp";
import Gallery12 from "../Assets/obras/inadvertido/inad-6.webp";
import Gallery13 from "../Assets/obras/inadvertido/inad-8.webp";
import Gallery14 from "../Assets/gallery-imgs/Gallery-101.png";
import Gallery15 from "../Assets/gallery-imgs/manugif.gif";
import Gallery16 from "../Assets/gallery-imgs/manugif-2.gif";

// import Gallery12 from "../Assets/gallery-imgs/Gallery-101.webp";
import NextIcon from "../Assets/svg/white-next-icon.svg";
import PrevIcon from "../Assets/svg/white-prev-icon.svg";
import { useLanguage } from "../Hooks/LanguageContext";
const ImageSection = () => {
  const [transformStyle, setTransformStyle] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { userLanguage, translateText } = useLanguage();
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

  let numberXPos = 280;
  let numberYPos = 570;

  const handleMouseMove = (event) => {
    const xPos = -(event.pageX / window.innerWidth) * numberXPos;
    const yPos = -(event.pageY / window.innerHeight) * numberYPos;
    const newTransformStyle = `translate3d(${getTranslateX(
      xPos
    )}px, ${getTranslateY(yPos)}px, 0)`;
    setTransformStyle(newTransformStyle);
  };
  let leftMax = -260.022;
  let leftMin = 80;
  let topMax = -100;
  let topMin = 60;

  const getTranslateX = (xPos) => {
    const containerWidth = window.innerWidth; // Width of the container
    const translateRange = containerWidth - (leftMax - leftMin); // Total range for translation
    const translateX = (xPos / containerWidth) * translateRange + leftMin;
    return translateX;
  };

  const getTranslateY = (yPos) => {
    const containerHeight = window.innerHeight; // Height of the container
    const translateRange = containerHeight - (topMax - topMin); // Total range for translation
    const translateY = (yPos / containerHeight) * translateRange + topMin;
    return translateY;
  };

  if (window.innerWidth < 1400) {
    leftMin = 80;
    leftMax = -80;
  }

  if (window.innerWidth < 1420) {
    numberXPos = 410;
  }

  if (window.innerHeight < 680) {
    numberYPos = 670;
  }

  if (window.innerWidth < 1250) {
    numberXPos = 580;
  }

  if (window.innerWidth < 1000) {
    numberXPos = 800;
  }

  useEffect(() => {
    if (window.innerWidth > 720) {
      document.body.classList.add("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const galleryContent = [
    // Number 1
    {
      media: "color",
      source: "#4590E6",
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },
    // Number 2

    {
      media: "image",
      source: Gallery4,
      category: "Drawing",
      title: "",
      author: "Júlia Barata",
    },
    // Number 3
    {
      media: "color",
      source: "#DFB000",
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },
    // Number 4
    {
      media: "image",
      source: Gallery1,
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Kiki Ramos Sörvik",
    },

    // Number 5
    {
      media: "color",
      source: "#FF3910",
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },
    // Number 6
    {
      media: "image",
      source: Gallery14, // Provide the correct image URL here
      category: "Máscara",
      title: "",
      author: "Clara Dalmazzo",
    },

    {
      media: "image",
      source: Gallery13,
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Kiki Ramos Sörvik",
    },
    {
      media: "image",
      source: Gallery11,
      category: translateText("Sound", "Sonido"),
      title: "",
      author: "Hernán Kerlleñevich",
    },

    {
      media: "color",
      source: "#DC3349", // Provide the correct image URL here
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },

    {
      media: "image",
      source: Gallery8, // Provide the correct image URL here
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },

    {
      media: "gif",
      link: "https://vimeo.com/1023411631",
      source: Gallery5,
      category: translateText("Interactive", "Interactivo"),
      title: "",
      author: "Nicolás Castagna",
    },
    // Number 7
    {
      media: "image",
      source: Gallery9,
      category: translateText("Silkscreens", "Serigrafías"),
      title: "",
      author: "Flor Kligman",
    },
    {
      media: "image",
      source: Gallery3,
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Manuel Fernández",
    },
    // Number 8
    {
      media: "gif",
      link: "https://vimeo.com/920063700",

      source: Gallery16, // Provide the correct image URL here
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Manuel Fernández",
    },
    {
      media: "image",
      source: Gallery7,
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },
    // Number 9
    // Number 10
    {
      media: "image",
      source: Gallery12, // Provide the correct image URL here
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Daniela Novak",
    },
    // Number 11
    {
      media: "image",
      source: Gallery10, // Provide the correct image URL here
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },
    // Number 12
    {
      media: "color",
      source: "#4590E6", // Provide the correct image URL here
      category: "Máscara",
      title: "",
      author: "Clara Dalmazzo",
    },
    // Number 13
    // {
    //   media: "video",
    //   source: "https://www.w3schools.com/html/mov_bbb.mp4",
    //   category:  "fotogrfía"
    //   title: "",
    //   author: "Santiago Antín",
    // },
    // Number 14
    {
      media: "image",
      source: Gallery6,
      category: translateText("Photography", "Fotografía"),
      title: "",
      author: "Santiago Antín",
    },
    {
      media: "gif",
      link: "https://vimeo.com/1022112801",
      source: Gallery15, // Provide the correct image URL here
      category: translateText("VJ", "VJ"),
      title: "",
      author: "Manuel Fernández",
    },
    // Number 15

    // Number 16
  ];

  const selectedImageData =
    selectedImageIndex !== null ? galleryContent[selectedImageIndex] : null;

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      const lastIndex = galleryContent.length - 1;

      // Loop until we find an image or reach the beginning
      while (newIndex !== prevIndex) {
        if (newIndex < 0) {
          newIndex = lastIndex;
        }

        if (galleryContent[newIndex].media === "image") {
          return newIndex;
        }

        newIndex--;
      }

      return prevIndex; // Fallback to the current index if no image is found
    });
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      let nextIndex = prevIndex + 1;
      const lastIndex = galleryContent.length - 1;

      while (nextIndex !== prevIndex) {
        if (nextIndex > lastIndex) {
          nextIndex = 0;
        }
        if (galleryContent[nextIndex].media === "image") {
          return nextIndex;
        }
        nextIndex++;
      }

      return prevIndex; // Fallback to the current index if no image is found
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
      {window.innerWidth > 720 ? (
        <>
          <div onMouseMove={handleMouseMove}>
            <div className="image-section ">
              <div
                className="grid-container "
                style={{ transform: transformStyle }}
              >
                {galleryContent.map((item, index) => (
                  <div
                    key={index}
                    className={`box  ${
                      item.media === "video" ? "video-box" : ""
                    }`}
                    // onClick={() => handleImageClick(index)}
                    style={{ backgroundColor: item.source }}
                  >
                    {item.media === "image" && (
                      <div
                        key={index}
                        className=" box pointer disableSave"
                        style={{ backgroundImage: `url(${item.source})` }}
                        onClick={() => handleImageClick(index)}
                      >
                        <div className="image-text">
                          <div className="hover-g-top">
                            <div style={{ marginBottom: 20, marginLeft: 20 }}>
                              {item.author}
                            </div>
                          </div>
                          <div className="hover-g-bottom"> </div>
                        </div>
                      </div>
                    )}

                    {item.media === "gif" && (
                      <a href={item.link} target="_blank">
                        <div
                          key={index}
                          className=" box pointer disableSave"
                          style={{ backgroundImage: `url(${item.source})` }}
                          // onClick={() => handleImageClick(index)}
                        >
                          <div className="image-text">
                            <div className="hover-g-top">
                              <div style={{ marginBottom: 20, marginLeft: 20 }}>
                                {item.author}
                              </div>
                            </div>
                            <div className="hover-g-bottom"> </div>
                          </div>
                        </div>
                      </a>
                    )}
                    {item.media === "video" && (
                      <video
                        className="video"
                        controlsList="nodownload"
                        autoPlay
                        muted
                        playsInline
                        loop
                      >
                        <source src={item.source} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="second-cont-atendeme">
              <h2
                className="atendeme-title"
                style={{ color: "#DC3349", pointerEvents: "none" }}
              >
                {translateText("Gallery", "Galería")}
              </h2>
              <div className="atendeme-button">
                <CustomButton
                  buttonText={translateText("Participate", "Participar")}
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
              {selectedImageData && (
                <div className="modal-overlay" onClick={handleModalClick}>
                  <span className="close" onClick={handleModalClose}>
                    &times;
                  </span>
                  <span className="gallery-prev-button pointer">
                    <img width={35} src={PrevIcon} onClick={handlePrevImage} />
                  </span>
                  <div className="modal">
                    <img
                      className="modal-image"
                      src={selectedImageData.source}
                      alt="Selected Image!"
                    />
                    <div className="submodal">
                      <div className="submodal-top">
                        <div className="submodal-category">
                          {selectedImageData.category}
                        </div>
                        <div className="submodal-bottom">
                          {selectedImageData.author}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="gallery-next-button pointer">
                    <img width={35} src={NextIcon} onClick={handleNextImage} />
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="gallery-mob">
          <h2 className="gallery-title-mob">Galería</h2>

          {galleryContent.map((item, index) => (
            <div
              key={index}
              className={`gallery-box-mob ${
                item.media === "video" ? "video-box" : ""
              }`}
              onClick={() => handleImageClick(index)}
              style={{ backgroundColor: item.source }}
            >
              {item.media === "image" && (
                <div
                  className={`gallery-box-mob box pointer disableSave`}
                  style={{ backgroundImage: `url(${item.source})` }}
                >
                  <div className="image-text">
                    <div className="hover-g-top">
                      <div style={{ marginBottom: 20, marginLeft: 20 }}>
                        {item.title}
                      </div>
                    </div>
                    <div className="hover-g-bottom"></div>
                  </div>
                </div>
              )}
              {item.media === "gif" && (
                <a href={item.link} target="_blank">
                  <div
                    key={index}
                    className="box pointer disableSave"
                    style={{
                      backgroundImage: `url(${item.source})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100%", // Set height and width as needed
                      width: "100%",
                    }}
                  >
                    <div className="image-text">
                      <div className="hover-g-top">
                        <div style={{ marginBottom: 20, marginLeft: 20 }}>
                          {item.author}
                        </div>
                      </div>
                      <div className="hover-g-bottom"> </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
          <div style={{ position: "fixed", top: "75vh" }}>
            <CustomButton
              buttonText={translateText("Participate", "Participar")}
              firstColor={"#DC3349"}
              secondColor={"#005DA2"}
              thirdColor={"#4590E6"}
              backColor={"#DC3349"}
              border={"solid black"}
              onClick={openPopup}
              width={"235px"}
              height={"25px"}
            />
          </div>
          {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
        </div>
      )}
    </>
  );
};

export default ImageSection;
