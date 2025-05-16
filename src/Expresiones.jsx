import { useState } from "react";

export default function Expresiones() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      title: "Expresiones de El Picacho",
      toggle: "English",
      nav: ["Land Art", "La Pinacoteca", "Paleontología", "Arqueología", "Cantería"],
      sections: [
        {
          id: "land-art",
          title: "Land Art, naturaleza y arte",
          text: `En el Picacho se desarrolla la disciplina artística de “Land Art”, tanto en su expresión paisajista articulada al parque botánico cuanto a la práctica de las “instalaciones”. Estas están inspiradas en piedras del río y troncos del bosque. En el conjunto hay una remembranza de la pintura negra de Goya, un Fernando Botero del lugar, un torso de Marina Núñez del Prado, un “Origen del Mundo” de Gustav Courbet en piedra lamida por las aguas, y al pie del campanario, un homenaje en piedra negra sobre piedra blanca al gran poeta latinoamericano César Vallejo, entre otras instalaciones...`
        },
        {
          id: "pinacoteca",
          title: "La Pinacoteca Familiar",
          text: `En la planta alta de la casona, la antigua biblioteca fue transformada en pinacoteca. Allí cuelgan retratos familiares, obras de artistas bolivianos contemporáneos y grabados de autores como Durero, Goya y Miró. La selección dialoga con la historia familiar y los intereses culturales de sus moradores.`
        },
        {
          id: "fosiles",
          title: "Paleontología y Fósiles",
          text: `En el primer patio, un espacio íntimo alberga piezas fósiles recolectadas en la región: ammonites, restos de megafauna y huellas petrificadas que cuentan la historia geológica de Tarija. La colección permite imaginar un Picacho remoto, cubierto por mares o frecuentado por gliptodontes.`
        },
        {
          id: "arqueologia",
          title: "Arqueología Originaria",
          text: `En el interior de la casona y en espacios del segundo patio se presentan piezas de alfarería, herramientas y textiles recolectados en Tarija y sus valles. Son testimonios de los pueblos originarios que habitaron esta tierra antes de la colonia, como los tomatas y churumatas.`
        },
        {
          id: "canteria",
          title: "Obras de Cantería",
          text: `En el Picacho hay numerosas esculturas en piedra, muchas talladas in situ por artesanos locales o visitantes. Las más destacadas acompañan los accesos: el portal, la plazoleta de la fuente, la capilla, y la Santa Cruz de Lajas. Cada una tiene un simbolismo espiritual o territorial.`
        }
      ]
    },
    en: {
      title: "Expressions of El Picacho",
      toggle: "Español",
      nav: ["Land Art", "La Pinacoteca", "Paleontology", "Archaeology", "Stonework"],
      sections: [
        {
          id: "land-art",
          title: "Land Art, Nature and Art",
          text: `El Picacho features a practice of Land Art expressed both through landscape design and site-specific installations. These works are inspired by river stones and forest trunks. Highlights include tributes to Goya’s black paintings, a local Fernando Botero, a torso by Marina Núñez del Prado, a “Origin of the World” homage in river stone, and a César Vallejo piece in black stone carved atop white.`
        },
        {
          id: "pinacoteca",
          title: "The Family Art Gallery",
          text: `Upstairs in the manor house, the former library was transformed into an art gallery. It displays family portraits, works by contemporary Bolivian artists, and prints by Durero, Goya, and Miró. The collection reflects the family’s history and cultural affinities.`
        },
        {
          id: "fosiles",
          title: "Paleontology and Fossils",
          text: `A small room off the first courtyard houses fossils found in the region: ammonites, megafauna remains, and petrified footprints. These tell the deep-time story of Tarija—once submerged or trodden by prehistoric creatures.`
        },
        {
          id: "arqueologia",
          title: "Indigenous Archaeology",
          text: `In the second courtyard and interior alcoves, visitors find ceramics, tools, and textiles from the region’s original peoples—Tomatas, Churumatas, and others who lived here before the colonial period.`
        },
        {
          id: "canteria",
          title: "Stonework Sculptures",
          text: `Throughout El Picacho, stone carvings mark key spaces—the entryway, the chapel, the central plaza, and the Santa Cruz de Lajas. Many were made by local or visiting artisans and carry symbolic, spiritual, or territorial meaning.`
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a]">
      {/* Sticky nav with logo and menu */}
      <header className="sticky top-0 bg-white z-50 flex flex-wrap items-center justify-between px-6 md:px-16 py-4 border-b border-[#16309e]/15">
        <a
          href="/"
          className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline"
        >
          El Picacho
        </a>
        <nav className="flex flex-wrap items-center gap-6 text-[#16309e] text-sm md:text-base">
          {t[lang].sections.map((section, idx) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:border-b-2 border-current pb-1 transition"
            >
              {t[lang].nav[idx]}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-3 py-1 border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
          >
            {t[lang].toggle}
          </button>
        </nav>
      </header>

      {/* Page Title */}
      <div className="text-center px-6 md:px-16 pt-12 md:pt-20 pb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[#16309e]">
          {t[lang].title}
        </h1>
      </div>

      {/* Sections */}
      <div className="px-6 md:px-16 pb-16">
        {t[lang].sections.map((section, i) => (
          <div key={i} id={section.id} className="mb-20 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#16309e]">{section.title}</h2>
            <p className="text-lg mb-6 whitespace-pre-line">{section.text}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">
                Imagen 1
              </div>
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">
                Imagen 2
              </div>
              <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">
                Imagen 3
              </div>
            </div>
          </div>
        ))}

        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-block px-6 py-2 text-base md:text-lg text-[#16309e] border border-[#16309e] rounded hover:bg-[#16309e] hover:text-white transition"
          >
            ← {lang === "es" ? "Volver al Inicio" : "Back to Home"}
          </a>
        </div>
      </div>
    </div>
  );
}
