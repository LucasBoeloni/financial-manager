import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'monthly-expense-form',
  templateUrl: './monthly-expense-form.component.html',
  styleUrls: ['./monthly-expense-form.component.scss']
})
export class MonthlyExpenseFormComponent implements OnInit{

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup = new FormBuilder().group({});
  formBuilder: FormBuilder = new FormBuilder();

  constructor(
    private service: ExpenseService
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
      day: [null, [Validators.required]],
    })
  }

  onClose() {
    this.visible = false;
    this.visibleChange.emit(this.visible)
  }

}
