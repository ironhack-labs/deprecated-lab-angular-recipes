import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesService } from './dishes.service';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { AppRoutingModule } from './app-routing';

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
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [ DishesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
