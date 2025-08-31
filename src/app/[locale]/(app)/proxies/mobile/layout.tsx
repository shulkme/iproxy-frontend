import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Mobile Proxies'} />
      <Navbar
        items={[
          {
            label: 'Pricing',
            key: 'proxies:mobile:pricing',
            meta: {
              href: '/proxies/mobile/pricing',
              group: '/proxies/mobile/pricing',
            },
          },
          {
            label: 'Setup',
            key: 'proxies:mobile:setup',
            meta: {
              href: '/proxies/mobile/setup',
              group: '/proxies/mobile/setup',
            },
          },
          {
            label: 'Statistics',
            key: 'proxies:mobile:statistics',
            meta: {
              href: '/proxies/mobile/statistics',
              group: '/proxies/mobile/statistics',
            },
          },
          {
            label: 'Guide',
            key: 'proxies:mobile:guide',
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
