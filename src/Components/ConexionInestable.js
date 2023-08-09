import React, { useState } from "react";
import FirstImage1 from "../Assets/obras/conexion/conexioni-1.png";
import FirstImage2 from "../Assets/obras/conexion/conexioni-2.png";
import FirstImage3 from "../Assets/obras/conexion/conexioni-3.png";
import FirstImage4 from "../Assets/obras/conexion/conexioni-4.png";
import FirstImage5 from "../Assets/obras/conexion/conexioni-5.png";
import FirstImage6 from "../Assets/obras/conexion/conexioni-6.png";
import FirstImage7 from "../Assets/obras/conexion/conexioni-7.png";
import FirstImage8 from "../Assets/obras/conexion/conexioni-8.png";
import FirstImage9 from "../Assets/obras/conexion/conexioni-9.png";
import FirstImage10 from "../Assets/obras/conexion/conexioni-10.png";
import FirstImage11 from "../Assets/obras/conexion/conexioni-11.png";
import FirstImage12 from "../Assets/obras/conexion/conexioni-12.png";
import FirstImage13 from "../Assets/obras/conexion/conexioni-13.png";
import FirstImage14 from "../Assets/obras/conexion/conexioni-14.png";
import FirstImage15 from "../Assets/obras/conexion/conexioni-15.png";
import FirstImage16 from "../Assets/obras/conexion/conexioni-16.png";
import FirstImage17 from "../Assets/obras/conexion/conexioni-17.png";
import FirstImage18 from "../Assets/obras/conexion/conexioni-18.png";
import FirstImage19 from "../Assets/obras/conexion/conexioni-19.png";
import FirstImage20 from "../Assets/obras/conexion/conexioni-20.png";
import FirstImage21 from "../Assets/obras/conexion/conexioni-21.png";
import FirstImage22 from "../Assets/obras/conexion/conexioni-22.png";
import FirstImage23 from "../Assets/obras/conexion/conexioni-23.png";
import FirstImage24 from "../Assets/obras/conexion/conexioni-24.png";
import FirstImage25 from "../Assets/obras/conexion/conexioni-25.png";
import FirstImage26 from "../Assets/obras/conexion/conexioni-26.png";
import FirstImage27 from "../Assets/obras/conexion/conexioni-27.png";
import FirstImage28 from "../Assets/obras/conexion/conexioni-28.png";
import FirstImage29 from "../Assets/obras/conexion/conexioni-29.png";
import FirstImage30 from "../Assets/obras/conexion/conexioni-30.png";
import FirstImage31 from "../Assets/obras/conexion/conexioni-31.png";
import FirstImage32 from "../Assets/obras/conexion/conexioni-32.png";
import FirstImage33 from "../Assets/obras/conexion/conexioni-33.png";
import FirstImage34 from "../Assets/obras/conexion/conexioni-34.png";
import FirstImage35 from "../Assets/obras/conexion/conexioni-35.png";
import FirstImage36 from "../Assets/obras/conexion/conexioni-36.png";
import FirstImage37 from "../Assets/obras/conexion/conexioni-37.png";
import FirstImage38 from "../Assets/obras/conexion/conexioni-38.png";
import FirstImage39 from "../Assets/obras/conexion/conexioni-39.png";
import FirstImage40 from "../Assets/obras/conexion/conexioni-40.png";
import FirstImage41 from "../Assets/obras/conexion/conexioni-41.png";
import FirstImage42 from "../Assets/obras/conexion/conexioni-42.png";
import FirstImage43 from "../Assets/obras/conexion/conexioni-43.png";
import FirstImage44 from "../Assets/obras/conexion/conexioni-44.png";
import FirstImage45 from "../Assets/obras/conexion/conexioni-45.png";
import FirstImage46 from "../Assets/obras/conexion/conexioni-46.png";
import FirstImage47 from "../Assets/obras/conexion/conexioni-47.png";
import FirstImage48 from "../Assets/obras/conexion/conexioni-48.png";
import FirstImage49 from "../Assets/obras/conexion/conexioni-49.png";
import FirstImage50 from "../Assets/obras/conexion/conexioni-50.png";
import FirstImage51 from "../Assets/obras/conexion/conexioni-51.png";
import FirstImage52 from "../Assets/obras/conexion/conexioni-52.png";
import FirstImage53 from "../Assets/obras/conexion/conexioni-53.png";
import FirstImage54 from "../Assets/obras/conexion/conexioni-54.png";
import FirstImage55 from "../Assets/obras/conexion/conexioni-55.png";
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
    FirstImage19,
    FirstImage20,
    FirstImage21,
    FirstImage22,
    FirstImage23,
    FirstImage24,
    FirstImage25,
    FirstImage26,
    FirstImage27,
    FirstImage28,
    FirstImage29,
    FirstImage30,
    FirstImage31,
    FirstImage32,
    FirstImage33,
    FirstImage34,
    FirstImage35,
    FirstImage36,
    FirstImage37,
    FirstImage38,
    FirstImage39,
    FirstImage40,
    FirstImage41,
    FirstImage42,
    FirstImage43,
    FirstImage44,
    FirstImage45,
    FirstImage46,
    FirstImage47,
    FirstImage48,
    FirstImage49,
    FirstImage50,
    FirstImage51,
    FirstImage52,
    FirstImage53,
    FirstImage54,
    // FirstImage55,
  ];

  let imagesFirstRow = allImages.slice(0, 18);
  let imagesSecondRow = allImages.slice(18, 36);
  let imagesThirdRow = allImages.slice(36, 52);

  let outThird = "block";

  if (window.innerWidth < 720) {
    outThird = "none";
    imagesFirstRow = allImages.slice(0, 26);
    imagesSecondRow = allImages.slice(26, 52);
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
