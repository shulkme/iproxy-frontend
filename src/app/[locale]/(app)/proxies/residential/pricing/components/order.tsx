'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { createProxyOrder } from '@/apis/proxy';
import { ProxyOrderData } from '@/apis/proxy/types';
import { useCheckout } from '@/app/[locale]/(app)/proxies/residential/pricing/context';
import { AntdTitle } from '@/components/antd';
import { useRouter } from '@/i18n/navigation';
import { useCredit } from '@/providers/credit';
import { RiCheckLine } from '@remixicon/react';
import { useRequest } from 'ahooks';
import {
  App,
  Button,
  Card,
  Divider,
  Empty,
  Modal,
  Result,
  Select,
  Spin,
} from 'antd';
import { useTranslations } from 'next-intl';
import React, { useMemo, useState } from 'react';

const Order: React.FC = () => {
  const { refresh } = useCredit();
  const t = useTranslations('app.pages.residential.pricing.order');
  const f = useTranslations('app.pages.residential.pricing.features');
  const { message } = App.useApp();
  const [resOpen, setResOpen] = useState(false);
  const router = useRouter();
  const { formData, currentPackage } = useCheckout();
  const duration = useMemo(() => formData?.duration || 0, [formData]);

  const totalPrice = useMemo(
    () => currentPackage?.flow_price || 0,
    [currentPackage],
  );

  const { run: doSubmit, loading: submitting } = useRequest(
    async () => {
      const data: ProxyOrderData = {
        package_type: PACKAGE_TYPE_ENUM.IDC,
        days: duration,
        quantity: 1,
        client_total_usd: totalPrice,
      };
      return await createProxyOrder(data);
    },
    {
      manual: true,
      onSuccess: () => {
        setResOpen(true);
        refresh();
      },
      onError: (e) => {
        message.error(e.message || 'Error creating order');
      },
    },
  );

  const onOrderView = () => {
    setResOpen(false);
    router.push('/proxies/residential/setup');
  };

  const handleSubmit = () => {
    if (currentPackage) {
      doSubmit();
    } else {
      message.warning(t('form.result.warning'));
    }
  };

  return (
    <>
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
              {currentPackage ? (
                <div className="border border-(--ant-color-primary) p-4 relative">
                  <div className="absolute right-1 top-1 border-[6px] border-(--ant-color-primary) border-b-transparent border-l-transparent"></div>
                  <h2 className="text-2xl font-bold mb-4 uppercase">
                    {currentPackage.flow_name}
                  </h2>
                  <ul>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-green-500">
                          <RiCheckLine size={14} />
                        </span>
                        <span>{f(`items.${i}`)}</span>
                      </li>
                    ))}
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
                <ul className="space-y-2">
                  <li>
                    <div className="flex justify-between">
                      <label className="text-black/50">
                        {t('summary.per')}
                      </label>
                      <span className="font-medium">
                        ${currentPackage?.price_per_gb || 0}/GB
                      </span>
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
                        {(currentPackage?.flow_price || 0).toLocaleString(
                          'en-US',
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          },
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Divider type="horizontal" className="m-0" />
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <div className="flex justify-between items-center">
                      <label className="text-black/50">
                        {t('summary.coupon.label')}
                      </label>
                      <div className="flex items-center gap-2">
                        <Select
                          allowClear
                          showSearch
                          size="small"
                          popupMatchSelectWidth={200}
                          placeholder={t('summary.coupon.placeholder')}
                        />
                        <Button size="small" color="primary" variant="outlined">
                          {t('summary.coupon.extra')}
                        </Button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <label className="text-black/50">
                        {t('summary.discount')}
                      </label>
                      <span className="font-medium text-orange-500">$0.00</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between items-center">
                      <label className="text-black/50">
                        {t('summary.total')}
                      </label>
                      <span className="font-bold text-2xl">
                        $
                        {totalPrice.toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Button
                  loading={submitting}
                  block
                  type="primary"
                  onClick={handleSubmit}
                >
                  {t('actions.submit')}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Spin
        spinning={submitting}
        size="large"
        fullscreen
        tip={t('form.result.spin')}
      />
      <Modal open={resOpen} onCancel={() => setResOpen(false)} footer={null}>
        <Result
          status="success"
          title={t('form.result.success.title')}
          subTitle={t('form.result.success.subtitle')}
          extra={[
            <Button key="view" type="primary" onClick={onOrderView}>
              {t('form.result.success.action')}
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
};

export default Order;
