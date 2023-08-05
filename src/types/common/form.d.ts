export type FormType =
  | 'text'
  | 'text-number'
  | 'number'
  | 'email'
  | 'text-area'
  | 'password'
  | 'radio'
  | 'checkbox'
  | 'checkbox-one'
  | 'select'
  | 'select-api'
  | 'date'
  | 'date-range'
  | 'map'
  | 'mask-number'
  | 'mask'
  | 'element'
  | 'images'
  | 'checkbox-list'
  | 'empty-column'
  | 'switch'
  | 'numeric'
  | 'no-lable'
  | 'label'
  | 'checkbox-one'
  | 'show-images'
  | 'time'
  | 'box'
  | 'file-pdf'
  | 'file-image';

export type FormValueType = 'string' | 'boolean' | 'number' | 'array';
export interface InputOption {
  label: any;
  value?: string | boolean;
}

export interface Map {
  current?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: number;
}

export interface Regex {
  check: boolean;
  title: string;
}

export type FormInputOption = {
  name: string;
  label?: string;
  type?: FormType;
  valueType?: TableFormValueType;
  value?: any;
  values?: string[];
  validation?: any;
  validation_match?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  options?: InputOption[];
  options_number?: number;
  object?: string | any;
  hidden?: boolean;
  hiddenOnCreate?: boolean;
  readonly?: boolean;
  notRender?: boolean;
  dependName?: string;
  dependEqValue?: string;
  maxLength?: number;
  maxDateRef?: string;
  minDateRef?: string;
  minLength?: number;
  errorMessage?: string;
  row?: boolean;
  map_prop?: Map;
  mask?: string;
  test?: Function;
  schema?: any;
  setSchema?: any;
  element?: ReactNode | ReactDOM;
  showlevelPassword?: boolean;
  showErrorText?: boolean;
  items?: any;
  parent?: string;
  is_add?: boolean;
  is_delete?: boolean;
  item_options?: any;
  regex?: Regex;
  input_type?: string;
  images?: string[];
  row?: boolean;
  md?: number;
  xs?: number;
  styles?: object;
  delete?: boolean;
  buttonDelete?: any;
  file?: any;
  acApiGet?: Function;
  onAccept?: Function;
  fileStorageName?: string;
};
