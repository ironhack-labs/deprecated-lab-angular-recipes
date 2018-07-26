import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const { baseUrl } = environment;

interface Ingredient {
  name: string,
  quantity: number
}

export interface Recipe {
  name: string,
  image: string,
  description: string,
  ingredientes: Array<Ingredient>
}

@Injectable()
export class RecipesService {

    constructor(private http: Http) { }

    getDishes():Observable<Array<Recipe>> {
      return this.http.get(`${baseUrl}/api/dishes`).map((res) => res.json());
    }

    getDish(id):Observable<Recipe> {
      return this.http.get(`${baseUrl}/api/dishes/${id}`).map((res) => res.json());
    }
    
}