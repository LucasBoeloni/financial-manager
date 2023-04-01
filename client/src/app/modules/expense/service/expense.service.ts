import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GenericService} from "../../../shared/services/generic.service";
import {UserModel} from "../../../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends GenericService {

  constructor(httpCliente: HttpClient) {
    super(httpCliente, 'expenses');
  }

}
