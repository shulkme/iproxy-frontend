'use client';
import { getDurationPrice } from '@/app/[locale]/(app)/proxies/static-isp/mixins';
import {
  SkuRecord,
  useCheckout,
} from '@/app/[locale]/(app)/proxies/static-isp/pricing/context';
import { AntdTitle } from '@/components/antd';
import { Avatar, Button, Card, Divider, Empty } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useMemo } from 'react';

const SkuItem: React.FC<{
  record: SkuRecord;
  duration: number;
}> = ({ record, duration }) => {
  const price = useMemo(() => {
    return getDurationPrice(record.product, duration);
  }, [duration, record]);
  return (
    <div className="flex items-center gap-2">
      <div className="flex-none">
        <Avatar
          size={24}
          src={`https://flagicons.lipis.dev/flags/1x1/${record.product?.flag || 'xx'}.svg`}
        />
      </div>
      <div className="flex-auto font-bold">{record.product.title}</div>
      <div className="flex-none">${price} / IP</div>
      <div className="flex-none pl-4">x{record.count}</div>
    </div>
  );
};

const Order: React.FC = () => {
  const t = useTranslations('app.pages.static-isp.pricing.order');
  const { skus, totalCount, formData, resetSku } = useCheckout();

  const items = useMemo(() => Array.from(skus), [skus]);

  const duration = useMemo(() => {
    return Number(formData?.duration) || 0;
  }, [formData]);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const price = getDurationPrice(item[1].product, duration);
      return sum + price * item[1].count;
    }, 0);
  }, [duration, items]);

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
                {t('title')}
              </AntdTitle>
              <Button size="small" type="text" onClick={resetSku}>
                {t('actions.reset')}
              </Button>
            </div>
          </div>
          <div className="flex-auto px-6 overflow-auto">
            {items.length > 0 ? (
              <ul className="space-y-4">
                {items.map(([id, sku]) => (
                  <li key={id}>
                    <SkuItem record={sku} duration={duration} />
                  </li>
                ))}
              </ul>
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={t('list.empty')}
              />
            )}
          </div>
          <div className="flex-none p-6 space-y-4">
            <div>
              <Divider type="horizontal" className="m-0" />
            </div>
            <div>
              <ul className="space-y-1">
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">
                      {t('summary.amount')}
                    </label>
                    <span className="font-medium">x{totalCount || 0}</span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">
                      {t('summary.duration.label')}
                    </label>
                    <span className="font-medium">
                      {t('summary.duration.unit', {
                        number: duration,
                      })}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label className="text-black/50">
                      {t('summary.subtotal')}
                    </label>
                    <span className="font-medium">
                      $
                      {subtotal.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
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
                    <label className="text-black/50">
                      {t('summary.total')}
                    </label>
                    <span className="font-bold text-2xl">
                      $
                      {subtotal.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Button block type="primary">
                {t('actions.submit')}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Order;
