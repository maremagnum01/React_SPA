import DescargarCV from "./DescargarCV";

export default function Container(){
    return (
        <div class="container-fluid" >
        <div id="about" class="row about-section">
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Quien soy?</h3>
                <span class="line mb-5"></span>
                <h5 class="mb-3">Un Desarrollador Web Full Stack.</h5>
                <p class="mt-20">Utilizo herramientas y tecnologias como React y TypeScript, como Php con Laravel.</p>
                <DescargarCV/>
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Informacion personal.</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled">
                    <li><span>Nacimiento</span> : 21/12/1994</li>
                    <li><span>Email</span> : <a href="mailto:eze.di.lallo@gmail.com"> eze.di.lallo@gmail.com </a></li>
                    <li><span>Celular</span> : <a href="https://api.whatsapp.com/send?phone=+5491131756183&text=Hola!%20Me%20contacto%20contigo%20a%20travez%20del%20enlace%20de%20tu%20portafolio!" target="_blank"> +54 9 1131756183 </a></li>
                </ul>
                <ul class="social-icons pt-3">
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">My Expertise</h3>
                <span class="line mb-5"></span>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p class="subtitle"> exercitat Repellendus,  corrupt.</p>
                        {/* <hr> */}
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p class="subtitle">Lorem ipsum dolor sit consectetur.</p>
                        {/* <hr> */}
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Digital Marketing</h6>
                        <p class="subtitle">voluptate commodi illo voluptatib.</p>
                        {/* <hr> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}