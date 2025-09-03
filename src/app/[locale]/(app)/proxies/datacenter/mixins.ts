import { PackageRecord } from '@/apis/packages/types';
import { PROXY_STATUS_ENUM } from '@/apis/proxy/enums';

export const statusDirt = [
  {
    locale: 'active',
    value: PROXY_STATUS_ENUM.ACTIVE,
  },
  {
    locale: 'inactive',
    value: PROXY_STATUS_ENUM.INACTIVE,
  },
  {
    locale: 'expired',
    value: PROXY_STATUS_ENUM.EXPIRED,
  },
  {
    locale: 'deleted',
    value: PROXY_STATUS_ENUM.DELETED,
  },
] as const;

export function getDurationPrice(record: PackageRecord, duration: number) {
  let price = 0;
  switch (duration) {
    case 7:
      price = record.price_week;
      break;
    case 30:
      price = record.price_month;
      break;
    case 90:
      price = record.price_quarter;
      break;
    case 365:
      price = record.price_year;
      break;
  }

  return price;
}
