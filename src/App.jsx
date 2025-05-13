import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");
  const [selectedImage, setSelectedImage] = useState(null);

  const t = {
    es: {
      historyTitle: "Un Terruño con Historia",
      historyText: `Lugar en el que combatieron las “Montoneras” libertarias comandadas por el líder patriota Eustaquio “Moto” Mendez miembro de la familia Mendez Arenas, habitante primera de la Casona. En el siglo XXI se avecindó en ella la familia Paz Zamora comprometida en la lucha contra el golpismo militar boliviano y la instauración de la democracia. Con vocación ecológica inicia la construcción del parque botánico.

La casona, rodeada de cipreses, se encuentra en lo alto de un desfiladero cavado por el rio, en medio de cuyas aguas surge un peñón en forma de pico que desde siempre el paisanaje lo denominó “El Picacho”, que con el tiempo le dio nombre al lugar. El Picacho es una “Salamanca" nombre que la gente da a los socavones que el agua pule en su seno, y que según mitología popular, es donde habitan los diablos. El asentamiento es de finales de la colonia, a su entrada una fuente de agua en piedra, zaguán con gruesos dinteles de madera de algarrobo, dos patios, capilla, campanario, y molino de dos bocas. Sus paredes son de un blanco luminoso y sus ventanas azul añil. Y cubriendo el conjunto un tejado ocre de tintes anaranjados.

En la Bolivia de hoy El Picacho expresa identidad e historia nacionales, desde la colonia, la independencia, la república hasta la democracia que se construye hoy.`,
      botanicTitle: "Parque Botánico: Unidad biológica, en la diversidad…",
      botanicText: `El botánico es un mestizaje biológico. Las especies nativas del lugar conviven con especies originarias llegadas de otros microclimas, algunos muy lejanos. Los churquis, algarrobos, tipas, chañares o toborochis por ejemplo, cohabitan con cipreses mediterráneos, coníferas japonesas, araucarias patagónicas, robles americanos y europeos, liquidámbares del hemisferio norte, alamos tulipán, y gingko bilobas del Asia, entre otras. Esta ultima es milenaria, considerada un dinosaurio, o fósil viviente vegetal. Se dice de ella que sobrevivió a unos centenares de metros a la bomba atómica lanzada en Hiroshima.`,
      servicesTitle: "Servicios",
      servicesList: [
        "Recorridos culturales e históricos",
        "Visitas guiadas por el parque botánico",
        "Sabores de El Picacho"
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    },
    en: {
      historyTitle: "A Terruño Steeped in History",
      historyText: `Place where the libertarian “Montoneras” fought, led by the patriot Eustaquio “Moto” Méndez, a member of the Méndez Arenas family—the first inhabitants of the manor. In the 21st century, the Paz Zamora family settled in the house, committed to resisting Bolivia’s military coups and to the establishment of democracy. With an ecological vision, they began the creation of the botanical park.

The manor, surrounded by cypresses, stands atop a gorge carved by the river. In the middle of its waters rises a rock shaped like a beak, which locals have long called “El Picacho.” Over time, the name came to designate the entire place. El Picacho is a Salamanca—a name given to the caves smoothed by water, believed in popular mythology to be dwellings of the devil.

The settlement dates to the late colonial period. At its entrance, there is a stone fountain, a hallway with heavy carob wood lintels, two courtyards, a chapel, a bell tower, and a twin-mouth mill. Its walls are a luminous white, its windows deep indigo blue, and the whole structure is covered by an ochre-tiled roof tinged with orange.

In today’s Bolivia, El Picacho embodies national identity and history—from the colonial period, through independence and the republic, to the ongoing construction of democracy.`,
      botanicTitle: "Botanical Park: A Living Unity in Diversity",
      botanicText: `The botanical garden is a biological mestizaje. Native species of the region live alongside others brought from distant microclimates, some from very far away. Churqui, algarrobo, tipa, chañar, and toborochi trees, for instance, share space with Mediterranean cypresses, Japanese conifers, Patagonian araucarias, American and European oaks, sweetgums from the northern hemisphere, tulip poplars, and Asian ginkgo bilobas, among others.

The latter is ancient—considered a living fossil, a botanical dinosaur. It is said to have survived just a few hundred meters from where the atomic bomb dropped on Hiroshima.`,
      servicesTitle: "Services",
      servicesList: [
        "Cultural and historical tours",
        "Guided walks through the botanical park",
        "Flavors of El Picacho"
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    }
  };

  const langToggle = () => setLang(lang === "es" ? "en" : "es");
  const images = Array.from({ length: 15 }, (_, i) => `mosaico_${String(i + 1).padStart(2, "0")}.jpg`);

  return (
    <div className="font-sans text-gray-800">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={langToggle}
            className="px-4 py-2 text-white text-sm md:text-base rounded border border-white hover:bg-white hover:text-black transition"
          >
            {lang === "es" ? "English" : "Español"}
          </button>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4 z-40">
          <div className="text-center text-white leading-snug mb-4">
            <h1 className="text-5xl md:text-7xl font-extrabold">El Picacho</h1>
            <h2 className="text-2xl md:text-4xl font-medium mt-2">
              {lang === "es"
                ? "Historia, Naturaleza y Democracia"
                : "History, Nature and Democracy"}
              <br />
              {lang === "es" ? "en el Sur de Bolivia" : "in the South of Bolivia"}
            </h2>
            <p className="text-base md:text-lg mt-4 text-white/80 max-w-3xl mx-auto">
              {lang === "es"
                ? "Una casona del 1800 en un parque botánico sobre la cuenca alta del río Guadalquivir."
                : "An 1800s manor house nestled in a botanical sanctuary, perched above the upper basin of the Guadalquivir River."}
            </p>
          </div>
        </div>
      </div>

      <section className="p-8 md:p-16 bg-white text-[#16309e] mb-12">
        <h2 className="text-3xl font-semibold mb-4">{t[lang].historyTitle}</h2>
        <p className="text-lg whitespace-pre-line">{t[lang].historyText}</p>
      </section>

      <hr className="border-t border-[#16309e]/15" />

      <section className="p-8 md:p-16 bg-white text-[#16309e] mb-12">
        <h2 className="text-3xl font-semibold mb-4">{t[lang].botanicTitle}</h2>
        <p className="text-lg mb-6 whitespace-pre-line">{t[lang].botanicText}</p>
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

      <hr className="border-t border-[#16309e]/15" />

      <section className="p-8 md:p-16 bg-white text-[#16309e] mb-12">
        <h2 className="text-3xl font-semibold mb-4">{t[lang].servicesTitle}</h2>
        <ul className="list-disc ml-6 text-lg mb-2">
          {t[lang].servicesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <a
            href="/expresiones"
            className="inline-block px-6 py-2 text-base md:text-lg text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
          >
            {lang === "es"
              ? "Explorar Más Rincones de El Picacho"
              : "Explore More Corners of El Picacho"}
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        {t[lang].footer}
      </footer>
    </div>
  );
}
