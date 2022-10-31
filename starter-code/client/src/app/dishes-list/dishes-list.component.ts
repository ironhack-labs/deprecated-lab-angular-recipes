import { Component, OnInit } from '@angular/core';
import { DishesService, Dish } from '../dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes: Dish[] = [];

  constructor(
    public apiThing: DishesService
  ) { }

  ngOnInit() {
    this.apiThing.getList()
      .then(( result: Dish[] ) => {
        this.dishes = result;
      })
      .catch(( err ) => {
        console.log( "getList error:", err );
      });
  }

}
