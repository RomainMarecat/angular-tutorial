import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './recipe';
import { SimpleRecipe } from './simple-recipe';

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Array<Recipe>> {
    return;
  }
}
