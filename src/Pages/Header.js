import React from "react";
import DesktopHeader from "../Components/DesktopHeader";
import MobileHeader from "../Components/MobileHeader.js";
import { useState, useEffect } from "react";

function MobileHeaderComponent() {
  return <MobileHeader />;
}

function DesktopHeaderComponent() {
  return <DesktopHeader />;
}

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
}

export default Header;
