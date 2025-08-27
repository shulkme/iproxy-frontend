import { AntdRadio, AntdRadioGroup, AntdTitle } from '@/components/antd';
import { Button, Card } from 'antd';
import Image from 'next/image';
import React from 'react';

const Payment: React.FC = () => {
  return (
    <Card>
      <AntdTitle level={5} className="mb-6">
        Payment Method
      </AntdTitle>
      <AntdRadioGroup defaultValue={'1'} block className="flex flex-col gap-4">
        <AntdRadio
          value="1"
          className="border-[2px] rounded-xs border-slate-100 justify-start [&_.ant-radio-label]:flex-auto [&.ant-radio-wrapper-checked]:border-(--ant-color-primary) p-4 m-0"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold">Credit Card</div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/Visa.png"
                alt="Visa"
                width={36}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/Mastercard.png"
                alt="Mastercard"
                width={36}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/Unionpay.png"
                alt="Unionpay"
                width={36}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/Diners.png"
                alt="Diners"
                width={36}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/Discover.png"
                alt="Discover"
                width={36}
                height={24}
                unoptimized={false}
              />
            </div>
          </div>
        </AntdRadio>
        <AntdRadio
          value="2"
          className="border-[2px] rounded-xs border-slate-100 justify-start [&_.ant-radio-label]:flex-auto [&.ant-radio-wrapper-checked]:border-(--ant-color-primary) p-4 m-0"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold">Crypto Currency</div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/BTC.png"
                alt="BTC"
                width={24}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/ETH.png"
                alt="ETH"
                width={24}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/TRX25.png"
                alt="TRX25"
                width={24}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/Tether.png"
                alt="Tether"
                width={24}
                height={24}
                unoptimized={false}
              />
            </div>
          </div>
        </AntdRadio>
        <AntdRadio
          value="3"
          className="border-[2px] rounded-xs border-slate-100 justify-start [&_.ant-radio-label]:flex-auto [&.ant-radio-wrapper-checked]:border-(--ant-color-primary) p-4 m-0"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold">Local payments</div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/WeChatPayHK.png"
                alt="WeChatPayHK"
                width={24}
                height={24}
                unoptimized={false}
              />
              <Image
                src="/images/AlipayHK.png"
                alt="AlipayHK"
                width={24}
                height={24}
                unoptimized={false}
              />
            </div>
          </div>
        </AntdRadio>
      </AntdRadioGroup>

      <div className="pt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Total:</h3>
          <p className="text-xl font-bold">$1,000</p>
        </div>
        <div>
          <Button size="large" block type="primary">
            Continue to pay
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Payment;
