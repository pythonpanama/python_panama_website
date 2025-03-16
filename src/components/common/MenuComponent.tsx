import { useState } from "react";
import python_panama from "../../assets/img/logo.png";

export function MenuComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                
                {/* Logo */}
                <a className="navbar-brand me-auto" href="/">
                    <img alt="Python Panamá" width="250" height="55" src={python_panama} />
                </a>

                {/* Botón de menú en móviles */}
                <button
                    className="navbar-toggler ms-3"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* Menú de navegación */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""} `} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-dark fw-bold">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://pycon.pa/" className="nav-link text-dark fw-bold">PyCon Panamá</a>
                        </li>
                        <li className="nav-item">
                            <a href="/blog" className="nav-link text-dark fw-bold">Blog</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle text-dark fw-bold" data-bs-toggle="dropdown">
                                Sobre Nosotros
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="/codigo-de-conducta" className="dropdown-item text-dark">Código de Conducta</a></li>
                                <li><a href="/patrocinadores" className="dropdown-item text-dark">Patrocinadores</a></li>
                                <li><a href="/contacto" className="dropdown-item text-dark">Contáctanos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
