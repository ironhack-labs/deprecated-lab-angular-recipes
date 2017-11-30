import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../services/recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(public listRecipes:RecipesService) { }
  myRecipes;
  ngOnInit() {
    this.listRecipes.getAllDishes().subscribe(list =>{
      this.myRecipes = list
    });
  }

}
