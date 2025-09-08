import { PackageRecord } from '@/apis/packages/types';
import { PROXY_STATUS_ENUM } from '@/apis/proxy/enums';

export const statusDirt = [
  {
    locale: 'available',
    value: PROXY_STATUS_ENUM.AVAILABLE,
  },
  {
    locale: 'expiring',
    value: PROXY_STATUS_ENUM.EXPIRING,
  },
  {
    locale: 'auto_renew',
    value: PROXY_STATUS_ENUM.AUTO_RENEW,
  },
  {
    locale: 'expired',
    value: PROXY_STATUS_ENUM.EXPIRED,
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
