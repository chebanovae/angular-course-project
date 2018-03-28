import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipes/recipe.service';
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class BackendService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json')
      .map((response: Response) => {
        const recipes = response.json();
        for (const rec of recipes) {
          if (!rec['ingredients']) {
            rec['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

}
