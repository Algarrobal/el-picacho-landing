import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: (
        <>
          Planifica Tu <span className="text-[#c00093]">Visita</span>
        </>
      ),
      toggle: "English",
      sections: [
        {
          id: "historia",
          title: (
            <>
              Recorridos <span className="text-[#c00093]">culturales</span> e históricos
            </>
          ),
          text: "Conoce El Picacho comenzando por el portal anunciado en piedra, siguiendo el paseo de la Verbena hasta la plazoleta de la fuente, flanqueada por la capilla. Desde allí, verás ahi cerca el río Guadalquivir, en cuyas aguas se alza el rocoso Picacho, junto al camposanto familiar.\n\nLuego explorarás la antigua casona con sus dos patios y diversos ambientes: la pinacoteca, la sala paleontológica y arqueológica, y, en lo alto, la oficina del presidente. Del antiguo horno de don Honorio en el segundo patio, pasarás al Huerto Escondido, y de allí a la Santa Cruz de Lajas, donde podrás degustar un refresco del lugar mientras aprecias, desde el mirador, el paisaje de las nacientes del Guadalquivir.\n\n*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.",
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido"
        },
        {
          id: "botanico",
          title: (
            <>
              Visitas guiadas por el parque <span className="text-[#c00093]">botánico</span>
            </>
          ),
          text: "Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies entre ellas los milenarios ginkgo bilobas, liquidámbares, araucarias, y los así llamados árboles de Júpiter, coníferas del parque imperial japonés, alcanfores, y laureles del jardín del Vaticano, que cohabitan con nuestros emblemáticos molles, churquis, y algarrobos. Cruzando el río tendrás la experiencia de un paseo en montaña del monte originario preservado de la región. En el recorrido te sorprenderán las instalaciones de Land Art las cuales podrás apreciar saboreando un refresco natural del lugar.\n\n*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.",
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita"
        },
        {
          id: "sabores",
          title: (
            <>
              <span className="text-[#c00093]">Sabores</span> de El Picacho
            </>
          ),
          text: `Culmina tu visita con un menú de historia, y naturaleza de platos criollos, y pescado del Pilcomayo a la brasa. La experiencia se acompaña de bebidas y refrescos de la cultura local y de vinos y singanis de la bodega del presidente. \n\nEste servicio require de reserva previa de 48 horas.`,
          image: "/picacheada_sabores.jpg",
          button: "Reservar Almuerzo"
        },
        {
          id: "encuentro",
          title: (
            <>
              Lugar de <span className="text-[#c00093]">Encuentro</span> y Celebraciones
            </>
          ),
          text: "Celebra momentos especiales en un entorno lleno de historia y naturaleza. Este espacio está disponible para encuentros familiares, bodas íntimas, y eventos culturales, con la posibilidad de incorporar recorridos, música en vivo y degustaciones según la ocasión.",
          image: "/picacheada_encuentro.jpg",
          button: "Reservar Evento"
        }
      ]
    },
    en: {
      title: "Arrange Your Visit",
      toggle: "Español",
      sections: [
        {
          title: "Cultural and historical tours",
          text: "Take a guided walk through El Picacho’s history—from the days of the Montoneras to the democratic movement. Local stories bring each corner to life.",
          image: "/picacheada_historia.jpg",
          button: "Book Tour"
        },
        {
          title: "Guided walks through the botanical park",
          text: "Discover native and exotic species in a botanical walk that awakens the senses. Learn how this unique garden was shaped over decades.",
          image: "/picacheada_botanico.jpg",
          button: "Book Walk"
        },
        {
          title: "Flavors of El Picacho",
          text: "Dine where midday meals are steeped in history. Seasonal menus crafted with local produce are served in the manor’s shaded courtyard.",
          image: "/picacheada_sabores.jpg",
          button: "Book Lunch"
        },
        {
          title: "Gatherings and Celebrations",
          text: "Celebrate special moments in a historic setting. This space is available for family gatherings, intimate weddings, and cultural events, with options for guided walks, live music, and tastings.",
          image: "/picacheada_encuentro.jpg",
          button: "Book Event"
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a] px-4 sm:px-6 md:px-16 py-8 md:py-16">
      <div className="flex justify-between items-center mb-12">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>
        <ul className="flex items-center gap-6 text-sm md:text-base">
          <li>
            <a href="/" className="text-[#16309e] hover:underline">
              Inicio
            </a>
          </li>
          {lang === "es" && (
            <>
              <li><a href="#historia" className="text-[#16309e] hover:underline">Cultura e Historia</a></li>
              <li><a href="#botanico" className="text-[#16309e] hover:underline">El Botánico</a></li>
              <li><a href="#sabores" className="text-[#16309e] hover:underline">Sabores del Picacho</a></li>
              <li><a href="#encuentro" className="text-[#16309e] hover:underline">Encuentro y Celebraciones</a></li>
            </>
          )}
          <li>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="border border-[#16309e] px-4 py-1 rounded hover:bg-[#16309e] hover:text-white transition"
            >
              {t[lang].toggle}
            </button>
          </li>
        </ul>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-[#16309e] mb-12 text-center">
        {t[lang].title}
      </h1>

      {t[lang].sections.map((section, i) => (
        <div key={i} id={section.id} className="mb-20 scroll-mt-24 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg border border-white"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3 text-[#16309e]">
              {section.title}
            </h2>
            <p className="text-lg mb-4 whitespace-pre-line">{section.text}</p>
            <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
              {section.button}
            </button>
          </div>
        </div>
      ))}

      <div className="text-center mt-16 pb-12">
        <a
          href="/"
          className="inline-block px-6 py-2 text-base md:text-lg text-[#c00093] border border-[#c00093] rounded hover:bg-[#c00093] hover:text-white transition"
        >
          ← {lang === "es" ? "Volver al Inicio" : "Back to Home"}
        </a>
      </div>
    </div>
  );
}
