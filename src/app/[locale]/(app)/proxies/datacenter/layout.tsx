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
            key: '/proxies/datacenter/pricing',
          },
          {
            label: 'IP List',
            key: '/proxies/datacenter/ip-list',
          },
          {
            label: 'Statistics',
            key: '/proxies/datacenter/statistics',
          },
          {
            label: 'Guide',
            key: 'https://www.baidu.com',
            extra: <RiExternalLinkLine size={14} />,
          },
        ]}
      />
      <div>{children}</div>
    </>
  );
}
