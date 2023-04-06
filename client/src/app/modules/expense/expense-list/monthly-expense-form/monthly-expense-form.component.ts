import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpenseService} from "../../service/expense.service";


@Component({
  selector: 'monthly-expense-form',
  templateUrl: './monthly-expense-form.component.html',
  styleUrls: ['./monthly-expense-form.component.scss']
})
export class MonthlyExpenseFormComponent {

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private service: ExpenseService
  ) {
  }

  onClose() {
    this.visible = false;
    this.visibleChange.emit(this.visible)
  }

}
