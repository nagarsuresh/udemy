import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from "../shared";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  subscription: Subscription;
  items: Ingredient[] = [];
  selectedItem: Ingredient;
  selectedRecipeId: string = null;

  constructor(private sls: ShoppingListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = this.sls.getItems();
    this.subscription = this.route.queryParams.subscribe(
      (params) => {
        this.selectedRecipeId = params['recipeId'];
      }
    )
  }

  onBack(): void {
    if (this.selectedRecipeId) {
      this.router.navigate(['/recipes', this.selectedRecipeId]);
    } else {
      this.router.navigate(['/recipes']);
    }
  }

  onItemSelect(item: Ingredient): void {
    this.selectedItem = item;
  }

  onClear(): void {
    this.selectedItem = null;
  }


}
