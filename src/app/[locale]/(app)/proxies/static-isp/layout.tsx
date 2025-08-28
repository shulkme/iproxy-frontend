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
            key: 'proxies:static-isp:pricing',
            meta: {
              href: '/proxies/static-isp/pricing',
              group: '/proxies/static-isp/pricing',
            },
          },
          {
            label: 'IP List',
            key: 'proxies:static-isp:ip-list',
            meta: {
              href: '/proxies/static-isp/ip-list',
              group: '/proxies/static-isp/ip-list',
            },
          },
          {
            label: 'Statistics',
            key: 'proxies:static-isp:statistics',
            meta: {
              href: '/proxies/static-isp/statistics',
              group: '/proxies/static-isp/statistics',
            },
          },
          {
            label: 'Guide',
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
