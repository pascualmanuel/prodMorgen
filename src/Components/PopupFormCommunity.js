import React from "react";
import CustomButton from "./CustomButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isIOS, isSafari } from "react-device-detect";
import { useLanguage } from "../Hooks/LanguageContext";
const PopupFormCommunity = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [checked, setChecked] = useState(true);
  const { userLanguage, translateText } = useLanguage();
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    // Check if the User-Agent contains "iPad"
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIpad(userAgent.includes("ipad"));
  }, []);

  const handleChange = () => {
    setChecked(!checked);
  };

  const location = useLocation();
  const { pathname } = window.location;

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

  let fontAporte = "60px";

  if (viewportHeight < 680) {
    fontAporte = "45px";
  }

  let topWrapper = "-1px";
  let rightWrapper = "128px";
  if (isSafari || isIOS) {
    topWrapper = "-3px";
    rightWrapper = "131px";
  }

  const textColor = location.pathname === "/gallery" ? "#FE6970" : "#DC3349";

  const prueba = (
    <span style={{ fontSize: "20px", fontFamily: "Light" }}>Enviar</span>
  );

  return (
    <>
      <div className="support-cont">
        <div style={{ marginLeft: "30px" }}>
          <h3 className="support-h3">
            {" "}
            {translateText("Support the project", "Apoya el proyecto")}
          </h3>
          <p className="support-p">
            {translateText(
              "With your contribution you help Morgenstern continue to grow.",
              "Con tu aporte ayudas a que Morgenstern siga creciendo."
            )}
          </p>
        </div>
        <div className="right-cont-pop-community">
          <div className="toggle-button-pay">
            <div className="switches-container pointer">
              <input
                type="radio"
                id="switchMonthly"
                name="switchPlan"
                value="Mercado Pago"
                checked={checked}
                onChange={handleChange}
              />
              <input
                type="radio"
                id="switchYearly"
                name="switchPlan"
                value="Pay Pal"
                checked={!checked}
                onChange={handleChange}
              />
              <label className="pointer" htmlFor="switchMonthly">
                Mercado Pago
              </label>
              <label className="pointer" htmlFor="switchYearly">
                Pay Pal
              </label>
              <div
                className="switch-wrapper"
                style={{ top: topWrapper, right: rightWrapper }}
              >
                <div className="switch">
                  <div style={{ opacity: checked ? 1 : 0 }}>Mercado Pago</div>
                  <div style={{ opacity: checked ? 0 : 1 }}>Pay Pal</div>
                </div>
              </div>
            </div>
            {checked ? (
              <>
                <Link to={"http://mpago.la/132RpZw"} target="_blank">
                  <div className="support-button" style={{ marginTop: "50px" }}>
                    {translateText(
                      "Contribute $ 2000 ARS",
                      " Aportar $ 2000 ARS"
                    )}
                  </div>
                </Link>
                <Link to={"http://mpago.la/31zjr6T"} target="_blank">
                  <div className="support-button">
                    {translateText(
                      "Contribute $ 5000 ARS",
                      "Aportar $ 5000 ARS"
                    )}
                  </div>
                </Link>
                <Link
                  to={"https://link.mercadopago.com.ar/holamorgenstern"}
                  target="_blank"
                >
                  <div className="support-button" style={{ marginBottom: 0 }}>
                    {translateText(
                      "Contribute what you want",
                      "Aportá lo que vos quieras"
                    )}
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to={"http://mpago.la/132RpZw"} target="_blank">
                  <div className="support-button" style={{ marginTop: "50px" }}>
                    {translateText("Contribute 10 USD", "Aporta 10 USD")}
                  </div>
                </Link>

                <Link to={"http://mpago.la/31zjr6T"} target="_blank">
                  <div className="support-button">
                    {translateText("Contribute 20 USD", "Aporta 20 USD")}
                  </div>
                </Link>

                <Link
                  to={"https://link.mercadopago.com.ar/holamorgenstern"}
                  target="_blank"
                >
                  <div className="support-button" style={{ marginBottom: 0 }}>
                    {translateText("Contribute 50 USD", "Aporta 50 USD")}
                  </div>
                </Link>
              </>
            )}
          </div>
          {/* <Link to="/">Hola</Link>
          <Link to="/">Hola</Link>
          <Link to="/">Hola</Link> */}
        </div>
      </div>
    </>
  );
};

export default PopupFormCommunity;
