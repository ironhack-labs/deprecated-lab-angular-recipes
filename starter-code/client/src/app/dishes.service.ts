import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class DishesService {

  constructor(
    private ajaxThing: HttpClient
  ) { }

  getList() {
    return this.ajaxThing
      .get( "http://localhost:3000/api/dishes" )
      .toPromise();
  }

  getDetails( dishId ) {
    return this.ajaxThing
      .get( `http://localhost:3000/api/dish/${ dishId }` )
      .toPromise();
  }
}

export class Dish {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt?: Date; // "?" Makes this property optional
  updatedAt?: Date; // "?" Makes this property optional
}