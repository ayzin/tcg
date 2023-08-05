type Master = {
  code: string;
  label: string;
};

type GetMaster = {
  object: string;
  type: string;
};

export interface Provice {
  code: number;
  name_th: string;
  name_en: string;
  uid: string;
  active: boolean;
}

export interface District {
  code: number;
  name_th: string;
  name_en: string;
  uid: string;
  province_uuid: string;
  active: boolean;
}

export interface SubDistrict {
  zip_code: string;
  name_th: string;
  name_en: string;
  uid: string;
  amphure_uuid: string;
  active: boolean;
}
