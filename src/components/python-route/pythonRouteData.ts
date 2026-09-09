export const PYTHON_ROUTE_REPO_URL =
    "https://github.com/pythonpanama/python-route-2027";
export const PYTHON_ROUTE_CONTACT_EMAIL = "pythonpanama4@gmail.com";

// Lema oficial del programa. Se usa en el hero de la página y en los
// metadatos SEO para mantener una sola fuente de verdad.
export const PYTHON_ROUTE_LEMA =
    "Conéctate con Python, tecnología sin fronteras.";

export type AgendaStatus = "Confirmado" | "En preparación" | "Por confirmar";

export type AgendaStop = {
    phase: string;
    title: string;
    date: string;
    place: string;
    description: string;
    status: AgendaStatus;
};

// Agenda pública de Python Route. Actualiza este arreglo para publicar
// fechas y sedes confirmadas; el estado controla la etiqueta visible.
export const agenda: AgendaStop[] = [
    {
        phase: "Fase 1",
        title: "Convocatoria de participantes y sedes",
        date: "Por confirmar",
        place: "Todo el país · postulación en línea",
        description:
            "Recibimos inscripciones de personas, escuelas y organizaciones comunitarias interesadas en recibir un taller. Las postulaciones se hacen a través del formulario de registro.",
        status: "En preparación",
    },
    {
        phase: "Fase 2",
        title: "Preparación de facilitadores y materiales",
        date: "Por confirmar",
        place: "Modalidad virtual",
        description:
            "Formación del equipo de voluntariado, revisión del currículo y publicación de los ejercicios y datos en el repositorio abierto del programa.",
        status: "En preparación",
    },
    {
        phase: "Fase 3",
        title: "Talleres presenciales en provincias",
        date: "Por confirmar",
        place: "Sedes por confirmar fuera de la capital",
        description:
            "Talleres prácticos de Python en escuelas y espacios comunitarios. Cada sede se publica aquí en cuanto queda confirmada con la organización anfitriona.",
        status: "Por confirmar",
    },
    {
        phase: "Fase 4",
        title: "Seguimiento y comunidad",
        date: "Por confirmar",
        place: "Virtual y presencial",
        description:
            "Acompañamiento posterior al taller: materiales abiertos, mentoría y conexión con las actividades regulares de Python Panamá.",
        status: "Por confirmar",
    },
];

export const statusClassName: Record<AgendaStatus, string> = {
    Confirmado: "is-confirmed",
    "En preparación": "is-preparing",
    "Por confirmar": "is-pending",
};

// Necesidades reales del programa. Se usan como base de conversación
// con organizaciones patrocinadoras.
export const sponsorshipNeeds = [
    {
        icon: "fas fa-van-shuttle",
        title: "Logística y traslados",
        description:
            "Transporte del equipo facilitador y del equipamiento hacia comunidades fuera de la capital.",
    },
    {
        icon: "fas fa-laptop-code",
        title: "Equipos y conectividad",
        description:
            "Computadoras, kits de robótica e internet temporal en sedes con acceso limitado.",
    },
    {
        icon: "fas fa-book-open",
        title: "Materiales educativos",
        description:
            "Impresión de guías, licencias, insumos de taller y recursos que quedan en la sede anfitriona.",
    },
    {
        icon: "fas fa-hand-holding-heart",
        title: "Becas y alimentación",
        description:
            "Cupos becados, refrigerios y apoyo a participantes que de otro modo no podrían asistir.",
    },
];
