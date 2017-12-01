import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/ingredients";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class IngredientService {
  constructor(private http: Http) {}

  getIngredientsList():Observable<any>{
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }

  // getIngredientByID(id):Observable<any>{
  //    return this.http.get(`${BASEURL}/${id}`)
  //                    .map(res => res.json());
  // }
}
