export type Search<T, D> = {
  page: number;
  rows: number;
  total_rows: number;
  filter: T;
  datas: Array<D>;
};
