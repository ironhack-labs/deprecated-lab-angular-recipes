import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { not } from '@angular/compiler/src/output/output_ast';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';

// Those are the only routes the users will see, they won't see the backend ones
const routes: Routes = [
  { path: "", component: DishesListComponent },
  { path: "dish/:dishId", component: DishDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
