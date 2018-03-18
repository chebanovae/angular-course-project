import { Ingredient } from '../shared/model/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<void>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Coconut milk, can', 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit();
    }
}
