import { FormInputOption } from './form';
import { Search } from './search';
import { ResponsePage } from './response';
import { ReactNode } from 'react';

export type TableTemplateProp = {
  name: string;
  title?: string;
  type: TableActionHabdle;
  base_path?: string;
  key_column?: string;
  filter?: Array<FormInputOption>;
  advanceFilter?: Array<FormInputOption>;
  filterUpdate?: any;
  columns: Array<TableColumnsField>;
  model?: {
    name?: string;
    sub_name?: string;
    inputs?: Array<FormInputOption>;
  };
  api: TablePageApi;
  action_rows?: Array<TableActionRows>;
  action_tops?: Array<TableActionTops>;
  call_back?: TablePageCallBack;
  hidePage?: boolean;
};

export interface TablePageCallBack {
  callBackUpdate?: Function;
  callBackNew?: Function;
  callBackDelete?: Function;
  callBackView?: Function;
}

export interface TablePageApi {
  fetchSearch: Function;
  fetchOneData?: Function;
  fetchInit?: Function;
  fetchExport?: Function;
  patchUpdate?: Function;
  delecteFunc?: Function;
  downloadFunc?: Function;
  addFunc?: Function;
  addFn?: Function;
  patchFn?: Function;
  delecteFn?: Function;
}

export interface TableColumnsField {
  label?: ReactNode | string;
  name: string;
  type?: 'no' | 'string' | 'number' | 'date' | 'status' | 'active';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  alignLabel?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  hidden?: boolean;
  mapDDItem?: TableLoadOption;
  mixNames?: string[];
  avatar?: string;
  formatText?: (value) => any;
  formatCustom?: (row: any) => any;
}

export type TableActionRowsObj = {
  type: TableAction;
  text: string;
  use_name: string;
};

export type TableAction = 'edit' | 'delete' | 'print' | 'download' | 'view' | 'switch';

export type TableActionRows = TableActionRowsObj | TableAction;

export type TableActionTops = {
  type: 'search' | 'add' | 'export' | 'custom';
  label?: string;
  render?: ReactNode;
};

export type TableActionHabdle = 'model' | 'page' | 'tab' | 'drawer';

export type ReturnModel = {
  submit?: boolean;
  data?: any;
  id?: any;
};
export type TableContextProps = {
  search: Search;
  response: ResponsePage;
  openModal?: boolean;
  openDeleteModal?: boolean;
  text?: string;
  typeModal?: any;
  form?: any;
  masters?: any;
  masterData?: any;
  tabWorkTurn?: number;
  callModal?: boolean;
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => Promise<void> | void;
  handlePageSize: (page: number) => Promise<void> | void;
  handleFilterChange: (filter: any) => Promise<void> | void;
  handleSearch: (search: Search<any, any>) => Promise<void> | void;
  handleExport?: () => Promise<void> | void;
  handleNew?: () => Promise<void> | void;
  handleBtnDelete?: (row: any) => Promise<void> | void;
  handleBtnUpdate?: (row: any) => Promise<void> | void;
  handleDelete?: (row: any) => Promise<void> | void;
  handleUpdate?: (row: any) => Promise<void> | void;
  handleDownload?: (row: any) => Promise<void> | void;
  handleUpload?: (row: any) => Promise<void> | void;
  handleSubmitModal?: (prop: ReturnModel) => Promise<void> | void;
  handleSubmit?: (row: any) => Promise<void> | void;
  handleView?: (row: any) => Promise<void> | void;
  handleSubmitCreateCheckPoint?: (row: any) => Promise<void> | void;
  handleSubmitDeleteCheckPoint?: (row: any) => Promise<void> | void;
  handleSubmitUpdateCheckPoint?: (row: any) => Promise<void> | void;
  handleSubmitAddRounds?: (row: any) => Promise<void> | void;
  handleSubmitDeleteRounds?: (row: any) => Promise<void> | void;
  handleSubmitUpdateRounds?: (row: any) => Promise<void> | void;
  handleSubmitAddCheckList?: (row: any) => Promise<void> | void;
  handleSubmitDeleteCheckList?: (row: any) => Promise<void> | void;
  handleGetWorkshift?: (row: any) => Promise<void> | void;
  handleDeleteWorkshift?: (row: any) => Promise<void> | void;
  handleSubmitCreateLeaveType?: (row: any) => Promise<void> | void;
  handleSubmitUpdateLeaveType?: (row: any) => Promise<void> | void;
  handleSubmitDeleteLeaveType?: (row: any) => Promise<void> | void;
  handleSubmitAddSavePoint?: (row: any) => Promise<void> | void;
  handleSubmitEditSavePoint?: (row: any) => Promise<void> | void;
  handleSubmitDeleteSavePoint?: (row: any) => Promise<void> | void;
  handleSubmitAddAppointment?: (row: any) => Promise<void> | void;
  handleSubmitDeleteAppointment?: (row: any) => Promise<void> | void;
  handleSubmitCreateLeaveExtra?: (row: any) => Promise<void> | void;
  handleSubmitUpdateLeaveExtra?: (row: any) => Promise<void> | void;
  handleSubmitDeleteLeaveExtra?: (row: any) => Promise<void> | void;
  handleChangePage?: (e: any, page: any, type: string) => Promise<void> | void;
  handleChangePageSize?: (size: any, type: string) => Promise<void> | void;
};

export type SearchAction = {
  type: 'add' | 'custom';
  label?: string;
  custom?: ReactDOM;
  handleClick: Function;
};

export type DialogContentOptions = {
  title: ReactNode;
  childrenContent?: ReactNode;
  handleCLose?: (data: ReturnModel) => Promise<void> | void;
  form?: any;
  handleSubmitAdd?: (data: any) => Promise<void> | void;
  handleSubmitUpdate?: (data: any) => Promise<void> | void;
  handleSubmitDelete?: (data: any) => Promise<void> | void;
};
