import * as moment from "moment";

export class MonthStringUtil {
  public static buildMonthYearString(data: Date): string {
    const year = data.getFullYear();
    const month = data.toLocaleString('en', {month: 'long'});
    return month + '/' + year;
  }

  public static buildMonthYearDate(string: string): Date {
    return moment(string, "MMM/YYYY").toDate();
  }

}
