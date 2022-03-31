import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodHomeComponent } from './food-home/food-home.component';

const routes: Routes = [{ path: '', component: FoodHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
