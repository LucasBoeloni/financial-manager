import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../models/page.model";
import {ActiveUserService} from "./active-user.service";
import {SelectedMonthYearService} from "./selected-month-year.service";

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
    return this.httpClient.get<T>(`${this.resourceUrl}/${id}`,{params: this.standardParams})
  }

  public findAll<T>(): Observable<Page<T>> {
    return this.httpClient.get<Page<T>>(this.resourceUrl, {params: this.standardParams})
  }

  public findAllList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.resourceUrl}/list`, {params: this.standardParams})
  }

  public create<T>(model: T): Observable<T> {
    return this.httpClient.post<T>(this.resourceUrl, model, {params: this.standardParams})
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.resourceUrl}/${id}`,{params: this.standardParams})
  }

  public update<T>(model: T): Observable<T> {
    return this.httpClient.put<T>(this.resourceUrl, model,{params: this.standardParams});
  }

  private get standardParams(): HttpParams{
    return new HttpParams().set('user', JSON.stringify(ActiveUserService.getInstance().getUser()?.id))
      .set('monthYear', JSON.stringify(SelectedMonthYearService.getInstance().getMonthYear()?.value));
  }

}


