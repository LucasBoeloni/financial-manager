import {Component, Input, OnInit} from '@angular/core';
import {RouteNames} from "../../../../shared/utils/rout-enum";
import {Router} from "@angular/router";
import {MonthlyExpenseService} from "../../service/monthly-expense.service";
import {TableEnum} from "../../../../shared/utils/table-enum";


@Component({
  selector: 'monthly-expense-list',
  templateUrl: './monthly-expense-list.component.html',
  styleUrls: ['./monthly-expense-list.component.scss']
})
export class MonthlyExpenseListComponent implements OnInit{


  @Input() currency: string = 'BRL';
  dateFormat: string = 'MM/yyyy';

  monthlyExpense: any;

  rowsPerPage = TableEnum.ROWS_PER_PAGE;

  totalRecords: number;

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

}
