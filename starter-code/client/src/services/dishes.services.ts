import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class dishesService {
    constructor(private http: Http) { }
    getDishes() {
        return this.http.get('http://localhost:3000/api/dishes')
          .map((res) => res.json());
      }
    
      getDish(id){
        return this.http.get(`http://localhost:3000/api/dishes/${id}`)
          .map((res) => res.json());
      }
    
      getIngredients(){
        return this.http.get('http://localhost:3000/api/ingredients')
        .map((res) => res.json());
      }
    
      addIngredient(dishId, ingredientId, quantity){
        return this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity})
        .map((res) => res.json());
      }
    }
    

