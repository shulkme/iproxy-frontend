'use client';
import { checkoutByStripe } from '@/apis/checkout';
import { PAYMENT_METHOD_ENUM } from '@/apis/checkout/enums';
import { useRecharge } from '@/app/[locale]/(app)/wallet/recharge/context';
import { AntdRadio, AntdRadioGroup, AntdTitle } from '@/components/antd';
import { useRequest } from 'ahooks';
import { Button, Card } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Payment: React.FC = () => {
  const t = useTranslations('app.pages.wallet.recharge.payment');
  const g = useTranslations('global.checkout');
  const { amount, payment } = useRecharge();

  const { run: doSubmit, loading: submitting } = useRequest(
    async () => {
      switch (payment) {
        case PAYMENT_METHOD_ENUM.CREDIT:
          return await checkoutByStripe({
            mode: 'payment',
            amount: amount * 100,
            product_data: {
              name: '余额',
              description: '余额充值',
            },
          });
        default:
          return await Promise.reject();
      }
    },
    {
      manual: true,
      onSuccess: (res) => {
        window.open(res.data.url);
      },
    },
  );

  return (
    <Card>
      <AntdTitle level={5} className="mb-6">
        {t('title')}
      </AntdTitle>
      <AntdRadioGroup
        defaultValue={PAYMENT_METHOD_ENUM.CREDIT}
        block
        className="flex flex-col gap-4"
      >
        <AntdRadio
          value={PAYMENT_METHOD_ENUM.CREDIT}
          className="border-[2px] rounded-(--ant-border-radius) border-slate-100 justify-start [&_.ant-radio-label]:flex-auto [&.ant-radio-wrapper-checked]:border-(--ant-color-primary) p-4 m-0"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold">{g('payment.credit')}</div>
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
          disabled
          value={PAYMENT_METHOD_ENUM.CRYPTO}
          className="border-[2px] rounded-(--ant-border-radius) border-slate-100 justify-start [&_.ant-radio-label]:flex-auto [&.ant-radio-wrapper-checked]:border-(--ant-color-primary) p-4 m-0"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold">{g('payment.crypto')}</div>
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
          disabled
          value={PAYMENT_METHOD_ENUM.LOCAL}
          className="border-[2px] rounded-(--ant-border-radius) border-slate-100 justify-start [&_.ant-radio-label]:flex-auto [&.ant-radio-wrapper-checked]:border-(--ant-color-primary) p-4 m-0"
        >
          <div className="flex justify-between items-center gap-2">
            <div className="font-bold">{g('payment.local')}</div>
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
          <h3 className="text-lg font-bold">{t('total')}</h3>
          <p className="text-xl font-bold">$ {amount.toLocaleString()}</p>
        </div>
        <div>
          <Button
            loading={submitting}
            onClick={doSubmit}
            size="large"
            block
            type="primary"
          >
            {t('submit')}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Payment;
