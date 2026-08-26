import { agenda, statusClassName } from "./pythonRouteData";

export function PythonRouteAgendaComponent() {
    return (
        <>
            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center p-static order-2 text-center">
                            <h1 className="text-white font-weight-bold text-8">
                                Agenda · Python Route
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="python-route-section">
                <div className="container">
                    <div className="python-route-section-header">
                        <span className="python-route-kicker">Agenda</span>
                        <h2>Cómo avanza el programa</h2>
                        <p>
                            Python Route se organiza por fases. Publicamos cada fecha y
                            sede en cuanto queda confirmada con la organización
                            anfitriona, para no anunciar actividades que todavía no
                            podemos sostener.
                        </p>
                    </div>

                    <ol className="python-route-agenda">
                        {agenda.map((stop) => (
                            <li className="python-route-agenda-item" key={stop.phase}>
                                <div className="python-route-agenda-meta">
                                    <span className="python-route-agenda-phase">{stop.phase}</span>
                                    <span
                                        className={`python-route-agenda-status ${statusClassName[stop.status]}`}
                                    >
                                        {stop.status}
                                    </span>
                                </div>
                                <div className="python-route-agenda-body">
                                    <h3>{stop.title}</h3>
                                    <p className="python-route-agenda-when">
                                        <i className="fas fa-calendar-day" aria-hidden="true"></i>{" "}
                                        {stop.date}
                                        <span aria-hidden="true"> · </span>
                                        <i className="fas fa-location-dot" aria-hidden="true"></i>{" "}
                                        {stop.place}
                                    </p>
                                    <p>{stop.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="python-route-agenda-cta">
                        <p>
                            ¿Quieres que Python Route llegue a tu comunidad o quieres
                            participar en un taller?
                        </p>
                        <div className="python-route-sponsor-actions">
                            <a
                                className="btn btn-primary btn-lg python-route-primary"
                                href="/formulario-python-route"
                            >
                                Ir al registro
                            </a>
                            <a
                                className="btn btn-outline-primary btn-lg"
                                href="/python-route"
                            >
                                <i className="fas fa-arrow-left me-2"></i>
                                Volver a Python Route
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
