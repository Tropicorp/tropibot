# Tropibot
Bot Discord du server Tropicorp, réalisé avec Discord.js : https://discord.js.org/
## Fonctionnement
Le bot est hosté sur Heroku via l'integration de github, chaque nouveau push sur la branche main provoque un build de l'application coté Heroku. Le bot peut fonctionner en local en le laissant tourner comme tout autre bot discord.
## Installation et développement
Requiert Node.js version 16.x et plus.
>1. Cloner le repo
>2. ``npm i`` pour installer tout les packages.
>3. Ajouter dans le répertoire un fichier token.json contenant le token du bot. Pour des raisons évidentes de sécurité, ce token doit être gardé secret.
>4. Lancer le bot avec ``node index.js``
