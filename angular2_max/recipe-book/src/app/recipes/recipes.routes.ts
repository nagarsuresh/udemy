import { Route } from '@angular/router';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const RECIPE_ROUTES: Route[] = [
    {
        path: '',
        component: RecipeStartComponent
    },
    {
        path: 'new',
        component: RecipeDetailComponent
    },
    {
        path: ':id',
        component: RecipeDetailComponent
    },
    {
        path: ':id/edit',
        component: RecipeEditComponent
    }
]