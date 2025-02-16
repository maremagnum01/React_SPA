<?php
    if(isset($_POST['enviar'])){
        $nombre = $_POST['Nombre'];
        $email = $_POST['email'];
        $mensaje = $_POST['mensaje'];

        $destino = "eze.di.lallo@gmail.com";
        $asunto = "Nuevo mensaje de $email";

        $contenido = "Nombre: $nombre \n";
        $contenido .= "Email: $email \n";
        $contenido .= "Mensaje: $mensaje";

        $header = "From: portfolio.ezequiel@noreply.com";

        $mail=mail($destino,$asunto,$contenido,$header);

        if($mail){
            echo "El mensaje ha sido enviado correctamente";
        }else {
            echo "Hubo un error al enviar el mensaje";
        }
    }
?>