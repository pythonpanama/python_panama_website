import python_panama_slide_1 from "../../assets/img/carrousel/python_panama_slide_1.png"
import python_panama_slide_2 from "../../assets/img/carrousel/python_panama_slide_4.png"
import python_panama_slide_3 from "../../assets/img/carrousel/python_panama_slide_5.png"
export function HomePageBodyComponent() {
    const renderHeroContent = (slideIndex = 0) => {
        const heroTexts = [
            { tagline: "¡Que en todo Panamá y Latinoamérica se hable Python!", benefit: "Eventos, talleres, cursos y una comunidad para aprender, compartir y crecer juntos." },
            { tagline: "Aprende, comparte y crece con nosotros", benefit: "Conecta con otros desarrolladores y expande tu red en la comunidad Python más activa de Panamá." },
            { tagline: "Educación tecnológica para todos", benefit: "Desde la capital hasta las provincias: recursos, mentorías y oportunidades de crecimiento." }
        ];
        const hero = heroTexts[slideIndex % 3];
        return (
        <div className="hero-content">
            <h1>Python Panamá</h1>
            <p className="hero-tagline">{hero.tagline}</p>
            <p className="hero-benefit">
                {hero.benefit}
            </p>
            <div className="hero-actions" aria-label="Acciones principales">
                <a
                    className="btn btn-primary btn-lg hero-action-primary"
                    href="https://linktr.ee/pythonpanama"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-users me-2" aria-hidden="true"></i>
                    Unirme a la comunidad
                </a>
                <a
                    className="btn btn-outline-light btn-lg"
                    href="https://www.meetup.com/es-ES/Python-Panama/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-calendar-days me-2" aria-hidden="true"></i>
                    Ver eventos
                </a>
            </div>
        </div>
    );
    };

    return (
        <div role="main" className="main">
            <div id="carouselPython" className="carousel slide" data-bs-ride="carousel">
                {/* Indicadores */}

                {/* Contenedor de imágenes */}
                <div className="carousel-inner carousel-dark-overlay">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={python_panama_slide_1} alt="Primera diapositiva: comunidad" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {renderHeroContent(0)}
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src={python_panama_slide_2} alt="Segunda diapositiva: aprendizaje" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {renderHeroContent(1)}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={python_panama_slide_3} alt="Tercera diapositiva: oportunidades" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {renderHeroContent(2)}
                        </div>
                    </div>
                </div>

                {/* Controles de navegación */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselPython" data-bs-slide="prev">
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPython" data-bs-slide="next">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </button> */}
            </div>





            <section className="audience-paths-section">
                <div className="container">
                    <div className="audience-paths-header">
                        <span className="audience-paths-kicker">Elige tu ruta</span>
                        <h2>¿Cómo quieres participar?</h2>
                        <p>
                            Encuentra el camino que mejor se ajusta a tu momento:
                            aprender, asistir, apoyar o construir comunidad.
                        </p>
                    </div>

                    <div className="audience-paths-grid">
                        <article className="audience-path-card">
                            <i className="fas fa-seedling" aria-hidden="true"></i>
                            <h3>Quiero aprender Python</h3>
                            <p>
                                Empieza con recursos, cursos y contenidos pensados para dar
                                tus primeros pasos con acompañamiento de la comunidad.
                            </p>
                            <a className="audience-path-link" href="/blog">
                                Ver recursos
                            </a>
                        </article>

                        <article className="audience-path-card">
                            <i className="fas fa-calendar-check" aria-hidden="true"></i>
                            <h3>Quiero asistir a eventos</h3>
                            <p>
                                Conecta con otros pythonistas en meetups, talleres,
                                charlas y actividades presenciales o virtuales.
                            </p>
                            <a
                                className="audience-path-link"
                                href="https://www.meetup.com/es-ES/Python-Panama/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver eventos
                            </a>
                        </article>

                        <article className="audience-path-card">
                            <i className="fas fa-handshake-angle" aria-hidden="true"></i>
                            <h3>Quiero patrocinar</h3>
                            <p>
                                Apoya educación tecnológica, visibilidad de marca y
                                oportunidades para talento local en Panamá.
                            </p>
                            <a className="audience-path-link" href="/patrocinadores">
                                Conocer patrocinios
                            </a>
                        </article>

                        <article className="audience-path-card">
                            <i className="fas fa-people-carry-box" aria-hidden="true"></i>
                            <h3>Quiero ayudar</h3>
                            <p>
                                Súmate como voluntario para organizar actividades,
                                mentorizar, crear contenido o apoyar iniciativas.
                            </p>
                            <a className="audience-path-link" href="/quiero-ayudar">
                                Ver formas de ayudar
                            </a>
                        </article>
                    </div>
                </div>
            </section>
            
            <section className="social-proof-section">
                <div className="container">
                    <div className="social-proof-header">
                        <span className="social-proof-kicker">Impacto de la comunidad</span>
                        <h2>Desde 2012 impulsamos el ecosistema Python en Panamá</h2>
                        <p>
                            Hemos conectado personas, universidades, empresas y comunidades
                            a través de meetups, talleres, PyCon Panamá, PyData, PyCafé,
                            Python Route y alianzas que fortalecen el talento local.
                        </p>
                    </div>

                    <div className="social-proof-stats" aria-label="Métricas de impacto">
                        <div className="social-proof-stat">
                            <strong>2012</strong>
                            <span>inicio de una comunidad abierta y activa</span>
                        </div>
                        <div className="social-proof-stat">
                            <strong>1000+</strong>
                            <span>personas impactadas por eventos y actividades</span>
                        </div>
                        <div className="social-proof-stat">
                            <strong>400+</strong>
                            <span>asistentes en ediciones de PyCon Panamá</span>
                        </div>
                        <div className="social-proof-stat">
                            <strong>40+</strong>
                            <span>ponentes nacionales e internacionales</span>
                        </div>
                    </div>

                    <div className="social-proof-highlights">
                        <article className="social-proof-highlight">
                            <i className="fas fa-microphone-lines" aria-hidden="true"></i>
                            <h3>PyCon Panamá</h3>
                            <p>
                                Conferencia local con participación nacional e internacional
                                en temas como IA, datos, automatización y desarrollo.
                            </p>
                        </article>

                        <article className="social-proof-highlight">
                            <i className="fas fa-building-columns" aria-hidden="true"></i>
                            <h3>Alianzas educativas</h3>
                            <p>
                                Colaboraciones con universidades e instituciones para llevar
                                formación en Python a nuevas comunidades y estudiantes.
                            </p>
                        </article>

                        <article className="social-proof-highlight">
                            <i className="fas fa-chart-line" aria-hidden="true"></i>
                            <h3>PyData Panamá</h3>
                            <p>
                                Encuentros para explorar ciencia de datos, machine learning
                                y aplicaciones reales de Python en la industria.
                            </p>
                        </article>

                        <article className="social-proof-highlight">
                            <i className="fas fa-route" aria-hidden="true"></i>
                            <h3>Python Route</h3>
                            <p>
                                Llevamos educación tecnológica a comunidades fuera de la capital
                                para crear más oportunidades de acceso y aprendizaje.
                            </p>
                        </article>

                        <article className="social-proof-highlight">
                            <i className="fas fa-hands-holding-circle" aria-hidden="true"></i>
                            <h3>Impacto voluntario</h3>
                            <p>
                                Personas comprometidas que organizan, mentorizan, crean
                                contenido y abren espacios para nuevos miembros.
                            </p>
                        </article>

                        <article className="social-proof-highlight">
                            <i className="fas fa-coffee" aria-hidden="true"></i>
                            <h3>Comunidad activa</h3>
                            <p>
                                Meetups, talleres y espacios informales donde compartimos
                                conocimiento, experiencias y proyectos en Python.
                            </p>
                        </article>
                    </div>

                    <div className="social-proof-sponsors" aria-label="Aliados y patrocinadores">
                        <span>Con apoyo y colaboración de</span>
                        <div className="social-proof-sponsor-list">
                            <strong>Python Software Foundation</strong>
                            <strong>JetBrains</strong>
                            <strong>PyLadies Panamá</strong>
                            <strong>PyData</strong>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
