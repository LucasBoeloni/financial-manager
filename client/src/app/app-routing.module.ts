import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteNames} from "./rout-enum";
import {LoginModule} from "./modules/login/login.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {ExpenseModule} from "./modules/expense/expense.module";
import {GoalModule} from "./modules/goal/goal.module";

const routes: Routes = [
  {
    path: RouteNames.LOGIN,
    loadChildren: () => LoginModule
  },
  {
    path: RouteNames.DASHBOARD,
    loadChildren: () => DashboardModule
  },
  {
    path: RouteNames.EXPENSE,
    loadChildren: () => ExpenseModule
  },
  {
    path: RouteNames.GOAL,
    loadChildren: () => GoalModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
