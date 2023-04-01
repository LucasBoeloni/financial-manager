import {SelectedMonthYearService} from "../../../shared/services/selected-month-year.service";

export class ExpenseModel{
  constructor(
    public id: number,
    public name: string,
    public value: number,
    public date: Date,
    public monthYear: number | null = SelectedMonthYearService.getInstance().getMonthYear()?.value
  ) {
  }

}
