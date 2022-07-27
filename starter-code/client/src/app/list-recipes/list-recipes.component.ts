import { Component, OnInit } from '@angular/core';
import { DishesService, IDish } from 'app/dishes.service';


@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  allDishesInfo: Array<IDish>
  
  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getAllDishes().then((dishes: Array<IDish> ) => {
      this.allDishesInfo = dishes;
    })
  }

}
