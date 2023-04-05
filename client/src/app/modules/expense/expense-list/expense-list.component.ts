import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpenseModel} from "../models/expense.model";

@Component({
  selector: 'expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

  @Input() expenses: ExpenseModel[] = [];
  newExpense = new ExpenseModel(-1, '', 0, new Date());
  @Output() onNewExpense: EventEmitter<ExpenseModel> = new EventEmitter<ExpenseModel>();
  @Output() onDeleteExpense: EventEmitter<ExpenseModel> = new EventEmitter<ExpenseModel>();
  @Output() onEditExpense: EventEmitter<ExpenseModel> = new EventEmitter<ExpenseModel>();

  ngOnInit(): void {
  }

  onNewExpenseEmitter(event: ExpenseModel){
    this.onNewExpense.emit(event)
  }

  onEditExpenseEmitter(event: ExpenseModel){
    this.onEditExpense.emit(event)
  }

  onDeleteExpenseEmitter(event: ExpenseModel){
    this.onDeleteExpense.emit(event)
  }

}
