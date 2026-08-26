import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://pythonpanama.org";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

type SeoConfig = {
    title: string;
    description: string;
    keywords: string;
};

const defaultSeo: SeoConfig = {
    title: "Python Panamá | Comunidad Python en Panamá y Latinoamérica",
    description:
        "Python Panamá es la comunidad de referencia para aprender Python, participar en eventos, talleres, PyCon Panamá, PyData, Python Route y conectar con talento tecnológico en Panamá y Latinoamérica.",
    keywords:
        "Python Panamá, Python Panama, comunidad Python Panamá, Python Latinoamérica, programación en Panamá, PyCon Panamá, PyData Panamá, Python Route, talleres Python, cursos Python Panamá",
};

const routeSeo: Record<string, SeoConfig> = {
    "/": defaultSeo,
    "/blog": {
        title: "Blog Python Panamá | Recursos, Noticias y Tutoriales de Python",
        description:
            "Lee noticias, tutoriales, recursos y contenido educativo de Python Panamá para aprender programación, datos, automatización e inteligencia artificial.",
        keywords:
            "blog Python Panamá, tutoriales Python, aprender Python Panamá, recursos Python, ciencia de datos Python, programación Panamá",
    },
    "/python-route": {
        title: "Python Route | Educación Tecnológica con Python en Panamá",
        description:
            "Python Route lleva talleres prácticos de Python fuera de la capital para democratizar el acceso a educación tecnológica en comunidades de Panamá.",
        keywords:
            "Python Route, educación tecnológica Panamá, talleres Python Panamá, programación para comunidades, Python fuera de la capital",
    },
    "/python-route/agenda": {
        title: "Agenda Python Route | Fechas y Sedes de los Talleres",
        description:
            "Consulta la agenda de Python Route: fases del programa, fechas y sedes confirmadas de los talleres de Python en comunidades de todo Panamá.",
        keywords:
            "agenda Python Route, fechas talleres Python Panamá, sedes Python Route, calendario Python Panamá, talleres Python provincias",
    },
    "/python-route/patrocinio": {
        title: "Patrocinio Python Route | Apoya la Educación Tecnológica en Panamá",
        description:
            "Descubre qué financia un patrocinio de Python Route: traslados, equipos, materiales educativos y becas para llevar talleres de Python fuera de la capital.",
        keywords:
            "patrocinio Python Route, patrocinar talleres Python Panamá, impacto social tecnología Panamá, sponsors educación Panamá, responsabilidad social Python",
    },
    "/python-route/code-of-conduct": {
        title: "Código de Conducta Python Route | Python Panamá",
        description:
            "Código de Conducta de Python Route: compromisos del programa, conductas inaceptables, procedimiento de reporte y canal privado y confidencial para denunciar incidentes.",
        keywords:
            "código de conducta Python Route, reportar incidente Python Panamá, talleres seguros Python, comunidad inclusiva Panamá, canal de reportes Python Panamá",
    },
    "/formulario-python-route": {
        title: "Registro Python Route | Inscríbete a los Talleres de Python",
        description:
            "Inscríbete a Python Route y participa en talleres prácticos de Python en comunidades de todo Panamá. Registro abierto para estudiantes, docentes y organizaciones anfitrionas.",
        keywords:
            "registro Python Route, inscripción talleres Python Panamá, formulario Python Route, cursos Python gratis Panamá, talleres programación provincias Panamá",
    },
    "/patrocinadores": {
        title: "Patrocinar Python Panamá | Impacto, Comunidad y Talento Tecnológico",
        description:
            "Conoce cómo apoyar a Python Panamá como patrocinador y conectar tu marca con educación tecnológica, talento local, eventos y comunidad Python.",
        keywords:
            "patrocinar Python Panamá, sponsors Python Panamá, talento tecnológico Panamá, comunidad tecnológica Panamá, PyCon Panamá patrocinio",
    },
    "/quiero-ayudar": {
        title: "Quiero Ayudar | Voluntariado en Python Panamá",
        description:
            "Súmate como voluntario de Python Panamá para organizar eventos, mentorizar, crear contenido y apoyar iniciativas educativas como Python Route.",
        keywords:
            "voluntariado Python Panamá, ayudar comunidad Python, mentoría Python, organizar eventos tecnológicos Panamá, Python Route voluntarios",
    },
    "/merch": {
        title: "Merch Python Panamá | Camisetas y Stickers de la Comunidad",
        description:
            "Compra camisetas y stickers oficiales de Python Panamá para apoyar talleres, meetups, Python Route, materiales educativos y actividades de la comunidad.",
        keywords:
            "merch Python Panamá, camisetas Python Panamá, stickers Python Panamá, swag Python, apoyar comunidad Python Panamá",
    },
    "/contacto": {
        title: "Contacto Python Panamá | Redes Sociales y Comunidad",
        description:
            "Conecta con Python Panamá en redes sociales, Meetup, WhatsApp, LinkedIn e Instagram para participar en eventos y actividades de la comunidad.",
        keywords:
            "contacto Python Panamá, redes Python Panamá, Meetup Python Panamá, comunidad Python Panamá, WhatsApp Python Panamá",
    },
    "/codigo-de-conducta": {
        title: "Código de Conducta | Python Panamá",
        description:
            "Código de conducta de Python Panamá para promover una comunidad abierta, inclusiva, profesional y segura en eventos y espacios digitales.",
        keywords:
            "código de conducta Python Panamá, comunidad inclusiva Python, eventos Python Panamá, comunidad tecnológica segura",
    },
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
    const element = document.head.querySelector(selector);

    if (element) {
        element.setAttribute(attr, value);
    }
}

export function SeoMetadata() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.toLowerCase();
        const seo = routeSeo[path] ?? defaultSeo;
        const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

        document.title = seo.title;
        setMeta('meta[name="description"]', "content", seo.description);
        setMeta('meta[name="keywords"]', "content", seo.keywords);
        setMeta('link[rel="canonical"]', "href", canonicalUrl);
        setMeta('meta[property="og:title"]', "content", seo.title);
        setMeta('meta[property="og:description"]', "content", seo.description);
        setMeta('meta[property="og:url"]', "content", canonicalUrl);
        setMeta('meta[property="og:image"]', "content", DEFAULT_IMAGE);
        setMeta('meta[name="twitter:title"]', "content", seo.title);
        setMeta('meta[name="twitter:description"]', "content", seo.description);
        setMeta('meta[name="twitter:image"]', "content", DEFAULT_IMAGE);
    }, [location.pathname]);

    return null;
}
