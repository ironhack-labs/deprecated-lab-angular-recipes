import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/toPromise';

export interface IDish {
  name: string,
  image: string,
  description: string
}

@Injectable()
export class DishesService {

  constructor(private httpClient: HttpClient) { }

  getAllDishes():Promise<Array<object>> {
    return this.httpClient.get(`Http://localhost:3000/api/dishes`)
    .toPromise()
    .then((dish: Array<IDish>) => dish)
  }

  getDishInfo(name:string):Promise<IDish> {
    return this.httpClient.get(`Http://localhost:3000/api/dishes/${name}`)
    .toPromise()
    .then((dishInfo: IDish) => dishInfo)
  }
}
