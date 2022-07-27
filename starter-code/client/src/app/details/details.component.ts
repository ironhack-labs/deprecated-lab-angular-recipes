import { Component, OnInit } from '@angular/core';
import { DishesService, IDish } from 'app/dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dishInfo:IDish;


  constructor(private dishesService: DishesService, private route: ActivatedRoute) {
    this.dishInfo = {name:"", image:"", description:""}
   }

  ngOnInit() {
    this.route.params.subscribe((params) => {
  
      this.dishesService.getDishInfo(params['dishesID']).then((dish:IDish) => {
        this.dishInfo = dish;
    })
    })
  }
}
