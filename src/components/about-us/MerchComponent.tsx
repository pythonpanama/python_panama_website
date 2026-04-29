export function MerchComponent() {
    return (
        <div role="main" className="main">
            <section className="community-merch-section merch-page-hero">
                <div className="container">
                    <div className="community-merch-layout">
                        <div className="community-merch-copy">
                            <span className="sponsors-kicker">Merch de comunidad</span>
                            <h1>Camisetas y stickers para apoyar Python Panamá</h1>
                            <p>
                                Compra merch oficial de la comunidad y ayuda a financiar
                                talleres, meetups, materiales educativos y actividades que
                                acercan Python a más personas en Panamá.
                            </p>
                            <a
                                className="btn btn-primary btn-lg sponsors-primary"
                                href="mailto:pythonpanama4@gmail.com?subject=Quiero%20comprar%20merch%20de%20Python%20Panam%C3%A1"
                            >
                                Consultar disponibilidad
                            </a>
                        </div>

                        <div className="community-merch-grid" aria-label="Productos de comunidad">
                            <article className="community-merch-card">
                                <i className="fas fa-shirt" aria-hidden="true"></i>
                                <h3>T-shirts oficiales</h3>
                                <p>
                                    Camisetas para eventos, conferencias y miembros de la
                                    comunidad que quieren representar Python Panamá.
                                </p>
                            </article>

                            <article className="community-merch-card">
                                <i className="fas fa-note-sticky" aria-hidden="true"></i>
                                <h3>Stickers</h3>
                                <p>
                                    Stickers para laptops, notebooks y swag de eventos,
                                    talleres y actividades especiales.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="merch-impact-section">
                <div className="container">
                    <div className="sponsor-section-header">
                        <span className="sponsors-kicker">A dónde va tu aporte</span>
                        <h2>Tu compra sostiene actividades de la comunidad</h2>
                        <p>
                            El merch ayuda a cubrir necesidades operativas para que más
                            personas puedan aprender, participar y conectar con Python.
                        </p>
                    </div>

                    <div className="sponsor-opportunities-grid">
                        <article className="sponsor-opportunity-card">
                            <h3>Talleres</h3>
                            <p>Materiales, espacios y logística para sesiones prácticas de Python.</p>
                        </article>
                        <article className="sponsor-opportunity-card">
                            <h3>Meetups</h3>
                            <p>Apoyo para encuentros, charlas, networking y actividades recurrentes.</p>
                        </article>
                        <article className="sponsor-opportunity-card">
                            <h3>Python Route</h3>
                            <p>Recursos para llevar educación tecnológica fuera de la capital.</p>
                        </article>
                        <article className="sponsor-opportunity-card">
                            <h3>Comunidad</h3>
                            <p>Swag, comunicación y herramientas para fortalecer la participación.</p>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
