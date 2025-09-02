'use client';
import { getCreditRecordList } from '@/apis/credit';
import { CreditRecord } from '@/apis/credit/types';
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

export default function Page() {
  const [form] = AntdForm.useForm();

  const { tableProps, search } = useAntdTable(
    async ({ current, pageSize }, params) => {
      const { dataRange, ...rest } = params;

      const start_at = dataRange?.[0]
        ? dayjs(dataRange[0]).format('YYYY-MM-DD')
        : undefined;
      const end_at = dataRange?.[1]
        ? dayjs(dataRange[1]).format('YYYY-MM-DD')
        : undefined;

      return await getCreditRecordList({
        page: current,
        size: pageSize,
        start_at,
        end_at,
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

  const onFormValuesChange: FormProps['onValuesChange'] = (
    changedValues,
    values,
  ) => {
    console.log(values);
    if (!Object.keys(changedValues).includes('order_id')) submit();
  };

  return (
    <>
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
                placeholder="Order Number"
                suffix={<RiSearchLine size={16} />}
                onPressEnter={submit}
                onClear={submit}
              />
            </AntdFormItem>
          </AntdForm>
        </div>

        <Table<CreditRecord>
          rowKey="id"
          columns={[
            {
              title: 'Order Number',
            },
            {
              title: 'Payment Amount',
              dataIndex: 'points',
            },
            {
              title: 'Payment Method',
            },
            {
              title: 'Status',
            },
            {
              title: 'Extra',
            },
            {
              title: 'Type',
            },
          ]}
          {...tableProps}
        />
      </Card>
    </>
  );
}
