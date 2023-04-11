import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpenseModel} from "../../../models/expense.model";
import {ExpenseService} from "../../../service/expense.service";
import {SelectedMonthYearService} from "../../../../../shared/services/selected-month-year.service";
import {ActiveUserService} from "../../../../../shared/services/active-user.service";
import * as moment from "moment";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent {

  @Input() expense: ExpenseModel;
  @Input() currency: string = 'BRL';
  @Input() dateFormat: string = 'dd/MM/yyyy';
  private readonly YEAR_FIX = 2;
  pCalendarDateFormat = this.dateFormat.toLowerCase().substring(0,this.dateFormat.length - this.YEAR_FIX);
  @Input() editing: boolean = false;
  @Output() onNewExpense: EventEmitter<ExpenseModel> = new EventEmitter<ExpenseModel>();
  @Output() onDeleteExpense: EventEmitter<ExpenseModel> = new EventEmitter<ExpenseModel>();
  @Output() onEditExpense: EventEmitter<ExpenseModel> = new EventEmitter<ExpenseModel>();


  isLoadingExpense: boolean = false;

  initialEditExpenseValue: ExpenseModel;

  constructor(
    private service: ExpenseService
  ) {
  }

  toggleEdit(): void {
    this.editing = !this.editing;
    if(this.editing){
      this.initialEditExpenseValue =  Object.assign({},this.expense);
      this.expense.date = moment(this.expense.date).toDate();
    }
  }

  private readonly JOKER_ID = -1;

  isNewExpense(): boolean {
    return this.expense.id === this.JOKER_ID;
  }

  isCreatingNewExpense(): boolean {
    return this.expense.id === 0;
  }

  createNewExpense(): void {
    this.editing = true;
    this.initialEditExpenseValue =  Object.assign({},this.expense);
    this.expense.id = 0;
  }

  labelVisible(): boolean {
    return !(!this.isNewExpense() && !this.editing);
  }

  cancel(): void {
    this.editing = false;
    this.expense = this.initialEditExpenseValue;
    if (this.expense.id === 0) {
      this.expense.id = this.JOKER_ID;
    }
  }

  save(): void {
    this.isLoadingExpense = true
    this.handleRelations();
    const newExpense = this.expense.id === 0;
    this.service.create(this.expense).subscribe(response => {
      this.expense = response;
      this.toggleEdit();
      this.isLoadingExpense = false;
      if(newExpense){
        this.onNewExpense.emit(this.expense);
        this.expense = new ExpenseModel(this.JOKER_ID, '', null, new Date())
      } else {
        this.onEditExpense.emit(this.expense)
      }
    })
  }

  private handleRelations() {
    if (!this.expense.monthYear) {
      this.expense.monthYear = SelectedMonthYearService.getInstance().getMonthYear()?.value;
    }
    if (this.expense.user) {
      this.expense.user = ActiveUserService.getInstance().getUser()
    }
  }

  deleteExpense(){
    this.isLoadingExpense = true;
    this.service.delete(this.expense.id).subscribe(() => {
      this.onDeleteExpense.emit(this.expense)
      this.isLoadingExpense = false;
    })
  }

}
