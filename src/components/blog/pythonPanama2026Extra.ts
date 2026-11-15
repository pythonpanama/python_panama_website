// Datos de presentación de la entrada «PyCon Panamá 2026»: indicadores,
// países, ponentes, enlaces de aliados y textos de la interfaz (ES/EN).
// El texto largo sigue en pythonPanama2026Content.ts.

import { LINKS, type Lang } from "./pythonPanama2026Content";
import type { CountryCode } from "./flags";

export type Country = { code: CountryCode; name: string };
const c = (code: CountryCode, name: string): Country => ({ code, name });

export type Stat = { value: string; label: string; detail?: string };
export type Score = { label: string; value: number };
export type Fact = { icon: string; value: string; label: string; detail?: string };
export type Speaker = { name: string; role?: string };

export const SITE = "https://pythonpanama.org";

export const SPONSOR_URLS: Record<string, string | undefined> = {
    "Universidad del Istmo": "https://www.udi.edu.pa/",
    "Python Software Foundation": "https://www.python.org/psf/",
    JetBrains: "https://www.jetbrains.com/",
    Rootstack: "https://rootstack.com/",
    SoftD3v: undefined,
};

const THU: Speaker[] = [
    "Stuti Jain", "Palak Jain", "Renzo Caceres Rossi", "Maria Clara Sanchez de Mira",
    "David Jonathan Sol Llaven", "Juan Camilo Infante", "Valery C. Briz",
].map((name) => ({ name }));

function fri(lang: Lang): Speaker[] {
    const r = lang === "es"
        ? { open: "Keynote de apertura", guest: "Invitado especial", close: "Keynote de cierre" }
        : { open: "Opening keynote", guest: "Special guest", close: "Closing keynote" };
    return [
        { name: "Abdel Gadiel Martínez Lassonde", role: r.open },
        { name: "Luis Meron" }, { name: "Arnulfo Reyes" }, { name: "Ricardo Tovar" },
        { name: "Carlos Alarcón", role: r.guest },
        { name: "Jair Manuel Poveda Frago" }, { name: "Yudith Recio Milanés" },
        { name: "Ivan Lopez Raudales" }, { name: "Keisa Ávila" },
        { name: "Gerardo Vilcamiza Espinoza", role: r.close },
    ];
}

// Íconos de Font Awesome para los aprendizajes, en el mismo orden que el contenido.
export const LESSON_ICONS = ["fa-comments", "fa-graduation-cap", "fa-bullhorn", "fa-chart-line"];

export const EXTRA = {
    es: {
        ui: {
            breadcrumbHome: "Inicio", breadcrumbBlog: "Blog", readingTime: "8 min de lectura",
            toc: "En esta entrada", backToTop: "Volver arriba", backToBlog: "← Volver al blog",
            share: "Compartir", copy: "Copiar enlace", copied: "¡Enlace copiado!",
            close: "Cerrar", enlarge: "Ampliar foto",
            speakersFrom: "Ponentes desde", registeredFrom: "Inscripciones desde",
            thursday: "Jueves 22 · por videollamada", friday: "Viernes 23 · en sala",
            scoresTitle: "Calificación promedio", outOf: "de 5",
            resources: [
                { href: LINKS.instagram, title: "Fotos", text: "Instagram · @pythonpanama" },
                { href: LINKS.youtube, title: "Grabaciones", text: "YouTube · @pythonpanama" },
                { href: LINKS.agenda, title: "Agenda 2026", text: "pycon.pa/2026/agenda" },
            ],
            cta: [
                { label: "Proponer una charla", subject: "Propuesta de charla PyCon Panamá 2027" },
                { label: "Ser voluntario", subject: "Voluntariado PyCon Panamá 2027" },
                { label: "Patrocinar o ser sede", subject: "Patrocinio PyCon Panamá 2027" },
            ],
        },
        stats: [
            { value: "17", label: "ponentes", detail: "7 en línea · 10 en sala" },
            { value: "7", label: "países de ponentes" },
            { value: "160", label: "personas inscritas", detail: "160 credenciales con QR" },
            { value: "+10", label: "voluntarios" },
            { value: "2", label: "jornadas", detail: "híbrida y presencial" },
            { value: "Gratis", label: "entrada libre para todos" },
        ] as Stat[],
        nps: { value: 89, label: "Net Promoter Score", detail: "Casi 9 de cada 10 asistentes recomendarían PyCon Panamá con 9 o 10.", scale: "Escala de −100 a +100" },
        facts: [
            { icon: "fa-shield-heart", value: "100 %", label: "se sintió en un ambiente seguro e inclusivo" },
            { icon: "fa-seedling", value: "2 de 3", label: "vivieron su primera PyCon" },
            { icon: "fa-rotate-right", value: "3 de 4", label: "quieren volver en 2027", detail: "y 1 de cada 3 quiere dar una charla" },
        ] as Fact[],
        improve: {
            title: "Lo que nos pidieron mejorar",
            items: [
                "Más tiempo para preguntas y respuestas",
                "Más puntualidad en la agenda",
                "Comunicación más clara antes del evento",
                "Roles de voluntariado definidos desde la inducción",
            ],
            note: "Ya incluimos estos puntos en el plan de 2027.",
        },
        scores: [
            { label: "Satisfacción general", value: 4.67 },
            { label: "Calidad de las charlas", value: 4.67 },
            { label: "Variedad de temas", value: 4.89 },
            { label: "Ambiente", value: 4.78 },
            { label: "Experiencia virtual del jueves", value: 4.83 },
        ] as Score[],
        speakerCountries: [c("pa", "Panamá"), c("br", "Brasil"), c("co", "Colombia"), c("gt", "Guatemala"), c("in", "India"), c("mx", "México"), c("pe", "Perú")],
        registeredCountries: [c("pa", "Panamá"), c("br", "Brasil"), c("cl", "Chile"), c("co", "Colombia"), c("cr", "Costa Rica"), c("cu", "Cuba"), c("gt", "Guatemala"), c("mx", "México"), c("ni", "Nicaragua"), c("pe", "Perú"), c("ve", "Venezuela")],
        speakers: { thu: THU, fri: fri("es") },
    },
    en: {
        ui: {
            breadcrumbHome: "Home", breadcrumbBlog: "Blog", readingTime: "8 min read",
            toc: "In this post", backToTop: "Back to top", backToBlog: "← Back to blog",
            share: "Share", copy: "Copy link", copied: "Link copied!",
            close: "Close", enlarge: "Enlarge photo",
            speakersFrom: "Speakers from", registeredFrom: "Registrations from",
            thursday: "Thursday 22 · remote", friday: "Friday 23 · on stage",
            scoresTitle: "Average rating", outOf: "out of 5",
            resources: [
                { href: LINKS.instagram, title: "Photos", text: "Instagram · @pythonpanama" },
                { href: LINKS.youtube, title: "Recordings", text: "YouTube · @pythonpanama" },
                { href: LINKS.agenda, title: "2026 schedule", text: "pycon.pa/2026/agenda" },
            ],
            cta: [
                { label: "Submit a talk", subject: "PyCon Panamá 2027 talk proposal" },
                { label: "Volunteer", subject: "PyCon Panamá 2027 volunteering" },
                { label: "Sponsor or host", subject: "PyCon Panamá 2027 sponsorship" },
            ],
        },
        stats: [
            { value: "17", label: "speakers", detail: "7 remote · 10 on stage" },
            { value: "7", label: "speaker countries" },
            { value: "160", label: "registrations", detail: "160 QR badges sent" },
            { value: "10+", label: "volunteers" },
            { value: "2", label: "days", detail: "hybrid and in person" },
            { value: "Free", label: "admission for everyone" },
        ] as Stat[],
        nps: { value: 89, label: "Net Promoter Score", detail: "Nearly 9 in 10 attendees would recommend PyCon Panamá with a 9 or 10.", scale: "Scale from −100 to +100" },
        facts: [
            { icon: "fa-shield-heart", value: "100%", label: "felt safe and included" },
            { icon: "fa-seedling", value: "2 of 3", label: "attended their first PyCon" },
            { icon: "fa-rotate-right", value: "3 of 4", label: "plan to return in 2027", detail: "and 1 in 3 wants to give a talk" },
        ] as Fact[],
        improve: {
            title: "What you asked us to improve",
            items: [
                "More time for Q&A",
                "Better schedule punctuality",
                "Clearer communication before the event",
                "Volunteer roles defined from onboarding",
            ],
            note: "These are already in our 2027 plan.",
        },
        scores: [
            { label: "Overall satisfaction", value: 4.67 },
            { label: "Talk quality", value: 4.67 },
            { label: "Topic variety", value: 4.89 },
            { label: "Atmosphere", value: 4.78 },
            { label: "Thursday online experience", value: 4.83 },
        ] as Score[],
        speakerCountries: [c("pa", "Panama"), c("br", "Brazil"), c("co", "Colombia"), c("gt", "Guatemala"), c("in", "India"), c("mx", "Mexico"), c("pe", "Peru")],
        registeredCountries: [c("pa", "Panama"), c("br", "Brazil"), c("cl", "Chile"), c("co", "Colombia"), c("cr", "Costa Rica"), c("cu", "Cuba"), c("gt", "Guatemala"), c("mx", "Mexico"), c("ni", "Nicaragua"), c("pe", "Peru"), c("ve", "Venezuela")],
        speakers: { thu: THU, fri: fri("en") },
    },
} satisfies Record<Lang, unknown>;
