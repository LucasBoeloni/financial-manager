export class ExpenseModel{
  constructor(
    public id: number,
    public name: string,
    public value: number,
    public date: Date
  ) {
  }

}
