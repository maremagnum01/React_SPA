export default function Header(){
    return (
        <header class="header" Style="height: 100vh" >
        <div class="container">
            <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div class="header-content" >
                <h4 class="header-subtitle" >Hola! Soy</h4>
                <h1 class="header-title">Ezequiel Di lallo</h1>
                <h6 class="header-mono">Desarrollador</h6>
                <button class="btn btn-primary btn-rounded" onClick={()=>imprimirWeb()}><i class="ti-printer pr-2"></i>Imprimir Portfolio</button>
            </div>
        </div>
    </header>
    );

    function imprimirWeb() {
        window.print();
    }
}