import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BillComponent } from './bill/bill.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations: [BillComponent, MenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
