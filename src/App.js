import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Styles/App.css";
import "./Fonts/ClashDisplay-Bold.ttf";
import "./Fonts/ClashDisplay-Extralight.ttf";
import "./Fonts/ClashDisplay-Light.ttf";
import "./Fonts/ClashDisplay-Medium.ttf";
import "./Fonts/ClashDisplay-Regular.ttf";
import "./Fonts/ClashDisplay-Semibold.ttf";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import YoMorgen from "./Pages/YoMorgenstern";
import Atendeme from "./Components/Atendeme";
import Gallery from "./Components/Gallery";
import Interactivo from "./Pages/Interactivo";
import Malo from "./Components/Malo";
import Comunidad from "./Pages/Comunidad";
import Agenda from "./Pages/Agenda";
import Obras from "./Pages/Obras";
import Prueba from "./Components/Prueba";
import Inadvertido from "./Components/Inadvertido";
import LaRevista from "./Pages/LaRevista";


import { LanguageProvider } from "./Hooks/LanguageContext";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yomorgenstern" element={<YoMorgen />} />
            <Route path="/atendeme" element={<Atendeme />} />
            <Route path="/interactivo" element={<Interactivo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/malo" element={<Malo />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/revista" element={<LaRevista />} />

          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </>
  );
}

export default App;
