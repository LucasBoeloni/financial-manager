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
    return this.httpClient.get<T>(`${this.resourceUrl}/${id}`)
  }

  public findAll<T>(event: any): Observable<Page<T>> {
    let param = RequestUtil.getParamsFromLazyLoadEvent(event);
    return this.httpClient.get<Page<T>>(this.resourceUrl, {params: param})
  }

  public findAllList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.resourceUrl}/list`)
  }

  public create<T>(model: T): Observable<T> {
    return this.httpClient.post<T>(this.resourceUrl, model)
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.resourceUrl}/${id}`)
  }

  public update<T>(model: T): Observable<T> {
    return this.httpClient.put<T>(this.resourceUrl, model);
  }


}


