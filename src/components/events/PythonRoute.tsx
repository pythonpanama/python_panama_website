export function PythonRoute() {
    return (
        <>
            <section className="python-route-highlight">
                <div className="container">
                    <div className="python-route-layout">
                        <div className="python-route-copy">
                            <span className="python-route-kicker">Programa destacado</span>
                            <h2>Python Route</h2>
                            <p>
                                Llevamos talleres prácticos de Python fuera de la capital
                                para abrir más oportunidades de educación tecnológica en
                                comunidades de todo Panamá.
                            </p>
                        </div>

                        <div className="python-route-impact" aria-label="Impacto de Python Route">
                            <div className="python-route-impact-item">
                                <i className="fas fa-route" aria-hidden="true"></i>
                                <h3>Talleres fuera de la capital</h3>
                                <p>Actividades presenciales en comunidades que quieren acercarse a la programación. Realizamos visitas educativas a escuelas públicas para inspirar a jóvenes y docentes, llevando conocimiento práctico a regiones de difícil acceso con apoyo de líderes comunitarios voluntarios.</p>
                            </div>
                            <div className="python-route-impact-item">
                                <i className="fas fa-universal-access" aria-hidden="true"></i>
                                <h3>Acceso inclusivo</h3>
                                <p>Espacios abiertos para aprender sin importar edad, experiencia o contexto. Está dirigido a todas las personas interesadas en programación, sin barreras de género, ubicación o trasfondo socioeconómico. Queremos que todos tengan oportunidades equitativas.</p>
                            </div>
                            <div className="python-route-impact-item">
                                <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                                <h3>Educación tecnológica</h3>
                                <p>Materiales y talleres para continuar aprendiendo Python con acompañamiento. Python es un lenguaje accesible, versátil y poderoso, ideal para introducir nuevas generaciones en tecnología, análisis de datos, automatización, desarrollo web e inteligencia artificial.</p>
                            </div>
                        </div>

                        <div className="python-route-actions" aria-label="Acciones de Python Route">
                            <a
                                className="btn btn-primary btn-lg python-route-primary"
                                href="/formulario-python-route"
                            >
                                Participar
                            </a>
                            <a
                                className="btn btn-outline-primary btn-lg"
                                href="/formulario-voluntario"
                            >
                                Ser voluntario
                            </a>
                            <a className="btn btn-outline-primary btn-lg" href="/patrocinadores">
                                Patrocinar
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
