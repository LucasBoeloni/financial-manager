import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {GenericService} from "../../../services/generic.service";
import {UserModel} from "../../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService {

  constructor(httpCliente: HttpClient) {
    super(httpCliente, 'users');
  }
  public logar(model: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(`${this.resourceUrl}/login`, model)
  }

}
