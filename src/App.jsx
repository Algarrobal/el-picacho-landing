import { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("#root");

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 

  useEffect(() => {
  const handleScroll = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isMobileMenuOpen]);

  const t = {
    es: {
      title: "El Picacho",
      subtitle: "Historia, Naturaleza y Democracia",
      subsubtitle: "en el Sur de Bolivia",
      toggle: "English",
          nav: [
      { label: "Historia", href: "#historia" },
      { label: "Botánico", href: "#botanico" },
      { label: "Visítanos", href: "#visitanos" },
      { label: "Rincones", href: "/expresiones" },
      { label: "Reservas", href: "/picacheada" }
    ],
      tagline: "Una casona del 1800 en un parque botánico sobre\nla cuenca alta del río Guadalquivir.",
      historyTitle: (
        <>
          Un <span className="text-[#c00093]">Terruño</span> con Historia
        </>
      ),
      historyText: `Lugar en el que combatieron las “Montoneras” libertarias comandadas por el líder patriota Eustaquio “Moto” Mendez, miembro de la familia Mendez Arenas, habitante primera de la Casona. En el siglo XXI se avecindó en ella la familia Paz Zamora comprometida en la lucha contra el golpismo militar boliviano y la instauración de la democracia. Con vocación ecológica inicia la construcción del parque botánico.

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
      moreButton: "Descubre Más Rincones de El Picacho",
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    },
    en: {
  title: "El Picacho",
  subtitle: "History, Nature, and Democracy",
  subsubtitle: "in the South of Bolivia",
  toggle: "Español",
  nav: [
  { label: "History", href: "#historia" },
  { label: "Botanical", href: "#botanico" },
  { label: "Visit Us", href: "#visitanos" },
  { label: "Nooks", href: "/expresiones" },
  { label: "Bookings", href: "/picacheada" }
],
  tagline: "An 1800s manor house in a botanical sanctuary\nabove the upper basin of the Guadalquivir River.",
  historyTitle: (
    <>
      A <span className="text-[#c00093]">Terruño</span> Steeped in History
    </>
  ),
  historyText: `A place where the libertarian “Montoneras” fought, led by the patriot Eustaquio “Moto” Méndez, a member of the Méndez Arenas family—the first inhabitants of the manor house. In the 21st century, the Paz Zamora family settled here, committed to resisting military coups and building Bolivian democracy. With an ecological vision, they began developing the botanical park.

The manor, surrounded by cypresses, stands atop a gorge carved by the river. In its waters rises a rock shaped like a peak, long known by locals as “El Picacho,” a name that eventually designated the entire site. El Picacho is a “Salamanca”—a name given to river-worn caves that, according to local myth, house spirits or devils. The settlement dates back to the late colonial period. At the entrance: a stone fountain, a hallway with heavy carob wood lintels, two courtyards, a chapel, a bell tower, and a twin-mouth mill. Its luminous white walls, indigo windows, and ochre-tiled roof reflect a blend of tradition and time.

In today’s Bolivia, El Picacho embodies national identity and history—from the colonial era, through independence and the republic, to the continuing construction of democracy.`,
  botanicTitle: (
    <>
      <span className="text-[#c00093]">Botanical</span> Park: Biological Unity in Diversity
    </>
  ),
  botanicText: `The garden is a biological mestizaje. Native species thrive alongside others brought from distant microclimates. Churquis, algarrobos, tipas, chañares, and toborochis coexist with Mediterranean cypresses, Japanese conifers, Patagonian araucarias, American and European oaks, sweetgums from the northern hemisphere, tulip poplars, and Asian ginkgo bilobas.

The ginkgo biloba is especially remarkable—an ancient species known as a living fossil. One specimen famously survived just a few hundred meters from the epicenter of the Hiroshima atomic bombing.`,
  visitTitle: (
    <>
      Plan Your <span className="text-[#c00093]">Visit</span>
    </>
  ),
  offerings: [
    "Cultural and historical tours",
    "Guided walks through the botanical park",
    "Flavors of El Picacho – Where the menu blends nature and tradition",
    "Gatherings and Celebrations"
  ],
  moreButton: "Discover More of El Picacho",
  footer: "© El Picacho 2025 | Tarija, Bolivia"
}
  };

  const navItems = t[lang].nav;

  const images = Array.from({ length: 15 }, (_, i) => `mosaico_${String(i + 1).padStart(2, "0")}.jpg`);

  return (
    <div className="font-sans text-[#3e484a]">
      <div
        className="relative h-screen bg-cover bg-center pt-20"
        style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}
      >

{/* Navigation */}
<nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 flex justify-between items-center z-50">
  
  {/* Logo */}
  <a href="/" className="text-white text-xl md:text-2xl font-bold hover:opacity-90 transition">
    El Picacho
  </a>

  {/* Desktop Nav */}
  <ul className="hidden md:flex gap-6 text-white text-sm md:text-base">
    {navItems.map(({ label, href }) => (
      <li key={label}>
        <a href={href} className="min-h-tap hover:border-b border-white pb-1 transition">
          {label}
        </a>
      </li>
    ))}
    <li>
      <button
        onClick={() => setLang(lang => (lang === "es" ? "en" : "es"))}
        className="min-h-tap px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
      >
        {t[lang].toggle}
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
      {t[lang].toggle}
    </button>
  </div>
)}

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{t[lang].title}</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">
            {t[lang].subtitle}
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-2">
            {t[lang].subsubtitle}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white whitespace-pre-line mt-2 sm:mt-4">
            {t[lang].tagline}
          </p>
        </div>
      </div>

      <section id="historia" className="px-4 sm:px-6 md:px-16 py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].historyTitle}</h2>
        <p className="text-base sm:text-lg whitespace-pre-line leading-relaxed">{t[lang].historyText}</p>
      </section>

      <section id="botanico" className="px-4 sm:px-6 md:px-16 py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].botanicTitle}</h2>
        <p className="text-base sm:text-lg mb-6 whitespace-pre-line leading-relaxed">{t[lang].botanicText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
         {images.map((src, i) => (
            <img
              key={i}
              src={`/${src}`}
              alt={`El Picacho ${i + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-64 sm:h-72 md:h-80 cursor-pointer border border-white transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(src)}
        />
      ))}
    </div>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
>
        <div className="relative bg-black rounded-lg p-2 max-w-full max-h-screen overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
    >
            ×
          </button>
          <img
            src={`/${selectedImage}`}
            alt="Zoomed El Picacho"
            className="rounded-lg shadow-xl object-contain w-full max-h-[90vh]"
          />
        </div>
      </Modal>

      </section>

      <section id="visitanos" className="px-4 sm:px-6 md:px-16 py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-[#16309e]">{t[lang].visitTitle}</h2>
        <ul className="list-disc marker:text-[#c00093] ml-6 space-y-4 text-lg mb-10">
          {t[lang].offerings.map((item, idx) => (
            <li key={idx} className="pl-1">
              <a
                href="/picacheada"
                className="text-[#16309e] hover:text-black transition break-words"
              >
                {item}
              </a>
            </li>
           ))}
        </ul>

        <div className="text-center">
          <a
            href="/expresiones"
            className="min-h-tap inline-block px-6 py-2 text-base md:text-lg text-[#c00093] border border-[#c00093] rounded hover:bg-[#c00093] hover:text-white transition"
          >
            {t[lang].moreButton}
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        {t[lang].footer}
      </footer>
    </div>
  );
}
