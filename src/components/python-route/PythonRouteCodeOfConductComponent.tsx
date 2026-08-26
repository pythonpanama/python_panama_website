import {
    PYTHON_ROUTE_CONTACT_EMAIL,
    PYTHON_ROUTE_REPO_URL,
} from "./pythonRouteData";

const reportSteps = [
    {
        title: "1. Reporta",
        description:
            "Escribe al canal privado o acércate a cualquier persona del equipo organizador identificada en la sede. Puedes reportar durante o después de la actividad.",
    },
    {
        title: "2. Acuse de recibo",
        description:
            "Confirmamos la recepción del reporte y te indicamos quién lo atenderá. No se comparte tu identidad con la persona reportada sin tu consentimiento.",
    },
    {
        title: "3. Revisión",
        description:
            "El equipo revisa los hechos, escucha a las partes cuando corresponde y documenta el caso de forma confidencial.",
    },
    {
        title: "4. Resolución",
        description:
            "Aplicamos la medida proporcional al caso y te comunicamos el resultado. Las medidas van desde una advertencia hasta la expulsión de la actividad sin reembolso.",
    },
];

export function PythonRouteCodeOfConductComponent() {
    return (
        <>
            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center p-static order-2 text-center">
                            <h1 className="text-white font-weight-bold text-8">
                                Código de Conducta · Python Route
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-4">
                <div className="row">
                    <div className="col">
                        <div className="blog-posts single-post">
                            <article className="post post-large blog-single-post border-0 m-0 p-0">
                                <div className="post-content ml-0">
                                    <p className="custom-text-paragraph">
                                        Python Route es un programa de{" "}
                                        <a href="/">Python Panamá</a> y se rige por el{" "}
                                        <a href="/codigo-de-conducta">
                                            Código de Conducta de la comunidad
                                        </a>
                                        . Esta página resume las reglas específicas del
                                        programa, el procedimiento de reporte y el canal
                                        privado para hacerlo.
                                    </p>

                                    <p className="custom-text-paragraph">
                                        Aplica a todas las personas participantes,
                                        facilitadoras, voluntarias, docentes anfitriones y
                                        patrocinadoras, en las sedes presenciales, los
                                        traslados, los espacios digitales del programa y el{" "}
                                        <a
                                            href={PYTHON_ROUTE_REPO_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            repositorio de materiales
                                        </a>
                                        .
                                    </p>

                                    <h4 className="font-weight-bold">
                                        Compromisos del programa
                                    </h4>
                                    <ul className="custom-list">
                                        <li>
                                            Trato respetuoso e inclusivo, sin importar edad,
                                            género, discapacidad, etnicidad, nivel de
                                            experiencia, nacionalidad, religión, situación
                                            socioeconómica u orientación sexual.
                                        </li>
                                        <li>
                                            Ninguna pregunta es demasiado básica. Python
                                            Route trabaja con personas que programan por
                                            primera vez.
                                        </li>
                                        <li>
                                            Cuidado especial con personas menores de edad:
                                            las actividades en escuelas se realizan siempre
                                            en presencia de personal docente responsable.
                                        </li>
                                        <li>
                                            No se toman ni publican fotografías o videos de
                                            participantes sin autorización de la persona o
                                            de su acudiente.
                                        </li>
                                        <li>
                                            Respeto por las instalaciones, los equipos y las
                                            normas de la comunidad anfitriona.
                                        </li>
                                    </ul>

                                    <h4 className="font-weight-bold">
                                        Conductas inaceptables
                                    </h4>
                                    <ul className="custom-list">
                                        <li>
                                            Acoso, intimidación o comentarios ofensivos
                                            dirigidos a una persona o a un grupo.
                                        </li>
                                        <li>
                                            Lenguaje o imágenes sexualizadas y atención
                                            sexual no deseada.
                                        </li>
                                        <li>
                                            Publicar información privada de otras personas
                                            sin su permiso explícito.
                                        </li>
                                        <li>
                                            Interrupción sostenida de talleres, charlas o
                                            actividades.
                                        </li>
                                        <li>
                                            Uso del programa o de la sede para reclutamiento
                                            comercial agresivo o proselitismo.
                                        </li>
                                    </ul>

                                    <h4 className="font-weight-bold">
                                        Procedimiento de reporte
                                    </h4>
                                    <div className="python-route-coc-steps">
                                        {reportSteps.map((step) => (
                                            <article
                                                className="python-route-coc-step"
                                                key={step.title}
                                            >
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </article>
                                        ))}
                                    </div>

                                    <p className="custom-text-paragraph">
                                        Si estás en una situación de riesgo inmediato,
                                        contacta primero a los servicios de emergencia
                                        locales y luego avísanos.
                                    </p>

                                    <h4 className="font-weight-bold">
                                        Canal privado de reportes
                                    </h4>
                                    <div className="python-route-coc-channel">
                                        <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                                        <div>
                                            <p>
                                                Escribe a{" "}
                                                <a
                                                    href={`mailto:${PYTHON_ROUTE_CONTACT_EMAIL}?subject=Reporte%20C%C3%B3digo%20de%20Conducta%20-%20Python%20Route`}
                                                >
                                                    {PYTHON_ROUTE_CONTACT_EMAIL}
                                                </a>
                                                . El correo lo revisa únicamente el equipo
                                                organizador de Python Panamá responsable del
                                                cumplimiento.
                                            </p>
                                            <p>
                                                Incluye, si puedes: qué ocurrió, cuándo y
                                                dónde, quiénes estuvieron presentes y si
                                                deseas que te contactemos de vuelta. Un
                                                reporte anónimo también se atiende, aunque
                                                limita el seguimiento.
                                            </p>
                                            <p className="python-route-coc-privacy">
                                                Tratamos tus datos con confidencialidad y de
                                                conformidad con la Ley 81 de 2019 sobre
                                                protección de datos personales.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="custom-text-paragraph">
                                        En una actividad presencial también puedes acudir
                                        directamente a la persona coordinadora de la sede,
                                        que estará identificada al inicio del taller.
                                    </p>

                                    <h4 className="font-weight-bold">Atribución</h4>
                                    <p className="custom-text-paragraph">
                                        Este documento complementa el{" "}
                                        <a href="/codigo-de-conducta">
                                            Código de Conducta de Python Panamá
                                        </a>
                                        , basado a su vez en el Contributor Covenant y en el
                                        Código de Conducta de la Python Software Foundation.
                                    </p>

                                    <div className="python-route-coc-actions">
                                        <a
                                            className="btn btn-outline-primary btn-lg"
                                            href="/python-route"
                                        >
                                            <i className="fas fa-arrow-left me-2"></i>
                                            Volver a Python Route
                                        </a>
                                        <a
                                            className="btn btn-outline-primary btn-lg"
                                            href="/codigo-de-conducta"
                                        >
                                            Código de Conducta general
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
