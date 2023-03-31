import {NgModule} from '@angular/core';
import {UserService} from "./services/user.service";
import {SharedModule} from "../../shared/shared.module";
import {UserFormComponent} from "./user-form/user-form.component";


@NgModule({
  declarations: [
    UserFormComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserFormComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
