import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MonthlyExpenseService} from "../../service/monthly-expense.service";
import {MonthlyExpenseModel} from "../../models/monthly-expense.model";


@Component({
  selector: 'monthly-expense-form',
  templateUrl: './monthly-expense-form.component.html',
  styleUrls: ['./monthly-expense-form.component.scss']
})
export class MonthlyExpenseFormComponent implements OnInit{

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() currency: string = 'BRL';
  @Output() onSave: EventEmitter<MonthlyExpenseModel> = new EventEmitter<MonthlyExpenseModel>();

  form: FormGroup = new FormBuilder().group({});
  formBuilder: FormBuilder = new FormBuilder();

  minDate = new Date();

  constructor(
    private service: MonthlyExpenseService
  ) {
  }

  days: number[] = Array.from({length: 25}, (_, i) => i + 1)

  ngOnInit(): void {
    this.buildEmptyForm()
  }

  buildEmptyForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null],
      day: [this.days[0], [Validators.required]],
      value: [null, [Validators.required]],
    })
  }

  onClose() {
    this.buildEmptyForm();
    this.visible = false;
    this.visibleChange.emit(this.visible)
  }

  save(){
    if(this.form.valid){
      this.service.create(this.form.getRawValue()).subscribe(res => {
        this.onSave.emit(res);
        this.onClose()
      })
    }
  }

}
