import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CosicasPaCosinarloService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
    
  getIngredients() {
    return this.http.get(`${this.BASE_URL}/api/ingredients`)
      .map((res) => res.json());
  }
}