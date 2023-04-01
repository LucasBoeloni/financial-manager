import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GenericService} from "../../../shared/services/generic.service";
import {SelectModel} from "../../../shared/models/select.model";
import {ActiveUserService} from "../../../shared/services/active-user.service";

@Injectable({
  providedIn: 'root'
})
export class MonthYearService extends GenericService {

  constructor(httpCliente: HttpClient) {
    super(httpCliente, 'month-year');
  }

  public getAllUnpaged(): Observable<SelectModel[]> {
    return this.httpClient.get<SelectModel[]>(`${this.resourceUrl}/unpaged`, {params: {user: JSON.stringify(ActiveUserService.getInstance().getUser()?.id)}});
  }

}
