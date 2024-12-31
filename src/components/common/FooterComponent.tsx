import pythonPanamaDarkLogo from "../../assets/img/logo-dark.png"

export function FooterComponent() {
    return (
        <>
            <footer id="footer" className="border-0 parallax-second-section-style">
                <div className="container py-4">
                    <div className="row justify-content-md-center py-5 mt-3">
                        <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-start mb-5 mb-lg-0">
                            <a href="#">
                                <img src={pythonPanamaDarkLogo} alt="Logo" className="img-fluid custom-width" />
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-2 text-center text-lg-left mb-5 mb-lg-0">
                            <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                                Paginas
                            </h5>
                            <ul className="list list-unstyled">
                                <li className="mb-1">
                                    <a href="#" className="link-hover-style-1">Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 text-center text-lg-left mb-5 mb-lg-0">
                            <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                                Enlaces
                            </h5>
                            <ul className="list list-unstyled">
                                <li className="mb-1">
                                    <a href="#" className="link-hover-style-1">
                                        Python Sitio Oficial</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright footer-copyright-style-2 background-transparent footer-top-light-border">
                    <div className="container py-2">
                        <div className="row py-4">
                            <div className="col d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                                <p>© Copyright 2023. Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}