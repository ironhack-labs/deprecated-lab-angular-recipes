import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "environments/environment";
import "rxjs/add/operator/map";

const url = environment.BASEURL;

@Injectable()
export class IngrediensService {
  constructor(private http: Http) {}

  getIngredients() {
    return this.http.get(`${url}/api/ingredients`).map(res => res.json());
  }

  getIngredientById(id: string) {
    return this.http.get(`${url}/api/ingredients/${id}`).map(res => res.json());
  }
}
