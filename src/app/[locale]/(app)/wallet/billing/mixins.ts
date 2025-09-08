import { ORDER_STATUS_ENUM, PAYMENT_METHOD_ENUM } from '@/apis/checkout/enums';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';

export const proxyTypeDirt = [
  {
    locale: 'isp',
    value: PACKAGE_TYPE_ENUM.ISP,
  },
  {
    locale: 'idc',
    value: PACKAGE_TYPE_ENUM.IDC,
  },
  {
    locale: 'residential',
    value: PACKAGE_TYPE_ENUM.RESIDENTIAL,
  },
  {
    locale: 'mobile',
    value: PACKAGE_TYPE_ENUM.MOBILE,
  },
] as const;

export const paymentMethodDirt = [
  {
    locale: 'credit',
    value: PAYMENT_METHOD_ENUM.CREDIT,
  },
  {
    locale: 'crypto',
    value: PAYMENT_METHOD_ENUM.CRYPTO,
  },
  {
    locale: 'local',
    value: PAYMENT_METHOD_ENUM.LOCAL,
  },
] as const;

export const orderStatusDirt = [
  {
    locale: 'success',
    value: ORDER_STATUS_ENUM.SUCCESS,
  },
  {
    locale: 'fail',
    value: ORDER_STATUS_ENUM.FAILED,
  },
  {
    locale: 'pending',
    value: ORDER_STATUS_ENUM.PENDING,
  },
  {
    locale: 'cancelled',
    value: ORDER_STATUS_ENUM.CANCELLED,
  },
  {
    locale: 'expired',
    value: ORDER_STATUS_ENUM.EXPIRED,
  },
  {
    locale: 'refunded',
    value: ORDER_STATUS_ENUM.REFUNDED,
  },
] as const;
