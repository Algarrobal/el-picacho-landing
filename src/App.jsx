import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 

  
  const t = {
    es: {
      title: "El Picacho",
      subtitle: "Historia, Naturaleza y Democracia",
      subsubtitle: "en el Sur de Bolivia",
      tagline: "Una casona del 1800 en un parque botánico sobre\nla cuenca alta del río Guadalquivir.",
      historyTitle: (
        <>
          Un <span className="text-[#c00093]">Terruño</span> con Historia
        </>
      ),
      historyText: `Lugar en el que combatieron las “Montoneras” libertarias comandadas por el líder patriota Eustaquio “Moto” Mendez miembro de la familia Mendez Arenas, habitante primera de la Casona. En el siglo XXI se avecindó en ella la familia Paz Zamora comprometida en la lucha contra el golpismo militar boliviano y la instauración de la democracia. Con vocación ecológica inicia la construcción del parque botánico.

La casona, rodeada de cipreses, se encuentra en lo alto de un desfiladero cavado por el rio, en medio de cuyas aguas surge un peñón en forma de pico que desde siempre el paisanaje lo denominó “El Picacho”, que con el tiempo le dio nombre al lugar. El Picacho es una “Salamanca" nombre que la gente da a los socavones que el agua pule en su seno, y que según mitología popular, es donde habitan los diablos. El asentamiento es de finales de la colonia, a su entrada una fuente de agua en piedra, zaguán con gruesos dinteles de madera de algarrobo, dos patios, capilla, campanario, y molino de dos bocas. Sus paredes son de un blanco luminoso y sus ventanas azul añil. Y cubriendo el conjunto un tejado ocre de tintes anaranjados.

En la Bolivia de hoy El Picacho expresa identidad e historia nacionales, desde la colonia, la independencia, la república hasta la democracia que se construye hoy.`,
      botanicTitle: (
        <>
          Parque <span className="text-[#c00093]">Botánico</span>: Unidad biológica, en la diversidad…
        </>
      ),
      botanicText: `El botánico es un mestizaje biológico. Las especies nativas del lugar conviven con especies originarias llegadas de otros microclimas, algunos muy lejanos. Los churquis, algarrobos, tipas, chañares o toborochis por ejemplo, cohabitan con cipreses mediterráneos, coníferas japonesas, araucarias patagónicas, robles americanos y europeos, liquidámbares del hemisferio norte, alamos tulipán, y gingko bilobas del Asia, entre otras. Esta ultima es milenaria, considerada un dinosaurio, o fósil viviente vegetal. Se dice de ella que sobrevivió a unos centenares de metros a la bomba atómica lanzada en Hiroshima.`,
      visitTitle: (
        <>
          Planifica Tu <span className="text-[#c00093]">Visita</span>
        </>
      ),
      offerings: [
        "Recorridos culturales e históricos",
        "Visitas guiadas por el parque botánico",
        "Sabores de El Picacho - Donde el menú es con historia y naturaleza",
        "Lugar de Encuentro y Celebraciones"
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    }
  };

  const navItems = [
    { label: "Historia", href: "#historia" },
    { label: "Botánico", href: "#botanico" },
    { label: "Visítanos", href: "#visitanos" },
    { label: "Rincones", href: "/expresiones" },
    { label: "Reservas", href: "/picacheada" }
  ];

  const images = Array.from({ length: 15 }, (_, i) => `mosaico_${String(i + 1).padStart(2, "0")}.jpg`);

  return (
    <div className="font-sans text-[#3e484a]">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}
      >

{/* Navigation */}
<nav className="absolute top-4 left-4 right-4 flex justify-between items-center z-50">
  {/* Logo */}
  <a href="/" className="text-white text-xl md:text-2xl font-bold hover:opacity-90 transition">
    El Picacho
  </a>

  {/* Desktop Nav */}
  <ul className="hidden md:flex gap-6 text-white text-sm md:text-base">
    {navItems.map(({ label, href }) => (
      <li key={label}>
        <a href={href} className="hover:border-b border-white pb-1 transition">
          {label}
        </a>
      </li>
    ))}
    <li>
      <button
        onClick={() => setLang(lang => (lang === "es" ? "en" : "es"))}
        className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
      >
        English
      </button>
    </li>
  </ul>

  {/* Mobile Hamburger */}
  <button
    className="md:hidden text-white text-2xl focus:outline-none"
    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
    aria-label="Toggle Menu"
  >
    ☰
  </button>
</nav>

{/* Mobile Dropdown Menu */}
{isMobileMenuOpen && (
  <div className="absolute top-20 left-4 right-4 z-40 bg-white text-[#16309e] rounded shadow-lg p-4 space-y-4 text-sm">
    {navItems.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className="block hover:underline"
        onClick={() => setMobileMenuOpen(false)}
      >
        {label}
      </a>
    ))}
    <button
      onClick={() => {
        setLang(lang => (lang === "es" ? "en" : "es"));
        setMobileMenuOpen(false);
      }}
      className="block w-full text-left border border-[#16309e] px-3 py-2 rounded hover:bg-[#16309e] hover:text-white transition"
    >
      English
    </button>
  </div>
)}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.es.title}</h1>
          <h2 className="text-2xl md:text-3xl text-white mb-2">{t.es.subtitle}</h2>
          <h3 className="text-2xl md:text-3xl text-white mb-2">{t.es.subsubtitle}</h3>
          <p className="text-white text-base md:text-lg whitespace-pre-line mt-4">{t.es.tagline}</p>
        </div>
      </div>

      <section id="historia" className="px-4 sm:px-6 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t.es.historyTitle}</h2>
        <p className="text-lg whitespace-pre-line max-w-3xl mx-auto">{t.es.historyText}</p>
      </section>

      <section id="botanico" className="px-4 sm:px-6 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t.es.botanicTitle}</h2>
        <p className="text-lg mb-6 whitespace-pre-line max-w-3xl mx-auto">{t.es.botanicText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={`/${src}`}
              alt="El Picacho"
              className="rounded-lg shadow-md object-cover w-full h-64 cursor-pointer border border-white"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="flex items-center justify-center h-screen w-screen bg-black bg-opacity-90 p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
            >
              ×
            </button>
            <img
              src={`/${selectedImage}`}
              alt="Zoomed El Picacho"
              className="max-h-screen max-w-full rounded-lg shadow-xl"
            />
          </div>
        </Modal>
      </section>

      <section id="visitanos" className="px-4 sm:px-6 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-[#16309e]">{t.es.visitTitle}</h2>
        <ul className="list-disc marker:text-[#c00093] ml-6 space-y-4 text-lg mb-10">
          {t.es.offerings.map((item, idx) => (
            <li key={idx}>
              <a
                href="/picacheada"
                className="text-[#16309e] hover:text-black transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <a
            href="/expresiones"
            className="inline-block w-full sm:w-auto px-6 py-3 text-base md:text-lg text-[#c00093] border border-[#c00093] rounded-md hover:bg-[#c00093] hover:text-white transition"
          >
            Descubre Más Rincones de El Picacho
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        {t.es.footer}
      </footer>
    </div>
  );
}
