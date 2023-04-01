import {Component, OnInit} from '@angular/core';
import {SelectModel} from "../../../shared/models/select.model";
import {ExpenseModel} from "../models/expense.model";
import {ExpenseService} from "../service/expense.service";
import {Pageable} from "../../../shared/models/pageable.model";

@Component({
  selector: 'app-month-year-expense',
  templateUrl: './month-year-expense.component.html',
  styleUrls: ['./month-year-expense.component.scss']
})
export class MonthYearExpenseComponent implements OnInit{

  monthYears: SelectModel[] = [
    new SelectModel('january/2022',1),
    new SelectModel('february/2022',2),
  ];

  selectedMonthYear: any = this.monthYears[this.monthYears.length -1];

  expenses: ExpenseModel[] = [];

  constructor(
  ) {
  }

  public onMonthYearChange(event: any): void{

  }

  ngOnInit(): void {
  }

}
