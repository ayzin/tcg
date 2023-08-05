import { TablePageApi } from './table';

export type CustomerTemplateProps = {
  type?: string;
  name?: string;
  base_path?: string;
  api: TablePageApi;
};

export type CustomerContextProps = {
  tabWorkTurn?: number;
  masters?: any;
  handleTabWorkTurn?: (tab: number) => Promise<void> | void;
  handleAddWorkshift?: (row: any) => Promise<void> | void;
  handleUpdateWorkshift?: (row: any) => Promise<void> | void;
  handleView?: (row: any) => Promise<void> | void;
};
