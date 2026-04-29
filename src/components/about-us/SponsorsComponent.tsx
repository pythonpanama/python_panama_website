import jebtrains from "../../assets/img/sponsors/jb_beam.png";
import python_soft_found from "../../assets/img/sponsors/PSF.png";
import pyladies from "../../assets/img/sponsors/Pyladies.png";
import softd3v from "../../assets/img/sponsors/SoftD3v.png";

export function SponsorsComponent() {
    return (
        <div role="main" className="main">
            <section className="sponsors-hero">
                <div className="container">
                    <div className="sponsors-hero-content">
                        <span className="sponsors-kicker">Patrocina Python Panamá</span>
                        <h1>Conecta tu marca con la comunidad Python referente en Panamá</h1>
                        <p>
                            Apoya eventos, talleres, PyCon Panamá, Python Route y recursos
                            educativos que impulsan talento tecnológico desde Panamá hacia
                            Latinoamérica.
                        </p>
                        <div className="sponsors-hero-actions">
                            <a
                                className="btn btn-primary btn-lg sponsors-primary"
                                href="mailto:pythonpanama4@gmail.com?subject=Quiero%20patrocinar%20Python%20Panam%C3%A1"
                            >
                                Hablar sobre patrocinio
                            </a>
                            <a className="btn btn-outline-primary btn-lg" href="/quiero-ayudar">
                                Explorar voluntariado
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sponsor-benefits-section">
                <div className="container">
                    <div className="sponsor-section-header">
                        <span className="sponsors-kicker">Propuesta para sponsors</span>
                        <h2>Tu apoyo crea visibilidad, impacto social y conexión con talento</h2>
                        <p>
                            Patrocinar Python Panamá no es solo poner un logo en un evento:
                            es participar en una comunidad activa que forma, conecta e
                            inspira a personas interesadas en tecnología.
                        </p>
                    </div>

                    <div className="sponsor-benefits-grid">
                        <article className="sponsor-benefit-card">
                            <i className="fas fa-bullhorn" aria-hidden="true"></i>
                            <h3>Visibilidad de marca</h3>
                            <p>
                                Presencia ante desarrolladores, estudiantes, docentes,
                                empresas y personas que participan en el ecosistema Python.
                            </p>
                        </article>

                        <article className="sponsor-benefit-card">
                            <i className="fas fa-hands-holding-circle" aria-hidden="true"></i>
                            <h3>Impacto social</h3>
                            <p>
                                Apoyo directo a educación tecnológica, inclusión y programas
                                como Python Route fuera de la ciudad capital.
                            </p>
                        </article>

                        <article className="sponsor-benefit-card">
                            <i className="fas fa-user-graduate" aria-hidden="true"></i>
                            <h3>Acceso a talento</h3>
                            <p>
                                Relación con perfiles técnicos, juniors, estudiantes,
                                speakers, mentores y profesionales de la región.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="sponsor-opportunities-section">
                <div className="container">
                    <div className="sponsor-section-header">
                        <h2>Formas de apoyar</h2>
                        <p>
                            Podemos adaptar el patrocinio al objetivo de tu organización:
                            educación, talento, marca empleadora o impacto regional.
                        </p>
                    </div>

                    <div className="sponsor-opportunities-grid">
                        <article className="sponsor-opportunity-card">
                            <h3>Eventos y meetups</h3>
                            <p>
                                Apoya espacios recurrentes para charlas, networking,
                                comunidades de práctica y aprendizaje continuo.
                            </p>
                        </article>

                        <article className="sponsor-opportunity-card">
                            <h3>PyCon Panamá</h3>
                            <p>
                                Participa en la conferencia principal de la comunidad y
                                conecta con una audiencia técnica más amplia.
                            </p>
                        </article>

                        <article className="sponsor-opportunity-card">
                            <h3>Python Route</h3>
                            <p>
                                Impulsa talleres y educación tecnológica en comunidades
                                fuera de la capital.
                            </p>
                        </article>

                        <article className="sponsor-opportunity-card">
                            <h3>Becas y recursos</h3>
                            <p>
                                Facilita acceso a materiales, espacios, transporte,
                                alimentación, equipos o becas para participantes.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="current-sponsors-section">
                <div className="container">
                    <div className="sponsor-section-header">
                        <span className="sponsors-kicker">Gracias a quienes apoyan</span>
                        <h2>Aliados que fortalecen nuestra comunidad</h2>
                    </div>

                    <div className="sponsor-logo-grid">
                        <img src={python_soft_found} className="sponsor-image" alt="Python Software Foundation" />
                        <img src={jebtrains} className="sponsor-image" alt="JetBrains" />
                        <img src={pyladies} className="sponsor-image" alt="PyLadies Panamá" />
                        <img src={softd3v} className="sponsor-image" alt="SoftD3v" />
                    </div>
                </div>
            </section>

            <section className="sponsor-kit-section">
                <div className="container">
                    <div className="sponsor-section-header">
                        <span className="sponsors-kicker">Kit para sponsors</span>
                        <h2>Paquetes pensados para objetivos distintos</h2>
                        <p>
                            El kit puede adaptarse según alcance, presupuesto e iniciativa.
                            Estos son los formatos base para iniciar la conversación.
                        </p>
                    </div>

                    <div className="sponsor-kit-grid">
                        <article className="sponsor-kit-card">
                            <span className="sponsor-kit-tier">Comunidad</span>
                            <h3>Apoyo a meetups y talleres</h3>
                            <ul>
                                <li>Logo en comunicaciones del evento.</li>
                                <li>Mención durante la actividad.</li>
                                <li>Espacio para conectar con asistentes.</li>
                                <li>Reporte breve posterior al evento.</li>
                            </ul>
                        </article>

                        <article className="sponsor-kit-card sponsor-kit-featured">
                            <span className="sponsor-kit-tier">Impacto</span>
                            <h3>Programas educativos y Python Route</h3>
                            <ul>
                                <li>Visibilidad como aliado de impacto social.</li>
                                <li>Apoyo a materiales, logística o becas.</li>
                                <li>Historias de impacto para redes y marca empleadora.</li>
                                <li>Participación en actividades seleccionadas.</li>
                            </ul>
                        </article>

                        <article className="sponsor-kit-card">
                            <span className="sponsor-kit-tier">Conferencia</span>
                            <h3>PyCon Panamá y eventos principales</h3>
                            <ul>
                                <li>Presencia destacada en canales de difusión.</li>
                                <li>Activación o booth según disponibilidad.</li>
                                <li>Reconocimiento en escenario y materiales.</li>
                                <li>Acceso a audiencia técnica y talento local.</li>
                            </ul>
                        </article>
                    </div>

                    <div className="sponsor-kit-deliverables">
                        <h3>El kit puede incluir</h3>
                        <div className="sponsor-kit-deliverables-grid">
                            <span>Logo en web y redes</span>
                            <span>Menciones en eventos</span>
                            <span>Activaciones de marca</span>
                            <span>Swag y merch co-brandeado</span>
                            <span>Charlas o workshops</span>
                            <span>Reporte de impacto</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sponsor-cta-section">
                <div className="container">
                    <div className="sponsor-cta-card">
                        <div>
                            <span className="sponsors-kicker">Siguiente paso</span>
                            <h2>Conversemos sobre un paquete de patrocinio</h2>
                            <p>
                                Escríbenos con el objetivo de tu organización y te
                                responderemos con opciones para apoyar eventos, educación,
                                comunidad o iniciativas específicas.
                            </p>
                        </div>
                        <a
                            className="btn btn-primary btn-lg sponsors-primary"
                            href="mailto:pythonpanama4@gmail.com?subject=Quiero%20el%20kit%20de%20patrocinio%20de%20Python%20Panam%C3%A1"
                        >
                            Solicitar kit de patrocinio
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
