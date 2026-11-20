// Contenido de la entrada «Hacktoberfest Hack Day Panamá 2026» en español e inglés.
// Fuente: repositorio de organización del Hack Day (yosef7/Hacktoberfest):
// docs/06-comunicacion/blog-resumen-hack-day-2026.md, docs/08-registro/ y
// docs/01-gestion/retrospectiva-2026.md. Solo cifras comprobables: no se publica
// el número de check-ins (en la sala hubo más personas de las que contó MLH).
// Las fotos son de la carpeta de personas que aceptaron que se publicaran.
// El texto vive aquí y el diseño en HackDay2026.tsx.

import type { Lang, Photo, Stat } from "./blogParts";
import portada from "../../assets/img/blog/hackday2026/hackday_2026_0820-recorte.webp";
import apertura from "../../assets/img/blog/hackday2026/hackday_2026_0757.webp";
import charla from "../../assets/img/blog/hackday2026/hackday_2026_0784.webp";
import mesas from "../../assets/img/blog/hackday2026/hackday_2026_0808.webp";
import trabajo1 from "../../assets/img/blog/hackday2026/hackday_2026_0761.webp";
import trabajo2 from "../../assets/img/blog/hackday2026/hackday_2026_0780.webp";
import trabajo3 from "../../assets/img/blog/hackday2026/hackday_2026_0805.webp";
import premio1 from "../../assets/img/blog/hackday2026/hackday_2026_6371.webp";
import premio2 from "../../assets/img/blog/hackday2026/hackday_2026_6377.webp";
import premio3 from "../../assets/img/blog/hackday2026/hackday_2026_6380.webp";
import fachada from "../../assets/img/blog/hackday2026/hackday_2026_6337.webp";
import salon from "../../assets/img/blog/hackday2026/hackday_2026_0799.webp";
import mundo from "../../assets/img/blog/hackday2026/hackday_2026_0790.webp";
import amigas from "../../assets/img/blog/hackday2026/hackday_2026_6356.webp";
import equipo from "../../assets/img/blog/hackday2026/hackday_2026_0841.webp";
import sala from "../../assets/img/blog/hackday2026/hackday_2026_0803.webp";
import mentora from "../../assets/img/blog/hackday2026/hackday_2026_0827.webp";
import logoMlh from "../../assets/img/blog/hackday2026/logos/mlh-logo-color.svg";
import logoCdla from "../../assets/img/blog/hackday2026/logos/ciudad-de-las-artes-negro.png";
import logoMinc from "../../assets/img/blog/hackday2026/logos/ministerio-de-cultura-color.png";

export const PATHS: Record<Lang, string> = {
    es: "/blog/hacktoberfest-hack-day-2026",
    en: "/blog/hacktoberfest-hack-day-2026-en",
};

export const EMAIL = "pythonpanama4@gmail.com";

export const LINKS = {
    event: "https://events.mlh.com/events/15044-hacktoberfest-hack-day-panama-city-x-python-panama",
    gallery: "https://www.mlh.com/events/hacktoberfest-hack-day-panama-city-x-python-panama/submissions",
    photos: "https://majorleaguehacking.smugmug.com/Event-Photos/Hacktoberfest-2026/Hacktoberfest-hack-day-panama-city-x-python-pana-67bb72607f/n-NTkrmX",
    hacktoberfest: "https://hacktoberfest.com",
};

// Logos de los aliados con su sitio. Hive Code Lab y Panama Learning Code se
// agradecen por nombre, sin logo, como en el carrusel de cierre del 10 nov.
export const LOGOS = [
    { src: logoMlh, alt: "Major League Hacking (MLH)", href: "https://mlh.io" },
    { src: logoCdla, alt: "Ciudad de las Artes", href: undefined },
    { src: logoMinc, alt: "Ministerio de Cultura de Panamá", href: "https://micultura.gob.pa" },
];

export type Winner = { challenge: string; project: string; team: string; text: string; href: string; linkLabel: string };
type Row = [string, string];

export type HackDayContent = {
    title: string;
    lema: string;
    byline: string;
    date: string;
    readingTime: string;
    cover: Photo & { caption: string };
    summary: string;
    numbers: { heading: string; stats: Stat[]; note: string };
    program: {
        heading: string;
        intro: string;
        tracks: Row[];
        morning: { title: string; text: string; photos: Photo[] };
        work: { title: string; text: string; photos: Photo[] };
    };
    winners: { heading: string; intro: string; items: Winner[]; photos: Photo[] };
    projects: { heading: string; intro: string; label: string; items: string[]; close: string };
    venue: { heading: string; text: string; photos: Photo[] };
    community: { heading: string; paragraphs: string[]; photos: Photo[] };
    thanks: { heading: string; intro: string; rows: Row[]; close: string; logosLabel: string; photo: Photo };
    lessons: { heading: string; intro: string; items: Row[]; keep: string };
    next: { heading: string; text: string; steps: string[] };
    resources: { heading: string };
    ui: {
        breadcrumbHome: string; breadcrumbBlog: string; toc: string; backToTop: string; backToBlog: string;
        share: string; copy: string; copied: string; close: string; enlarge: string; viewLink: string;
        resources: { href: string; title: string; text: string }[];
        cta: { label: string; subject: string }[];
    };
};

// Los 11 proyectos distintos de la galería de MLH (las entregas repetidas de
// un mismo repositorio cuentan una vez). Los nombres van como los escribieron sus equipos.
const PROJECTS = [
    "CIE-10 Edu", "VisionBites", "Fix: CodeCarbon CLI config wizard crash on Ctrl+C", "ReciclaClaro",
    "MetroSmart PTY", "TutorMath", "Panama Explorer", "Gatun Level Agent Assistant",
    "Gemini Web Request Handler", "Panamanian National Restaurants Research", "Reto de programación – Mouredev",
];

export const CONTENT: Record<Lang, HackDayContent> = {
    es: {
        title: "Hacktoberfest Hack Day Panamá 2026: un sábado para enviar tu primera contribución",
        lema: "Inteligencia artificial de código abierto. Aprende. Contribuye. Comparte.",
        byline: "Por Equipo organizador del Hack Day · Python Panamá",
        date: "20 de noviembre de 2026",
        readingTime: "6 min de lectura",
        cover: {
            src: portada,
            alt: "Foto grupal de participantes, mentores y staff del Hack Day en el salón D-112 de Ciudad de las Artes",
            caption: "Participantes, mentores y staff en Ciudad de las Artes, sábado 31 de octubre",
        },
        summary:
            "El **sábado 31 de octubre de 2026**, Python Panamá y **Major League Hacking (MLH)** cerraron **Hacktoberfest 2026** con un **Hack Day** en **Ciudad de las Artes**. La meta era sencilla: que nadie se fuera a casa sin haber enviado algo a un proyecto real, ya fuera un pull request, una traducción o un issue bien explicado. Se inscribieron **51 personas** y salieron **11 proyectos**, y una contribución hecha en Panamá ya forma parte de **CodeCarbon**, un proyecto de código abierto que se usa en todo el mundo. Esta entrada resume lo que pasó, lo que aprendimos y cómo seguir.",
        numbers: {
            heading: "El día en cifras",
            stats: [
                { value: "51", label: "personas inscritas", detail: "entrada gratuita" },
                { value: "11", label: "proyectos distintos", detail: "15 entregas en la plataforma de MLH" },
                { value: "3", label: "proyectos premiados", detail: "uno por reto" },
                { value: "2", label: "tracks", detail: "Primeros Pasos e IA de Código Abierto" },
                { value: "1", label: "pull request fusionado", detail: "en CodeCarbon, el 1 de noviembre" },
                { value: "6 h", label: "de contribución en comunidad", detail: "de 9:00 a. m. a 3:00 p. m." },
            ],
            note: "Ese sábado, Panamá fue uno de los **70 Hack Days** que se hicieron en el mundo. En octubre hubo **más de 500**, en **71 países**.",
        },
        program: {
            heading: "El programa",
            intro: "El tema de Hacktoberfest 2026 fue la **inteligencia artificial de código abierto**. Para que cada persona empezara desde donde estaba, la jornada tuvo dos tracks:",
            tracks: [
                ["Primeros Pasos", "para quien nunca había usado Git ni GitHub: primer fork, primer pull request y contribuciones sin código, como documentación, traducción o reporte de errores."],
                ["IA de Código Abierto", "para quien ya programa: contribuciones a modelos open-weight, agentes de código abierto e integraciones locales, con una demo de 2 minutos al cierre."],
            ],
            morning: {
                title: "La mañana · apertura y mesas",
                text: "No vinimos a escuchar charlas. Después de la apertura de MLH, una bienvenida corta y una demo en vivo de cómo se abre un pull request, cada persona eligió su mesa y se puso a trabajar con un mentor al lado.",
                photos: [
                    { src: apertura, alt: "Apertura del Hack Day con la pantalla de Hacktoberfest Hack Day Panama City" },
                    { src: charla, alt: "Bienvenida y explicación de los tracks frente a las mesas de trabajo" },
                    { src: mesas, alt: "Presentación «¿A qué mesa te sumas?» antes del primer bloque de contribución" },
                ],
            },
            work: {
                title: "Mediodía y tarde · manos al teclado",
                text: "Dos bloques de contribución, con un brindis en medio. A las 2:15 p. m. cerraron las entregas y vinieron las demos y los ganadores.",
                photos: [
                    { src: trabajo1, alt: "Participantes trabajando en sus laptops en el salón D-112" },
                    { src: trabajo2, alt: "Personas contribuyendo con la pantalla del salón de fondo" },
                    { src: trabajo3, alt: "Mesas de trabajo durante el bloque de la tarde" },
                ],
            },
        },
        winners: {
            heading: "Los ganadores",
            intro: "Hubo tres retos y un proyecto premiado en cada uno:",
            items: [
                {
                    challenge: "Best Open-Source AI Project",
                    project: "CIE-10 Edu",
                    team: "Jefte R.",
                    text: "Una herramienta para estudiar la codificación médica CIE-10 con Gemma 4: propone códigos para casos de práctica, los valida contra un catálogo local de más de 11 000 códigos y genera preguntas de estudio.",
                    href: "https://github.com/JYRS20/cie10-edu",
                    linkLabel: "Repositorio",
                },
                {
                    challenge: "Best Use of Gemma 4",
                    project: "VisionBites",
                    team: "Gabriel M., Edgar S. e Isaac D.",
                    text: "Usa Gemma 4 para convertir el inventario de una cocina en decisiones prácticas, pensado para fondas y pequeños negocios de comida en Panamá.",
                    href: "https://github.com/Idelgado1006/VisionBites",
                    linkLabel: "Repositorio",
                },
                {
                    challenge: "Primeros Pasos (reto local)",
                    project: "Un arreglo para CodeCarbon",
                    team: "Nelson L. O.",
                    text: "Corrigió el cierre inesperado del asistente de configuración de la CLI al cancelar una opción y lo envió, con su prueba, a CodeCarbon. Los mantenedores lo fusionaron el 1 de noviembre.",
                    href: "https://github.com/mlco2/codecarbon/pull/1473",
                    linkLabel: "Pull request",
                },
            ],
            photos: [
                { src: premio1, alt: "Entrega de premios a uno de los equipos ganadores frente a la pantalla del evento" },
                { src: premio2, alt: "Ganadores del Hack Day con el staff de Python Panamá" },
                { src: premio3, alt: "Foto con uno de los proyectos premiados al cierre de la jornada" },
            ],
        },
        projects: {
            heading: "Lo que se construyó",
            intro: "Además de los ganadores, hubo proyectos para reciclar mejor, moverse en el Metro de Panamá, aprender matemáticas, conocer el país, consultar los niveles del lago Gatún e investigar la gastronomía nacional. La mayoría usó Gemma o Gemini.",
            label: "Proyectos de la galería",
            items: PROJECTS,
            close: "Todos se pueden ver, con su repositorio, en la **galería del evento** en MLH.",
        },
        venue: {
            heading: "La sede",
            text: "Gracias a **Ciudad de las Artes** y al **Ministerio de Cultura**, el Hack Day ocupó el **salón D-112**, en Llanos de Curundú: un espacio amplio, con mesas en U, pantalla grande y estacionamiento gratuito. La entrada fue libre y solo había que traer una laptop y ganas de aprender.",
            photos: [
                { src: fachada, alt: "Fachada de Ciudad de las Artes con su letrero y la bandera de Panamá", position: "50% 55%" },
                { src: salon, alt: "Vista completa del salón D-112 con las mesas de trabajo en U" },
                { src: mundo, alt: "Pantalla con la cifra de más de 70 Hack Days en el mundo ese sábado" },
            ],
        },
        community: {
            heading: "Comunidad",
            paragraphs: [
                "A las 9:00 a. m. la mayoría éramos desconocidos. **Más de la mitad** de quienes llegaron nunca había contribuido a un proyecto de código abierto, y varias personas se sentaron por primera vez frente a GitHub.",
                "Durante la jornada, **un temblor** interrumpió el trabajo. Hicimos una pausa, nos cuidamos y, cuando fue seguro continuar, regresamos al teclado. Ese día no solo compartimos código: construimos comunidad. Como lo resumió una de las mentoras, el ambiente fue «más de amistad que de rigidez».",
                "Todo el evento se rigió por el **Código de Conducta de MLH**.",
            ],
            photos: [
                { src: amigas, alt: "Tres participantes con camisetas de Hacktoberfest 2026 posando juntas", position: "50% 28%" },
                { src: equipo, alt: "Mentores, staff y participantes frente a la pantalla de Hacktoberfest 2026" },
                { src: sala, alt: "Sala llena de participantes trabajando en grupo" },
            ],
        },
        thanks: {
            heading: "Agradecimientos",
            intro: "El Hack Day fue posible gracias a quienes creen en la comunidad:",
            rows: [
                ["Major League Hacking (MLH)", "Programa Hack Day de Hacktoberfest, plataforma de entregas, premios y apoyo para la organización"],
                ["Ciudad de las Artes", "Sede: el salón D-112 y su equipo"],
                ["Ministerio de Cultura", "Apoyo para abrirnos las puertas de Ciudad de las Artes"],
                ["Hive Code Lab", "Apoyo al evento"],
                ["Panama Learning Code", "Apoyo al evento"],
                ["Tomás y Jeimmy Eche", "Mentores: guiaron las mesas de Primeros Pasos y de IA de Código Abierto"],
            ],
            close: "También damos las gracias al **staff**, a las comunidades que compartieron la convocatoria y a cada persona que dedicó su sábado al código abierto.",
            logosLabel: "Organizaciones que hicieron posible el Hack Day",
            photo: { src: mentora, alt: "Una de las mentoras explica el reto a las mesas de trabajo" },
        },
        lessons: {
            heading: "Aprendizajes",
            intro: "No todo salió según el guion: nos faltó una bocina para el audio de los videos y algunas personas llegaron con muy poca base y se perdieron en los primeros pasos. Para 2027 queremos:",
            items: [
                ["Un pre-evento para practicar.", "Una sesión corta antes del Hack Day para que quien llega por primera vez conozca Git y GitHub y no empiece de cero el sábado."],
                ["Equipos desde la apertura.", "Motivar que se formen equipos al inicio, no solo al final, para que nadie trabaje solo si no quiere."],
                ["Check-in en la mesa de registro.", "Hacerlo al llegar para saber desde temprano cuántas personas hay y no a minutos del cierre de entregas."],
                ["Una entrega por equipo.", "Repetir en la sala que entrega una sola persona por equipo, para que la galería muestre cada proyecto una vez."],
            ],
            keep: "Y lo que sí repetiremos: el ambiente. Es lo que hace que alguien vuelva a contribuir.",
        },
        next: {
            heading: "¿Y ahora?",
            text: "Una contribución termina cuando se fusiona, y la comunidad sigue después del sábado. Si quieres ser mentor, abrir tu espacio como sede o apoyar el próximo Hack Day, escríbenos a",
            steps: [
                "Si hiciste un proyecto, cuéntalo en DEV con la etiqueta **#mlhacks**.",
                "Si tu pull request sigue abierto, responde a los comentarios de quienes lo revisan.",
                "Súmate a **Python Panamá** para seguir aprendiendo y contribuyendo en comunidad.",
            ],
        },
        resources: { heading: "Galería y recursos" },
        ui: {
            breadcrumbHome: "Inicio", breadcrumbBlog: "Blog", toc: "En esta entrada",
            backToTop: "Volver arriba", backToBlog: "← Volver al blog",
            share: "Compartir", copy: "Copiar enlace", copied: "¡Enlace copiado!",
            close: "Cerrar", enlarge: "Ampliar foto", viewLink: "Ver",
            resources: [
                { href: LINKS.photos, title: "Fotos", text: "Galería de MLH" },
                { href: LINKS.gallery, title: "Proyectos", text: "Galería de entregas en MLH" },
                { href: LINKS.event, title: "Evento", text: "Página del Hack Day en MLH" },
            ],
            cta: [
                { label: "Ser mentor", subject: "Quiero ser mentor en el Hack Day 2027" },
                { label: "Ofrecer una sede", subject: "Sede para el Hack Day 2027" },
                { label: "Apoyar el Hack Day", subject: "Apoyo al Hack Day 2027" },
            ],
        },
    },
    en: {
        title: "Hacktoberfest Hack Day Panama 2026: a Saturday to send your first contribution",
        lema: "Open-source artificial intelligence. Learn. Contribute. Share.",
        byline: "By the Hack Day Organizing Team · Python Panamá",
        date: "November 20, 2026",
        readingTime: "6 min read",
        cover: {
            src: portada,
            alt: "Group photo of Hack Day participants, mentors, and staff in room D-112 at Ciudad de las Artes",
            caption: "Participants, mentors, and staff at Ciudad de las Artes, Saturday, October 31",
        },
        summary:
            "On **Saturday, October 31, 2026**, Python Panamá and **Major League Hacking (MLH)** wrapped up **Hacktoberfest 2026** with a **Hack Day** at **Ciudad de las Artes** in Panama City. The goal was simple: nobody would go home without sending something to a real project, whether a pull request, a translation, or a well-written issue. **51 people** registered, **11 projects** came out of the day, and a contribution made in Panama is now part of **CodeCarbon**, an open-source project used around the world. This post covers what happened, what we learned, and how to keep going.",
        numbers: {
            heading: "The day in numbers",
            stats: [
                { value: "51", label: "registrations", detail: "free admission" },
                { value: "11", label: "distinct projects", detail: "15 submissions on the MLH platform" },
                { value: "3", label: "winning projects", detail: "one per challenge" },
                { value: "2", label: "tracks", detail: "First Steps and Open-Source AI" },
                { value: "1", label: "merged pull request", detail: "in CodeCarbon, on November 1" },
                { value: "6 h", label: "of contributing together", detail: "from 9:00 a.m. to 3:00 p.m." },
            ],
            note: "That Saturday, Panama was one of **70 Hack Days** held around the world. In October there were **more than 500**, in **71 countries**.",
        },
        program: {
            heading: "The program",
            intro: "The Hacktoberfest 2026 theme was **open-source artificial intelligence**. So that everyone could start where they were, the day had two tracks:",
            tracks: [
                ["First Steps", "for people who had never used Git or GitHub: a first fork, a first pull request, and no-code contributions such as documentation, translation, or bug reports."],
                ["Open-Source AI", "for people who already code: contributions to open-weight models, open-source agents, and local integrations, with a 2-minute demo at the end."],
            ],
            morning: {
                title: "Morning · opening and tables",
                text: "We didn't come to listen to talks. After the MLH opening, a short welcome, and a live demo of how to open a pull request, everyone picked a table and got to work with a mentor nearby.",
                photos: [
                    { src: apertura, alt: "Hack Day opening with the Hacktoberfest Hack Day Panama City screen" },
                    { src: charla, alt: "Welcome and track overview in front of the work tables" },
                    { src: mesas, alt: "“Which table will you join?” slide before the first contribution block" },
                ],
            },
            work: {
                title: "Midday and afternoon · hands on keyboards",
                text: "Two contribution blocks with a lunch break in between. Submissions closed at 2:15 p.m., followed by demos and winners.",
                photos: [
                    { src: trabajo1, alt: "Participants working on their laptops in room D-112" },
                    { src: trabajo2, alt: "People contributing with the room's screen in the background" },
                    { src: trabajo3, alt: "Work tables during the afternoon block" },
                ],
            },
        },
        winners: {
            heading: "The winners",
            intro: "There were three challenges and one winning project in each:",
            items: [
                {
                    challenge: "Best Open-Source AI Project",
                    project: "CIE-10 Edu",
                    team: "Jefte R.",
                    text: "A study tool for ICD-10 medical coding with Gemma 4: it suggests codes for practice cases, validates them against a local catalog of more than 11,000 codes, and generates study questions.",
                    href: "https://github.com/JYRS20/cie10-edu",
                    linkLabel: "Repository",
                },
                {
                    challenge: "Best Use of Gemma 4",
                    project: "VisionBites",
                    team: "Gabriel M., Edgar S., and Isaac D.",
                    text: "Uses Gemma 4 to turn a kitchen's inventory into practical decisions, designed for fondas and small food businesses in Panama.",
                    href: "https://github.com/Idelgado1006/VisionBites",
                    linkLabel: "Repository",
                },
                {
                    challenge: "First Steps (local challenge)",
                    project: "A fix for CodeCarbon",
                    team: "Nelson L. O.",
                    text: "Fixed a crash in the CLI configuration wizard when a selection is cancelled and sent it, with a test, to CodeCarbon. The maintainers merged it on November 1.",
                    href: "https://github.com/mlco2/codecarbon/pull/1473",
                    linkLabel: "Pull request",
                },
            ],
            photos: [
                { src: premio1, alt: "Prize presentation to one of the winning teams in front of the event screen" },
                { src: premio2, alt: "Hack Day winners with the Python Panamá staff" },
                { src: premio3, alt: "Photo with one of the winning projects at the end of the day" },
            ],
        },
        projects: {
            heading: "What was built",
            intro: "Beyond the winners, there were projects to recycle better, get around on the Panama Metro, learn math, discover the country, check Gatún Lake levels, and research Panamanian cuisine. Most used Gemma or Gemini.",
            label: "Projects in the gallery",
            items: PROJECTS,
            close: "You can see all of them, with their repositories, in the **event gallery** on MLH.",
        },
        venue: {
            heading: "The venue",
            text: "Thanks to **Ciudad de las Artes** and the **Ministry of Culture**, the Hack Day took place in **room D-112** in Llanos de Curundú: a large space with U-shaped tables, a big screen, and free parking. Admission was free; all you needed was a laptop and the will to learn.",
            photos: [
                { src: fachada, alt: "Ciudad de las Artes building with its sign and the flag of Panama", position: "50% 55%" },
                { src: salon, alt: "Full view of room D-112 with the U-shaped work tables" },
                { src: mundo, alt: "Screen showing more than 70 Hack Days around the world that Saturday" },
            ],
        },
        community: {
            heading: "Community",
            paragraphs: [
                "At 9:00 a.m. most of us were strangers. **More than half** of the people who came had never contributed to an open-source project, and several sat down in front of GitHub for the first time.",
                "During the day, **an earthquake** interrupted our work. We paused, looked after each other, and when it was safe to continue, we went back to our keyboards. That day we didn't just share code: we built community. As one of the mentors put it, the atmosphere was “more friendship than formality.”",
                "The whole event was governed by the **MLH Code of Conduct**.",
            ],
            photos: [
                { src: amigas, alt: "Three participants in Hacktoberfest 2026 T-shirts posing together", position: "50% 28%" },
                { src: equipo, alt: "Mentors, staff, and participants in front of the Hacktoberfest 2026 screen" },
                { src: sala, alt: "Room full of participants working in groups" },
            ],
        },
        thanks: {
            heading: "Thank you",
            intro: "The Hack Day was possible thanks to those who believe in the community:",
            rows: [
                ["Major League Hacking (MLH)", "Hacktoberfest Hack Day program, submission platform, prizes, and organizing support"],
                ["Ciudad de las Artes", "Venue: room D-112 and its team"],
                ["Ministry of Culture", "Support in opening the doors of Ciudad de las Artes"],
                ["Hive Code Lab", "Event support"],
                ["Panama Learning Code", "Event support"],
                ["Tomás and Jeimmy Eche", "Mentors: led the First Steps and Open-Source AI tables"],
            ],
            close: "We also thank our **staff**, the communities that shared the call, and everyone who gave their Saturday to open source.",
            logosLabel: "Organizations that made the Hack Day possible",
            photo: { src: mentora, alt: "One of the mentors explains the challenge to the work tables" },
        },
        lessons: {
            heading: "Lessons learned",
            intro: "Not everything went to plan: we were missing a speaker for the video audio, and some people arrived with very little background and got lost in the first steps. For 2027 we want:",
            items: [
                ["A warm-up session.", "A short session before the Hack Day so first-timers get to know Git and GitHub and don't start from scratch on Saturday."],
                ["Teams from the start.", "Encourage people to form teams at the opening, not just at the end, so nobody works alone unless they want to."],
                ["Check-in at the registration desk.", "Do it on arrival so we know early how many people are in the room, not minutes before submissions close."],
                ["One submission per team.", "Remind everyone that only one person submits per team, so the gallery shows each project once."],
            ],
            keep: "And what we'll keep: the atmosphere. It's what makes someone come back to contribute.",
        },
        next: {
            heading: "What's next?",
            text: "A contribution is done when it's merged, and the community keeps going after Saturday. If you'd like to mentor, offer your space as a venue, or support the next Hack Day, write to us at",
            steps: [
                "If you built a project, write about it on DEV with the **#mlhacks** tag.",
                "If your pull request is still open, reply to your reviewers' comments.",
                "Join **Python Panamá** to keep learning and contributing together.",
            ],
        },
        resources: { heading: "Gallery and resources" },
        ui: {
            breadcrumbHome: "Home", breadcrumbBlog: "Blog", toc: "In this post",
            backToTop: "Back to top", backToBlog: "← Back to blog",
            share: "Share", copy: "Copy link", copied: "Link copied!",
            close: "Close", enlarge: "Enlarge photo", viewLink: "View",
            resources: [
                { href: LINKS.photos, title: "Photos", text: "MLH gallery" },
                { href: LINKS.gallery, title: "Projects", text: "Submission gallery on MLH" },
                { href: LINKS.event, title: "Event", text: "Hack Day page on MLH" },
            ],
            cta: [
                { label: "Mentor", subject: "I want to mentor at Hack Day 2027" },
                { label: "Offer a venue", subject: "Venue for Hack Day 2027" },
                { label: "Support the Hack Day", subject: "Supporting Hack Day 2027" },
            ],
        },
    },
};
