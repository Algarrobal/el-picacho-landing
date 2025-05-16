import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Planifica Tu Visita",
      toggle: "English",
      nav: [
        "Cultura e Historia",
        "El Botánico",
        "Sabores del Picacho",
        "Encuentro y Celebraciones"
      ],
      sections: [
        {
          id: "historia",
          title: "Recorridos culturales e históricos",
          text: `Conoce El Picacho comenzando por el portal anunciado en piedra, siguiendo el paseo de la Verbena hasta la plazoleta de la fuente, flanqueada por la capilla. Desde allí, verás ahí cerca el río Guadalquivir, en cuyas aguas se alza el rocoso Picacho, junto al camposanto familiar.

Luego explorarás la antigua casona con sus dos patios y diversos ambientes: la pinacoteca, la sala paleontológica y arqueológica, y, en lo alto, la oficina del presidente. Del antiguo horno de don Honorio en el segundo patio, pasarás al Huerto Escondido, y de allí a la Santa Cruz de Lajas, donde podrás degustar un refresco del lugar mientras aprecias, desde el mirador, el paisaje de las nacientes del Guadalquivir.`,
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido"
        },
        {
          id: "botanico",
          title: "Visitas guiadas por el parque botánico",
          text: `Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies entre ellas los milenarios ginkgo bilobas, liquidámbares, araucarias, y los así llamados árboles de Júpiter, coníferas del parque imperial japonés, alcanfores, y laureles del jardín del Vaticano, que cohabitan con nuestros emblemáticos molles, churquis, y algarrobos.

Cruzando el río tendrás la experiencia de un paseo en montaña del monte originario preservado de la región. En el recorrido te sorprenderán las instalaciones de Land Art las cuales podrás apreciar saboreando un refresco natural del lugar.`,
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita"
        },
        {
          id: "sabores",
          title: "Sabores de El Picacho",
          text: `Almuerza donde el plato se sirve con historia. En el comedor de la casona se ofrecen menús locales con ingredientes del huerto, en un entorno íntimo y natural.`,
          image: "/picacheada_sabores.jpg",
          button: "Reservar Almuerzo"
        },
        {
          id: "celebraciones",
          title: "Lugar de Encuentro y Celebraciones",
          text: `Espacio ideal para celebrar ocasiones especiales con identidad y encanto. Desde reuniones familiares hasta eventos culturales, El Picacho ofrece rincones inolvidables que combinan historia, paisaje y hospitalidad.`,
          image: "/picacheada_celebraciones.jpg",
          button: "Reservar Espacio"
        }
      ]
    },
    en: {
      title: "Arrange Your Visit",
      toggle: "Español",
      nav: [
        "Cultural & Historical",
        "The Botanical Walk",
        "Flavors of El Picacho",
        "Gatherings & Celebrations"
      ],
      sections: [
        {
          id: "historia",
          title: "Cultural and historical tours",
          text: `Begin your visit at the stone-marked entrance, follow the Verbena path to the plaza and chapel, where the Guadalquivir River and the family memorial grounds come into view.

You’ll then explore the manor house, its two courtyards, and various rooms including the art gallery, paleontology and archaeology displays, and—perched above—the former president’s office. From the old adobe oven in the back patio, you’ll continue to the hidden orchard and the Santa Cruz de Lajas lookout, where you’ll enjoy a local refreshment with sweeping views of the river’s headwaters.`,
          image: "/picacheada_historia.jpg",
          button: "Book Tour"
        },
        {
          id: "botanico",
          title: "Guided walks through the botanical park",
          text: `Discover native and exotic species—from ginkgo bilobas and sweetgums to imperial cypresses, laurels, and molles—all thriving in this living mosaic of biodiversity.

Across the river lies a preserved patch of native woodland, offering a deeper ecological connection. Along the way, you’ll also encounter Land Art installations, complemented by a natural drink from the garden.`,
          image: "/picacheada_botanico.jpg",
          button: "Book Walk"
        },
        {
          id: "sabores",
          title: "Flavors of El Picacho",
          text: `Dine where midday meals are steeped in history. Seasonal menus crafted with local produce are served in the manor’s shaded courtyard.`,
          image: "/picacheada_sabores.jpg",
          button: "Book Lunch"
        },
        {
          id: "celebraciones",
          title: "Gatherings & Celebrations",
          text: `The perfect venue for family gatherings and cultural events. El Picacho offers meaningful spaces for celebration, where history and nature elevate every occasion.`,
          image: "/picacheada_celebraciones.jpg",
          button: "Book Event"
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a]">
      {/* Sticky nav */}
      <header className="sticky top-0 bg-white z-50 flex flex-wrap items-center justify-between px-6 md:px-16 py-4 border-b border-[#16309e]/15">
        <a
          href="/"
          className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline"
        >
          El Picacho
        </a>
        <nav className="flex flex-wrap items-center gap-6 text-[#16309e] text-sm md:text-base">
          {t[lang].sections.map((section, idx) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:border-b-2 border-current pb-1 transition"
            >
              {t[lang].nav[idx]}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1 border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
          >
            {t[lang].toggle}
          </button>
        </nav>
      </header>

      {/* Title */}
      <div className="text-center px-6 md:px-16 pt-12 md:pt-20 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#16309e]">{t[lang].title}</h1>
      </div>

      {/* Sections */}
      <div className="px-6 md:px-16 pb-16">
        {t[lang].sections.map((section, i) => (
          <div key={i} id={section.id} className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#16309e]">{section.title}</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-full md:w-1/2 rounded-lg shadow-md border border-white"
              />
              <div className="md:w-1/2">
                <p className="text-lg mb-4 whitespace-pre-line">{section.text}</p>
                <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
                  {section.button}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-block px-6 py-2 text-base md:text-lg text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
          >
            ← {lang === "es" ? "Volver al Inicio" : "Back to Home"}
          </a>
        </div>
      </div>
    </div>
  );
}
