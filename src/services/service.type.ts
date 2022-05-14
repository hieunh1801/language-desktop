export enum FetchStatusEnum {
  IDLE = "IDLE",
  FETCHING = "FETCHING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

export interface QueryOptions {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order: string; // asc | desc
}

export interface ListDataResponse<T> {
  data: T[];
  total: number;
}
