'use client';
import { AntdParagraph, AntdTitle } from '@/components/antd';
import { Link } from '@/i18n/navigation';
import { Card } from 'antd';
import { random } from 'radash';
import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Traffic: React.FC = () => {
  const data = Array.from({ length: 30 }).map((_, i) => ({
    label: `2025-08-${i}`,
    value: random(0, 500),
  }));
  return (
    <Card>
      <div className="flex items-center justify-between gap-4 mb-4">
        <AntdTitle level={5} className="m-0">
          Total traffic
        </AntdTitle>
        <div>
          <Link href="/">Detailed statistics</Link>
        </div>
      </div>
      <div className="">
        <AntdParagraph type="secondary">Last 30 days:</AntdParagraph>
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
    </Card>
  );
};

export default Traffic;
