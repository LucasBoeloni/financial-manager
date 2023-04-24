import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {GenericService} from "../../../shared/services/generic.service";
import {Observable} from "rxjs";
import {RequestUtil} from "../../../shared/utils/request.util";
import {DataExpenseModel} from "../models/data-expense.model";

@Injectable({
  providedIn: 'root'
})
export class MonthlyExpenseService extends GenericService {

  constructor(httpCliente: HttpClient) {
    super(httpCliente, 'monthly-expenses');
  }

  public getData(): Observable<DataExpenseModel> {
    return this.httpClient.get<DataExpenseModel>(`${this.resourceUrl}/get-data` , {params: RequestUtil.setStandardParams()})
  }
}
