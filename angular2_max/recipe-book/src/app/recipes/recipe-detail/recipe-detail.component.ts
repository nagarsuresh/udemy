import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';


import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  subscription: Subscription;

  constructor(
    private sls: ShoppingListService,
    private rs: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.selectedRecipe = this.rs.getRecipe(param['id']);
      }
    )
  }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
    this.router.navigate(['/shopping-list'], { queryParams: { recipeId: this.selectedRecipe.id } });
  }

  onEdit(): void {
    this.router.navigate(['/recipes', this.selectedRecipe.id, 'edit']);
  }

  onDelete(): void {
    this.rs.delete(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
