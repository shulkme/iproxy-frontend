'use client';
import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('app.pages.residential');
  return (
    <>
      <Title title={t('title')} />
      <Navbar
        items={[
          {
            label: t('menus.pricing'),
            key: 'proxies:residential:pricing',
            meta: {
              href: '/proxies/residential/pricing',
              group: '/proxies/residential/pricing',
            },
          },
          {
            label: t('menus.setup'),
            key: 'proxies:residential:setup',
            meta: {
              href: '/proxies/residential/setup',
              group: '/proxies/residential/setup',
            },
          },
          {
            label: t('menus.statistics'),
            key: 'proxies:residential:statistics',
            meta: {
              href: '/proxies/residential/statistics',
              group: '/proxies/residential/statistics',
            },
          },
          {
            label: t('menus.guide'),
            key: 'proxies:residential:guide',
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
