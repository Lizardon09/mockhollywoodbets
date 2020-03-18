import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SoccergamesComponent} from './soccergames/soccergames.component';

const routes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'soccergames', component: SoccergamesComponent},
  {path:'',redirectTo:'/soccergames',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
