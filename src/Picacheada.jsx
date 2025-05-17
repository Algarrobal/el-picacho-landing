import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    es: {
      title: "Planifica Tu Visita",
      toggle: "English",
      nav: [
        { label: "Inicio", link: "/" },
        { label: "Cultura e Historia", link: "#historia" },
        { label: "El Botánico", link: "#botanico" },
        { label: "Sabores del Picacho", link: "#sabores" },
        { label: "Encuentro y Celebraciones", link: "#celebraciones" }
      ],
      sections: [
        {
          id: "historia",
          title: "Recorridos culturales e históricos",
          text: `Conoce El Picacho comenzando por el portal anunciado en piedra, siguiendo el paseo de la Verbena hasta la plazoleta de la fuente, flanqueada por la capilla. Desde allí, verás ahi cerca el río Guadalquivir, en cuyas aguas se alza el rocoso Picacho, junto al camposanto familiar.

Luego explorarás la antigua casona con sus dos patios y diversos ambientes: la pinacoteca, la sala paleontológica y arqueológica, y, en lo alto, la oficina del presidente. Del antiguo horno de don Honorio en el segundo patio, pasarás al Huerto Escondido, y de allí a la Santa Cruz de Lajas, donde podrás degustar un refresco del lugar mientras aprecias, desde el mirador, el paisaje de las nacientes del Guadalquivir.`,
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido",
          note: "*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva."
        },
        {
          id: "botanico",
          title: "Visitas guiadas por el parque botánico",
          text: `Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies entre ellas los milenarios ginkgo bilobas, liquidámbares, araucarias, y los así llamados árboles de Júpiter, coníferas del parque imperial japonés, alcanfores, y laureles del jardín del Vaticano, que cohabitan con nuestros emblemáticos molles, churquis, y algarrobos.

Cruzando el río tendrás la experiencia de un paseo en montaña del monte originario preservado de la región. En el recorrido te sorprenderán las instalaciones de Land Art las cuales podrás apreciar saboreando un refresco natural del lugar.`,
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita",
          note: "*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva."
        },
        {
          id: "sabores",
          title: "Sabores de El Picacho",
          text: "Almuerza donde el plato se sirve con historia. En el comedor de la casona se ofrecen menús locales con ingredientes del huerto, en un entorno íntimo y natural.",
          image: "/picacheada_sabores.jpg",
          button: "Reservar Almuerzo"
        },
        {
          id: "celebraciones",
          title: "Lugar de Encuentro y Celebraciones",
          text: "Celebra momentos especiales en un entorno natural con historia. Este espacio está disponible para eventos privados y encuentros culturales. Contáctanos para reservar.",
          image: "/picacheada_celebraciones.jpg",
          button: "Reservar"
        }
      ]
    },
    en: {
      title: "Arrange Your Visit",
      toggle: "Español",
      nav: [
        { label: "Home", link: "/" },
        { label: "History & Culture", link: "#historia" },
        { label: "Botanical Walk", link: "#botanico" },
        { label: "Flavors of El Picacho", link: "#sabores" },
        { label: "Gatherings & Celebrations", link: "#celebraciones" }
      ],
      sections: [
        {
          id: "historia",
          title: "Cultural and historical tours",
          text: "Take a guided tour starting at the stone-marked entrance, through the Verbena path and fountain plaza by the chapel. From there, glimpse the Guadalquivir River and the iconic rocky Picacho beside the family memorial grounds. Explore the manor’s two patios and spaces like the gallery, paleontology room, archaeology alcove, and the President’s study. Continue through the old oven, the hidden orchard, and end with refreshments at the Santa Cruz de Lajas viewpoint.",
          image: "/picacheada_historia.jpg",
          button: "Book Tour",
          note: "*If you'd like to include local pastries or salteñas during your tour, please let us know at booking."
        },
        {
          id: "botanico",
          title: "Guided walks through the botanical park",
          text: "Discover a living mosaic of native and exotic species: ancient ginkgos, liquidambars, araucarias, laurels from the Vatican gardens, and molles, churquis, and algarrobos from the region. Cross the river to explore native mountain woodland. Along the way, enjoy Land Art installations and natural refreshments.",
          image: "/picacheada_botanico.jpg",
          button: "Book Walk",
          note: "*If you'd like to include local pastries or salteñas during your walk, please let us know at booking."
        },
        {
          id: "sabores",
          title: "Flavors of El Picacho",
          text: "Dine where every dish tells a story. Seasonal menus are served in the manor’s dining room, featuring garden-grown ingredients in an intimate, natural setting.",
          image: "/picacheada_sabores.jpg",
          button: "Book Lunch"
        },
        {
          id: "celebraciones",
          title: "Gatherings and Celebrations",
          text: "Host your event in a unique natural and historic setting. This space is ideal for private celebrations, cultural encounters, or retreats. Contact us to reserve.",
          image: "/picacheada_celebraciones.jpg",
          button: "Reserve"
        }
      ]
    }
  };

  return (
    <div className="font-sans bg-white text-[#3e484a] px-4 sm:px-6 md:px-16 py-8 md:py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 relative z-50">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
          {t[lang].nav.map((item, idx) => (
            <li key={idx}>
              <a href={item.link} className="hover:border-b-2 border-current pb-1 text-[#16309e] transition">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="border border-[#16309e] px-4 py-1 rounded hover:bg-[#16309e] hover:text-white transition"
            >
              {t[lang].toggle}
            </button>
          </li>
        </ul>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-2xl text-[#16309e]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded shadow-md p-4 text-sm space-y-3 w-52">
            {t[lang].nav.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#16309e] hover:underline"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setLang(lang === "es" ? "en" : "es");
                setMobileMenuOpen(false);
              }}
              className="w-full border border-[#16309e] px-3 py-2 rounded hover:bg-[#16309e] hover:text-white transition"
            >
              {t[lang].toggle}
            </button>
          </div>
        )}
      </div>

      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#16309e] mb-12 text-center">
        {t[lang].title}
      </h1>

      {/* Sections */}
      {t[lang].sections.map((section, i) => (
        <div key={i} id={section.id} className="mb-20 scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-lg shadow-md border border-white object-cover h-64"
            />
            <div className="md:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#16309e]">{section.title}</h2>
              <p className="text-base sm:text-lg mb-4 whitespace-pre-line">{section.text}</p>
              {section.note && (
                <p className="text-sm italic text-[#3e484a] mb-4">{section.note}</p>
              )}
              <button className="px-6 py-2 text-base text-[#c00093] border border-[#c00093] rounded hover:bg-[#c00093] hover:text-white transition">
                {section.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Back Button */}
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
