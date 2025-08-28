import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Settings'} />
      <Navbar
        items={[
          {
            label: 'My Account',
            key: 'settings:my-account',
            meta: {
              href: '/settings/my-account',
              group: '/settings/my-account',
            },
          },
          {
            label: 'Subscription',
            key: 'settings:subscription',
            meta: {
              href: '/settings/subscription',
              group: '/settings/subscription',
            },
          },
          {
            label: 'Notifications',
            key: 'settings:notifications',
            meta: {
              href: '/settings/notifications',
              group: '/settings/notifications',
            },
          },
        ]}
      />
      <div className="p-8">{children}</div>
    </>
  );
}
