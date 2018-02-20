import { Component, OnInit } from '@angular/core';
import { RecipeService } from './shared/recipe/recipe.service';
import { SimpleRecipe } from './shared/recipe/simple-recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Tutorial';
  recipes: Array < SimpleRecipe > ;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe((recipes: Array < SimpleRecipe > ) => this.recipes = recipes);
  }
}
