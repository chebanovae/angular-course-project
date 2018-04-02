import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class BackendService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {}

  storeRecipes() {
    const req = new HttpRequest('PUT', 'https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json',
    this.recipeService.getRecipes(), { reportProgress: true });
    return this.httpClient.request(req);
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json')
      .map(recipes => {
        console.log(recipes);
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
