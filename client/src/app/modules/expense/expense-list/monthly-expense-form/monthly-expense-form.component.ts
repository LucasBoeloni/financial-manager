import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MonthlyExpenseService} from "../../service/monthly-expense.service";


@Component({
  selector: 'monthly-expense-form',
  templateUrl: './monthly-expense-form.component.html',
  styleUrls: ['./monthly-expense-form.component.scss']
})
export class MonthlyExpenseFormComponent implements OnInit{

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() currency: string = 'BRL';

  form: FormGroup = new FormBuilder().group({});
  formBuilder: FormBuilder = new FormBuilder();

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

  onSave(){
    if(this.form.valid){
      this.service.create(this.form.getRawValue()).subscribe(() => this.onClose())
    }
  }

}
