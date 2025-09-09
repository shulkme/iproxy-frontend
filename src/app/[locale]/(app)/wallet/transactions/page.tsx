'use client';
import { ORDER_STATUS_ENUM, PAYMENT_METHOD_ENUM } from '@/apis/checkout/enums';
import { getRechargeRecordList } from '@/apis/credit';
import { CreditRechargeRecord } from '@/apis/credit/types';
import {
  orderStatusDirt,
  paymentMethodDirt,
} from '@/app/[locale]/(app)/wallet/mixins';
import {
  AntdDateRangePicker,
  AntdForm,
  AntdFormItem,
  AntdInput,
} from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { useAntdTable } from 'ahooks';
import { Card, FormProps, Table } from 'antd';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo } from 'react';

export default function Page() {
  const t = useTranslations('app.pages.wallet.transactions');
  const g = useTranslations('global');
  const [form] = AntdForm.useForm();

  const paymentMethodOptions = useMemo(
    () =>
      paymentMethodDirt.map((f) => ({
        label: g(`checkout.payment.${f.locale}`),
        value: f.value,
      })),
    [g],
  );

  const paymentMethodLabelFilter = useCallback(
    (method: PAYMENT_METHOD_ENUM) => {
      return paymentMethodOptions.find((f) => f.value === method)?.label;
    },
    [paymentMethodOptions],
  );

  const orderStatusOptions = useMemo(
    () =>
      orderStatusDirt.map((f) => ({
        label: g(`checkout.status.${f.locale}`),
        value: f.value,
      })),
    [g],
  );

  const orderStatusLabelFilter = useCallback(
    (status: ORDER_STATUS_ENUM) => {
      return orderStatusOptions.find((f) => f.value === status)?.label;
    },
    [orderStatusOptions],
  );

  const { tableProps, search } = useAntdTable(
    async ({ current, pageSize }, params) => {
      const { dataRange, ...rest } = params;

      const start_time = dataRange?.[0]
        ? dayjs(dataRange[0]).format('YYYY-MM-DD')
        : undefined;
      const end_time = dataRange?.[1]
        ? dayjs(dataRange[1]).format('YYYY-MM-DD')
        : undefined;

      return await getRechargeRecordList({
        page: current,
        size: pageSize,
        start_time,
        end_time,
        ...rest,
      }).then((res) => {
        return {
          list: res.data.items,
          total: res.data.total,
        };
      });
    },
    {
      form,
    },
  );

  const { submit } = search;

  const onFormValuesChange: FormProps['onValuesChange'] = (changedValues) => {
    if (!Object.keys(changedValues).includes('order_id')) submit();
  };

  return (
    <div className="p-4 lg:p-8">
      <Card>
        <div className="mb-6">
          <AntdForm
            form={form}
            layout="inline"
            onValuesChange={onFormValuesChange}
          >
            <AntdFormItem name="dataRange">
              <AntdDateRangePicker />
            </AntdFormItem>
            <AntdFormItem name="order_id">
              <AntdInput
                allowClear
                placeholder={t('table.filters.order-number.placeholder')}
                suffix={<RiSearchLine size={16} />}
                onPressEnter={submit}
                onClear={submit}
              />
            </AntdFormItem>
          </AntdForm>
        </div>

        <Table<CreditRechargeRecord>
          rowKey="order_id"
          scroll={{
            x: 1200,
          }}
          columns={[
            {
              title: t('table.columns.order-number'),
              dataIndex: 'order_id',
            },
            {
              title: t('table.columns.payment-amount'),
              dataIndex: 'amount',
              render: (value) => {
                return '$' + value.toLocaleString();
              },
            },
            {
              title: t('table.columns.payment-method'),
              dataIndex: 'payment_method',
              render: (value) => {
                return paymentMethodLabelFilter(value);
              },
            },
            {
              title: t('table.columns.status'),
              dataIndex: 'status',
              render: (value) => {
                return orderStatusLabelFilter(value);
              },
            },
            {
              title: t('table.columns.payment-time'),
              dataIndex: 'recharge_time',
              render: (value) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
            },
            {
              title: t('table.columns.account-balance'),
              dataIndex: 'balance_after',
              render: (value) => {
                return '$' + value.toLocaleString();
              },
            },
          ]}
          {...tableProps}
        />
      </Card>
    </div>
  );
}
