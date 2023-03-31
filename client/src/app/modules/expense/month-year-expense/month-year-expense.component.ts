import { Component } from '@angular/core';
import {SelectModel} from "../../../shared/models/select.model";

@Component({
  selector: 'app-month-year-expense',
  templateUrl: './month-year-expense.component.html',
  styleUrls: ['./month-year-expense.component.scss']
})
export class MonthYearExpenseComponent {

  monthYears: SelectModel[] = [
    new SelectModel('january/2022',1),
    new SelectModel('february/2022',2),
  ];

  selectedMonthYear: any = this.monthYears[this.monthYears.length -1];

  public onMonthYearChange(event: any): void{

  }

}
