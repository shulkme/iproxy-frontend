'use client';
import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('app.pages.static-isp');
  return (
    <>
      <Title title={t('title')} />
      <Navbar
        items={[
          {
            label: t('menus.pricing'),
            key: 'proxies:static-isp:pricing',
            meta: {
              href: '/proxies/static-isp/pricing',
              group: '/proxies/static-isp/pricing',
            },
          },
          {
            label: t('menus.ip-list'),
            key: 'proxies:static-isp:ip-list',
            meta: {
              href: '/proxies/static-isp/ip-list',
              group: '/proxies/static-isp/ip-list',
            },
          },
          // {
          //   label: t('menus.statistics'),
          //   key: 'proxies:static-isp:statistics',
          //   meta: {
          //     href: '/proxies/static-isp/statistics',
          //     group: '/proxies/static-isp/statistics',
          //   },
          // },
          {
            label: t('menus.guide'),
            key: 'proxies:static-isp:guide',
            extra: <RiExternalLinkLine size={14} />,
            meta: {
              href: 'https://www.baidu.com',
              target: '_blank',
            },
          },
        ]}
      />
      <div>{children}</div>
    </>
  );
}
