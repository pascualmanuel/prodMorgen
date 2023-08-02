// import "../Styles/Styles.css";
import "../Styles/App.css";
import Particles from "react-tsparticles";
import Sonic from "../Assets/sonic.png";
import Stich from "../Assets/stich.webp";
import Morgen from "../Assets/MORGEN_NEGRO.png";
import { loadFull } from "tsparticles";
import MorAzul from "../Assets/interactivo/particles/mor-azul2.png";
import MorLila from "../Assets/interactivo/particles/mor-lila2.png";
import MorMaiz from "../Assets/interactivo/particles/mor-maiz2.png";
import MorRojo from "../Assets/interactivo/particles/mor-rojo2.png";
import { useEffect } from "react";
function Bueno() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  useEffect(() => {
    document.body.classList.add("no-scroll-interactivo");

    return () => {
      document.body.classList.remove("no-scroll-interactivo");
    };
  }, []);


  const morgensImage = [
    { src: MorAzul, height: 33, width: 10 },
    { src: MorLila, height: 33, width: 10 },
    { src: MorMaiz, height: 33, width: 10 },
    { src: MorRojo, height: 33, width: 10 },
  ];

  return (
    <div className="particles-cont">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 300,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },

              image: morgensImage.map((image) => ({
                src: image.src,
                height: image.height,
                width: image.width,
              })),
            },
            // opacity: {
            //   value: 1,
            //   random: false,
            //   anim: {
            //     enable: false,
            //     speed: 1,
            //     opacity_min: 0.1,
            //     sync: false,
            //   },
            // },
            size: {
              value: 30,
              random: false,
              // anim: {
              //   enable: false,
              //   speed: 40,
              //   size_min: 0.1,
              //   sync: false,
              // },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3, //speed of morgensterns
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
              top: {
                enable: true,
                out_mode: "bounce",
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 3,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}
export default Bueno;
