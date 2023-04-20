
export class MonthlyExpenseModel {
  constructor(
    public id: number,
    public name: string,
    public value: number,
    public startDate: Date,
    public endDate: Date | null,
    public day: number,
  ) {
  }

}
