'use client';
import Detail from '@/app/[locale]/(app)/proxies/static-isp/ip-list/components/detail';
import Statistics from '@/app/[locale]/(app)/proxies/static-isp/ip-list/components/statistics';
import { Alert } from 'antd';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('app.pages.static-isp.ip-list');
  return (
    <>
      <Alert
        banner
        type="info"
        message={t.rich('banner', {
          link: (chunks) => <a>{chunks}</a>,
        })}
      />
      <div className="p-8 space-y-6">
        <Statistics />
        <Detail />
      </div>
    </>
  );
}
