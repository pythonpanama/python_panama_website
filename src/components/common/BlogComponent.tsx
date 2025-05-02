import news1 from "../../assets/img/blog/medium/noti_4.jpg";
import news2 from "../../assets/img/blog/medium/noti_6.jpg";
import news3 from "../../assets/img/blog/medium/pycon2024.png";
import news4 from "../../assets/img/blog/medium/python.jpg";
export function BlogComponent() {
    return ( 
        <>
            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 align-self-center p-static order-2 text-center">

                                <h1 className="text-white font-weight-bold text-8">Últimas Novedades</h1>
                            </div>
                        </div>
                    </div>
            </section>

            <div className="container px-4 py-5" id="custom-cards">
                    {/* <h2 className="pb-2 border-bottom">Custom cards</h2> */}
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    
                    <div className="col">
                    <a href="/blog/python-panama-2024" className="text-decoration-none">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{backgroundImage: `url(${news3})`, backgroundSize: "cover",backgroundPosition: "center" }}  >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Python Panamá 2024 - Esp
                                </h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto"> </li>
                                    <li className="me-auto"> </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>Panamá</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="col">
                    <a href="/blog/python-panama-2024-ENG" className="text-decoration-none">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{backgroundImage: `url(${news4})`, backgroundSize: "cover",backgroundPosition: "center" }}  >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Python Panama 2024 - Eng
                                </h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto"> </li>
                                    <li className="me-auto"> </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>Panamá</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="col">
                    <a href="/blog/historia-python" className="text-decoration-none">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{backgroundImage: `url(${news2})`, backgroundSize: "cover",backgroundPosition: "center" }}  >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Historia de Python
                                </h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto"> </li>
                                    <li className="me-auto"> </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>Mundo</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="col">
                    <a href="/blog/como-empezar-en-ciencia-de-datos-con-python" className="text-decoration-none">
                        <div
                            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                            style={{backgroundImage: `url(${news1})`, backgroundSize: "cover",backgroundPosition: "center" }}  >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Cómo Empezar en Ciencia de Datos con Python
                                </h2>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto"> </li>
                                    <li className="me-auto"> </li>
                                    <li className="d-flex align-items-center me-3">
                                        <small>Mundo</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
            </div>
        </>  
    )
}