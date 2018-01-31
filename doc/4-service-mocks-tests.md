# Mocker et tester son service Angular 5

## Mock d'une classe

Nous allons pour aller plus vite générer une classe puis la changer en constante pour aller plus vite :

`ng generate shared/recipe/mock-recipe`

Nous obtenons :
```
export class MockRecipe {
}
```

Il faut ensuite apporter une petite correction pour avoir une constante et ajouter un petit set de données. 
```
import { SimpleRecipe } from './simple-recipe';

export const mockRecipe = [{
  id: 1,
  name: 'Boeuf Bourguignon'
}, {
  id: 2,
  name: 'Crèpes au sucre'
}, {
  id: 3,
  name: 'Pizza Parma'
}, {
  id: 4,
  name: 'Spaggethis bolognaise'
}, {
  id: 5,
  name: 'Tartiflette'
}] as SimpleRecipe[];

```

### Le défi est d'utiliser ce mock dans le service correspondant. 

