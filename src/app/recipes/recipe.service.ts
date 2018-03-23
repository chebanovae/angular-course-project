import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
          'Steak',
          'Yummy Steak Dinner',
          'https://www.goodfreephotos.com/albums/food/yummy-steak-dinner.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('Garlic', 8)]
        ),
        new Recipe(
          'Pasta',
          'Pasta Carbonara',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Pasta_alla_carbonara.png/800px-Pasta_alla_carbonara.png',
          [
              new Ingredient('Pasta', 1),
              new Ingredient('Cream', 5),
              new Ingredient('Cheese', 3)
          ])
        ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(id: number): Recipe {
      return this.recipes[id];
    }
}
