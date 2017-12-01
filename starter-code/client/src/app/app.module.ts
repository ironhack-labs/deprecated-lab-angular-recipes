import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';

import { RouterModule } from '@angular/router';
import {routes} from './routes';

import { RecipesService } from '../services/recipes.services';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    SingleRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
