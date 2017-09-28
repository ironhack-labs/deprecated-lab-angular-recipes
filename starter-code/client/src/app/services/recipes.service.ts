import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class RecipesService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dishes`)
      .map((res: Response) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
      .map((res) => res.json());
  }


}
