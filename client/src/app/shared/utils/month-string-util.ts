export class MonthStringUtil {
  public static buildMonthYearString(data: Date): string {
    const year = data.getFullYear();
    const month = data.toLocaleString('en', {month: 'long'});
    return month + '/' + year;
  }

}
