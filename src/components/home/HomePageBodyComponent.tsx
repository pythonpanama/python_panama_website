import python_panama_slide_1 from "../../assets/img/carrousel/python_panama_slide_1.webp"
import python_panama_slide_2 from "../../assets/img/carrousel/python_panama_slide_4.webp"
import python_panama_slide_3 from "../../assets/img/carrousel/python_panama_slide_5.webp"
import { HacktoberfestHomeBanner } from "../events/HacktoberfestHomeBanner";
export function HomePageBodyComponent() {
    const renderHeroContent = (slideIndex = 0) => {
        const heroTexts = [
            { tagline: "¡Que en todo Panamá y Latinoamérica se hable Python!", benefit: "Eventos, talleres, cursos y una comunidad para aprender, compartir y crecer juntos." },
            { tagline: "Aprende, comparte y crece con nosotros", benefit: "Conectamos talento, instituciones y comunidades para crear impacto con Python." },
            { tagline: "Educación tecnológica para todos", benefit: "Desde la capital hasta las provincias: recursos, mentorías y oportunidades de crecimiento." }
        ];
        const hero = heroTexts[slideIndex % 3];
        return (
        <div className="hero-content">
            {/* Un solo h1 por página: las demás diapositivas repiten el título como texto. */}
            {slideIndex === 0
                ? <h1 className="hero-title">Python Panamá</h1>
                : <p className="h1 hero-title">Python Panamá</p>}
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
                        <img className="d-block w-100" src={python_panama_slide_1} width="1920" height="664" {...{ fetchpriority: "high" }} alt="Stickers de Python Panamá y PyCon Panamá" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {renderHeroContent(0)}
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src={python_panama_slide_2} width="1280" height="664" loading="lazy" alt="Donas azules decoradas con el logo de Python Panamá en un evento de la comunidad" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            {renderHeroContent(1)}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={python_panama_slide_3} width="1920" height="664" loading="lazy" alt="Stickers de Python Panamá, PyLadies y Ansible sobre una mesa" />
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





            <HacktoberfestHomeBanner />

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
                                Aprende con cursos y talleres prácticos de Python,
                                desde los primeros pasos hasta nuevas aplicaciones.
                            </p>
                            <a className="audience-path-link" href="/formacion">
                                Ver cursos y talleres
                            </a>
                        </article>

                        <article className="audience-path-card">
                            <i className="fas fa-calendar-check" aria-hidden="true"></i>
                            <h3>Quiero asistir a eventos</h3>
                            <p>
                                Comparte experiencias en meetups, charlas y
                                conferencias de la comunidad Python.
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
        </div>
    );
}
