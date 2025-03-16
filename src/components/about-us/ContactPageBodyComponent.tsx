export function ContactPageBodyComponent() {
    const socialLinks = [
        { name: "Facebook", icon: "fa-facebook", url: "https://facebook.com/pythonpanama", className: "facebook" },
        { name: "Instagram", icon: "fa-instagram", url: "https://instagram.com/pythonpanama", className: "instagram" },
        { name: "Twitter", icon: "fa-x-twitter", url: "https://twitter.com/pythonpanama", className: "twitter" },
        { name: "LinkedIn", icon: "fa-linkedin", url: "https://linkedin.com/company/pythonpanama", className: "linkedin" },
        { name: "WhatsApp", icon: "fa-whatsapp", url: "https://www.whatsapp.com/channel/0029VaRydFnJ3jv8O3Manv2R", className: "whatsapp" },
        { name: "Meetup", icon: "fa-meetup", url: "https://meetup.com/pythonpanama", className: "meetup" },
    ];

    return (
        <div role="main" className="main">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-6">
                        <h2 className="font-weight-normal text-7 mt-2 mb-0">
                            <strong className="font-weight-extra-bold">Síguenos</strong> En:
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <p className="custom-p font-weight-bold">
                            ¡Nos encantaría mantenerte en contacto!
                            
                        </p>

                        <p className="custom-p"> A continuación, te mostramos nuestros canales oficiales en redes sociales donde podrás interactuar con nosotros, estar al tanto de nuestras últimas noticias, eventos y mucho más. </p>
                        <p className="custom-p">Ya sea que desees compartir tus experiencias, hacer preguntas o simplemente seguirnos para estar actualizado sobre nuestras actividades, te invitamos a unirte a nuestra comunidad en cualquiera de estas plataformas. </p>
                        <p className="custom-p font-weight-bold">¡No dudes en conectar con nosotros y ser parte de la conversación!</p>
                    </div>
                </div>

                {/* Redes Sociales */}
                <div className="row">
                    {socialLinks.map((social, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <div className={`card text-center shadow-sm p-3 ${social.className}`}>
                                    <div className="card-body">
                                        <i className={`fa-brands ${social.icon}  mb-3 cardIcon`} />
                                        <h2 className="card-title">{social.name}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
