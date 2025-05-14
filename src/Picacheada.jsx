import { useState } from "react";

export default function Picacheada() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Planifica Tu Visita",
      toggle: "English",
      sections: [
        {
          title: "Recorridos culturales e históricos",
          text: "Explora los rincones de El Picacho con una caminata guiada por su historia: desde las montoneras hasta la democracia. Acompañado por relatos íntimos del lugar, cada paso es una inmersión en el pasado.",
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido"
        },
        {
          title: "Visitas guiadas por el parque botánico",
          text: "Descubre especies nativas y exóticas en un paseo botánico que despierta los sentidos. Observa la convivencia armónica de la flora bajo la guía de quienes la han cultivado con esmero.",
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita"
        },
        {
          title: "Sabores de El Picacho",
          text: "Almuerza donde el plato se sirve con historia. En el comedor de la casona se ofrecen menús locales con ingredientes del huerto, en un entorno íntimo y natural.",
          image: "/picacheada_sabores.jpg",
          button: "Reservar Almuerzo"
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
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-gray-800 p-6 md:p-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16309e]">
          {t[lang].title}
        </h1>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-transparent text-sm md:text-base border border-gray-800 px-4 py-2 rounded hover:bg-gray-100"
        >
          {t[lang].toggle}
        </button>
      </div>

      {t[lang].sections.map((section, i) => (
        <div
          key={i}
          className="mb-20 flex flex-col md:flex-row gap-8 items-center"
        >
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg border border-white"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3 text-[#16309e]">
              {section.title}
            </h2>
            <p className="text-lg mb-4 text-[#3e484a]">{section.text}</p>
            <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
              {section.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
