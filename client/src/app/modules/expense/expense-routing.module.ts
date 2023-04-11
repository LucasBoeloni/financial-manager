import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonthYearExpenseComponent} from "./month-year-expense/month-year-expense.component";
import {MonthlyExpenseListComponent} from "./month-year-expense/monthly-expense-list/monthly-expense-list.component";


const routes: Routes = [
  {
    path: '',
    component: MonthYearExpenseComponent
  },
  {
    path: 'monthly-expense',
    component: MonthlyExpenseListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule {
}
