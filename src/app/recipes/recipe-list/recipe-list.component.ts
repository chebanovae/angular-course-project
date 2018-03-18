import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Steak', 'Yummy Steak Dinner', 'https://www.goodfreephotos.com/albums/food/yummy-steak-dinner.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Pasta', 'Pasta Carbonara', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Pasta_alla_carbonara.png/800px-Pasta_alla_carbonara.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeItemSelected(recipe: Recipe) {
    console.log('About to emit event: RecipeListComponent.onRecipeItemSelected: ' + recipe.name);
    this.recipeItemSelected.emit(recipe);
  }

}
