import { Injectable } from '@angular/core';



@Injectable()
export class IngredientsService {
    constructor() {}


 ingredients: object = [
  { name: "kosher salt", },
  { name: "bay leaves" },
  { name: "brown lentils" },
  { name: "parsnips" },
  { name: "sherry vinegar" },
  { name: "baking potatoes" },
  { name: "olive oil" },
  { name: "shallots" },
  { name: "carrots" },
  { name: "fat free less sodium chicken broth" },
  { name: "ground black pepper" },
  { name: "chopped celery" },
  { name: "arborio rice" },
  { name: "olive oil" },
  { name: "dry white wine" },
  { name: "brown butter" },
  { name: "grated parmesan cheese" },
  { name: "vegetable stock" },
]

getList() {
    return this.ingredients
}
}
