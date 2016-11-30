import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(10, 'Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe(20, 'Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient("Kale", 1),
      new Ingredient("Melon", 1)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    var recipe: Recipe = null;
    this.recipes.forEach((r) => {
      if (r.id == id) {
        recipe = r;
        return false;
      }
    });
    return recipe;
  }

  delete(recipe: Recipe): void {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
