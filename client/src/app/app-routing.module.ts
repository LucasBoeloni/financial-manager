import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteNames} from "./rout-enum";
import {LoginModule} from "./modules/login/login.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";

const routes: Routes = [
  {
    path: RouteNames.ROUT_LOGIN,
    loadChildren: () => LoginModule
  },
  {
    path: RouteNames.ROUT_DASHBOARD,
    loadChildren: () => DashboardModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
