Documentación del Proyecto Portfolio Personal

Descripción General

Este es un proyecto de portfolio personal desarrollado con React.js, que sirve como una presentación profesional del desarrollador. El proyecto está desplegado en Firebase y utiliza varias tecnologías modernas para su funcionamiento.

Tecnologías Principales
1 - Frontend:
    React.js (versión 19.0.0)
    Bootstrap para el diseño y estilos
    AOS (Animate On Scroll) para animaciones
    Formspree para el manejo de formularios de contacto
2 - Backend y Despliegue:
    Firebase para hosting y despliegue
    Firebase Functions para funcionalidades del backend
    Git para control de versiones

Estructura del Proyecto

├── src/               # Código fuente principal
├── public/           # Archivos estáticos
├── build/            # Versión compilada para producción
├── functions/        # Funciones de Firebase
└── node_modules/     # Dependencias

Características Principales
1 - Componentes Reutilizables:
    Contact
    Container
    Footer
    Otros componentes modulares
2 - Funcionalidades:
    Formulario de contacto integrado con Formspree
    Descarga de CV en formato PDF
    Animaciones en scroll
    Diseño responsivo

Scripts Disponibles
    npm start: Inicia el servidor de desarrollo
    npm run build: Compila el proyecto para producción
    npm test: Ejecuta las pruebas
    npm run eject: Expone la configuración de webpack

Dependencias Principales
    @formspree/react: ^2.5.1
    firebase-admin: ^13.1.0
    firebase-functions: ^6.3.2
    react: ^19.0.0
    react-dom: ^19.0.0
    react-scripts: 5.0.1

Configuración de Despliegue
El proyecto está configurado para desplegarse en Firebase, con archivos de configuración específicos:
    firebase.json
    .firebaserc
    firebase-original.json

Notas Adicionales
    El proyecto está basado en una plantilla de ejemplo, con una copia de respaldo en la carpeta "example"
    Incluye un archivo PDF descargable ubicado en la carpeta "public"
    Las animaciones AOS se inicializan en el index.html
    El formulario de contacto utiliza Formspree para el envío de correos electrónicos

Requisitos del Sistema
    Node.js
    npm
    Cuenta de Firebase
    Cuenta de Formspree para el formulario de contacto
    