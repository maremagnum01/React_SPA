# Portfolio Personal React SPA

## 🚀 Descripción
Portfolio personal desarrollado como Single Page Application (SPA) utilizando React. Este proyecto presenta una interfaz moderna y responsive para mostrar proyectos, habilidades y experiencia profesional.

## 🛠️ Tecnologías Principales

### Frontend
- React.js (v19.0.0)
- Bootstrap (Diseño y estilos)
- AOS (Animate On Scroll)
- Formspree (Gestión de formularios)

### Infraestructura
- Firebase Hosting
- Firebase Functions
- Git (Control de versiones)

## 📁 Estructura del Proyecto

```
├── src/
│   ├── Componentes/     # Componentes de React
│   ├── Providers/       # Proveedores de contexto
│   └── App.js          # Componente principal
├── public/             # Archivos estáticos
├── functions/          # Funciones de Firebase
└── firebase.json      # Configuración de Firebase
```

## ✨ Características

- 📱 Diseño totalmente responsive
- 🎨 Animaciones suaves al hacer scroll
- 📬 Formulario de contacto funcional
- 📄 Descarga de CV en PDF
- 🌐 Integración con redes sociales
- 🔥 Despliegue automatizado en Firebase

## 🚦 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build

# Ejecutar pruebas
npm test
```

## 📦 Dependencias Principales

```json
{
  "@formspree/react": "^2.5.1",
  "firebase-admin": "^13.1.0",
  "firebase-functions": "^6.3.2",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

## 🔧 Requisitos de Instalación

1. Node.js (versión LTS recomendada)
2. npm o yarn
3. Cuenta en Firebase
4. Cuenta en Formspree

## 🚀 Configuración del Proyecto

1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
   - Crear archivo `.env` en la raíz
   - Añadir las siguientes variables:
     ```
     REACT_APP_FORMSPREE_KEY=[TU_CLAVE]
     REACT_APP_FIREBASE_CONFIG=[TU_CONFIG]
     ```

4. Iniciar el proyecto
```bash
npm start
```

## 📝 Notas Importantes

- El proyecto utiliza Firebase para el hosting
- Las animaciones se gestionan con la biblioteca AOS
- El formulario de contacto requiere configuración en Formspree
- Los archivos estáticos se encuentran en la carpeta `public`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

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
    