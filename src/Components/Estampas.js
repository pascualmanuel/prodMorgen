import React, { useState } from "react";
import FirstImage1 from "../Assets/obras/sellos/sellos-1.png";
import FirstImage2 from "../Assets/obras/sellos/sellos-2.png";
import FirstImage3 from "../Assets/obras/sellos/sellos-3.png";
import FirstImage4 from "../Assets/obras/sellos/sellos-4.png";
import FirstImage5 from "../Assets/obras/sellos/sellos-5.png";
import FirstImage6 from "../Assets/obras/sellos/sellos-6.png";
import FirstImage7 from "../Assets/obras/sellos/sellos-7.png";
import FirstImage8 from "../Assets/obras/sellos/sellos-8.png";
import FirstImage9 from "../Assets/obras/sellos/sellos-9.png";
import FirstImage10 from "../Assets/obras/sellos/sellos-10.png";
import FirstImage11 from "../Assets/obras/sellos/sellos-11.png";
import FirstImage12 from "../Assets/obras/sellos/sellos-12.png";
import FirstImage13 from "../Assets/obras/sellos/sellos-13.png";
import FirstImage14 from "../Assets/obras/sellos/sellos-14.png";
import FirstImage15 from "../Assets/obras/sellos/sellos-15.png";
import FirstImage16 from "../Assets/obras/sellos/sellos-16.png";
import FirstImage17 from "../Assets/obras/sellos/sellos-17.png";
import FirstImage18 from "../Assets/obras/sellos/sellos-18.png";
import FirstImage19 from "../Assets/obras/sellos/sellos-19.png";
import FirstImage20 from "../Assets/obras/sellos/sellos-20.png";
import FirstImage21 from "../Assets/obras/sellos/sellos-21.png";

import IconTag from "../Assets/svg/icon-tag.svg";
import StarPrueba from "../Assets/svg/star-apoyar.svg";
import PopupObras from "./PopupObras";

const Estampas = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
    console.log(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setShowPopup(false);
  };

  const allImages = [
    FirstImage4,
    FirstImage3,
    FirstImage5,
    FirstImage2,
    FirstImage6,
    FirstImage1,
    FirstImage7,
    FirstImage8,
    FirstImage9,
    FirstImage10,
    FirstImage11,
    FirstImage12,
    FirstImage13,
    FirstImage14,
    FirstImage15,
    FirstImage16,
    FirstImage17,
    FirstImage18,
    FirstImage19,
    FirstImage20,
    FirstImage21,
  ];

  let imagesFirstRow = allImages.slice(0, 7);
  let imagesSecondRow = allImages.slice(7, 14);
  let imagesThirdRow = allImages.slice(14, 21);

  let outThird = "block";

  if (window.innerWidth < 720) {
    outThird = "none";
    imagesFirstRow = allImages.slice(0, 10);
    imagesSecondRow = allImages.slice(10, 20);
  }

  return (
    <div className="image-gallery-conexion">
      <div className="conextion-row">
        {imagesFirstRow.map((image, index) => (
          <div className="image-container-conexion" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="conexion-images"
              onClick={() => openPopup(image)}
            />
            <img
              src={IconTag}
              width={60}
              alt="Popup Trigger Icon"
              className="popup-trigger-conexion"
              onClick={() => openPopup(image)}
            />
          </div>
        ))}
      </div>
      <div className="conextion-row">
        {imagesSecondRow.map((image, index) => (
          <div className="image-container-conexion" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="conexion-images"
              onClick={() => openPopup(image)}
            />
            <img
              src={IconTag}
              width={60}
              alt="Popup Trigger Icon"
              className="popup-trigger-conexion"
              onClick={() => openPopup(image)}
            />
          </div>
        ))}
      </div>
      <div className="conextion-row" style={{ display: outThird }}>
        {imagesThirdRow.map((image, index) => (
          <div className="image-container-conexion" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="conexion-images"
              onClick={() => openPopup(image)}
            />
            <img
              src={IconTag}
              width={60}
              alt="Popup Trigger Icon"
              className="popup-trigger-conexion"
              onClick={() => openPopup(image)}
            />
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="modal-overlay">
          <PopupObras selectedImage={selectedImage} closePopup={closePopup} />
        </div>
      )}
    </div>
  );
};

export default Estampas;
