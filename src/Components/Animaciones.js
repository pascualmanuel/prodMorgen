import React, { useState } from "react";

import FirstImage2 from "../Assets/obras/sellos/sellos-2.png";
import FirstImage3 from "../Assets/obras/sellos/sellos-3.png";
import FirstImage4 from "../Assets/obras/sellos/sellos-4.png";
import FirstImage5 from "../Assets/obras/sellos/sellos-5.png";

import FirstImage7 from "../Assets/obras/sellos/sellos-7.png";
import FirstImage8 from "../Assets/obras/sellos/sellos-8.png";
import FirstImage9 from "../Assets/obras/sellos/sellos-9.png";
import FirstImage10 from "../Assets/obras/sellos/sellos-10.png";
import FirstImage13 from "../Assets/obras/sellos/sellos-14.png";

import FirstImage14 from "../Assets/obras/sellos/sellos-14.png";
import FirstImage15 from "../Assets/obras/sellos/sellos-15.png";
import FirstImage16 from "../Assets/obras/sellos/sellos-16.png";

import Gif1 from "../Assets/obras/animaciones/animaciones-1.gif";
import Gif2 from "../Assets/obras/animaciones/animaciones-2.gif";
import Gif3 from "../Assets/obras/animaciones/animaciones-3.gif";

const Animaciones = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const allGifs = [Gif1, Gif2, Gif3, Gif1, Gif2, Gif3, Gif2, Gif3, Gif1];

  let outThird = "block";

  let gifsFirstRow = allGifs.slice(0, 3);
  let gifsSecondRow = allGifs.slice(3, 6);
  let gifsThirdRow = allGifs.slice(6, 9);

  if (window.innerWidth < 720) {
    outThird = "none";
    gifsFirstRow = allGifs.slice(0, 9);
  }

  return (
    <div className="image-gallery-conexion">
      <div className="conextion-row">
        {gifsFirstRow.map((gif, index) => (
          <div className="image-container-conexion" key={index}>
            <img
              src={gif}
              alt={`GIF ${index + 1}`}
              className="conexion-images"
              //   onClick={() => openPopup(gif)}
            />
          </div>
        ))}
      </div>
      <div className="conextion-row" style={{ display: outThird }}>
        {gifsSecondRow.map((gif, index) => (
          <div className="image-container-conexion" key={index}>
            <img
              src={gif}
              alt={`GIF ${index + 1}`}
              className="conexion-images"
              //   onClick={() => openPopup(gif)}
            />
          </div>
        ))}
      </div>
      <div className="conextion-row" style={{ display: outThird }}>
        {gifsThirdRow.map((gif, index) => (
          <div className="image-container-conexion" key={index}>
            <img
              src={gif}
              alt={`GIF ${index + 1}`}
              className="conexion-images"
              //   onClick={() => openPopup(gif)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animaciones;
