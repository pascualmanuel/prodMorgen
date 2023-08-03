import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import MorAzul from "../Assets/interactivo/particles/mor-azul2.png";
import MorLila from "../Assets/interactivo/particles/mor-lila2.png";
import MorMaiz from "../Assets/interactivo/particles/mor-maiz2.png";
import MorRojo from "../Assets/interactivo/particles/mor-rojo2.png";
import Mormor from "../Assets/interactivo/particles/prueba2.png";
const MatterJSDemo = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const textures = [MorAzul, MorLila, MorMaiz, MorRojo];
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    document.body.classList.add("no-scroll-interactivo");

    return () => {
      document.body.classList.remove("no-scroll-interactivo");
    };
  }, []);

  const createObject = () => {
    const getRandomAngle = () => {
      const angles = [-45, , -10, 45];
      const randomIndex = Math.floor(Math.random() * angles.length);
      return angles[randomIndex];
    };

    const { Bodies, Composite } = Matter;
    const x = Math.random() * (window.innerWidth - 80) + 40;
    // const angleInDegrees = -45 || 0 || 45; //Math.random() * 140; // Generate a random angle between 0 and 140 degrees
    const angleInDegrees = getRandomAngle();

    const angleInRadians = (angleInDegrees * Math.PI) / 180; // Convert the angle from degrees to radians
    console.log(angleInDegrees);

    let widthBody = 80;
    let heightBody = 230;
    let xBodyScale = 0.7;
    let yBodyScale = 0.7;

    if (window.innerWidth < 720) {
      widthBody = 40;
      heightBody = 115;
      xBodyScale = 0.3;
      yBodyScale = 0.3;
    }
    const box = Bodies.rectangle(x, 0, widthBody, heightBody, {
      angle: angleInRadians, // Set the initial angle of the body
      render: {
        sprite: {
          texture: textures[Math.floor(Math.random() * textures.length)],
          xScale: xBodyScale,
          yScale: yBodyScale,
        },
      },
    });
    Composite.add(engineRef.current.world, box);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    // create an engine
    const engine = Engine.create();
    engineRef.current = engine; // Store the engine in a ref for access in createObject

    // create a renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        background: "transparent",
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight - 50,
        pixelRatio: "auto",
        textureFilter: "linear", // or 'nearest'
        pixelRatio: 2, // or 3
      },
    });

    // create ground

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 5,
      window.innerWidth,
      180, // Height for transparent border
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
        },
      }
    );

    const leftWall = Bodies.rectangle(
      0,
      window.innerHeight / 2,
      20,
      window.innerHeight,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
        },
      }
    );

    const rightWall = Bodies.rectangle(
      window.innerWidth,
      window.innerHeight / 2,
      30,
      window.innerHeight,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
        },
      }
    );
    // console.log(window.innerHeight - 50, "ja");

    // add all of the bodies to the world
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    // Clean up function to stop the Matter.js engine and render when the component unmounts
    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  const addButtonClickHandler = () => {
    createObject();
  };

  return (
    <div className="falling-cont">
      <div className="falling-text-cont">
        <h4 style={{ userSelect: "none" }} className="title-falling">
          <span style={{ textDecoration: "line-through" }}>No</span> hay lugar{" "}
          <br className="out" />
          para un otro
        </h4>
        <h3 onClick={addButtonClickHandler} className="falling-button pointer">
          Sumar otro
        </h3>
      </div>
      <canvas ref={canvasRef} className="canvas-class" id="canvas-target" />
    </div>
  );
};

export default MatterJSDemo;
