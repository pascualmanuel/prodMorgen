import React from "react";
import "../Styles/Atendeme.css"; // Import the CSS file
import axios from "axios";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Popup from "./PopUp";
import Gallery1 from "../Assets/gallery-imgs/gallery-1.webp";
import Gallery2 from "../Assets/gallery-imgs/gallery-2.webp";
import Gallery10 from "../Assets/gallery-imgs/Gallery-10.png";
import Gallery4 from "../Assets/gallery-imgs/gallery-4.webp";
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

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/medias"
  //       );
  //       setImages(response.data.slice(0, 20)); // Limit to the first 20 images
  //     } catch (error) {
  //       console.error("Error fetching images:", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  const galleryContent = [
    {
      media: "color",
      source: "#4590E6",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "image",
      source: Gallery1,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#DFB000",
      category: "Historieta ",
      date: "15/10/20",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#FE6970",
      category: "Historieta ",
      date: "10/09/23",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#FF3910",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#AE79EF",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#005DA2",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#7D9F00",
      category: "Historieta",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "image",
      source: Gallery2, // Provide the correct image URL here
      category: "Historieta",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#DC3349", // Provide the correct image URL here
      category: "Historieta",
      date: "15/10/20",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#DCCB00", // Provide the correct image URL here
      category: "Historieta",
      date: "10/09/23",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#DC3349", // Provide the correct image URL here
      category: "Historieta",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "image",
      source: Gallery10,
      category: "Historieta",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    // {
    //   media: "video",
    //   source: "https://www.w3schools.com/html/mov_bbb.mp4",
    //   category: "Historieta",
    //   date: "25/09/19",
    //   title: "Caras Morgenstern",
    //   author: "Ailin Kirjner",
    // },
    {
      media: "color",
      source: "#DFB000", // Provide the correct image URL here
      category: "Historieta",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#FE6970",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#FF3910",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#AE79EF",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#005DA2",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "image",
      source: Gallery4,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      media: "color",
      source: "#7D9F00",
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
  ];

  const selectedImageData =
    selectedImageIndex !== null ? galleryContent[selectedImageIndex] : null;

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return galleryContent.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };
  console.log(galleryContent);
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
                              {item.title}
                            </div>
                          </div>
                          <div className="hover-g-bottom"> </div>
                        </div>
                      </div>
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
                      style={{ backgroundColor: item.source }}
                    />
                    <div className="submodal">
                      <div className="submodal-top">
                        <div className="submodal-category">
                          {selectedImageData.category}
                        </div>
                        <div>{selectedImageData.date}</div>
                      </div>

                      <div className="submodal-bottom">
                        <div>{selectedImageData.title}</div>

                        <div>{selectedImageData.author}</div>
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
