import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    PYTHON_ROUTE_LEMA,
    PYTHON_ROUTE_REPO_URL,
} from "../python-route/pythonRouteData";

// Los anclajes vivían antes en esta misma página. Se mantienen como
// redirecciones para no romper enlaces ya compartidos.
const legacyHashRoutes: Record<string, string> = {
    "#agenda": "/python-route/agenda",
    "#patrocinio": "/python-route/patrocinio",
};

export function PythonRoute() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const legacyTarget = legacyHashRoutes[location.hash.toLowerCase()];

        if (legacyTarget) {
            navigate(legacyTarget, { replace: true });
            return;
        }

        const target = document.getElementById(location.hash.slice(1));

        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [location.hash, navigate]);

    return (
        <>
            <section className="python-route-highlight">
                <div className="container">
                    <div className="python-route-layout">
                        <div className="python-route-copy">
                            <span className="python-route-kicker">Programa destacado</span>
                            <h2>Python Route</h2>
                            <p className="python-route-lema">{PYTHON_ROUTE_LEMA}</p>
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

            <section className="python-route-section">
                <div className="container">
                    <div className="python-route-section-header">
                        <span className="python-route-kicker">Conoce el programa</span>
                        <h2>Explora Python Route</h2>
                        <p>
                            Cada parte del programa tiene su propia página con el detalle
                            completo y actualizado.
                        </p>
                    </div>

                    <div className="python-route-nav-grid">
                        <article className="python-route-nav-card">
                            <i className="fas fa-calendar-days" aria-hidden="true"></i>
                            <h3>Agenda</h3>
                            <p>
                                Las fases del programa, con las fechas y sedes que vamos
                                confirmando junto a las organizaciones anfitrionas.
                            </p>
                            <a className="btn btn-outline-primary" href="/python-route/agenda">
                                Ver la agenda
                            </a>
                        </article>

                        <article className="python-route-nav-card">
                            <i className="fas fa-handshake-angle" aria-hidden="true"></i>
                            <h3>Patrocinio</h3>
                            <p>
                                Qué financia exactamente un patrocinio: traslados, equipos,
                                materiales y becas para las comunidades participantes.
                            </p>
                            <a className="btn btn-outline-primary" href="/python-route/patrocinio">
                                Ver patrocinio
                            </a>
                        </article>

                        <article className="python-route-nav-card">
                            <i className="fas fa-file-signature" aria-hidden="true"></i>
                            <h3>Registro</h3>
                            <p>
                                Inscríbete para participar en un taller o postula a tu
                                escuela o comunidad como sede.
                            </p>
                            <a className="btn btn-outline-primary" href="/formulario-python-route">
                                Ir al registro
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            <section className="python-route-section python-route-section-alt" id="materiales">
                <div className="container">
                    <div className="python-route-section-header">
                        <span className="python-route-kicker">Materiales</span>
                        <h2>Currículo y ejercicios abiertos</h2>
                        <p>
                            El currículo, los ejercicios, el código y los datos del
                            programa viven en un repositorio público de GitHub, para que
                            cualquier persona pueda estudiarlos, reutilizarlos o
                            proponer mejoras.
                        </p>
                    </div>

                    <div className="python-route-resource-grid">
                        <article className="python-route-resource-card">
                            <i className="fab fa-github" aria-hidden="true"></i>
                            <h3>Repositorio del programa</h3>
                            <p>
                                Currículo, ejercicios, código y datos de Python Route.
                            </p>
                            <a
                                className="btn btn-outline-primary"
                                href={PYTHON_ROUTE_REPO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Abrir en GitHub
                            </a>
                        </article>

                        <article className="python-route-resource-card">
                            <i className="fas fa-shield-heart" aria-hidden="true"></i>
                            <h3>Código de Conducta</h3>
                            <p>
                                Reglas del programa, procedimiento y canal privado de
                                reportes.
                            </p>
                            <a
                                className="btn btn-outline-primary"
                                href="/python-route/code-of-conduct"
                            >
                                Leer el código
                            </a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
