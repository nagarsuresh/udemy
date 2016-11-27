import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  name: string;
  subscription: Subscription;
  constructor(private route: ActivatedRoute,
    private rs: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param) => {
        this.name = this.rs.getRecipe(param['id']).name;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
