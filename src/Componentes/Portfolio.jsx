export default function Portfolio() {
    return (
        <section class="section bg-custom-gray" id="portfolio" >
            <div class="container">
                <h1 class="mb-5"><span class="text-danger">My</span> Portfolio</h1>
                <div class="portfolio">

                    <h6 class="title text-danger">Proximamente</h6>
                    <div class="filters">

                    </div>
                    <div class="portfolio-container">
                        <div class="col-md-6 col-lg-4 branding">
                            <div class="card" Style="width: 18rem;">
                                <img class="card-img-top" src="imagenes/Gestion_de_empresa.jpg" alt="Empresa..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Gestion de Empresa</h5>
                                        <p class="card-text">Es un CRUD realizado con php puro, html, bootstrap y jquery. Función realizar registros de empleados, realizar registro de usuario para manejar dichos registros, tiene un buscador en tiempo real realizado con AJAX. Utiliza una base de datos SQL con MySQL.</p>
                                        <a href="http://www.gestionempresa-crud.infinityfreeapp.com/" target="_blank" class="btn btn-primary">Ir al sitio</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}