'use client';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { createProxyOrder } from '@/apis/proxy';
import { ProxyOrderData } from '@/apis/proxy/types';
import { getDurationPrice } from '@/app/[locale]/(app)/proxies/static-isp/mixins';
import {
  SkuRecord,
  useCheckout,
} from '@/app/[locale]/(app)/proxies/static-isp/pricing/context';
import { AntdTitle } from '@/components/antd';
import { useRouter } from '@/i18n/navigation';
import { useCredit } from '@/providers/credit';
import { useRequest } from 'ahooks';
import {
  App,
  Avatar,
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
  const { refresh } = useCredit();
  const { skus, totalCount, formData, resetSku } = useCheckout();
  const { message } = App.useApp();
  const [resOpen, setResOpen] = useState(false);
  const router = useRouter();

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

  const { run: doSubmit, loading: submitting } = useRequest(
    async () => {
      const data: ProxyOrderData = {
        package_type: PACKAGE_TYPE_ENUM.ISP,
        days: duration,
        quantity: totalCount,
        client_total_usd: subtotal,
      };
      return await createProxyOrder(data);
    },
    {
      manual: true,
      onSuccess: () => {
        setResOpen(true);
        resetSku();
        refresh();
      },
      onError: (e) => {
        message.error(e.message || t('form.result.error'));
      },
    },
  );

  const onOrderView = () => {
    setResOpen(false);
    router.push('/proxies/static-isp/ip-list');
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
                <Button
                  disabled={submitting}
                  size="small"
                  type="text"
                  onClick={resetSku}
                >
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
                <ul className="space-y-2">
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
                      <span className="font-medium text-orange-500">
                        $
                        {subtotal.toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </li>
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
                <Button
                  loading={submitting}
                  block
                  type="primary"
                  onClick={doSubmit}
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
