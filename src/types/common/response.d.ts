export interface ResponsePage<T> {
  code: number;
  success: boolean;
  message: string;
  meta: Meta;
  payload: T[];
}
export interface Meta {
  limit?: number;
  page?: number;
  sort?: string;
  total_rows: number;
  total_pages?: number;
  rows?: any;
}

export interface ResponseData<T> {
  count: number;
  data: T;
  page: number;
  pageSize: number;
  totalCount: number;
}
