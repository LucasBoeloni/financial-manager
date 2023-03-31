import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthYearExpenseComponent } from './month-year-expense/month-year-expense.component';
import {SharedModule} from "../../shared/shared.module";
import {ExpenseRoutingModule} from "./expense-routing.module";
import {ExpenseCardComponent} from "./expense-card/expense-card.component";



@NgModule({
  declarations: [
    MonthYearExpenseComponent,
    ExpenseCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ExpenseRoutingModule
  ],
  exports: [
    MonthYearExpenseComponent,
    ExpenseCardComponent
  ]
})
export class ExpenseModule { }
