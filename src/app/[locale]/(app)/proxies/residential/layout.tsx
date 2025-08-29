import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Residential Proxies'} />
      <Navbar
        items={[
          {
            label: 'Pricing',
            key: 'proxies:residential:pricing',
            meta: {
              href: '/proxies/residential/pricing',
              group: '/proxies/residential/pricing',
            },
          },
          {
            label: 'Setup',
            key: 'proxies:residential:setup',
            meta: {
              href: '/proxies/residential/setup',
              group: '/proxies/residential/setup',
            },
          },
          {
            label: 'Statistics',
            key: 'proxies:residential:statistics',
            meta: {
              href: '/proxies/residential/statistics',
              group: '/proxies/residential/statistics',
            },
          },
          {
            label: 'Guide',
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
