import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {UserModel} from "../../../shared/models/user.model";

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup = new FormBuilder().group({});
  formBuilder: FormBuilder = new FormBuilder();

  constructor(
    private service: UserService,
  ) {
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  openDialog() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  iniciarForm() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],

    })
  }

  onClose() {
    this.visible = false;
    this.form.reset();
    this.visibleChange.emit(this.visible)
  }

  getuser(): UserModel {
    return this.form.getRawValue() as UserModel;
  }

  save() {
    this.service.create(this.getuser())
      .subscribe(res => {
        sessionStorage.setItem('user', 'true')
        this.onClose()
      });
  }

}
