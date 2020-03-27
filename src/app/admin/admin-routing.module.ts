import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {BillComponent} from './bill/bill.component';
import {AuthGuard} from '../auth.guard';


const routes: Routes = [
  {
    path: 'menu',
    canActivate: [AuthGuard],
    component: MenuComponent
  },
  {
    path: 'bill',
    canActivate: [AuthGuard],
    component: BillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
