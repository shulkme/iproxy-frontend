import Navbar from '@/app/[locale]/components/navbar';
import { Title } from '@/providers/title';
import React from 'react';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Title title={'Wallet'} />
      <Navbar
        items={[
          {
            label: 'Balance Recharge',
            key: 'wallet:recharge',
            meta: {
              href: '/wallet/recharge',
              group: '/wallet/recharge',
            },
          },
          {
            label: 'Transactions',
            key: 'wallet:transactions',
            meta: {
              href: '/wallet/transactions',
              group: '/wallet/transactions',
            },
          },
        ]}
      />
      <div className="p-8">{children}</div>
    </>
  );
}
