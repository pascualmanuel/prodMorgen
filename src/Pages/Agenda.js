import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import SpikeButtonThree from "../Components/SpikeButtonThree";
import ComuBackDos from "../Assets/comunidad/frame.webp";
import Popup from "../Components/PopUp";
import Roadmap1 from "../Assets/fechas/roadmap1.png";
import Roadmap2 from "../Assets/fechas/roadmap2.png";
import Roadmap3 from "../Assets/fechas/roadmap3.png";
import Roadmap4 from "../Assets/fechas/roadmap4.png";
import Roadmap5 from "../Assets/fechas/roadmap5.png";
import Roadmap6 from "../Assets/fechas/roadmap6.png";
import Roadmap7 from "../Assets/fechas/roadmap7.png";
import Roadmap8 from "../Assets/fechas/roadmap8.png";
import Roadmap9 from "../Assets/fechas/roadmap9.png";
import Roadmap10 from "../Assets/fechas/roadmap10.png";
import Roadmap11 from "../Assets/fechas/roadmap11.png";
import Roadmap12 from "../Assets/fechas/roadmap12.png";
import Roadmap13 from "../Assets/fechas/roadmap13.png";
import Roadmap14 from "../Assets/fechas/roadmap14.png";
import "../Styles/App.css";
import { useLanguage } from "../Hooks/LanguageContext";

function Agenda() {
  const location = useLocation();
  const { userLanguage, translateText } = useLanguage();

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

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fechasAgenda = [
    {
      titulo: translateText("MORGENSTERN IS BORN", "NACIMIENTO DE MORGENSTERN"),
      fechas: translateText("MARCH 2021", "MARZO 2021"),
      descripcion: translateText(
        "Beginning of the series “Unstable Connection”, the main axis of the project. Digital compositions from the original drawing and first texts that define its universe.",
        "Comienzo de la primera serie: “Conexión inestable”, eje principal del proyecto. Composiciones digitales a partir del dibujo original y primeros textos que definen su universo."
      ),
      color: "#AE79EF",
      imagen: Roadmap1,
    },
    {
      titulo: translateText("MORGEN MULTIPLIES", "MORGEN SE MULTIPLICA"),
      fechas: translateText("APRIL 2021", "ABRIL 2021"),
      descripcion: translateText(
        "Beginning of the series “Unstable Connection”, the main axis of the project. Digital compositions from the original drawing and first texts that define its universe.",
        "Comienzo de la primera serie: “Conexión inestable”, eje principal del proyecto. Composiciones digitales a partir del dibujo original y primeros textos que definen su universo."
      ),
      color: "#7D9F00",
      imagen: Roadmap2,
    },
    {
      titulo: translateText("MORGEN UNFOLDS", "MORGEN EMPIEZA A RAMIFICARSE"),
      fechas: translateText("MARCH 2022", "MARZO 2022"),
      descripcion: translateText(
        "Morgenstern in new languages ​​and formats that include photomontages, paintings, prints, fanzines, among others.",
        "Morgenstern en nuevos lenguajes y formatos que incluyen fotomontajes, pinturas, estampas, fanzines, entre otros."
      ),
      color: "#4590E6",
      imagen: Roadmap3,
    },
    {
      titulo: translateText("MORGEN IN MOVEMENT", "MORGEN COBRA MOVIMIENTO"),
      fechas: translateText("MAY 2022", "MAYO 2022"),
      descripcion: translateText(
        "Creation of the first digital animations and interactive games.",
        "Creación de las primeras animaciones digitales y juegos interactivos."
      ),
      color: "#DC3349",
      imagen: Roadmap4,
    },
    {
      titulo: translateText("MORGEN WITHIN US", "MORGEN ENTRE NOSOTRXS"),
      fechas: translateText("SEPTEMBER 2022", "SEPTIEMBRE 2022"),
      descripcion: translateText(
        "Friends of Morgen share their photos where it is inserted, giving rise to the “Unperceived” series.",
        "Amigxs de Morgen comparten sus fotografías donde se inserta, dando origen a la serie “Inadvertido”."
      ),
      color: "#DFB000",
      imagen: Roadmap5,
    },

    {
      titulo: translateText("NAKED MORGEN", "MORGEN SE DESNUDA"),
      fechas: translateText("OCTOBER 2022", "OCTUBRE 2022"),
      descripcion: translateText(
        "“Nudies” Series, in Acrylic 21x29cm, 200 gr Paper.",
        "Serie “Desnudos”, en Acrílico 21x29cm, Papel 200 gr."
      ),
      color: "#AE79EF",
      imagen: Roadmap6,
    },
    {
      titulo: translateText("ANALOG MORGEN", "MORGEN ANALÓGICO"),
      fechas: translateText("DECEMBER 2022", "DICIEMBRE 2022"),
      descripcion: translateText(
        "First prints on paper with rubber stamps.",
        "Primeras estampas en papel con sellos de goma."
      ),
      color: "#7D9F00",
      imagen: Roadmap7,
    },
    {
      titulo: translateText(
        "MORGEN WINS MECENAZGO CULTURAL PRIZE",
        "MORGEN GANA MECENAZGO CULTURAL DEL GOBIERNO DE LA CIUDAD"
      ),
      fechas: translateText("JANUARY 2023", "ENERO 2023"),
      descripcion: translateText(
        "The project is selected by the “Mecenazgo Cultural” program of the Government of the City of Buenos Aires and the Banco Itaú Foundation chooses it to be its patron.",
        "El proyecto queda seleccionado por el programa Mecenazgo Cultural del Gobierno de la Ciudad de Buenos Aires y la Fundación Banco Itaú lo elige para ser su mecenas."
      ),
      color: "#4590E6",
      imagen: Roadmap8,
    },
    {
      titulo: translateText("MORGEN WORKSHOPS", "MORGENTALLERES"),
      fechas: translateText("MARCH 2023", "MARZO 2023"),
      descripcion: translateText(
        "The project participates in video game, art and programming, animation and comic workshops.",
        "El proyecto participa en talleres de videojuegos, arte y programación, animación e historieta."
      ),
      color: "#DC3349",
      imagen: Roadmap9,
    },
    {
      titulo: translateText(
        "MORGEN IN FLESH AND BONES.",
        "MORGEN EN CARNE Y HUESO"
      ),
      fechas: translateText("MAY 2023", "MAYO 2023"),
      descripcion: translateText(
        "First Morgenstern mask, made by Clara Dalmazzo.",
        "Primera máscara de Morgenstern, realizada por Clara Dalmazzo."
      ),
      color: "#DFB000",
      imagen: Roadmap10,
    },
    {
      titulo: translateText("MORGENWEB", "MORGENWEB"),
      fechas: translateText("JUNE 2023", "JUNIO 2023"),
      descripcion: translateText(
        "Creation of the project website, design and programming by Iñaki Recondo and Manuel Pascual.",
        "Creación del sitio web del proyecto, diseño y programación a cargo de Iñaki Recondo y Manuel Pascual."
      ),
      color: "#AE79EF",
      imagen: Roadmap11,
    },
    {
      titulo: translateText("MORGENSOUND", "MORGEN SONORO"),
      fechas: translateText("JULY 2023", "JULIO 2023"),
      descripcion: translateText(
        "Compositions by the sound artist and musician Hernán Kerlleñevich.",
        "Composiciones de la mano del artista sonoro y músico Hernán Kerlleñevich."
      ),
      color: "#7D9F00",
      imagen: Roadmap12,
    },
    {
      titulo: translateText(
        "MORGEN IS AWARDED THE FONDO METROPOLITANO DE LAS ARTES PRIZE.",
        "MORGEN GANA EL FONDO METROPOLITANO DE LAS ARTES - LÍNEA CREACIÓN"
      ),
      fechas: translateText("AUGUST 2023", "AGOSTO 2023"),
      descripcion: translateText(
        "The grant provides support for the creation of a “Material Scroll” device from the “Unstable Connection” series to be created together with the plastic artist Nicolás Castagna.",
        "La beca otorga un apoyo a la realización de un dispositivo de “Scroll físico” de la serie “Conexión Inestable” a realizar junto al artista plástico Nicolás Castagna."
      ),
      color: "#4590E6",
      imagen: Roadmap13,
    },
    {
      titulo: translateText("MORGEN STAMPED", "MORGEN SE ESTAMPA"),
      fechas: translateText("SEPTEMBER 2023", "SEPTIEMBRE 2023"),
      descripcion: translateText(
        "First screen prints on textiles, with the collaboration of Flor Kligman from “AHREmeritas”",
        "Primeras serigrafías sobre textiles, con la colaboración de Flor Kligman de “AHREmeritas”"
      ),
      color: "#DC3349",
      imagen: Roadmap14,
    },
    {
      titulo: translateText("MORGEN VJ", "MORGEN VJ"),
      fechas: translateText("DECEMBER 2023", "DICIEMBRE 2023"),
      descripcion: translateText(
        "Visual scenes developed by Manuel Fernández.",
        "Escenas visuales desarrolladas por Manuel Fernández."
      ),
      color: "#DC3349",
      imagen: Roadmap14,
      link: "https://vimeo.com/manage/videos/1022112801",
    },
    {
      titulo: translateText("MORGEN IN THE STREET", "MORGEN EN LA CALLE"),
      fechas: translateText("february 2024", "febrero 2024"),
      descripcion: translateText(
        "Painted posters displayed on the streets of Buenos Aires.",
        "Afiches pintados y colgados en las calles de la Ciudad de Buenos Aires."
      ),
      color: "#DC3349",
      imagen: Roadmap14,
      link: "https://www.instagram.com/stories/highlights/17908672565924445/",
    },

    {
      titulo: translateText("MORGEN POSTAL", "MORGEN POSTAL"),
      fechas: translateText("april 2024", "abril 2024"),
      descripcion: translateText(
        "“Unstable connection” series, a unique run of (handwritten) intervened postcards. Textured paper 350 gr. 20x15cm and 15x10cm.",
        "Serie “Conexión Inestable” en tirada única de postales intervenidas a mano. Papel texturado 350 gr. 20x15cm y 15x10cm."
      ),
      color: "#DC3349",
      imagen: Roadmap14,
    },

    {
      titulo: translateText("MORGEN SCROLL", "MORGEN SCROLL"),
      fechas: translateText("august 2024", "agosto 2024"),
      descripcion: translateText(
        "Interactive installation: Material scrolling of the “Unstable Connection” series, developed in collaboration with visual artist Nicolás Castagna, with the support of the Metropolitan Arts Fund.",
        "Instalación interactiva: Scrolleo físico de la serie “Conexión Inestable” realizado junto al artista plástico Nicolás Castagna, con el apoyo del Fondo Metropolitano de las Artes."
      ),
      color: "#DC3349",
      imagen: Roadmap14,
      link: "https://vimeo.com/1023411631?share=copy#t=0",
    },

    {
      titulo: translateText("MORGEN GUANAJUATO", "MORGEN GUANAJUATO"),
      fechas: translateText("january 2024", "enero 2024"),
      descripcion: translateText(
        "Presentation and Workshop: “Where is Morgenstern?”. The Faro Records & Strips, Presa 97 Cultural Center - Guanajuato, Mexico.",
        "Charla y Taller: “¿Dónde está Morgenstern?”. El Faro Records & Strips, Presa 97 Centro Cultura” - Guanajuato, México."
      ),
      color: "#DC3349",
      imagen: Roadmap14,
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
              <h2 className="fechas-titulo">
                {translateText("Roadmap", "Fechas")}
              </h2>
              <div onClick={openPopup} className="agenda-button pointer">
                <SpikeButtonThree />
              </div>
            </div>
          </div>
        </div>
        <div className="vw-complete-flex-left">
          <div className="right-agenda-cont">
            {isDesktop ? (
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
            ) : (
              <div className="timeline relative">
                {iFechasAgenda.map((fechaAgenda, index) => (
                  <>
                    <div className="entry">
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
                        <img
                          src={fechaAgenda.imagen}
                          height={200}
                          width={250}
                          style={{
                            // position: "absolute",
                            // left: "-140px",
                            zIndex: "100",
                            objectFit: "contain",
                          }}
                          className="absolute left-[-10px]"
                        />
                      </div>
                    </div>
                    <br />
                    <br />
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
    </>
  );
}
export default Agenda;
