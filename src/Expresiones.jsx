import { useState } from "react";

export default function Expresiones() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Expresiones de El Picacho",
      toggle: "English",
      nav: [
        { label: "Inicio", link: "/" },
        { label: "Land Art", link: "#land-art" },
        { label: "La Pinacoteca", link: "#pinacoteca" },
        { label: "Paleontología", link: "#fosiles" },
        { label: "Arqueología", link: "#arqueologia" },
        { label: "Cantería", link: "#canteria" },
        { label: "Reservas", link: "/picacheada" }
      ]
    },
    en: {
      title: "Expressions of El Picacho",
      toggle: "Español",
      nav: [
        { label: "Home", link: "/" },
        { label: "Land Art", link: "#land-art" },
        { label: "The Art Gallery", link: "#pinacoteca" },
        { label: "Paleontology", link: "#fosiles" },
        { label: "Archaeology", link: "#arqueologia" },
        { label: "Stonework", link: "#canteria" },
        { label: "Bookings", link: "/picacheada" }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a]">
      {/* Header: Logo + Menu */}
      <div className="flex justify-between items-center px-6 md:px-16 pt-6 pb-4 sticky top-0 z-50 bg-white">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>

        <ul className="flex flex-wrap items-center gap-6 text-sm md:text-base text-[#16309e]">
          {t[lang].nav.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className="hover:border-b-2 border-current pb-1 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-sm md:text-base border border-[#16309e] px-4 py-1 rounded hover:bg-[#16309e] hover:text-white transition"
            >
              {t[lang].toggle}
            </button>
          </li>
        </ul>
      </div>

      {/* Page Title */}
      <div className="px-6 md:px-16 pt-6 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#16309e]">
          {t[lang].title}
        </h1>
      </div>

      {/* Sections */}
      {t[lang].nav
        .filter((item) => item.link.startsWith("#"))
        .map((item, i) => {
          const section = t[lang].sections?.find((s) => `#${s.id}` === item.link);
          if (!section) return null;
          return (
            <div key={i} id={section.id} className="mb-20 px-6 md:px-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#16309e]">
                {section.title}
              </h2>
              <p className="text-lg mb-6 whitespace-pre-line">{section.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">Imagen 1</div>
                <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">Imagen 2</div>
                <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">Imagen 3</div>
              </div>
            </div>
          );
        })}

      {/* Back to Home Button */}
      <div className="text-center mt-16 pb-12">
        <a
          href="/"
          className="inline-block px-6 py-2 text-base md:text-lg text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
        >
          ← {lang === "es" ? "Volver al Inicio" : "Back to Home"}
        </a>
      </div>
    </div>
  );
}
