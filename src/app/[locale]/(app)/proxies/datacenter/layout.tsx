'use client';
import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('app.pages.datacenter');
  return (
    <>
      <Title title={t('title')} />
      <Navbar
        items={[
          {
            label: t('menus.pricing'),
            key: 'proxies:datacenter:pricing',
            meta: {
              href: '/proxies/datacenter/pricing',
              group: '/proxies/datacenter/pricing',
            },
          },
          {
            label: t('menus.ip-list'),
            key: 'proxies:datacenter:ip-list',
            meta: {
              href: '/proxies/datacenter/ip-list',
              group: '/proxies/datacenter/ip-list',
            },
          },
          {
            label: t('menus.guide'),
            key: 'proxies:datacenter:guide',
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
