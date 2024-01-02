Por qué ?
Quiero aprender Azure y este parecía un buen primer paso. Yo estoy usando una mac y visual studio code que tiene muchos plugins
para Azure, sin ir más lejos apretas f1 y podés crear una function azure desde el IDE que ya queda configurada.

Esto es un resumen de https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript
Con algún tip o nota especial.



🚀 Desplegando tu Primera App en Azure Static Web Apps

Requisitos Previos:

    Visual Studio Code©
    Node.js: Para ejecutar paquetes de desarrollo y herramientas.
    Azure CLI: Interactúa con los servicios de Azure directamente desde tu terminal.
    Git: Imprescindible para el control de versiones.

Objetivo:
Vamos a aprender cómo desplegar una sencilla aplicación de JavaScript y HTML en Azure Static Web Apps.

Primeros Pasos:
    Navegá al siguiente link para crear un nuevo repo con el ejemplo que nos provee Azure Static Web Apps:
        https://github.com/staticwebdev/vanilla-basic/generate
    Creá un fork con el nombre my-first-static-web-app

Azure Static Web Apps requiere al menos un archivo HTML para crear una web app. El repositorio que creaste en este paso incluye un único archivo index.html.
```
git clone https://github.com/<TU_NOMBRE_DE_USUARIO_GITHUB>/my-first-static-web-app.git
```
    Esto copiará el proyecto de ejemplo a tu máquina local.


Preparar el Proyecto en Visual Studio Code:

Necesitamos tener instalados los plugins

Instalar Azure Static Web Apps extension
    Select View > Extensions.
    In the Search Extensions in Marketplace, type Azure Static Web Apps.
    Select Install for Azure Static Web Apps.
    The extension installs into Visual Studio Code.

    Abre Visual Studio Code.
    Presiona F1 para abrir la paleta de comandos.


You are required to sign in to Azure and GitHub in Visual Studio Code to continue. If you are not already authenticated, the extension prompts you to sign in to both services during the creation process.

    Escribe y selecciona Azure Static Web Apps: Create static web app.... Esto iniciará el proceso de creación en Azure.

Personaliza tu Proyecto:

    Navega a src/index.html y cambia el título de la página a algo más personal.

Sube tus Cambios a GitHub:

    Ahora, es tiempo de guardar tus cambios y subirlos al repositorio:

    bash

        git add .
        git commit -m "Mi primer commit en Azure Static Web Apps"
        git push

        Con esto, tus cambios estarán en GitHub.

    Verifica tu Despliegue en Azure:
        Una vez que Azure Static Web Apps procese tu código, podrás ver tu sitio en vivo. Revisa la URL proporcionada por Azure para ver tu trabajo.

🌟 ¡Listo! Ya tienes tu primera app corriendo en Azure Static Web Apps. 
