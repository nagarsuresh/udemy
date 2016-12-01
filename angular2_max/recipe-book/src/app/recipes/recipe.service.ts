import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(0, 'Schnitzel', 'Very tasty', 'http://www.texaschicken.com.sg/menu/sides-french-fries.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe(1, 'Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
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

  add(r: Recipe): void {
    r.id = this.recipes.length;
    this.recipes.push(r);
  }

  update(updated: Recipe) {
    var old = this.getRecipe(updated.id);
    this.recipes[this.recipes.indexOf(old)] = updated;
  }

}
