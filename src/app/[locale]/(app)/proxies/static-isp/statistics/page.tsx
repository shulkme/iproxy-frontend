'use client';
import { AntdDateRangePicker, AntdForm, AntdFormItem } from '@/components/antd';
import { RiDownloadLine, RiRefreshLine } from '@remixicon/react';
import { Button, Card, Select, Space, Table } from 'antd';
import { random } from 'radash';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function Page() {
  const data = Array.from({ length: 30 }).map((_, i) => ({
    label: `2025-08-${i}`,
    value: random(0, 500),
  }));
  return (
    <div className="p-8">
      <Card>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <AntdForm layout="inline">
                <AntdFormItem>
                  <AntdDateRangePicker />
                </AntdFormItem>
                <AntdFormItem>
                  <Select style={{ width: 220 }} placeholder="Users" />
                </AntdFormItem>
              </AntdForm>
            </div>
            <div>
              <Space size="middle">
                <Button
                  className="leading-none"
                  icon={<RiRefreshLine size={18} />}
                />
                <Button
                  type="primary"
                  className="leading-none"
                  icon={<RiDownloadLine size={18} />}
                >
                  Export
                </Button>
              </Space>
            </div>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <LineChart
                accessibilityLayer={false}
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  // type="monotone"
                  dataKey="value"
                  stroke="var(--ant-color-primary)"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis
                  dataKey="label"
                  tick={{
                    strokeWidth: 1,
                    fontSize: 12,
                  }}
                  axisLine={false}
                />
                <YAxis
                  axisLine={false}
                  tick={{
                    strokeWidth: 1,
                    fontSize: 12,
                  }}
                />
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  strokeDasharray="5 5"
                  strokeWidth={1}
                />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <Table
              columns={[
                {
                  title: 'Date',
                },
                {
                  title: 'Target',
                },
                {
                  title: 'Traffic',
                },
                {
                  title: 'Request',
                },
              ]}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
