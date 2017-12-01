import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    { path: '**', redirectTo: '' }
];
