import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    es: {
      title: (
        <>
          <span className="block text-5xl md:text-6xl">El Picacho</span>
          <span className="block text-2xl md:text-3xl mt-2">Historia, Naturaleza y Democracia</span>
          <span className="block text-xl md:text-2xl">en el Sur de Bolivia</span>
        </>
      ),
      subtitle: "Una casona del 1800 en un parque botánico sobre la cuenca alta del río Guadalquivir.",
      historyTitle: "Un Terruño con Historia",
      historyText: `Lugar en el que combatieron las “Montoneras” libertarias comandadas por el líder patriota Eustaquio “Moto” Mendez [...]`,
      botanicTitle: "Parque Botánico: Unidad biológica, en la diversidad…",
      botanicText: `El botánico es un mestizaje biológico. Las especies nativas del lugar conviven con especies originarias [...]`,
      servicesTitle: "Planifica Tu Visita",
      servicesList: [
        "Recorridos culturales e históricos",
        "Visitas guiadas por el parque botánico",
        "Sabores de El Picacho - Almuerza donde el plato se sirve con historia"
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    },
    en: {
      title: (
        <>
          <span className="block text-5xl md:text-6xl">El Picacho</span>
          <span className="block text-2xl md:text-3xl mt-2">Where History, Nature and Democracy Meet</span>
          <span className="block text-xl md:text-2xl">in the South of Bolivia</span>
        </>
      ),
      subtitle: "An 1800s manor house nestled in a botanical sanctuary, perched above the upper basin of the Guadalquivir River.",
      historyTitle: "A Terruño Steeped in History",
      historyText: `Place where the libertarian “Montoneras” fought, led by the patriot Eustaquio “Moto” Méndez [...]`,
      botanicTitle: "Botanical Park: A Living Unity in Diversity",
      botanicText: `The botanical garden is a biological mestizaje. Native species of the region live alongside others brought from distant [...]`,
      servicesTitle: "Arrange Your Visit",
      servicesList: [
        "Cultural and historical tours",
        "Guided walks through the botanical park",
        "Flavors of El Picacho - Reserve a country meal at the manor house"
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    }
  };

  const langToggle = () => setLang(lang === "es" ? "en" : "es");
  const images = Array.from({ length: 15 }, (_, i) => `mosaico_${String(i + 1).padStart(2, "0")}.jpg`);

  return (
    <div className="font-sans text-gray-800">
      {/* Logo and Nav inside Hero */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}
      >
        <div className={`absolute top-6 left-6 z-50 font-bold text-lg transition-colors ${scrolled ? 'text-[#16309e]' : 'text-white'}`}>
          El Picacho
        </div>

        <nav className={`absolute top-6 right-6 z-50 hidden md:flex gap-6 text-sm md:text-base transition-colors ${scrolled ? 'text-[#16309e]' : 'text-white'}`}>
          <a href="#historia" className="hover:border-b-2 border-current pb-1">Historia</a>
          <a href="#botanico" className="hover:border-b-2 border-current pb-1">Botánico</a>
          <a href="#visita" className="hover:border-b-2 border-current pb-1">Visítanos</a>
          <a href="/expresiones" className="hover:border-b-2 border-current pb-1">Rincones</a>
          <a href="/picacheada" className="hover:border-b-2 border-current pb-1">Reservas</a>
        </nav>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white font-bold mb-4 max-w-4xl">{t[lang].title}</h1>
          <p className="text-xl text-white mb-6 max-w-2xl">{t[lang].subtitle}</p>
          <button
            onClick={langToggle}
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            {lang === "es" ? "English" : "Español"}
          </button>
        </div>
      </div>

      {/* History Section */}
      <section id="historia" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].historyTitle}</h2>
        <p className="text-lg text-[#3e484a] whitespace-pre-line">{t[lang].historyText}</p>
      </section>

      {/* Botanic Section */}
      <section id="botanico" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].botanicTitle}</h2>
        <p className="text-lg text-[#3e484a] mb-6 whitespace-pre-line">{t[lang].botanicText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={`/${src}`}
              alt="El Picacho"
              className="rounded-lg shadow-md object-cover w-full h-64 border border-white"
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

      {/* Visit / Services Section */}
      <section id="visita" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].servicesTitle}</h2>
        <ul className="list-disc ml-6 text-lg mb-2 text-[#3e484a]">
          {t[lang].servicesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="text-center mt-10 border-t border-[#16309e]/15 pt-10">
          <a
            href="/picacheada"
            className="inline-block px-6 py-2 text-base md:text-lg text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
          >
            {lang === "es"
              ? "Descubre Más Rincones de El Picacho"
              : "Wander Further into El Picacho"}
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        {t[lang].footer}
      </footer>
    </div>
  );
}
