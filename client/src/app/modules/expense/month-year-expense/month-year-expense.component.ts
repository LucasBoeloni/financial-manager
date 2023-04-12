import {Component, OnInit} from '@angular/core';
import {SelectModel} from "../../../shared/models/select.model";
import {ExpenseModel} from "../models/expense.model";
import {MonthYearService} from "../service/month-year.service";
import {MonthStringUtil} from "../../../shared/utils/month-string-util";
import {SelectedMonthYearService} from "../../../shared/services/selected-month-year.service";
import {ExpenseService} from "../service/expense.service";
import {DataExpenseModel} from "../models/data-expense.model";
import {RouteNames} from "../../../shared/utils/rout-enum";
import {Router} from "@angular/router";


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

  data: DataExpenseModel = new DataExpenseModel();

  currency: string = 'BRL';

  monthlyExpenseVisible: boolean = false;

  constructor(
    private service: MonthYearService,
    private expenseService: ExpenseService,
    private router: Router,
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

  openMonthlyExpense(){
    this.monthlyExpenseVisible = true;
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
      this.refreshData();
      this.loadingExpenses = false;
    });
  }

  public addAndRearrangeExpenses(newExpense: ExpenseModel){
    const backup = this.expenses;
    this.expenses = [];
    this.expenses.push(newExpense)
    this.expenses.push(...backup);
    this.refreshData();
  }

  public removeAndRearrangeExpenses(oldExpense: ExpenseModel){
    this.expenses.splice(this.expenses.indexOf(oldExpense), 1);
    this.refreshData();
  }

  refreshData(){
    const initialValue = 0;
    const total: number = this.expenses.map(expense => !!expense.value ? expense.value : 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    this.data.amount = this.expenses.length;
    this.data.total = total;
  }

  goToMonthlyExpenseView(){
    this.router.navigateByUrl(RouteNames.MONTHLY_EXPENSE);
  }

}
