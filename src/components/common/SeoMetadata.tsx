import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_IMAGE, canonicalUrl, getSeo, normalizePath, routeHeadTags } from "../../seo/siteSeo";

type Selector = { tag: "meta" | "link"; key: "name" | "property" | "rel"; value: string };

// Actualiza la etiqueta, la crea si falta (p. ej. al salir de 404.html) o la
// elimina cuando el valor es null.
function upsert({ tag, key, value }: Selector, attr: "content" | "href", content: string | null) {
    let element = document.head.querySelector(`${tag}[${key}="${value}"]`);

    if (content === null) {
        element?.remove();
        return;
    }
    if (!element) {
        element = document.createElement(tag);
        element.setAttribute(key, value);
        document.head.appendChild(element);
    }
    element.setAttribute(attr, content);
}

const meta = (name: string): Selector => ({ tag: "meta", key: "name", value: name });
const property = (name: string): Selector => ({ tag: "meta", key: "property", value: name });

// El HTML de cada ruta ya llega con sus metadatos desde el prerender. Este
// componente solo los mantiene al día durante la navegación dentro de la SPA.
export function SeoMetadata() {
    const location = useLocation();

    useEffect(() => {
        const path = normalizePath(location.pathname);
        const seo = getSeo(path);
        const url = seo.noindex ? null : canonicalUrl(path);
        const lang = seo.lang ?? "es";

        document.title = seo.title;
        document.documentElement.lang = lang;
        upsert(meta("description"), "content", seo.description);
        upsert(meta("keywords"), "content", seo.keywords);
        upsert(meta("robots"), "content", seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
        upsert({ tag: "link", key: "rel", value: "canonical" }, "href", url);
        upsert(property("og:locale"), "content", lang === "en" ? "en_US" : "es_PA");
        upsert(property("og:title"), "content", seo.title);
        upsert(property("og:description"), "content", seo.description);
        upsert(property("og:url"), "content", url);
        upsert(property("og:type"), "content", seo.article ? "article" : "website");
        upsert(property("og:image"), "content", DEFAULT_IMAGE);
        upsert(meta("twitter:title"), "content", seo.title);
        upsert(meta("twitter:description"), "content", seo.description);
        upsert(meta("twitter:image"), "content", DEFAULT_IMAGE);

        // hreflang, article:* y JSON-LD propios de la ruta anterior se reemplazan.
        document.head.querySelectorAll('[data-seo="route"]').forEach((element) => element.remove());
        for (const { tag, attrs, text } of routeHeadTags(path)) {
            const element = document.createElement(tag);
            Object.entries({ ...attrs, "data-seo": "route" }).forEach(([key, value]) => element.setAttribute(key, value));
            if (text) element.textContent = text;
            document.head.appendChild(element);
        }
    }, [location.pathname]);

    return null;
}
