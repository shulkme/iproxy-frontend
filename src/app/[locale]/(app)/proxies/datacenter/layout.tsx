import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import { RiExternalLinkLine } from '@remixicon/react';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Static ISP Proxies'} />
      <Navbar
        items={[
          {
            label: 'Pricing',
            key: 'proxies:datacenter:pricing',
            meta: {
              href: '/proxies/datacenter/pricing',
              group: '/proxies/datacenter/pricing',
            },
          },
          {
            label: 'IP List',
            key: 'proxies:datacenter:ip-list',
            meta: {
              href: '/proxies/datacenter/ip-list',
              group: '/proxies/datacenter/ip-list',
            },
          },
          {
            label: 'Statistics',
            key: 'proxies:datacenter:statistics',
            meta: {
              href: '/proxies/datacenter/statistics',
              group: '/proxies/datacenter/statistics',
            },
          },
          {
            label: 'Guide',
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
