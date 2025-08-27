import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Static ISP Proxies'} />
      <Navbar
        items={[
          {
            label: 'Checkout',
            key: '/proxies/static-isp/checkout',
          },
          {
            label: 'Extraction',
            key: '/proxies/static-isp/extraction',
          },
          {
            label: 'IP List',
            key: '/proxies/static-isp/ip-list',
          },
        ]}
      />
      <div>{children}</div>
    </>
  );
}
