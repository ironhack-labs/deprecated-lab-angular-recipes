import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';

import { DishesService } from './services/dishes.service'
import { IngredientsService } from './services/ingredients.service'

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: DishesListComponent },
  { path: 'dishes/:dishId', component: DishDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
