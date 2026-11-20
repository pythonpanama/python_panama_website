// Piezas compartidas por las entradas de resumen del blog (PyCon Panamá 2026,
// Hacktoberfest Hack Day 2026): texto enriquecido, galería con visor, cifras,
// selector de idioma y botones para compartir. Los estilos son las clases
// pycon26-* de public/css/Blog&Conduct.css.

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { external } from "./blogText";

export type Lang = "es" | "en";
// position: encuadre opcional (object-position) para llenar el marco con una
// foto vertical sin cortar caras; sin él, la foto se muestra completa.
export type Photo = { src: string; alt: string; position?: string };
export type Stat = { value: string; label: string; detail?: string };

// Galería con visor: un clic amplía la foto en un <dialog> accesible.
export function Photos({ photos, onOpen, enlarge, className }: { photos: Photo[]; onOpen: (p: Photo) => void; enlarge: string; className?: string }) {
    return (
        <div className={`pycon26-photos pycon26-photos-${Math.min(photos.length, 3)}${className ? ` ${className}` : ""}`}>
            {photos.map((photo) => (
                <figure key={photo.src} className="pycon26-figure">
                    <button type="button" className="pycon26-zoom" onClick={() => onOpen(photo)} aria-label={`${enlarge}: ${photo.alt}`}>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            width={1600}
                            height={1600}
                            style={photo.position ? { objectFit: "cover", objectPosition: photo.position } : undefined}
                        />
                    </button>
                    {/* El pie repite el alt: se oculta a lectores de pantalla para no leerlo dos veces. */}
                    <figcaption aria-hidden="true">{photo.alt}</figcaption>
                </figure>
            ))}
        </div>
    );
}

export function Lightbox({ photo, onClose, closeLabel }: { photo: Photo | null; onClose: () => void; closeLabel: string }) {
    const ref = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const d = ref.current;
        if (!d) return;
        if (photo && !d.open) d.showModal();
        if (!photo && d.open) d.close();
    }, [photo]);
    return (
        <dialog ref={ref} className="pycon26-lightbox" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
            {photo && (
                <figure>
                    <img src={photo.src} alt={photo.alt} />
                    <figcaption>{photo.alt}</figcaption>
                </figure>
            )}
            <button type="button" className="pycon26-lightbox-close" onClick={onClose} aria-label={closeLabel}>×</button>
        </dialog>
    );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
    return (
        <ul className="pycon26-stats">
            {stats.map((s) => (
                <li key={s.label}>
                    <span className="pycon26-stat-value">{s.value}</span>
                    <span className="pycon26-stat-label">{s.label}</span>
                    {s.detail && <span className="pycon26-stat-detail">{s.detail}</span>}
                </li>
            ))}
        </ul>
    );
}

// Selector de idioma: cada versión tiene su propia URL (y hreflang en siteSeo).
export function LangSwitch({ lang, paths }: { lang: Lang; paths: Record<Lang, string> }) {
    const options: { code: Lang; label: string; name: string }[] = [
        { code: "es", label: "ES", name: "Español" },
        { code: "en", label: "EN", name: "English" },
    ];
    return (
        <nav className="pycon26-lang" aria-label={lang === "es" ? "Idioma de la entrada" : "Post language"}>
            {options.map((option) =>
                option.code === lang ? (
                    <span key={option.code} className="active" aria-current="page" lang={option.code} title={option.name}>
                        {option.label}
                    </span>
                ) : (
                    <Link key={option.code} to={paths[option.code]} hrefLang={option.code} lang={option.code} title={option.name}>
                        {option.label}
                    </Link>
                ),
            )}
        </nav>
    );
}

export type ShareLabels = { share: string; copy: string; copied: string };

export function Share({ url, title, ui }: { url: string; title: string; ui: ShareLabels }) {
    const [copied, setCopied] = useState(false);
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch { /* sin portapapeles: no hacemos nada */ }
    };
    return (
        <div className="pycon26-share">
            <span className="pycon26-share-label"><i className="fa-solid fa-share-nodes" aria-hidden="true" /> {ui.share}</span>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} {...external} className="is-linkedin" aria-label={`${ui.share}: LinkedIn`}>
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" /><span>LinkedIn</span>
            </a>
            <a href={`https://x.com/intent/post?url=${u}&text=${t}`} {...external} className="is-x" aria-label={`${ui.share}: X`}>
                <i className="fa-brands fa-x-twitter" aria-hidden="true" /><span>X</span>
            </a>
            <a href={`https://wa.me/?text=${t}%20${u}`} {...external} className="is-whatsapp" aria-label={`${ui.share}: WhatsApp`}>
                <i className="fa-brands fa-whatsapp" aria-hidden="true" /><span>WhatsApp</span>
            </a>
            <button type="button" onClick={() => void copy()} className={copied ? "is-copied" : undefined}>
                <i className={`fa-solid ${copied ? "fa-check" : "fa-link"}`} aria-hidden="true" /><span>{copied ? ui.copied : ui.copy}</span>
            </button>
            <span className="pycon26-sr" role="status">{copied ? ui.copied : ""}</span>
        </div>
    );
}

// Índice de la entrada: desplegable en el teléfono y fijo a la derecha en escritorio.
export function Toc({ title, sections }: { title: string; sections: { id: string; title: string }[] }) {
    const list = (
        <ol>
            {sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </ol>
    );
    return (
        <nav className="pycon26-toc" aria-label={title}>
            <details className="d-lg-none">
                <summary>{title}</summary>
                {list}
            </details>
            <div className="d-none d-lg-block">
                <p className="pycon26-toc-title">{title}</p>
                {list}
            </div>
        </nav>
    );
}
