export default function Contact (){
    return (
        <div class="section contact" id="contact" >
        <div id="map" class="map"></div>
        <div class="container">
            <div class="row" >
                <div class="col-lg-8" >
                    <div class="contact-form-card" >
                        <h4 class="contact-title">Enviame un mensaje</h4>
                        <form action="">
                            <div class="form-group">
                                <input  class="form-control" type="text" placeholder="Tu nombre " required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="email" placeholder="Tu email " required />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id=" placeholder=" rows="7" required />
                            </div>
                            <div class="form-group ">
                                <button type="submit" class="form-control btn btn-primary" >Enviar mensaje</button>
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
                                <h6 class="d-inline">País : <br/> <span class="text-muted">Argentina</span></h6>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-map-alt icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Localidad :<br/> <span class="text-muted">Ciudad Autonoma de Buenos Aires</span></h6>
                            </div>
                        </div>
                        <ul class="social-icons pt-4">
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-dark" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
                        </ul> 
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}