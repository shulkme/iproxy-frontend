import { PROXY_STATUS_ENUM } from '@/apis/proxy/enums';

export const statusDirt = [
  {
    locale: 'app.proxies.ip.status.active',
    value: PROXY_STATUS_ENUM.ACTIVE,
  },
  {
    locale: 'app.proxies.ip.status.inactive',
    value: PROXY_STATUS_ENUM.INACTIVE,
  },
  {
    locale: 'app.proxies.ip.status.expired',
    value: PROXY_STATUS_ENUM.EXPIRED,
  },
  {
    locale: 'app.proxies.ip.status.deleted',
    value: PROXY_STATUS_ENUM.DELETED,
  },
] as const;
