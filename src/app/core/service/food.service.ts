import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../model/food.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foods: Food[];

  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get<Food[]>(`${environment.uri}/foods`);
  }
}
