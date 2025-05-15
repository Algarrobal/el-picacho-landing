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

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido, por favor indicar en reserva.*`,
          image: "/picacheada_historia.jpg",
          button: "Reservar Recorrido"
        },
        {
          title: "Visitas guiadas por el parque botánico",
          text: `Descubre la riqueza del botánico que rodea el conjunto de El Picacho. Conocerás sus distintas especies: los milenarios ginkgo bilobas, liquidámbares, araucarias, y los llamados árboles de Júpiter —coníferas del parque imperial japonés—, así como alcanfores y laureles del jardín del Vaticano. Todos ellos cohabitan con nuestros emblemáticos molles, churquis y algarrobos.

Cruzando el río, vivirás la experiencia de un paseo de montaña por el monte originario preservado de la región. Durante el recorrido, te sorprenderán instalaciones de Land Art, que podrás contemplar saboreando un refresco natural del lugar.

*Si desea incluir una degustación de repostería local o salteñas durante el recorrido, por favor indicar en reserva.*`,
          image: "/picacheada_botanico.jpg",
          button: "Reservar Visita"
        },
        {
          title: "Sabores de El Picacho",
          text: "Almuerza donde el plato se sirve con historia. En el comedor de la casona se ofrecen menús locales con ingredientes del huerto, en un entorno íntimo y natural.",
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
          title: "Cultural and Historical Tours",
          text: `Begin your journey at El Picacho at the portal marked by stone, following the Verbena path to the fountain square, flanked by the chapel. From there, you’ll glimpse the nearby Guadalquivir River, where the rocky peak of El Picacho rises beside the family memorial grounds.

You’ll then explore the old manor house, with its two courtyards and various spaces: the pinacoteca, the paleontological and archaeological room, and, perched above, the president’s office. From Don Honorio’s old oven in the second courtyard, you’ll pass into the Hidden Garden, and finally reach the Santa Cruz de Lajas, where you can enjoy a local refreshment while taking in the view of the Guadalquivir’s headwaters from the overlook.

*If you wish to include a tasting of local pastries or salteñas during the tour, please indicate when booking.*`,
          image: "/picacheada_historia.jpg",
          button: "Book Tour"
        },
        {
          title: "Guided Walks Through the Botanical Park",
          text: `Discover the richness of the botanical landscape that surrounds the grounds of El Picacho. You’ll encounter diverse species—from ancient ginkgo bilobas, sweetgums, and araucarias to the so-called Trees of Jupiter, Japanese imperial park conifers, camphor trees, and laurels from the Vatican gardens. All of these coexist with our emblematic molles, churquis, and algarrobos.

Crossing the river, you’ll experience a mountain walk through a preserved patch of the region’s native woodland. Along the way, Land Art installations will surprise and delight you—best enjoyed with a refreshment made from local ingredients.

*If you wish to include a tasting of local pastries or salteñas during the walk, please indicate when booking.*`,
          image: "/picacheada_botanico.jpg",
          button: "Book Walk"
        },
        {
          title: "Flavors of El Picacho",
          text: "Dine where midday meals are steeped in history. Seasonal menus crafted with local produce are served in the manor’s shaded courtyard.",
          image: "/picacheada_sabores.jpg",
          button: "Book Lunch"
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-gray-800 p-6 md:p-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16309e]">
          {t[lang].title}
        </h1>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-transparent text-sm md:text-base border border-gray-800 px-4 py-2 rounded hover:bg-gray-100"
        >
          {t[lang].toggle}
        </button>
      </div>

      {t[lang].sections.map((section, i) => (
        <div
          key={i}
          className="mb-20 flex flex-col md:flex-row gap-8 items-center"
        >
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg border border-white"
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3 text-[#16309e]">
              {section.title}
            </h2>
            {section.text.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg mb-4 ${
                  paragraph.trim().startsWith("*") ? "italic" : "text-[#3e484a]"
                }`}
              >
                {paragraph}
              </p>
            ))}
            <button className="px-6 py-2 text-base text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition">
              {section.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
