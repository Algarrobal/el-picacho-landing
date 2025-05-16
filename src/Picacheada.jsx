import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Planifica Tu Visita",
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
          title: "Recorridos culturales e históricos",
          text: `Conoce El Picacho comenzando por el portal anunciado en piedra, siguiendo el paseo de la Verbena hasta la plazoleta de la fuente, flanqueada por la capilla. Desde allí, verás ahí cerca el río Guadalquivir, en cuyas aguas se alza el rocoso Picacho, junto al camposanto familiar.

Luego explorarás la antigua casona con sus dos patios y diversos ambientes: la pinacoteca, la sala paleontológica y arqueológica, y, en lo alto, la oficina del presidente. Del antiguo horno de don Honorio en el segundo patio, pasarás al Huerto Escondido, y de allí a la Santa Cruz de Lajas, donde podrás degustar un refresco del lugar mientras aprecias, desde el mirador, el paisaje de las nacientes del Guadalquivir.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.`,
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido"
        },
        {
          id: "botanico",
          title: "Visitas guiadas por el parque botánico",
          text: `Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies entre ellas los milenarios ginkgo bilobas, liquidámbares, araucarias, y los así llamados árboles de Júpiter, coníferas del parque imperial japonés, alcanfores, y laureles del jardín del Vaticano, que cohabitan con nuestros emblemáticos molles, churquis, y algarrobos.

Cruzando el río tendrás la experiencia de un paseo en montaña del monte originario preservado de la región. En el recorrido te sorprenderán las instalaciones de Land Art las cuales podrás apreciar saboreando un refresco natural del lugar.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.`,
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita"
        },
        {
          id: "sabores",
          title: "Sabores de El Picacho",
          text: `Próximamente.`,
          image: "/picacheada_sabores.jpg",
          button: "Reservar Almuerzo"
        },
        {
          id: "encuentro",
          title: "Lugar de Encuentro y Celebraciones",
          text: `Próximamente.`,
          image: "/picacheada_encuentro.jpg",
          button: "Reservar"
        }
      ]
    },
    en: {
      title: "Arrange Your Visit",
      toggle: "Español",
      nav: [
        { label: "Home", link: "/" },
        { label: "Culture & History", link: "#historia" },
        { label: "The Botanical Park", link: "#botanico" },
        { label: "Flavors of El Picacho", link: "#sabores" },
        { label: "Gatherings & Celebrations", link: "#encuentro" }
      ],
      sections: [
        {
          id: "historia",
          title: "Cultural and historical tours",
          text: `Begin your experience at El Picacho at the stone-marked entrance, continuing down the Verbena walk to the plaza of the fountain, flanked by the chapel. From there, you’ll glimpse the Guadalquivir River, with the rocky Picacho rising beside the family memorial grounds.

You’ll explore the historic manor with its two courtyards and various rooms: the art gallery, the paleontology and archaeology rooms, and, up above, the president’s study. From the old clay oven in the second courtyard, you’ll head to the Hidden Garden and then to the Santa Cruz de Lajas, where you can enjoy a local refreshment while admiring the view of the river’s headwaters.

*If you would like to include a tasting of local pastries or salteñas during the tour, please indicate this when booking.`,
          image: "/picacheada_historia.jpg",
          button: "Book Tour"
        },
        {
          id: "botanico",
          title: "Guided walks through the botanical park",
          text: `Discover the botanical richness surrounding El Picacho. You’ll encounter native and exotic species—from millennia-old ginkgo bilobas and liquidambars to Japanese imperial park conifers, camphor trees, and Vatican laurels—coexisting with local molles, churquis, and algarrobos.

Crossing the river leads you to a preserved woodland trail native to the region. Along the way, you’ll encounter Land Art installations—best appreciated while sipping a fresh drink from the grounds.

*If you would like to include a tasting of local pastries or salteñas during the tour, please indicate this when booking.`,
          image: "/picacheada_botanico.jpg",
          button: "Book Walk"
        },
        {
          id: "sabores",
          title: "Flavors of El Picacho",
          text: `Coming soon.`,
          image: "/picacheada_sabores.jpg",
          button: "Book Lunch"
        },
        {
          id: "encuentro",
          title: "Gatherings and Celebrations",
          text: `Coming soon.`,
          image: "/picacheada_encuentro.jpg",
          button: "Reserve"
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-gray-800 p-6 md:p-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>
        <ul className="flex items-center gap-6 text-sm md:text-base text-[#16309e]">
          {t[lang].nav.map((item, idx) => (
            <li key={idx}>
              <a href={item.link} className="hover:border-b-2 border-current pb-1 transition">
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
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#16309e] mb-12 text-center">
        {t[lang].title}
      </h1>

      {/* Offering Sections */}
      {t[lang].sections.map((section, i) => (
        <div key={i} id={section.id} className="mb-20 flex flex-col md:flex-row gap-8 items-center scroll-mt-24">
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg border border-white"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3 text-[#16309e]">
              {section.title}
            </h2>
            <p className="text-lg mb-4 text-[#3e484a] whitespace-pre-line">
              {section.text}
            </p>
            <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
              {section.button}
            </button>
          </div>
        </div>
      ))}

      {/* Back to Home Button */}
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
