import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CONTENT, EMAIL, LOGOS, PATHS, type Lang, type Photo } from "./pythonPanama2026Content";
import { EXTRA, LESSON_ICONS, SITE, SPONSOR_URLS, type Country, type Speaker, type Stat } from "./pythonPanama2026Extra";
import { FLAGS } from "./flags";

const external = { target: "_blank", rel: "noopener noreferrer" };

// Convierte **negrita** y `código` del contenido en elementos de React.
function rich(text: string): ReactNode {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
        return <Fragment key={i}>{part}</Fragment>;
    });
}

// Galería con visor: un clic amplía la foto en un <dialog> accesible.
function Photos({ photos, onOpen, enlarge }: { photos: Photo[]; onOpen: (p: Photo) => void; enlarge: string }) {
    return (
        <div className={`pycon26-photos pycon26-photos-${Math.min(photos.length, 3)}`}>
            {photos.map((photo) => (
                <figure key={photo.src} className="pycon26-figure">
                    <button type="button" className="pycon26-zoom" onClick={() => onOpen(photo)} aria-label={`${enlarge}: ${photo.alt}`}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" width={1600} height={1600} />
                    </button>
                    {/* El pie repite el alt: se oculta a lectores de pantalla para no leerlo dos veces. */}
                    <figcaption aria-hidden="true">{photo.alt}</figcaption>
                </figure>
            ))}
        </div>
    );
}

function Lightbox({ photo, onClose, closeLabel }: { photo: Photo | null; onClose: () => void; closeLabel: string }) {
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

function StatGrid({ stats }: { stats: Stat[] }) {
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

// Medidor semicircular del NPS: la escala va de −100 a +100.
function Gauge({ value, label, detail, scale }: { value: number; label: string; detail: string; scale: string }) {
    const filled = ((value + 100) / 200) * 100;
    return (
        <div className="pycon26-gauge">
            <svg viewBox="0 0 120 76" role="img" aria-label={`${label}: +${value}. ${scale}`}>
                <path d="M10 62 A50 50 0 0 1 110 62" pathLength={100} className="track" />
                <path d="M10 62 A50 50 0 0 1 110 62" pathLength={100} className="fill" strokeDasharray={`${filled} 100`} />
                <text x="60" y="56" textAnchor="middle" className="value">+{value}</text>
                <text x="10" y="75" textAnchor="middle" className="scale">−100</text>
                <text x="110" y="75" textAnchor="middle" className="scale">+100</text>
            </svg>
            <p className="pycon26-gauge-label">{label} (NPS)</p>
            <p className="pycon26-gauge-detail">{detail}</p>
        </div>
    );
}

// Cinco estrellas rellenas en proporción exacta a la nota (4.67 de 5 = 93 %).
function Stars({ value }: { value: number }) {
    const row = <>{[0, 1, 2, 3, 4].map((i) => <i key={i} className="fa-solid fa-star" />)}</>;
    return (
        <span className="pycon26-stars" aria-hidden="true">
            <span className="base">{row}</span>
            <span className="on" style={{ width: `${(value / 5) * 100}%` }}>{row}</span>
        </span>
    );
}

function Chips({ title, items }: { title: string; items: Country[] }) {
    return (
        <div className="pycon26-chips">
            <h3>{title} <span className="pycon26-count">{items.length}</span></h3>
            <ul>
                {items.map((country) => (
                    <li key={country.code}>
                        {/* La bandera es decorativa: el nombre del país ya está en el texto. */}
                        <img className="pycon26-flag" src={FLAGS[country.code]} alt="" width={20} height={15} loading="lazy" />
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SpeakerList({ title, speakers }: { title: string; speakers: Speaker[] }) {
    return (
        <div className="pycon26-speakers">
            <h3>{title}</h3>
            <ul>
                {speakers.map((s) => (
                    <li key={s.name} className={s.role ? "has-role" : undefined}>
                        <span className="pycon26-avatar" aria-hidden="true">
                            {s.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                        </span>
                        <span>
                            <strong>{s.name}</strong>
                            {s.role && <span className="pycon26-role">{s.role}</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Selector de idioma: cada versión tiene su propia URL (y hreflang en siteSeo).
function LangSwitch({ lang }: { lang: Lang }) {
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
                    <Link key={option.code} to={PATHS[option.code]} hrefLang={option.code} lang={option.code} title={option.name}>
                        {option.label}
                    </Link>
                ),
            )}
        </nav>
    );
}

function Share({ lang, title }: { lang: Lang; title: string }) {
    const ui = EXTRA[lang].ui;
    const url = SITE + PATHS[lang];
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
            <button type="button" onClick={copy} className={copied ? "is-copied" : undefined}>
                <i className={`fa-solid ${copied ? "fa-check" : "fa-link"}`} aria-hidden="true" /><span>{copied ? ui.copied : ui.copy}</span>
            </button>
            <span className="pycon26-sr" role="status">{copied ? ui.copied : ""}</span>
        </div>
    );
}

function Post({ lang }: { lang: Lang }) {
    const c = CONTENT[lang];
    const x = EXTRA[lang];
    const ui = x.ui;
    const [photo, setPhoto] = useState<Photo | null>(null);
    const photos = (list: Photo[]) => <Photos photos={list} onOpen={setPhoto} enlarge={ui.enlarge} />;

    const sections = [
        { id: "cifras", title: c.numbers.heading },
        { id: "programa", title: c.program.heading },
        { id: "sedes", title: c.venues.heading },
        { id: "comunidad", title: c.community.heading },
        { id: "encuesta", title: c.survey.heading },
        { id: "agradecimientos", title: c.thanks.heading },
        { id: "aprendizajes", title: c.lessons.heading },
        { id: "2027", title: c.next.heading },
        { id: "recursos", title: c.resources.heading },
    ];
    const H2 = ({ i }: { i: number }) => <h2 id={sections[i].id} className="font-weight-bold pycon26-h2">{sections[i].title}</h2>;
    const toc = (
        <ol>
            {sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </ol>
    );

    return (
        <>
            <header id="top" className="pycon26-hero">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="pycon26-breadcrumb">
                            <li><Link to="/">{ui.breadcrumbHome}</Link></li>
                            <li><Link to="/blog">{ui.breadcrumbBlog}</Link></li>
                            <li aria-current="page">PyCon Panamá 2026</li>
                        </ol>
                    </nav>
                    <h1>{c.title}</h1>
                    <p className="pycon26-hero-lema">{c.lema}</p>
                    <p className="pycon26-hero-meta">
                        {c.byline} · <time dateTime="2026-10-26">{c.date}</time> · {ui.readingTime}
                    </p>
                </div>
            </header>

            <div className="container py-4" lang={lang}>
                <div className="row">
                    <aside className="col-lg-3 order-lg-2 mb-4">
                        <nav className="pycon26-toc" aria-label={ui.toc}>
                            <details className="d-lg-none">
                                <summary>{ui.toc}</summary>
                                {toc}
                            </details>
                            <div className="d-none d-lg-block">
                                <p className="pycon26-toc-title">{ui.toc}</p>
                                {toc}
                            </div>
                        </nav>
                    </aside>

                    <article className="col-lg-9 order-lg-1 pycon26">
                        <div className="pycon26-meta">
                            <Share lang={lang} title={c.title} />
                            <LangSwitch lang={lang} />
                        </div>

                        <figure className="pycon26-figure pycon26-cover">
                            <button type="button" className="pycon26-zoom" onClick={() => setPhoto(c.cover)} aria-label={`${ui.enlarge}: ${c.cover.alt}`}>
                                <img src={c.cover.src} alt={c.cover.alt} width={1600} height={1600} fetchPriority="high" />
                            </button>
                            <figcaption>{c.cover.caption}</figcaption>
                        </figure>

                        <p className="pycon26-lead">{rich(c.summary)}</p>

                        <H2 i={0} />
                        <StatGrid stats={x.stats} />
                        <div className="pycon26-chip-row">
                            <Chips title={ui.speakersFrom} items={x.speakerCountries} />
                            <Chips title={ui.registeredFrom} items={x.registeredCountries} />
                        </div>

                        <H2 i={1} />
                        <p>{rich(c.program.intro)}</p>
                        <ol className="pycon26-tracks">
                            {c.program.tracks.map(([name, text]) => (
                                <li key={name}><strong>{name}</strong><span>{text}</span></li>
                            ))}
                        </ol>
                        <h3 className="pycon26-h3">{c.program.thursday.title}</h3>
                        <p>{c.program.thursday.text}</p>
                        {photos(c.program.thursday.photos)}
                        <h3 className="pycon26-h3">{c.program.friday.title}</h3>
                        <p>{c.program.friday.text}</p>
                        {photos(c.program.friday.photos)}
                        <p>{c.program.thanksIntro}</p>
                        <div className="pycon26-speaker-cols">
                            <SpeakerList title={ui.thursday} speakers={x.speakers.thu} />
                            <SpeakerList title={ui.friday} speakers={x.speakers.fri} />
                        </div>
                        <p>{c.program.thanksClose}</p>

                        <H2 i={2} />
                        <p>{rich(c.venues.text)}</p>
                        {photos(c.venues.photos)}

                        <H2 i={3} />
                        {c.community.paragraphs.map((text) => <p key={text}>{rich(text)}</p>)}
                        {photos(c.community.photos)}

                        <H2 i={4} />
                        <p>{c.survey.intro}</p>
                        <div className="pycon26-survey">
                            <Gauge value={x.nps.value} label={x.nps.label} detail={x.nps.detail} scale={x.nps.scale} />
                            <ul className="pycon26-facts">
                                {x.facts.map((f) => (
                                    <li key={f.label}>
                                        <span className="pycon26-fact-icon" aria-hidden="true"><i className={`fa-solid ${f.icon}`} /></span>
                                        <span>
                                            <span className="pycon26-fact-value">{f.value}</span>
                                            <span className="pycon26-fact-label">{f.label}</span>
                                            {f.detail && <span className="pycon26-fact-detail">{f.detail}</span>}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h3 className="pycon26-h3">{ui.scoresTitle}</h3>
                        <ul className="pycon26-ratings">
                            {x.scores.map((s) => (
                                <li key={s.label}>
                                    <span className="pycon26-rating-value">{s.value.toFixed(2)}<small> {ui.outOf}</small></span>
                                    <Stars value={s.value} />
                                    <span className="pycon26-rating-label">{s.label}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pycon26-quotes">
                            {c.survey.quotes.map(([quote, author]) => (
                                <figure key={author} className="pycon26-quote">
                                    <i className="fa-solid fa-quote-left" aria-hidden="true" />
                                    <blockquote><p>{quote}</p></blockquote>
                                    <figcaption>
                                        <span className="pycon26-quote-avatar" aria-hidden="true"><i className="fa-solid fa-user" /></span>
                                        {author}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="pycon26-improve">
                            <p className="pycon26-improve-title"><i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" /> {x.improve.title}</p>
                            <ul>
                                {x.improve.items.map((item) => (
                                    <li key={item}><i className="fa-solid fa-circle-check" aria-hidden="true" /> {item}</li>
                                ))}
                            </ul>
                            <p className="pycon26-improve-note">{x.improve.note}</p>
                        </div>

                        <H2 i={5} />
                        <p>{c.thanks.intro}</p>
                        <ul className="pycon26-partners">
                            {c.thanks.rows.map(([name, role]) => (
                                <li key={name}><strong>{name}</strong><span>{role}</span></li>
                            ))}
                        </ul>
                        <p>{rich(c.thanks.close)}</p>
                        <ul className="pycon26-logos" aria-label={c.thanks.logosLabel}>
                            {LOGOS.map((logo) => {
                                const href = SPONSOR_URLS[logo.alt];
                                const img = <img src={logo.src} alt={logo.alt} loading="lazy" />;
                                return <li key={logo.alt}>{href ? <a href={href} {...external}>{img}</a> : img}</li>;
                            })}
                        </ul>
                        {photos([c.thanks.photo])}

                        <H2 i={6} />
                        <p>{c.lessons.intro}</p>
                        <ul className="pycon26-lessons">
                            {c.lessons.items.map(([title, text], i) => (
                                <li key={title}>
                                    <span className="pycon26-lesson-icon" aria-hidden="true"><i className={`fa-solid ${LESSON_ICONS[i]}`} /></span>
                                    <strong>{title.replace(/\.$/, "")}</strong>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        <H2 i={7} />
                        <section className="pycon26-cta" aria-labelledby="2027">
                            <p>{rich(c.next.text)} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
                            <div className="pycon26-cta-buttons">
                                {ui.cta.map((b) => (
                                    <a key={b.label} className="btn btn-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent(b.subject)}`}>
                                        {b.label}
                                    </a>
                                ))}
                            </div>
                        </section>

                        <H2 i={8} />
                        <ul className="pycon26-resources">
                            {ui.resources.map((r) => (
                                <li key={r.href}><a href={r.href} {...external}><span>{r.title}</span>{r.text}</a></li>
                            ))}
                        </ul>

                        <div className="pycon26-end">
                            <Link to="/blog">{ui.backToBlog}</Link>
                            <Share lang={lang} title={c.title} />
                            <a href="#top">↑ {ui.backToTop}</a>
                        </div>
                    </article>
                </div>
            </div>

            <Lightbox photo={photo} onClose={() => setPhoto(null)} closeLabel={ui.close} />
        </>
    );
}

export function PythonPanama2026() {
    return <Post lang="es" />;
}

export function PythonPanama2026_ENG() {
    return <Post lang="en" />;
}
