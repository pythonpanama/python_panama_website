export function HomePageBodyComponent() {
    return (
        <div role="main" className="main">
            <div id="carouselPython" className="carousel slide" data-bs-ride="carousel">
                {/* Indicadores */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselPython" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselPython" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselPython" data-bs-slide-to="2"></button>
                </div>

                {/* Contenedor de imágenes */}
                <div className="carousel-inner carousel-dark-overlay">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="src/assets/img/carrousel/python_panama_slide_1.png" alt="First slide" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                            <h1>Python Panamá</h1>
                            <p>¡Que todo Panamá y la región hablen Python! </p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="src/assets/img/carrousel/python_panama_slide_2.png" alt="Second slide" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                        <h1>Python Panamá</h1>
                            <p>¡Que todo Panamá y la región hablen Python! </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="src/assets/img/carrousel/python_panama_slide_3.png" alt="Third slide" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                        <h1>Python Panamá</h1>
                            <p>¡Que todo Panamá y la región hablen Python! </p>
                        </div>
                    </div>
                </div>

                {/* Controles de navegación */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselPython" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselPython" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>


            <section className="section bg-light section-height-3 border-0 m-0">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="font-weight-normal text-6 pb-3">
                                Nuestra <strong className="font-weight-extra-bold">Comunidad</strong>
                            </h2>
                        </div>
                    </div>

                    <div className="row mb-lg-4">
                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
                            <div className="feature-box feature-box-style-2">
                                <div className="feature-box-icon">
                                    <i className="fas fa-users text-primary"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h4 className="font-weight-bold mb-2">Meetups</h4>
                                    <p>
                                        Únete a nuestro grupo en&nbsp;
                                        <a className="meetup-link" href="https://www.meetup.com/python-panama/" target="_blank" rel="noopener noreferrer">
                                            Meetup
                                        </a> y participa de nuestros eventos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up">
                            <div className="feature-box feature-box-style-2">
                                <div className="feature-box-icon">
                                    <i className="fas fa-laptop-code text-primary"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h4 className="font-weight-bold mb-2">Talleres</h4>
                                    <p>Encuentra cursos y manuales para mejorar en Python.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-right" data-aos-delay="300">
                            <div className="feature-box feature-box-style-2">
                                <div className="feature-box-icon">
                                    <i className="fas fa-comments text-primary"></i>
                                </div>
                                <div className="feature-box-info">
                                    <h4 className="font-weight-bold mb-2">Comunidad</h4>
                                    <p>Forma parte de nuestra comunidad a través de nuestras redes sociales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}