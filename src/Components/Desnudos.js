import React, { useState } from "react";
import FirstImage1 from "../Assets/obras/conexion/conexion-1.png";
import FirstImage2 from "../Assets/obras/conexion/conexion-2.png";
import FirstImage3 from "../Assets/obras/conexion/conexion-3.png";
import FirstImage4 from "../Assets/obras/conexion/conexion-4.png";
import FirstImage5 from "../Assets/obras/conexion/conexion-5.png";
import FirstImage6 from "../Assets/obras/conexion/conexion-6.png";
import IconTag from "../Assets/svg/icon-tag.svg";
import StarPrueba from "../Assets/svg/star-apoyar.svg";
import PopupObras from "./PopupObras";

const Desnudos = () => {
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

  const imagesFirstRow = [
    FirstImage4,
    FirstImage3,
    FirstImage5,
    FirstImage2,
    FirstImage6,
    FirstImage1,
  ];

  const imagesSecondRow = [
    FirstImage1,
    FirstImage4,
    FirstImage3,
    FirstImage6,
    FirstImage2,
    FirstImage5,
  ];

  const imagesThirdRow = [
    FirstImage4,
    FirstImage6,
    FirstImage2,
    FirstImage5,
    FirstImage1,
    FirstImage3,
  ];

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
      <div className="conextion-row">
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
        <PopupObras selectedImage={selectedImage} closePopup={closePopup} />
      )}
    </div>
  );
};

export default Desnudos;
