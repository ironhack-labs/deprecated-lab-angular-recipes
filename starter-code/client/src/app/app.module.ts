import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryRecipesComponent } from './entry-recipes/entry-recipes.component';
import { RecipesService } from 'service/recipes.service';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EntryRecipesComponent,
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
