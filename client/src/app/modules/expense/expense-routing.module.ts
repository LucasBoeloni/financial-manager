import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonthYearExpenseComponent} from "./month-year-expense/month-year-expense.component";


const routes: Routes = [
  {
    path: '',
    component: MonthYearExpenseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule {
}
