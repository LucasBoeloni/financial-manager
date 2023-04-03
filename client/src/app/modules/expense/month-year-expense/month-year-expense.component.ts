import {Component, OnInit} from '@angular/core';
import {SelectModel} from "../../../shared/models/select.model";
import {ExpenseModel} from "../models/expense.model";
import {MonthYearService} from "../service/month-year.service";
import {MonthStringUtil} from "../../../shared/utils/month-string-util";
import {SelectedMonthYearService} from "../../../shared/services/selected-month-year.service";
import {ExpenseService} from "../service/expense.service";


@Component({
  selector: 'app-month-year-expense',
  templateUrl: './month-year-expense.component.html',
  styleUrls: ['./month-year-expense.component.scss']
})
export class MonthYearExpenseComponent implements OnInit {

  monthYears: SelectModel[] = [];

  selectedMonthYear: SelectModel;

  expenses: ExpenseModel[] = [];

  loadingExpenses: boolean = true;

  constructor(
    private service: MonthYearService,
    private expenseService: ExpenseService
) {
  }

  public onMonthYearChange(event: any): void {
    if (!!this.selectedMonthYear) {
      this.setMonthYearAndFind();
    }
  }

  private setMonthYearAndFind() {
    SelectedMonthYearService.getInstance().setMonthYear(this.selectedMonthYear);
    this.getExpenses()
  }

  ngOnInit(): void {
    const todayMonthYear: Date = new Date();
    const todayMonthYearString: string = MonthStringUtil.buildMonthYearString(todayMonthYear);
    this.startPage(todayMonthYearString);
  }

  private startPage(todayMonthYearString: string) {
    this.service.findAllList<SelectModel>().subscribe(response => {
      this.monthYears = response;
      if (!this.monthYears.some(month => month.label === todayMonthYearString)) {
        this.createNewMonthYear(todayMonthYearString);
      } else {
        this.selectedMonthYear = this.monthYears[this.monthYears.length - 1];
        this.setMonthYearAndFind()
      }
    })
  }

  private createNewMonthYear(todayMonthYearString: string) {
    this.service.create(new SelectModel(todayMonthYearString, null)).subscribe(response => {
      this.monthYears.push(response);
      this.selectedMonthYear = response;
      this.setMonthYearAndFind()
    })
  }

  private getExpenses(): void{
    this.loadingExpenses = true;
    this.expenseService.findAllList<ExpenseModel>().subscribe(response => {
      this.expenses = response
      this.loadingExpenses = false;
    });
  }

  public addAndRearrangeExpenses(newExpense: ExpenseModel){
    const backup = this.expenses;
    this.expenses = [];
    this.expenses.push(newExpense)
    this.expenses.push(...backup);
  }

}
