import {Pageable} from "./pageable.model";

export class Page<T> {
  constructor(
    public content: T[] = [],
    public last: boolean,
    public totalElements: number,
    public totalPages: number,
    public size: number,
    public number: number,
    public numberOfElements: number,
    public sort: string,
    public first: boolean,
    public pageable: Pageable
  ) {
  }

}
