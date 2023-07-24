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
import IconTag from "../Assets/svg/icon-tag.svg";
import StarPrueba from "../Assets/svg/star-apoyar.svg";
import PopupObras from "./PopupObras";

const Estampas = () => {
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
    FirstImage7,
    FirstImage8,
    FirstImage9,
    FirstImage10,
    FirstImage11,
    FirstImage12,
  ];

  const imagesThirdRow = [
    FirstImage13,
    FirstImage14,
    FirstImage15,
    FirstImage16,
    FirstImage17,
    FirstImage18,
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
        <div className="modal-overlay">
          <PopupObras selectedImage={selectedImage} closePopup={closePopup} />
        </div>
      )}
    </div>
  );
};

export default Estampas;
