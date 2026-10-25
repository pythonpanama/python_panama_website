import pythonPanamaIcon from "../../assets/img/icon.png";

const socialLinks = [
    { name: "Facebook", icon: "fa-facebook", url: "https://facebook.com/pythonpanama" },
    { name: "Instagram", icon: "fa-instagram", url: "https://instagram.com/pythonpanama" },
    { name: "X", icon: "fa-x-twitter", url: "https://twitter.com/PythonPanama" },
    { name: "Meetup", icon: "fa-meetup", url: "https://www.meetup.com/es-ES/Python-Panama/" },
    { name: "GitHub", icon: "fa-github", url: "https://github.com/pythonpanama" },
];

export function FooterComponent() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer-grid">
                    <div className="site-footer-about">
                        <a className="site-footer-brand" href="/" aria-label="Python Panamá, ir al inicio">
                            <img src={pythonPanamaIcon} alt="" width="56" height="56" loading="lazy" />
                            <span>Python Panamá</span>
                        </a>
                        <p>Conectamos talento, instituciones y comunidades para crear impacto con Python.</p>
                    </div>

                    <nav className="site-footer-links" aria-label="Explorar el sitio">
                        <h2>Explora</h2>
                        <ul>
                            <li><a href="/historia">Nuestra historia</a></li>
                            <li><a href="/lugares">Dónde hemos estado</a></li>
                            <li><a href="/empresas-colaboradoras">Empresas colaboradoras</a></li>
                            <li><a href="/formacion">Cursos y talleres</a></li>
                            <li><a href="/python-route">Python Route</a></li>
                            <li><a href="/blog">Blog y recursos</a></li>
                        </ul>
                    </nav>

                    <nav className="site-footer-links" aria-label="Participar en la comunidad">
                        <h2>Participa</h2>
                        <ul>
                            <li><a href="/quiero-ayudar">Voluntariado</a></li>
                            <li><a href="/patrocinadores">Patrocinios</a></li>
                            <li><a href="/codigo-de-conducta">Código de conducta</a></li>
                        </ul>
                    </nav>

                    <div className="site-footer-connect">
                        <h2>Conversemos</h2>
                        <a className="site-footer-email" href="mailto:pythonpanama4@gmail.com">pythonpanama4@gmail.com</a>
                        <a className="site-footer-contact" href="/contacto">Contacta a la comunidad <span aria-hidden="true">→</span></a>
                        <div className="site-footer-social" aria-label="Redes sociales">
                            {socialLinks.map(({ name, icon, url }) => (
                                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                                    <i className={`fa-brands ${icon}`} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="site-footer-bottom">
                    <small>© 2012–2026 Python Panamá. Todos los derechos reservados.</small>
                    <span>¡Que todo Panamá hable Python!</span>
                </div>
            </div>
        </footer>
    );
}
