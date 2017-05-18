import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class IngredientsService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getIngredients() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res) => res.json())
  }

  // getSingleIngredient(id){
  //   return this.http.get(`${this.BASE_URL}/api/ingredients/${id}`)
  //     .map((res) => res.json())
  // }

}
