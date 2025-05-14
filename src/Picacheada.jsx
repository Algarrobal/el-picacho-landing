import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      pageTitle: "Planifica Tu Picacheada",
      sections: [
        {
          id: "recorridos",
          title: "Recorridos culturales e históricos",
          text: `Explora los rincones más emblemáticos de El Picacho a través de recorridos guiados que entrelazan historia y paisaje. Camina por patios centenarios, escucha relatos de lucha democrática y descubre vestigios coloniales que han dado forma a este espacio vivo.`,
          button: "Reservar recorrido"
        },
        {
          id: "visitas",
          title: "Visitas guiadas por el parque botánico",
          text: `Sumérgete en una experiencia sensorial en medio de un jardín donde conviven especies nativas y exóticas. Acompañado por guías conocedores del lugar, podrás descubrir la historia vegetal del Picacho y sus relaciones simbólicas con la cultura local.`,
          button: "Reservar visita"
        },
        {
          id: "sabores",
          title: "Sabores de El Picacho",
          text: `Disfruta de una comida de campo preparada con ingredientes locales, servida en los patios de la casona histórica. Cada plato cuenta una historia, cada bocado evoca un terruño. Una experiencia gastronómica con alma y raíz.`,
          button: "Reservar almuerzo"
        }
      ],
      languageToggle: "English"
    },
    en: {
      pageTitle: "Arrange Your Visit",
      sections: [
        {
          id: "recorridos",
          title: "Cultural and Historical Tours",
          text: `Explore the emblematic corners of El Picacho through guided walks that weave together history and landscape. Wander through century-old courtyards, hear stories of democratic struggle, and uncover colonial traces that have shaped this living space.`,
          button: "Book tour"
        },
        {
          id: "visitas",
          title: "Guided Botanical Park Visits",
          text: `Immerse yourself in a sensory experience amid a garden where native and exotic species coexist. With guides deeply familiar with the site, you'll uncover El Picacho’s botanical stories and the cultural symbolism rooted in its plants.`,
          button: "Book visit"
        },
        {
          id: "sabores",
          title: "Flavors of El Picacho",
          text: `Enjoy a countryside meal made with local ingredients, served in the historic manor’s patios. Each dish tells a story, each bite evokes the land. A gastronomic experience grounded in soul and soil.`,
          button: "Book lunch"
        }
      ],
      languageToggle: "Español"
    }
  };

  return (
    <div className="font-sans text-gray-800 p-6 md:p-12 bg-white">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16309e]">
          {t[lang].pageTitle}
        </h1>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="text-sm border border-[#16309e] px-4 py-1 rounded hover:bg-[#16309e] hover:text-white transition"
        >
          {t[lang].languageToggle}
        </button>
      </div>

      {t[lang].sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="mb-16 scroll-mt-20 border-t border-[#16309e]/15 pt-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#16309e] mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-[#3e484a] mb-4 whitespace-pre-line">
            {section.text}
          </p>
          <div className="h-64 bg-gray-200 rounded-lg shadow-inner mb-4 flex items-center justify-center text-gray-500 italic">
            [Imagen para "{section.title}"]
          </div>
          <button className="px-6 py-2 text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
            {section.button}
          </button>
        </div>
      ))}
    </div>
  );
}
