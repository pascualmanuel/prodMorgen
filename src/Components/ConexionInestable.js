import React, { useState } from "react";
import FirstImage1 from "../Assets/obras/conexion/conexion-1.png";
import FirstImage2 from "../Assets/obras/conexion/conexion-2.png";
import FirstImage3 from "../Assets/obras/conexion/conexion-3.png";
import FirstImage4 from "../Assets/obras/conexion/conexion-4.png";
import FirstImage5 from "../Assets/obras/conexion/conexion-1.png";
import FirstImage6 from "../Assets/obras/conexion/conexion-6.png";
import FirstImage7 from "../Assets/obras/conexion/conexion-6.png";
import FirstImage8 from "../Assets/obras/conexion/conexion-2.png";
import FirstImage9 from "../Assets/obras/conexion/conexion-3.png";
import FirstImage10 from "../Assets/obras/conexion/conexion-4.png";
import FirstImage11 from "../Assets/obras/conexion/conexion-5.png";
import FirstImage12 from "../Assets/obras/conexion/conexion-6.png";
import FirstImage13 from "../Assets/obras/conexion/conexion-2.png";
import FirstImage14 from "../Assets/obras/conexion/conexion-3.png";
import FirstImage15 from "../Assets/obras/conexion/conexion-3.png";
import FirstImage16 from "../Assets/obras/conexion/conexion-4.png";
import FirstImage17 from "../Assets/obras/conexion/conexion-5.png";
import FirstImage18 from "../Assets/obras/conexion/conexion-6.png";
// import FirstImage19 from "../Assets/obras/conexion/conexion-1.png";
// import FirstImage20 from "../Assets/obras/conexion/conexion-3.png";
// import FirstImage21 from "../Assets/obras/conexion/conexion-4.png";

import IconTag from "../Assets/svg/icon-tag.svg";
import StarPrueba from "../Assets/svg/star-apoyar.svg";
import PopupObras from "./PopupObras";

const ConexionInestable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);

  };

  const closePopup = () => {
    setSelectedImage(null);
    setShowPopup(false);
  };

  const allImages = [
    FirstImage1,
    FirstImage2,
    FirstImage3,
    FirstImage4,
    FirstImage5,
    FirstImage6,
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
  ];

  let imagesFirstRow = allImages.slice(0, 6);
  let imagesSecondRow = allImages.slice(6, 12);
  let imagesThirdRow = allImages.slice(12, 18);

  let outThird = "block";

  if (window.innerWidth < 720) {
    outThird = "none";
    imagesFirstRow = allImages.slice(0, 9);
    imagesSecondRow = allImages.slice(9, 18);
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
          <PopupObras selectedImage={selectedImage} closePopup={closePopup} />{" "}
        </div>
      )}
    </div>
  );
};

export default ConexionInestable;
