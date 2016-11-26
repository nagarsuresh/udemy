import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe: Recipe = new Recipe("Apple", "Apple", "http://icons.iconarchive.com/icons/graphicloads/100-flat/128/camera-icon.png")

  constructor() { }

  ngOnInit() {
  }

  onSelected(selectedRecipe: Recipe): void {
    this.recipeSelected.emit(selectedRecipe);
  }

}
