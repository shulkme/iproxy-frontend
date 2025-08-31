import { AntdForm, AntdFormItem, AntdInput } from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { Button, Card, Space, Table } from 'antd';

export default function Page() {
  return (
    <div className="p-8">
      <Card>
        <div className="flex items-center justify-between gap-2 mb-6">
          <div>
            <AntdForm layout="inline">
              <AntdFormItem>
                <AntdInput
                  placeholder="Search IP"
                  suffix={<RiSearchLine size={16} />}
                />
              </AntdFormItem>
            </AntdForm>
          </div>
          <div>
            <Space size="middle">
              <Button type="primary">Add whitelist</Button>
            </Space>
          </div>
        </div>
        <div>
          <Table
            scroll={{ x: 1200 }}
            columns={[
              {
                title: 'IP',
              },
              {
                title: 'Status',
              },
              {
                title: 'Add time',
              },
              {
                title: 'Remark',
              },
              {
                title: 'Operate',
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
