'use client';
import Detail from '@/app/[locale]/(app)/proxies/datacenter/ip-list/components/detail';
import Statistics from '@/app/[locale]/(app)/proxies/datacenter/ip-list/components/statistics';
import { Alert } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.pages.datacenter.ip-list');
  return (
    <div className="p-4 lg:p-8 space-y-6">
      <Alert
        showIcon
        type="info"
        message={t.rich('banner', {
          link: (chunks) => <a>{chunks}</a>,
        })}
      />
      <Statistics />
      <Detail />
    </div>
  );
}
