export function HistoriaComponent() {
    return (
        <main className="history-page">
            <section className="history-hero">
                <div className="container">
                    <span className="history-kicker">Nuestra comunidad</span>
                    <h1>Historia de Python Panamá</h1>
                    <p>
                        Abrimos espacios para aprender, compartir y construir
                        con Python. Nuestra historia se escribe con las personas y
                        organizaciones que hacen posible cada encuentro.
                    </p>
                </div>
            </section>

            <section className="social-proof-section" aria-labelledby="history-impact">
                <div className="container">
                    <div className="social-proof-header">
                        <span className="social-proof-kicker">Impacto de la comunidad</span>
                        <h2 id="history-impact">Desde 2012 impulsamos el ecosistema Python en Panamá</h2>
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

                    <div className="social-proof-header">
                        <span className="social-proof-kicker">Lo que construimos juntos</span>
                        <h2>Iniciativas que conectan a la comunidad</h2>
                        <p>
                            Explora los encuentros, programas y alianzas que impulsamos
                            con quienes comparten nuestra pasión por Python.
                        </p>
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

            <section className="history-section" aria-labelledby="history-journey">
                <div className="container">
                    <h2 id="history-journey">Una comunidad que crece al colaborar</h2>
                    <p className="history-intro">
                        Comenzamos como un espacio de encuentro entre personas interesadas
                        en Python. Con el tiempo, los meetups, talleres y actividades
                        educativas ampliaron los vínculos entre estudiantes, profesionales,
                        instituciones y otras comunidades tecnológicas.
                    </p>
                    <div className="history-grid">
                        <article className="history-card">
                            <span>Territorio</span>
                            <h3>Dónde hemos estado</h3>
                            <p>Conoce las universidades, institutos y espacios que han acogido nuestros encuentros.</p>
                            <a href="/lugares">Explorar lugares</a>
                        </article>
                        <article className="history-card">
                            <span>Colaboración</span>
                            <h3>Empresas que han sumado</h3>
                            <p>Descubre qué empresas han abierto sus espacios o respaldado nuestros eventos.</p>
                            <a href="/empresas-colaboradoras">Ver colaboraciones</a>
                        </article>
                        <article className="history-card">
                            <span>2024</span>
                            <h3>Un año documentado</h3>
                            <p>
                                Nuestra crónica de 2024 recoge PyCon Panamá, cursos,
                                colaboraciones académicas, meetups, PyCafé y PyData.
                            </p>
                            <a href="/blog/python-panama-2024">Leer la crónica de 2024</a>
                        </article>
                        <article className="history-card">
                            <span>Hoy</span>
                            <h3>Más espacios para participar</h3>
                            <p>
                                Seguimos reuniendo personas alrededor de eventos,
                                educación tecnológica y programas como Python Route,
                                que lleva talleres a comunidades fuera de la capital.
                            </p>
                            <a href="/python-route">Conocer Python Route</a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="history-closing">
                <div className="container">
                    <h2>La historia continúa</h2>
                    <p>
                        Cada actividad suma nuevas voces a Python Panamá. Conoce cómo
                        participar y ayúdanos a construir lo que sigue.
                    </p>
                    <a className="btn btn-primary btn-lg" href="/quiero-ayudar">Quiero participar</a>
                </div>
            </section>
        </main>
    );
}
