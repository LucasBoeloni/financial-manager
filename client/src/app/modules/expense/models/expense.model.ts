import {SelectedMonthYearService} from "../../../shared/services/selected-month-year.service";
import {UserModel} from "../../../shared/models/user.model";
import {ActiveUserService} from "../../../shared/services/active-user.service";

export class ExpenseModel{
  constructor(
    public id: number,
    public name: string,
    public value: number,
    public date: Date,
    public monthYear: number | null = SelectedMonthYearService.getInstance().getMonthYear()?.value,
    public user: UserModel | null = ActiveUserService.getInstance().getUser()
  ) {
  }

}
