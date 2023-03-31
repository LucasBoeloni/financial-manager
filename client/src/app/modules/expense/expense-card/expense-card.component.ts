import {Component, Input} from '@angular/core';
import {ExpenseModel} from "../models/expense.model";

@Component({
  selector: 'expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent {

  @Input() expense: ExpenseModel = new ExpenseModel(1,'aaaa',52.5,new Date())
  @Input() currency: string = 'BRL';
  @Input() dateFormat: string = 'dd/MM/YYYY';


}
