import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import SpikeButtonThree from "../Components/SpikeButtonThree";
import ComuBackDos from "../Assets/comunidad/frame.webp";
import Popup from "../Components/PopUp";
// import Fechas1 from "../Assets/fechas/fechas-1.png";
import Fechas2 from "../Assets/fechas/fechas-2.png";
import Fechas3 from "../Assets/fechas/fechas-3.png";
import Fechas4 from "../Assets/fechas/fechas-4.png";
import Fechas5 from "../Assets/fechas/fechas-5.png";
import Fechas6 from "../Assets/fechas/fechas-6.png";
import Fechas7 from "../Assets/fechas/fechas-7.png";
import Fechas8 from "../Assets/fechas/fechas-8.png";
import Fechas9 from "../Assets/fechas/fechas-9.png";
import Fechas10 from "../Assets/fechas/fechas-10.png";
import Fechas11 from "../Assets/fechas/fechas-11.png";
import Fechas12 from "../Assets/fechas/fechas-12.png";
import Fechas13 from "../Assets/fechas/fechas-13.png";
import FechasWeb from "../Assets/fechas/fechas-web.png";
import "../Styles/App.css";

function Agenda() {
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);

  const comStyle = {
    backgroundImage: `url(${ComuBackDos})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fechasAgenda = [
    {
      titulo: "NACIMIENTO DE MORGENSTERN",
      fechas: "MARZO 2021",
      descripcion:
        "Primera aparición del dibujo de Morgenstern en un cuaderno.",
      color: "#AE79EF",
      // imagen: Fechas1,
    },
    {
      titulo: "MORGEN SE MULTIPLICA",
      fechas: "ABRIL 2021",
      descripcion:
        "Comienzo de la primera serie: “Conexión inestable”, eje principal del proyecto. Composiciones digitales a partir del dibujo original y primeros textos que definen su universo.",
      color: "#7D9F00",
      imagen: Fechas2,
    },
    {
      titulo: "MORGEN EMPIEZA A RAMIFICARSE",
      fechas: "MARZO 2022",
      descripcion:
        "Morgenstern en nuevos lenguajes y formatos que incluyen fotomontajes, pinturas, estampas, fanzines, entre otros.",
      color: "#4590E6",
      imagen: Fechas3,
    },
    {
      titulo: "MORGEN COBRA MOVIMIENTO",
      fechas: "MAYO 2022",
      descripcion:
        "Creación de las primeras animaciones digitales y juegos interactivos.",
      color: "#DC3349",
      imagen: Fechas4,
    },
    {
      titulo: "MORGEN ENTRE NOSOTRXS",
      fechas: "SEPTIEMBRE 2022",
      descripcion:
        "Amigxs de Morgen comparten sus fotografías donde se inserta, dando origen a la serie “Inadvertido”.",
      color: "#DFB000",
      imagen: Fechas5,
    },
    {
      titulo: "MORGEN SE DESNUDA",
      fechas: "OCTUBRE 2022",
      descripcion: "Serie “Desnudos”, en Acrílico 21x29cm, Papel 200 gr.",
      color: "#AE79EF",
      imagen: Fechas6,
    },
    {
      titulo: "MORGEN ANALÓGICO",
      fechas: "DICIEMBRE 2022",
      descripcion: "Primeras estampas en papel con sellos de goma.",
      color: "#7D9F00",
      imagen: Fechas7,
    },
    {
      titulo: "MORGEN GANA MECENAZGO CULTURAL DEL GOBIERNO DE LA CIUDAD",
      fechas: "ENERO 2023",
      descripcion:
        "El proyecto queda seleccionado por el programa Mecenazgo Cultural del Gobierno de la Ciudad de Buenos Aires y la Fundación Banco Itaú lo elige para ser su mecenas.",
      color: "#4590E6",
      imagen: Fechas8,
    },
    {
      titulo: "MORGENTALLERES",
      fechas: "MARZO 2023",
      descripcion:
        "El proyecto participa en talleres de videojuegos, arte y programación, animación e historieta. ",
      color: "#DC3349",
      imagen: Fechas9,
    },
    {
      titulo: "MORGEN EN CARNE Y HUESO",
      fechas: "MAYO 2023",
      descripcion:
        "Primera máscara de Morgenstern, realizada por Clara Dalmazzo.",
      color: "#DFB000",
      imagen: Fechas10,
    },
    {
      titulo: "MORGENWEB",
      fechas: "JUNIO 2023",
      descripcion:
        "Creación del sitio web del proyecto, diseño y programación a cargo de Iñaki Recondo y Manuel Pascual.",
      color: "#AE79EF",
      imagen: FechasWeb,
    },
    {
      titulo: "MORGEN SONORO",
      fechas: "JULIO 2023",
      descripcion:
        "Composiciones de la mano del artista sonoro y músico Hernán Kerlleñevich.",
      color: "#7D9F00",
      imagen: Fechas11,
    },
    {
      titulo:
        "MORGEN GANA EL FONDO METROPOLITANO DE LAS ARTES - LÍNEA CREACIÓN",
      fechas: "AGOSTO 2023",
      descripcion:
        "La beca otorga un apoyo a la realización de un dispositivo de “Scroll físico” de la serie “Conexión Inestable” a realizar junto al artista plástico Nicolás Castagna.",
      color: "#4590E6",
      imagen: Fechas12,
    },
    {
      titulo: "MORGEN SE ESTAMPA",
      fechas: "SEPTIEMBRE 2023",
      descripcion:
        "Primeras serigrafías sobre textiles, con la colaboración de Flor Kligman de “AHREmeritas”",
      color: "#DC3349",
      imagen: Fechas13,
    },
  ];

  const iFechasAgenda = fechasAgenda.reverse();

  const [hoveredEntry, setHoveredEntry] = useState(null);

  return (
    <>
      <div className="agenda-container">
        <div className="agenda-fixed-absolute">
          <div className="left-agenda-cont">
            <div className="relative">
              <h2 className="fechas-titulo">Fechas</h2>
              <div onClick={openPopup} className="agenda-button pointer">
                <SpikeButtonThree />
              </div>
            </div>
          </div>
        </div>
        <div className="vw-complete-flex-left">
          <div className="right-agenda-cont">
            <div className="timeline relative">
              {iFechasAgenda.map((fechaAgenda, index) => (
                <>
                  <div
                    className="entry"
                    key={index}
                    onMouseEnter={() => setHoveredEntry(index)}
                    onMouseLeave={() => setHoveredEntry(index)}
                  >
                    {hoveredEntry === index && (
                      <img
                        src={fechaAgenda.imagen}
                        height={200}
                        width={250}
                        style={{
                          position: "absolute",
                          left: "-140px",
                          zIndex: "100",
                          objectFit: "contain",
                        }}
                        className="absolute left-[-10px]"
                      />
                    )}
                    <div className="core">
                      <h3
                        style={{
                          fontSize: "16px",
                          fontFamily: "light",
                          marginBottom: 10,
                          color: fechaAgenda.color,
                        }}
                      >
                        {fechaAgenda.fechas}
                      </h3>
                      <p
                        className="title-fechas-pag"
                        style={{
                          color: fechaAgenda.color,
                          fontFamily: "Medium",
                        }}
                      >
                        {fechaAgenda.titulo}
                      </p>
                      <p
                        className="fecha-desc"
                        style={{ color: fechaAgenda.color }}
                      >
                        {fechaAgenda.descripcion}
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
    </>
  );
}
export default Agenda;
