import { useState } from "react";

export default function Expresiones() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Expresiones de El Picacho",
      toggle: "English",
      sections: [
        {
          id: "arquitectura",
          title: "Arquitectura Viva",
          text: "La arquitectura de El Picacho ha evolucionado con el tiempo, integrando estilos coloniales, republicanos y modernos. Cada ampliación conserva el alma de la casa, usando materiales como el algarrobo y la piedra, para mantener su conexión con el entorno natural."
        },
        {
          id: "arte",
          title: "Arte e Historia",
          text: "El arte en El Picacho no solo decora, sino que narra. La pinacoteca alberga retratos históricos, escenas costumbristas y obras contemporáneas bolivianas. Cada pieza es un puente entre pasado y presente."
        },
        {
          id: "landart",
          title: "Land Art",
          text: "Las instalaciones de Land Art aprovechan el paisaje natural para crear obras efímeras con materiales orgánicos: ramas, piedras, tierra. Son intervenciones poéticas que dialogan con la naturaleza y cambian con las estaciones."
        }
      ]
    },
    en: {
      title: "Expressions of El Picacho",
      toggle: "Español",
      sections: [
        {
          id: "arquitectura",
          title: "Living Architecture",
          text: "El Picacho’s architecture has evolved over time, blending colonial, republican, and modern styles. Each expansion preserves the spirit of the house, using native materials like carob wood and stone to stay rooted in its natural surroundings."
        },
        {
          id: "arte",
          title: "Art and History",
          text: "Art at El Picacho is not just decorative—it tells a story. The art gallery holds historical portraits, scenes of local life, and contemporary Bolivian works. Each piece bridges past and present."
        },
        {
          id: "landart",
          title: "Land Art",
          text: "Land Art installations use the natural landscape to form ephemeral creations from organic materials: branches, stones, earth. These poetic interventions change with the seasons and speak to the land."
        }
      ]
    }
  };

  return (
    <div className="font-sans bg-white text-gray-800 p-6 md:p-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16309e]">{t[lang].title}</h1>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-transparent text-sm md:text-base border border-[#16309e] text-[#16309e] px-4 py-2 rounded hover:bg-[#16309e] hover:text-white transition"
        >
          {t[lang].toggle}
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 mb-8 border-b border-gray-300">
        {t[lang].sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-sm md:text-base px-4 py-2 border-b-2 border-transparent hover:border-[#16309e] transition whitespace-nowrap"
          >
            {section.title}
          </a>
        ))}
      </div>

      {t[lang].sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#16309e]">{section.title}</h2>
          <p className="text-lg text-[#3e484a] max-w-3xl">{section.text}</p>
        </section>
      ))}
    </div>
  );
}
