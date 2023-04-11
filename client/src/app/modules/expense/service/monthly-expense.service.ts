import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {GenericService} from "../../../shared/services/generic.service";

@Injectable({
  providedIn: 'root'
})
export class MonthlyExpenseService extends GenericService {

  constructor(httpCliente: HttpClient) {
    super(httpCliente, 'monthly-expenses');
  }

}
