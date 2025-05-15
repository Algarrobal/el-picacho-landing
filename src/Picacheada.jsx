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
          text: `Conoce El Picacho comenzando por el portal anunciado en piedra, siguiendo el paseo de la Verbena hasta la plazoleta de la fuente, flanqueada por la capilla. Desde allí, verás ahí cerca el río Guadalquivir, en cuyas aguas se alza el rocoso Picacho, junto al camposanto familiar.

Luego explorarás la antigua casona con sus dos patios y diversos ambientes: la pinacoteca, la sala paleontológica y arqueológica, y, en lo alto, la oficina del presidente. Del antiguo horno de don Honorio en el segundo patio, pasarás al Huerto Escondido, y de allí a la Santa Cruz de Lajas, donde podrás degustar un refresco del lugar mientras aprecias, desde el mirador, el paisaje de las nacientes del Guadalquivir.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.`,
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido"
        },
        {
          title: "Visitas guiadas por el parque botánico",
          text: `Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies entre ellas los milenarios ginkgo bilobas, liquidámbares, araucarias, y los así llamados árboles de Júpiter, coníferas del parque imperial japonés, alcanfores, y laureles del jardín del Vaticano, que cohabitan con nuestros emblemáticos molles, churquis, y algarrobos. Cruzando el río tendrás la experiencia de un paseo en montaña del monte originario preservado de la región. En el recorrido te sorprenderán las instalaciones de Land Art las cuales podrás apreciar saboreando un refresco natural del lugar.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido por favor indicar en reserva.`,
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita"
        },
        {
          title: "Sabores de El Picacho",
          text: `Almuerza donde el plato se sirve con historia. En el comedor de la casona se ofrecen menús locales con ingredientes del huerto, en un entorno íntimo y natural.`,
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
          text: `Start your visit at El Picacho with the stone-marked entrance and stroll down the Verbena Walk to the plaza by the fountain, flanked by the chapel. From there, you’ll see the Guadalquivir River, where the rocky outcrop known as El Picacho rises beside the family memorial grounds.

Continue through the manor’s courtyards and rooms—the art gallery, the paleontology and archaeology exhibits, and the President’s office above. Then pass by the old oven in the second courtyard to the Hidden Garden, and on to the Santa Cruz de Lajas, where you’ll enjoy a natural refreshment while admiring the source valley of the Guadalquivir.

*If you’d like to include local pastries or salteñas as part of the experience, please mention this when booking.`,
          image: "/picacheada_historia.jpg",
          button: "Book Tour"
        },
        {
          title: "Guided walks through the botanical park",
          text: `Wander through the rich botanical world surrounding El Picacho. You’ll see ancient ginkgo bilobas, liquidambars, araucarias, and Jupiter trees—imperial Japanese conifers—alongside camphors and laurels from the Vatican gardens. These live in harmony with emblematic trees of the region like molles, churquis, and algarrobos.

Across the river, the trail leads into preserved native woodland. Along the way, discover Land Art installations inspired by the landscape—best appreciated with a fresh drink made onsite.

*If you’d like to include local pastries or salteñas as part of the experience, please mention this when booking.`,
          image: "/picacheada_botanico.jpg",
          button: "Book Walk"
        },
        {
          title: "Flavors of El Picacho",
          text: `Dine where each plate is served with a story. Local seasonal menus are prepared with ingredients from the garden and served in the manor’s quiet and intimate dining room.`,
          image: "/picacheada_sabores.jpg",
          button: "Book Lunch"
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-gray-800 p-6 md:p-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16309e]">{t[lang].title}</h1>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-transparent text-sm md:text-base border border-[#16309e] px-4 py-2 rounded hover:bg-[#16309e] hover:text-white transition"
        >
          {t[lang].toggle}
        </button>
      </div>

      {t[lang].sections.map((section, i) => (
        <div
          key={i}
          className="mb-20 flex flex-col md:flex-row gap-8 items-center"
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg border border-white"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3 text-[#16309e]">
              {section.title}
            </h2>
            <p className="text-lg mb-4 text-[#3e484a] whitespace-pre-line">{section.text}</p>
            <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
              {section.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
