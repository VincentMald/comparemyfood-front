import { Component, OnInit } from '@angular/core';
import { Food } from './core/model/food.model';
import { FoodService } from './core/service/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comparemyfood';
  foods: Food[];

  constructor(private foodService: FoodService) {
  }
  ngOnInit() {
    this.foodService.getFoods().subscribe((foods: Food[]) => this.foods = foods);
  }

}
