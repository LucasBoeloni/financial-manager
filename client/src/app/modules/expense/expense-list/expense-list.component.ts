import {Component, Input, OnInit} from '@angular/core';
import {ExpenseModel} from "../models/expense.model";

@Component({
  selector: 'expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit{

  @Input() expenses: ExpenseModel[] = [];
  newExpense = new ExpenseModel(-1,'',0,new Date());

  ngOnInit(): void {
  }

}
