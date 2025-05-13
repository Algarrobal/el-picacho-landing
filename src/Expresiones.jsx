import { useState } from "react";

export default function Expresiones() {
  const [lang, setLang] = useState("es");

  const t = {
    es: {
      pageTitle: "Expresiones de El Picacho",
      indexLabel: "Explorar secciones",
      sections: [
        {
          id: "landart",
          title: "Land Art, naturaleza y arte",
          text: `En el Picacho se desarrolla la disciplina artística de “Land Art”, tanto en su expresión paisajista articulada al parque botánico cuanto a la practica de las “instalaciones”. Estas están inspiradas en piedras del río y troncos del bosque. En el conjunto hay una remembranza de la pintura negra de Goya, un Fernando Botero del lugar, un torso de Marina Nuñez del Prado, un “Origen del Mundo” de Gustav Courbet en piedra lamida por las aguas, y al pie del campanario, un homenaje en piedra negra sobre piedra blanca al gran poeta latinoamericano César Vallejo, entre otras instalaciones…`
        },
        {
          id: "pinacoteca",
          title: "La Pinacoteca Familiar",
          text: `Se puede apreciar en ella pinturas en elementos naturales, oleo y acuarela, diseños en lápiz desde la colonia hasta hoy: Pérez de Holguín - Zulbaran, y maestros contemporáneos como el ecuatoriano Oswaldo Guayasamín y los bolivianos Raul Lara, Ricardo Perez Alcalá, Gil Coimbra, Gilgaro Antezana, Gil Imaná, Gaston Ugalde, entre otros…`
        },
        {
          id: "paleontologia",
          title: "Paleontología y Fósiles",
          text: `Piezas como colmillos, y muelas de los mamut que habitaron el valle de Tarija en el pleistoceno - ordovícico junto a fósiles locales de la Antártida, Marruecos, Alemania y de otros lugares.`
        },
        {
          id: "arqueologia",
          title: "Arqueología Originaria",
          text: `Vasos ceremoniales Aymara, Quechuas, orfebrería, bastones de mando y piezas en piedra de culturas originarias.`
        },
        {
          id: "canteria",
          title: "Obras de Cantería",
          text: `Particularmente del barroco mestizo del maestro Valentín Montealegre en piedra comanche y del maestro Tito, en piedra lavada de rio, así como la fuente principal del Picacho, labrada por canteros chuquisaqueños. Custodia la casona, un San Miguel Arcángel en piedra rosácea Potosina de autor anónimo, junto a un mascarón de autor anónimo de canaletas que mira hacia la entrada.\n\nRío arriba en el mirador la Santa Cruz de Lajas tallada en tres metros de altura por nombre de autor…`
        }
      ]
    },
    en: {
      pageTitle: "Expressions of El Picacho",
      indexLabel: "Explore sections",
      sections: [
        {
          id: "landart",
          title: "Land Art: A Dialogue Between Nature and Art",
          text: `At El Picacho, the artistic discipline of Land Art takes shape—both in its landscaped expressions integrated into the botanical park and in the form of site-specific installations. These works are inspired by river stones and forest trunks.\n\nAcross the grounds, one finds echoes of Goya’s Black Paintings, a local Fernando Botero, a torso reminiscent of Marina Núñez del Prado, and even a natural ‘Origin of the World’—a stone smoothed by river waters evoking Courbet’s famous work. At the foot of the bell tower, a striking black stone laid over white honors the great Latin American poet César Vallejo, among other installations…`
        },
        {
          id: "pinacoteca",
          title: "The Family Pinacoteca",
          text: `It features paintings on natural materials, as well as works in oil, watercolor, and pencil—ranging from the colonial period to the present day: from Pérez de Holguín and Zurbarán to contemporary masters such as Ecuador’s Oswaldo Guayasamín, and Bolivian artists like Raúl Lara, Ricardo Pérez Alcalá, Gil Coimbra, Gilgaro Antezana, Gil Imaná, Gastón Ugalde, among others…`
        },
        {
          id: "paleontologia",
          title: "Paleontology & Fossils",
          text: `Pieces such as tusks and molars from the mammoths that once roamed the Tarija Valley during the Pleistocene–Ordovician, alongside local fossils and specimens from Antarctica, Morocco, Germany, and other regions.`
        },
        {
          id: "arqueologia",
          title: "Ancestral Archaeology",
          text: `Ceremonial vessels of the Aymara and Quechua peoples, goldsmithing, ceremonial staffs, and stone artifacts from Indigenous cultures.`
        },
        {
          id: "canteria",
          title: "Stoneworks",
          text: `Particularly notable are the works of mestizo baroque by master Valentín Montealegre, carved in comanche stone, and by master Tito, using river-washed stone. Also featured is El Picacho’s main fountain, crafted by stonemasons from Chuquisaca.\n\nGuarding the manor house stands a Saint Michael the Archangel sculpted in pink Potosí stone by an anonymous artist, alongside a stone mask gazing toward the entrance.\n\nFarther upstream, at the lookout point, rises the Santa Cruz de Lajas—carved from stone into a three-meter-high cross, its maker’s name unknown…`
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 md:p-16 font-sans">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">{t[lang].pageTitle}</h1>
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm"
        >
          {lang === "es" ? "English" : "Español"}
        </button>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-lg font-semibold mb-4">{t[lang].indexLabel}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {t[lang].sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm md:text-base px-4 py-2 border-b-2 border-transparent hover:border-black transition"
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>

      {t[lang].sections.map((section, index) => (
        <div key={index} id={section.id} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-lg whitespace-pre-line mb-4">{section.text}</p>
          <div className="h-64 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-500 italic">
            [Imagen para "{section.title}"]
          </div>
        </div>
      ))}
    </div>
  );
}
