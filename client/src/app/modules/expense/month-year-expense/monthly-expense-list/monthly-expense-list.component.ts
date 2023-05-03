import {Component, Input, OnInit} from '@angular/core';
import {RouteNames} from "../../../../shared/utils/rout-enum";
import {Router} from "@angular/router";
import {MonthlyExpenseService} from "../../service/monthly-expense.service";
import {TableEnum} from "../../../../shared/utils/table-enum";
import * as moment from "moment";
import {MonthlyExpenseModel} from "../../models/monthly-expense.model";
import {DataExpenseModel} from "../../models/data-expense.model";


@Component({
  selector: 'monthly-expense-list',
  templateUrl: './monthly-expense-list.component.html',
  styleUrls: ['./monthly-expense-list.component.scss']
})
export class MonthlyExpenseListComponent implements OnInit {


  @Input() currency: string = 'BRL';
  dateFormat: string = 'MM/yyyy';

  readonly ACTION_COLUMN_FIX = 1;

  monthlyExpenseEdit: MonthlyExpenseModel;

  days: any[] = [null].concat(Array.from({length: 25}, (_, i) => i + 1) as any)

  rowsPerPage = TableEnum.ROWS_PER_PAGE;

  totalRecords: number;

  data: DataExpenseModel = new DataExpenseModel();

  monthlyExpenseVisible: boolean = false;
  cols: any[] = [
    {header: 'Name', field: 'name'},
    {header: 'Price', field: 'value'},
    {header: 'Start Date', field: 'startDate'},
    {header: 'End Date', field: 'endDate'},
    {header: 'Day', field: 'day'},
  ];
  monthlyExpenses: MonthlyExpenseModel[] = [];
  loader: boolean = true;
  loaderData: boolean = true;

  filter: MonthlyExpenseModel = new MonthlyExpenseModel();

  constructor(
    private router: Router,
    private service: MonthlyExpenseService
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loaderData = true;
    this.service.getData().subscribe(res => {
      this.data = res
      this.loaderData = false;
    })
  }

  getMonthlyExpenses(event: any = null) {
    this.loader = true;
    this.service.findAllFilter<MonthlyExpenseModel>(event,this.filter).subscribe(res => {
      this.monthlyExpenses = res.content;
      this.totalRecords = res.totalElements;
      this.loader = false;
    })
  }

  goToExpenses() {
    this.router.navigateByUrl(RouteNames.EXPENSE);
  }

  onRowEditInit(value: MonthlyExpenseModel, index: number) {
    this.monthlyExpenseEdit = Object.assign({}, value);
    this.monthlyExpenses[index].startDate = moment(this.monthlyExpenses[index].startDate).toDate();
    if (!!this.monthlyExpenses[index].endDate) {
      this.monthlyExpenses[index].endDate = moment(this.monthlyExpenses[index].endDate).toDate();
    }
  }

  onRowEditSave(value: MonthlyExpenseModel, index: number) {
    this.service.update(value).subscribe(() => {
    }, (error) => this.onRowEditCancel(value, index))
  }

  onRowDelete(value: MonthlyExpenseModel, index: number) {
    this.service.delete(value.id).subscribe(() => {
      this.monthlyExpenses.splice(index, 1);
    })
  }

  onRowEditCancel(value: MonthlyExpenseModel, index: number) {
    this.monthlyExpenses[index] = this.monthlyExpenseEdit
  }

  openMonthlyExpense() {
    this.monthlyExpenseVisible = true;
  }

  pushNewExpense(newMonthlyExpense: MonthlyExpenseModel) {
    const aux: MonthlyExpenseModel[] = this.monthlyExpenses;
    aux.push(newMonthlyExpense);
    this.monthlyExpenses = aux;
  }

}
