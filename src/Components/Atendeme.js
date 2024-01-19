import React from "react";
import { useEffect, useState, useRef } from "react";
import "../Styles/Atendeme.css";
import "../Styles/App.css";
import CustomButton from "./CustomButton";
import Popup from "./PopUp";
import { useLanguage } from "../Hooks/LanguageContext";

const Atendeme = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { userLanguage, translateText } = useLanguage();
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const scrollIntervals = useRef([]);

  const handleAutoScroll = (column, scrollDistance, direction) => {
    const scrollInterval = setInterval(() => {
      if (direction === "up") {
        column.scrollBy(0, -scrollDistance);
        if (column.scrollTop <= 0) {
          column.scrollTop = column.scrollHeight;
        }
      } else {
        column.scrollBy(0, scrollDistance);
        if (column.scrollTop >= column.scrollHeight) {
          column.scrollTop = 0;
        }
      }
    }, 20); // Decrease the scroll interval for smoother animation

    scrollIntervals.current.push(scrollInterval);

    // Stop auto-scroll when the mouse enters the column
    column.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval);
    });

    if (window.innerWidth < 720) {
      // Mobile touchstart event
      column.addEventListener("touchstart", () => {
        scrollIntervals.current.forEach((interval) => {
          clearInterval(interval);
        });
      });
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const innerWidth = window.innerWidth;
      const columnsToHide = ["col-sc-2", "col-sc-3", "col-sc-4"];
      columnsToHide.forEach((colClass) => {
        const column = document.querySelector(`.${colClass}`);
        if (column) {
          if (innerWidth < 720) {
            column.style.display = "none";
          } else {
            column.style.display = "block";
          }
        }
      });
    };

    // Handle initial window size
    handleWindowResize();

    // Listen for window resize events
    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      // Clear all scroll intervals when the component unmounts
      scrollIntervals.current.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, []);

  useEffect(() => {
    const column1 = document.querySelector(".col-sc-1");
    const cloneContent1 = column1.innerHTML;
    column1.innerHTML += cloneContent1;
    handleAutoScroll(column1, 0.5, "up");
  }, []);

  useEffect(() => {
    const column2 = document.querySelector(".col-sc-2");
    const cloneContent2 = column2.innerHTML;
    column2.innerHTML += cloneContent2;
    handleAutoScroll(column2, 0.5, "down");
  }, []);

  useEffect(() => {
    const column3 = document.querySelector(".col-sc-3");
    const cloneContent3 = column3.innerHTML;
    column3.innerHTML += cloneContent3;
    handleAutoScroll(column3, 0.5, "up");
  }, []);

  useEffect(() => {
    const column4 = document.querySelector(".col-sc-4");
    const cloneContent4 = column4.innerHTML;
    column4.innerHTML += cloneContent4;
    handleAutoScroll(column4, 0.5, "down");
  }, []);

  let buttonHeight = "55px";
  if (window.innerWidth < 720) {
    buttonHeight = "25px";
  }

  return (
    <>
      <div className="seccion-flexbox">
        <div className="columna-scrollable col-sc-1">
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              En el fondo, todos somos lo mismo
              <br />
              <br />
              En principio, somos todos iguales
              <br />
              <br />
              Tuve una idea y no la seguí
              <br />
              <br />
              Me dicen que estoy igual (que antes) pero yo no lo veo
              <br />
              <br />
              Contacto visual en el ascensor
              <br />
              <br />
              Los consejos no me sirven
              <br />
              <br />
              Cuando me quise dar cuenta ya se habían ido
              <br />
              <br />
              Completamente solo
              <br />
              <br />
              Tengo muchas obligaciones/explicaciones
              <br />
              <br />
              <span style={{ textDecoration: "line-through" }}>
                Estuve pensando en lo que dije. (y no le cambiaría nada)
              </span>
              <br />
              Ahora no puedo
              <br />
              <br />
              Si es viejo, no me sirve.
              <br />
              <br />
              <span className="name-qt">Maxi - 34 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Yo, yo yo.. Para mí. A mí me pasó lo mismo. Es que cuando yo
              estuve ahí. Ay! No viste? Yo hice uno igual en la escuela! Che,
              ale, prestame atención, no ves que es más importante lo que me
              pasa?! Esto es una falta de respeto a mi persona. No me traés? No
              me llevás? No me lo regalías? Por qué nunca pensás en mí? MAMÁ!
              MAMÁ! Mirame! Viste qué bien lo hice?! Yo soy el mejor de la
              clase! Yo y lo sabía, iba a responder lo mismo. Lo que pasa es lo
              siguiente, yo te explico. Son todos unos imbéciles, mejor lo hago
              todo solo.
              <span className="name-qt">Kiki - 26 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Prisionero de sí mismo
              <br />
              <br />
              "Si me descargo me muero"
              <br />
              <br />
              Muere solo o lo matan, o se mata/n?
              <br />
              <br />
              Es/son vulnerable/s?
              <br />
              <br />
              Tiene/n algún depredador natural?
              <br />
              <br />
              <span className="name-qt">Manu - 29 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
        </div>
        <div
          className="columna-scrollable col-sc-2"
          style={{ marginLeft: "20px" }}
        >
          <div className="qt-cont">
            <p className="p-qt">
              Yo, yo yo.. Para mí. A mí me pasó lo mismo. Es que cuando yo
              estuve ahí. Ay! No viste? Yo hice uno igual en la escuela! Che,
              ale, prestame atención, no ves que es más importante lo que me
              pasa?! Esto es una falta de respeto a mi persona. No me traés? No
              me llevás? No me lo regalías? Por qué nunca pensás en mí? MAMÁ!
              MAMÁ! Mirame! Viste qué bien lo hice?! Yo soy el mejor de la
              clase! Yo y lo sabía, iba a responder lo mismo. Lo que pasa es lo
              siguiente, yo te explico. Son todos unos imbéciles, mejor lo hago
              todo solo.
              <span className="name-qt">Kiki - 26 años</span>
            </p>
          </div>

          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              En el fondo, todos somos lo mismo
              <br />
              <br />
              En principio, somos todos iguales
              <br />
              <br />
              Tuve una idea y no la seguí
              <br />
              <br />
              Me dicen que estoy igual (que antes) pero yo no lo veo
              <br />
              <br />
              Contacto visual en el ascensor
              <br />
              <br />
              Los consejos no me sirven
              <br />
              <br />
              Cuando me quise dar cuenta ya se habían ido
              <br />
              <br />
              Completamente solo
              <br />
              <br />
              Tengo muchas obligaciones/explicaciones
              <br />
              <br />
              <span style={{ textDecoration: "line-through" }}>
                Estuve pensando en lo que dije. (y no le cambiaría nada)
              </span>
              <br />
              Ahora no puedo
              <br />
              <br />
              Si es viejo, no me sirve.
              <br />
              <br />
              <span className="name-qt">Maxi - 34 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Prisionero de sí mismo
              <br />
              <br />
              "Si me descargo me muero"
              <br />
              <br />
              Muere solo o lo matan, o se mata/n?
              <br />
              <br />
              Es/son vulnerable/s?
              <br />
              <br />
              Tiene/n algún depredador natural?
              <br />
              <br />
              <span className="name-qt">Manu - 29 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>

          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>
        </div>
        <div
          className="columna-scrollable col-sc-3"
          style={{ marginLeft: "20px" }}
        >
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>

          <div className="qt-cont">
            <p className="p-qt">
              En el fondo, todos somos lo mismo
              <br />
              <br />
              En principio, somos todos iguales
              <br />
              <br />
              Tuve una idea y no la seguí
              <br />
              <br />
              Me dicen que estoy igual (que antes) pero yo no lo veo
              <br />
              <br />
              Contacto visual en el ascensor
              <br />
              <br />
              Los consejos no me sirven
              <br />
              <br />
              Cuando me quise dar cuenta ya se habían ido
              <br />
              <br />
              Completamente solo
              <br />
              <br />
              Tengo muchas obligaciones/explicaciones
              <br />
              <br />
              <span style={{ textDecoration: "line-through" }}>
                Estuve pensando en lo que dije. (y no le cambiaría nada)
              </span>
              <br />
              Ahora no puedo
              <br />
              <br />
              Si es viejo, no me sirve.
              <br />
              <br />
              <span className="name-qt">Maxi - 34 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>

          <div className="qt-cont">
            <p className="p-qt">
              Prisionero de sí mismo
              <br />
              <br />
              "Si me descargo me muero"
              <br />
              <br />
              Muere solo o lo matan, o se mata/n?
              <br />
              <br />
              Es/son vulnerable/s?
              <br />
              <br />
              Tiene/n algún depredador natural?
              <br />
              <br />
              <span className="name-qt">Manu - 29 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Yo, yo yo.. Para mí. A mí me pasó lo mismo. Es que cuando yo
              estuve ahí. Ay! No viste? Yo hice uno igual en la escuela! Che,
              ale, prestame atención, no ves que es más importante lo que me
              pasa?! Esto es una falta de respeto a mi persona. No me traés? No
              me llevás? No me lo regalías? Por qué nunca pensás en mí? MAMÁ!
              MAMÁ! Mirame! Viste qué bien lo hice?! Yo soy el mejor de la
              clase! Yo y lo sabía, iba a responder lo mismo. Lo que pasa es lo
              siguiente, yo te explico. Son todos unos imbéciles, mejor lo hago
              todo solo.
              <span className="name-qt">Kiki - 26 años</span>
            </p>
          </div>

          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
        </div>
        <div
          className="columna-scrollable col-sc-4"
          style={{ marginLeft: "20px" }}
        >
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>

          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              En el fondo, todos somos lo mismo
              <br />
              <br />
              En principio, somos todos iguales
              <br />
              <br />
              Tuve una idea y no la seguí
              <br />
              <br />
              Me dicen que estoy igual (que antes) pero yo no lo veo
              <br />
              <br />
              Contacto visual en el ascensor
              <br />
              <br />
              Los consejos no me sirven
              <br />
              <br />
              Cuando me quise dar cuenta ya se habían ido
              <br />
              <br />
              Completamente solo
              <br />
              <br />
              Tengo muchas obligaciones/explicaciones
              <br />
              <br />
              <span style={{ textDecoration: "line-through" }}>
                Estuve pensando en lo que dije. (y no le cambiaría nada)
              </span>
              <br />
              Ahora no puedo
              <br />
              <br />
              Si es viejo, no me sirve.
              <br />
              <br />
              <span className="name-qt">Maxi - 34 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Yo, yo yo.. Para mí. A mí me pasó lo mismo. Es que cuando yo
              estuve ahí. Ay! No viste? Yo hice uno igual en la escuela! Che,
              ale, prestame atención, no ves que es más importante lo que me
              pasa?! Esto es una falta de respeto a mi persona. No me traés? No
              me llevás? No me lo regalías? Por qué nunca pensás en mí? MAMÁ!
              MAMÁ! Mirame! Viste qué bien lo hice?! Yo soy el mejor de la
              clase! Yo y lo sabía, iba a responder lo mismo. Lo que pasa es lo
              siguiente, yo te explico. Son todos unos imbéciles, mejor lo hago
              todo solo.
              <span className="name-qt">Kiki - 26 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Prisionero de sí mismo
              <br />
              <br />
              "Si me descargo me muero"
              <br />
              <br />
              Muere solo o lo matan, o se mata/n?
              <br />
              <br />
              Es/son vulnerable/s?
              <br />
              <br />
              Tiene/n algún depredador natural?
              <br />
              <br />
              <span className="name-qt">Manu - 29 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes"
              <br />
              <br />
              "Ay no hablamos nunca pero se que estas bien porque te veo en
              redes"
              <br />
              <br />
              "Estas a full te veo en redes"
              <span className="name-qt">Cynthia - 30 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”
              <span className="name-qt">Blas - 85 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              conexión que parece, pero no es...
              <br /> <br />
              presencia que no es...
              <br /> <br />
              trama que no hay...
              <br /> <br />
              red que no sostiene...
              <br /> <br />
              alienación, indiferencia, inconsciencia, anestesia ...
              <br /> <br />
              no duele más...
              <br /> <br />
              no duele más?
              <span className="name-qt">Eliza - 56 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              Que le salga un orzuelo al Sr Morgenstern
              <span className="name-qt">Pablo - 55 años</span>
            </p>
          </div>
        </div>
      </div>

      <h2 className="atendeme-title">
        {translateText("Hear me out", "Atendeme")}
      </h2>

      <div className="second-cont-atendeme">
        <div className="atendeme-cont-button-mob">
          <div className="atendeme-button">
            <CustomButton
              buttonText={translateText("Participate", "Participar")}
              firstColor={"#FE6970"}
              secondColor={"#005DA2"}
              thirdColor={"#4590E6"}
              backColor={"#FE6970"}
              border={"solid black"}
              onClick={openPopup}
              width={"235px"}
              height={buttonHeight}
            />
          </div>
        </div>
        {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
      </div>
    </>
  );
};

export default Atendeme;
