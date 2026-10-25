import { companyCollaborations, placeGroups, places } from "./communityFootprintData";

function FootprintIntro({ section, title, description }: { section: string; title: string; description: string }) {
    return (
        <section className="footprint-hero">
            <div className="container">
                <a className="footprint-back" href="/historia">← Historia de Python Panamá</a>
                <span className="footprint-kicker">{section}</span>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
}

export function PlacesComponent() {
    return (
        <main className="footprint-page">
            <FootprintIntro
                section="Nuestra trayectoria"
                title="Lugares donde nos hemos encontrado"
                description="Universidades, colegios, institutos y espacios empresariales que han acogido actividades de Python Panamá."
            />

            <section className="footprint-section" aria-labelledby="places-title">
                <div className="container">
                    <div className="footprint-heading">
                        <h2 id="places-title">Lugares de nuestro recorrido</h2>
                        <p>Un recorrido por los espacios vinculados a nuestras actividades.</p>
                    </div>
                    {placeGroups.map((group) => <div className="footprint-group" key={group}>
                        <h3 className="footprint-group-title">{group}</h3>
                        <div className="footprint-grid">
                        {places.filter((place) => place.group === group).map((place) => (
                            <article className="footprint-card" key={place.name}>
                                <div className="footprint-card-top">
                                    <span className="footprint-badge">{place.kind}</span>
                                    {place.year && <span className="footprint-year">{place.year}</span>}
                                </div>
                                <div className="footprint-logo-wrap"><img className="footprint-logo" src={place.logo} alt="" loading="lazy" /></div>
                                <h3>{place.name}</h3>
                                <p className="footprint-location"><i className="fas fa-location-dot" aria-hidden="true"></i> {place.location}</p>
                                {place.event && <p>{place.event}</p>}
                                {place.source && <a href={place.source} target="_blank" rel="noopener noreferrer">Ver registro del evento <span aria-hidden="true">↗</span></a>}
                            </article>
                        ))}
                        </div>
                    </div>)}
                    <p className="footprint-note">Publicamos el año y el evento cuando están documentados. Seguiremos completando las visitas y ciudades con los datos de cada actividad.</p>
                </div>
            </section>

            <section className="footprint-next">
                <div className="container">
                    <h2>También construimos con empresas</h2>
                    <p>Conoce los espacios y apoyos empresariales que han acompañado nuestros eventos.</p>
                    <a href="/empresas-colaboradoras">Ver empresas colaboradoras <span aria-hidden="true">→</span></a>
                </div>
            </section>
        </main>
    );
}

export function CompanyCollaborationsComponent() {
    return (
        <main className="footprint-page">
            <FootprintIntro
                section="Colaboraciones y alianzas"
                title="Empresas que han colaborado con Python Panamá"
                description="Un reconocimiento a las empresas que han colaborado con nuestra comunidad, abierto sus espacios o apoyado nuestros eventos."
            />

            <section className="footprint-section" aria-labelledby="companies-title">
                <div className="container">
                    <div className="footprint-heading">
                        <h2 id="companies-title">Colaboraciones que recordamos</h2>
                        <p>Cada ficha muestra cómo participó la empresa y el evento documentado.</p>
                    </div>
                    <div className="footprint-grid">
                        {companyCollaborations.map((company) => (
                            <article className="footprint-card" key={company.name}>
                                <span className="footprint-badge">{company.role}</span>
                                <div className={`footprint-logo-wrap${company.name === "Arp IA" ? " footprint-logo-wrap--dark" : ""}`}><img className="footprint-logo" src={company.logo} alt="" loading="lazy" /></div>
                                <h3>{company.name}</h3>
                                {company.event && <p className="footprint-event">{company.event}</p>}
                                <p>{company.detail}</p>
                                <div className="footprint-card-links">
                                    {company.source && <a href={company.source} target="_blank" rel="noopener noreferrer">Ver registro del evento <span aria-hidden="true">↗</span></a>}
                                    <a href={company.website} target="_blank" rel="noopener noreferrer">Visitar empresa <span aria-hidden="true">↗</span></a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="footprint-next">
                <div className="container">
                    <h2>Hagamos posible el próximo encuentro</h2>
                    <p>Si tu empresa quiere abrir un espacio o apoyar una actividad, conversemos sobre una colaboración concreta.</p>
                    <a href="/patrocinadores">Explorar formas de colaborar <span aria-hidden="true">→</span></a>
                </div>
            </section>
        </main>
    );
}
