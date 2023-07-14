import React, { useState, useEffect, useRef } from "react";
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

  return (
    <>
      <div className="book-container">
        <img
          width={30}
          src={PrevIcon}
          onClick={handlePreviousPage}
          style={{ marginRight: 10 }}
        />
        <HTMLFlipBook
          width={450}
          height={630}
          size={"fixed"}
          className="htmlFlip"
          showCover={false}
          usePortrait={false}
          ref={flipBookRef}
        >
          {images.map((image, index) => (
            <div className={`demoPage${index}`} key={index}>
              <img src={image} width={440} height={630} />
            </div>
          ))}
        </HTMLFlipBook>

        <img width={30} src={NextIcon} onClick={handleNextPage} />
      </div>
    </>
  );
};

export default Book;
