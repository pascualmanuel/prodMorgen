import React, { useRef, useState, useEffect } from "react";
import BlackMorgen from "../Assets/interactivo/morg-linea.png";
import Sticker1 from "../Assets/interactivo/morgenPush/sf1.png";
import Sticker2 from "../Assets/interactivo/morgenPush/sf2.png";
import Sticker3 from "../Assets/interactivo/morgenPush/sf3.png";
import Sticker4 from "../Assets/interactivo/morgenPush/sf4.png";
import Sticker5 from "../Assets/interactivo/morgenPush/sf5.png";
import Sticker6 from "../Assets/interactivo/morgenPush/sf6.png";
import Sticker7 from "../Assets/interactivo/morgenPush/sf7.png";
import Sticker8 from "../Assets/interactivo/morgenPush/sf8.png";
import Sticker9 from "../Assets/interactivo/morgenPush/sf9.png";
import Sticker10 from "../Assets/interactivo/morgenPush/sf10.png";
import Sticker11 from "../Assets/interactivo/morgenPush/sf11.png";
import Sticker12 from "../Assets/interactivo/morgenPush/sf12.png";
import Sticker13 from "../Assets/interactivo/morgenPush/sf13.png";
import Sticker14 from "../Assets/interactivo/morgenPush/sf14.png";
import Sticker15 from "../Assets/interactivo/morgenPush/sf15.png";
import Sticker16 from "../Assets/interactivo/morgenPush/sf16.png";
import Sticker17 from "../Assets/interactivo/morgenPush/sf17.png";
import Sticker18 from "../Assets/interactivo/morgenPush/sf19.png";
import Sticker19 from "../Assets/interactivo/morgenPush/sf18.png";
import Sticker20 from "../Assets/interactivo/morgenPush/sf20.png";
import Sticker21 from "../Assets/interactivo/morgenPush/sf21.png";
import Sticker22 from "../Assets/interactivo/morgenPush/sf22.png";
import Sticker23 from "../Assets/interactivo/morgenPush/sf23.png";
import Sticker24 from "../Assets/interactivo/morgenPush/sf24.png";
import Sticker25 from "../Assets/interactivo/morgenPush/sf25.png";
import Sticker26 from "../Assets/interactivo/morgenPush/sf26.png";
import Sticker27 from "../Assets/interactivo/morgenPush/sf27.png";
import Sticker28 from "../Assets/interactivo/morgenPush/sf28.png";
import Sticker29 from "../Assets/interactivo/morgenPush/sf29.png";
import Sticker30 from "../Assets/interactivo/morgenPush/sf30.png";

import CircleScreenshot from "../Assets/screenshot-circle.png";
import ShareCircle from "../Assets/svg/share-button.svg";

import Sound1 from "../Assets/sounds/Sound1.mp3";
import Sound2 from "../Assets/sounds/Sound2.mp3";
import Sound3 from "../Assets/sounds/Sound3.mp3";
import Sound4 from "../Assets/sounds/Sound4.mp3";
import Sound5 from "../Assets/sounds/Sound5.mp3";
import Sound6 from "../Assets/sounds/Sound6.mp3";
import html2canvas from "html2canvas";

const PushMorgen = () => {
  const [stickers, setStickers] = useState([]);
  const [playCount, setPlayCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageCircle, setImageCircle] = useState(CircleScreenshot);

  const changeImage = () => {
    // Change the image source based on the current state
    setImageCircle(ShareCircle);
  };

  const revertImage = () => {
    // Revert the image source back to the original one
    setImageCircle(CircleScreenshot);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      console.log("first");
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    // Clear stickers array on window resize
    setStickers([]);
  }, [windowWidth]);

  const canvasRef = useRef(null);

  const handleClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    console.log("Clicked coordinates:", offsetX, offsetY);

    const availableSounds = [Sound1, Sound2, Sound3, Sound4, Sound5, Sound6];

    // Play a sound based on the playCount
    const soundIndex = playCount % availableSounds.length;
    const sound = new Audio(availableSounds[soundIndex]);
    sound.play();

    // Update the playCount
    setPlayCount((prevCount) => prevCount + 1);

    // Add a new sticker to the array
    const stickerImages = [
      Sticker1,
      Sticker2,
      Sticker3,
      Sticker4,
      Sticker6,
      Sticker5,
      Sticker7,
      Sticker8,
      Sticker9,
      Sticker10,
      Sticker11,
      Sticker12,
      Sticker13,
      Sticker14,
      Sticker15,
      Sticker16,
      Sticker17,
      Sticker18,
      Sticker19,
      Sticker20,
      Sticker21,
      Sticker22,
      Sticker23,
      Sticker24,
      Sticker25,
      Sticker26,
      Sticker27,
      Sticker28,
      Sticker29,
      Sticker30,
    ];
    const randomIndex = Math.floor(Math.random() * stickerImages.length);
    const newSticker = stickerImages[randomIndex];

    // Get the position of the container element
    const containerElement = event.currentTarget;
    const containerRect = containerElement.getBoundingClientRect();
    const containerOffsetTop = window.pageYOffset + containerRect.top;

    // Calculate the sticker position relative to the container
    const stickerLeft = offsetX + containerRect.left;
    const stickerTop = offsetY + containerOffsetTop;

    // Create a new sticker element with adjusted position
    const stickerElement = {
      src: newSticker,
      left: stickerLeft - 35 + "px",
      top: stickerTop + -35 + "px",
    };

    setStickers([...stickers, stickerElement]);
  };
  const polygonPoints =
    "128,6,152,4,172,6,188,10,195,26,200,40,204,62,201,76,211,95,226,119,211,124,206,153,208,178,240,187,264,203,275,216,288,243,292,273,299,306,304,333,301,377,306,392,315,413,323,434,326,466,325,491,325,517,315,549,303,560,298,595,92,596,94,540,90,497,51,488,21,476,3,455,4,430,17,386,7,317,6,287,15,236,61,202,82,184,78,160,77,143,85,106,76,84,77,55,83,33,97,16,111,13,122,13";

  // const handleScreenshot = () => {
  //   // Capture the screenshot of the entire document
  //   html2canvas(document.documentElement).then((canvas) => {
  //     // Convert the canvas to an image
  //     const screenshotData = canvas.toDataURL();

  //     // Create a link element to download the screenshot
  //     const link = document.createElement("a");
  //     link.href = screenshotData;
  //     link.download = "screenshot.png";

  //     // Trigger the download
  //     link.click();
  //   });
  // };

  const handleScreenshot = () => {
    // Capture the screenshot of the entire document
    html2canvas(document.documentElement).then((canvas) => {
      // Convert the canvas to an image
      const screenshotData = canvas.toDataURL();

      // Create a link element to download the screenshot
      const link = document.createElement("a");
      link.href = screenshotData;
      link.download = "screenshot.png";

      // Trigger the download
      link.click();
    });
  };

  let morgenPushWidth = 330;

  let tuClickLlena = {
    marginBottom: "406px",
    marginLeft: "380px",
    fontFamily: "SemiBold",
    userSelect: "none",
    color: "white",
  };

  if (window.innerWidth < 720) {
    tuClickLlena = {
      marginBottom: "406px",
      marginLeft: "260px",
      fontFamily: "SemiBold",
      userSelect: "none",
      color: "white",
    };
    morgenPushWidth = 290;
  }
  if (window.innerHeight < 660) {
    tuClickLlena = {
      marginBottom: "230px",
      marginLeft: "220px",
      fontFamily: "SemiBold",
      userSelect: "none",
      color: "white",
    };
    morgenPushWidth = 230;
  }
  return (
    <>
      <div className="container-push">
        <div className="cont-push-morgen">
          <img
            src={BlackMorgen}
            width={morgenPushWidth}
            alt="Black Morgen"
            useMap="#imageMap"
            style={{ userSelect: "none" }}
          />
        </div>
        <map name="imageMap">
          <area shape="poly" coords={polygonPoints} onClick={handleClick} />
        </map>
        {stickers.map((sticker, index) => (
          <img
            key={index}
            src={sticker.src}
            width={100}
            alt="Sticker"
            style={{
              position: "absolute",
              left: sticker.left,
              top: sticker.top,
              pointerEvents: "none",
              zIndex: "20",
              userSelect: "none",
            }}
            onClick={handleClick}
          />
        ))}
        <div style={{ position: "absolute", zIndex: "5" }}>
          <p style={tuClickLlena}>tu click me llena</p>
        </div>
        <img
          src={imageCircle}
          width={110}
          style={{
            position: "absolute",
            right: "200px",
            zIndex: "500",
            userSelect: "none",
          }}
          onClick={handleScreenshot}
          onMouseEnter={changeImage}
          onMouseLeave={revertImage}
          className="circle-screen"
        />
      </div>
    </>
  );
};

export default PushMorgen;
