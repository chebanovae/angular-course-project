import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/model/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';

export class AddIngredient implements Action {
  constructor(public payload: Ingredient) {}
  readonly type = ADD_INGREDIENT;
}

export class AddIngredients implements Action {
  constructor(public payload: Ingredient[]) {}
  readonly type = ADD_INGREDIENTS;
}

export class UpdateIngredient implements Action {
  constructor(public payload: {index: number, ingredient: Ingredient}) {}
  readonly type = UPDATE_INGREDIENT;
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  constructor(public payload: number) {}
  readonly type = START_EDIT;
}

export type ShoppingListActions =
  AddIngredient |
  AddIngredients |
  UpdateIngredient |
  DeleteIngredient |
  StartEdit;
