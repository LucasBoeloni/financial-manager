import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import {SharedModule} from "../../shared/shared.module";
import {ExpenseRoutingModule} from "./expense-routing.module";



@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ExpenseRoutingModule
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseModule { }
