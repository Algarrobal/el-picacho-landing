import { useState } from "react";

export default function Expresiones() {
  const [lang, setLang] = useState("es");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    es: {
      title: "Rincones de El Picacho",
      toggle: "English",
      nav: [
        { label: "Inicio", link: "/" },
        { label: "Land Art", link: "#land-art" },
        { label: "La Pinacoteca", link: "#pinacoteca" },
        { label: "Paleontología", link: "#fosiles" },
        { label: "Arqueología", link: "#arqueologia" },
        { label: "Cantería", link: "#canteria" },
        { label: "Reservas", link: "/picacheada", color: "#c00093" }
      ],
      sections: [
        {
          id: "land-art",
          title: (
            <>
              <span className="text-[#c00093]">Land Art</span>, naturaleza y arte
            </>
          ),
          text: `En el Picacho se desarrolla la disciplina artística de “Land Art”, tanto en su expresión paisajista articulada al parque botánico cuanto a la práctica de las “instalaciones”. Estas están inspiradas en piedras del río y troncos del bosque. En el conjunto hay una remembranza de la pintura negra de Goya, un Fernando Botero del lugar, un torso de Marina Núñez del Prado, un “Origen del Mundo” de Gustav Courbet en piedra lamida por las aguas, y al pie del campanario, un homenaje en piedra negra sobre piedra blanca al gran poeta latinoamericano César Vallejo, entre otras instalaciones…`
        },
        {
          id: "pinacoteca",
          title: (
            <>
              La <span className="text-[#c00093]">Pinacoteca</span> Familiar
            </>
          ),
          text: `Se puede apreciar en ella pinturas en elementos naturales, oleo y acuarela, diseños en lápiz desde la colonia hasta hoy: Pérez de Holguín - Zulbaran, y maestros contemporáneos como el ecuatoriano Oswaldo Guayasamín y los bolivianos Raul Lara, Ricardo Perez Alcalá, Gil Coimbra, Gilgaro Antezana, Gil Imaná, Gaston Ugalde, entre otros…`
        },
        {
          id: "fosiles",
          title: (
            <>
              Paleontología <span className="text-[#c00093]">y</span> Fósiles
            </>
          ),
          text: `Piezas como colmillos, y muelas de los mamut que habitaron el valle de Tarija en el pleistoceno - ordovícico junto a fósiles locales de la Antártida, Marruecos, Alemania y de otros lugares.`
        },
        {
          id: "arqueologia",
          title: (
            <>
              <span className="text-[#c00093]">Arqueología</span> Originaria
            </>
          ),
          text: `Vasos ceremoniales Aymara, Quechuas, orfebrería, bastones de mando y piezas en piedra de culturas originarias.`
        },
        {
          id: "canteria",
          title: (
            <>
              Obras de <span className="text-[#c00093]">Cantería</span>
            </>
          ),
          text: `Particularmente del barroco mestizo del maestro Valentín Montealegre en piedra comanche y del maestro Tito, en piedra lavada de rio, así como la fuente principal del Picacho, labrada por canteros chuquisaqueños. Custodia la casona, un San Miguel Arcángel en piedra rosácea Potosina de autor anónimo, junto a un mascarón de autor anónimo de canaletas que mira hacia la entrada. 

                 Río arriba en el mirador la Santa Cruz de Lajas tallada en tres metros de altura por nombre de autor…`
        }
      ]
    },
    en: {
      title: "Nooks of El Picacho",
      toggle: "Español",
      nav: [
        { label: "Home", link: "/" },
        { label: "Land Art", link: "#land-art" },
        { label: "The Art Gallery", link: "#pinacoteca" },
        { label: "Paleontology", link: "#fosiles" },
        { label: "Archaeology", link: "#arqueologia" },
        { label: "Stonework", link: "#canteria" },
        { label: "Bookings", link: "/picacheada", color: "#c00093" }
      ],
      sections: [
        {
          id: "land-art",
          title: (
            <>
              <span className="text-[#c00093]">Land Art</span>, Nature and Art
            </>
          ),
          text: `El Picacho features a practice of Land Art expressed both through landscape design and site-specific installations. These works are inspired by river stones and forest trunks. Highlights include tributes to Goya’s black paintings, a local Fernando Botero, a torso by Marina Núñez del Prado, a “Origin of the World” homage in river stone, and a César Vallejo piece in black stone carved atop white.`
        },
        {
          id: "pinacoteca",
          title: (
            <>
              <span className="text-[#c00093]">La Pinacoteca</span>
            </>
          ),
          text: `Features paintings on natural materials, oils and watercolors, pencil sketches from colonial times to the present: Pérez de Holguín – Zurbarán, and contemporary masters such as the Ecuadorian Oswaldo Guayasamín and Bolivians Raúl Lara, Ricardo Pérez Alcalá, Gil Coimbra, Gilgaro Antezana, Gil Imaná, Gastón Ugalde, among others.`
        },
        {
          id: "fosiles",
          title: (
            <>
              Paleontology <span className="text-[#c00093]">&</span> Fossils
            </>
          ),
          text: `Specimens include tusks and molars from the mammoths that roamed the Tarija valley during the Pleistocene–Ordovician era, alongside fossils from Antarctica, Morocco, Germany, and other parts of the world.`
        },
        {
          id: "arqueologia",
          title: (
            <>
              Native <span className="text-[#c00093]">Archaeology</span>
            </>
          ),
          text: `Ceremonial vessels from the Aymara and Quechua peoples, goldsmithing, ceremonial staffs, and carved stone pieces from Indigenous cultures.`
        },
        {
          id: "canteria",
          title: (
            <>
              <span className="text-[#c00093]">Stonework</span>
            </>
          ),
          text: `Notably, the mestizo baroque works of master Valentín Montealegre in comanche stone and of master Tito in river-washed stone, as well as the main fountain of El Picacho, sculpted by stonemasons from Chuquisaca. The manor is watched over by a San Miguel Archangel carved in pink stone from Potosí by an anonymous artist, alongside a water spout mask of unknown origin that faces the entrance.
Upstream at the lookout stands the Santa Cruz de Lajas, carved three meters tall by an unnamed sculptor…`
        }
      ]
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white text-[#3e484a] px-4 sm:px-6 md:px-16 py-8 md:py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 relative z-50">
        <a href="/" className="text-xl md:text-2xl font-bold text-[#16309e] hover:underline">
          El Picacho
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">
          {t[lang].nav.map((item, idx) => (
  <li key={idx}>
    <a
      href={item.link}
      className={`hover:border-b-2 border-current pb-1 transition ${
        item.label === "Inicio" ||
        item.label === "Reservas" ||
        item.label === "Home" ||
        item.label === "Bookings"
          ? "text-[#c00093]"
          : "text-[#16309e]"
      }`}
    >
      {item.label}
    </a>
  </li>
))}
          <li>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="border border-[#16309e] px-4 py-1 rounded hover:bg-[#16309e] hover:text-white transition"
            >
              {t[lang].toggle}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-[#16309e] focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded shadow-md p-4 text-sm space-y-3 w-52">
            {t[lang].nav.map((item, idx) => (
  <a
    key={idx}
    href={item.link}
    onClick={() => setMobileMenuOpen(false)}
    className={`block hover:underline ${
      item.label === "Inicio" ||
      item.label === "Reservas" ||
      item.label === "Home" ||
      item.label === "Bookings"
        ? "text-[#c00093]"
        : "text-[#16309e]"
    }`}
  >
    {item.label}
  </a>
))}
            <button
              onClick={() => {
                setLang(lang === "es" ? "en" : "es");
                setMobileMenuOpen(false);
              }}
              className="w-full border border-[#16309e] px-3 py-2 rounded hover:bg-[#16309e] hover:text-white transition"
            >
              {t[lang].toggle}
            </button>
          </div>
        )}
      </div>

      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
        <span className="text-[#c00093]">
          {lang === "es" ? "Rincones" : "Nooks"}
        </span>{" "}
        <span className="text-[#16309e]">
          {lang === "es" ? "de El Picacho" : "of El Picacho"}
        </span>
      </h1>

      {/* Sections */}
      {t[lang].sections.map((section, i) => (
        <div key={i} id={section.id} className="mb-20 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#16309e]">
            {section.title}
          </h2>
          <p className="text-base sm:text-lg mb-6 whitespace-pre-line">{section.text}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">Imagen 1</div>
            <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">Imagen 2</div>
            <div className="bg-gray-100 h-48 rounded-md flex items-center justify-center text-gray-400">Imagen 3</div>
          </div>
        </div>
      ))}

      {/* Back Button */}
      <div className="text-center mt-16 pb-12">
        <a
          href="/"
          className="inline-block px-6 py-2 text-base md:text-lg text-[#c00093] border border-[#c00093] rounded hover:bg-[#c00093] hover:text-white transition"
        >
          ← {lang === "es" ? "Volver al Inicio" : "Back to Home"}
        </a>
      </div>
    </div>
  );
}
