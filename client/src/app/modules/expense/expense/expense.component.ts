import { Component } from '@angular/core';
import {SelectModel} from "../../../shared/models/select.model";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {

  monthYears: SelectModel[] = [
    new SelectModel('january/2022',1),
    new SelectModel('february/2022',2),
  ];

  selectedMonthYear: any = this.monthYears[this.monthYears.length -1];

  public onMonthYearChange(event: any): void{

  }

}
