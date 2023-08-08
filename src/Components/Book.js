import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import InaImg1 from "../Assets/obras/hablamorgen/habla-mor-1.png";
import InaImg2 from "../Assets/obras/hablamorgen/habla-mor-2.png";
import InaImg3 from "../Assets/obras/hablamorgen/habla-mor-3.png";
import InaImg4 from "../Assets/obras/hablamorgen/habla-mor-4.png";
import InaImg5 from "../Assets/obras/hablamorgen/habla-mor-5.png";
import InaImg6 from "../Assets/obras/hablamorgen/habla-mor-6.png";
import InaImg7 from "../Assets/obras/hablamorgen/habla-mor-7.png";
import InaImg8 from "../Assets/obras/hablamorgen/habla-mor-8.png";
import InaImg9 from "../Assets/obras/hablamorgen/habla-mor-9.png";
import InaImg10 from "../Assets/obras/hablamorgen/habla-mor-10.png";
import InaImg11 from "../Assets/obras/hablamorgen/habla-mor-11.png";
import InaImg12 from "../Assets/obras/hablamorgen/habla-mor-12.png";
import InaImg13 from "../Assets/obras/hablamorgen/habla-mor-13.png";
import InaImg14 from "../Assets/obras/hablamorgen/habla-mor-14.png";
import InaImg15 from "../Assets/obras/hablamorgen/habla-mor-15.png";
import InaImg16 from "../Assets/obras/hablamorgen/habla-mor-16.png";
import InaImg17 from "../Assets/obras/hablamorgen/habla-mor-17.png";
import InaImg18 from "../Assets/obras/hablamorgen/habla-mor-18.png";
import NextIcon from "../Assets/obras/hablamorgen/next-icon.svg";
import PrevIcon from "../Assets/obras/hablamorgen/prev-icon.svg";
import "../Styles/App.css";

import HTMLFlipBook from "react-pageflip";

const Book = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const location = useLocation();
  const { pathname } = window.location;

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

  const images = [
    InaImg1,
    InaImg2,
    InaImg3,
    InaImg4,
    InaImg5,
    InaImg6,
    InaImg7,
    InaImg8,
    InaImg9,
    InaImg10,
    InaImg11,
    InaImg12,
    InaImg13,
    InaImg14,
    InaImg15,
    InaImg16,
    InaImg17,
    InaImg18,
  ];

  const flipBookRef = useRef(null);

  const handleNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const handlePreviousPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  let bookWidth = 450;
  let bookHeight = 630;
  let Out = "";
  let In = "none";

  let onePage = false;

  if (window.innerWidth < 1420) {
    bookHeight -= (bookHeight * 10) / 100;
    bookWidth -= (bookWidth * 10) / 100;
  }

  if (window.innerWidth < 1325) {
    bookHeight -= (bookHeight * 15) / 100;
    bookWidth -= (bookWidth * 15) / 100;
    Out = "none";
    In = "inherit";
  }

  if (window.innerWidth < 1145) {
    bookHeight -= (bookHeight * 20) / 100;
    bookWidth -= (bookWidth * 20) / 100;
    Out = "none";
    In = "inherit";
  }

  if (window.innerWidth < 720) {
    bookHeight -= (bookHeight * 0.1) / 100;
    bookWidth -= (bookWidth * 0.1) / 100;
    Out = "none";
    onePage = true;
    In = "inherit";
  }

  // if (window.innerHeight < 760) {
  //   console.log("chau!!!");
  // }
  return (
    <>
      <div className="book-container">
        <img
          width={30}
          src={PrevIcon}
          onClick={handlePreviousPage}
          style={{ marginRight: 10, display: Out }}
        />
        <HTMLFlipBook
          width={bookWidth}
          height={bookHeight}
          size={"fixed"}
          className="htmlFlip"
          showCover={false}
          usePortrait={onePage}
          ref={flipBookRef}
          renderOnlyPageLengthChange={true}
        >
          {images.map((image, index) => (
            <div className={`demoPage${index}`} key={index}>
              <img src={image} width={bookWidth - 10} height={bookHeight} />
            </div>
          ))}
        </HTMLFlipBook>
        <img
          width={30}
          src={NextIcon}
          onClick={handleNextPage}
          style={{ display: Out }}
        />

        <div
          className="controls-style"
          style={{ marginBottom: "30px", display: In, zIndex: "1000" }}
        >
          <img
            width={30}
            src={PrevIcon}
            onClick={handlePreviousPage}
            style={{ marginRight: 30 }}
          />

          <img width={30} src={NextIcon} onClick={handleNextPage} style={{}} />
        </div>
      </div>
    </>
  );
};

export default Book;
