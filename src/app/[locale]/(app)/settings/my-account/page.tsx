import { AntdTitle } from '@/components/antd';
import { Card, Descriptions, Table } from 'antd';

export default function Page() {
  return (
    <div className="space-y-6">
      <Card>
        <AntdTitle level={5} className="mb-6">
          Account Detail
        </AntdTitle>
        <div>
          <Descriptions
            layout="vertical"
            column={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            classNames={{
              content: 'font-medium text-base',
            }}
            items={[
              {
                label: 'Nickname',
                children: 'Shulk Steve',
              },
              {
                label: 'Email',
                children: 'shulk.work@gmail.com',
              },
              {
                label: 'Registration time',
                children: '27/08/2025',
              },
              {
                label: 'Password',
                children: (
                  <div className="space-x-1">
                    <span>******</span>
                    <a className="text-sm font-normal">Change Password</a>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Card>
      <Card>
        <AntdTitle level={5} className="mb-6">
          Security Device Management
        </AntdTitle>
        <Table
          columns={[
            {
              title: 'Security Device',
            },
            {
              title: 'Device Type',
            },
            {
              title: 'Country/Region',
            },
            {
              title: 'State/Province',
            },
            {
              title: 'City',
            },
            {
              title: 'Login IP',
            },
            {
              title: 'Date',
            },
          ]}
        />
      </Card>
    </div>
  );
}
