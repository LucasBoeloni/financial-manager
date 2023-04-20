import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../models/page.model";
import {ActiveUserService} from "./active-user.service";
import {SelectedMonthYearService} from "./selected-month-year.service";
import {RequestUtil} from "../utils/request.util";

export abstract class GenericService {

  httpClient: HttpClient;
  entity: string;
  resourceUrl: string;

  protected constructor(httpClient: HttpClient, entity: string) {
    this.httpClient = httpClient;
    this.entity = entity;
    this.resourceUrl = environment.serviceUrl + environment.apiUrl + '/' + this.entity;
  }

  public findById<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.resourceUrl}/${id}`, {params: this.setStandardParams()})
  }

  public findAll<T>(event: any): Observable<Page<T>> {
    let param = RequestUtil.getParamsFromLazyLoadEvent(event);
    return this.httpClient.get<Page<T>>(this.resourceUrl, {params: this.setStandardParams(param)})
  }

  public findAllList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.resourceUrl}/list`, {params: this.setStandardParams()})
  }

  public create<T>(model: T): Observable<T> {
    return this.httpClient.post<T>(this.resourceUrl, model, {params: this.setStandardParams()})
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.resourceUrl}/${id}`, {params: this.setStandardParams()})
  }

  public update<T>(model: T): Observable<T> {
    return this.httpClient.put<T>(this.resourceUrl, model, {params: this.setStandardParams()});
  }

  private setStandardParams(param?: HttpParams): HttpParams {
    if (!param) {
      param = new HttpParams();
    }
    return param.set('user', JSON.stringify(ActiveUserService.getInstance().getUser()?.id))
      .set('monthYear', JSON.stringify(SelectedMonthYearService.getInstance().getMonthYear()?.value));
  }

}


