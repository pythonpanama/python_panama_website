export function NotFoundComponent() {
    return (
        <>
            <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center p-static order-2 text-center">
                            <h1 className="text-white font-weight-bold text-8">Página no encontrada</h1>
                        </div>
                    </div>
                </div>
            </section>

            <div role="main" className="main container py-5 text-center">
                <p className="lead">
                    La página que buscas no existe o cambió de dirección.
                </p>
                <p>
                    <a className="btn btn-primary btn-lg me-2 mb-2" href="/">Ir al inicio</a>
                    <a className="btn btn-outline-primary btn-lg mb-2" href="/blog">Ver el blog</a>
                </p>
            </div>
        </>
    );
}
