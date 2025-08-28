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
              <AntdInput
                placeholder="Search email"
                suffix={<RiSearchLine size={16} />}
              />
            </AntdFormItem>
            <AntdFormItem>
              <AntdDateRangePicker />
            </AntdFormItem>
          </AntdForm>
        </div>
        <div>
          <Table
            scroll={{
              x: 1200,
            }}
            columns={[
              {
                title: 'Referral username',
              },
              {
                title: 'Referral email',
              },
              {
                title: 'Referral code',
              },
              {
                title: 'Total order volume',
              },
              {
                title: 'Order amount',
              },
              {
                title: 'Total commission',
              },
              {
                title: 'Waiting for credit',
              },
              {
                title: 'Already credited',
              },
            ]}
          />
        </div>
      </Card>
    </>
  );
}
