import {Component, Input, OnInit} from '@angular/core';
import {RouteNames} from "../../../../shared/utils/rout-enum";
import {Router} from "@angular/router";
import {MonthlyExpenseService} from "../../service/monthly-expense.service";
import {TableEnum} from "../../../../shared/utils/table-enum";
import * as moment from "moment";


@Component({
  selector: 'monthly-expense-list',
  templateUrl: './monthly-expense-list.component.html',
  styleUrls: ['./monthly-expense-list.component.scss']
})
export class MonthlyExpenseListComponent implements OnInit{


  @Input() currency: string = 'BRL';
  dateFormat: string = 'MM/yyyy';

  readonly ACTION_COLUMN_FIX = 1;

  monthlyExpenseEdit: any;

  days: number[] = Array.from({length: 25}, (_, i) => i + 1)

  rowsPerPage = TableEnum.ROWS_PER_PAGE;

  totalRecords: number;

  monthlyExpenseVisible: boolean = false;

  constructor(
    private router: Router,
    private service: MonthlyExpenseService

  ) {
  }

  cols: any[] = [
    {header: 'Name', field:'name'},
    {header: 'Price', field:'value'},
    {header: 'Start Date', field:'startDate'},
    {header: 'End Date', field:'endDate'},
    {header: 'Day', field:'day'},
  ];

  monthlyExpenses: any[] = [];

  loader: boolean = true;


  ngOnInit(): void {
  }

  getMonthlyExpenses(event: any){
    this.loader = true;
    this.service.findAll(event).subscribe(res => {
      this.monthlyExpenses = res.content;
      this.totalRecords = res.totalElements;
    })
  }

  goToExpenses(){
    this.router.navigateByUrl(RouteNames.EXPENSE);
  }

  onRowEditInit(value: any, index: number){
    this.monthlyExpenseEdit = Object.assign({},value);
    this.monthlyExpenses[index].startDate = moment(this.monthlyExpenses[index].startDate).toDate();
    this.monthlyExpenses[index].endDate = moment(this.monthlyExpenses[index].endDate).toDate();
  }

  onRowEditSave(value: any, index: number){
    this.service.update(value).subscribe(() => {},(error) => this.onRowEditCancel(value, index))
  }

  onRowDelete(value: any, index: number){
    this.service.delete(value.id).subscribe(() => {
      this.monthlyExpenses.splice(index,1);
    })
  }

  onRowEditCancel(value: any, index: number){
    this.monthlyExpenses[index] = this.monthlyExpenseEdit
  }

  openMonthlyExpense(){
    this.monthlyExpenseVisible = true;
  }

}
