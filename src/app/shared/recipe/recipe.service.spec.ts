import { TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { mockRecipe } from './mock-recipe';

describe('RecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService]
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});