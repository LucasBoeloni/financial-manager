import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthYearExpenseComponent} from './month-year-expense/month-year-expense.component';
import {SharedModule} from "../../shared/shared.module";
import {ExpenseRoutingModule} from "./expense-routing.module";
import {ExpenseCardComponent} from "./month-year-expense/expense-list/expense-card/expense-card.component";
import {ExpenseListComponent} from "./month-year-expense/expense-list/expense-list.component";
import {MonthlyExpenseFormComponent} from "./month-year-expense/monthly-expense-form/monthly-expense-form.component";


@NgModule({
  declarations: [
    MonthYearExpenseComponent,
    ExpenseCardComponent,
    ExpenseListComponent,
    MonthlyExpenseFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ExpenseRoutingModule
  ],
  exports: [
    MonthYearExpenseComponent,
    ExpenseCardComponent,
    ExpenseListComponent,
    MonthlyExpenseFormComponent
  ]
})
export class ExpenseModule {
}
