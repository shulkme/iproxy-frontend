'use client';
import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('app.pages.proxy-setting');
  return (
    <>
      <Title title={t('title')} />
      <Navbar
        items={[
          {
            label: t('menus.sub-account'),
            key: 'proxies:settings:sub-account',
            meta: {
              href: '/proxies/settings/sub-account',
              group: '/proxies/settings/sub-account',
            },
          },
          {
            label: t('menus.whitelist'),
            key: 'proxies:settings:whitelist',
            meta: {
              href: '/proxies/settings/whitelist',
              group: '/proxies/settings/whitelist',
            },
          },
        ]}
      />
      <div>{children}</div>
    </>
  );
}
