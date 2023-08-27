import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import FbLogo from "../Assets/svg/fb-svg.svg";
import IgLogo from "../Assets/svg/ig-svg.svg";
import MailSVG from "../Assets/svg/mail-svg.svg";
import CircleNav from "../Assets/svg/circle-nav-svg.svg";
import CircleWhiteNav from "../Assets/svg/circle-nav-white-svg.svg";
import { useLanguage } from "../Hooks/LanguageContext";

function HeaderDesktop() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);
  // const [isEnSelected, setIsEnSelected] = useState(false);
  // const [isEsSelected, setIsEsSelected] = useState(true);
  const [isHome, setIsHome] = useState(false); // Use useState to track if it's the home page
  const location = useLocation();

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const { userLanguage, toggleLanguage } = useLanguage();
  const isEnSelected = userLanguage === "EN";
  const isEsSelected = userLanguage === "ES";

  const handleEsClick = () => {
    toggleLanguage(); // Cambiar a EN
  };

  const handleEnClick = () => {
    toggleLanguage(); // Cambiar a ES
  };

  const translateText = (enText, esText) => {
    return userLanguage === "EN" ? enText : esText;
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setIconRotation(0);
  };

  let colorStroke = "white";

  if (menuOpen === true) {
    colorStroke = "black";
  } else if (
    location.pathname === "/atendeme" ||
    location.pathname === "/agenda" ||
    location.pathname === "/gallery" ||
    location.pathname === "/obras" ||
    location.pathname === "/comunidad" ||
    location.pathname === "/interactivo" ||
    location.pathname === "/revista"
  ) {
    colorStroke = "black";
  }

  // if (window.innerWidth < 720 && location.pathname === "/comunidad") {
  //   colorStroke = "black";
  // }

  let circleButton = CircleNav;

  if (location.pathname === "/yomorgenstern") {
    circleButton = CircleWhiteNav;
  } else {
    circleButton = CircleNav;
  }

  let marginObras = 0;
  if (location.pathname === "/obras") {
    marginObras = -7;
  }

  let displayCircleMob = "inherit";

  if (location.pathname === "/") {
    displayCircleMob = "none";
  }

  const isGalleryOrAtendeme =
    location.pathname === "/gallery" || location.pathname === "/atendeme";

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/comunidad"); // Navigate to "/home" route
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIconRotation(menuOpen ? 0 : 45);
  };

  useEffect(() => {
    // Check if the current location is the home page
    const isHomePage = location.pathname === "/";
    const isAtendemePage = location.pathname === "/atendeme";

    setIsHome(isHomePage); // Update isHome based on the current location
  }, [location]);

  return (
    <>
      <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <div className="navbar-container">
          <section className="navbar-left-section">
            <div className="toggle-button">
              <div
                to="#"
                className={`toggle-button-link ${
                  isEnSelected ? "active" : ""
                } pointer`}
                onClick={handleEnClick}
              >
                EN
              </div>
              <div
                to="#"
                className={`toggle-button-link ${
                  isEsSelected ? "active" : ""
                } pointer`}
                onClick={handleEsClick}
              >
                ESP
              </div>
            </div>
            <div className="contact">
              <h4 style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={MailSVG}
                  width="15px"
                  style={{ marginRight: "15px" }}
                  alt="React Logo"
                />
                <a href="mailto:holamorgenstern@gmail.com">
                  holamorgenstern@gmail.com
                </a>
              </h4>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={FbLogo}
                  width="15px"
                  style={{ marginRight: "15px" }}
                  alt="React Logo"
                />
                Morgenstern
              </h4>
              <h4 style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={IgLogo}
                  width="15px"
                  style={{ marginRight: "15px" }}
                  alt="React Logo"
                />
                <a
                  href="https://www.instagram.com/holamorgenstern/"
                  target="_blank"
                >
                  @holamorgenstern
                </a>
              </h4>
            </div>
            <div className="contact-me">
              <p className="news">
                {translateText("Stay tuned", "Recibí Novedades")}
              </p>
              {/* <input type="email" placeholder="Enter your email" /> */}
              {/* <input /> */}
              <div className="email-container">
                <input
                  type="email"
                  placeholder={translateText(
                    "e-mail address",
                    "Dirección de e-mail"
                  )}
                  className="email-input"
                />
                <button type="submit" className="submit-button">
                  {translateText("Send", "Enviar")}
                </button>
              </div>
            </div>
          </section>
          <section className="navbar-right-section-desk">
            <Link to={"/yomorgenstern"}>
              <h2 onClick={closeMenu} className="navbar-title yoMor">
                {translateText("I, Morgenstern", "Yo, Morgenstern")}
              </h2>
            </Link>
            <Link to={"/obras"}>
              <h2 onClick={closeMenu} className="navbar-title obras">
                {translateText("Works", "Obras")}
              </h2>
            </Link>
            <Link to={"/comunidad"}>
              <h2 onClick={closeMenu} className="navbar-title comunidad">
                {translateText("Community", "Comunidad")}
              </h2>
            </Link>
            <Link to={"/revista"}>
              <h2 onClick={closeMenu} className="navbar-title revista">
                {translateText("The magazine", "La revista")}
              </h2>
            </Link>
            <Link to={"/interactivo"}>
              <h2 onClick={closeMenu} className="navbar-title interactivo">
                {translateText("Interactive", "Interactivo")}
              </h2>
            </Link>
            <a
              href="https://morgenstern.flashcookie.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 onClick={closeMenu} className="navbar-title merch">
                MorgenMerch
              </h2>
            </a>
            <Link to={"/agenda"}>
              <h2 onClick={closeMenu} className="navbar-title agenda">
                {translateText("Calendar", "Agenda")}
              </h2>
            </Link>
          </section>
        </div>
      </div>
      {!menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "50px",
            left: "60px",
            zIndex: "900",
          }}
        >
          <Link to="/">
            <img
              style={{ userSelect: "none", display: displayCircleMob }}
              src={circleButton}
              width={50}
            />
          </Link>
        </div>
      )}
      <div className="nav-bar">
        <div className="plus-icon pointer" style={{ marginRight: marginObras }}>
          {!menuOpen && isHome && (
            <p
              style={{ marginRight: "50px", color: "white" }}
              onClick={toggleLanguage}
              className="pointer"
            >
              {userLanguage === "EN" ? "ESP" : "EN"}
            </p>
          )}

          {isGalleryOrAtendeme ? (
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: `rotate(${45}deg)` }}
              onClick={handleOnClick}
            >
              <path d="M5 22L40 22" stroke={colorStroke} strokeWidth="3" />
              <path
                d="M22.5 39.5L22.5 4.5"
                stroke={colorStroke}
                strokeWidth="3"
              />
            </svg>
          ) : (
            // Render the default SVG for other paths
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: `rotate(${iconRotation}deg)` }}
              onClick={toggleMenu}
            >
              <path d="M5 22L40 22" stroke={colorStroke} strokeWidth="3" />
              <path
                d="M22.5 39.5L22.5 4.5"
                stroke={colorStroke}
                strokeWidth="3"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
export default HeaderDesktop;
