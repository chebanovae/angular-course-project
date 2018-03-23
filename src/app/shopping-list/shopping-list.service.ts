import {Subject} from 'rxjs/Subject';

import { Ingredient } from '../shared/model/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
      new Ingredient('Apple', 5),
      new Ingredient('Coconut milk, can', 1)
    ];

    getIngredients() {
      return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.fireIngredientsChanged();
    }

    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.fireIngredientsChanged();
    }

    private fireIngredientsChanged() {
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}
