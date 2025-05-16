import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");
  const [selectedImage, setSelectedImage] = useState(null);

  const t = {
    es: {
      title: "El Picacho",
      subtitle: "Historia, Naturaleza y Democracia\nen el Sur de Bolivia",
      historyTitle: "Un Terruño con Historia",
      historyText: `Lugar en el que combatieron las “Montoneras” libertarias comandadas por el líder patriota Eustaquio “Moto” Mendez miembro de la familia Mendez Arenas, habitante primera de la Casona. En el siglo XXI se avecindó en ella la familia Paz Zamora comprometida en la lucha contra el golpismo militar boliviano y la instauración de la democracia. Con vocación ecológica inicia la construcción del parque botánico.

La casona, rodeada de cipreses, se encuentra en lo alto de un desfiladero cavado por el rio, en medio de cuyas aguas surge un peñón en forma de pico que desde siempre el paisanaje lo denominó “El Picacho”, que con el tiempo le dio nombre al lugar. El Picacho es una “Salamanca" nombre que la gente da a los socavones que el agua pule en su seno, y que según mitología popular, es donde habitan los diablos. El asentamiento es de finales de la colonia, a su entrada una fuente de agua en piedra, zaguán con gruesos dinteles de madera de algarrobo, dos patios, capilla, campanario, y molino de dos bocas. Sus paredes son de un blanco luminoso y sus ventanas azul añil. Y cubriendo el conjunto un tejado ocre de tintes anaranjados.

En la Bolivia de hoy El Picacho expresa identidad e historia nacionales, desde la colonia, la independencia, la república hasta la democracia que se construye hoy.`,
      botanicTitle: "Parque Botánico: Unidad biológica, en la diversidad…",
      botanicText: `El botánico es un mestizaje biológico. Las especies nativas del lugar conviven con especies originarias llegadas de otros microclimas, algunos muy lejanos. Los churquis, algarrobos, tipas, chañares o toborochis por ejemplo, cohabitan con cipreses mediterráneos, coníferas japonesas, araucarias patagónicas, robles americanos y europeos, liquidámbares del hemisferio norte, alamos tulipán, y gingko bilobas del Asia, entre otras. Esta ultima es milenaria, considerada un dinosaurio, o fósil viviente vegetal. Se dice de ella que sobrevivió a unos centenares de metros a la bomba atómica lanzada en Hiroshima.`,
      visitTitle: "Planifica Tu Visita",
      services: [
        {
          title: "Recorridos culturales e históricos",
          link: "/picacheada"
        },
        {
          title: "Visitas guiadas por el parque botánico",
          link: "/picacheada"
        },
        {
          title: "Sabores de El Picacho - Donde el menú es con historia y naturaleza",
          link: "/picacheada"
        },
        {
          title: "Lugar de Encuentro y Celebraciones",
          link: "/picacheada"
        }
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    },
    en: {
      title: "El Picacho",
      subtitle: "History, Nature, and Democracy\nin the South of Bolivia",
      historyTitle: "A Terruño Steeped in History",
      historyText: "...", // You can fill in the English version
      botanicTitle: "Botanical Park: A Living Unity in Diversity",
      botanicText: "...", // You can fill in the English version
      visitTitle: "Plan Your Visit",
      services: [
        {
          title: "Cultural and historical tours",
          link: "/picacheada"
        },
        {
          title: "Guided walks through the botanical park",
          link: "/picacheada"
        },
        {
          title: "Flavors of El Picacho - Where menus are steeped in story and nature",
          link: "/picacheada"
        },
        {
          title: "Gatherings and Celebrations",
          link: "/picacheada"
        }
      ],
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    }
  };

  const images = Array.from({ length: 15 }, (_, i) => `mosaico_${String(i + 1).padStart(2, "0")}.jpg`);
  const langToggle = () => setLang(lang === "es" ? "en" : "es");

  return (
    <div className="font-sans text-[#3e484a]">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{t[lang].title}</h1>
          <p className="text-xl md:text-2xl text-white whitespace-pre-line">{t[lang].subtitle}</p>
        </div>

        <div className="absolute top-4 left-4 text-white font-bold text-xl md:text-2xl z-50">
          <a href="/">El Picacho</a>
        </div>

        <div className="absolute top-4 right-4 z-50 flex gap-6 items-center text-white text-lg">
          <a href="#historia" className="hover:border-b-2 border-white pb-1 transition">Historia</a>
          <a href="#botanico" className="hover:border-b-2 border-white pb-1 transition">Botánico</a>
          <a href="#visita" className="hover:border-b-2 border-white pb-1 transition">Visítanos</a>
          <a href="/expresiones" className="hover:border-b-2 border-white pb-1 transition">Rincones</a>
          <a href="/picacheada" className="hover:border-b-2 border-white pb-1 transition">Reservas</a>
          <button
            onClick={langToggle}
            className="px-4 py-1 text-white text-sm border border-white rounded hover:bg-white hover:text-black transition"
          >
            {lang === "es" ? "English" : "Español"}
          </button>
        </div>
      </div>

      <section id="historia" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].historyTitle}</h2>
        <p className="text-lg whitespace-pre-line">{t[lang].historyText}</p>
      </section>

      <section id="botanico" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-4 text-[#16309e]">{t[lang].botanicTitle}</h2>
        <p className="text-lg whitespace-pre-line">{t[lang].botanicText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={`/${src}`}
              alt="El Picacho"
              className="rounded-lg shadow-md object-cover w-full h-64 border border-white cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </section>

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

      <section id="visita" className="p-8 md:p-16 bg-white border-t border-[#16309e]/15">
        <h2 className="text-3xl font-semibold mb-8 text-[#16309e]">{t[lang].visitTitle}</h2>
        <div className="grid gap-6">
          {t[lang].services.map((service, i) => (
            <a
              key={i}
              href={service.link}
              className="block border border-[#16309e] rounded-lg p-6 hover:bg-[#16309e] hover:text-white transition"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 border-t border-[#16309e]/15">
        {t[lang].footer}
      </footer>
    </div>
  );
}
