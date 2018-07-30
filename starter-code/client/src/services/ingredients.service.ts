import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import "rxjs/add/operator/map";

const url = environment.baseUrl;

@Injectable()
export class IngredientsService {
  constructor(private http: Http) {}
  getIngredients() {
    return this.http.get(`${url}/api/ingredients`).map(res => res.json());
  }
  getIngredientById(id: string) {
    return this.http.get(`${url}/api/ingredients/${id}`).map(res => res.json());
  }
  addIngredient(ingredient){
    return this.http
      .post(`${url}/api/ingredients/`, ingredient)
      .map(res => res.json());
  }
}