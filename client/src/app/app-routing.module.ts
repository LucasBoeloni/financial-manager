import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteNames} from "./rout-enum";
import {LoginModule} from "./shared/modules/login/login.module";

const routes: Routes = [
  {
    path: RouteNames.ROUT_LOGIN,
    loadChildren: () => LoginModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
