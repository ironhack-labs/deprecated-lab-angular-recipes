import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from "@angular/router";
import { RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { AppComponent } from './app.component';

import { RecipesService } from './services/recipes.service';
import { IngredientsService } from './services/ingredients.service';

import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: DishListComponent },
  { path: 'dish/:id', component: DishCardComponent },
  { path: 'ingredients', component: IngredientListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishCardComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
