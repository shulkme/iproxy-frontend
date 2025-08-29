import { AntdTitle } from '@/components/antd';
import { RiCheckLine } from '@remixicon/react';
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
            </div>
          </div>
          <div className="flex-auto px-6 overflow-auto">
            <div className="border border-(--ant-color-primary) p-4 relative">
              <div className="absolute right-1 top-1 border-[6px] border-(--ant-color-primary) border-b-transparent border-l-transparent"></div>
              <h2 className="text-2xl font-bold mb-4">10GB</h2>
              <ul>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">
                    <RiCheckLine size={14} />
                  </span>
                  <span>100M+ residential IP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">
                    <RiCheckLine size={14} />
                  </span>
                  <span>99.7% success rate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">
                    <RiCheckLine size={14} />
                  </span>
                  <span>Rotating/Sticky sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">
                    <RiCheckLine size={14} />
                  </span>
                  <span>Unlimited Threads</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">
                    <RiCheckLine size={14} />
                  </span>
                  <span>Supports HTTP(S)& SOCKS5</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none p-6 space-y-4">
            <div>
              <Divider type="horizontal" className="m-0" />
            </div>
            <div>
              <ul className="space-y-1">
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">Price per GB</label>
                    <span className="font-medium">$3.50/GB</span>
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
                    <span className="font-medium">$35.00</span>
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
                  <div className="flex justify-between items-center">
                    <label className="text-black/50">Total</label>
                    <span className="font-bold text-2xl">$35.00</span>
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
