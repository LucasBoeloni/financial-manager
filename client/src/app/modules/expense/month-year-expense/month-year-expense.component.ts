import {Component, OnInit} from '@angular/core';
import {SelectModel} from "../../../shared/models/select.model";
import {ExpenseModel} from "../models/expense.model";
import {MonthYearService} from "../service/month-year.service";
import {MonthStringUtil} from "../../../shared/utils/month-string-util";
import {SelectedMonthYearService} from "../../../shared/services/selected-month-year.service";


@Component({
  selector: 'app-month-year-expense',
  templateUrl: './month-year-expense.component.html',
  styleUrls: ['./month-year-expense.component.scss']
})
export class MonthYearExpenseComponent implements OnInit{

  monthYears: SelectModel[] = [];

  selectedMonthYear: SelectModel;

  expenses: ExpenseModel[] = [];

  loadingExpenses: boolean = true;

  constructor(
    private service: MonthYearService
  ) {
  }

  public onMonthYearChange(event: any): void{
    if(!!this.selectedMonthYear){
      SelectedMonthYearService.getInstance().setMonthYear(this.selectedMonthYear);
    }
  }

  ngOnInit(): void {
    const todayMonthYear: Date = new Date();
    const todayMonthYearString: string = MonthStringUtil.buildMonthYearString(todayMonthYear);
    this.handleMonthYearDropDown(todayMonthYearString);
  }

  private handleMonthYearDropDown(todayMonthYearString: string) {
    this.service.getAllUnpaged().subscribe(response => {
      this.monthYears = response;
      if (!this.monthYears.some(month => month.label === todayMonthYearString)) {
        this.createNewMonthYear(todayMonthYearString);
      }else {
        this.selectedMonthYear = this.monthYears[this.monthYears.length -1];
      }
    })
  }

  private createNewMonthYear(todayMonthYearString: string) {
    this.service.create(new SelectModel(todayMonthYearString, null)).subscribe(response => {
      this.monthYears.push(response);
      this.selectedMonthYear = response;
      SelectedMonthYearService.getInstance().setMonthYear(this.selectedMonthYear);
    })
  }
}
