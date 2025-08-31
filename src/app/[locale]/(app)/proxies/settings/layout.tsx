import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Proxies Settings'} />
      <Navbar
        items={[
          {
            label: 'Sub Account',
            key: 'proxies:settings:sub-account',
            meta: {
              href: '/proxies/settings/sub-account',
              group: '/proxies/settings/sub-account',
            },
          },
          {
            label: 'Whitelist',
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
