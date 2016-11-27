import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../recipes/ingredient';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  subscription:Subscription;
  items: Ingredient[] = [];
  selectedRecipeId:string = null;

  constructor(private sls: ShoppingListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = this.sls.getItems();
    this.subscription = this.route.queryParams.subscribe(
      (params) => {
        this.selectedRecipeId = params['recipeId'];
      }
    )
  }

  onBack():void{
    if(this.selectedRecipeId){
      this.router.navigate(['/recipes', this.selectedRecipeId]);
    } else {
      this.router.navigate(['/recipes']);
    }
  }


}
