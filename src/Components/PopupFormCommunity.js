import React from "react";
import CustomButton from "./CustomButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isIOS, isSafari } from "react-device-detect";

const PopupFormCommunity = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [checked, setChecked] = useState(true);

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
      <p className="participar-popup" style={{ color: "Black" }}>
        DONAR
      </p>
      <div className="support-cont">
        <div style={{ marginLeft: "30px" }}>
          <h3 className="support-h3">Apoya el proyecto</h3>
          <p className="support-p">
            Con tu aporte ayudas a que Morgenstern siga creciendo.
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
                <Link to={"http://mpago.la/1FftDuU"} target="_blank">
                  <div className="support-button" style={{ marginTop: "50px" }}>
                    Aportar $ 1000 ARS
                  </div>
                </Link>
                <Link to={"http://mpago.la/1FftDuU"} target="_blank">
                  <div className="support-button">Aportar $ 2000 ARS </div>{" "}
                </Link>
                <Link to={"http://mpago.la/1FftDuU"} target="_blank">
                  <div className="support-button" style={{ marginBottom: 0 }}>
                    {" "}
                    Aportar $ 5000 ARS{" "}
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to={"http://mpago.la/1FftDuU"} target="_blank">
                  <div className="support-button" style={{ marginTop: "50px" }}>
                    Aportar 10USD
                  </div>
                </Link>

                <Link to={"http://mpago.la/1FftDuU"} target="_blank">
                  <div className="support-button"> Aportar 20USD </div>
                </Link>

                <Link to={"http://mpago.la/1FftDuU"} target="_blank">
                  <div className="support-button" style={{ marginBottom: 0 }}>
                    {" "}
                    Aportar 50USD
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
