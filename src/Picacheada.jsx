import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
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
      historyText: `Lugar en el que combatieron las “Montoneras” libertarias comandadas por el líder patriota Eustaquio “Moto” Mendez miembro de la familia Mendez Arenas, habitante primera de la Casona. En el siglo XXI se avecindó en ella la familia Paz Zamora comprometida en la lucha contra el golpismo militar boliviano y la instauración de la democracia. Con vocación ecológica inicia la construcción del parque botánico.

La casona, rodeada de cipreses, se encuentra en lo alto de un desfiladero cavado por el río, en medio de cuyas aguas surge un peñón en forma de pico que desde siempre el paisanaje lo denominó “El Picacho”, que con el tiempo le dio nombre al lugar. El Picacho es una “Salamanca" nombre que la gente da a los socavones que el agua pule en su seno, y que según mitología popular, es donde habitan los diablos. El asentamiento es de finales de la colonia, a su entrada una fuente de agua en piedra, zaguán con gruesos dinteles de madera de algarrobo, dos patios, capilla, campanario, y molino de dos bocas. Sus paredes son de un blanco luminoso y sus ventanas azul añil. Y cubriendo el conjunto un tejado ocre de tintes anaranjados.

En la Bolivia de hoy El Picacho expresa identidad e historia nacionales, desde la colonia, la independencia, la república hasta la democracia que se construye hoy.`,
      botanicTitle: "Parque Botánico: Unidad biológica, en la diversidad…",
      botanicText: `El botánico es un mestizaje biológico. Las especies nativas del lugar conviven con especies originarias llegadas de otros microclimas, algunos muy lejanos. Los churquis, algarrobos, tipas, chañares o toborochis por ejemplo, cohabitan con cipreses mediterráneos, coníferas japonesas, araucarias patagónicas, robles americanos y europeos, liquidámbares del hemisferio norte, alamos tulipán, y gingko bilobas del Asia, entre otras. Esta última es milenaria, considerada un dinosaurio, o fósil viviente vegetal. Se dice de ella que sobrevivió a unos centenares de metros a la bomba atómica lanzada en Hiroshima.`,
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
      historyText: `Place where the libertarian “Montoneras” fought, led by the patriot Eustaquio “Moto” Méndez, a member of the Méndez Arenas family—the first inhabitants of the manor. In the 21st century, the Paz Zamora family settled in the house, committed to resisting Bolivia’s military coups and to the establishment of democracy. With an ecological vision, they began the creation of the botanical park.

The manor, surrounded by cypresses, stands atop a gorge carved by the river. In the middle of its waters rises a rock shaped like a beak, which locals have long called “El Picacho.” Over time, the name came to designate the entire place. El Picacho is a Salamanca—a name given to the caves smoothed by water, believed in popular mythology to be dwellings of the devil.

The settlement dates to the late colonial period. At its entrance, there is a stone fountain, a hallway with heavy carob wood lintels, two courtyards, a chapel, a bell tower, and a twin-mouth mill. Its walls are a luminous white, its windows deep indigo blue, and the whole structure is covered by an ochre-tiled roof tinged with orange.

In today’s Bolivia, El Picacho embodies national identity and history—from the colonial period, through independence and the republic, to the ongoing construction of democracy.`,
      botanicTitle: "Botanical Park: A Living Unity in Diversity",
      botanicText: `The botanical garden is a biological mestizaje. Native species of the region live alongside others brought from distant microclimates, some from very far away. Churqui, algarrobo, tipa, chañar, and toborochi trees, for instance, share space with Mediterranean cypresses, Japanese conifers, Patagonian araucarias, American and European oaks, sweetgums from the northern hemisphere, tulip poplars, and Asian ginkgo bilobas, among others.

The latter is ancient—considered a living fossil, a botanical dinosaur. It is said to have survived just a few hundred meters from where the atomic bomb dropped on Hiroshima.`,
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
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}>
        <div className={`absolute top-6 left-6 z-50 font-bold text-lg transition-colors ${scrolled ? 'text-[#16309e]' : 'text-white'}`}>
          El Picacho
        </div>

        <nav className={`absolute top-6 right-6 z-50 hidden md:flex gap-6 text-sm md:text-base transition-colors ${scrolled ? 'text-[#16309e]' : 'text-white'}`}>
          <a href="#historia" className="hover:border-b-2 border-current pb-1">Historia</a>
          <a href="#botanico" className="hover:border-b-2 border-current pb-1">Botánico</a>
          <a href="#visita" className="hover:border-b-2 border-current pb-1">Visítanos</a>
          <a href="/expresiones" className="hover:border-b-2 border-current pb-1">Rincones</a>
          <a href="/picacheada" className="hover:border-b-2 border-current pb-1">Reservas</a>
          <button
            onClick={langToggle}
            className="px-3 py-1 border text-sm rounded hover:bg-[#16309e] hover:text-white transition"
          >
            {lang === "es" ? "English" : "Español"}
          </button>
        </nav>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white font-bold mb-4 max-w-4xl">{t[lang].title}</h1>
          <p className="text-xl text-white mb-6 max-w-2xl">{t[lang].subtitle}</p>
        </div>
      </div>

      <section id="historia" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].historyTitle}</h2>
        <p className="text-lg text-[#3e484a] whitespace-pre-line">{t[lang].historyText}</p>
      </section>

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

      <section id="visita" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].servicesTitle}</h2>
        <ul className="list-disc ml-6 text-lg mb-2 text-[#3e484a]">
          {t[lang].servicesList.map((item, idx) => (
            <li key={idx}>
              <a href="/picacheada" className="hover:underline">{item}</a>
            </li>
          ))}
        </ul>

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
