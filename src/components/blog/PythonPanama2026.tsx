import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CONTENT, EMAIL, LINKS, LOGOS, PATHS, type Lang, type Photo } from "./pythonPanama2026Content";

// Convierte **negrita** y `código` del contenido en elementos de React.
function rich(text: string): ReactNode {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
        return <Fragment key={i}>{part}</Fragment>;
    });
}

function Photos({ photos, lazy = true }: { photos: Photo[]; lazy?: boolean }) {
    return (
        <div className="pycon26-photos">
            {photos.map((photo) => (
                <figure key={photo.src} className="pycon26-figure">
                    <img src={photo.src} alt={photo.alt} loading={lazy ? "lazy" : undefined} width={1600} height={1600} />
                    <figcaption className="subtitle">{photo.alt}</figcaption>
                </figure>
            ))}
        </div>
    );
}

function Table({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
    return (
        <div className="table-responsive">
            <table className="table pycon26-table">
                <thead>
                    <tr>
                        <th scope="col">{head[0]}</th>
                        <th scope="col">{head[1]}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([label, value]) => (
                        <tr key={label}>
                            <th scope="row">{rich(label)}</th>
                            <td>{rich(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

function Post({ lang }: { lang: Lang }) {
    const c = CONTENT[lang];
    const external = { target: "_blank", rel: "noopener noreferrer" };

    return (
        <>
            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center p-static order-2 text-center">
                            <h1 className="text-white font-weight-bold text-8">{c.title}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-4" lang={lang}>
                <div className="row">
                    <div className="col">
                        <div className="blog-posts single-post">
                            <article className="post post-large blog-single-post border-0 m-0 p-0 pycon26">
                                <div className="post-content ml-0">
                                    <div className="pycon26-meta">
                                        <p className="mb-0">
                                            {c.byline} — <time dateTime="2026-10-26">{c.date}</time>
                                        </p>
                                        <LangSwitch lang={lang} />
                                    </div>

                                    <p className="pycon26-lema"><em>{c.lema}</em></p>

                                    <figure className="pycon26-figure pycon26-cover">
                                        <img src={c.cover.src} alt={c.cover.alt} width={1600} height={1600} fetchPriority="high" />
                                        <figcaption className="subtitle">{c.cover.caption}</figcaption>
                                    </figure>

                                    <p className="custom-paragraph">{rich(c.summary)}</p>

                                    <h2 className="font-weight-bold">{c.numbers.heading}</h2>
                                    <Table head={c.numbers.head} rows={c.numbers.rows} />

                                    <h2 className="font-weight-bold">{c.program.heading}</h2>
                                    <p className="custom-paragraph">{rich(c.program.intro)}</p>
                                    <ul className="custom-list">
                                        {c.program.tracks.map(([name, text]) => (
                                            <li key={name}><strong>{name}:</strong> {text}</li>
                                        ))}
                                    </ul>
                                    <p className="custom-paragraph"><strong>{c.program.thursday.title}</strong> {c.program.thursday.text}</p>
                                    <Photos photos={c.program.thursday.photos} />
                                    <p className="custom-paragraph"><strong>{c.program.friday.title}</strong> {c.program.friday.text}</p>
                                    <Photos photos={c.program.friday.photos} />
                                    <p className="custom-paragraph">{c.program.thanksIntro}</p>
                                    <ul className="custom-list">
                                        {c.program.speakers.map(([day, names]) => (
                                            <li key={day}><strong>{day}:</strong> {names}</li>
                                        ))}
                                    </ul>
                                    <p className="custom-paragraph">{c.program.thanksClose}</p>

                                    <h2 className="font-weight-bold">{c.venues.heading}</h2>
                                    <p className="custom-paragraph">{rich(c.venues.text)}</p>
                                    <Photos photos={c.venues.photos} />

                                    <h2 className="font-weight-bold">{c.community.heading}</h2>
                                    {c.community.paragraphs.map((text) => (
                                        <p key={text} className="custom-paragraph">{rich(text)}</p>
                                    ))}
                                    <Photos photos={c.community.photos} />

                                    <h2 className="font-weight-bold">{c.survey.heading}</h2>
                                    <p className="custom-paragraph">{c.survey.intro}</p>
                                    <Table head={c.survey.head} rows={c.survey.rows} />
                                    {c.survey.quotes.map(([quote, author]) => (
                                        <blockquote key={author} className="pycon26-quote">
                                            <p>{lang === "es" ? `«${quote}»` : `“${quote}”`}</p>
                                            <footer>— {author}</footer>
                                        </blockquote>
                                    ))}
                                    <p className="custom-paragraph"><strong>{c.survey.improve[0]}</strong> {c.survey.improve[1]}</p>

                                    <h2 className="font-weight-bold">{c.thanks.heading}</h2>
                                    <p className="custom-paragraph">{c.thanks.intro}</p>
                                    <Table head={c.thanks.head} rows={c.thanks.rows} />
                                    <p className="custom-paragraph">{rich(c.thanks.close)}</p>
                                    <ul className="pycon26-logos" aria-label={c.thanks.logosLabel}>
                                        {LOGOS.map((logo) => (
                                            <li key={logo.alt}><img src={logo.src} alt={logo.alt} loading="lazy" /></li>
                                        ))}
                                    </ul>
                                    <Photos photos={[c.thanks.photo]} />

                                    <h2 className="font-weight-bold">{c.lessons.heading}</h2>
                                    <p className="custom-paragraph">{c.lessons.intro}</p>
                                    <ul className="custom-list">
                                        {c.lessons.items.map(([title, text]) => (
                                            <li key={title}><strong>{title}</strong> {text}</li>
                                        ))}
                                    </ul>

                                    <h2 className="font-weight-bold">{c.next.heading}</h2>
                                    <p className="custom-paragraph">
                                        {rich(c.next.text)} <a href={`mailto:${EMAIL}`}><strong>{EMAIL}</strong></a>.
                                    </p>

                                    <h2 className="font-weight-bold">{c.resources.heading}</h2>
                                    <ul className="custom-list">
                                        <li>{c.resources.photos} <a href={LINKS.instagram} {...external}>@pythonpanama</a></li>
                                        <li>{c.resources.recordings} <a href={LINKS.youtube} {...external}>@pythonpanama</a></li>
                                        <li>{c.resources.agenda} <a href={LINKS.agenda} {...external}>pycon.pa/2026/agenda</a></li>
                                    </ul>

                                    <p className="pycon26-footer">
                                        <strong>Python Panamá</strong> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ·{" "}
                                        <a href={LINKS.linktree} {...external}>linktr.ee/pythonpanama</a>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function PythonPanama2026() {
    return <Post lang="es" />;
}

export function PythonPanama2026_ENG() {
    return <Post lang="en" />;
}
