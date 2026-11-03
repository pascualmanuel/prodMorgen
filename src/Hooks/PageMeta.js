import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Morgenstern";

const DEFAULT_META = {
  title: SITE_NAME,
  description:
    "Morgenstern es un ensayo artístico sobre cómo nos vinculamos con lxs otrxs, el mundo y la información. Obras, juegos interactivos, comunidad y más.",
};

const PAGE_META = {
  "/": DEFAULT_META,
  "/yomorgenstern": {
    title: "Yo, Morgenstern",
    description:
      "Un único dibujo, un único modelo: hombres inalterables, inexpresivos, inalámbricos. Conocé el origen y el concepto detrás de Morgenstern.",
  },
  "/obras": {
    title: "Obras",
    description:
      "Conexión inestable, Inadvertido, Desnudos, Estampas y más: las series de Morgenstern en composiciones digitales, pintura, fotomontaje y grabado.",
  },
  "/comunidad": {
    title: "Comunidad",
    description:
      "Obras colaborativas, talleres y eventos para expandir el universo Morgenstern. Sumate a la comunidad y apoyá el proyecto.",
  },
  "/agenda": {
    title: "Fechas",
    description:
      "La historia de Morgenstern: desde el primer dibujo hasta el Mecenazgo Cultural de la Ciudad de Buenos Aires, series, muestras y lo que viene.",
  },
  "/interactivo": {
    title: "Interactivo",
    description:
      "Juegos y experiencias interactivas con Morgenstern. Jugá, tocá y descubrí el universo de Morgen desde otro lado.",
  },
  "/revista": {
    title: "La revista",
    description:
      "La revista de Morgenstern: textos, imágenes y fanzines que amplían el universo del proyecto.",
  },
  "/gallery": {
    title: "Galería",
    description:
      "Fotografías, máscaras, VJ y obras de la comunidad que se apropia de Morgenstern. Participá con la tuya.",
  },
  "/atendeme": {
    title: "Atendeme",
    description:
      "Atendeme: una obra de Morgenstern sobre la atención, las redes y la comunicación. Participá.",
  },
};

// Updates <title> and <meta name="description"> on every route change.
// Google renders JS, so it sees these per page. Social previews (WhatsApp,
// Facebook, X) don't run JS and use the static tags in public/index.html.
const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const meta = PAGE_META[path] || DEFAULT_META;

    document.title =
      meta.title === SITE_NAME ? SITE_NAME : `${meta.title} | ${SITE_NAME}`;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", meta.description);
  }, [pathname]);

  return null;
};

export default PageMeta;
