import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Steak', 'Yummy Steak Dinner', 'https://www.goodfreephotos.com/albums/food/yummy-steak-dinner.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Pasta', 'Pasta Carbonara', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Pasta_alla_carbonara.png/800px-Pasta_alla_carbonara.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
