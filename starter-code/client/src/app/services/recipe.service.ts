import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeService {
  API_URL = 'http://localhost:3000/api';

  constructor(private http: Http) {}

  getRecipes(): Promise<any> {
    return this.http
      .get(`${this.API_URL}/dishes`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getRecipe(id): Promise<any> {
    return this.http
      .get(`${this.API_URL}/dishes/${id}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  addIngredientToRecipe(ingredientID, qty, recipeID): Promise<any> {
    return this.http
      .post(`${this.API_URL}/dishes/${recipeID}/ingredients/${ingredientID}/add`, {quantity: qty})
      .toPromise()
      .then((res: Response) => res.json());
  }
}
