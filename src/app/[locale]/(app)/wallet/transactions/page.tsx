import {
  AntdDateRangePicker,
  AntdForm,
  AntdFormItem,
  AntdInput,
} from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { Card, Table } from 'antd';

export default function Page() {
  return (
    <>
      <Card>
        <div className="mb-6">
          <AntdForm layout="inline">
            <AntdFormItem>
              <AntdDateRangePicker />
            </AntdFormItem>
            <AntdFormItem>
              <AntdInput
                placeholder="Order Number"
                suffix={<RiSearchLine size={16} />}
              />
            </AntdFormItem>
          </AntdForm>
        </div>

        <Table
          columns={[
            {
              title: 'Order Number',
            },
            {
              title: 'Payment Amount',
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
        />
      </Card>
    </>
  );
}
