🚀 Desplegando tu Primera App en Azure Static Web Apps

Requisitos Previos:

    Visual Studio Code: Un editor de código versátil.
    Node.js: Para ejecutar paquetes de desarrollo y herramientas.
    Azure CLI: Interactúa con los servicios de Azure directamente desde tu terminal.
    Git: Imprescindible para el control de versiones.

Objetivo:
Vamos a aprender cómo desplegar una sencilla aplicación de JavaScript y HTML en Azure Static Web Apps, una plataforma ideal para proyectos web estáticos.

Primeros Pasos:

    Crear un Repositorio en GitHub:
        Azure nos ofrece un ejemplo para empezar. Haz un fork del repositorio de ejemplo de Azure en tu cuenta de GitHub.

    Clonar el Repositorio:
        En tu terminal, escribe:

        bash

    git clone https://github.com/<TU_NOMBRE_DE_USUARIO_GITHUB>/my-first-static-web-app.git

    Esto copiará el proyecto de ejemplo a tu máquina local.

Preparar el Proyecto en Visual Studio Code:

    Abre Visual Studio Code.
    Presiona F1 para abrir la paleta de comandos.
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

🌟 ¡Listo! Ya tienes tu primera app corriendo en Azure Static Web Apps. Ahora puedes experimentar más, agregando funcionalidades o probando con diferentes frameworks. Azure Static Web Apps es una plataforma excelente para desplegar y escalar tus proyectos web de manera sencilla y eficiente.