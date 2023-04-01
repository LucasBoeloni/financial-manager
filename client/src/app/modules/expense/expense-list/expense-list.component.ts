import {Component, Input, OnInit} from '@angular/core';
import {ExpenseModel} from "../models/expense.model";

@Component({
  selector: 'expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit{

  @Input() expenses: ExpenseModel[] = [new ExpenseModel(1,'Car Tires',500.75,new Date())];

  ngOnInit(): void {
    const aux: ExpenseModel[] = this.expenses;
    this.expenses = [];
    this.expenses.push(new ExpenseModel(-1,'',0,new Date()));
    this.expenses.push(...aux)
  }

}
