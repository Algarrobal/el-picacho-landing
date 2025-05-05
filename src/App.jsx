
import { useState } from "react";

export default function ElPicachoLanding() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "El Picacho – Historia, Naturaleza y Democracia en el Corazón de Bolivia",
      subtitle: "Una casa de 1834 transformada en parque botánico y símbolo democrático.",
      historyTitle: "Una Casa con Historia",
      historyText:
        "El Picacho es una casa republicana construida en 1834, ubicada en Tarija, Bolivia. Desde 1986, es el hogar de Jaime Paz Zamora, expresidente de Bolivia y figura clave en la recuperación de la democracia. En sus patios y jardines, ha cultivado un parque botánico que honra la flora local y la memoria histórica.",
      botanicTitle: "Refugio Botánico y Patrimonio Cultural",
      botanicText:
        "El parque botánico de El Picacho reúne especies emblemáticas como el jazmín del campo, el magnolio y el duraznero histórico. Cada ambiente, como El Campanario o El Huerto Escondido, ofrece una experiencia sensorial única.",
      visitTitle: "Información para Visitantes",
      servicesTitle: "Servicios",
      servicesList: [
        "Visitas guiadas por el parque botánico",
        "Recorridos culturales e históricos",
        "Audio guía (en desarrollo)"
      ],
      note: "Actualmente no se comercializan productos.",
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    },
    en: {
      title: "El Picacho – History, Nature and Democracy at Bolivia’s Heart",
      subtitle: "A republican house from 1834 turned into a botanical park and democratic symbol.",
      historyTitle: "A House with History",
      historyText:
        "El Picacho is a republican house built in 1834, located in Tarija, Bolivia. Since 1986, it has been the residence of Jaime Paz Zamora, former President of Bolivia and key figure in the country’s democratic transition. In its gardens, he has created a living botanical park that honors local flora and historical memory.",
      botanicTitle: "Botanical Refuge and Cultural Heritage",
      botanicText:
        "El Picacho’s botanical park includes emblematic species like jasmine of the field, magnolia, and a historic peach tree. Spaces such as El Campanario and El Huerto Escondido offer unique sensory experiences.",
      visitTitle: "Visitor Information",
      servicesTitle: "Services",
      servicesList: [
        "Guided tours of the botanical park",
        "Cultural and historical walks",
        "Audio guide (in development)"
      ],
      note: "Currently no products are for sale.",
      footer: "© El Picacho 2025 | Tarija, Bolivia"
    }
  };

  const langToggle = () => setLang(lang === "es" ? "en" : "es");

const images = [
  'fuente_y_bandera_web.jpg',
  'cactus_san_pedro_dia_web.jpg',
  'cactus_san_pedro_dia_2_web.jpg',
  'estanque_agua_flores_web.jpg',
  'primerpatio_-_granadas_web.jpg',
  'plaza_de_la_fuente_web.jpg',
  'mosaico_08.jpg',
  'mosaico_09.jpg',
  'mosaico_10.jpg',
  'mosaico_11.jpg',
  'mosaico_12.jpg',
  'mosaico_13.jpg',
  'mosaico_14.jpg',
  'mosaico_15.jpg'
];

  return (
    <div className="font-sans text-gray-800">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero-fachada-picacho-web.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 max-w-4xl">{t[lang].title}</h1>
          <p className="text-xl text-white mb-6 max-w-2xl">{t[lang].subtitle}</p>
          <button onClick={langToggle} className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100">
            {lang === "es" ? "English" : "Español"}
          </button>
        </div>
      </div>

      <section className="p-8 md:p-16 bg-white">
        <h2 className="text-3xl font-semibold mb-4">{t[lang].historyTitle}</h2>
        <p className="text-lg max-w-3xl">{t[lang].historyText}</p>
      </section>

      <section className="p-8 md:p-16 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">{t[lang].botanicTitle}</h2>
        <p className="text-lg max-w-3xl mb-6">{t[lang].botanicText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={`/${src}`}
              alt="El Picacho"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <h2 className="text-3xl font-semibold mb-4">{t[lang].servicesTitle}</h2>
        <ul className="list-disc ml-6 text-lg mb-2">
          {t[lang].servicesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="italic text-gray-600">{t[lang].note}</p>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        {t[lang].footer}
      </footer>
    </div>
  );
}
