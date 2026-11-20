import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTENT, EMAIL, LOGOS, PATHS, type Lang, type Photo } from "./pythonPanama2026Content";
import { EXTRA, LESSON_ICONS, SITE, SPONSOR_URLS, type Country, type Speaker } from "./pythonPanama2026Extra";
import { LangSwitch, Lightbox, Photos, Share, StatGrid, Toc } from "./blogParts";
import { external, rich } from "./blogText";
import { FLAGS } from "./flags";

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
    const url = SITE + PATHS[lang];

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
                        <Toc title={ui.toc} sections={sections} />
                    </aside>

                    <article className="col-lg-9 order-lg-1 pycon26">
                        <div className="pycon26-meta">
                            <Share url={url} title={c.title} ui={ui} />
                            <LangSwitch lang={lang} paths={PATHS} />
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
                            <Share url={url} title={c.title} ui={ui} />
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
