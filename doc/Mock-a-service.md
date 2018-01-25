# Comment générer / mocker son service et utiliser le modèle associé en Angular 5
Ce tutoriel a pour but de familiariser et comprendre le principe du modèle, de l'interface et des services associés aux modèles. 

## Générer son modèle
Nous allons générer un modèle de recette de cuisine pour l'exemple. 
Nous reprenons notre angular cli pour générer un premier modèle nommé recipe
`ng generate class shared/recipe/recipe`
              src/  app/  recipe / recipe .ts
Nous allons lui ajouter quelques attributs en plus. 
```
export class Recipe {
    id: number;
    name: string;
    description?: string;
}

```

Cette classe a pour but de typer notre objet reçu par le backend. 
Les deux attributs obligatoire pour créer un objet Recipe#1 c'est d'avoir au moins un id et un nom. La description est obligatoire.

Nous allons en plus ajouter une interface qui définira une recette simple. 
Cette recette simple contient seulement l'id et le nom.

Pour la générer, il suffit de lancer la commande : `ng g interface shared/recipe/simple-recipe`

```
export interface SimpleRecipe {
    id: number;
    name: string;
}

```


## Générer son service 

Pour générer son service avec le fichier .spec qui lui correspond, il faut commencer par executer la commande `ng generate service le-nouveau-service`
(Les tirets seront retirés et la class sera nommée en camelcase)

Pour l'exemple, 
nous allons générer deux fichiers qui auront pour but de récupérer des recettes de cuisine.

