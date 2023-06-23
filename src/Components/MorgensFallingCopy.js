import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import MorAzul from "../Assets/interactivo/particles/mor-azul2.png";
import MorLila from "../Assets/interactivo/particles/mor-lila2.png";
import MorMaiz from "../Assets/interactivo/particles/mor-maiz2.png";
import MorRojo from "../Assets/interactivo/particles/mor-rojo2.png";
import Sonic1 from "../Assets/sonic/sonic1.png";
import Sonic2 from "../Assets/sonic/sonic2.png";
import Sonic3 from "../Assets/sonic/sonic3.png";
import Sonic4 from "../Assets/sonic/sonic4.png";
import Sonic5 from "../Assets/sonic/sonic5.png";

const MorgensFallingCopy = () => {
  const canvasRef = useRef(null);

  // const textures = [Sonic1, Sonic2, Sonic3, Sonic4, Sonic5];

  const textures = [MorAzul, MorLila, MorMaiz, MorRojo];

  useEffect(() => {
    const canvas = canvasRef.current;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    const { Engine, Render, Runner, World, Bodies } = Matter;

    const engine = Engine.create();
    const runner = Runner.create();

    const createBall = () => {
      const ball = Bodies.circle(Math.round(Math.random() * w), -30, 15, {
        angle: Math.PI * (Math.random() * 2 - 1),
        friction: 0.001,
        frictionAir: 0.01,
        restitution: 0.8, //rebote?
        render: {
          sprite: {
            texture: textures[Math.floor(Math.random() * textures.length)],
            xScale: 0.7, // Adjust the width scale of the image (0.5 means 50% of the original size)
            yScale: 0.7, // Adjust the height scale of the image (0.5 means 50% of the original size)
          },
        },
      });

      // setTimeout(() => {
      //   World.remove(engine.world, ball);
      // }, 5000);

      return ball;
    };

    const handleClick = () => {
      const ball2 = createBall();
      World.add(engine.world, [ball2]);
    };

    const button = document.querySelector("#mayhem");
    button.addEventListener("click", handleClick);

    const boundaryOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    };

    const ground = Bodies.rectangle(800, h - 10, w, 8, boundaryOptions);
    // const ground = Bodies.rectangle(800, h + 200, w, 4, boundaryOptions);

    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 1500,
        height: 680,
        wireframes: false,
        background: "transparent", // or '#ff0000' or other valid color string
      },
    });

    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    };

    const leftWall = Bodies.rectangle(0, h / 2, 1, h, wallOptions);
    const rightWall = Bodies.rectangle(w, h / 2, 1, h, wallOptions);

    World.add(engine.world, [ground, leftWall, rightWall]);

    Render.run(render);
    Runner.run(runner, engine);

    World.add(engine.world, [ground]);

    // Clean up event listener on component unmount
    return () => {
      button.removeEventListener("click", handleClick);
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight - 80}
      />
      <button
        id="mayhem"
        style={{ position: "absolute", top: "300px", left: " 100px" }}
      >
        Drop Image
      </button>
    </div>
  );
};

export default MorgensFallingCopy;
