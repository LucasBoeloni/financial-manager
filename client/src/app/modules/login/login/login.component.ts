import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ActiveUserService} from "../../../shared/services/active-user.service";
import {UserModel} from "../../../shared/models/user.model";
import {RouteNames} from "../../../rout-enum";
import {UserService} from "../../user/services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormVisible: boolean = false;
  form: FormGroup = new FormBuilder().group({});
  formBuilder: FormBuilder = new FormBuilder();
  private activeUserService: ActiveUserService = ActiveUserService.getInstance();

  constructor(
    private service: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildEmptyForm()
  }

  buildEmptyForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],

    })
  }

  openNewAccountDialog() {
    this.userFormVisible = true;
  }

  getuser(): UserModel {
    return this.form.getRawValue() as UserModel;
  }

  login() {
    this.service.logar(this.getuser())
      .subscribe((res: any) => {
        this.activeUserService.setUser(res);
        this.router.navigateByUrl(RouteNames.DASHBOARD)
      })
  }


}
