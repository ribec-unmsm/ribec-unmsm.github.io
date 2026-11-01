// Datos del sitio RIBEC.
// Para agregar una publicación, añade una fila al arreglo PUBS (ver formato más abajo).
// Para agregar un miembro, añade una entrada a MEMBERS con una letra única como clave.

const MEMBERS = {
  J: {
    name: "Jehoshua Macedo-Bedoya",
    role: "Naturalista e investigador. Jefe de la RIBEC desde enero de 2025. Laboratorio de Entomología y Laboratorio de Ecología Tropical y Análisis de Datos, UNMSM.",
    role_en: "Naturalist and researcher. Head of RIBEC since January 2025. Entomology Laboratory and Tropical Ecology and Data Analysis Laboratory, UNMSM.",
    lines: "Ecología, taxonomía, biodiversidad.",
    lines_en: "Ecology, taxonomy, biodiversity.",
    orcid: "0009-0008-7958-5318",
    stats: [37, "9 557", 42]
  },
  S: {
    name: "Stephen Santos",
    alias: ["Victor Santos-Linares", "Victor Stephen Santos-Linares", "Víctor S. Santos"],
    role: "Bachiller en Ciencias Biológicas. Investigador en la Facultad de Ciencias Biológicas, Laboratorio de Ecología Tropical y Análisis de Datos, UNMSM. Firma sus artículos como Victor Santos-Linares.",
    role_en: "Holds a bachelor's degree in Biological Sciences. Researcher at the Faculty of Biological Sciences, Tropical Ecology and Data Analysis Laboratory, UNMSM. Publishes under the name Victor Santos-Linares.",
    lines: "Biología de la conservación, biodiversidad, ecología de ecosistemas. Trabajo de campo, análisis de datos, estadística y sistemas de información geográfica.",
    lines_en: "Conservation biology, biodiversity, ecosystem ecology. Fieldwork, data analysis, statistics, and geographic information systems (GIS).",
    rg: "https://www.researchgate.net/profile/Stephen-Santos",
    orcid: "0009-0009-0379-7469",
    stats: [14, "1 779", 19]
  },
  T: {
    name: "Julio César Tineo Pérez",
    alias: ["Julio César Tineo-Pérez", "Julio C. Tineo"],
    role: "Universidad Nacional Mayor de San Marcos y Asociación Peruana de Astrobiología. Miembro de la RIBEC.",
    role_en: "National University of San Marcos (UNMSM) and the Peruvian Astrobiology Association. Member of RIBEC.",
    lines: "Cultivo de tejidos vegetales, biofilms, astrobiología.",
    lines_en: "Plant tissue culture, biofilms, astrobiology.",
    orcid: "0009-0007-2989-3438"
  },
  R: {
    name: "Ricardo Franco Morales",
    role: "Facultad de Ciencias Biológicas, Universidad Nacional Mayor de San Marcos. Miembro de la RIBEC.",
    role_en: "Faculty of Biological Sciences, National University of San Marcos (UNMSM). Member of RIBEC.",
    lines: "Flora andina.",
    lines_en: "Andean flora."
  }
};

// Tipos de publicación
const TYPES = { A: "Artículo", P: "Preprint", C: "Ponencia en congreso", O: "Póster", K: "Capítulo de libro" };

// Formato de cada fila:
// [año, mes, tipo, título (usa *asteriscos* para cursiva), revista, autores separados por " · ", letras de los miembros, {v: volumen y páginas, doi, pdf}]
const PUBS = [
[2026,10,"A","Flora Diversity and Conservation Status Along an Altitudinal Gradient in the District of Sumbilca, Huaral, Peru","Diversity (MDPI)","Victor Santos-Linares · Jehoshua Macedo-Bedoya · Marcel La Rosa-Sánchez · Ricardo Franco Morales · Yakov Quinteros-Gómez · Raphael Baca-Cuicapusa · Doris Gómez-Ticerán · Enoc Jara-Peña","SJYR",{v:"v. 18, 627",doi:"10.3390/d18100627",pdf:"2026-sumbilca-diversity.pdf"}],
[2026,10,"A","Sistemática y filogeografía del género *Conirostrum* (Thraupidae, Passeriformes): una revisión","The Biologist (Lima)","Enzo Peralta-Alcántara · Abel Salinas-Inga · Victor Santos-Linares · Henry Angulo-Paz · Matias Laynes-Espino · Jehoshua Macedo-Bedoya","SJ",{v:"v. 24, n. 2",doi:"10.62430/rtb20262422214",pdf:"2026-conirostrum-biologist.pdf"}],
[2026,10,"A","Aboveground Biomass and Carbon Stocks Across Four Contrasting Vegetation Units in Sierra del Divisor National Park, Peru: Structural Attributes Outweigh Taxonomic Diversity","Ecologies (MDPI)","Fernando Pérez Grández · Santiago Alberto Casas Luna · Sandro Marcel La Rosa Sánchez Navarro · […] · Yakov Quinteros-Gómez","JY"],
[2026,8,"P","Effects of Anthropogenic Activity on Aboveground Biomass and Carbon Stock in Upland and Seasonally Flooded Forests in Sierra Del Divisor National Park, Perú","","Fernando Pérez Grandez · Santiago Casas Luna · Sandro Marcel La Rosa Sánchez Navarro · […] · Yakov Quinteros-Gómez","Y"],
[2026,8,"A","Macrofungal Diversity of Tingana, the Highest Flooded Forest in Peru: A Preliminary Assessment","Forests (MDPI)","Jehoshua Macedo-Bedoya · Yakov Quinteros-Gómez · Victor Santos-Linares · Marcel La Rosa-Sánchez · Franco Angeles-Alvarez · Flavia Anlas-Rosado · Abel Salinas-Inga · Doris Gómez-Ticerán","SJY",{v:"v. 17, 959",doi:"10.3390/f17080959",pdf:"2026-macrofungi-tingana-forests.pdf"}],
[2026,7,"A","Floristic Composition and Mutualistic Interactions in Ant Gardens of a Tropical Rocky Outcrop Forest in Peru","Forests (MDPI)","Jehoshua Macedo-Bedoya · Fernando Camones Gonzalez · Abel Salinas · […] · Yakov Quinteros-Gómez","JY"],
[2026,6,"A","Vegetative anatomical traits of *Vanilla pompona* subsp. *grandiflora* (Orchidaceae) in the Peruvian flooded Andean-Amazonian piedmont","Frontiers in Ecology and Evolution","Manuel Antonio Perez-Mozombite · Sanyori Tovalino · María Quiroz-Sierra · […] · Doris Gómez-Ticerán","JY"],
[2026,5,"A","Assessing the Internal Structural Integrity of *Ceroxylon* Palms Using Sonic Tomography in Tropical Montane Forests of the Peruvian Andes","Forests (MDPI)","Doris Gómez-Ticerán · Abel Salinas · Jehoshua Macedo-Bedoya · […] · Yakov Quinteros-Gómez","JY"],
[2026,5,"P","Assessing the Internal Structural Integrity of *Ceroxylon* Palms Using Sonic Tomography in Tropical Montane Forests of the Peruvian Andes","","Doris Gómez-Ticerán · Abel Salinas-Inga · Jehoshua Macedo-Bedoya · […] · Yakov Quinteros-Gómez","Y"],
[2026,4,"A","Registro formal de *Jabiru mycteria* (Lichtenstein, 1819) en el humedal de El Paraíso (Lima, Perú) y contribución al conocimiento de su distribución en la costa peruana","The Biologist (Lima)","Adrián Rubio-Falconi · Claudia V. Mera · Victor Santos-Linares · Luigi Bravo-Salazar · Jehoshua Macedo-Bedoya","SJ",{v:"v. 24, n. 1, p. 157-163",doi:"10.62430/rtb20262412070",pdf:"2026-jabiru-mycteria-biologist.pdf"}],
[2026,4,"A","Primer registro de canibalismo no sexual en *Musonia margharethae* (Battiston & Picciau, 2008) (Mantodea; Thespidae)","Biotempo","Elijah Salas-Bedoya · Jehoshua Macedo-Bedoya","J"],
[2025,12,"A","El papel dual de los biofilms en la exploración espacial","Revista Científica de Astrobiología","Victor Stephen Santos-Linares · Julio César Tineo-Pérez · Jehoshua Macedo-Bedoya","SJT",{v:"v. 2, n. 2, p. 42-55",doi:"10.69976/aspast.v2n2.3",pdf:"2025-biofilms-astrobiologia.pdf"}],
[2025,12,"C","Primer registro del género *Mesobiotus* (Tardigrada) en Obrajillo, Lima-Perú","","Luis Alberto Allccahuaman · Jehoshua Macedo-Bedoya","J"],
[2025,12,"A","Anidación urbana de *Charadrius vociferus* (Charadriidae) en un yacimiento arqueológico en Perú","Conservación Colombiana","Jehoshua Macedo-Bedoya · Samuel Ramírez-Reyes · Matias Laynes-Espino · Victor Santos-Linares","SJ",{v:"v. 30, n. 2, p. 78",doi:"10.54588/cc.2025v30n2a7",pdf:"2025-charadrius-vociferus-conservacion-colombiana.pdf"}],
[2025,12,"A","Primeros registros de *Coendou bicolor* y *Coendou longicaudatus* (Erethizontidae) para el Parque Nacional Cordillera Azul, Perú","Biota Colombiana","Jehoshua Macedo-Bedoya · Victor Santos-Linares · Franco Angeles-Alvarez · Marcel La Rosa-Sánchez · Abel Salinas-Inga","SJ",{v:"v. 26",doi:"10.21068/2539200X.1307",pdf:"2025-coendou-biota-colombiana.pdf"}],
[2025,11,"A","Floristic Composition and Species Conservation Status in Three *Polylepis* (Rosaceae) Relict Forests in Peru","Plants (MDPI)","Yakov Quinteros-Gómez · Jehoshua Macedo-Bedoya · Flavia Anlas-Rosado · […] · Iván Fernández-De la Cruz","JY"],
[2025,11,"A","Modelización de la distribución potencial de *Gentianella weberbaueri* (Gentianaceae) en Perú","Lilloa","Victor Santos-Linares · Jehoshua Macedo-Bedoya","SJ",{v:"v. 62, n. 2, p. 747-761",doi:"10.30550/j.lil/2235",pdf:"2025-gentianella-lilloa.pdf"}],
[2025,11,"A","Composición de la avifauna presente en la Universidad Nacional Mayor de San Marcos, Lima, Perú","The Biologist","Jehoshua Macedo-Bedoya","J"],
[2025,11,"A","Remoción de cadmio y cobre por *Desmodesmus communis* (Chlorophyta, Sphaeropleales) aislada del humedal altoandino lago Junín (Perú)","Lilloa","Jara Enoc · Haydee Montoya · Ruth Huerta · […] · José Gómez","Y"],
[2025,10,"A","Primer reporte de *Viridiscus viridissimus* (Péterfi, 1956) (Tardigrada) para el departamento de Cusco, Perú","Biotempo","Luis Alberto Allccahuaman · Jehoshua Macedo-Bedoya","J"],
[2025,10,"A","Registro de forrajeo nocturno de *Tyrannus melancholicus* Vieillot, 1819 asociado a luz artificial en la ciudad de Iquitos, Perú","Biotempo","Jehoshua Macedo-Bedoya · Juan Carlos Macedo-Pinedo","J"],
[2025,10,"A","Evidencia macroevolutiva de la familia de pseudogenes nanog en humanos y chimpancés","Biotempo","Diego Sánchez Véliz · Mizraim Moroyoqui · Giuliana Aguilar-Soncco · Jehoshua Macedo-Bedoya","JD"],
[2025,9,"P","Anatomical Study of the Vegetative Organs of *Vanilla pompona* subsp. *grandiflora* (Orchidaceae) in Floodplain Ecosystems of the Peruvian Amazon","","Manuel Antonio Perez-Mozombite · Sanyori Tovalino · María Iluminada Quiroz-Sierra · […] · Jehoshua Macedo-Bedoya","Y"],
[2025,6,"A","Noninvasive Sonic Tomography for the Detection of Internal Defects in Relict Woodlands of *Polylepis* in Peru","Forests (MDPI)","Yakov Quinteros-Gómez · Abel Salinas · Jehoshua Macedo-Bedoya · […] · Olga Lidia Solano Dávila","JY"],
[2025,5,"A","Presencia de *Dactylobiotus* sp. (Tardigrada) en el Río Chillón, Lima, Perú","Biotempo","Jehoshua Macedo-Bedoya · Luis Alberto Allccahuaman · Kevin Rojas-Hinojosa","J"],
[2025,5,"A","Primeros registros genéricos de tardígrados (Tardigrada) para la provincia de Víctor Fajardo, Perú","The Biologist","Jehoshua Macedo-Bedoya · Luis Alberto Allccahuaman","J"],
[2025,4,"A","Evaluación de la supervivencia de los tardígrados en anoxibiosis: límites de la criptobiosis en condiciones extremas","","Luis Alberto Allccahuaman · Jehoshua Macedo-Bedoya · Luisa Elizabeth Calderón Ayala · Hugo Leonel Vicente Ruiz","J"],
[2025,4,"A","¿Viola la evolución la segunda ley de la termodinámica?","The Biologist","Diego Sánchez Véliz · Jehoshua Macedo-Bedoya","JD"],
[2025,3,"A","Variabilidad morfométrica y productividad de los frutos de *Mauritia flexuosa* L.f. en un gradiente altitudinal en Perú","Caldasia","Yakov Quinteros-Gómez · Martha M Zarco-González · Doris Gómez-Ticerán · […] · Octavio Monroy-Vilchis","Y"],
[2025,1,"A","Observaciones ecológicas de *Microlophus tigris* (Sauria: Tropidurinae) en los alrededores del Parque Ecológico de La Molina, Lima, Perú","Ecología Aplicada","Jehoshua Macedo-Bedoya","J"],
[2024,12,"A","Ant-Plant Mutualism in *Mauritia flexuosa* Palm Peat Swamp Forests: A Study of Host and Epiphyte Diversity in Ant Gardens","Insects (MDPI)","Yakov Quinteros-Gómez · Jehoshua Macedo-Bedoya · Abel Salinas-Inga · Flavia Anlas-Rosado · Victor Santos-Linares · Geancarlo Alarcon-Iman · Doris Gómez-Ticerán · Franco Angeles-Alvarez · Sergio Olórtegui-Chamolí · Julio Solis-Sarmiento · Enoc Jara-Peña · Octavio Monroy-Vilchis","SJY",{v:"v. 15, 1011",doi:"10.3390/insects15121011",pdf:"2024-ant-gardens-insects.pdf"}],
[2024,12,"A","Ampliación del registro altitudinal de *Anchotatus peruvianus* y *Microcoema* sp. en Cajatambo, Perú","Acta Zoológica Lilloana","Jehoshua Macedo-Bedoya · Eliana Quispitupac · Yakov Quinteros-Gómez · Enzo Peralta-Alcántara","JY"],
[2024,12,"A","Algunas consideraciones respecto a la naturaleza disciplinaria de la biología moderna","The Biologist","Jehoshua Macedo-Bedoya","J"],
[2024,12,"A","Potencial ficorremediador de algas altoandinas *Mougeotia* sp. y *Spirogyra* sp. (Charophyta): Evaluación de la capacidad de bioremoción de cobre y plomo","Lilloa","Jara Enoc · Haydee Montoya · Karen Eugenia Quispe Oré · […] · Diego Prada","Y"],
[2024,11,"A","Floristic Diversity and Distribution Pattern along an Altitudinal Gradient in the Central Andes: A Case Study of Cajatambo, Peru","Plants (MDPI)","Yakov Quinteros-Gómez · Jehoshua Macedo-Bedoya · Victor Santos-Linares · Franco Angeles-Alvarez · Doris Gómez-Ticerán · José Campos-De la Cruz · Julio Solis Sarmiento · Abel Salinas-Inga · Zinnia Valencia-Saavedra","SJY",{v:"v. 13, 3328",doi:"10.3390/plants13233328",pdf:"2024-cajatambo-plants.pdf"}],
[2024,11,"A","Hongos en el espacio","","Jehoshua Macedo-Bedoya · Flavia Anlas-Rosado · Yakov Quinteros-Gómez","JY"],
[2024,10,"A","Poblaciones de roedores antrópicos (Rodentia: Muridae) y su relación con el ambiente en una ciudad universitaria de Lima, Perú","The Biologist","Jehoshua Macedo-Bedoya · Marco Antonio Carbajal · Jhosue Zevallos López · […] · Kassandra Urbina Sanchez","J"],
[2024,9,"A","La evolución y el método científico","The Biologist","Diego Sánchez Véliz · Álvaro Ibaceta Rossel · José Ariel Fernandez · […] · Mizraim Moroyoqui","JD"],
[2024,8,"A","Entomofauna urbana, un estudio en la Universidad Nacional Mayor de San Marcos, Lima, Perú","Acta Zoológica Lilloana","Jehoshua Macedo-Bedoya","J"],
[2024,8,"A","Primer registro de coexistencia entre *Loxosceles laeta* (Araneae: Sicariidae) (Nicolet, 1849) y *Hadruroides lunatus* (Scorpiones: Vejovidae) (Koch, 1867) en Perú","Biotempo","Jehoshua Macedo-Bedoya · Jhosue Zevallos López","J"],
[2024,8,"A","Primer reporte de jardines de hormigas en renacales de Piedemonte Andino-Amazónico en Perú","Lilloa","Yakov Quinteros-Gómez · Jehoshua Macedo-Bedoya","JY"],
[2024,6,"A","Diversity and species of vascular epiphytes in Tingana, the highest flooded forest in Peru","Mires and Peat","Yakov Quinteros-Gómez · Betty Millán · Doris Gómez-Ticerán · […] · Ángel Balbuena-Serrano","JY"],
[2024,6,"A","Propagación vegetativa de *Vanilla pompona* subsp. *grandiflora* (Orchidaceae) en territorios inundables del Valle del Alto Mayo, Perú","Acta Botanica Mexicana","Yakov Quinteros-Gómez · Dino Cabrera Mestanza · Jehoshua Macedo-Bedoya · Victor Santos-Linares · Abel Salinas-Inga","SJY",{v:"v. 131, e2309",doi:"10.21829/abm131.2024.2309",pdf:"2024-vanilla-acta-botanica-mexicana.pdf"}],
[2024,5,"A","Análisis de los lotes de la familia Belonidae del departamento de ictiología del Museo de Historia Natural, Universidad Nacional Mayor de San Marcos, Lima, Perú","The Biologist","Jehoshua Macedo-Bedoya · Jhosue Zevallos López · Claudia Mera","J"],
[2024,5,"A","Los hongos alucinógenos (*Psilocybe*, Hymenogastraceae) en el desarrollo evolutivo de la consciencia del hombre","Lilloa","Jehoshua Macedo-Bedoya · Fatima Calvo","J"],
[2023,9,"A","Gestión de manejo de residuos sólidos hospitalarios y conciencia ambiental post Covid-19 en un hospital nacional, Lima, 2023","Ciencia Latina Revista Científica Multidisciplinar","Villanueva Quispe Ruth Liliana · Yakov Quinteros-Gómez · Baldoceda Ponce Yordan Américo · Sánchez Gutiérrez Fredd Oliver","Y"],
[2023,8,"O","Distribución de la vegetación del distrito de Cajatambo en un gradiente altitudinal","","Yakov Quinteros-Gómez · Abel Salinas · Franco Angeles · […] · Lilavati Luz Ismodes Salamanca","Y"],
[2023,8,"O","Uso del cultivo in vitro de *Ipomoea batatas* para desarrollar la investigación formativa en el curso de Cultivo de Células y Tejidos Vegetales","","Cristian J. Cuadra · Jhosue J. Gutierrez · Carol K. Povis · Víctor S. Santos · Julio C. Tineo · Sara Cervantes · Rafael La Rosa","ST",{v:"Reunión Científica ICBAR, Facultad de Ciencias Biológicas, UNMSM",pdf:"2023-poster-ipomoea-batatas-icbar.png"}],
[2023,6,"A","Acceso laboral de personas con discapacidad en entidades públicas, Lima Metropolitana 2023","Ciencia Latina Revista Científica Multidisciplinar","Jose Carlos Medina Bolo · Yakov Quinteros-Gómez","Y"],
[2023,4,"A","Effects of human disturbance on above-ground carbon stocks in north-west Amazonian *Mauritia flexuosa* peat swamp forests","Mires and Peat","Yakov Quinteros-Gómez · Martha M Zarco-González · Doris Gómez Ticerán · […] · Octavio Monroy-Vilchis","Y"],
[2021,3,"A","Turberas en Valle del Alto Mayo, Perú: importancia, amenazas y perspectivas de conservación","CIENCIA ergo sum","Yakov Quinteros-Gómez · Octavio Monroy-Vilchis · Martha M Zarco-González","Y"],
[2021,2,"A","Floristic composition, structure and species conservation status of *Mauritia flexuosa* palm swamps in Andean-Amazonian piedmont in the Department of San Martín, Peru","Revista Mexicana de Biodiversidad","Yakov Quinteros-Gómez · Octavio Monroy-Vilchis · Martha M Zarco-González · […] · Xareni P. Pacheco","Y"],
[2016,12,"K","Ecología, uso y conservación de los aguajales en el Alto Mayo, San Martín. Un estudio sobre las concentraciones de *Mauritia flexuosa* en la selva peruana","","Palma Foto · Yakov Quinteros-Gómez","Y"],
[2016,12,"K","Puente Anaconda sobre el aguajal Inkaterra: un manejo ecoturístico sostenible de humedales amazónicos en Perú","","Yakov Quinteros-Gómez","Y"],
[2016,9,"A","Estudio de satisfacción del servicio público de salud para madres adolescentes. Caso: Instituto Nacional Materno Perinatal de Lima","Pesquimat","Olga Solano Dávila · Tania Paredes · Yakov Quinteros-Gómez · […] · Orlando Giraldo","Y"],
[2014,9,"A","Determinación de patrones de variación morfológica del género *Minthostachys* en Unchus y Cajatambo, mediante métodos estadísticos multivariantes de reducción de datos","Pesquimat","Doris Gómez Ticerán · Olga Solano Dávila · Joaquina Adelaida Albàn Castillo · […] · Yakov Quinteros-Gómez","Y"],
[2014,9,"A","Identificación de observaciones influyentes en la discriminación de muestras del género *Minthostachys* de Cajatambo y Unchos","Pesquimat","Doris Gómez Ticerán · Olga Solano Dávila · Víctor Osorio Vidal · […] · Yakov Quinteros-Gómez","Y"],
[2013,6,"A","Diversidad vegetal y uso antrópico de los páramos de Samanga (sectores Espíndola y El Toldo) y San Juan de Cachiaco (caseríos San Juan y Totora), Ayabaca, Piura","Ecología Aplicada","Ana Sabogal · Yakov Quinteros-Gómez","Y"],
[2013,3,"A","Identificación de observaciones influyentes en la discriminación de muestras del género *Minthostachys* de Cajatambo y Unchus","","Yakov Quinteros-Gómez · Joaquina Adelaida Albàn Castillo · Daniel Cañari · […] · Olga Solano","Y"],
[2011,1,"A","Identificação de observações influentes na classificação de amostras de plantas do gênero *Minthostachys* via análise discriminante","","Joaquina Adelaida Albàn Castillo · Daniel Cañari Casaño · Doris Gómez Ticerán · […] · Yakov Quinteros-Gómez","Y"],
[2009,11,"C","Transmisión y revalorización de los conocimientos tradicionales de la flora en el distrito de Cajatambo, Perú","","Joaquina Adelaida Albàn Castillo · Yakov Quinteros-Gómez · Doris Gomez Ticerán · Camilo Vasquez Araujo","Y"],
[2009,8,"C","Desarrollo histórico de la etnobotánica en el Perú","","Joaquina Adelaida Albàn Castillo · Roxana Castañeda · Angela Moreno · […] · Yakov Quinteros-Gómez","Y"],
[2007,11,"A","Caracterización de patrones de variación morfológica de la *Mynthostachys* mediante métodos estadísticos multivariante","","Doris Córnez · Blanca Martínez · Jorge Condado · […] · Yakov Quinteros-Gómez","Y"],
[2006,1,"C","Avances al conocimiento de las muñas del Perú","","Joaquina Adelaida Albàn Castillo · Yakov Quinteros-Gómez · Vasquez C. · […] · Morales M.","Y"],
[2006,1,"C","Las muñas del Perú: taxonomía y etnobotánica","","Joaquina Adelaida Albàn Castillo · Yakov Quinteros-Gómez · Vasquez C. · […] · Chuquillanqui H.","Y"],
[2005,4,"C","Estudio preliminar del uso de las plantas en el distrito de Copa-Cajatambo, Lima","","Joaquina Adelaida Albàn Castillo · Yakov Quinteros-Gómez · Miguel Chocce · Vasquez C.","Y"],
[2004,5,"C","Diversidad y usos de la flora en la provincia de Cajatambo, Lima","","Joaquina Adelaida Albàn Castillo · Yakov Quinteros-Gómez · Edson Tito Cuevas · […] · Camilo Vasquez Araujo","Y"]
];

// Objeto de textos para la traducción (Español / Inglés)
const TEXTOS = {
  es: {
    topbar_inst: "Universidad Nacional Mayor de San Marcos · Facultad de Ciencias Biológicas",
    topbar_loc: "Lima, Perú",
    banner_tit: "Red de Investigadores en Biodiversidad, Ecología y Conservación",
    banner_inst: "Grupo de investigación · Facultad de Ciencias Biológicas, UNMSM",
    nav_inicio: "Inicio", nav_miembros: "Miembros", nav_publicaciones: "Publicaciones", nav_enlaces: "Enlaces",
    tit_investigadores: "Investigadores del grupo", tit_colaboradores: "Colaboradores frecuentes",
    tit_institucion: "Institución", tit_perfiles: "Perfiles de investigación", tit_revistas: "Revistas donde publica el grupo",
    lema: "\"Investigando hoy para conservar el mañana.\"",
    footer_inst: "Red de Investigadores en Biodiversidad, Ecología y Conservación · Universidad Nacional Mayor de San Marcos.",
    inicio_desc1: "La <strong>Red de Investigadores en Biodiversidad, Ecología y Conservación (RIBEC)</strong> es un grupo de investigación de la <strong>Universidad Nacional Mayor de San Marcos</strong>, vinculado a la Facultad de Ciencias Biológicas, con participación de los departamentos de Ciencias Biológicas y de Botánica.",
    inicio_desc2: "El grupo está dirigido por Jehoshua Macedo-Bedoya y reúne a investigadores de la UNMSM y de la Universidad de Valparaíso.",
    inicio_desc3: "Nuestras líneas de trabajo abarcan la ecología y la conservación de ecosistemas peruanos: aguajales y bosques inundables de la Amazonía, bosques relictos de <i>Polylepis</i> en los Andes, biomasa y reservas de carbono, jardines de hormigas, flora y etnobotánica de Cajatambo, así como la taxonomía y distribución de tardígrados, aves, hongos e insectos.",
    inicio_tit_miembros: "Miembros", inicio_tit_prod: "Producción", inicio_tit_contacto: "Contacto",
    inicio_email: "Correo electrónico:",
    miembros_nota1: "Miembros registrados en el grupo RIBEC de ResearchGate e investigadores de la UNMSM que publican con la red.",
    miembros_nota2: "Coautores que aparecen de forma recurrente en las publicaciones del grupo.",
    lbl_autor: "Autor",
    opt_todos: "Todos los miembros",
    placeholder_buscar: "Buscar en título, revista o autores",
    colaboradores_lista: `
      <li>Doris Gómez-Ticerán, Facultad de Ciencias Matemáticas, Universidad Nacional Mayor de San Marcos</li>
      <li>Abel Salinas-Inga, Universidad Nacional Mayor de San Marcos</li>
      <li>Luis Alberto Allccahuaman, Universidad Nacional Mayor de San Marcos</li>
      <li>Joaquina Adelaida Albán Castillo, Universidad Nacional Mayor de San Marcos</li>
      <li>Olga Lidia Solano Dávila, Universidad Nacional Mayor de San Marcos</li>
      <li>Octavio Monroy-Vilchis y Martha M. Zarco-González, Universidad Autónoma del Estado de México</li>
      <li>Enoc Jara-Peña, Laboratorio de Fitología Aplicada, Universidad Nacional Mayor de San Marcos</li>
      <li>Marcel La Rosa-Sánchez y Franco Angeles-Alvarez, Laboratorio de Ecología Tropical y Análisis de Datos, Universidad Nacional Mayor de San Marcos</li>`,
    link_unmsm: "Universidad Nacional Mayor de San Marcos",
    link_fcb: "Facultad de Ciencias Biológicas, UNMSM",
    txt_en: "en"
  },
  en: {
    topbar_inst: "National University of San Marcos · Faculty of Biological Sciences",
    topbar_loc: "Lima, Peru",
    banner_tit: "Research Network on Biodiversity, Ecology, and Conservation",
    banner_inst: "Research group · Faculty of Biological Sciences, UNMSM",
    nav_inicio: "Home", nav_miembros: "Members", nav_publicaciones: "Publications", nav_enlaces: "Links",
    tit_investigadores: "Group researchers", tit_colaboradores: "Frequent collaborators",
    tit_institucion: "Institution", tit_perfiles: "Research profiles", tit_revistas: "Journals where the group publishes",
    lema: "\"Research today to protect tomorrow.\"",
    footer_inst: "Research Network on Biodiversity, Ecology, and Conservation · National University of San Marcos.",
    inicio_desc1: "The <strong>Research Network on Biodiversity, Ecology, and Conservation (RIBEC)</strong> is a research group at the <strong>National University of San Marcos (UNMSM)</strong>, affiliated with the Faculty of Biological Sciences, with participation from the Departments of Biological Sciences and Botany.",
    inicio_desc2: "The group is led by Jehoshua Macedo-Bedoya and brings together researchers from UNMSM and the University of Valparaíso.",
    inicio_desc3: "Our research focuses on the ecology and conservation of Peruvian ecosystems, including Amazonian aguajales (palm swamps) and floodplain forests, relict <i>Polylepis</i> forests in the Andes, biomass and carbon stocks, ant gardens, and the flora and ethnobotany of Cajatambo. We also study the taxonomy and distribution of tardigrades, birds, fungi, and insects.",
    inicio_tit_miembros: "Members", inicio_tit_prod: "Research output", inicio_tit_contacto: "Contact",
    inicio_email: "Email:",
    miembros_nota1: "Members of the RIBEC group on ResearchGate, as well as UNMSM researchers who publish with the network.",
    miembros_nota2: "Co-authors who appear frequently in the group’s publications.",
    lbl_autor: "Author",
    opt_todos: "All members",
    placeholder_buscar: "Search by title, journal or author",
    colaboradores_lista: `
      <li>Doris Gómez-Ticerán, Faculty of Mathematical Sciences, National University of San Marcos</li>
      <li>Abel Salinas-Inga, National University of San Marcos</li>
      <li>Luis Alberto Allccahuaman, National University of San Marcos</li>
      <li>Joaquina Adelaida Albán Castillo, National University of San Marcos</li>
      <li>Olga Lidia Solano Dávila, National University of San Marcos</li>
      <li>Octavio Monroy-Vilchis and Martha M. Zarco-González, Autonomous University of the State of Mexico</li>
      <li>Enoc Jara-Peña, Applied Phytology Laboratory, National University of San Marcos</li>
      <li>Marcel La Rosa-Sánchez and Franco Angeles-Alvarez, Tropical Ecology and Data Analysis Laboratory, National University of San Marcos</li>`,
    link_unmsm: "National University of San Marcos",
    link_fcb: "Faculty of Biological Sciences, UNMSM",
    txt_en: "on"
  }
};

// Tipos de publicación en inglés
const TYPES_EN = { A: "Article", P: "Preprint", C: "Conference paper", O: "Poster", K: "Book chapter" };