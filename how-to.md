static web apps
Pre requisitos
Visual Studio Code
Node.js
Azure CLI
Git

qué queremos aprender ? A hacer deploy de una app javascript + html en azure web static apps
Primer tutorial:
https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript

Pasos:
Crear un repo en github. Vamos a clonar el ejemplo que da azure
    https://github.com/staticwebdev/vanilla-basic/generate

Hacemos un fork en github y después lo clonamos
git clone https://github.com/<YOUR_GITHUB_ACCOUNT_NAME>/my-first-static-web-app.git


Select F1 to open the Visual Studio Code command palette.

Enter Create static web app in the command box.

Select Azure Static Web Apps: Create static web app....

Esto va a crear los recursos en Azure.
Vamos a nuestro código src/index.html y modificamos el título de la página

Vamos a hacer un commit y un push

git add .
git commit -m "my first commit"
git push

Vamos a ver el resultado en Azure

