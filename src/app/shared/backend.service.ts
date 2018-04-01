import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class BackendService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get('https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json?auth=' + token)
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
