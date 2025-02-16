export default function Contact() {
    return (
        <div class="section contact" id="contact" >
            <div id="map" class="map"></div>
            <div class="container">
                <div class="row" >
                    <div class="col-lg-8" >
                        <div class="contact-form-card" >
                            <h4 class="contact-title">Enviame un mensaje</h4>
                            <form action="/Formulario.php" method="POST">
                                <div class="form-group">
                                    <label for="Nombre"></label>
                                    <input class="form-control" type="text" name="Nombre" placeholder="Tu nombre " required />
                                </div>
                                <div class="form-group">
                                    <label for="email"></label>
                                    <input class="form-control" type="email" name="email" placeholder="Tu email " required />
                                </div>
                                <div class="form-group">
                                    <label for="mensaje"></label>
                                    <textarea class="form-control" id=" placeholder=" name="mensaje" rows="7" required />
                                </div>
                                <div class="form-group ">
                                    <input type="submit" class="form-control btn btn-primary" name="enviar" value="Enviar mensaje" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-info-card">
                            <h4 class="contact-title">Localización</h4>
                            <div class="row mb-2">
                                <div class="col-1 pt-1 mr-1">
                                    <i class="ti-mobile icon-md"></i>
                                </div>
                                <div class="col-10 ">
                                    <h6 class="d-inline">País : <br /> <span class="text-muted">Argentina</span></h6>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1 pt-1 mr-1">
                                    <i class="ti-map-alt icon-md"></i>
                                </div>
                                <div class="col-10">
                                    <h6 class="d-inline">Localidad :<br /> <span class="text-muted">Ciudad Autonoma de Buenos Aires</span></h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

