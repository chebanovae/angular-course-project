import {Subject} from 'rxjs/Subject';

import { Ingredient } from '../shared/model/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Coconut milk, can', 1)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.fireIngredientsChanged();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.fireIngredientsChanged();
  }

  private fireIngredientsChanged() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
