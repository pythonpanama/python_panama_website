import jetbrainsLogo from "../../assets/img/sponsors/jb_beam.png";
import psfLogo from "../../assets/img/sponsors/PSF.png";
import pyladiesLogo from "../../assets/img/sponsors/Pyladies.png";
import softd3vLogo from "../../assets/img/sponsors/SoftD3v.png";

type SponsorCategory = "comunidad" | "formacion" | "conferencia";

const sponsorCategories: Record<SponsorCategory, {
    label: string;
    title: string;
    summary: string;
    support: string[];
    possibilities: string[];
}> = {
    comunidad: {
        label: "Comunidad",
        title: "Apoya los encuentros de la comunidad",
        summary: "Meetups y espacios recurrentes donde estudiantes, profesionales y entusiastas comparten experiencias con Python.",
        support: [
            "Charlas, meetups y espacios para reunir a la comunidad.",
            "Materiales y logística para actividades presenciales o virtuales.",
            "Espacios de encuentro y aprendizaje continuo.",
        ],
        possibilities: [
            "Logo en comunicaciones de la actividad.",
            "Mención durante el encuentro.",
            "Espacio para conectar con participantes.",
            "Reporte breve posterior a la actividad.",
        ],
    },
    formacion: {
        label: "Formación",
        title: "Impulsa cursos y talleres de Python",
        summary: "Contribuye a la educación tecnológica y a programas como Python Route, que llevan talleres a comunidades fuera de la capital.",
        support: [
            "Materiales, equipos y espacios para cursos y talleres.",
            "Traslados, alimentación y logística de Python Route.",
            "Becas o recursos para participantes.",
        ],
        possibilities: [
            "Visibilidad como aliado de una iniciativa educativa.",
            "Mención en comunicaciones de la actividad.",
            "Historias de impacto cuando haya resultados documentados.",
            "Participación en actividades acordadas con la organización.",
        ],
    },
    conferencia: {
        label: "Conferencia",
        title: "Participa en PyCon Panamá",
        summary: "Colabora con la conferencia y otros eventos principales que reúnen a la comunidad tecnológica en Panamá.",
        support: [
            "Actividades y recursos necesarios para realizar la conferencia.",
            "Espacios de intercambio entre participantes y ponentes.",
            "Experiencias para una audiencia técnica más amplia.",
        ],
        possibilities: [
            "Presencia en comunicaciones del evento.",
            "Activación o espacio de exhibición, según disponibilidad.",
            "Reconocimiento en el escenario o materiales del evento.",
            "Oportunidades de conexión con la audiencia.",
        ],
    },
};

const categoryOrder: SponsorCategory[] = ["comunidad", "formacion", "conferencia"];
const contactUrl = (category?: string) =>
    `mailto:pythonpanama4@gmail.com?subject=${encodeURIComponent(
        category ? `Patrocinio Python Panamá: ${category}` : "Patrocinio Python Panamá",
    )}`;

export function SponsorsComponent() {
    return (
        <main className="sponsorship-page">
            <section className="sponsorship-hero">
                <div className="container">
                    <span className="sponsorship-kicker">Patrocinios</span>
                    <h1>Elige cómo apoyar a Python Panamá</h1>
                    <p>
                        Tu organización puede apoyar encuentros de la comunidad,
                        formación o conferencias. Explora el enfoque que mejor se
                        ajuste a su objetivo.
                    </p>
                    <a className="btn btn-primary btn-lg" href="#opciones">Ver opciones de patrocinio</a>
                </div>
            </section>

            <section className="sponsorship-options" id="opciones" aria-labelledby="sponsorship-options-title">
                <div className="container">
                    <div className="sponsorship-section-heading">
                        <h2 id="sponsorship-options-title">Tres formas de colaborar</h2>
                        <p>Selecciona una opción para ver qué puede apoyar tu organización.</p>
                    </div>
                    <div className="sponsorship-option-grid">
                        {categoryOrder.map((category, index) => {
                            const item = sponsorCategories[category];
                            return (
                                <article className="sponsorship-option-card" key={category}>
                                    <span className="sponsorship-option-number">0{index + 1}</span>
                                    <h3>{item.label}</h3>
                                    <p>{item.summary}</p>
                                    <a href={`/patrocinadores/${category}`}>Explorar {item.label.toLowerCase()} <span aria-hidden="true">→</span></a>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="sponsorship-contact" aria-labelledby="sponsorship-contact-title">
                <div className="container sponsorship-contact-layout">
                    <div>
                        <span className="sponsorship-kicker">Siguiente paso</span>
                        <h2 id="sponsorship-contact-title">Conversemos sobre tu objetivo</h2>
                        <p>
                            Cuéntanos qué iniciativa te interesa y qué busca tu organización.
                            Definiremos el alcance del patrocinio en conjunto.
                        </p>
                    </div>
                    <a className="btn btn-primary btn-lg" href={contactUrl()}>Escribir a Python Panamá</a>
                </div>
            </section>

            <section className="sponsorship-allies" aria-labelledby="sponsorship-allies-title">
                <div className="container">
                    <h2 id="sponsorship-allies-title">Aliados de la comunidad</h2>
                    <div className="sponsorship-logo-grid">
                        <img src={psfLogo} alt="Python Software Foundation" loading="lazy" />
                        <img src={jetbrainsLogo} alt="JetBrains" loading="lazy" />
                        <img src={pyladiesLogo} alt="PyLadies Panamá" loading="lazy" />
                        <img src={softd3vLogo} alt="SoftD3v" loading="lazy" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export function SponsorCategoryComponent({ category }: { category: SponsorCategory }) {
    const item = sponsorCategories[category];

    return (
        <main className="sponsorship-page">
            <section className="sponsorship-detail-hero">
                <div className="container">
                    <nav className="sponsorship-breadcrumb" aria-label="Ruta de patrocinio">
                        <a href="/patrocinadores">Patrocinios</a>
                        <span aria-hidden="true">/</span>
                        <span>{item.label}</span>
                    </nav>
                    <span className="sponsorship-kicker">Patrocinio · {item.label}</span>
                    <h1>{item.title}</h1>
                    <p>{item.summary}</p>
                    <a className="btn btn-primary btn-lg" href={contactUrl(item.label)}>
                        Solicitar propuesta de {item.label.toLowerCase()}
                    </a>
                </div>
            </section>

            <section className="sponsorship-detail-content">
                <div className="container sponsorship-detail-grid">
                    <div>
                        <h2>Qué puede apoyar tu organización</h2>
                        <ul>
                            {item.support.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2>Opciones de reconocimiento</h2>
                        <p>Se acuerdan según el alcance, la actividad y los recursos disponibles.</p>
                        <ul>
                            {item.possibilities.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="sponsorship-detail-next">
                <div className="container">
                    <h2>Definamos una colaboración útil</h2>
                    <p>Escríbenos con el objetivo de tu organización para preparar una propuesta acorde a esta iniciativa.</p>
                    <div className="sponsorship-detail-actions">
                        <a className="btn btn-primary" href={contactUrl(item.label)}>Iniciar conversación</a>
                        <a href="/patrocinadores">Ver otras formas de apoyar</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
