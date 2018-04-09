import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import { UpdateIngredient } from '../../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: []
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
   switch (action.type) {
    case RecipeActions.SET_RECIPES:
    console.log('Recipe.reducer set recipes');
        return {
            ...state,
            recipes: [...action.payload]
        };
    case RecipeActions.ADD_RECIPE:
        return {
            ...state,
            recipes: [...state.recipes, action.payload]
        };
    case RecipeActions.UPDATE_RECIPE:
        const updatedRecipes = [...state.recipes];
        updatedRecipes[action.payload.index] = action.payload.recipe;
        return {
            ...state,
            recipes: updatedRecipes
        };
    case RecipeActions.DELETE_RECIPE:
        const deletedRecipes = [...state.recipes];
        deletedRecipes.splice(action.payload, 1);
        return {
            ...state,
            recipes: [...deletedRecipes]
        };
    default: return state;
    }
}
