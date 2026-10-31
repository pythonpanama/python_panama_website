const registrationUrl =
    "https://events.mlh.com/events/15044-hacktoberfest-hack-day-panama-city-x-python-panama";

export function Hacktoberfest() {
    return (
        <main className="hacktoberfest-page">
            <section className="hacktoberfest-hero">
                <div className="container hacktoberfest-hero-content">
                    <span className="hacktoberfest-eyebrow">Evento · 31 de octubre de 2026</span>
                    <h1>Hacktoberfest Hack Day Panama City</h1>
                    <p className="hacktoberfest-lead">
                        Una jornada de Python Panamá para aprender, colaborar y contribuir
                        a proyectos de código abierto, con acompañamiento de mentores.
                    </p>
                    <div className="hacktoberfest-actions">
                        <a className="btn btn-warning btn-lg" href={registrationUrl} target="_blank" rel="noopener noreferrer">
                            Inscribirme en MLH <span aria-hidden="true">↗</span>
                        </a>
                        <a className="btn btn-outline-light btn-lg" href="/hack-day/hoy.html">Hoy en el Hack Day</a>
                        <a className="btn btn-outline-light btn-lg" href="#recorridos">Conocer los recorridos</a>
                    </div>
                    <p className="hacktoberfest-registration-note">La inscripción se realiza en la página oficial del evento de MLH.</p>
                </div>
            </section>

            <section className="hacktoberfest-details" aria-label="Datos del evento">
                <div className="container hacktoberfest-details-grid">
                    <div>
                        <span className="hacktoberfest-detail-label">Cuándo</span>
                        <strong><time dateTime="2026-10-31">Sábado 31 de octubre de 2026</time></strong>
                        <span>9:00 a. m. – 3:00 p. m. (hora de Panamá)</span>
                    </div>
                    <div>
                        <span className="hacktoberfest-detail-label">Dónde</span>
                        <strong>Ciudad de las Artes · salón D-112</strong>
                        <span>Llanos de Curundú, Ciudad de Panamá. Estacionamiento gratuito.</span>
                    </div>
                    <div>
                        <span className="hacktoberfest-detail-label">Qué traer</span>
                        <strong>Tu laptop y curiosidad</strong>
                        <span>Puedes participar aunque no tengas experiencia previa en código abierto.</span>
                    </div>
                </div>
            </section>

            <section className="hacktoberfest-section" id="recorridos">
                <div className="container">
                    <div className="hacktoberfest-section-heading">
                        <span className="hacktoberfest-eyebrow">Dos maneras de participar</span>
                        <h2>Encuentra tu punto de partida</h2>
                        <p>Aprende con otras personas y trabaja en una contribución real durante el evento.</p>
                    </div>
                    <div className="hacktoberfest-tracks">
                        <article className="hacktoberfest-track">
                            <span className="hacktoberfest-track-number">01</span>
                            <h3>Primeros Pasos</h3>
                            <p>
                                Para quienes se acercan por primera vez a GitHub y al código abierto.
                                Con apoyo de un mentor, conocerás qué es un repositorio y cómo hacer
                                tu primera contribución: código, documentación, traducción o un
                                reporte de error.
                            </p>
                            <strong>No necesitas saber programar.</strong>
                        </article>
                        <article className="hacktoberfest-track">
                            <span className="hacktoberfest-track-number">02</span>
                            <h3>IA de Código Abierto</h3>
                            <p>
                                Para personas con experiencia que quieran colaborar en herramientas
                                abiertas de inteligencia artificial, modelos de pesos abiertos,
                                agentes y sus integraciones.
                            </p>
                            <strong>Trae tus ideas y ganas de construir en comunidad.</strong>
                        </article>
                    </div>
                </div>
            </section>

            <section className="hacktoberfest-closing">
                <div className="container">
                    <h2>Construyamos en abierto, desde Panamá</h2>
                    <p>
                        Python Panamá organiza esta jornada en colaboración con Ciudad de las Artes
                        (Ministerio de Cultura). Consulta los detalles y confirma tu participación
                        en la ficha oficial de MLH.
                    </p>
                    <a className="btn btn-primary btn-lg" href={registrationUrl} target="_blank" rel="noopener noreferrer">
                        Ver evento e inscribirme en MLH <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
