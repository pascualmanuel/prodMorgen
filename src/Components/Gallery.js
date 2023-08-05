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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
  //         "https://jsonplaceholder.typicode.com/photos"
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
      photo: Gallery1,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery1,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery3,
      category: "Historieta ",
      date: "15/10/20",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery4,
      category: "Historieta ",
      date: "10/09/23",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery5,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery7,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery9,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery8,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery6,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery10,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery11,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery12,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery13,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery14,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery15,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery16,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery17,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery18,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery19,
      category: "Historieta ",
      date: "25/09/19",
      title: "Caras Morgenstern",
      author: "Ailin Kirjner",
    },
    {
      photo: Gallery20,
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

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === galleryContent.length - 1) {
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
      {window.innerWidth > 720 ? (
        <>
          <div onMouseMove={handleMouseMove}>
            <div className="image-section">
              <div
                className="grid-container"
                style={{ transform: transformStyle }}
              >
                {galleryContent.map((item, index) => (
                  <div
                    key={index}
                    className="box pointer"
                    style={{ backgroundImage: `url(${item.photo})` }}
                    onClick={() => handleImageClick(index)}
                  >
                    <div className="image-text">
                      <div className="hover-g-top">
                        <div style={{ marginBottom: 20, marginLeft: 20 }}>
                          {item.title}
                        </div>
                      </div>
                      <div className="hover-g-bottom">
                        {/* <div>{item.date}</div> */}
                        {/* <div>{item.author}</div> */}
                      </div>
                    </div>
                  </div>
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
                  buttonText={"Participar!!!"}
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
                  <span className="gallery-prev-button">
                    <img width={35} src={PrevIcon} onClick={handlePrevImage} />
                  </span>
                  <div className="modal">
                    <img
                      className="modal-image"
                      src={selectedImageData.photo}
                      alt="Selected Image"
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
                  <span className="gallery-next-button">
                    <img width={35} src={NextIcon} onClick={handleNextImage} />
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="gallery-mob">
          {/* <div> */}
          <h2 className="gallery-title-mob">Galería</h2>
          {/* </div> */}
          {galleryContent.map((item, index) => (
            <div
              key={index}
              className="gallery-box-mob"
              style={{ backgroundImage: `url(${item.photo})` }}
              onClick={() => handleImageClick(index)}
            >
              <div className="image-text">
                <div className="hover-g-top">
                  <div style={{ marginBottom: 20, marginLeft: 20 }}>
                    {item.title}
                  </div>
                </div>
                <div className="hover-g-bottom">
                  {/* <div>{item.date}</div> */}
                  {/* <div>{item.author}</div> */}
                </div>
              </div>
            </div>
          ))}
          <div style={{ position: "fixed", top: "75vh" }}>
            <CustomButton
              buttonText={"Participar"}
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
