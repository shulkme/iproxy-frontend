'use client';
import { AntdDateRangePicker, AntdForm, AntdFormItem } from '@/components/antd';
import { RiDownloadLine, RiRefreshLine } from '@remixicon/react';
import {
  Tooltip as AntdTooltip,
  Button,
  Card,
  Select,
  Space,
  Table,
} from 'antd';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('app.pages.residential.statistics');
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
                  <Select
                    style={{ width: 220 }}
                    placeholder={t('filters.username.placeholder')}
                  />
                </AntdFormItem>
              </AntdForm>
            </div>
            <div>
              <Space size="middle">
                <AntdTooltip title={t('actions.refresh')}>
                  <Button
                    className="leading-none"
                    icon={<RiRefreshLine size={18} />}
                  />
                </AntdTooltip>
                <Button
                  type="primary"
                  className="leading-none"
                  icon={<RiDownloadLine size={18} />}
                >
                  {t('actions.export')}
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
              scroll={{
                x: 1200,
              }}
              columns={[
                {
                  title: t('table.columns.date'),
                },
                {
                  title: t('table.columns.target'),
                },
                {
                  title: t('table.columns.traffic'),
                },
                {
                  title: t('table.columns.request'),
                },
              ]}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
