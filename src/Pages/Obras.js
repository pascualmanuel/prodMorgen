import React from "react";
import ObrasDesktop from "../Components/ObrasDesktop";
import ObrasMobile from "../Components/ObrasMobile";

import { useState, useEffect } from "react";

function MobileObrasComponent() {
  return <ObrasMobile />;
}

function DesktopObrasComponent() {
  return <ObrasDesktop />;
}

function Obras() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <ObrasMobile /> : <ObrasDesktop />}</>;
}

export default Obras;
