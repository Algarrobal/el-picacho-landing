import { useState } from "react";

export default function Expresiones() {
  const [lang, setLang] = useState("es");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        { label: "Reservas", link: "/picacheada", color: "#c00093" }
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
        { label: "Bookings", link: "/picacheada", color: "#c00093" }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a] px-4 sm:px-6 md:px-16 py-8 md:py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-50">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
          {t[lang].nav.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className={`hover:border-b-2 border-current pb-1 transition ${
                  item.color ? "text-[#c00093]" : "text-[#16309e]"
                }`}
              >
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-[#16309e] focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded shadow-md p-4 text-sm space-y-3 w-52">
            {t[lang].nav.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                className={`block hover:underline ${
                  item.color ? "text-[#c00093]" : "text-[#16309e]"
                }`}
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

      {/* The rest of Expresiones.jsx remains unchanged */}
    </div>
  );
}
