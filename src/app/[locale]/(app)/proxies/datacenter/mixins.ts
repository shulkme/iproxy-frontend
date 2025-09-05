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
      price = record.days7;
      break;
    case 30:
      price = record.days30;
      break;
    case 90:
      price = record.days90;
      break;
  }

  return price;
}
