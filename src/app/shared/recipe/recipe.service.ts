import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import { SimpleRecipe } from './simple-recipe';
import 'rxjs/add/observable/of';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes() {
    this.http.get<Array<SimpleRecipe>>(`assets/data/recipe.json`)
      .pipe(
      map((recipes: Array<Recipe>) => recipes),
      filter((recipes: Array<SimpleRecipe>) => recipes

          /*recipes.map((recipe: SimpleRecipe) => {
            return this.recipe.name.includes('Pizza');
          })*/
          )
      );
  }
}
