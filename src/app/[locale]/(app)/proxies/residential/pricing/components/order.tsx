'use client';
import { AntdTitle } from '@/components/antd';
import { RiCheckLine } from '@remixicon/react';
import { Button, Card, Divider, Empty } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';

const Order: React.FC = () => {
  const t = useTranslations('app.pages.residential.pricing.order');
  const data = null;
  const subtotal = 0;
  const duration = 0;
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
            </div>
          </div>
          <div className="flex-auto px-6 overflow-auto">
            {data ? (
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
                    <label className="text-black/50">{t('summary.per')}</label>
                    <span className="font-medium">$3.50/GB</span>
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
