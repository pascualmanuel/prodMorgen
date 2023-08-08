import React, { useState } from "react";
import FirstImage1 from "../Assets/obras/desnudos/a1.png";
import FirstImage2 from "../Assets/obras/desnudos/a2.png";
import FirstImage3 from "../Assets/obras/desnudos/a3.png";
import FirstImage4 from "../Assets/obras/desnudos/b1.png";
import FirstImage5 from "../Assets/obras/desnudos/b2.png";
import FirstImage6 from "../Assets/obras/desnudos/b3.png";
import FirstImage7 from "../Assets/obras/desnudos/c1.png";
import FirstImage8 from "../Assets/obras/desnudos/c2.png";
import FirstImage9 from "../Assets/obras/desnudos/c3.png";
import IconTag from "../Assets/svg/icon-tag.svg";
import StarPrueba from "../Assets/svg/star-apoyar.svg";
import PopupObras from "./PopupObras";

const Desnudos = () => {
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

  const imagesFirstRow = [FirstImage1, FirstImage2, FirstImage3];

  const imagesSecondRow = [FirstImage4, FirstImage5, FirstImage6];

  const imagesThirdRow = [FirstImage7, FirstImage8, FirstImage9];

  let outThird = "block";

  if (window.innerWidth < 720) {
    outThird = "none";
  }

  return (
    <div className="image-gallery-conexion">
      <div className="conextion-row cr-1">
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

export default Desnudos;
