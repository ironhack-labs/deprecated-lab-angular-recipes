import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishesService, Dish } from '../dishes.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dishId: string;
  dish: Dish;
  
  constructor(
    private reqThing: ActivatedRoute,
    private apiThing: DishesService,
    private resThing: Router
  ) { }

  ngOnInit() {
    this.reqThing.paramMap
      .subscribe(( myParams ) => {
        this.dishId = myParams.get( "dishId" );

        this.fetchDishData();
      })
  }

  fetchDishData() {
    this.apiThing.getDetails( this.dishId )
      .then(( result: Dish ) => {
        this.dish = result;
      })
      .catch(( err ) => {
        console.log( "fetchData Error:", err );
      })
  }

}
