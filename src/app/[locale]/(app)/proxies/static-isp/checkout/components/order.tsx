import { AntdTitle } from '@/components/antd';
import { Avatar, Button, Card, Divider, InputNumber } from 'antd';
import React from 'react';

const SkuItem = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-none">
        <Avatar
          size="small"
          src="https://flagicons.lipis.dev/flags/1x1/us.svg"
        />
      </div>
      <div className="flex-auto font-bold">Miami, US</div>
      <div className="flex-none">$5/IP</div>
      <div className="flex-none">
        <InputNumber size="small" min={1} max={10000} />
      </div>
    </div>
  );
};

const Order: React.FC = () => {
  return (
    <div className="sticky bottom-0 xl:top-36 xl:bottom-auto">
      <Card
        className="xl:h-[calc(100vh-144px)]"
        classNames={{
          body: 'p-0 h-full',
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-none p-6">
            <div className="flex items-center justify-between gap-2">
              <AntdTitle level={5} className="m-0">
                Order Summary
              </AntdTitle>
              <Button size="small" type="text">
                Clear
              </Button>
            </div>
          </div>
          <div className="flex-auto px-6 overflow-auto">
            <ul className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>
                  <SkuItem />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none p-6 space-y-4">
            <div>
              <Divider type="horizontal" className="m-0" />
            </div>
            <div>
              <ul className="space-y-1">
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">IP amount</label>
                    <span className="font-medium">x100</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">Duration</label>
                    <span className="font-medium">30 Days</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">Subtotal</label>
                    <span className="font-medium">$500.00</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Divider type="horizontal" className="m-0" />
            </div>
            <div>
              <ul className="space-y-1">
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">Total</label>
                    <span className="font-medium">$500.00</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Button block type="primary">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Order;
