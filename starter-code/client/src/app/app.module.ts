import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing';

import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { DishesService } from './dishes.service';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ListRecipesComponent },
  { path: 'dishes/:dishesID',  component: DetailsComponent },
  // { path: 'about', component: MyAboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
