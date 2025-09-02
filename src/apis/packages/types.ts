import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';

export interface PackageRecord {
  type: PACKAGE_TYPE_ENUM;
  continent: string;
  country: string;
  price_month: number;
  price_year: number;
  price_quarter: number;
  currency: string;
  status: number;
  sort: number;
  id: number;
}

export interface PackageParams {
  type?: PACKAGE_TYPE_ENUM;
}
