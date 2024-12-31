export function ContactPageBodyComponent() {
    return (
        <>
            <div role="main" className="main">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020982.726150553!2d-81.22678175092908!3d8.378837343393988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8be2be3%3A0x79eee04d1fa59bcf!2sPanama!5e0!3m2!1sen!2spa!4v1676834367257!5m2!1sen!2spa" width="1920" height="450"  loading="lazy"></iframe>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-6">
                            <div className="overflow-hidden mb-1">
                                <h2 className="font-weight-normal text-7 mt-2 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">
                                    <strong className="font-weight-extra-bold">Ponte</strong> En Contacto
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="800">
                                <ul className="list list-icons list-icons-style-2 mt-2">
                                    <li>
                                        <i className="fas fa-envelope top-6"></i> 
                                        <strong className="text-dark">Email:</strong> 
                                        <a href="mailto:contacto@pythonpanama.org">contacto@pythonpanama.org</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}