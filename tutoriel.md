# Tutoriel : Création d'une application basique en Node.js sans Express avec architecture MVC
Ce tutoriel a pour objectif de vous montrer comment créer une application basique en Node.js sans l'utilisation du framework Express en suivant l'architecture MVC.

## Prérequis
- Connaissances de base en Node.js
- Connaissances de l'architecture MVC
- Connaissances de Git et de la ligne de commande
- Connaissance de base en JavaScript
- Installation de Node.js
- Installation de npm (gestionnaire de paquets de Node.js)

## Introduction
Ce tutoriel vous guidera à travers les étapes de la création d'une application de base en Node.js avec une architecture MVC (Modèle-Vue-Contrôleur). Nous n'utiliserons pas Express dans ce tutoriel, ce qui vous permettra de comprendre les fondements de la création d'une application Node.js sans utiliser un framework.


## exemple de structure structure proposée :

- models/
  - model1.js
  - model2.js
- views/
  - view1.js
  - view2.js
- controllers/
  - controller1.js
  - controller2.js
- index.js

## Etapes

## Étape 1 : Installation de Node.js
Avant de démarrer la création de notre application, il est nécessaire d'installer Node.js sur votre ordinateur. Vous pouvez le télécharger à partir du site web officiel : https://nodejs.org/en/

## Étape 2 : Création des dossiers et fichiers
### installation manuelle :  
1. Créez un nouveau dossier pour votre application.
2. Dans ce dossier, créez les dossiers suivants : models, views, controllers.
3. Créez les fichiers model1.js, model2.js dans le dossier models.
4. Créez les fichiers view1.js, view2.js dans le dossier views.
5. Créez les fichiers controller1.js, controller2.js dans le dossier controllers.
6. Créez le fichier index.js à la racine du dossier.

## Étape 3 : Configuration du fichier index.js
Dans ce fichier, nous allons définir les différents composants de notre application.
Nous allons charger les différents modèles, vues et contrôleurs nécessaires pour notre application.

```
const model1 = require('./models/model1');
const model2 = require('./models/model2');

const view1 = require('./views/view1');
const view2 = require('./views/view2');

const controller1 = require('./controllers/controller1');
const controller2 = require('./controllers/controller2');

// code de votre application...
```

## Étape 4 : Développement des modèles
Dans ce dossier, nous allons définir les modèles de notre application. Les modèles sont responsables de gérer les données de notre application. Vous pouvez définir les modèles nécessaires en fonction de vos besoins.

## Étape 5 : Développement des vues
Dans ce dossier, nous allons définir les vues de notre application. Les vues sont responsables de l'affichage des données à l'utilisateur. Vous pouvez définir les vues nécessaires en fonction de vos besoins.

## Etape 6 : Créer un controlleur pour les pages

1. Créez un nouveau répertoire nommé "controllers" à la racine de votre projet.
2. Créez un nouveau fichier pagesController.js à l'intérieur du répertoire "controllers".
3. Copiez le code suivant dans le fichier pagesController.js :


```
const fs = require("fs");
const path = require("path");

// Récupère la vue pour la page d'accueil
exports.getHome = (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "home.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      return res.status(500).send("Erreur interne du serveur");
    }
    res.send(file.toString());
  });
};

// Récupère la vue pour la page "À propos"
exports.getAbout = (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "about.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      return res.status(500).send("Erreur interne du serveur");
    }
    res.send(file.toString());
  });
};
```

4. Importez le controlleur dans le fichier app.js en ajoutant la ligne suivante en haut du fichier :

```
const pagesController = require("./controllers/pagesController");
```

5. Enfin, ajoutez les routes pour les pages "Accueil" et "À propos" en ajoutant les lignes suivantes à la fin du fichier app.js :

```
app.get("/", pagesController.getHome);
app.get("/about", pagesController.getAbout);
```

Vous avez maintenant un contrôleur pour les pages de votre application. Vous pouvez vérifier si cela fonctionne en lançant votre serveur Node.js et en accédant à http://localhost:8080 pour la page d'accueil et http://localhost:8080/about pour la page "À propos".

Félicitations ! Vous avez maintenant une application basique en Node.js avec une architecture MVC et sans Express. Vous pouvez maintenant continuer à ajouter des fonctionnalités supplémentaires à votre application.

## installation automatique

1. installer les dépendances avec la commande suivante :
`npp install`

2. générer la structure de base avec la commande suivante :
```
node createAppStructure

```

Cette commande :
1. crée la structure mvc de base de l'application
2. créer le serveur node http
3. lance le serveur
4. lance l'application automatiquement sur le navigateur par défaut

Il est possible d'adapter le code en fonction des besoins.



## Conseils
- Assurez-vous de bien comprendre chaque étape avant de passer à la suivante
- N'hésitez pas à expérimenter et à ajouter vos propres fonctionnalités à l'application
- Consultez la documentation de Node.js pour plus d'informations sur les différentes fonctionnalités disponibles

Bonne chance avec votre projet !
