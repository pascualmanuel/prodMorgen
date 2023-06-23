import React, { useState, useEffect, useRef } from "react";
import MorAzul from "../Assets/interactivo/particles/mor-azul2.png";
import MorLila from "../Assets/interactivo/particles/mor-lila2.png";
import MorMaiz from "../Assets/interactivo/particles/mor-maiz2.png";
import MorRojo from "../Assets/interactivo/particles/mor-rojo2.png";

const MorgensFalling = () => {
  const canvasRef = useRef(null);
  const [fallingImages, setFallingImages] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fallingImages.forEach((image, index) => {
        // Update image position
        image.vy += 0.1; // Reduce the vertical velocity for smoother bouncing
        image.x += image.vx;
        image.y += image.vy;

        // Check for floor collision
        if (image.y + image.height > canvas.height) {
          image.y = canvas.height - image.height;
          image.vy *= -image.bounce; // Bounce off the floor
        }

        // Check for boundary collision (left and right edges)
        if (image.x < 0) {
          image.x = 0;
          image.vx *= -image.bounce; // Bounce off the left wall
        } else if (image.x + image.width > canvas.width) {
          image.x = canvas.width - image.width;
          image.vx *= -image.bounce; // Bounce off the right wall
        }

        // Apply damping to gradually reduce velocity
        image.vx *= image.friction; // Horizontal damping
        image.vy *= image.friction; // Vertical damping

        // Check for collision with other falling images
        for (let i = index + 1; i < fallingImages.length; i++) {
          const otherImage = fallingImages[i];
          if (checkCollision(image, otherImage)) {
            resolveCollision(image, otherImage);
          }
        }

        ctx.drawImage(image.image, image.x, image.y, image.width, image.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [fallingImages]);

  const handleButtonClick = () => {
    const images = [MorAzul, MorLila, MorMaiz, MorRojo];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const newImage = {
      x: Math.random() * canvasRef.current.width,
      y: -70,
      vx: (Math.random() - 0.5) * 2, // Adjust the horizontal velocity range (-1 to 1)
      vy: (Math.random() + 1) * 2, // Adjust the vertical velocity range (0.5 to 2)

      image: new Image(),
      width: 70,
      height: 140,
      bounce: 0.3, // Adjust the bounce factor (0.8 for less energy loss)
      friction: 0.95,
      mass: 1, // Add the mass property]
      energyLoss: 0.9, // Energy loss factor (adjust as desired)
    };

    //     vx: (Math.random() - 0.5) * 4,
    //     vy: 0,
    //     image: new Image(),
    //     width: 70,
    //     height: 120,
    //     bounce: 0.6,
    //     friction: 0.98,
    //     mass: 1, // Add the mass property
    //   };
    newImage.image.onload = () => {
      setFallingImages((prevImages) => [...prevImages, newImage]);
    };

    newImage.image.src = randomImage;
  };

  const resolveCollision = (imageA, imageB) => {
    const dx = imageB.x - imageA.x;
    const dy = imageB.y - imageA.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const collisionNormalX = dx / distance;
    const collisionNormalY = dy / distance;

    const relativeVelocityX = imageB.vx - imageA.vx;
    const relativeVelocityY = imageB.vy - imageA.vy;

    const velocityAlongNormal =
      relativeVelocityX * collisionNormalX +
      relativeVelocityY * collisionNormalY;

    if (velocityAlongNormal > 0) {
      return; // Objects are moving away from each other, no collision
    }

    const impulseMagnitude =
      (2 * velocityAlongNormal) / (imageA.mass + imageB.mass);

    const impulseX = impulseMagnitude * collisionNormalX;
    const impulseY = impulseMagnitude * collisionNormalY;

    console.log("Collision detected!");
    console.log("Impulse magnitude:", impulseMagnitude);
    console.log("Impulse X:", impulseX);
    console.log("Impulse Y:", impulseY);

    imageA.vx -= impulseX * imageB.mass;
    imageA.vy -= impulseY * imageB.mass;
    imageB.vx += impulseX * imageA.mass;
    imageB.vy += impulseY * imageA.mass;
  };

  const checkCollision = (imageA, imageB) => {
    const dx = imageB.x - imageA.x;
    const dy = imageB.y - imageA.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= (imageA.width + imageB.width) / 2; // Check collision based on the widths of the images
  };

  let heightSize = 80;

  if (window.innerHeight < 760) {
    heightSize = 80;
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight - heightSize}
      />

      <button
        onClick={handleButtonClick}
        style={{ position: "absolute", top: "300px", left: "100px" }}
      >
        Drop Image
      </button>
    </div>
  );
};

export default MorgensFalling;
