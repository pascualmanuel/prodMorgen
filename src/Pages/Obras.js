import React from "react";
import Accordion from "../Components/Accordion";
import Gallery from "../Components/Gallery";

const Obras = () => {
  const accordionItems = [
    {
      title: "Tab 1",
      content: (
        <>
          <Gallery />
        </>
      ),
      color: "#005DA2", // Specify the color for Tab 1
    },
    {
      title: "Tab 2",
      content: (
        <>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "yellow" }}
          ></div>
        </>
      ),
      color: "#4590E6", // Specify the color for Tab 1
    },
    {
      title: "Tab 3",
      content: (
        <>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "ablique",
            }}
          ></div>
        </>
      ),
      color: "#7D9F00", // Specify the color for Tab 1
    },
    {
      title: "Tab 4",
      content: (
        <>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "cream" }}
          ></div>
        </>
      ),
      color: "#AE79EF", // Specify the color for Tab 1
    },
    {
      title: "Tab 5",
      content: (
        <>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "cream" }}
          ></div>
        </>
      ),
      color: "#DCCB00", // Specify the color for Tab 1
    },
    {
      title: "Tab 6",
      content: (
        <>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "yellow" }}
          ></div>
        </>
      ),
      color: "#FE6970", // Specify the color for Tab 1
    },
    {
      title: "Tab 7",
      content: (
        <>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "red" }}
          ></div>
        </>
      ),
      color: "#FF3910", // Specify the color for Tab 1
    },
  ];

  return (
    <div className="obras-container">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default Obras;
