import {SelectModel} from "../models/select.model";

const MONTH_YEAR = 'user';

export class SelectedMonthYearService {
	private static instance: SelectedMonthYearService;

  private constructor(
  ) {
  }
	public static getInstance(): SelectedMonthYearService {
		if (!SelectedMonthYearService.instance) {
			SelectedMonthYearService.instance = new SelectedMonthYearService();
		}

		return SelectedMonthYearService.instance;
	}

	private get selectedMonthYear(): SelectModel | null {
		const monthYear = localStorage.getItem(MONTH_YEAR);
    if(!!monthYear){
      return JSON.parse(monthYear) as SelectModel;
    }
    return null;
	}

	private set selectedMonthYear(selectedMonthYear: SelectModel | null) {
		 localStorage.setItem(MONTH_YEAR,JSON.stringify(selectedMonthYear))
	}

  public setMonthYear(monthYear: SelectModel): void {
    this.selectedMonthYear = monthYear;
  }

  public getMonthYear(): SelectModel | null{
    return this.selectedMonthYear;
  }

}
