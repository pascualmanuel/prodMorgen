import React from "react";
import { useEffect, useState } from "react";
import "../Styles/Atendeme.css";
import "../Styles/App.css";
import CustomButton from "./CustomButton";
import Popup from "./PopUp";

const MiSeccion = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  // console.log(showPopup);

  // useEffect(() => {
  //   // Set initial scroll positions for each column
  //   const column1 = document.querySelector(".col-sc-1");
  //   column1.scrollTop = column1.scrollHeight * 0.1;

  //   const column2 = document.querySelector(".col-sc-2");
  //   column2.scrollTop = column2.scrollHeight * 0.3;

  //   const column3 = document.querySelector(".col-sc-3");
  //   column3.scrollTop = column3.scrollHeight * 0.4;

  //   const column4 = document.querySelector(".col-sc-4");
  //   column4.scrollTop = column4.scrollHeight * 0.5;
  // }, []);

  useEffect(() => {
    const column1 = document.querySelector(".col-sc-1");
    const cloneContent1 = column1.innerHTML;
    column1.innerHTML += cloneContent1;

    const targetScroll1 = column1.scrollHeight * 1;
    let currentScroll1 = column1.scrollTop;

    const scrollInterval1 = setInterval(() => {
      currentScroll1 += 0.25; // Increase the increment value for faster scrolling
      column1.scrollTop = currentScroll1;

      if (currentScroll1 >= targetScroll1) {
        clearInterval(scrollInterval1);
      }
    }, 10); // Decrease the scroll interval for smoother animation

    // Stop auto-scroll when mouse enters the column
    column1.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval1);
    });
  }, []);
  useEffect(() => {
    const column2 = document.querySelector(".col-sc-2");
    const cloneContent2 = column2.innerHTML;
    column2.innerHTML += cloneContent2;

    const scrollDistance = 0.5; // Adjust the scroll distance as needed
    const scrollInterval2 = setInterval(() => {
      column2.scrollBy(0, -scrollDistance);

      if (column2.scrollTop <= 0) {
        clearInterval(scrollInterval2);
        column2.scrollTop = column2.scrollHeight;
      }
    }, 20); // Decrease the scroll interval for smoother animation

    // Stop auto-scroll when mouse enters the column
    column2.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval2);
    });
  }, []);
  useEffect(() => {
    const column3 = document.querySelector(".col-sc-3");
    const cloneContent3 = column3.innerHTML;
    column3.innerHTML += cloneContent3;

    const targetScroll3 = column3.scrollHeight * 1;
    let currentScroll3 = column3.scrollTop;

    const scrollInterval3 = setInterval(() => {
      currentScroll3 += 0.25; // Increase the increment value for faster scrolling
      column3.scrollTop = currentScroll3;

      if (currentScroll3 >= targetScroll3) {
        clearInterval(scrollInterval3);
      }
    }, 10); // Decrease the scroll interval for smoother animation

    // Stop auto-scroll when mouse enters the column
    column3.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval3);
    });
  }, []);

  useEffect(() => {
    const column4 = document.querySelector(".col-sc-4");
    const cloneContent4 = column4.innerHTML;
    column4.innerHTML += cloneContent4;

    const scrollDistance = 0.5; // Adjust the scroll distance as needed
    const scrollInterval4 = setInterval(() => {
      column4.scrollBy(0, -scrollDistance);

      if (column4.scrollTop <= 0) {
        clearInterval(scrollInterval4);
        column4.scrollTop = column4.scrollHeight;
      }
    }, 20); // Decrease the scroll interval for smoother animation

    // Stop auto-scroll when mouse enters the column
    column4.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval4);
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <>
      <div className="seccion-flexbox">
        <div className="columna-scrollable col-sc-1">
          <div className="qt-cont">
            <p className="p-qt">No nos vemos pero te sigo en redes</p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">No nos vemos pero te sigo en redes</p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              No nos vemos pero te sigo en redes Ay no hablamos nunca pero se
              que estas bien porque te veo en redes Estas a full te veo en redes
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
        </div>
        <div
          className="columna-scrollable col-sc-2"
          style={{ marginLeft: "20px" }}
        >
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS” conexión que parece, pero no
              es... presencia que no es... trama que no hay... red que no
              sostiene... alienación, indiferencia, inconsciencia,  anestesia
              ... no duele más... no duele más? Este es un mensaje que deja una
              persona random, Ailin lo elije y lo publica. Este es un mensaje
              que deja una persona random, Ailin lo elije y lo publica.Este es
              un mensaje que deja una persona random, Ailin lo elije y lo
              publica. Este es un mensaje que deja una persona random, Ailin lo
              elije y lo publica.
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS” conexión que parece, pero no
              es... presencia que no es... trama que no hay... red que no
              sostiene... alienación, indiferencia, inconsciencia,  anestesia
              ... no duele más... no duele más? Este es un mensaje que deja una
              persona random, Ailin lo elije y lo publica. Este es un mensaje
              que deja una persona random, Ailin lo elije y lo publica.Este es
              un mensaje que deja una persona random, Ailin lo elije y lo
              publica. Este es un mensaje que deja una persona random, Ailin lo
              elije y lo publica.
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS” conexión que parece, pero no
              es... presencia que no es... trama que no hay... red que no
              sostiene... alienación, indiferencia, inconsciencia,  anestesia
              ... no duele más... no duele más? Este es un mensaje que deja una
              persona random, Ailin lo elije y lo publica. Este es un mensaje
              que deja una persona random, Ailin lo elije y lo publica.Este es
              un mensaje que deja una persona random, Ailin lo elije y lo
              publica. Este es un mensaje que deja una persona random, Ailin lo
              elije y lo publica.
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
        </div>
        <div
          className="columna-scrollable col-sc-3"
          style={{ marginLeft: "20px" }}
        >
          <div className="qt-cont">
            <p className="p-qt"> "No nos vemos pero te sigo en redes"</p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              “LO MUY POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO
              PERSONAJE ES QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON
              QUE TODOS NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS
              SECRETAS INDIVIDUALES PSICOLOGÍAS”"
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes" Cynthia - 30 años “LO MUY
              POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO PERSONAJE ES
              QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON QUE TODOS
              NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS SECRETAS
              INDIVIDUALES PSICOLOGÍAS”" Manu - 29 años ‘‘Yo, yo yo.. Para mí. A
              mí me pasó lo mismo. Es que cuando yo estuve ahí. Ay! No viste? Yo
              hice uno igual en la escuela! Che, ale, prestame atención, no ves
              que es más importante lo que me pasa?! Esto es una falta de
              respeto a mi persona. No me traés? No me llevás? No me lo
              regalías? Por qué nunca pensás en mí? MAMÁ! MAMÁ! Mirame! Viste
              qué bien lo hice?! Yo soy el mejor de la clase! Yo y lo sabía, iba
              a responder lo mismo. Lo que pasa es lo siguiente, yo te explico.
              Son todos unos imbéciles, mejor lo hago todo solo. Kiki - 26 años
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
        </div>
        <div
          className="columna-scrollable col-sc-4"
          style={{ marginLeft: "20px" }}
        >
          <div className="qt-cont">
            <p className="p-qt">"No nos vemos pero te sigo en redes"</p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes" Cynthia - 30 años “LO MUY
              POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO PERSONAJE ES
              QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON QUE TODOS
              NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS SECRETAS
              INDIVIDUALES PSICOLOGÍAS”" Manu - 29 años ‘‘Yo, yo yo.. Para mí. A
              mí me pasó lo mismo. Es que cuando yo estuve ahí. Ay! No viste? Yo
              hice uno igual en la escuela! Che, ale, prestame atención, no ves
              que es más importante lo que me pasa?! Esto es una falta de
              respeto a mi persona. No me traés? No me llevás? No me lo
              regalías? Por qué nunca pensás en mí? MAMÁ! MAMÁ! Mirame! Viste
              qué bien lo hice?! Yo soy el mejor de la clase! Yo y lo sabía, iba
              a responder lo mismo. Lo que pasa es lo siguiente, yo te explico.
              Son todos unos imbéciles, mejor lo hago todo solo. Kiki - 26 años
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
          <div className="qt-cont">
            <p className="p-qt">
              "No nos vemos pero te sigo en redes" Cynthia - 30 años “LO MUY
              POCO QUE PODRÍA DECIR QUE CREO QUE ESTE IMAGINARIO PERSONAJE ES
              QUE ES UNO DE LOS ÍNTIMOS, OCULTADOS ARQUETIPOS CON QUE TODOS
              NOSOTROS CARGAMOS ENTRE LOS PLIEGUES  DE NUESTRAS SECRETAS
              INDIVIDUALES PSICOLOGÍAS”" Manu - 29 años ‘‘Yo, yo yo.. Para mí. A
              mí me pasó lo mismo. Es que cuando yo estuve ahí. Ay! No viste? Yo
              hice uno igual en la escuela! Che, ale, prestame atención, no ves
              que es más importante lo que me pasa?! Esto es una falta de
              respeto a mi persona. No me traés? No me llevás? No me lo
              regalías? Por qué nunca pensás en mí? MAMÁ! MAMÁ! Mirame! Viste
              qué bien lo hice?! Yo soy el mejor de la clase! Yo y lo sabía, iba
              a responder lo mismo. Lo que pasa es lo siguiente, yo te explico.
              Son todos unos imbéciles, mejor lo hago todo solo. Kiki - 26 años
              <span className="name-qt">Manuel - 25 años</span>
            </p>
          </div>
        </div>
      </div>
      <div className="second-cont-atendeme">
        <h2 className="atendeme-title">Atendeme</h2>
        <div className="atendeme-button">
          <CustomButton
            buttonText={"Participar"}
            firstColor={"#FE6970"}
            secondColor={"#005DA2"}
            thirdColor={"#4590E6"}
            backColor={"#FE6970"}
            border={"solid black"}
            onClick={openPopup}
            width={"235px"}
            height={"55px"}
          />
        </div>
        {showPopup && <Popup isOpen={showPopup} onClose={closePopup} />}
      </div>
    </>
  );
};

export default MiSeccion;
