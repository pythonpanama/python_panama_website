// Contenido de la entrada «PyCon Panamá 2026» en español e inglés.
// Fuente: borrador aprobado por Dirección (repositorio de documentación).
// El texto vive aquí y el diseño en PythonPanama2026.tsx, para que las dos
// versiones tengan siempre la misma estructura.

import portada from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-01.webp";
import metromall02 from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-02.webp";
import metromall04 from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-04.webp";
import metromall05 from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-05.webp";
import metromall06 from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-06.webp";
import metromall07 from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-07.webp";
import metromall08 from "../../assets/img/blog/pycon2026/pycon_2026_udimetromall-08.webp";
import udipanama01 from "../../assets/img/blog/pycon2026/pycon_2026_udipanama-01.webp";
import udipanama02 from "../../assets/img/blog/pycon2026/pycon_2026_udipanama-02.webp";
import udipanama03 from "../../assets/img/blog/pycon2026/pycon_2026_udipanama-03.webp";
import udipanama04 from "../../assets/img/blog/pycon2026/pycon_2026_udipanama-04.webp";
import udipanama05 from "../../assets/img/blog/pycon2026/pycon_2026_udipanama-05.webp";
import logoUdi from "../../assets/img/blog/pycon2026/logos/udi.svg";
import logoPsf from "../../assets/img/blog/pycon2026/logos/psf.svg";
import logoJetbrains from "../../assets/img/blog/pycon2026/logos/jetbrains.png";
import logoRootstack from "../../assets/img/blog/pycon2026/logos/rootstack.png";
import logoSoftd3v from "../../assets/img/blog/pycon2026/logos/softd3v.png";

export type Lang = "es" | "en";

export const PATHS: Record<Lang, string> = {
    es: "/blog/pycon-panama-2026",
    en: "/blog/pycon-panama-2026-en",
};

export type Photo = { src: string; alt: string };
type Row = [string, string];

export type PostContent = {
    lang: Lang;
    title: string;
    lema: string;
    byline: string;
    date: string;
    cover: Photo & { caption: string };
    summary: string;
    numbers: { heading: string; head: Row; rows: Row[] };
    program: {
        heading: string;
        intro: string;
        tracks: Row[];
        thursday: { title: string; text: string; photos: Photo[] };
        friday: { title: string; text: string; photos: Photo[] };
        thanksIntro: string;
        speakers: Row[];
        thanksClose: string;
    };
    venues: { heading: string; text: string; photos: Photo[] };
    community: { heading: string; paragraphs: string[]; photos: Photo[] };
    survey: { heading: string; intro: string; head: Row; rows: Row[]; quotes: Row[]; improve: Row };
    thanks: { heading: string; intro: string; head: Row; rows: Row[]; close: string; logosLabel: string; photo: Photo };
    lessons: { heading: string; intro: string; items: Row[] };
    next: { heading: string; text: string };
    resources: { heading: string; photos: string; recordings: string; agenda: string };
};

const LOGOS = [
    { src: logoUdi, alt: "Universidad del Istmo" },
    { src: logoPsf, alt: "Python Software Foundation" },
    { src: logoJetbrains, alt: "JetBrains" },
    { src: logoRootstack, alt: "Rootstack" },
    { src: logoSoftd3v, alt: "SoftD3v" },
];
export { LOGOS };

export const EMAIL = "pyconpanama@gmail.com";
export const LINKS = {
    instagram: "https://www.instagram.com/pythonpanama/",
    youtube: "https://www.youtube.com/@pythonpanama",
    agenda: "https://pycon.pa/2026/agenda",
    linktree: "https://linktr.ee/pythonpanama",
};

const SPEAKERS_THU =
    "Stuti Jain, Palak Jain, Renzo Caceres Rossi, Maria Clara Sanchez de Mira, David Jonathan Sol Llaven, Juan Camilo Infante";
const COUNTRIES_SPEAKERS_ES = "🇵🇦 Panamá · 🇧🇷 Brasil · 🇨🇴 Colombia · 🇬🇹 Guatemala · 🇮🇳 India · 🇲🇽 México · 🇵🇪 Perú";
const COUNTRIES_SPEAKERS_EN = "🇵🇦 Panama · 🇧🇷 Brazil · 🇨🇴 Colombia · 🇬🇹 Guatemala · 🇮🇳 India · 🇲🇽 Mexico · 🇵🇪 Peru";

export const CONTENT: Record<Lang, PostContent> = {
    es: {
        lang: "es",
        title: "PyCon Panamá 2026: dos días de Python en la era de la Inteligencia Artificial",
        lema: "Python en la era de la Inteligencia Artificial. Construir. Comprender. Transformar.",
        byline: "Por Equipo organizador de PyCon Panamá · Python Panamá",
        date: "26 de octubre de 2026",
        cover: {
            src: portada,
            alt: "Foto grupal de PyCon Panamá 2026 en el auditorio de UDI Metromall, viernes 23 de octubre",
            caption: "Asistentes, ponentes y equipo en UDI Metromall, viernes 23",
        },
        summary:
            "Los días **22 y 23 de octubre de 2026**, la comunidad Python Panamá celebró **PyCon Panamá 2026** en la **Universidad del Istmo (UDI)**. El jueves fue una jornada híbrida en la sede Justo Arosemena y el viernes, una jornada presencial en la sede de Metromall. La entrada fue **gratuita**. Hubo **17 ponentes** de **7 países**, dos de ellos keynotes, y **160 personas inscritas**. Esta entrada resume lo que logramos, lo que aprendimos y hacia dónde vamos en 2027.",
        numbers: {
            heading: "El evento en cifras",
            head: ["Indicador", "Cifra"],
            rows: [
                ["Jornadas", "**2** (jueves híbrido · viernes presencial)"],
                ["Ponentes", "**17** (7 por videollamada · 10 en sala: 2 keynotes, 1 invitado especial y 7 charlas)"],
                ["Países de los ponentes", `**7** · ${COUNTRIES_SPEAKERS_ES}`],
                ["Personas inscritas", "**160**"],
                ["Se inscribieron desde", "🇵🇦 Panamá · 🇧🇷 Brasil · 🇨🇱 Chile · 🇨🇴 Colombia · 🇨🇷 Costa Rica · 🇨🇺 Cuba · 🇬🇹 Guatemala · 🇲🇽 México · 🇳🇮 Nicaragua · 🇵🇪 Perú · 🇻🇪 Venezuela"],
                ["Voluntarios", "**Más de 10**"],
                ["Credenciales con QR enviadas", "**160 de 160**"],
                ["Costo de la entrada", "**Gratuita**"],
            ],
        },
        program: {
            heading: "El programa",
            intro: "El lema de este año, **«Python en la era de la Inteligencia Artificial. Construir. Comprender. Transformar.»**, orientó un programa con tres ejes:",
            tracks: [
                ["Construir", "charlas prácticas sobre desarrollo, datos y aplicaciones con Python."],
                ["Comprender", "cómo funcionan los modelos y las herramientas de IA, y cómo usarlos con criterio."],
                ["Transformar", "casos reales de impacto en empresas, educación y comunidad."],
            ],
            thursday: {
                title: "Jueves 22 · Sala Impulsa, UDI Justo Arosemena, y en línea.",
                text: "Siete charlas por videollamada con ponentes de la región, transmitidas en sala.",
                photos: [
                    { src: udipanama02, alt: "Los siete ponentes virtuales del jueves 22" },
                    { src: udipanama03, alt: "Charlas por videollamada proyectadas en la Sala Impulsa" },
                    { src: udipanama04, alt: "Público del jueves siguiendo las charlas en la Sala Impulsa" },
                ],
            },
            friday: {
                title: "Viernes 23 · Auditorio de UDI Metromall.",
                text: "Dos keynotes, la charla de un invitado especial y siete charlas presenciales.",
                photos: [
                    { src: metromall02, alt: "Ponentes del viernes 23 en el auditorio de UDI Metromall" },
                    { src: metromall08, alt: "Más ponentes del viernes 23 en UDI Metromall" },
                ],
            },
            thanksIntro: "Gracias a los 17 ponentes que compartieron su conocimiento con la comunidad:",
            speakers: [
                ["Jueves 22, por videollamada", `${SPEAKERS_THU} y Valery C. Briz.`],
                ["Viernes 23, en sala", "Abdel Gadiel Martínez Lassonde (keynote de apertura), Luis Meron, Arnulfo Reyes, Ricardo Tovar, Carlos Alarcón (invitado especial), Jair Manuel Poveda Frago, Yudith Recio Milanés, Ivan Lopez Raudales, Keisa Ávila y Gerardo Vilcamiza Espinoza (keynote de cierre)."],
            ],
            thanksClose: "¡Gracias por su tiempo, su generosidad y su entusiasmo!",
        },
        venues: {
            heading: "Sedes y formato",
            text: "Gracias a la **Universidad del Istmo**, que fue nuestra sede anfitriona, PyCon Panamá ocupó dos espacios: la Sala Impulsa (Justo Arosemena) para la jornada híbrida y el auditorio de Metromall para la jornada presencial. El formato híbrido permitió que ponentes de otros países participaran sin viajar y que se conectara gente de fuera de la capital. Además, invitamos a los centros regionales de la Universidad de Panamá.",
            photos: [
                { src: udipanama01, alt: "Foto grupal del jueves 22 en la Sala Impulsa, UDI Justo Arosemena" },
                { src: metromall04, alt: "Auditorio de UDI Metromall durante una charla del viernes 23" },
            ],
        },
        community: {
            heading: "Comunidad",
            paragraphs: [
                "El público fue **mitad estudiantil y mitad profesional**: estudiantes y profesionales asistieron en la misma proporción. También participaron emprendedores y docentes. La **Universidad de Panamá** y la **Universidad del Istmo** llegaron con grupos organizados, y su energía se sintió en las dos salas.",
                "Todo el evento se rigió por nuestro **Código de Conducta**, basado en las prácticas de la comunidad Python y de la PSF.",
            ],
            photos: [
                { src: metromall06, alt: "Asistentes y ponentes conversando en el auditorio de UDI Metromall" },
                { src: metromall07, alt: "Público del viernes 23 en UDI Metromall" },
                { src: metromall05, alt: "Preguntas del público y charla en UDI Metromall" },
            ],
        },
        survey: {
            heading: "Lo que dijeron los asistentes",
            intro: "Al terminar el evento enviamos encuestas anónimas a asistentes, voluntarios, ponentes y equipo.",
            head: ["Indicador (asistentes)", "Resultado"],
            rows: [
                ["Satisfacción general", "**4.67 / 5**"],
                ["Net Promoter Score (NPS)", "**+89** (casi 9 de cada 10 la recomendarían con 9 o 10)"],
                ["Calidad de las charlas", "**4.67 / 5**"],
                ["Variedad de temas", "**4.89 / 5**"],
                ["Ambiente", "**4.78 / 5**"],
                ["Experiencia virtual del jueves", "**4.83 / 5**"],
                ["Se sintieron en un **ambiente seguro e inclusivo**", "**100 %**"],
                ["Era su **primera PyCon**", "**2 de cada 3**"],
                ["Quieren volver en 2027", "**Más de 3 de cada 4** como asistentes · **1 de cada 3** quiere dar una charla"],
            ],
            quotes: [
                ["Gracias por la oportunidad y el espacio para compartir conocimiento y experiencias.", "Asistente, docente"],
                ["La oportunidad de poder contribuir a la comunidad y relacionarme con otros miembros de Python.", "Voluntario"],
            ],
            improve: [
                "Lo que nos pidieron mejorar:",
                "más tiempo para preguntas y respuestas, más puntualidad en la agenda y una comunicación más clara antes del evento. Los voluntarios pidieron roles mejor definidos desde la inducción. Ya incluimos estos puntos en el plan de 2027.",
            ],
        },
        thanks: {
            heading: "Agradecimientos",
            intro: "PyCon Panamá es posible gracias a quienes creen en la comunidad:",
            head: ["Organización", "Aporte"],
            rows: [
                ["Universidad del Istmo (UDI)", "Sede anfitriona: salas, auditorio, personal y uso de marca"],
                ["Python Software Foundation (PSF)", "Community Partner: difusión del evento en sus canales"],
                ["JetBrains", "Licencias y cupones para sorteos entre los asistentes"],
                ["Rootstack", "Patrocinador: apoyo a la experiencia de los asistentes"],
                ["SoftD3v", "Aliado tecnológico: apoyo a la infraestructura digital"],
                ["Donante anónimo", "Apoyo a la infraestructura digital"],
            ],
            close: "También damos las gracias a los **17 ponentes**, a los **voluntarios**, a las comunidades que compartieron la convocatoria y a cada persona que se inscribió, se conectó o vino a la sala.",
            logosLabel: "Organizaciones que hicieron posible PyCon Panamá 2026",
            photo: { src: udipanama05, alt: "Cierre del jueves 22 con ponentes, voluntarios y asistentes" },
        },
        lessons: {
            heading: "Aprendizajes",
            intro: "Cada edición nos deja lecciones que guían a la comunidad en las siguientes:",
            items: [
                ["Acompañar a cada participante.", "Una comunicación clara y constante, desde la inscripción hasta el día del evento, hace que más personas lleguen y lo aprovechen."],
                ["Crecer junto a las universidades.", "Las alianzas con docentes y centros de estudio acercan Python a nuevas generaciones y llenan las salas de energía."],
                ["El contenido convoca.", "Presentar con tiempo a ponentes y temas es lo que más motiva a la gente a sumarse."],
                ["Escuchar y medir para mejorar.", "Las encuestas y los datos de participación nos dicen qué funciona y qué cambiar en cada edición."],
            ],
        },
        next: {
            heading: "Rumbo a PyCon Panamá 2027",
            text: "La preparación de la próxima edición ya empezó. Si tu organización quiere **patrocinar, ser aliada o ser sede**, o si quieres proponer una charla o ser voluntario, escríbenos a",
        },
        resources: {
            heading: "Galería y recursos",
            photos: "Fotos: en el Instagram de Python Panamá,",
            recordings: "Grabaciones: en el canal de YouTube de Python Panamá,",
            agenda: "Agenda 2026:",
        },
    },
    en: {
        lang: "en",
        title: "PyCon Panamá 2026: two days of Python in the age of Artificial Intelligence",
        lema: "Python in the age of Artificial Intelligence. Build. Understand. Transform.",
        byline: "By the PyCon Panamá Organizing Team · Python Panamá",
        date: "October 26, 2026",
        cover: {
            src: portada,
            alt: "PyCon Panamá 2026 group photo at UDI Metromall, Friday, October 23",
            caption: "Attendees, speakers, and team at UDI Metromall, Friday 23",
        },
        summary:
            "On **October 22–23, 2026**, the Python Panamá community held **PyCon Panamá 2026** at **Universidad del Istmo (UDI)**. Thursday was a hybrid day at the Justo Arosemena campus, and Friday was an in-person day at the Metromall campus. Admission was **free**. The program featured **17 speakers** from **7 countries**, including two keynotes, and **160 people registered**. This post covers what we achieved, what we learned, and where we're headed in 2027.",
        numbers: {
            heading: "By the numbers",
            head: ["Metric", "Value"],
            rows: [
                ["Days", "**2** (hybrid Thursday · in-person Friday)"],
                ["Speakers", "**17** (7 remote · 10 on stage: 2 keynotes, 1 special guest, and 7 talks)"],
                ["Speakers' countries", `**7** · ${COUNTRIES_SPEAKERS_EN}`],
                ["Registrations", "**160**"],
                ["Registered from", "🇵🇦 Panama · 🇧🇷 Brazil · 🇨🇱 Chile · 🇨🇴 Colombia · 🇨🇷 Costa Rica · 🇨🇺 Cuba · 🇬🇹 Guatemala · 🇲🇽 Mexico · 🇳🇮 Nicaragua · 🇵🇪 Peru · 🇻🇪 Venezuela"],
                ["Volunteers", "**More than 10**"],
                ["QR badges sent", "**160 of 160**"],
                ["Admission", "**Free**"],
            ],
        },
        program: {
            heading: "The program",
            intro: "This year's theme, **\"Python in the age of Artificial Intelligence. Build. Understand. Transform.\"**, shaped a program around three tracks:",
            tracks: [
                ["Build", "hands-on talks on development, data, and applications with Python."],
                ["Understand", "how AI models and tools work, and how to use them responsibly."],
                ["Transform", "real-world impact in business, education, and community."],
            ],
            thursday: {
                title: "Thursday 22 · Sala Impulsa, UDI Justo Arosemena, and online.",
                text: "Seven remote talks by speakers from the region, streamed in the room.",
                photos: [
                    { src: udipanama02, alt: "The seven remote speakers on Thursday 22" },
                    { src: udipanama03, alt: "Remote talks projected in Sala Impulsa" },
                    { src: udipanama04, alt: "Thursday audience following the talks in Sala Impulsa" },
                ],
            },
            friday: {
                title: "Friday 23 · UDI Metromall auditorium.",
                text: "Two keynotes, a special guest talk, and seven in-person talks.",
                photos: [
                    { src: metromall02, alt: "Friday 23 speakers in the UDI Metromall auditorium" },
                    { src: metromall08, alt: "More Friday 23 speakers at UDI Metromall" },
                ],
            },
            thanksIntro: "Thank you to the 17 speakers who shared their knowledge with the community:",
            speakers: [
                ["Thursday 22, remote", `${SPEAKERS_THU}, and Valery C. Briz.`],
                ["Friday 23, on stage", "Abdel Gadiel Martínez Lassonde (opening keynote), Luis Meron, Arnulfo Reyes, Ricardo Tovar, Carlos Alarcón (special guest), Jair Manuel Poveda Frago, Yudith Recio Milanés, Ivan Lopez Raudales, Keisa Ávila, and Gerardo Vilcamiza Espinoza (closing keynote)."],
            ],
            thanksClose: "Thank you for your time, your generosity, and your enthusiasm!",
        },
        venues: {
            heading: "Venues and format",
            text: "Thanks to our host, **Universidad del Istmo**, PyCon Panamá used two spaces: Sala Impulsa (Justo Arosemena) for the hybrid day and the Metromall auditorium for the in-person day. The hybrid format let international speakers take part without traveling and let people from outside the capital join. We also invited the regional centers of Universidad de Panamá.",
            photos: [
                { src: udipanama01, alt: "Thursday 22 group photo in Sala Impulsa, UDI Justo Arosemena" },
                { src: metromall04, alt: "UDI Metromall auditorium during a Friday 23 talk" },
            ],
        },
        community: {
            heading: "Community",
            paragraphs: [
                "Our audience was **half students and half professionals**, with both groups attending in equal proportion, along with entrepreneurs and educators. **Universidad de Panamá** and **Universidad del Istmo** came in organized groups, and their energy filled both rooms.",
                "The whole event was governed by our **Code of Conduct**, based on the practices of the Python community and the PSF.",
            ],
            photos: [
                { src: metromall06, alt: "Attendees and speakers talking in the UDI Metromall auditorium" },
                { src: metromall07, alt: "Friday 23 audience at UDI Metromall" },
                { src: metromall05, alt: "Audience questions during a talk at UDI Metromall" },
            ],
        },
        survey: {
            heading: "What attendees said",
            intro: "After the event we sent anonymous surveys to attendees, volunteers, speakers, and the organizing team.",
            head: ["Metric (attendees)", "Result"],
            rows: [
                ["Overall satisfaction", "**4.67 / 5**"],
                ["Net Promoter Score (NPS)", "**+89** (nearly 9 in 10 scored 9 or 10)"],
                ["Talk quality", "**4.67 / 5**"],
                ["Topic variety", "**4.89 / 5**"],
                ["Atmosphere", "**4.78 / 5**"],
                ["Thursday online experience", "**4.83 / 5**"],
                ["Felt **safe and included**", "**100%**"],
                ["**First PyCon** ever", "**2 out of 3**"],
                ["Plan to return in 2027", "**More than 3 in 4** as attendees · **1 in 3** wants to give a talk"],
            ],
            quotes: [
                ["Thank you for the opportunity and the space to share knowledge and experiences.", "Attendee, educator"],
                ["The chance to contribute to the community and connect with other members of the Python community.", "Volunteer"],
            ],
            improve: [
                "What we heard we should improve:",
                "more time for Q&A, better schedule punctuality, and clearer communication before the event. Volunteers asked for better-defined roles from onboarding onward. These are already in our 2027 plan.",
            ],
        },
        thanks: {
            heading: "Thank you",
            intro: "PyCon Panamá is possible thanks to those who believe in the community:",
            head: ["Organization", "Contribution"],
            rows: [
                ["Universidad del Istmo (UDI)", "Host venue: rooms, auditorium, staff, and brand use"],
                ["Python Software Foundation (PSF)", "Community Partner: promotion through PSF channels"],
                ["JetBrains", "Licenses and coupons raffled among attendees"],
                ["Rootstack", "Sponsor: support for the attendee experience"],
                ["SoftD3v", "Technology partner: support for our digital infrastructure"],
                ["Anonymous donor", "Support for our digital infrastructure"],
            ],
            close: "We also thank our **17 speakers**, our **volunteers**, the communities that shared the call, and everyone who registered, joined online, or came in person.",
            logosLabel: "Organizations that made PyCon Panamá 2026 possible",
            photo: { src: udipanama05, alt: "Thursday 22 closing with speakers, volunteers, and attendees" },
        },
        lessons: {
            heading: "Lessons learned",
            intro: "Every edition leaves lessons that guide the community in the next ones:",
            items: [
                ["Support every participant.", "Clear, steady communication from sign-up to event day helps more people show up and get the most out of it."],
                ["Grow with universities.", "Partnerships with educators and schools bring Python to new generations and fill the rooms with energy."],
                ["Content drives turnout.", "Introducing speakers and topics early is what most motivates people to join."],
                ["Listen and measure to improve.", "Surveys and participation data tell us what works and what to change in each edition."],
            ],
        },
        next: {
            heading: "Toward PyCon Panamá 2027",
            text: "Planning for the next edition has begun. If your organization would like to **sponsor, partner with us, or host**, or if you'd like to submit a talk or volunteer, write to us at",
        },
        resources: {
            heading: "Gallery and resources",
            photos: "Photos: on Python Panamá's Instagram,",
            recordings: "Recordings: on Python Panamá's YouTube channel,",
            agenda: "2026 schedule:",
        },
    },
};
