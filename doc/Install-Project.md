# Installer un projet Angular 5
## Commencer par utiliser l'outil Angular cli
`npm install -g @angular/cli`

La commande `ng` est désormais disponible dans votre console.
Ce binaire va nous permettre plus tard d'installer un nouveau projet,
lancer et "écouter" les modifications sur le projet.
Il permet aussi de lancer un deploiement de l'app pour une mise en production.

## Génération du projet
La commande `ng new angular-tutorial` va générer un nouveau projet angular dans un dossier angular-tutorial.

Après l'installation des paquets npm du projet, il suffit de se placer dans le projet. `cd angular-tutorial`. 

## Lancement d'un web serveur
  "Builds and serves your app, rebuilding on file changes."
Nous avons maintenant à lancer l'application en local sur un port. Puis l'application se rechargera à chaque sauvegarde de fichier dans le dossier `src/`

`ng serve`

Le port par défaut est le 4200. 

Vous pouver maintenant retrouver votre application à l'adresse : http://localhost:4200/

Effectuer une modification sur le fichiers `src/app/app.component.ts` en modifiant `title = 'app';`  par `title = 'angular tutorial';`. Lorsque vous allez enregistrer, l'application va automatiquement se recharger. 

## Déployer son application
Lancer un `build` revient à compiler comme la commande `serve` mais sans web server. Elle permet aussi tout comme sa commande voisine de générer une application en mode développement ou production, en Ahead of Time* ou Just in Time*, avec quel fichier d'environemment, etc.
`ng build` build simple en JIT, dévelopement, environement par défaut
`ng build -aot` build simple en AOT, dévelopement, environement par défaut
`ng build -aot -prod` build simple en AOT, production, environement par défaut
`ng build -aot -prod --env=prod` build simple en AOT, production, environement de production

## Explorer d'autres commandes de l'angular cli
Il existe déjà un certain nombre de commandes dans ce module. 
Il est un outil essentiel pour charger rapidement une nouvelle application tout en la paramétrant comme bon vous semble.

## Pour aller plus loin 
La suite est disponible avec le tutoriel pour configurer une application web multi sites en angular avec angular cli