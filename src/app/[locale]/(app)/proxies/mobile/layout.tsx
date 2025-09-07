'use client';
import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('app.pages.mobile');
  return (
    <>
      <Title title={t('title')} />
      <Navbar
        items={[
          {
            label: t('menus.pricing'),
            key: 'proxies:mobile:pricing',
            meta: {
              href: '/proxies/mobile/pricing',
              group: '/proxies/mobile/pricing',
            },
          },
          {
            label: t('menus.setup'),
            key: 'proxies:mobile:setup',
            meta: {
              href: '/proxies/mobile/setup',
              group: '/proxies/mobile/setup',
            },
          },
          {
            label: t('menus.statistics'),
            key: 'proxies:mobile:statistics',
            meta: {
              href: '/proxies/mobile/statistics',
              group: '/proxies/mobile/statistics',
            },
          },
          {
            label: t('menus.guide'),
            key: 'proxies:mobile:guide',
            extra: <RiExternalLinkLine size={14} />,
            meta: {
              href: process.env.NEXT_PUBLIC_DOC_URL + '/proxies/mobile-proxies',
              target: '_blank',
            },
          },
        ]}
      />
      <div>{children}</div>
    </>
  );
}
