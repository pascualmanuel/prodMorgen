import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import PerroMorgen from "../Assets/perro-morgen.png";
import SpikeButtonThree from "../Components/SpikeButtonThree";
import ComuBackDos from "../Assets/comunidad/frame.webp";
import Popup from "../Components/PopUp";

function Agenda() {
  const [showPopup, setShowPopup] = useState(false);

  const comStyle = {
    backgroundImage: `url(${ComuBackDos})`,

    backgroundRepeat: " no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
  };

  console.log(showPopup);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fechasAgenda = [
    {
      fechas: "25/09/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "yellow",
    },
    {
      fechas: "02/10/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "black",
    },
    {
      fechas: "28/10/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "pink",
    },
    {
      fechas: "17/11/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "blue",
    },
    {
      fechas: "15/12/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "red",
    },
    {
      fechas: "15/12/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "yellow",
    },
    {
      fechas: "15/12/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "yellow",
    },
    {
      fechas: "15/12/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "yellow",
    },
    {
      fechas: "15/12/2023",
      descripcion: "Intervención de mural en plaza serrano",
      color: "yellow",
    },
  ];

  return (
    <>
      <div className="agenda-container">
        <div className="left-agenda-cont">
          {/* <img src={PerroMorgen} width={450} style={{ marginLeft: 70 }} /> */}
          <h2 style={{ fontSize: 90, marginLeft: 150 }}>Agenda</h2>
          <div onClick={openPopup} className="agenda-button">
            <SpikeButtonThree />
          </div>
        </div>
        <div className="right-agenda-cont">
          <div className="timeline">
            {fechasAgenda.map((fechaAgenda) => (
              <>
                <div className="entry">
                  <div className="core">
                    <h3
                      style={{
                        fontSize: "38px",
                        fontFamily: "light",
                        marginBottom: 10,
                        color: fechaAgenda.color,
                      }}
                    >
                      {fechaAgenda.fechas}
                    </h3>
                    <p style={{ color: fechaAgenda.color }}>
                      {fechaAgenda.descripcion}
                    </p>
                  </div>
                </div>
                <br />
                <br />
              </>
            ))}
          </div>

          {/* <div className="entry">
            <div className="core">
              <h3>2005</h3>
              Information 3
            </div>
            <br />
            <br />
            <div className="entry">
              <div className="core">
                <h3>2010</h3>
                Information 2
              </div>
            </div>
            <br />
            <br />
            <div className="entry">
              <div className="core">
                <h3>2010</h3>
                Information 3
              </div>
            </div>
          </div>*/}
        </div>
      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
    </>
  );
}
export default Agenda;
