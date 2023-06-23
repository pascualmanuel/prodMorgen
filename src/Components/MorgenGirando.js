import React, { useEffect, useRef } from "react";
import Personita from "../Assets/morgen-trans.png";
import "../Styles/App.css";
const MorgenGirando = () => {
  const personRef = useRef(null);

  const angleBetweenPoints = (x1, y1, x2, y2) => {
    return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  };

  const handleMouseMove = (event) => {
    const rect = personRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle =
      angleBetweenPoints(centerX, centerY, event.clientX, event.clientY) + 90;

    personRef.current.style.transformOrigin = "center center";
    personRef.current.style.transform = `rotate(${angle}deg)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div id="full-screen">
        <img
          ref={personRef}
          id="person"
          src={Personita}
          alt="Person"
          width="130px"
        />
      </div>
    </div>
  );
};

export default MorgenGirando;
