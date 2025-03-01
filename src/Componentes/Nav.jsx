import Switcher from './Switcher';

export default function Nav() {
    return(
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a href="" onClick="location.reload()" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">Sobre mi</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link">Educacion</a>
                    </li>
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">Contacto</a>
                    </li>
                    {/* <li class="nav-item last-item">
                        <Switcher/>
                    </li> */}
                </ul>
                {/* <ul class="navbar-nav brand">
                    <img src="assets/imgs/avatar.jpg" alt="" class="brand-img">
                    <li class="brand-txt">
                        <h5 class="brand-title">John Doe</h5>
                        <div class="brand-subtitle">Web Designer | Developer</div>
                    </li>
                </ul> */}
                {/* <ul class="navbar-nav ml-auto">
                    
                </ul> */}
            </div>
        </div>
    </nav>
    )
}