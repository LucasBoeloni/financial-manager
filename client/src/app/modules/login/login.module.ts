import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {UserModule} from "../user/user.module";
import {LoginRoutingModule} from "./login-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    UserModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {
}
