import {Sort} from "./sort.model";

export class Pageable {
  constructor(
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean,
    sort: Sort
  ) {
  }

}
