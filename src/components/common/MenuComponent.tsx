import { useState } from "react";
import python_panama from "../../assets/img/logo.png";

export function MenuComponent() {
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú en móvil

    return (
        <>
            <div id="header" className="header-effect-shrink">
                <div className="header-body">
                    <div className="header-container container">
                        <div className="header-row">
                            {/* Logo */}
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-logo">
                                        <a href="/">
                                            <img alt="Python Panama" width="250" height="55" src={python_panama} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Botón de menú en móviles */}
                            <button
                                className="btn header-btn-collapse-nav d-lg-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <i className="fas fa-bars"></i>
                            </button>

                            {/* Menú de navegación */}
                            <div className={`header-column justify-content-end ${isOpen ? "show" : ""}`}>
                                <div className="header-row">
                                    <div className="header-nav header-nav-line header-nav-top-line">
                                        <div className={`header-nav-main collapse d-lg-block ${isOpen ? "show" : ""}`}>
                                            <nav>
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item">
                                                        <a href="/" className="nav-link active">Inicio</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://pycon.pa/" className="nav-link">PyCon Panamá</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/codigo-de-conducta" className="nav-link">Código de Conducta</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/blog" className="nav-link">Blog</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/contacto" className="nav-link">Contáctanos</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
