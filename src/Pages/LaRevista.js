import React from "react";
import "../Styles/App.css";
import { useLanguage } from "../Hooks/LanguageContext";
function LaRevista() {
  const { userLanguage, translateText } = useLanguage();
  console.log(userLanguage);

  let eng = "eng";

  return (
    <>
      {/* <div className="larevista-cont"></div> */}
      <div className={`larevista-cont-${userLanguage}`}></div>
      {/* <div className="larevista-cont-eng"></div> */}
    </>
  );
}
export default LaRevista;
