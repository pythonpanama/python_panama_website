export function FormacionComponent() {
    return (
        <main className="training-page">
            <section className="training-hero">
                <div className="container">
                    <span className="training-kicker">Formación</span>
                    <h1>Cursos y talleres de Python</h1>
                    <p>
                        Aprende haciendo con las iniciativas educativas de Python Panamá.
                        Conoce las experiencias de formación de la comunidad y dónde
                        consultar las próximas actividades confirmadas.
                    </p>
                </div>
            </section>

            <section className="training-section" aria-labelledby="training-options">
                <div className="container">
                    <h2 id="training-options">Dos formas de aprender</h2>
                    <div className="training-grid">
                        <article className="training-card">
                            <span className="training-card-label">Aprendizaje guiado</span>
                            <h3>Cursos</h3>
                            <p>
                                En 2024 organizamos formación en Python básico y análisis
                                de datos. La crónica de ese año documenta el trabajo
                                educativo realizado por la comunidad.
                            </p>
                            <a href="/blog/python-panama-2024">Conocer los cursos realizados</a>
                        </article>
                        <article className="training-card">
                            <span className="training-card-label">Aprender haciendo</span>
                            <h3>Talleres</h3>
                            <p>
                                Python Route lleva talleres prácticos a escuelas y
                                comunidades fuera de la capital. Su agenda publica las
                                fechas y sedes a medida que se confirman.
                            </p>
                            <a href="/python-route/agenda">Ver talleres de Python Route</a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="training-next">
                <div className="container">
                    <h2>Entérate de nuevas oportunidades</h2>
                    <p>
                        Consulta los canales oficiales de Python Panamá para conocer
                        las convocatorias de cursos y talleres cuando estén disponibles.
                    </p>
                    <a className="btn btn-primary btn-lg" href="/contacto">Ver canales de la comunidad</a>
                </div>
            </section>
        </main>
    );
}
