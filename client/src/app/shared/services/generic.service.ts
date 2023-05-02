import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../models/page.model";
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
    return this.httpClient.get<T>(`${this.resourceUrl}/${id}`, {params: RequestUtil.setStandardParams()})
  }

  public findAll<T>(event: any): Observable<Page<T>> {
    let param = RequestUtil.getParamsFromLazyLoadEvent(event);
    return this.httpClient.get<Page<T>>(this.resourceUrl, {params: RequestUtil.setStandardParams(param)})
  }

  public findAllFilter<T>(event: any,filter: any): Observable<Page<T>> {
    let param = RequestUtil.getParamsFromLazyLoadEvent(event);
    return this.httpClient.post<Page<T>>(`${this.resourceUrl}/filter`, filter,{params: RequestUtil.setStandardParams(param)})
  }

  public findAllList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.resourceUrl}/list`, {params: RequestUtil.setStandardParams()})
  }

  public create<T>(model: T): Observable<T> {
    return this.httpClient.post<T>(this.resourceUrl, model, {params: RequestUtil.setStandardParams()})
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.resourceUrl}/${id}`, {params: RequestUtil.setStandardParams()})
  }

  public update<T>(model: T): Observable<T> {
    return this.httpClient.put<T>(this.resourceUrl, model, {params: RequestUtil.setStandardParams()});
  }


}


