import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
<<<<<<< HEAD
  @Output() recipeSelected = new EventEmitter<Recipe>();
=======
  @Output() recipeSelected = new EventEmitter<void>();
>>>>>>> 7c7d803d4c863e4afa3dd4608a49333254da4ece
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  onSelect() {
    this.recipeSelected.emit(this.recipe);
=======
  onSelected() {
    console.log('RecipeItemComponent: onSelected');
    this.recipeSelected.emit();
>>>>>>> 7c7d803d4c863e4afa3dd4608a49333254da4ece
  }

}
