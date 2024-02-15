import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import FbLogo from "../Assets/svg/fb-svg.svg";
import IgLogo from "../Assets/svg/ig-svg.svg";
import MailSVG from "../Assets/svg/mail-svg.svg";
import CircleNav from "../Assets/svg/circle-nav-svg.svg";
import CircleWhiteNav from "../Assets/svg/circle-nav-white-svg.svg";
import { useLanguage } from "../Hooks/LanguageContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  const [isHome, setIsHome] = useState(false); // Use useState to track if it's the home page
  const location = useLocation();

  const { userLanguage, toggleLanguage } = useLanguage();
  const isEnSelected = userLanguage === "EN";
  const isEsSelected = userLanguage === "ES";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_3asxblp",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    let welcomeMessage = translateText("Welcome!", "¡Bienvenidx!");

    let communityMessage = translateText(
      "You are now part of the Morgensterns Community",
      "Ya sos parte de la comunidad de Morgensterns"
    );

    toast(
      <div>
        <div>{welcomeMessage}</div>
        <div style={{ marginTop: "10px", width: "233px" }}>
          {communityMessage}
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4500,
        hideProgressBar: true,
      }
    );
  };

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

  let circleButton = CircleNav;

  if (location.pathname === "/yomorgenstern") {
    circleButton = CircleWhiteNav;
  } else {
    circleButton = CircleNav;
  }

  let displayCircleMob = "inherit";

  if (location.pathname === "/") {
    displayCircleMob = "none";
  }

  // let marginObras = 0;
  // if (location.pathname === "/obras") {
  //   marginObras = -7;
  // }

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
        <div className="navbar-container">
          <section className="navbar-left-section">
            <div className="contact">
              <h4 style={{ display: "flex", alignItems: "center" }}>
                <a href="mailto:holamorgenstern@gmail.com">
                  <img
                    src={MailSVG}
                    width="15px"
                    className="contact-icons"
                    style={{ marginRight: "45px" }}
                    alt="React Logo"
                  />
                </a>
                <span className="contact-icons-text">
                  <a href="mailto:holamorgenstern@gmail.com">
                    holamorgenstern@gmail.com
                  </a>
                </span>
              </h4>
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://www.instagram.com/holamorgenstern/"
                  target="_blank"
                >
                  <img
                    src={IgLogo}
                    width="15px"
                    className="contact-icons"
                    style={{ marginRight: "15px" }}
                    alt="React Logo"
                  />
                </a>
                <span className="contact-icons-text"> @holamorgenstern</span>
              </h4>
            </div>

            <div className="contact-me">
              <p className="news">
                {" "}
                {translateText("Stay tuned", "Recibí novedades")}
              </p>

              <div className="email-container">
                <form
                  style={{ display: "contents" }}
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder={translateText(
                      "e-mail address",
                      "Dirección de e-mail"
                    )}
                    className="email-input"
                  />
                  <button type="submit" className="submit-button">
                    {translateText("Send", "Enviar")}
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className="navbar-right-section">
            <Link to={"/yomorgenstern"}>
              <h2 onClick={closeMenu} className="navbar-title-mob yoMor">
                {translateText("I, Morgenstern", "Yo, Morgenstern")}
              </h2>
            </Link>
            <Link to={"/obras"}>
              <h2 onClick={closeMenu} className="navbar-title-mob obras">
                {translateText("Works", "Obras")}
              </h2>
            </Link>
            <Link to={"/comunidad"}>
              <h2 onClick={closeMenu} className="navbar-title-mob comunidad">
                {translateText("Community", "Comunidad")}
              </h2>
            </Link>
            <Link to={"/agenda"}>
              <h2 onClick={closeMenu} className="navbar-title-mob agenda">
                {translateText("Roadmap", "Fechas")}
              </h2>
            </Link>
            <Link to={"/interactivo"}>
              <h2 onClick={closeMenu} className="navbar-title-mob interactivo">
                {translateText("Interactive", "Interactivo")}
              </h2>
            </Link>
            <Link>
              <h2 onClick={closeMenu} className="navbar-title-mob merch">
                MorgenMerch
              </h2>
            </Link>
            <Link to={"/revista"}>
              <h2 onClick={closeMenu} className="navbar-title-mob revista">
                {translateText("The magazine", "La revista")}
              </h2>
            </Link>
          </section>
        </div>
      </div>
      {!menuOpen && (
        <div
          style={{
            position: "fixed",
            marginTop: "25px",
            marginLeft: "30px",
            zIndex: "900",
            display: displayCircleMob,
          }}
        >
          <Link to="/">
            <img src={circleButton} width={50} />
          </Link>
        </div>
      )}

      <div className="nav-bar" style={{ justifyContent: "flex-end" }}>
        <div className="plus-icon">
          {!menuOpen && isHome && (
            <p style={{ marginRight: "50px", color: "white" }}></p>
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
export default MobileHeader;
