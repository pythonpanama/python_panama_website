export function VolunteerComponent() {
    return (
        <div role="main" className="main">
            <section className="volunteer-hero">
                <div className="container">
                    <div className="volunteer-hero-content">
                        <span className="volunteer-kicker">Quiero ayudar</span>
                        <h1>Construye la comunidad Python Panamá con nosotros</h1>
                        <p>
                            Súmate como voluntario para organizar actividades,
                            acompañar a nuevos miembros, crear contenido o apoyar
                            iniciativas educativas como Python Route.
                        </p>
                        <div className="volunteer-hero-actions">
                            <a
                                className="btn btn-primary btn-lg volunteer-primary"
                                href="mailto:pythonpanama4@gmail.com?subject=Quiero%20ser%20voluntario%20en%20Python%20Panam%C3%A1"
                            >
                                Escribir para ayudar
                            </a>
                            <a
                                className="btn btn-outline-primary btn-lg"
                                href="https://linktr.ee/pythonpanama"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Unirme a la comunidad
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="volunteer-ways-section">
                <div className="container">
                    <div className="volunteer-section-header">
                        <h2>Formas de aportar</h2>
                        <p>
                            No necesitas tener años de experiencia. Hay espacio para
                            personas técnicas, organizadoras, comunicadoras, docentes y
                            miembros que quieran aprender ayudando.
                        </p>
                    </div>

                    <div className="volunteer-ways-grid">
                        <article className="volunteer-way-card">
                            <i className="fas fa-calendar-days" aria-hidden="true"></i>
                            <h3>Organizar eventos</h3>
                            <p>
                                Ayuda con logística, registro, coordinación de espacios,
                                comunicación con ponentes y experiencia de asistentes.
                            </p>
                        </article>

                        <article className="volunteer-way-card">
                            <i className="fas fa-chalkboard-user" aria-hidden="true"></i>
                            <h3>Mentorizar y enseñar</h3>
                            <p>
                                Comparte conocimientos en talleres, sesiones introductorias,
                                grupos de estudio o acompañamiento a principiantes.
                            </p>
                        </article>

                        <article className="volunteer-way-card">
                            <i className="fas fa-pen-nib" aria-hidden="true"></i>
                            <h3>Crear contenido</h3>
                            <p>
                                Publica artículos, guías, recursos, recapitulaciones de
                                eventos o materiales para seguir aprendiendo Python.
                            </p>
                        </article>

                        <article className="volunteer-way-card">
                            <i className="fas fa-route" aria-hidden="true"></i>
                            <h3>Apoyar Python Route</h3>
                            <p>
                                Participa en talleres fuera de la capital, coordinación con
                                sedes, materiales educativos y acompañamiento local.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="volunteer-process-section">
                <div className="container">
                    <div className="volunteer-process-card">
                        <div>
                            <span className="volunteer-kicker">Siguiente paso</span>
                            <h2>Cuéntanos cómo quieres participar</h2>
                            <p>
                                Escríbenos con tu área de interés, disponibilidad y ciudad.
                                Te contactaremos para ubicarte en una iniciativa donde tu
                                aporte tenga impacto.
                            </p>
                        </div>
                        <a
                            className="btn btn-primary btn-lg volunteer-primary"
                            href="mailto:pythonpanama4@gmail.com?subject=Quiero%20ser%20voluntario%20en%20Python%20Panam%C3%A1"
                        >
                            Contactar al equipo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
