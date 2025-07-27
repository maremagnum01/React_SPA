export default function Portfolio() {
    return (
        <section className="section bg-custom-gray" id="portfolio">
            <div className="container">
                <h1 className="mb-5">
                    <span className="text-danger">My</span> Portfolio
                </h1>

                <h6 className="title text-danger">Próximamente más</h6>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="imagenes/Portfolio.png" alt="Portfolio..." />
                            <div className="card-body">
                                <h5 className="card-title">Mi Portafolio</h5>
                                <p className="card-text">
                                    Mi portafolio esta realizdo con React. Con el fin de unicamente presentarme a mi y los proyectos que haga y suba.
                                </p>
                                <a href="/" target="_blank" className="btn btn-primary">
                                    Ir al sitio
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="imagenes/Gestion_de_empresa.jpg" alt="Empresa..." />
                            <div className="card-body">
                                <h5 className="card-title">Gestión de Empresa</h5>
                                <p className="card-text">
                                    Es un CRUD realizado con PHP puro, HTML, Bootstrap y jQuery. Permite registrar empleados,
                                    gestionar usuarios y cuenta con buscador en tiempo real con AJAX. Usa MySQL como base de datos.
                                </p>
                                <a href="http://www.gestionempresa-crud.infinityfreeapp.com/" target="_blank" className="btn btn-primary">
                                    Ir al sitio
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="imagenes/Doccion.png" alt="Doccion..." />
                            <div className="card-body">
                                <h5 className="card-title">Doccion</h5>
                                <p className="card-text">
                                    Proyecto para la facultad. Web de adopción y atención veterinaria. Backend en Django y frontend
                                    en React. Desplegado en Render y Firebase. Al entrar, puede demorar unos segundos por el reinicio
                                    del hosting.
                                </p>
                                <a href="https://doccion-fc786.web.app/" target="_blank" className="btn btn-primary">
                                    Ir al sitio
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Podés seguir agregando más tarjetas dentro de esta misma estructura */}
                </div>
            </div>
        </section>
    );
}
