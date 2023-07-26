import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import InaImg1 from "../Assets/obras/hablamorgen/hablamorgen-1.jpg";
import InaImg2 from "../Assets/obras/hablamorgen/hablamorgen-2.png";
import InaImg3 from "../Assets/obras/hablamorgen/hablamorgen-3.png";
import InaImg4 from "../Assets/obras/hablamorgen/hablamorgen-4.jpg";
import InaImg5 from "../Assets/obras/hablamorgen/hablamorgen-5.jpg";
import InaImg6 from "../Assets/obras/hablamorgen/hablamorgen-6.jpg";
import InaImg7 from "../Assets/obras/hablamorgen/hablamorgen-7.jpg";
import InaImg8 from "../Assets/obras/hablamorgen/hablamorgen-8.jpg";
import InaImg9 from "../Assets/obras/hablamorgen/hablamorgen-9.png";
import InaImg10 from "../Assets/obras/hablamorgen/hablamorgen-10.jpg";
import InaImg11 from "../Assets/obras/hablamorgen/hablamorgen-11.jpg";
import InaImg12 from "../Assets/obras/hablamorgen/hablamorgen-12.png";
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

  let onePage = false;

  if (window.innerWidth < 1420) {
    bookHeight -= (bookHeight * 10) / 100;
    bookWidth -= (bookWidth * 10) / 100;
  }

  if (window.innerWidth < 1325) {
    bookHeight -= (bookHeight * 15) / 100;
    bookWidth -= (bookWidth * 15) / 100;
    Out = "none";
  }

  if (window.innerWidth < 1145) {
    bookHeight -= (bookHeight * 20) / 100;
    bookWidth -= (bookWidth * 20) / 100;
    Out = "none";
  }

  if (window.innerWidth < 720) {
    bookHeight -= (bookHeight * 0.1) / 100;
    bookWidth -= (bookWidth * 0.1) / 100;
    Out = "none";
    onePage = true;
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
      </div>
    </>
  );
};

export default Book;
