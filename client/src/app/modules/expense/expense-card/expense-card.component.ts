import {Component, Input} from '@angular/core';
import {ExpenseModel} from "../models/expense.model";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent {

  @Input() expense: ExpenseModel;
  @Input() currency: string = 'BRL';
  @Input() dateFormat: string = 'dd/MM/YYYY';
  @Input() editing: boolean = false;

  toggleEdit(): void{
    this.editing = !this.editing;
  }

  isNewExpense(): boolean {
    return this.expense.id === -1;
  }

  isCreatingNewExpense(): boolean {
    return this.expense.id === 0;
  }

  createNewExpense(): void{
    this.editing = true;
    this.expense.id = 0;
  }

  labelVisible(): boolean {
    return !(!this.isNewExpense() && !this.editing);
  }

  cancel(): void {
    this.editing = false;
    if(this.expense.id === 0){
      this.expense.id = -1;
    }
  }

  save(): void {
    //TODO : do save toggle edit, after request is complete
    this.toggleEdit();
  }

}
