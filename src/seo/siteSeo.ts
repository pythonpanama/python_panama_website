import { PYTHON_ROUTE_LEMA } from "../components/python-route/pythonRouteData";

// Fuente única de metadatos SEO: la usan el navegador (SeoMetadata) y el
// prerender del build (scripts/prerender.mjs), que genera un HTML por ruta.

export const SITE_URL = "https://pythonpanama.org";
export const SITE_NAME = "Python Panamá";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

export type SeoConfig = {
    title: string;
    description: string;
    keywords: string;
    // Migas de pan visibles en los resultados de búsqueda (sin incluir Inicio).
    breadcrumb?: string;
    lang?: "es" | "en";
    // Versión del mismo contenido en otro idioma (hreflang).
    alternate?: { lang: "es" | "en"; path: string };
    article?: {
        headline: string;
        datePublished: string;
        dateModified: string;
    };
    noindex?: boolean;
};

export const defaultSeo: SeoConfig = {
    title: "Python Panamá | Comunidad Python en Panamá y Latinoamérica",
    description:
        "Python Panamá es la comunidad de referencia para aprender Python, participar en eventos, talleres, PyCon Panamá, PyData, Python Route y conectar con talento tecnológico en Panamá y Latinoamérica.",
    keywords:
        "Python Panamá, Python Panama, comunidad Python Panamá, Python Latinoamérica, programación en Panamá, PyCon Panamá, PyData Panamá, Python Route, talleres Python, cursos Python Panamá",
};

export const notFoundSeo: SeoConfig = {
    title: "Página no encontrada | Python Panamá",
    description: "La página que buscas no existe o cambió de dirección. Vuelve al inicio de Python Panamá.",
    keywords: "",
    noindex: true,
};

export const routeSeo: Record<string, SeoConfig> = {
    "/": defaultSeo,
    "/blog": {
        title: "Blog Python Panamá | Recursos, noticias y tutoriales de Python",
        description:
            "Lee noticias, tutoriales, recursos y contenido educativo de Python Panamá para aprender programación, datos, automatización e inteligencia artificial.",
        keywords:
            "blog Python Panamá, tutoriales Python, aprender Python Panamá, recursos Python, ciencia de datos Python, programación Panamá",
        breadcrumb: "Blog",
    },
    "/blog/python-panama-2024": {
        title: "Éxitos y desafíos de Python Panamá en 2024 | Blog Python Panamá",
        description:
            "Resumen del 2024 de la comunidad Python Panamá: PyCon Panamá con más de 400 asistentes, cursos, meetups, PyCafé y alianzas con universidades.",
        keywords:
            "Python Panamá 2024, PyCon Panamá 2024, comunidad Python Panamá, meetup Python Panamá, PyCafé",
        breadcrumb: "Python Panamá 2024",
        alternate: { lang: "en", path: "/blog/python-panama-2024-eng" },
        article: {
            headline: "Éxitos y desafíos de la comunidad Python Panamá en 2024",
            datePublished: "2025-03-07",
            dateModified: "2026-09-18",
        },
    },
    "/blog/python-panama-2024-eng": {
        title: "Python Panama Community 2024: Successes and Challenges | Python Panamá",
        description:
            "A look back at 2024 for the Python Panama community: PyCon Panamá with 400+ attendees, courses, meetups, PyCafé, and university partnerships.",
        keywords:
            "Python Panama 2024, PyCon Panama 2024, Python community Panama, Python meetup Panama",
        breadcrumb: "Python Panama 2024",
        lang: "en",
        alternate: { lang: "es", path: "/blog/python-panama-2024" },
        article: {
            headline: "Successes and Challenges of the Python Panama Community 2024",
            datePublished: "2025-03-12",
            dateModified: "2026-09-18",
        },
    },
    "/blog/historia-python": {
        title: "Historia de Python: cómo nació el lenguaje | Blog Python Panamá",
        description:
            "Conoce la historia de Python: su creación por Guido van Rossum, el origen de su nombre, sus versiones principales y por qué se volvió tan popular.",
        keywords:
            "historia de Python, Guido van Rossum, origen de Python, qué es Python, lenguaje de programación Python",
        breadcrumb: "Historia de Python",
        article: {
            headline: "Historia de Python",
            datePublished: "2024-12-31",
            dateModified: "2026-09-18",
        },
    },
    "/blog/como-empezar-en-ciencia-de-datos-con-python": {
        title: "Cómo empezar en ciencia de datos con Python | Blog Python Panamá",
        description:
            "Guía paso a paso para empezar en ciencia de datos con Python: NumPy, Pandas, Matplotlib, Scikit-Learn, fuentes de datos como Kaggle y análisis exploratorio.",
        keywords:
            "ciencia de datos con Python, aprender ciencia de datos, Pandas, NumPy, Scikit-Learn, Python para datos, data science Panamá",
        breadcrumb: "Ciencia de datos con Python",
        article: {
            headline: "Cómo empezar en ciencia de datos con Python",
            datePublished: "2024-12-31",
            dateModified: "2026-09-18",
        },
    },
    "/python-route": {
        title: "Python Route | Conéctate con Python, tecnología sin fronteras",
        description:
            `${PYTHON_ROUTE_LEMA} Python Route lleva talleres prácticos fuera de la capital para democratizar el acceso a educación tecnológica en comunidades de Panamá.`,
        keywords:
            "Python Route, conéctate con Python, tecnología sin fronteras, educación tecnológica Panamá, talleres Python Panamá, programación para comunidades, Python fuera de la capital",
        breadcrumb: "Python Route",
    },
    "/python-route/agenda": {
        title: "Agenda de Python Route | Fechas y sedes de los talleres",
        description:
            "Consulta la agenda de Python Route: fases del programa, fechas y sedes confirmadas de los talleres de Python en comunidades de todo Panamá.",
        keywords:
            "agenda Python Route, fechas talleres Python Panamá, sedes Python Route, calendario Python Panamá, talleres Python provincias",
        breadcrumb: "Agenda",
    },
    "/python-route/patrocinio": {
        title: "Patrocinio de Python Route | Apoya la educación tecnológica en Panamá",
        description:
            "Descubre qué financia un patrocinio de Python Route: traslados, equipos, materiales educativos y becas para llevar talleres de Python fuera de la capital.",
        keywords:
            "patrocinio Python Route, patrocinar talleres Python Panamá, impacto social tecnología Panamá, sponsors educación Panamá, responsabilidad social Python",
        breadcrumb: "Patrocinio",
    },
    "/python-route/code-of-conduct": {
        title: "Código de conducta de Python Route | Python Panamá",
        description:
            "Código de conducta de Python Route: compromisos del programa, conductas inaceptables, procedimiento de reporte y canal privado y confidencial para denunciar incidentes.",
        keywords:
            "código de conducta Python Route, reportar incidente Python Panamá, talleres seguros Python, comunidad inclusiva Panamá, canal de reportes Python Panamá",
        breadcrumb: "Código de conducta",
    },
    "/patrocinadores": {
        title: "Patrocinar Python Panamá | Impacto, comunidad y talento tecnológico",
        description:
            "Conoce cómo apoyar a Python Panamá como patrocinador y conectar tu marca con educación tecnológica, talento local, eventos y comunidad Python.",
        keywords:
            "patrocinar Python Panamá, sponsors Python Panamá, talento tecnológico Panamá, comunidad tecnológica Panamá, PyCon Panamá patrocinio",
        breadcrumb: "Patrocinadores",
    },
    "/quiero-ayudar": {
        title: "Quiero ayudar | Voluntariado en Python Panamá",
        description:
            "Súmate como voluntario de Python Panamá para organizar eventos, mentorizar, crear contenido y apoyar iniciativas educativas como Python Route.",
        keywords:
            "voluntariado Python Panamá, ayudar comunidad Python, mentoría Python, organizar eventos tecnológicos Panamá, Python Route voluntarios",
        breadcrumb: "Quiero ayudar",
    },
    "/merch": {
        title: "Merch Python Panamá | Camisetas y stickers de la comunidad",
        description:
            "Compra camisetas y stickers oficiales de Python Panamá para apoyar talleres, meetups, Python Route, materiales educativos y actividades de la comunidad.",
        keywords:
            "merch Python Panamá, camisetas Python Panamá, stickers Python Panamá, swag Python, apoyar comunidad Python Panamá",
        breadcrumb: "Merch",
    },
    "/contacto": {
        title: "Contacto Python Panamá | Redes sociales y comunidad",
        description:
            "Conecta con Python Panamá en redes sociales, Meetup, WhatsApp, LinkedIn e Instagram para participar en eventos y actividades de la comunidad.",
        keywords:
            "contacto Python Panamá, redes Python Panamá, Meetup Python Panamá, comunidad Python Panamá, WhatsApp Python Panamá",
        breadcrumb: "Contacto",
    },
    "/codigo-de-conducta": {
        title: "Código de conducta | Python Panamá",
        description:
            "Código de conducta de Python Panamá para promover una comunidad abierta, inclusiva, profesional y segura en eventos y espacios digitales.",
        keywords:
            "código de conducta Python Panamá, comunidad inclusiva Python, eventos Python Panamá, comunidad tecnológica segura",
        breadcrumb: "Código de conducta",
    },
};

export function getSeo(pathname: string): SeoConfig {
    return routeSeo[normalizePath(pathname)] ?? notFoundSeo;
}

export function normalizePath(pathname: string) {
    const path = pathname.toLowerCase().replace(/\/+$/, "");
    return path === "" ? "/" : path;
}

export function canonicalUrl(path: string) {
    return `${SITE_URL}${path === "/" ? "/" : path}`;
}

// Datos estructurados (schema.org) específicos de cada ruta. Organization y
// WebSite viven en index.html porque son iguales para todo el sitio.
export function routeJsonLd(path: string): object[] {
    const seo = routeSeo[path];
    if (!seo) return [];

    const graph: object[] = [];

    if (path !== "/") {
        const items = [{ name: "Inicio", url: canonicalUrl("/") }];
        const segments = path.split("/").filter(Boolean);
        for (let i = 1; i <= segments.length; i++) {
            const subPath = `/${segments.slice(0, i).join("/")}`;
            const subSeo = routeSeo[subPath];
            if (subSeo?.breadcrumb) items.push({ name: subSeo.breadcrumb, url: canonicalUrl(subPath) });
        }
        graph.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url,
            })),
        });
    }

    if (seo.article) {
        graph.push({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: seo.article.headline,
            description: seo.description,
            inLanguage: seo.lang === "en" ? "en" : "es-PA",
            datePublished: seo.article.datePublished,
            dateModified: seo.article.dateModified,
            image: DEFAULT_IMAGE,
            mainEntityOfPage: canonicalUrl(path),
            author: { "@type": "Organization", name: SITE_NAME, url: canonicalUrl("/") },
            publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                logo: { "@type": "ImageObject", url: LOGO_URL },
            },
        });
    }

    return graph;
}

export type HeadTag = {
    tag: "link" | "meta" | "script";
    attrs: Record<string, string>;
    text?: string;
};

// Etiquetas que solo existen en algunas rutas. Se marcan con data-seo="route"
// para que SeoMetadata pueda reemplazarlas al navegar dentro de la SPA.
export function routeHeadTags(path: string): HeadTag[] {
    const seo = routeSeo[path];
    if (!seo) return [];

    const tags: HeadTag[] = [];
    if (seo.alternate) {
        tags.push({ tag: "link", attrs: { rel: "alternate", hreflang: seo.lang ?? "es", href: canonicalUrl(path) } });
        tags.push({ tag: "link", attrs: { rel: "alternate", hreflang: seo.alternate.lang, href: canonicalUrl(seo.alternate.path) } });
    }
    if (seo.article) {
        tags.push({ tag: "meta", attrs: { property: "article:published_time", content: seo.article.datePublished } });
        tags.push({ tag: "meta", attrs: { property: "article:modified_time", content: seo.article.dateModified } });
    }
    for (const data of routeJsonLd(path)) {
        tags.push({ tag: "script", attrs: { type: "application/ld+json" }, text: JSON.stringify(data).replace(/</g, "\\u003c") });
    }
    return tags;
}
