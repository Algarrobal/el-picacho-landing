import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    es: {
      title: (
        <>
          Planifica Tu <span className="text-[#c00093]">Visita</span>
        </>
      ),
      toggle: "English",
      nav: [
        { label: "Inicio", link: "/" },
        { label: "Cultura e Historia", link: "#historia" },
        { label: "El Botánico", link: "#botanico" },
        { label: "Sabores del Picacho", link: "#sabores" },
        { label: "Encuentro y Celebraciones", link: "#encuentro" }
      ],
      sections: [
        {
          id: "historia",
          title: (
            <>
              Recorridos <span className="text-[#c00093]">culturales</span> e históricos
            </>
          ),
          text: `Conoce El Picacho comenzando por el portal anunciado en piedra, siguiendo el paseo de la Verbena hasta la plazoleta de la fuente, flanqueada por la capilla. Desde allí, verás ahi cerca el río Guadalquivir, en cuyas aguas se alza el rocoso Picacho, junto al camposanto familiar.

Luego explorarás la antigua casona con sus dos patios y diversos ambientes: la pinacoteca, la sala paleontológica y arqueológica, y, en lo alto, la oficina del presidente. Del antiguo horno de don Honorio en el segundo patio, pasarás al Huerto Escondido, y de allí a la Santa Cruz de Lajas, donde podrás degustar un refresco del lugar mientras aprecias, desde el mirador, el paisaje de las nacientes del Guadalquivir.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.`,
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
          text: `Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies entre ellas los milenarios ginkgo bilobas, liquidámbares, araucarias, y los así llamados árboles de Júpiter, coníferas del parque imperial japonés, alcanfores, y laureles del jardín del Vaticano, que cohabitan con nuestros emblemáticos molles, churquis, y algarrobos. Cruzando el río tendrás la experiencia de un paseo en montaña del monte originario preservado de la región. En el recorrido te sorprenderán las instalaciones de Land Art las cuales podrás apreciar saboreando un refresco natural del lugar.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.`,
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
          text: `Culmina tu visita con un menú de historia, y naturaleza de platos criollos, y pescado del Pilcomayo a la brasa. La experiencia se acompaña de bebidas y refrescos de la cultura local y de vinos y singanis de la bodega del presidente. 

Este servicio require de reserva previa de 48 horas.`,
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
          text: `Celebra momentos especiales en un entorno lleno de historia y naturaleza. Este espacio está disponible para encuentros familiares, bodas íntimas, y eventos culturales, con la posibilidad de incorporar recorridos, música en vivo y degustaciones según la ocasión.`,
          image: "/picacheada_encuentro.jpg",
          button: "Reservar Evento"
        }
      ]
    },
    en: {
      title: "Arrange Your Visit",
      toggle: "Español",
      nav: [
        { label: "Home", link: "/" },
        { label: "Culture & History", link: "#historia" },
        { label: "Botanical Walk", link: "#botanico" },
        { label: "Flavors of El Picacho", link: "#sabores" },
        { label: "Gatherings & Events", link: "#encuentro" }
      ],
      sections: [
        {
          title: (
  <>
    <span className="text-[#c00093]">Cultural</span> and Historical Visits
  </>
),
text: `Begin your visit at the stone-carved portal and follow the Verbena path to the fountain plaza flanked by the chapel.

Then, explore the old manor with its two courtyards and various spaces: the art gallery, the paleontology and archaeology rooms, and, upstairs, the President’s study. From the traditional oven in the second courtyard, continue to the Hidden Garden, and finally to the Santa Cruz de Lajas lookout, where you can enjoy a local refreshment while admiring the view of the Guadalquivir’s headwaters.

*If you wish to include a tasting of local pastries or salteñas during the tour, please indicate this when booking.`
          image: "/picacheada_historia.jpg",
          button: "Book Tour"
        },
        {
  id: "botanico",
  title: (
    <>
      Guided Walks through the <span className="text-[#c00093]">Botanical</span> Garden
    </>
  ),
  text: `Discover the richness of the botanical surroundings at El Picacho. You'll encounter a variety of species, including millenary ginkgo bilobas, sweetgums, araucarias, and the so-called Jupiter trees, Japanese imperial conifers, camphor trees, and laurels from the Vatican Gardens — all coexisting with emblematic native trees like molles, churquis, and algarrobos.

Crossing the river, you'll experience a walk through a preserved patch of original woodland. Along the way, you'll be surprised by Land Art installations that you can enjoy while sipping a natural local refreshment.

*If you wish to include a tasting of local pastries or salteñas during the tour, please indicate this when booking.`,
  image: "/picacheada_botanico.jpg",
  button: "Book Walk"
},
        {
  id: "sabores",
  title: (
    <>
      <span className="text-[#c00093]">Flavors</span> of El Picacho
    </>
  ),
  text: `Cap off your visit with a menu rooted in history and nature, featuring traditional criollo dishes and grilled fish from the Pilcomayo River. The experience includes local drinks and refreshments, as well as wines and singanis from the President’s cellar.

This service requires a 48-hour advance reservation.`,
  image: "/picacheada_sabores.jpg",
  button: "Book Lunch"
},
        {
  id: "encuentro",
  title: (
    <>
      <span className="text-[#c00093]">Gatherings</span> and Celebrations
    </>
  ),
  text: `Celebrate meaningful moments in a setting full of history and nature. This space is available for family gatherings, intimate weddings, and cultural events — with the option to include guided tours, live music, and tastings suited to the occasion.`,
  image: "/picacheada_encuentro.jpg",
  button: "Book Event"
}
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a] px-4 sm:px-6 md:px-16 py-8 md:py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
          {t[lang].nav.map((item, idx) => (
            <li key={idx}>
              <a href={item.link} className="text-[#16309e] hover:underline">
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

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-[#16309e]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mb-8 text-sm bg-white border rounded shadow px-4 py-3 space-y-2">
          {t[lang].nav.map((item, idx) => (
            <div key={idx}>
              <a
                href={item.link}
                className="block text-[#16309e] hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </div>
          ))}
          <button
            onClick={() => {
              setLang(lang === "es" ? "en" : "es");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left border border-[#16309e] px-3 py-2 rounded hover:bg-[#16309e] hover:text-white transition"
          >
            {t[lang].toggle}
          </button>
        </div>
      )}

      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#16309e] mb-12 text-center">{t[lang].title}</h1>

      {/* Section Cards */}
      {t[lang].sections.map((section, i) => (
        <div key={i} id={section.id} className="mb-20 scroll-mt-24 flex flex-col md:flex-row gap-8 md:items-start items-center">
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg border border-white"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3 text-[#16309e]">{section.title}</h2>
            <p className="text-lg mb-4 whitespace-pre-line">{section.text}</p>
            <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
              {section.button}
            </button>
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
