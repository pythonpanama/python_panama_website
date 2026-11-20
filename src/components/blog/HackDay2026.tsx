// Entrada «Hacktoberfest Hack Day Panamá 2026»: resumen público del Hack Day
// del 31 de octubre de 2026. Misma estructura y estilos que la entrada de
// PyCon Panamá 2026; el texto vive en hackDay2026Content.ts.

import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTENT, EMAIL, LINKS, LOGOS, PATHS } from "./hackDay2026Content";
import { LangSwitch, Lightbox, Photos, Share, StatGrid, Toc, type Lang, type Photo } from "./blogParts";
import { external, rich } from "./blogText";

const SITE = "https://pythonpanama.org";
const LESSON_ICONS = ["fa-chalkboard-user", "fa-people-group", "fa-id-badge", "fa-paper-plane"];

function Post({ lang }: { lang: Lang }) {
    const c = CONTENT[lang];
    const ui = c.ui;
    const url = SITE + PATHS[lang];
    const [photo, setPhoto] = useState<Photo | null>(null);
    const photos = (list: Photo[]) => <Photos photos={list} onOpen={setPhoto} enlarge={ui.enlarge} />;

    const sections = [
        { id: "cifras", title: c.numbers.heading },
        { id: "programa", title: c.program.heading },
        { id: "ganadores", title: c.winners.heading },
        { id: "proyectos", title: c.projects.heading },
        { id: "sede", title: c.venue.heading },
        { id: "comunidad", title: c.community.heading },
        { id: "agradecimientos", title: c.thanks.heading },
        { id: "aprendizajes", title: c.lessons.heading },
        { id: "ahora", title: c.next.heading },
        { id: "recursos", title: c.resources.heading },
    ];
    const H2 = ({ i }: { i: number }) => <h2 id={sections[i].id} className="font-weight-bold pycon26-h2">{sections[i].title}</h2>;

    return (
        <>
            <header id="top" className="pycon26-hero hackday26-hero">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="pycon26-breadcrumb">
                            <li><Link to="/">{ui.breadcrumbHome}</Link></li>
                            <li><Link to="/blog">{ui.breadcrumbBlog}</Link></li>
                            <li aria-current="page">Hacktoberfest Hack Day 2026</li>
                        </ol>
                    </nav>
                    <h1>{c.title}</h1>
                    <p className="pycon26-hero-lema">{c.lema}</p>
                    <p className="pycon26-hero-meta">
                        {c.byline} · <time dateTime="2026-11-20">{c.date}</time> · {c.readingTime}
                    </p>
                </div>
            </header>

            <div className="container py-4" lang={lang}>
                <div className="row">
                    <aside className="col-lg-3 order-lg-2 mb-4">
                        <Toc title={ui.toc} sections={sections} />
                    </aside>

                    <article className="col-lg-9 order-lg-1 pycon26 hackday26">
                        <div className="pycon26-meta">
                            <Share url={url} title={c.title} ui={ui} />
                            <LangSwitch lang={lang} paths={PATHS} />
                        </div>

                        <figure className="pycon26-figure pycon26-cover hackday26-cover">
                            <button type="button" className="pycon26-zoom" onClick={() => setPhoto(c.cover)} aria-label={`${ui.enlarge}: ${c.cover.alt}`}>
                                <img src={c.cover.src} alt={c.cover.alt} width={1600} height={725} fetchPriority="high" />
                            </button>
                            <figcaption>{c.cover.caption}</figcaption>
                        </figure>

                        <p className="pycon26-lead">{rich(c.summary)}</p>

                        <H2 i={0} />
                        <StatGrid stats={c.numbers.stats} />
                        <p className="hackday26-note"><i className="fa-solid fa-earth-americas" aria-hidden="true" /> <span>{rich(c.numbers.note)}</span></p>

                        <H2 i={1} />
                        <p>{rich(c.program.intro)}</p>
                        <ol className="pycon26-tracks hackday26-tracks">
                            {c.program.tracks.map(([name, text]) => (
                                <li key={name}><strong>{name}</strong><span>{text}</span></li>
                            ))}
                        </ol>
                        <h3 className="pycon26-h3">{c.program.morning.title}</h3>
                        <p>{c.program.morning.text}</p>
                        {photos(c.program.morning.photos)}
                        <h3 className="pycon26-h3">{c.program.work.title}</h3>
                        <p>{c.program.work.text}</p>
                        {photos(c.program.work.photos)}

                        <H2 i={2} />
                        <p>{c.winners.intro}</p>
                        <ul className="hackday26-winners">
                            {c.winners.items.map((w) => (
                                <li key={w.challenge}>
                                    <span className="hackday26-trophy" aria-hidden="true"><i className="fa-solid fa-trophy" /></span>
                                    <span className="hackday26-challenge">{w.challenge}</span>
                                    <strong className="hackday26-project">{w.project}</strong>
                                    <span className="hackday26-team">{w.team}</span>
                                    <span className="hackday26-text">{w.text}</span>
                                    <a href={w.href} {...external} className="hackday26-link">
                                        <i className="fa-brands fa-github" aria-hidden="true" /> {w.linkLabel}
                                        <span className="pycon26-sr">: {w.project}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Photos photos={c.winners.photos} onOpen={setPhoto} enlarge={ui.enlarge} className="hackday26-tall" />

                        <H2 i={3} />
                        <p>{c.projects.intro}</p>
                        <div className="pycon26-chips hackday26-projects">
                            <h3>{c.projects.label} <span className="pycon26-count">{c.projects.items.length}</span></h3>
                            <ul>
                                {c.projects.items.map((name) => (
                                    <li key={name}><i className="fa-solid fa-code-branch" aria-hidden="true" /> {name}</li>
                                ))}
                            </ul>
                        </div>
                        <p>
                            {rich(c.projects.close)}{" "}
                            <a href={LINKS.gallery} {...external}>{ui.viewLink} ↗</a>
                        </p>

                        <H2 i={4} />
                        <p>{rich(c.venue.text)}</p>
                        {photos(c.venue.photos)}

                        <H2 i={5} />
                        {c.community.paragraphs.map((text) => <p key={text}>{rich(text)}</p>)}
                        {photos(c.community.photos)}

                        <H2 i={6} />
                        <p>{c.thanks.intro}</p>
                        <ul className="pycon26-partners">
                            {c.thanks.rows.map(([name, role]) => (
                                <li key={name}><strong>{name}</strong><span>{role}</span></li>
                            ))}
                        </ul>
                        <p>{rich(c.thanks.close)}</p>
                        <ul className="pycon26-logos hackday26-logos" aria-label={c.thanks.logosLabel}>
                            {LOGOS.map((logo) => {
                                const img = <img src={logo.src} alt={logo.alt} loading="lazy" />;
                                return <li key={logo.alt}>{logo.href ? <a href={logo.href} {...external}>{img}</a> : img}</li>;
                            })}
                        </ul>
                        {photos([c.thanks.photo])}

                        <H2 i={7} />
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
                        <p>{c.lessons.keep}</p>

                        <H2 i={8} />
                        <ul className="hackday26-steps">
                            {c.next.steps.map((step) => (
                                <li key={step}><i className="fa-solid fa-circle-check" aria-hidden="true" /> <span>{rich(step)}</span></li>
                            ))}
                        </ul>
                        <section className="pycon26-cta" aria-labelledby="ahora">
                            <p>{rich(c.next.text)} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
                            <div className="pycon26-cta-buttons">
                                {ui.cta.map((b) => (
                                    <a key={b.label} className="btn btn-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent(b.subject)}`}>
                                        {b.label}
                                    </a>
                                ))}
                                <Link className="btn btn-primary" to="/quiero-ayudar">
                                    {lang === "es" ? "Únete a Python Panamá" : "Join Python Panamá"}
                                </Link>
                            </div>
                        </section>

                        <H2 i={9} />
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

export function HackDay2026() {
    return <Post lang="es" />;
}

export function HackDay2026_ENG() {
    return <Post lang="en" />;
}
