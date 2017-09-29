import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { DishesService} from '../services/dishes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.css']
})
export class DishesDetailsComponent implements OnInit {
dish;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesservice: DishesService
) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.getDishesDetails(params['id'])

    })
  }


    getDishesDetails(id) {
      this.dishesservice.get(id)
        .subscribe((dish) => {
          this.dish = dish;
        });

}
}
