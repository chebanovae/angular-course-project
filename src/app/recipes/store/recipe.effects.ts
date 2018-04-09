import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json');
        }).map((recipes: Recipe[]) => {
            console.log('Fetched recipes:' + recipes);
            for (const rec of recipes) {
              if (!rec['ingredients']) {
                rec['ingredients'] = [];
              }
            }
            return {
                type: RecipeActions.SET_RECIPES,
                payload: recipes
            };
        });

    @Effect({dispatch: false})
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPES)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://angular5-recipe-book-4b62b.firebaseio.com/recipes.json',
            state.recipes, { reportProgress: true });
            return this.httpClient.request(req);
        });


    constructor(private actions$: Actions,
                private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>) {}

}
