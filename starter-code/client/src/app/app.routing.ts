import { Routes } from '@angular/router';

import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeComponent } from './components/recipe/recipe.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: '**', redirectTo: '' }
];