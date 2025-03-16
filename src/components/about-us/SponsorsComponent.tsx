import jebtrains from "../../assets/img/sponsors/jb_beam.png";
import python_soft_found from "../../assets/img/sponsors/PSF.png";
import pyladies from "../../assets/img/sponsors/Pyladies.png";
import softd3v from "../../assets/img/sponsors/SoftD3v.png";
export function SponsorsComponent() {
    return (
        <div role="main" className="main">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-6">
                        <h2 className="font-weight-normal text-7 mt-2 mb-0">
                            <strong className="font-weight-extra-bold">Nuestro más sincero</strong> 
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <p className="custom-paragraph font-weight-bold">
                            Agradecimiento a los Patrocinadores: Nuestro éxito es gracias a su invaluable apoyo.
                        </p>

                        <p className="custom-paragraph">
                            Nos gustaría extender nuestro más sincero agradecimiento a todos nuestros patrocinadores, 
                            cuya generosidad y compromiso han sido esenciales para la realización de nuestras actividades
                            y eventos. Su apoyo no solo hace posible el desarrollo de proyectos significativos, sino que también impulsa
                            el crecimiento y la sostenibilidad de nuestra comunidad.
                        </p>

                        <p className="custom-paragraph font-weight-bold">
                            Una vez más, agradecemos profundamente a todos nuestros patrocinadores. 
                            Su contribución es el motor que nos impulsa a seguir adelante.
                        </p>
                    </div>
                </div>

                <div className="image-container">
                    <img src={python_soft_found} className="sponsor-image" alt="Python Software Foundation" />
                    <img src={jebtrains} className="sponsor-image" alt="JetBrains" />
                    <img src={pyladies} className="sponsor-image" alt="PyLadies Panamá" />
                    <img src={softd3v} className="sponsor-image" alt="SoftD3v" />
                    <p className="subtitle">Patrocinadores Python Panamá</p>
                </div>
            </div>
        </div>
    );
}
