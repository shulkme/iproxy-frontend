import { AntdForm, AntdFormItem, AntdInput } from '@/components/antd';
import { RiSearchLine } from '@remixicon/react';
import { Button, Card, Select, Space, Table } from 'antd';
import React from 'react';

const Detail: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <AntdForm layout="inline">
            <AntdFormItem>
              <AntdInput
                placeholder="IP Address"
                suffix={<RiSearchLine size={16} />}
              />
            </AntdFormItem>
            <AntdFormItem>
              <Select placeholder="Status" style={{ width: 220 }} />
            </AntdFormItem>
          </AntdForm>
        </div>
        <div>
          <Space>
            <Button>Refresh</Button>
            <Button type="primary">Renewal</Button>
          </Space>
        </div>
      </div>
      <div>
        <Table
          rowSelection={{}}
          columns={[
            {
              title: 'IP Address',
              fixed: 'left',
              width: 200,
            },
            {
              title: 'Port',
              width: 200,
            },
            {
              title: 'Username',
              width: 200,
            },
            {
              title: 'Password',
              width: 200,
            },
            {
              title: 'Region',
              width: 200,
            },
            {
              title: 'Time Left',
              width: 200,
            },
            {
              title: 'Expire Time',
              width: 200,
            },
            {
              title: 'Status',
              width: 200,
            },
            {
              title: 'Remark',
              width: 200,
            },
            {
              title: 'Operate',
              width: 200,
            },
          ]}
          scroll={{
            x: 1200,
          }}
        />
      </div>
    </Card>
  );
};

export default Detail;
