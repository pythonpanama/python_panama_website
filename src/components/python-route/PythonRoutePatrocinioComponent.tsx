import {
    PYTHON_ROUTE_CONTACT_EMAIL,
    sponsorshipNeeds,
} from "./pythonRouteData";

export function PythonRoutePatrocinioComponent() {
    return (
        <>
            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center p-static order-2 text-center">
                            <h1 className="text-white font-weight-bold text-8">
                                Patrocinio · Python Route
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="python-route-section">
                <div className="container">
                    <div className="python-route-section-header">
                        <span className="python-route-kicker">Patrocinio</span>
                        <h2>Qué financia un patrocinio de Python Route</h2>
                        <p>
                            Cada taller fuera de la capital tiene costos concretos.
                            Estas son las necesidades del programa y el punto de partida
                            para armar un patrocinio a la medida de tu organización.
                        </p>
                    </div>

                    <div className="python-route-sponsor-grid">
                        {sponsorshipNeeds.map((need) => (
                            <article className="python-route-sponsor-card" key={need.title}>
                                <i className={need.icon} aria-hidden="true"></i>
                                <h3>{need.title}</h3>
                                <p>{need.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="python-route-sponsor-actions">
                        <a
                            className="btn btn-primary btn-lg python-route-primary"
                            href={`mailto:${PYTHON_ROUTE_CONTACT_EMAIL}?subject=Patrocinio%20Python%20Route`}
                        >
                            Escribir sobre patrocinio
                        </a>
                        <a className="btn btn-outline-primary btn-lg" href="/patrocinadores">
                            Ver kit completo para sponsors
                        </a>
                        <a className="btn btn-outline-primary btn-lg" href="/python-route">
                            <i className="fas fa-arrow-left me-2"></i>
                            Volver a Python Route
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
