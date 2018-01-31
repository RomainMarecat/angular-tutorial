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
nous allons générer deux fichiers (.ts et .spec.ts) qui auront pour but de récupérer des recettes de cuisine.

`ng generate service shared/recipe/recipe`

Voici un service auto généré vide

```
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  constructor() { }

}
```

Le service a besoin d'être injecté quelque part pour qu'il puisse être utilisé correctement. En revanche, par défaut, il n'est ajouté à aucun module. Nous allons le déclarer dans le app.module.ts. Le service a toujours besoin d'être utilisé dans le tableau avec la clef "providers" de l'annotation @NgModule

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeService } from './shared/recipe/recipe.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Ajouter une nouvelle méthode dans son service

### Voici une méthode simple qui va récupérer dans un fichier JSON les recettes de cuisine. Ces recettes sont ensuite filtrées par nom incluant "Tasty" et triées par ordre croissant.

Nous souhaitons avoir manipuler que les attributs id et name. C'est pourquoi il existe une interface SimpleRecipe. Elle évite de définir un attribut supplémentaire.

```
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import { SimpleRecipe } from './simple-recipe';

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Array<SimpleRecipe>> {
    return Observable.of([]);
  }
}
```

Il va falloir maintenant remplir ce tableau vide de données. 
Nous allons appeller un fichier JSON pour récupérer les données pour ensuite les renvoyer sous forme d'Observable d'un tableau de recette


...


Dans le prochain chapitre, nous regarderons comment mocker cette appel à un webservice et comment le tester correctement.

+Lien vers le chapitre suivant



