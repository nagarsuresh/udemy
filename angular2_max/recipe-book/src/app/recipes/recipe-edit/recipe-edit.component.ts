import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'rb-recipe-edit',
    templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {

    recipeForm: FormGroup;
    recipe: Recipe;
    subscription: Subscription;
    isNew: boolean = true;
    constructor(
        private route: ActivatedRoute,
        private rs: RecipeService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (param) => {
                if (param.hasOwnProperty('id')) {
                    this.isNew = false;
                    this.recipe = this.rs.getRecipe(param['id']);
                } else {
                    this.isNew = true;
                }
                this.initForm();
            });
    }


    initForm(): void {
        let recipeName: string = null;
        let imageUrl: string = null;
        let content: string = null;
        let recipeId:number = null;
        let recipeIngredients: FormArray = new FormArray([]);

        if (!this.isNew) {
            recipeName = this.recipe.name;
            imageUrl = this.recipe.imagePath;
            content = this.recipe.description;
            recipeId = this.recipe.id;

            this.recipe.ingredients.forEach((ing) => {
                recipeIngredients.push(this.fb.group({
                    name: [ing.name, Validators.required],
                    amount: [ing.amount, [Validators.required, Validators.pattern("\\d+")]]
                }))
            });
        }

        this.recipeForm = this.fb.group({
            id : [recipeId],
            name: [recipeName, Validators.required],
            imagePath: [imageUrl, Validators.required],
            description: [content, Validators.required],
            ingredients: recipeIngredients
        });
    }

    onCancel(): void {
        this.goBack();
    }

    private goBack(): void {
        this.router.navigate(['../']);
    }


    onSave(): void {
        var r = this.recipeForm.value;
        if (this.isNew) {
            this.rs.add(r);
            this.goBack();
        } else {
            this.rs.update(r);
            this.goBack();
        }
    }

    onRemoveIngredient(index:number): void{
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);  
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
