import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    OrdersComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
